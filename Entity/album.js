import { Entity } from "redis-om"

class Album extends Entity { }

const albumSchema = new Schema(Album, {
    artist: { type: 'string' },
    title: { type: 'text' },
    year: { type: 'number' },
    genres: { type: 'string[]' },
    outOfPublication: { type: 'boolean' }
})

export default Album