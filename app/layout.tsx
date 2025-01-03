import "@/styles/globals.scss";
import "./page.module.scss"
import {Metadata} from "next";
import {Providers} from "./providers";
import {siteConfig} from "@/config/site";
import React from "react";

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
        <html suppressHydrationWarning lang="ru">
        <head>
            <link
                rel="stylesheet"
                href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
            />

            <link rel="preconnect" href="https://fonts.googleapis.com"></link>
            <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous"></link>
            <link
                href="https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap"
                rel="stylesheet"/>

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
