#!/usr/bin/env bash
set -e
USER_NAME="${SUDO_USER:-$USER}"
USER_HOME="$(getent passwd "$USER_NAME" | cut -d: -f6)"
sudo systemctl disable --now fish-pos.service 2>/dev/null || true
sudo rm -f /etc/systemd/system/fish-pos.service
sudo systemctl daemon-reload
if [ -f "$USER_HOME/.config/labwc/autostart" ]; then
  sed -i '/# FISH_POS_V72_BEGIN/,/# FISH_POS_V72_END/d' "$USER_HOME/.config/labwc/autostart"
fi
echo "Removed V72 autostart/service. POS files were NOT deleted."
