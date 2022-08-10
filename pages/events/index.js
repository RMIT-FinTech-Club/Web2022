import React, { useEffect, useState } from "react";
import Head from "next/head";
import Header from "../../components/Header";
import { Col } from "react-bootstrap";
import SingleEventBlock from "../../components/events/SingleEventBlock";
import data from "../../data/events.json";
import moment from "moment";

const EventsPage = () => {
    const events = data.events;
    const pastmonth = moment(new Date()).subtract(1, "months").format("MMMM");
    const past2month = moment(new Date()).subtract(2, "months").format("MMMM");
    const currentmonth = moment(new Date()).format("MMMM");
    const nextmonth = moment(new Date()).add(1, "months").format("MMMM");

    const past_month_events = [];
    const past_2month_events = [];
    const current_month_events = [];
    const next_month_events = [];

    events.forEach((e) => {
        if (moment(e.date).format("MMMM") === pastmonth) {
            past_month_events.push(e);
        }
        if (moment(e.date).format("MMMM") === past2month) {
            past_2month_events.push(e);
        }
        if (moment(e.date).format("MMMM") === currentmonth) {
            current_month_events.push(e);
        }
        if (moment(e.date).format("MMMM") === nextmonth) {
            next_month_events.push(e);
            console.log(next_month_events);
        }
    });

    return (
        <>
            <Head>
                <title>Events - RMIT Fintech Club SGS</title>
                <meta name="description" content="Events - RMIT Fintech Club SGS" />
                <link rel="icon" href="/icon.png" />
            </Head>
            <Header />

            <div className="container">
                <div className="mt-7 display-1 text-ft-blue">Events</div>

                {/**
                 *
                 * Upcoming events show Current month events + next month event
                 *
                 */}
                <div className="mt-5 d-flex justify-content-center">
                    <Col sm={12} lg={3}>
                        <div className="display-4 text-ft-yellow">Upcoming Events</div>
                    </Col>

                    <Col lg={9} className="d-none d-md-flex flex-col align-items-center">
                        <div className="border-ft-yellow w-100 border-3 border-bottom"></div>
                    </Col>
                </div>

                <div className="mt-5">
                    <h2 className="text-ft-blue font-mont text-uppercase fw-semibold">{currentmonth}</h2>
                    {current_month_events &&
                        current_month_events.map((e, i) => {
                            return (
                                <SingleEventBlock
                                    key={i}
                                    name={e.name}
                                    date={e.date}
                                    time={e.time}
                                    location={e.location}
                                />
                            );
                        })}
                </div>

                <div className="mt-5">
                    <h2 className="text-ft-blue font-mont text-uppercase fw-semibold">{nextmonth}</h2>
                    {next_month_events &&
                        next_month_events.map((e, i) => {
                            return (
                                <SingleEventBlock
                                    key={i}
                                    name={e.name}
                                    date={e.date}
                                    time={e.time}
                                    location={e.location}
                                />
                            );
                        })}
                </div>

                {/**
                 *
                 * Past events show Past 1 month events + Last 2 months events
                 *
                 */}
                <div className="mt-7 d-flex justify-content-center">
                    <Col lg={3}>
                        <div className="display-4 text-ft-yellow">Past Events</div>
                    </Col>

                    <Col lg={9} className="d-none d-md-flex flex-col align-items-center">
                        <div className="border-ft-yellow w-100 border-3 border-bottom"></div>
                    </Col>
                </div>

                <div className="mt-5">
                    <h2 className="text-ft-blue font-mont text-uppercase fw-semibold">{pastmonth}</h2>
                    {past_2month_events &&
                        past_2month_events.map((e, i) => {
                            return (
                                <SingleEventBlock
                                    key={i}
                                    name={e.name}
                                    date={e.date}
                                    time={e.time}
                                    location={e.location}
                                />
                            );
                        })}
                </div>

                <div className="mt-5">
                    <h2 className="text-ft-blue font-mont text-uppercase fw-semibold">{past2month}</h2>
                    {past_month_events &&
                        past_month_events.map((e, i) => {
                            return (
                                <SingleEventBlock
                                    key={i}
                                    name={e.name}
                                    date={e.date}
                                    time={e.time}
                                    location={e.location}
                                />
                            );
                        })}
                </div>
            </div>
        </>
    );
};

export default EventsPage;
