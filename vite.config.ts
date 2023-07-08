/// <reference types="vitest" />
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import mdx from '@mdx-js/rollup';

export default defineConfig({
    plugins: [
        react(),
        mdx({
            providerImportSource: "@mdx-js/react"
        })
    ],
    base: "mui-mdx-components",
    test: {
        globals: true,
        environment: 'happy-dom',
        coverage: {
            include: ['src/**/*'],
            reporter: ["json-summary"],
            all: true,
            lines: 80,
            functions: 80,
            branches: 80,
            statements: 80
          }
    },
})
