import { Client } from 'redis-om'

import albumUtil from './utils/album.js'
import artistUtil from './utils/artist.js'
import studioUtil from './utils/studio.js'

const client = new Client()
await client.open('redis://localhost:6379')


async function exec() {
    try {

        // albumUtil.create(client)

        // studioUtil.create(client)

        // const artistId = await artistUtil.create(client)

        // const artist = await artistUtil.fetch(client, artistId)

        // console.log(artist)

        await artistUtil.createIndex(client)

        await artistUtil.search(client)
    } catch (err) {
        console.log('Error', err)
    } finally {
        await client.close()
    }
}

exec()


