import { relations } from "drizzle-orm";
import {
	pgTable as table,
	text,
	timestamp,
	uuid,
	varchar,
} from "drizzle-orm/pg-core";
import { seriesItem } from "./series_item";

export const series = table("series", {
	id: uuid("id").primaryKey().defaultRandom(),
	title: varchar("title", { length: 256 }).notNull(),
	description: text("description"),
	coverImage: text("cover_image"),
	bannerImage: text("banner_image"),
	createdAt: timestamp("created_at").defaultNow(),
	updatedAt: timestamp("updated_at").defaultNow(),
});

export const seriesRelations = relations(series, ({ many }) => ({
	items: many(seriesItem),
}));
