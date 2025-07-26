import { pgTable as table, timestamp, uuid } from "drizzle-orm/pg-core";
import { users } from "./user";
import { relations } from "drizzle-orm";
import { libraryItems } from "./library_item";
import { libraryTags } from "./library_tag";

export const libraries = table("libraries", {
	id: uuid("id").primaryKey().defaultRandom(),
	userId: uuid("user_id")
		.references(() => users.id)
		.notNull(),
	createdAt: timestamp("created_at").defaultNow(),
});

export const libraryRelations = relations(libraries, ({ one, many }) => ({
	user: one(users, {
		fields: [libraries.userId],
		references: [users.id],
	}),
	items: many(libraryItems),
	tags: many(libraryTags),
}));
