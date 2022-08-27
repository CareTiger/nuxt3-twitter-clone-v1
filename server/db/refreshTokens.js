import { prisma } from ".";

export const createRefreshToken = (data) => {
  return prisma.refreshToken.create({
    data: data,
  });
};

export const getRefreshTokenByToken = (token) => {
  return prisma.refreshToken.findUnique({
      where: {
          token: token
      }
  })
}

export const removeRefreshToken = (token) => {
  return prisma.refreshToken.delete({
      where: {
          token: token
      }
  })
}