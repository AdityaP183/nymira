import {
	pgTable as table,
	text,
	timestamp,
	uuid,
	varchar,
} from "drizzle-orm/pg-core";
import { audiobooks } from "./audiobook";
import { relations } from "drizzle-orm";

export const authors = table("authors", {
	id: uuid("id").primaryKey().defaultRandom(),
	name: varchar("name", { length: 256 }).notNull(),
	description: text("description"),
	avatarUrl: text("avatar_url"),
	createdAt: timestamp("created_at").defaultNow(),
	updatedAt: timestamp("updated_at").defaultNow(),
});

export const authorRelations = relations(authors, ({ many }) => ({
	audiobooks: many(audiobooks),
}));
