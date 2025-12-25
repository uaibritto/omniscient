import "dotenv/config";
import path from "node:path";
import { defineConfig, env } from "prisma/config";

export default defineConfig({
	schema: path.join("src", "db", "schema"),
	migrations: {
		path: path.join("src", "db", "migrations"),
	},
	datasource: {
		url: env("DATABASE_URL"),
	},
});
