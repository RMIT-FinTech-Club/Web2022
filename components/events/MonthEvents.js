import SingleEventBlock from "./SingleEventBlock";

const MonthEvents = ({ events, month }) => {
    return (
        <div className="mt-5" data-aos="fade-up">
            <h2 className="month-event-month text-ft-blue font-mont text-uppercase fw-semibold">{month}</h2>
            {events &&
                events.map((e, i) => {
                    return <SingleEventBlock key={i} {...e} />;
                })}
        </div>
    );
};
export default MonthEvents;
