export const userTransformer = (user) => {
  return {
    id: user.id,
    email: user.email,
    username: user.username,
    name: user.name,
    profileImage: user.profileImage,
  };
};
