import { artistSchema } from '../entity/index.js'
import RepositoryUtil from './repository.js'

class ArtistUtil extends RepositoryUtil {

    async create(client) {
        const artistRepository = this.getRepository(client, artistSchema)

        const artist = await artistRepository.createAndSave({
            name: 'Chester Bennington',
            isInBand: true,
            popularAlbums: [ 'Meteora', 'Living Things', 'Hybrid Theory', 'Amends', 'One More Light' ],
            wiki: `Chester Charles Bennington (March 20, 1976 – July 20, 2017) was an American singer and songwriter who was best known as the lead vocalist of rock band Linkin Park. He was also the lead vocalist of the bands Grey Daze, Dead by Sunrise, and Stone Temple Pilots.`
        })
        
        return artist.entityId
    }

    async fetch(client, id) {
        const artistRepository = this.getRepository(client, artistSchema)

        return artistRepository.fetch(id)
    }

    async search(client) {
        const artistRepository = this.getRepository(client, artistSchema)

        const result = await artistRepository.search()
            .where('name').equals('Mike Shinoda')
            .return
            .all()

        console.log('\n--- result', JSON.stringify(result, null, 4));
        console.log('\n');
    }

    async createIndex(client) {
        const artistRepository = this.getRepository(client, artistSchema)

        await artistRepository.createIndex()
    }
}

export default new ArtistUtil()