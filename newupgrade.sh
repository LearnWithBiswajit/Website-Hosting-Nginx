#!/bin/bash

set -e

UPGRADE_FLAG="/var/log/auto-upgrade-in-progress"

echo "Starting Ubuntu automated LTS upgrade..."

# Must run as root
if [ "$EUID" -ne 0 ]; then
  echo "Please run as root"
  exit 1
fi

# First run: upgrade packages and check if reboot is needed
if [ ! -f "$UPGRADE_FLAG" ]; then
  echo "Step 1: Update and upgrade current system"
  apt update && apt -y upgrade && apt -y dist-upgrade
  apt install -y update-manager-core

  # Set to upgrade to LTS versions only
  sed -i 's/^Prompt=.*/Prompt=lts/' /etc/update-manager/release-upgrades

  # Check if reboot is needed
  if [ -f /var/run/reboot-required ]; then
    echo "Reboot is required. Rebooting now..."
    touch "$UPGRADE_FLAG"
    reboot
    exit 0
  fi
fi

# Step 2: Post-reboot — proceed with the upgrade
if [ -f "$UPGRADE_FLAG" ]; then
  echo "Step 2: Resuming LTS upgrade after reboot..."
  rm -f "$UPGRADE_FLAG"
  DEBIAN_FRONTEND=noninteractive \
    do-release-upgrade -f DistUpgradeViewNonInteractive -d
  echo "Upgrade complete. Rebooting in 30 seconds..."
  sleep 30
  reboot
fi
