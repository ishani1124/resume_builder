import Cors from "cors";

import initMiddleware from "@/lib/init-middleware";
import prisma from "@/lib/prisma";

const cors = initMiddleware(
    // You can read more about the available options here: https://github.com/expressjs/cors#configuration-options
    Cors({
      // Only pallow requests with GET, POST and OPTIONS
      methods: ['POST']
    })
);

export default async (req, res) => {
    await cors(req, res);

    const { email, password } = req.body;

    let foundUser = await prisma.users.findFirst({
        where: {
            email,
            password
        }
    });

    if(foundUser === null) {
        let createdUser = await prisma.users.create({
            data: {
                email,
                password
            }
        });
        
        return res.status(201).json({ message: "User Created", data: createdUser });
    } else {
        return res.status(200).json({ message: "Authenticated..." });
    }    
}
