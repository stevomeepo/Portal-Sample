import { getSession } from "next-auth/react"; // Import getSession
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export default async function handler(req, res) {
  // Check if the request is a POST request
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Method not allowed" });
  }

  // Attempt to retrieve the session
  const session = await getSession({ req });
  console.log("Session:", session);

  // Return the session object for debugging purposes
  if (session) {
    return res.status(200).json({ message: "Session exists", session });
  } else {
    return res.status(200).json({ message: "Session is null" });
  }
}