#!/bin/sh

echo "Injecting BASE_API_URL: ${BASE_API_URL}"

echo "Replacing __BASE_API_URL__ in JS files with ${BASE_API_URL}..."

# Inject runtime BASE_API_URL into a JS file
echo "window.BASE_API_URL='${BASE_API_URL}';" > /usr/share/nginx/html/config.js

# Start NGINX
exec nginx -g 'daemon off;'

