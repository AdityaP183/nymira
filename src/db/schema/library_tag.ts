import {
	pgTable as table,
	timestamp,
	uuid,
	varchar,
} from "drizzle-orm/pg-core";
import { libraries } from "./library";
import { relations } from "drizzle-orm";
import { libraryItemTags } from "./library_item_tag";

export const libraryTags = table("library_tags", {
	id: uuid("id").primaryKey().defaultRandom(),
	libraryId: uuid("library_id")
		.references(() => libraries.id)
		.notNull(),
	name: varchar("name", { length: 256 }).notNull(),
	color: varchar("color", { length: 100 }),
	createdAt: timestamp("created_at").defaultNow(),
});

export const libraryTagRelations = relations(libraryTags, ({ one, many }) => ({
	library: one(libraries, {
		fields: [libraryTags.libraryId],
		references: [libraries.id],
	}),
	itemTags: many(libraryItemTags),
}));
