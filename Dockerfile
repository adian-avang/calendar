# Utilizas la imagen base de Node 18
FROM node:18

# Estableces el directorio de trabajo
WORKDIR /usr/src/app

# Copias el package.json y package-lock.json (si existe)
COPY package*.json ./

# Instalas las dependencias de node
RUN npm install

# Copias el resto de los archivos de tu proyecto
COPY . .

# Construyes tu aplicación
RUN npm run build

# Expones el puerto 3000
EXPOSE 3000

# Defines el comando para ejecutar tu aplicación
CMD [ "npm", "start" ]