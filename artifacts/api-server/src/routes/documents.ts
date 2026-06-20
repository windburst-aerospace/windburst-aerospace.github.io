import { Router } from "express";
import { db, documentsTable, usersTable } from "@workspace/db";
import { eq } from "drizzle-orm";

const router = Router();

function requireAuth(req: any, res: any, next: any) {
  if (!req.session?.userId) {
    res.status(401).json({ error: "Not authenticated" });
    return;
  }
  next();
}

router.get("/documents", requireAuth, async (req, res) => {
  const docs = await db
    .select({
      id: documentsTable.id,
      title: documentsTable.title,
      url: documentsTable.url,
      description: documentsTable.description,
      category: documentsTable.category,
      addedById: documentsTable.addedById,
      addedByName: usersTable.displayName,
      createdAt: documentsTable.createdAt,
    })
    .from(documentsTable)
    .leftJoin(usersTable, eq(documentsTable.addedById, usersTable.id))
    .orderBy(documentsTable.createdAt);
  res.json(docs);
});

router.post("/documents", requireAuth, async (req, res) => {
  const { title, url, description, category } = req.body as {
    title: string;
    url: string;
    description?: string;
    category?: string;
  };
  if (!title || !url) {
    res.status(400).json({ error: "Title and URL are required" });
    return;
  }
  const [doc] = await db
    .insert(documentsTable)
    .values({
      title,
      url,
      description: description ?? null,
      category: category ?? "General",
      addedById: req.session.userId!,
    })
    .returning();
  res.status(201).json(doc);
});

router.delete("/documents/:id", requireAuth, async (req, res) => {
  const id = Number(req.params.id);
  await db.delete(documentsTable).where(eq(documentsTable.id, id));
  res.json({ ok: true });
});

export default router;
