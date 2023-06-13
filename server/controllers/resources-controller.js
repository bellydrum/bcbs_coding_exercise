import ResourceService from '../services/resources/resources-service.js';

const resourceService = new ResourceService()

export default class ResourcesController {
    async getResources() {
        return resourceService.getResources()
    }

    async getResource(resourceId) {
        return resourceService.getResource(resourceId)
    }

    async updateResource(updatedResourceData) {
        return resourceService.updateResource(updatedResourceData)
    }
}