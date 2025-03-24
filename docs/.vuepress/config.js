import { viteBundler } from '@vuepress/bundler-vite'
import { defaultTheme } from '@vuepress/theme-default'
import { defineUserConfig } from 'vuepress'
import { mdEnhancePlugin } from "vuepress-plugin-md-enhance";
import sidebar from './sidebar';

export default defineUserConfig({
    base: process.env.NODE_ENV === 'production' ? '/sop-management-system/' : '/',
    bundler: viteBundler(),
    theme: defaultTheme({
        navbar: [
            {
                text: 'Home',
                link: '/',
            },
            {
                text: 'GMP',
                link: '/sop/GMP/eu/SOP-DAP-VIEN.md',
            },
        ],
        sidebar: sidebar,
    }),
    plugins: [
        mdEnhancePlugin({
            // Các tùy chọn khác
            mermaid: true, // Bật hỗ trợ Mermaid
        }),
    ],
})