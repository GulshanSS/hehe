import passport from "passport";
import { Strategy as GoogleStrategy } from "passport-google-oauth20";
import config from "../config";
import {
  createUser,
  getUserById,
  getUserByEmail,
} from "../services/user.service";

passport.serializeUser((user: any, next) => {
  next(null, user.id);
});

passport.deserializeUser(async (id: string, next) => {
  try {
    const user = await getUserById(id);
    if (user) next(null, user);
    else console.log("User Not Found");
  } catch (e: unknown) {
    if (e instanceof Error) console.log(e.message);
  }
});

passport.use(
  new GoogleStrategy(
    {
      clientID: config.GOOGLE_OAUTH_CLIENT_ID,
      clientSecret: config.GOOGLE_OAUTH_CLIENT_SECRET,
      callbackURL: "/api/v1/auth/google/callback",
    },
    async (_, __, profile, done) => {
      const existingUser = await getUserByEmail(profile._json.email!);
      if (existingUser) {
        return done(null, existingUser);
      }
      const user = await createUser({
        email: profile._json.email!,
        username: profile._json.name!,
      });
      return done(null, user);
    }
  )
);
