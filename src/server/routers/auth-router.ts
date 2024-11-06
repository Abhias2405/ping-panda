import { db } from "@/db"
import { currentUser } from "@clerk/nextjs/server"
import { HTTPException } from "hono/http-exception"
import { router } from "../__internals/router"
import { publicProcedure } from "../procedures"

export const dynamic = "force-dynamic"

export const authRouter = router({
  getDatabaseSyncStatus: publicProcedure.query(async ({ c, ctx }) => {
    const auth = await currentUser()

    return c.json({ status: "success" })
  }),
})

// route.ts
