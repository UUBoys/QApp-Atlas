import jwt, { JwtPayload } from "jsonwebtoken";
import fs from "fs";
import path from "path";
import { GraphQLError } from "graphql";

const publicKey = fs.readFileSync(
  path.resolve(__dirname, "../../keys/public.key"),
  "utf8"
);

const signOptions: jwt.SignOptions = {
  issuer: "UUBoys",
  subject: "userToken",
  audience: "QApp",
  expiresIn: "1d",
  algorithm: "RS256",
};

interface JWTPayload {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
  username: string;
  role: string;
}

export const decryptToken = (token: string): JwtPayload => {
  return jwt.verify(token, publicKey, signOptions) as JWTPayload;
};

export const checkUserAuth = (context: any) => {
  if (context || !context.user) throw new GraphQLError("Unauthorized");
};
