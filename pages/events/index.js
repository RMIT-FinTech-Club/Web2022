import Head from "next/head";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import { Col } from "react-bootstrap";
import MonthEvents from "../../components/events/MonthEvents";
import moment from "moment";
import { API_URL, EVENTS_ROUTE } from "../../common/api/constants";
import { smartFetch } from "../../common/utils";

const EventsPage = ({ events }) => {
    events = events || [];
    const now = moment(new Date());
    const pastEvents = {};
    const upcomingEvents = {};

    events.forEach((e) => {
        if (!e.date) return;
        const eventTime = moment(e.date).endOf("day");
        const eventMonthYear = eventTime.format("MMMM YYYY");
        if (eventTime.isBefore(now)) {
            pastEvents[eventMonthYear] = pastEvents[eventMonthYear] || [];
            pastEvents[eventMonthYear].push(e);
        } else {
            upcomingEvents[eventMonthYear] = upcomingEvents[eventMonthYear] || [];
            upcomingEvents[eventMonthYear].push(e);
        }
    });

    // Sort upcoming events in ascending order
    for (const monthEvents of Object.values(upcomingEvents)) {
        monthEvents.sort((a, b) => moment(a.date).isBefore(moment(b.date)));
    }
    const upcomingMonths = Object.keys(upcomingEvents).sort(
        (a, b) => moment(a, "MMMM YYYY").valueOf() - moment(b, "MMMM YYYY").valueOf()
    );

    // Sort past events in descending order
    for (const monthEvents of Object.values(pastEvents)) {
        monthEvents.sort((b, a) => moment(a.date).valueOf() - moment(b.date).valueOf());
    }
    const pastMonths = Object.keys(pastEvents).sort(
        (b, a) => moment(a, "MMMM YYYY").valueOf() - moment(b, "MMMM YYYY").valueOf()
    );

    return (
        <>
            <Head>
                <title>RMIT FinTech Club SGS | Events</title>
                <meta name="description" content="Events - RMIT FinTech Club SGS" />
                <link rel="icon" href="/icon.png" />
            </Head>
            <Header />

            <div className="page-container container pb-5">
                <h1 className="events-page-title mt-7 display-1 text-ft-blue">Events</h1>

                <div className="mt-5 d-flex justify-content-center">
                    <Col sm={12} lg={3}>
                        <div className="display-4 text-ft-yellow">Upcoming Events</div>
                    </Col>

                    <Col lg={9} className="d-none d-md-flex flex-col align-items-center">
                        <div className="border-ft-yellow w-100 border-3 border-bottom"></div>
                    </Col>
                </div>

                {upcomingMonths.map((month) => {
                    return <MonthEvents key={month} events={upcomingEvents[month]} month={month} />;
                })}

                <div className="mt-7 d-flex justify-content-center">
                    <Col lg={3}>
                        <div className="display-4 text-ft-yellow">Past Events</div>
                    </Col>

                    <Col lg={9} className="d-none d-md-flex flex-col align-items-center">
                        <div className="border-ft-yellow w-100 border-3 border-bottom"></div>
                    </Col>
                </div>

                {pastMonths.map((month) => {
                    return <MonthEvents key={month} events={pastEvents[month]} month={month} />;
                })}
            </div>
            <Footer />
        </>
    );
};

export async function getStaticProps() {
    const events = await smartFetch(API_URL + EVENTS_ROUTE);

    return {
        props: {
            events,
        },
        revalidate: 60,
    };
}

export default EventsPage;
