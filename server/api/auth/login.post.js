import { getUserByUsername } from "~~/server/db/users";
import bcrypt from "bcrypt";
import { generateTokens, sendRefreshToken } from "~~/server/utils/jwt";
import { createRefreshToken } from "~~/server/db/refreshTokens";
import { sendError } from "h3";
import { userTransformer } from "~~/server/transformers/userTransformer";

export default defineEventHandler(async (event) => {
  const body = await useBody(event);

  const { username, password } = body;

  if (!username || !password) {
    return sendError(
      event,
      createError({
        statusCode: 400,
        statusMessage: "Invalid params",
      })
    );
  }

  // is user registered
  const user = await getUserByUsername(username);

  if (!user) {
    return sendError(
      event,
      createError({
        statusCode: 400,
        statusMessage: "Username is invalid",
      })
    );
  }

  // compare passwords
  const doesPasswordMatch = await bcrypt.compare(password, user.password);

  if (!doesPasswordMatch) {
    return sendError(
      event,
      createError({
        statusCode: 400,
        statusMessage: "Password is invalid",
      })
    );
  }

  // generate tokens
  const { accessToken, refreshToken } = generateTokens(user);
  // access token
  // refresh token

  // save the refresh token in db
  await createRefreshToken({
    token: refreshToken,
    userId: user.id,
  });

  // add http onnly cookie
  sendRefreshToken(event, refreshToken);

  return {
    accessToken: accessToken,
    user: userTransformer(user),
  };
});
