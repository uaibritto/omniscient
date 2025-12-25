import path from "node:path";
import { defineConfig } from "drizzle-kit";

export default defineConfig({
	dialect: "postgresql",
	schema: path.join("src", "db", "schema"),
	out: path.join("src", "db", "generated"),

	dbCredentials: {
		url: process.env.DATABASE_URL ?? "",
	},
});
