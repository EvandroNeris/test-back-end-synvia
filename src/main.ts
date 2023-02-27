import Server from './interfaces/http/express/server'

const start = () => {
  const server = new Server()
  server.start()
}

start()