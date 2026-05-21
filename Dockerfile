# Stage 1: Build Angular app
FROM node:20-alpine AS build

WORKDIR /app

# Copy package files first (better caching)
COPY package*.json ./

RUN npm install

# Copy rest of the app
COPY . .

# use local Angular via npx
RUN npx ng build --configuration production


# Stage 2: Serve with Nginx
FROM nginx:stable-alpine

# Remove default nginx website
RUN rm -rf /usr/share/nginx/html/*

# Copy Angular build output to nginx
COPY --from=build /app/dist/idl-app/browser/ /usr/share/nginx/html/
# Expose port 80
EXPOSE 80

# Start nginx
CMD ["nginx", "-g", "daemon off;"]


COPY nginx.conf /etc/nginx/conf.d/default.conf
