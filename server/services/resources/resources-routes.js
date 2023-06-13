import express from 'express';
import ResourcesController from '../../controllers/resources-controller.js'

const router = express.Router();

const resourceController = new ResourcesController()

router.get('/', async (req, res) => {
    const resources = await resourceController.getResources()
    res.send(resources)
})

router.get('/:id', async (req, res) => {
    const resourceId = req.params.id
    const resource = await resourceController.getResource(resourceId)
    res.send(resource)
})

router.post('/update/', async (req, res) => {
    const updatedResourceData = {
    }
    await resourceController.updateResource(updatedResourceData)
})

export default router