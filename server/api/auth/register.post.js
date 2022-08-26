import { sendError } from "h3";
import { createUser } from "~~/server/db/users";
import { userTransformer } from "~~/server/transformers/userTransformer";

export default defineEventHandler(async (event) => {
  const body = await useBody(event);

  const { email, username, name, password, repeatPassword } = body;

  if (!email || !username || !name || !password || !repeatPassword) {
    return sendError(
      event,
      createError({
        statusCode: 400,
        statusMessage: "Invalid params",
      })
    );
  }

  if (password !== repeatPassword) {
    return sendError(
      event,
      createError({
        statusCode: 400,
        statusMessage: "Passswords don't match",
      })
    );
  }

  const userData = {
    email,
    username,
    name,
    password,
    profileImage: "https://picsum.photos/200/200",
  };

  const user = await createUser(userData);

  return {
    body: userTransformer(user),
  };
});
