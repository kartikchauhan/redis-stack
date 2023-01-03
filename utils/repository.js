export default class RepositoryUtil {
    getRepository (client, schema) {
        return client.fetchRepository(schema)
    }
}
