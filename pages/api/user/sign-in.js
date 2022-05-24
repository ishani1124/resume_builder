import Cors from "cors";
import { NextResponse, NextRequest } from "next/server";

import initMiddleware from "@/lib/init-middleware";
import prisma from "@/lib/prisma";

// import db from "@/database";

const cors = initMiddleware(
  // You can read more about the available options here: https://github.com/expressjs/cors#configuration-options
  Cors({
    // Only pallow requests with GET, POST and OPTIONS
    methods: ["POST"],
  })
);

// http://localhost:3000/api/user/sign-in

// htpp://localhost:3000/api/hello

export default async (req, res) => {
  await cors(req, res);

  const { email, password } = req.body;

  console.log(`${email} === ${password}`);

  let foundUser = await prisma.users.findFirst({
    where: {
      email,
      password,
    },
  });

  if (foundUser === null) {
    return res.status(401).json({ message: "Un-Authorized..." });
  } else {
    // return res
    //   .status(200)
    //   .redirect("http://127.0.0.1:5501/frontend/index.html");
    // return NextResponse.redirect("http://127.0.0.1:5501/frontend/index.html");
    return res.status(200).json({ message: "Authenticated..." });
  }
};
