/// <reference types="vitest" />
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import mdx from '@mdx-js/rollup';
import remarkGfm from 'remark-gfm'

export default defineConfig({
    plugins: [
        react(),
        mdx({
            providerImportSource: "@mdx-js/react",
            remarkPlugins: [remarkGfm]
        })
    ],
    test: {
        globals: true,
        environment: 'happy-dom',
        coverage: {
            include: ['src/**/*'],
            reporter: ['text', 'json', 'html', "json-summary"],
            all: true,
            lines: 80,
            functions: 80,
            branches: 80,
            statements: 80
          }
    },
})
