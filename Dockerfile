# Используем Node.js (лёгкая версия)
FROM node:18-alpine

# Директория внутри контейнера
WORKDIR /app

# Копируем только package.json и package-lock.json
COPY package*.json ./

# Устанавливаем зависимости (только для production)
RUN npm install

# Копируем весь код внутрь контейнера
COPY . .

# Сборка проекта (NestJS компилируется в папку dist)
RUN npm run build

# Запускаем приложение
CMD ["node", "dist/main"]

# Открываем порт 3000
EXPOSE 3000