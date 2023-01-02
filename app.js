import { Client } from 'redis-om'

import { albumSchema, studioSchema } from './Entity/index.js'

const client = new Client()
await client.open('redis://localhost:6379')

const albumRepository = client.fetchRepository(albumSchema)
const studioRepository = client.fetchRepository(studioSchema)

const album = albumRepository.createEntity()
album.artist = 'Linkin Park'
album.title = 'Living Things'
album.year = 2012
album.genres = ['Alternative rock', 'Alternative/Indie', 'Metal']
album.multipleArtists = true

const id = await albumRepository.save(album)

/**
 * Meta Info
 * TYPE Album:01GNT1AQ852JB17MSSQQ9K6G0Z => ReJSON-RL
 * JSON.OBJLEN Album:01GNT1AQ852JB17MSSQQ9K6G0Z => (integer) 5
 * JSON.OBJKEYS Album:01GNT1AQ852JB17MSSQQ9K6G0Z =>
 *  1) "artist"
    2) "title"
    3) "year"
    4) "genres"
    5) "multipleArtists"
    JSON.GET Album:01GNT1AQ852JB17MSSQQ9K6G0Z artist => "\"Linkin Park\""
 */
// console.log(album.entityId) // 01GNT1AQ852JB17MSSQQ9K6G0Z
// console.log(id) // 01GNT1AQ852JB17MSSQQ9K6G0Z

await client.close()