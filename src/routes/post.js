import { Router } from 'express'
import {
  create,
  getAll,
  createComment,
  findAllComments,
  editComment,
  editPost,
  deletePost,
  updateLike
} from '../controllers/post.js'
import { validateAuthentication } from '../middleware/auth.js'

const router = Router()

router.post('/', validateAuthentication, create)
router.get('/', validateAuthentication, getAll)
router.patch('/:id', validateAuthentication, editPost)
router.post('/:id/comment', validateAuthentication, createComment)
router.patch('/:id/comment/:commentId', validateAuthentication, editComment)
router.get('/comment', validateAuthentication, findAllComments)
router.delete('/posts/:id', validateAuthentication, deletePost)
router.post('/:id/postLike', validateAuthentication, updateLike)

export default router
