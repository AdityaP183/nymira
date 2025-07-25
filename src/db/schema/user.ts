import { pgTable as table } from "drizzle-orm/pg-core";
import * as t from "drizzle-orm/pg-core";

export const users = table("users", {
	id: t.uuid("id").primaryKey().defaultRandom(),
	username: t.varchar({ length: 256 }).notNull(),
	email: t.varchar({ length: 256 }).notNull().unique(),
	firstName: t.varchar({ length: 256 }).notNull(),
	lastName: t.varchar({ length: 256 }).notNull(),
	password: t.varchar({ length: 256 }).notNull(),
	createdAt: t.timestamp("created_at", { mode: "date" }).defaultNow(),
	updatedAt: t.timestamp("updated_at", { mode: "date" }).defaultNow(),
});
