import {
	integer,
	pgTable as table,
	timestamp,
	uuid,
} from "drizzle-orm/pg-core";
import { audiobooks } from "./audiobook";
import { series } from "./series";
import { relations } from "drizzle-orm";

export const seriesItem = table("series_item", {
	id: uuid("id").primaryKey().defaultRandom(),
	seriesId: uuid("series_id")
		.references(() => series.id)
		.notNull(),
	audiobookId: uuid("audiobook_id")
		.references(() => audiobooks.id)
		.notNull(),
	order: integer("order"),
	createdAt: timestamp("created_at").defaultNow(),
	updatedAt: timestamp("updated_at").defaultNow(),
});

export const seriesItemRelations = relations(seriesItem, ({ one }) => ({
	series: one(series, {
		fields: [seriesItem.seriesId],
		references: [series.id],
	}),
	audiobook: one(audiobooks, {
		fields: [seriesItem.audiobookId],
		references: [audiobooks.id],
	}),
}));
