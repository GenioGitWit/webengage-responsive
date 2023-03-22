import * as path from 'path'
import { defineConfig } from 'vite'

const root = path.resolve(__dirname, 'src');

export default defineConfig({
  root:root,
  build: {
    rollupOptions: {
      input: {
        main: path.resolve(__dirname,'src','index.html'),
        thankyou: path.resolve(__dirname, 'thankyou', 'index.html')
      },
    },
  },
});