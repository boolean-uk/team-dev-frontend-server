import { PrismaClient } from '@prisma/client'
import bcrypt from 'bcrypt'

const prisma = new PrismaClient()

async function seed() {
  const password = await bcrypt.hash('t3ach3r', 8)

  const startDate = new Date(2023, 0, 31)
  const endDate = new Date(startDate.setMonth(startDate.getMonth() + 6))

  const users = []
  const cohorts = []
  const profileImages = [
    'https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1686&q=80',
    'https://images.unsplash.com/photo-1573865526739-10659fec78a5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=830&q=80',
    'https://images.unsplash.com/photo-1526336024174-e58f5cdd8e13?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80',
    'https://images.unsplash.com/photo-1561948955-570b270e7c36?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=601&q=80',
    'https://images.unsplash.com/photo-1494256997604-768d1f608cac?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1829&q=80',
    'https://images.unsplash.com/photo-1574144611937-0df059b5ef3e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=928&q=80',
    'https://images.unsplash.com/photo-1571566882372-1598d88abd90?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80',
    'https://images.unsplash.com/photo-1506891536236-3e07892564b7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=776&q=80',
    'https://images.unsplash.com/photo-1511275539165-cc46b1ee89bf?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80',
    'https://images.unsplash.com/photo-1572252821143-035a024857ac?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=772&q=80'
  ]

  const teacherUser = await prisma.user.create({
    data: {
      email: 'teacher@teacher.com',
      password,
      role: 'TEACHER'
    }
  })

  const teacherProfile = await prisma.profile.create({
    data: {
      userId: teacherUser.id,
      firstName: 'Teacher',
      lastName: 'Boolean',
      bio: `If dinosaurs are so great how come more sweeties are based on aliens?`,
      profileUrl:
        'https://images.unsplash.com/photo-1614027164847-1b28cfe1df60?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=972&q=80'
    }
  })

  for (let i = 1; i <= 9; i++) {
    if (i <= 3) {
      const cohort = await prisma.cohort.create({
        data: {
          cohortName: `Cohort ${i}`,
          startDate: startDate,
          endDate: endDate
        }
      })
      cohorts.push(cohort)
    }

    try {
      const user = await prisma.user.create({
        data: {
          email: `test${i}@test.com`,
          password,
          cohortId: cohorts[0].id,
          profile: {
            create: {
              firstName: `name${i}`,
              lastName: `surname${i}`,
              bio: `Here i am, coding like a hurricane`,
              profileUrl: profileImages[i]
            }
          }
        }
      })
      users.push(user)
    } catch (err) {}
  }

  const createdUser = await prisma.user.create({
    data: {
      email: 'notmyrealemail@email.com',
      password,
      cohortId: cohorts[2].id,
      role: 'STUDENT'
    }
  })

  const userProfile = await prisma.profile.create({
    data: {
      userId: createdUser.id,
      firstName: 'Test',
      lastName: 'Test',
      profileUrl:
        'https://images.unsplash.com/photo-1542652735873-fb2825bac6e2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80'
    }
  })

  const adminUser = await prisma.user.create({
    data: {
      email: 'admin@admin.com',
      password,
      role: 'TEACHER'
    }
  })

  const adminProfile = await prisma.profile.create({
    data: {
      userId: adminUser.id,
      firstName: 'Admin',
      lastName: 'Boolean',
      profileUrl:
        'https://images.takeshape.io/86ce9525-f5f2-4e97-81ba-54e8ce933da7/dev/2a6f37ce-a2f9-4f31-a854-b38c4412baac/819%20sand%20cat%20WC%20Cle%CC%81ment%20Bardot.jpeg?auto=compress%2Cformat&w=1200'
    }
  })

  users.push(createdUser, adminUser, teacherUser)

  console.log(cohorts, users, userProfile, teacherProfile, adminProfile)

  const createdPost = await prisma.post.create({
    data: {
      content: "I'm losing my patience creating a DB",
      userId: createdUser.id
    }
  })

  const posts = []
  const content = [
    'Give me a break!',
    'Woah! Next week they are going to shuffle the groups!',
    "Is it a problem if I'm using normal HTML tags instead of MUI?",
    'In love with MUI!'
  ]

  for (let i = 0; i < content.length; i++) {
    const post = await prisma.post.create({
      data: {
        content: content[i],
        userId: users[i].id
      }
    })

    posts.push(post)
  }

  const teacherPost = await prisma.post.create({
    data: {
      content: 'These students are totally awesome!',
      userId: teacherUser.id
    }
  })

  const teacherSecondPost = await prisma.post.create({
    data: {
      content: 'Please always do a git pull!',
      userId: teacherUser.id
    }
  })

  console.log('posts created', posts, teacherPost, teacherSecondPost)

  const likes = []

  for (let i = 0; i <= 9; i++) {
    const like = await prisma.postLike.create({
      data: {
        userId: users[i].id,
        postId: teacherPost.id
      }
    })

    likes.push(like)
  }

  console.log('likes created', likes)

  const createdComments = await prisma.postComment.createMany({
    data: [
      {
        content: 'I really like it!',
        userId: createdUser.id,
        postId: createdPost.id,
        profileId: createdUser.id
      },
      {
        content: 'Yeah, its really interestng',
        userId: createdUser.id,
        postId: createdPost.id,
        profileId: createdUser.id
      },
      {
        content: 'Glad you like it!',
        userId: createdUser.id,
        postId: createdPost.id,
        profileId: adminUser.id
      },
      {
        content: 'You guys are great!',
        userId: createdUser.id,
        postId: createdPost.id,
        profileId: adminUser.id
      }
    ]
  })
  console.log('created comments', { createdComments })

  const createFirstComment = await prisma.postComment.create({
    data: {
      content: 'Hi there',
      userId: createdUser.id,
      postId: createdPost.id,
      profileId: createdUser.id
    }
  })
  console.log('first comment', createFirstComment)

  await prisma.exercise.createMany({
    data: [
      {
        exerciseName: 'HTML Scientific Paper',
        githubUrl: 'https://github.com/boolean-uk/html-scientific-paper'
      },
      {
        exerciseName: 'Authentication Challenge',
        githubUrl: 'https://github.com/boolean-uk/auth-challenge'
      }
    ]
  })
}

seed().catch(async (error) => {
  console.error(error)
  await prisma.$disconnect()
  process.exit(1)
})
