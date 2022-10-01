export const smartFetch = async (url, retries = 5) => {
    while (retries--) {
        try {
            const res = await fetch(url);
            const data = await res.json();
            if (data instanceof Array) return data;
            console.log("Error: data is not an array", data);
        } catch (e) {
            console.log(e);
        }
    }
    return [];
};
