import { useState } from "react";
import podcasts from "../../data/projects/podcasts.json";

const Podcast = () => {
    const n = podcasts.length;
    const [ep, setEp] = useState(n - 1);
    const prev = () => {
        if (ep > 0) setEp((ep) => ep - 1);
    };
    const next = () => {
        if (ep < n - 1) setEp((ep) => ep + 1);
    };
    return (
        <div data-aos="fade-up" className="d-block container-fluid py-4 px-lg-4 mb-5">
            <h1 className="display-2 text-center text-lg-start">FinTech Podcast</h1>
            <div className="mt-4">
                <iframe
                    src={podcasts[ep]}
                    width="100%"
                    height="250"
                    frameBorder="0"
                    allowFullScreen=""
                    allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                ></iframe>
                <div className="mt-2 d-flex justify-content-between">
                    <div
                        onClick={prev}
                        className={`
                            btn btn-secondary text-white px-4 py-3 fs-4 text-uppercase action-btn 
                            ${ep === 0 ? "invisible" : ""}`}
                        type="button"
                    >
                        Previous
                    </div>
                    <div
                        onClick={next}
                        className={`
                            btn btn-primary text-white px-4 py-3 fs-4 text-uppercase action-btn 
                            ${ep === n - 1 ? "invisible" : ""}`}
                        type="button"
                    >
                        Next
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Podcast;
