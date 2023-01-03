import { Client } from 'redis-om'

import albumUtil from './utils/album.js'
import studioUtil from './utils/studio.js'

const client = new Client()
await client.open('redis://localhost:6379')

albumUtil.create(client)
studioUtil.create(client)

await client.close()