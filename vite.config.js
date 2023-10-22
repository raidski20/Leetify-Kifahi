import {resolve} from 'path';
import inject from "@rollup/plugin-inject";

const root = resolve(__dirname, 'src');
const publicDir = resolve(__dirname, 'public');
const outDir = resolve(__dirname, 'dist');

export default {
    plugins: [
        inject({
            $: 'jquery',
            jQuery: 'jquery',
        }),
    ],

    base: './',
    root,
    publicDir,
    build: {
        outDir,
        rollupOptions: {
            input: {
                main: resolve(root, 'index.html'),
            }
        }
    },
    server: {
        port: 8080
    }
}