import Head from "next/head";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Departments from "../../components/about-us/Departments";
import Members from "../../components/about-us/AllMembers";
import { API_URL, DEPARTMENTS_ROUTE, EXECUTIVES_ROUTE, MEMBERS_ROUTE } from "../../common/api/constants";
import { smartFetch } from "../../common/utils";

const CURRENT_GEN = 3;

export default function AboutUs({ departmentsInfo, executivesInfo, membersInfo, pastGensInfo }) {
    departmentsInfo = departmentsInfo || [];
    executivesInfo = executivesInfo || [];
    membersInfo = membersInfo || [];
    pastGensInfo = pastGensInfo || [];
    return (
        <>
            <Head>
                <title>RMIT FinTech Club SGS | About Us</title>
                <meta name="description" content="Generated by create next app" />
                <link rel="icon" href="/icon.png" />
            </Head>
            <Header />
            <div className="">
                <h1 className="text-center display-3 pt-5">About Us</h1>
                <Departments departmentsInfo={departmentsInfo} />
                <Members execs={executivesInfo} mems={membersInfo} pastGens={pastGensInfo} />
            </div>
            <Footer />
        </>
    );
}

export async function getStaticProps() {
    const executives = await smartFetch(API_URL + EXECUTIVES_ROUTE);
    const departmentsInfo = await smartFetch(API_URL + DEPARTMENTS_ROUTE);
    const executivesInfo = executives.filter((exec) => exec.gen === CURRENT_GEN);
    const membersInfo = await smartFetch(API_URL + MEMBERS_ROUTE);
    const pastGensInfo = executives.filter((exec) => exec.gen < CURRENT_GEN);

    return {
        props: {
            departmentsInfo,
            executivesInfo,
            membersInfo,
            pastGensInfo,
        },
        revalidate: 60,
    };
}