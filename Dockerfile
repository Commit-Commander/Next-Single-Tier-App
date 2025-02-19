# 📌 Base Image
# Use a lightweight Node.js image for smaller container size and faster builds.
FROM node:slim

# ───────────────────────────────────────────
# 📂 Set Working Directory
# ───────────────────────────────────────────
# Set the working directory inside the container to `/app`
WORKDIR /app

# ───────────────────────────────────────────
# 📦 Copy Package Files & Install Dependencies
# ───────────────────────────────────────────
# Copy only package.json and package-lock.json (if available)
# This allows Docker to cache dependencies and speed up builds.
COPY package*.json ./

# Install dependencies
RUN npm install

# ───────────────────────────────────────────
# 📜 Copy Application Files
# ───────────────────────────────────────────
# Copy the entire project into the container
COPY . .

# ───────────────────────────────────────────
# 🔧 Build the Application
# ───────────────────────────────────────────
RUN npm run build

# ───────────────────────────────────────────
# 🌍 Expose Port
# ───────────────────────────────────────────
# The application will run on port 3000 inside the container.
EXPOSE 3000

# ───────────────────────────────────────────
# 🚀 Start the Application
# ───────────────────────────────────────────
# Use CMD to specify the default command that runs when the container starts.
CMD ["npm", "run", "start"]