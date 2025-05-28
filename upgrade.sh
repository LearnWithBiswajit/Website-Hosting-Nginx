#!/bin/bash

set -e

echo "Starting Ubuntu upgrade to the latest LTS..."

# Ensure script is run as root
if [ "$EUID" -ne 0 ]; then
  echo "Please run this script as root (use sudo)"
  exit 1
fi

# Update and upgrade current system
apt update && apt -y upgrade && apt -y dist-upgrade

# Install required tool
apt install -y update-manager-core

# Set the release upgrader to LTS only
sed -i 's/^Prompt=.*/Prompt=lts/' /etc/update-manager/release-upgrades

# Run the release upgrade in non-interactive mode
DEBIAN_FRONTEND=noninteractive \
    do-release-upgrade -f DistUpgradeViewNonInteractive -d

echo "Upgrade started. Please wait until it completes."
