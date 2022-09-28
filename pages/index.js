import Head from "next/head";
import Header from "../components/Header";
import Welcome from "../components/Welcome";
import UpcomingEvents from "../components/UpcomingEvents";
import Vision from "../components/Vision";

export default function Home() {
    return (
        <>
            <Head>
                <title>RMIT Fintech Club</title>
                <link rel="icon" href="/icon.png" />
                <meta property="og:title" content="RMIT FinTech Club" />
                <meta property="og:type" content="website" />
                <meta property="og:description" content="Website of RMIT FinTech Club" />
                <meta property="description" content="Website of RMIT FinTech Club" />
                <meta property="og:url" content="rmitsgsfintechclub.com" />
                <meta property="og:image" content="https://imgur.com/L3Zymh0" />
                <link rel="icon" href="./icon.png" type="image/x-icon" />
                <link rel="apple-touch-icon" href="./icon.png" />
            </Head>
            <Header />
            <div className="container">
                <Welcome />
                <UpcomingEvents />
                <Vision />
            </div>
        </>
    );
}
