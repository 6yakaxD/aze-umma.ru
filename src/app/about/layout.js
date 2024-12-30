import Head from "next/head";

export const metadata = {
    title: "Blog Section - My Website",
    description: "Explore our blog for insights, news, and updates.",
    keywords: "blog, news, updates",
    openGraph: {
        title: "Blog Section",
        description: "Discover the latest updates in our blog.",
        url: "https://mywebsite.com/blog",
        images: [
            {
                url: "https://mywebsite.com/og-image.jpg",
                width: 800,
                height: 600,
                alt: "Blog Thumbnail",
            },
        ],
    },
};


export default function AboutLayout({children}) {
    return (
        <>
            <Head>
                <link rel="stylesheet" href="https://example.com/custom.css" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <div>
                {children}
            </div>
        </>
    );
}
