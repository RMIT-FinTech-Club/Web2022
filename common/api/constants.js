const getRemoteApiUrl = () => {
    const url = process.env.REACT_APP_API_URL;
    if (!url) throw new Error("REACT_APP_API_URL is not defined");
    return url;
};

const local = false;
export const API_URL = local ? "http://localhost:1337/api" : getRemoteApiUrl();

export const DEPARTMENTS_ROUTE = "/departments";
export const MEMBERS_ROUTE = "/members";
export const EXECUTIVES_ROUTE = "/executives";
export const EVENTS_ROUTE = "/events";
export const MOMENTS_ROUTE = "/moments";
