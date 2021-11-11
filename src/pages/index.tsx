import Head from "next/head";

type HomeProps = {
    title: string;
};

export default function Home({ title = "React Avançado" }: HomeProps) {
    return (
        <div>
            <Head>
                <title>{title}</title>
                <meta name="description" content="React Avançado" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
        </div>
    );
}
