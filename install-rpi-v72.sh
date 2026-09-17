#!/usr/bin/env bash
set -euo pipefail
APP_DIR="$(cd "$(dirname "$0")" && pwd)"
USER_NAME="${SUDO_USER:-$USER}"
USER_HOME="$(getent passwd "$USER_NAME" | cut -d: -f6)"
NODE_BIN="$(command -v node || true)"

echo "=== Fish POS V72 Raspberry Pi Installer ==="
echo "App: $APP_DIR"
echo "User: $USER_NAME"

sudo apt update
sudo apt install -y nodejs npm chromium curl
cd "$APP_DIR"
npm install --omit=dev
NODE_BIN="$(command -v node)"

# Server starts at boot even before desktop/kiosk.
sudo tee /etc/systemd/system/fish-pos.service >/dev/null <<EOF
[Unit]
Description=Fish POS V72 local server, display bridge and Epson print server
After=network-online.target
Wants=network-online.target

[Service]
Type=simple
User=$USER_NAME
WorkingDirectory=$APP_DIR
ExecStart=$NODE_BIN $APP_DIR/server.js
Restart=always
RestartSec=3
Environment=NODE_ENV=production

[Install]
WantedBy=multi-user.target
EOF
sudo systemctl daemon-reload
sudo systemctl enable --now fish-pos.service

# Customer display kiosk on the Raspberry Pi HDMI screen.
mkdir -p "$USER_HOME/.config/labwc"
AUTOSTART="$USER_HOME/.config/labwc/autostart"
touch "$AUTOSTART"
# Remove older Fish POS kiosk lines so installer is safe to re-run.
sed -i '/# FISH_POS_V72_BEGIN/,/# FISH_POS_V72_END/d' "$AUTOSTART" || true
cat >> "$AUTOSTART" <<'EOF'
# FISH_POS_V72_BEGIN
(sleep 8; chromium http://127.0.0.1:8080/customer.html --kiosk --noerrdialogs --disable-infobars --no-first-run --disable-session-crashed-bubble --start-maximized) &
# FISH_POS_V72_END
EOF
chown -R "$USER_NAME:$USER_NAME" "$USER_HOME/.config/labwc"

# Convenience launcher if kiosk needs to be reopened manually.
cat > "$USER_HOME/start-fish-display.sh" <<'EOF'
#!/usr/bin/env bash
chromium http://127.0.0.1:8080/customer.html --kiosk --noerrdialogs --disable-infobars --no-first-run --disable-session-crashed-bubble --start-maximized
EOF
chmod +x "$USER_HOME/start-fish-display.sh"
chown "$USER_NAME:$USER_NAME" "$USER_HOME/start-fish-display.sh"

echo
echo "=== INSTALL COMPLETE ==="
echo "Server status:"
sudo systemctl --no-pager --full status fish-pos.service || true
echo
echo "Pi IP address:"
hostname -I || true
echo
echo "Next: open http://<PI-IP>:8080/ on iPad, set Epson IP in Owner > จัดการร้าน, then Test Print."
echo "Reboot once to test automatic Customer Display kiosk: sudo reboot"
