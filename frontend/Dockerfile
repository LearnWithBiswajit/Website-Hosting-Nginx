# Use an Nginx base image
FROM nginx:alpine

# Copy all website files to the Nginx HTML directory
COPY . /usr/share/nginx/html/

COPY docker-entrypoint.sh /entrypoint.sh

ARG BASE_API_URL
ENV BASE_API_URL=$BASE_API_URL

RUN chmod +x /entrypoint.sh

ENTRYPOINT ["/entrypoint.sh"]

# Expose port 80
EXPOSE 80

# Start Nginx
# CMD ["nginx", "-g", "daemon off;"]
