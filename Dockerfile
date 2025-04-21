# Etapa 1: Builder (para aprovechar el cache)
FROM node:22-alpine 

# Establece el directorio de trabajo
WORKDIR /app

# Copia solo los archivos necesarios para instalar dependencias primero (mejor cache)
COPY package*.json ./

# Instala dependencias
RUN npm install

# Copia el resto del proyecto
COPY . .

# Genera el Prisma Client (usando el schema y las variables del .env si las necesita)
RUN npx prisma generate

# CMD npx prisma migrate deploy && npm run prisma:seed && npm run start

# Expone el puerto que usa Express (ajústalo si usas otro)
EXPOSE 3000

# Comando para iniciar la app
CMD ["npm", "start"]
