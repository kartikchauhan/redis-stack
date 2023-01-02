import { Entity } from "redis-om"

class Studio extends Entity { }

const studioSchema = new Schema(Studio, {
    name: { type: 'string' },
    city: { type: 'string' },
    state: { type: 'string' },
    location: { type:  'point' },
    established: { type: 'date' }
})