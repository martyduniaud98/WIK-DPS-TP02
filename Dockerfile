FROM ubuntu:18.04
WORKDIR /app
RUN useradd -m nodeUser
RUN chown -R nodeUser:nodeUser /app
RUN apt update && apt install -y nodejs npm && apt clean
COPY package*.json ./
EXPOSE 2000
COPY . .
USER nodeUser
CMD ["node", "build/index.js"]
