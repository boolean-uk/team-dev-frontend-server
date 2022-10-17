import { Router } from 'express'
import {
  createConversation,
  findAllConversationsByUserId
} from '../controllers/conversation.js'
import { validateAuthentication } from '../middleware/auth.js'

const router = Router()

router.get('/', validateAuthentication, findAllConversationsByUserId)
router.post('/', validateAuthentication, createConversation)

export default router
