import {defineConfig} from 'sanity';
import { deskTool } from 'sanity/desk';
import schemas from './sanity/schemas';

const config = defineConfig({
 projectId: "gnat59oy",
 dataset: "production",
 title: "My Personal Blog",
 apiVersion: "2023-09-05",
 basePath: "/admin",
 plugins: [deskTool()],
 schema: {types: schemas}
})

export default config;