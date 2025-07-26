import { pgTable, text, timestamp, uuid } from "drizzle-orm/pg-core";
import { audiobooks } from "./audiobook";
import { relations } from "drizzle-orm";

export const categories = pgTable("categories", {
	id: uuid("id").primaryKey().defaultRandom(),
	name: text("name").notNull(),
	slug: text("slug").notNull().unique(),
	description: text("description"),
	createdAt: timestamp("created_at").defaultNow(),
});

export const categoryRelations = relations(categories, ({ many }) => ({
	audiobooks: many(audiobooks),
}));
