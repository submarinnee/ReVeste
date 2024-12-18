import express from 'express'

const router = express.Router()

router.delete('/:codigo', roupaController.deleteRoupa);

export default router;