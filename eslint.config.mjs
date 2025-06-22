import { defineConfig } from "eslint/config"
import globals from "globals"
import js from "@eslint/js"
import react from "eslint-plugin-react"
import reactHooks from "eslint-plugin-react-hooks"

export default defineConfig([
    {
        files: [
            "**/*.js",
            "**/*.jsx",
        ],
        languageOptions: {
            globals: {
                ...globals.browser,
            },
            parserOptions: {
                ecmaVersion: "latest",
                ecmaFeatures: {
                    jsx: true,
                },
            },
        },
        rules: {
            ...js.configs.recommended.rules,
            ...react.configs.recommended.rules,
            ...reactHooks.configs.recommended.rules,
            "no-unused-vars": [
                "error",
                {
                    "argsIgnorePattern": "^_",
                    "varsIgnorePattern": "^_"
                }
            ],
        },
        plugins: {
            react,
            "react-hooks": reactHooks,
        },
        settings: {
            react: {
                version: "detect",
            },
        },
    }
])