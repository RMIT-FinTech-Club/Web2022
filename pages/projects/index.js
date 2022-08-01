import Head from "next/head";
import Header from "../../components/Header";
import Magazine from "../../components/projects/Magazine";
import Cafefin from "../../components/projects/Cafefin";
import Podcast from "../../components/projects/Podcast";

export default function Projects() {
    return (
        <>
            <Head>
                <title>Our projects</title>
                <meta name="description" content="RMIT FinTech Club projects" />
                <link rel="icon" href="/icon.png" />
            </Head>
            <Header />
            <div className="container pt-5">
                <Magazine />
                <Cafefin />
                <Podcast />
            </div>
        </>
    );
}
