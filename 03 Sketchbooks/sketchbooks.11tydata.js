import path from "node:path";
import { pathToFileURL } from "node:url";

const { withCollectionDefaults } = await import(
	pathToFileURL(path.join(process.cwd(), "_config", "collectionDefaults.js")).href
);

export default withCollectionDefaults({
	tags: ["sketchbooks"],
	layout: "layouts/sketch.njk",
	defaultTitle: "Sketchbook Entry",
});
