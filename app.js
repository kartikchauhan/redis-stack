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

const albumId = await albumRepository.save(album)

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
    JSON.DEL Album:01GNT20V49X9EZJNNPVHKA3ZEK => (integer) 1
 */

// console.log(album.entityId) // 01GNT1AQ852JB17MSSQQ9K6G0Z
// console.log(albumId) // 01GNT1AQ852JB17MSSQQ9K6G0Z

const studio = studioRepository.createEntity({
    name: "Bad Racket Recording Studio",
    city: "Cleveland",
    state: "Ohio",
    location: { longitude: -81.6764187, latitude: 41.5080462 },
    established: new Date('2010-12-27')
})

/**
 * Meta Info
 * JSON.GET Studio:01GNT20V4KETCAWDNNVMJA50E5 location => "\"-81.6764187,41.5080462\""
 * JSON.GET Studio:01GNT20V4KETCAWDNNVMJA50E5 established => "1293408000"
 */

const studioId = await studioRepository.save(studio)

// console.log(studioId); // 01GNT20V4KETCAWDNNVMJA50E5

await client.close()