import plugin from "./eslint-local/index.js";
import { defineConfig } from "eslint/config";
import tseslint from "typescript-eslint";

export default defineConfig([
    {
files: ["**/*.{ts,mts}"],
languageOptions: {
    parser: tseslint.parser,
},
        plugins: {
            plugin,
        },
        rules: {
            "plugin/require-wait-in-while": "error",
            "plugin/no-wrong-wait-in-function": "error",
        },
    },
]);
