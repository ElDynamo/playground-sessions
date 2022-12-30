import { defineConfig } from "astro/config";
import vue from "@astrojs/vue";
import tailwind from "@astrojs/tailwind";

export default defineConfig({
	vite: {
		ssr: {
			noExternal: ["primevue"],
		},
	},
	output: "static",
	integrations: [
		vue({
			appEntrypoint: "/src/pages/_app",
		}),
		tailwind(),
	],
});
