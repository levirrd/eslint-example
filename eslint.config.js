import plugin from "./eslint-local/index.js";
import { defineConfig } from "eslint/config";

export default defineConfig([
    {
        files: ["**/*.{ts,mts}"],
        plugins: {
            plugin,
        },
        rules: {
            "plugin/require-wait-in-while": "error",
            "plugin/no-wrong-wait-in-function": "error",
        },
    },
]);
