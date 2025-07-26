import { pgTable as table, uuid } from "drizzle-orm/pg-core";
import { libraryItems } from "./library_item";
import { libraryTags } from "./library_tag";
import { relations } from "drizzle-orm";

export const libraryItemTags = table("library_item_tags", {
	id: uuid("id").primaryKey().defaultRandom(),
	itemId: uuid("item_id")
		.references(() => libraryItems.id)
		.notNull(),
	tagId: uuid("tag_id")
		.references(() => libraryTags.id)
		.notNull(),
});

export const libraryItemTagRelations = relations(
	libraryItemTags,
	({ one }) => ({
		item: one(libraryItems, {
			fields: [libraryItemTags.itemId],
			references: [libraryItems.id],
		}),
		tag: one(libraryTags, {
			fields: [libraryItemTags.tagId],
			references: [libraryTags.id],
		}),
	})
);
