import {
	boolean,
	integer,
	pgTable as table,
	timestamp,
	varchar,
	text,
	uuid,
} from "drizzle-orm/pg-core";
import { authors } from "./author";
import { categories } from "./category";
import { relations } from "drizzle-orm";
import { chapters } from "./chapter";
import { libraryItems } from "./library_item";

export const audiobooks = table("audiobooks", {
	id: uuid("id").primaryKey().defaultRandom(),
	title: varchar("title", { length: 256 }).notNull(),
	description: text("description"),
	thumbnailUrl: text("thumbnail_url"),
	categoryId: uuid("category_id")
		.references(() => categories.id)
		.notNull(),
	authorId: uuid("author_id")
		.references(() => authors.id)
		.notNull(),
	isPublished: boolean("is_published").default(false),
	language: varchar("language", { length: 50 }),
	publishDate: timestamp("publish_date"),
	totalDuration: integer("total_duration"),
	createdAt: timestamp("created_at").defaultNow(),
	updatedAt: timestamp("updated_at").defaultNow(),
});

export const audiobookRelations = relations(audiobooks, ({ one, many }) => ({
	author: one(authors, {
		fields: [audiobooks.authorId],
		references: [authors.id],
	}),
	category: one(categories, {
		fields: [audiobooks.categoryId],
		references: [categories.id],
	}),
	chapters: many(chapters),
	libraryItems: many(libraryItems),
}));
