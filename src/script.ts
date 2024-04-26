// 1
import { PrismaClient } from '@prisma/client'
import { User } from './resolvers/Query';
 
// 2
const prisma = new PrismaClient()
 
// 3
async function main() {
    const newUser1 = await prisma.user.create({
        data: {
          name: 'Alice',
          email: 'alice@example.com',
          role: 'USER',
          cvs: {
            create: [
              {
                name: 'Alice CV',
                age: 30,
                skills: {
                  create: [
                    {
                      designation: 'JavaScript',
                    },
                    {
                      designation: 'TypeScript',
                    },
                  ],
                },
              },
            ],
          },
        },
      });
      const newUser2 = await prisma.user.create({
        data: {
          name: 'Sabaa',
          email: 'sabaa@example.com',
          role: 'USER',
          cvs: {
            create: [
              {
                name: 'sabaa CV',
                age: 22,
                skills: {
                  create: [
                    {
                      designation: 'JavaScript',
                    },
                    {
                      designation: 'TypeScript',
                    },
                  ],
                },
              },
            ],
          },
        },
      });
  const allLinks = await prisma.user.findMany(
    {
        include: {
            cvs: {
                include: {
                    skills: true
                }
            }
        }
    }
  )
  console.log(allLinks)
}
 
// 4
main()
  // 5
  .finally(async () => {
    await prisma.$disconnect()
  })