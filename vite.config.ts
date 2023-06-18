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
    test: {
        globals: true,
        environment: 'happy-dom',
        coverage: {
            include: ['src/**/*'],
            reporter: ['text', 'json', 'html'],
            all: true,
            lines: 80,
            functions: 80,
            branches: 80,
            statements: 80
          }
    },
})
