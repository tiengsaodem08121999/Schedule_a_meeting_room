# Sử dụng Node.js phiên bản 22.9.0 làm base image
FROM node:22.9.0

# Thiết lập thư mục làm việc trong container
WORKDIR /app

# Copy package.json và package-lock.json (nếu có) vào container
COPY package*.json ./

# Cài đặt các dependencies
RUN npm install

# Copy toàn bộ mã nguồn và file .env vào container
COPY . .
COPY .env .env

# Mở cổng từ file .env (tạm thời hardcode port để Docker EXPOSE)
EXPOSE 3000

# Sử dụng pm2 hoặc nodemon để tự động lấy biến môi trường và chạy server
CMD ["npm", "start"]
