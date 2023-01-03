import { Entity, Schema } from "redis-om"

class Artist extends Entity { }

const artistSchema = new Schema(Artist, {
    name: { type: 'string' },
    isInBand: { type: 'boolean' },
    popularAlbums: { type: 'string[]' },
    wiki: { type: 'text' }
}, {
    dataStructure: 'HASH'
})

export { artistSchema }