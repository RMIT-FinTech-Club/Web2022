import { useState } from "react";

const Podcast = () => {
    const urls = [
        "https://open.spotify.com/embed/episode/4g7tVZk3MJQNGZU14rMFzu?utm_source=generator",
        "https://open.spotify.com/embed/episode/2szc79vEhkESgNAMYInAf9?utm_source=generator",
        "https://open.spotify.com/embed/episode/2C0eiVMeNYIex5OEPQXhLm?utm_source=generator",
        "https://open.spotify.com/embed/episode/3BKByrghO9kybXv0VmDErL?utm_source=generator",
        "https://open.spotify.com/embed/episode/5601Q6WjtD2VWSxwy7PJT3?utm_source=generator",
    ];
    const n = urls.length;
    const [ep, setEp] = useState(n - 1);
    const prev = () => {
        if (ep > 0) setEp((ep) => ep - 1);
    };
    const next = () => {
        if (ep < n - 1) setEp((ep) => ep + 1);
    };
    return (
        <div className="d-block container-fluid py-4 px-lg-4 mb-5">
            <h1 className="display-2 text-center text-lg-start">FinTech Podcast</h1>
            <div className="mt-4">
                <iframe
                    id="spotify-podcast"
                    src={urls[ep]}
                    width="100%"
                    height="232"
                    frameborder="0"
                    allowfullscreen=""
                    allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                ></iframe>
                <div className="mt-3 d-flex justify-content-between">
                    <div
                        onClick={prev}
                        className={`
                            btn btn-secondary text-white px-5 py-3 fs-4 text-uppercase action-btn 
                            ${ep === 0 ? "invisible" : ""}`}
                        type="button"
                    >
                        Previous
                    </div>
                    <div
                        onClick={next}
                        className={`
                            btn btn-primary text-white px-5 py-3 fs-4 text-uppercase action-btn 
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
