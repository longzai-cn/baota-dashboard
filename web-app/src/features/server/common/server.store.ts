import { useState } from 'react'
import { createGlobalStore } from 'hox'
import { Server } from './server.entity'

export const [useServerStore, getServerStore] = createGlobalStore(() => {
  const [servers, setServers] = useState<Server[]>([])

  function addServer(server: Server) {
    setServers(v => [...v, server])
  }

  function removeServer(server: Server) {
    setServers(v => v.filter(t => t !== server))
  }

  return {
    servers,
    addServer,
    removeServer,
  }
})