import Head from "next/head";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Magazine from "../../components/projects/Magazine";
import Cafefin from "../../components/projects/Cafefin";
import Podcast from "../../components/projects/Podcast";
import RFBC from "../../components/projects/RFBC";
import RFBF from "../../components/projects/RFBF";

export default function Projects() {
    return (
        <>
            <Head>
            <title>RMIT FinTech Club SGS | Our Projects</title>
                <meta name="description" content="RMIT FinTech Club projects" />
                <link rel="icon" href="/icon.png" />
            </Head>
            <Header />
            <div className="container pt-5 pb-4">
                <Magazine />
                <Cafefin />
                <Podcast />
                <RFBC />
                <RFBF />
            </div>
            <Footer />
        </>
    );
}
