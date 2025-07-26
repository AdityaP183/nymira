import { relations } from "drizzle-orm";
import { pgTable, timestamp, uuid } from "drizzle-orm/pg-core";
import { audiobooks } from "./audiobook";
import { libraries } from "./library";
import { libraryItemTags } from "./library_item_tag";

export const libraryItems = pgTable("library_items", {
	id: uuid("id").primaryKey().defaultRandom(),
	libraryId: uuid("library_id")
		.references(() => libraries.id)
		.notNull(),
	audiobookId: uuid("audiobook_id")
		.references(() => audiobooks.id)
		.notNull(),
	addedAt: timestamp("added_at").defaultNow(),
});

export const libraryItemRelations = relations(
	libraryItems,
	({ one, many }) => ({
		library: one(libraries, {
			fields: [libraryItems.libraryId],
			references: [libraries.id],
		}),
		audiobook: one(audiobooks, {
			fields: [libraryItems.audiobookId],
			references: [audiobooks.id],
		}),
		tags: many(libraryItemTags),
	})
);
