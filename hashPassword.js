const { PrismaClient } = require('@prisma/client');
const bcrypt = require('bcryptjs');

const prisma = new PrismaClient();

async function updatePassword(email, newPassword) {
  const hashedPassword = await bcrypt.hash(newPassword, 10); // 10 is the number of rounds for salting
  await prisma.user.update({
    where: {
      email: email,
    },
    data: {
      password: hashedPassword,
    },
  });
}

// Replace 'test@test.com' and 'Test123' with the actual email and password
updatePassword('jolly@stevomeepo.com', 'omega145').then(() => {
  console.log('Password updated successfully.');
  process.exit(0);
}).catch((error) => {
  console.error('Error updating password:', error);
  process.exit(1);
});