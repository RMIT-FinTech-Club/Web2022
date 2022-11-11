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
            <div className="container pb-4">
                <h1 className="text-center display-3 mt-5 mb-5">Projects</h1>
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
