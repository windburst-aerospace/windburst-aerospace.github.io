import bcrypt from "bcryptjs";
import { db, usersTable } from "@workspace/db";
import { logger } from "./logger";
import { eq } from "drizzle-orm";

const TEAM = [
  { username: "sid", displayName: "Siddarth Assudani", envKey: "SID_PASSWORD" },
  { username: "kp", displayName: "Krishna Pandey", envKey: "KP_PASSWORD" },
  { username: "max", displayName: "Maxmillan Mokrzanski", envKey: "MAX_PASSWORD" },
];

export async function seedUsers() {
  for (const member of TEAM) {
    const password = process.env[member.envKey] ?? "changeme123";
    if (!process.env[member.envKey]) {
      logger.warn({ username: member.username }, `${member.envKey} not set — using default password. Set it in Secrets!`);
    }
    const passwordHash = await bcrypt.hash(password, 12);
    await db
      .insert(usersTable)
      .values({ username: member.username, displayName: member.displayName, passwordHash })
      .onConflictDoUpdate({
        target: usersTable.username,
        set: { passwordHash, displayName: member.displayName },
      });
    logger.info({ username: member.username }, "User seeded");
  }
}
