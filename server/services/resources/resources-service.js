import ResourceClient from '../../clients/resources-client.js'

const resourceClient = new ResourceClient()

export default class ResourceService {
    async getResources() {
        return resourceClient.getResources()
    }

    async getResource(resourceId) {
        return resourceClient.getResource(resourceId)
    }

    async updateResource(resourceId) {
        return resourceClient.updateResource(resourceId)
    }
}