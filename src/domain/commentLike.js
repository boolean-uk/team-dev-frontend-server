import dbClient from '../utils/dbClient.js'

export default class CommentLike {
  static fromDb(commentLike) {
    return new CommentLike(
      commentLike.active,
      commentLike.userId,
      commentLike.postId,
      commentLike.commentId,
      commentLike.id,
      commentLike.createdAt,
      commentLike.updatedAt
    )
  }

  static async fromJson(active, userId, postId, commentId, CommentLikeId) {
    return new CommentLike(active, userId, postId, commentId, CommentLikeId)
  }

  constructor(active, userId, postId, commentId, createdAt, updatedAt) {
    this.active = active
    this.userId = userId
    this.postId = postId
    this.commentId = commentId
    this.createdAt = createdAt
    this.updatedAt = updatedAt
  }

  async upsertLike() {
    if (!this.userId && !this.commentId) {
      const createLike = await dbClient.commentLike.create({
        data: {
          userId: this.userId,
          commentId: this.commentId,
          active: true
        }
      })
      return CommentLike.fromDb(createLike)
    } else {
      const updatedLike = await dbClient.commentLike.update({
        where: {
          userId_commentId: {
            commentId: this.commentId,
            userId: this.userId
          }
        },
        data: {
          active: this.active
        }
      })

      return CommentLike.fromDb(updatedLike)
    }
  }

  static async findAll() {
    return CommentLike._findMany()
  }

  static async _findMany() {
    const foundCommentLikes = await dbClient.commentLike.findMany({
      orderBy: { createdAt: 'desc' }
    })
    return foundCommentLikes.map((commentLike) =>
      CommentLike.fromDb(commentLike)
    )
  }
}
