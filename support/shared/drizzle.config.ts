import { defineConfig } from "drizzle-kit";

export default defineConfig({
	dialect: "postgresql",
	schema: "src/db/schema.ts",
	out: "src/db/generated",

	dbCredentials: {
		url: "postgres://user:password@localhost:5432/database",
	},
});
