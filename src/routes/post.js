import { Router } from 'express'
import {
  create,
  getAll,
  createComment,
  findAllComments,
  findAllPostLikes,
  findAllCommentLikes,
  editComment,
  editPost,
  deletePost,
  updateLike,
  updateCommentLike,
  deletePostComment
} from '../controllers/post.js'
import { validateAuthentication } from '../middleware/auth.js'

const router = Router()

router.post('/', validateAuthentication, create)
router.get('/', validateAuthentication, getAll)
router.patch('/:id', validateAuthentication, editPost)
router.post('/:id/comment', validateAuthentication, createComment)
router.patch('/:id/comment/:commentId', validateAuthentication, editComment)
router.get('/comment', validateAuthentication, findAllComments)
router.delete('/:id', validateAuthentication, deletePost)
router.post('/:id/postLike', validateAuthentication, updateLike)
router.post(
  '/:id/comment/:commentId/commentLike',
  validateAuthentication,
  updateCommentLike
)
router.get('/postLike', validateAuthentication, findAllPostLikes)
router.get('/commentLike', validateAuthentication, findAllCommentLikes)
router.delete(
  '/id:/comment/:commentId',
  validateAuthentication,
  deletePostComment
)

export default router
