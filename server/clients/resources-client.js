import ReqResClient from "./reqres-client.js";

export default class ResourcesClient extends ReqResClient {
    async getResources() {
        return this.get('resources')
    }

    async getResource(resourceId) {
        return this.get(`resources/${resourceId}`)
    }

    async updateResource(updatedResourceData) {
        return this.post(`resources/${resourceId}`, updatedResourceData)
    }
}