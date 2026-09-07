# PSA Grader Pro - AI-powered PSA card grading tool
FROM node:18-alpine

# Create app directory
WORKDIR /app

# Install dependencies first (leverages Docker layer caching)
COPY package*.json ./
RUN npm install --omit=dev

# Copy the rest of the application source
COPY . .

# The server listens on PORT (defaults to 3000)
ENV PORT=3000
EXPOSE 3000

# Run as a non-root user for better security
USER node

CMD ["npm", "start"]
