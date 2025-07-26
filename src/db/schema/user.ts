import { relations } from "drizzle-orm";
import {
	pgTable as table,
	timestamp,
	uuid,
	varchar,
} from "drizzle-orm/pg-core";
import { libraries } from "./library";

export const users = table("users", {
	id: uuid("id").primaryKey().defaultRandom(),
	username: varchar("username", { length: 256 }).notNull(),
	email: varchar("email", { length: 256 }).notNull().unique(),
	firstName: varchar("first_name", { length: 256 }).notNull(),
	lastName: varchar("last_name", { length: 256 }).notNull(),
	password: varchar("password", { length: 256 }).notNull(),
	createdAt: timestamp("created_at").defaultNow(),
	updatedAt: timestamp("updated_at").defaultNow(),
});

export const userRelations = relations(users, ({ one }) => ({
	library: one(libraries, {
		fields: [users.id],
		references: [libraries.userId],
	}),
}));
