import { Request, Response } from "express";
import { getUserById } from "../services/user.service";

export const handleSocialLogins = async (req: Request, res: Response) => {
  const user = await getUserById((req.user as any).id as string);
  if (!user) {
    return res.status(404).json({
      success: false,
      message: "User Not Found",
    });
  }

  return res.json({
    success: true,
    user,
  });
};
