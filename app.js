import { Client, Entity } from 'redis-om'

const client = new Client()
await client.open('redis://localhost:6379')

const aString = await client.execute(['PING'])
// 'PONG'

const aNumber = await client.execute(['HSET', 'foo', 'bar', 'baz', 'qux', 42])
// 2

const anArray = await client.execute(['HGETALL', 'foo'])
// [ 'bar', 'baz', 'qux', '42' ]
console.log(anArray)

await client.close()