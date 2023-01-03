import { Client } from 'redis-om'

import albumUtil from './utils/album.js'
import artistutil from './utils/artist.js'
import studioUtil from './utils/studio.js'

const client = new Client()
await client.open('redis://localhost:6379')


async function exec() {
    // albumUtil.create(client)

    // studioUtil.create(client)

    const artistId = await artistutil.create(client)

    const artist = await artistutil.fetch(client, artistId)

    console.log(artist)
    
    await client.close()
}

exec()


