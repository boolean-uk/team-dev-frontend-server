import dbClient from '../utils/dbClient.js'

export default class PostComment {
  static fromDb(comment) {
    return new PostComment(
      comment.content,
      comment.userId,
      comment.id,
      comment.createdAt,
      comment.profileId,
      comment.postId,
      comment.updatedAt,
      comment.profile
    )
  }

  static async fromJson(json) {
    const { content } = json
    return new PostComment(content)
  }

  constructor(
    content,
    userId,
    id,
    createdAt,
    profileId,
    postId,
    updatedAt,
    profile
  ) {
    this.userId = userId
    this.content = content
    this.id = id
    this.createdAt = createdAt
    this.profileId = profileId
    this.postId = postId
    this.updatedAt = updatedAt
    this.profile = profile
  }

  async save() {
    const createdComment = await dbClient.postComment.create({
      data: {
        content: this.content,
        userId: this.userId,
        profileId: this.profileId,
        postId: this.postId
      },
      include: { profile: true }
    })

    createdComment.profile = {
      firstName: createdComment.profile.firstName,
      lastName: createdComment.profile.lastName
    }
    return PostComment.fromDb(createdComment)
  }

  async update() {
    const updatedComment = await dbClient.postComment.update({
      where: {
        id: this.id
      },
      data: {
        content: this.content
      }
    })
    return PostComment.fromDb(updatedComment)
  }

  static async findAll() {
    return PostComment._findMany()
  }

  static async _findMany() {
    const foundComments = await dbClient.postComment.findMany({
      include: { profile: true }
    })

    return foundComments.map((comment) => {
      comment.profile = {
        firstName: comment.profile.firstName,
        lastName: comment.profile.lastName
      }
      return PostComment.fromDb(comment)
    })
  }

  static async delete(id) {
    await dbClient.postComment.delete({ where: { id: id } })
  }
}
