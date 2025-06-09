FROM node:22-alpine AS builder

WORKDIR /app

COPY package*.json ./
RUN npm install

COPY . .

# Genera el cliente de Prisma una vez
RUN npx prisma generate

# Imagen final
FROM node:22-alpine
WORKDIR /app

# Copiar solo lo necesario
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/package*.json ./
COPY --from=builder /app/src ./src
COPY --from=builder /app/prisma ./prisma
COPY --from=builder /app/keycloak.json ./keycloak.json

# No intentes copiar .prisma ni dist/
# Es para modo desarrollo con ts-node

EXPOSE 3000
CMD ["npm", "run", "dev"]
