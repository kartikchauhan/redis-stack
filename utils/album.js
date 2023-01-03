import { albumSchema } from '../Entity/index.js'

import RepositoryUtil from './repository.js'

class AlbumUtil extends RepositoryUtil {
    constructor() {
        super()
    }

    async create(client) {
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

        const albumRepository = this.getRepository(client, albumSchema)

        const album = albumRepository.createEntity()
        album.artist = 'Linkin Park'
        album.title = 'Living Things'
        album.year = 2012
        album.genres = ['Alternative rock', 'Alternative/Indie', 'Metal']
        album.multipleArtists = true

        const albumId = await albumRepository.save(album)

        console.log(album.entityId) // 01GNT1AQ852JB17MSSQQ9K6G0Z
        console.log(albumId) // 01GNT1AQ852JB17MSSQQ9K6G0Z
    }

    async get(client) {
        const albumRepository = client.fetchRepository(albumSchema)
    }
}

export default new AlbumUtil()

