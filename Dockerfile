# Usa una imagen ligera de Node.js compatible con tu versión local
FROM node:22-alpine

# Establece el directorio de trabajo en el contenedor
WORKDIR /app

# Copia los archivos de definición de dependencias
COPY package*.json ./

# Instala las dependencias
RUN npm install

# Copia el resto del código fuente
COPY . .

# Expone el puerto en el que corre la app (asegúrate que coincida con process.env.PORT)
EXPOSE 3000

# Comando por defecto para iniciar la app
CMD ["npm", "start"]
