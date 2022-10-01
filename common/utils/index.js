export const smartFetch = async (url, retries = 5) => {
    while (retries--) {
        const res = await fetch(url);
        const data = await res.json();
        if (data instanceof Array) return data;
    }
    return [];
};
