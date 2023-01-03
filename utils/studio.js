import { studioSchema } from '../Entity/index.js'
import RepositoryUtil from './repository.js'

class StudioUtil extends RepositoryUtil {

    async create(client) {
        /**
         * Meta Info
         * JSON.GET Studio:01GNT20V4KETCAWDNNVMJA50E5 location => "\"-81.6764187,41.5080462\""
         * JSON.GET Studio:01GNT20V4KETCAWDNNVMJA50E5 established => "1293408000"
         */
        const studioRepository = this.getRepository(client, studioSchema)

        const studio = studioRepository.createEntity({
            name: "Bad Racket Recording Studio",
            city: "Cleveland",
            state: "Ohio",
            location: { longitude: -81.6764187, latitude: 41.5080462 },
            established: new Date('2010-12-27')
        })

        const studioId = await studioRepository.save(studio)
        
        console.log(studioId); // 01GNT20V4KETCAWDNNVMJA50E5
    }
}

export default new StudioUtil()