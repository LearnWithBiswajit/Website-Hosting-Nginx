#!/bin/bash

# Get the host IP (excluding localhost)
HOST_IP=$(hostname -I | awk '{print $1}')

# Check if HOST_IP was found
if [ -z "$HOST_IP" ]; then
  echo "Error: Could not determine host IP."
  exit 1
fi

# Write to .env file
echo "HOST_IP=$HOST_IP" > .env
echo "Using HOST_IP=$HOST_IP"

# Run Docker Compose with project name 'monster'
docker-compose -p monster up -d
