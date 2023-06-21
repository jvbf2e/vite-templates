import { type ConfigEnv, defineConfig } from "vite";

import { createVite } from "./config/vite";

// https://vitejs.dev/config/
export default defineConfig((env: ConfigEnv) => createVite(env));
