# 1. Use oca Node.js mage as the base
FROM node:lts
# 2. Set wokng dectoy n contane
WORKDIR /app
# 3. Copy package.json and nsta dependences
COPY package.json ./
RUN npm install
# 4. Copy souce code
COPY . .
# 5. Expose pot (adjust based on you app)
EXPOSE 3001
# 6. Command to un you app
CMD ["node", "app.js"]