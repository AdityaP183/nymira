import { relations } from "drizzle-orm";
import {
    integer,
    pgTable as table,
    timestamp,
    uuid
} from "drizzle-orm/pg-core";
import { chapters } from "./chapter";
import { users } from "./user";

export const userProgress = table("user_progress", {
	id: uuid("id").primaryKey().defaultRandom(),
	userId: uuid("user_id")
		.references(() => users.id)
		.notNull(),
	chapterId: uuid("chapter_id")
		.references(() => chapters.id)
		.notNull(),
	lastPositionMs: integer("last_position_ms").notNull(),
	createdAt: timestamp("created_at").defaultNow(),
	updatedAt: timestamp("updated_at").defaultNow(),
});

export const userProgressRelations = relations(userProgress, ({ one }) => ({
	user: one(users, {
		fields: [userProgress.userId],
		references: [users.id],
	}),
	chapter: one(chapters, {
		fields: [userProgress.chapterId],
		references: [chapters.id],
	}),
}));
