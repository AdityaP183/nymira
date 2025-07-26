import { relations } from "drizzle-orm";
import {
    integer,
    pgTable,
    text,
    timestamp,
    uuid,
    varchar,
} from "drizzle-orm/pg-core";
import { audiobooks } from "./audiobook";

export const chapters = pgTable("chapters", {
	id: uuid("id").defaultRandom().primaryKey(),
	audiobookId: uuid("audiobook_id")
		.references(() => audiobooks.id)
		.notNull(),
	title: varchar("title", { length: 256 }).notNull(),
	audioUrl: text("audio_url").notNull(),
	track: integer("track").notNull(),
	duration: integer("duration"),
	createdAt: timestamp("created_at").defaultNow(),
});

export const chapterRelations = relations(chapters, ({ one }) => ({
	audiobook: one(audiobooks, {
		fields: [chapters.audiobookId],
		references: [audiobooks.id],
	}),
}));
