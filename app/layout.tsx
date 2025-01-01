import "@/styles/globals.css";
import "./page.module.scss"
import {Metadata} from "next";

import {Providers} from "./providers";

import {siteConfig} from "@/config/site";

export const metadata: Metadata = {
    title: {
        default: siteConfig.name,
        template: `%s - ${siteConfig.name}`,
    },
    description: siteConfig.description,
    icons: {
        icon: "/favicon.ico",
    },
};

export default function RootLayout({children}: { children: React.ReactNode }) {
    return (
        <html suppressHydrationWarning lang="en">
        <head>
            <link
                rel="stylesheet"
                href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
            />
            <link rel="icon" type="image/x-icon" href="/logo_umma.png"/>
            <title>Умма</title>
        </head>
        <body>
        <Providers themeProps={{attribute: "class", defaultTheme: "light"}}>
            {children}
        </Providers>
        </body>
        </html>
    );
}
