import { sendDataResponse } from '../utils/responses.js'
import Post from '../domain/post.js'
import PostComment from '../domain/postComment.js'
import PostLike from '../domain/postLike.js'
import CommentLike from '../domain/commentLike.js'

export const create = async (req, res) => {
  const { content } = req.body

  try {
    if (!content) {
      throw new Error('Please provide content')
    }
    const postToCreate = await Post.fromJson(req.body)
    postToCreate.userId = req.user.id

    const post = await postToCreate.save()
    return sendDataResponse(res, 201, post)
  } catch (err) {
    return sendDataResponse(res, 400, { err: err.message })
  }
}

export const editPost = async (req, res) => {
  const { id } = req.params
  try {
    const postToEdit = await Post.fromJson(req.body)
    postToEdit.id = Number(id)
    const post = await postToEdit.update()
    return sendDataResponse(res, 201, post)
  } catch (err) {
    return sendDataResponse(res, 400, { err: err.message })
  }
}

export const editComment = async (req, res) => {
  const { commentId } = req.params
  try {
    const commentToEdit = await PostComment.fromJson(req.body)
    commentToEdit.id = Number(commentId)
    const comment = await commentToEdit.update()
    return sendDataResponse(res, 201, comment)
  } catch (err) {
    return sendDataResponse(res, 400, { err: err.message })
  }
}

export const createComment = async (req, res) => {
  const { id } = req.params
  const { content } = req.body

  // console.log('got comment', content)

  if (!content) {
    return sendDataResponse(res, 400, { err: 'Must provide content' })
  }
  try {
    const commentToCreate = await PostComment.fromJson(req.body)
    commentToCreate.userId = req.user.id
    commentToCreate.profileId = req.user.id
    commentToCreate.postId = Number(id)
    const comment = await commentToCreate.save()
    return sendDataResponse(res, 201, comment)
  } catch (err) {
    return sendDataResponse(res, 400, { err: err.message })
  }
}

export const findAllComments = async (req, res) => {
  try {
    const comment = await PostComment.findAll()
    if (comment.length === 0) {
      throw new Error(`Comments not found`)
    }
    const data = { comment }
    return sendDataResponse(res, 201, data)
  } catch (err) {
    return sendDataResponse(res, 400, { err: err.message })
  }
}

export const findAllPostLikes = async (req, res) => {
  try {
    const postLikes = await PostLike.findAll()
    if (postLikes.length === 0) {
      throw new Error(`Post Likes not found`)
    }
    const data = { postLikes }
    return sendDataResponse(res, 201, data)
  } catch (err) {
    return sendDataResponse(res, 400, { err: err.message })
  }
}

export const findAllCommentLikes = async (req, res) => {
  try {
    const commentLikes = await CommentLike.findAll()
    if (commentLikes.length === 0) {
      throw new Error(`Comment Likes not found`)
    }
    const data = { commentLikes }
    return sendDataResponse(res, 201, data)
  } catch (err) {
    return sendDataResponse(res, 400, { err: err.message })
  }
}

export const getAll = async (req, res) => {
  try {
    const posts = await Post.findAll()
    if (posts.length === 0) {
      throw new Error(`Posts not found`)
    }
    const data = { posts }
    return sendDataResponse(res, 200, data)
  } catch (err) {
    return sendDataResponse(res, 400, { err: err.message })
  }
}

export const deletePost = async (req, res) => {
  const postId = +req.params.id
  try {
    if (!postId) throw new Error('The ID you have provided is incorrect')
    const data = await Post.delete(postId)
    return sendDataResponse(res, 200, data)
  } catch (err) {
    return sendDataResponse(res, 400, { err: err.message })
  }
}

export const updateLike = async (req, res) => {
  const userId = req.user.id
  const postId = Number(req.params.id)
  const { active, postLikeId } = req.body

  try {
    if (!postId) throw new Error('The ID you have provided is incorrect')
    const updateLike = await PostLike.fromJson(
      active,
      Number(userId),
      postId,
      Number(postLikeId)
    )
    const newLike = await updateLike.upsertLike()
    return sendDataResponse(res, 200, newLike)
  } catch (err) {
    return sendDataResponse(res, 400, { err: err.message })
  }
}

export const updateCommentLike = async (req, res) => {
  const userId = req.user.id
  const postId = Number(req.params.id)
  const commentId = Number(req.params.commentId)
  const { active, commentLikeId } = req.body

  try {
    if (!postId) throw new Error('The ID you have provided is incorrect')
    const updateLike = await CommentLike.fromJson(
      active,
      Number(userId),
      postId,
      commentId,
      Number(commentLikeId)
    )
    const newLike = await updateLike.upsertLike()
    return sendDataResponse(res, 200, newLike)
  } catch (err) {
    return sendDataResponse(res, 400, { err: err.message })
  }
}

export const deletePostComment = async (req, res) => {
  const { commentId } = req.params
  try {
    if (!commentId) throw new Error('The commentId you provided is incorrect')
    const deletedComment = await PostComment.delete(Number(commentId))
    return sendDataResponse(res, 200, deletedComment)
  } catch (err) {
    return sendDataResponse(res, 400, { err: err.message })
  }
}
