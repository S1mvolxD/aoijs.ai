module.exports = {
    name: "$commandRPlus",
    type: "djs",
    code: async (d) => {
        const data = d.util.aoiFunc(d);
        const [text] = data.inside.splits;

        if (!text) return d.util.aoiError.fnError(d, "custom", {}, "You didn't enter the text");

        try {
            const fetch = globalThis.fetch || (await import("node-fetch")).default;
            
            const apiUrl = `https://api.kastg.xyz/api/ai/command-r-plus?prompt=${encodeURIComponent(text)}&key=Kastg_IMKOBLxprQ5YmJSsnZjX_free`;
            const response = await fetch(apiUrl);

            if (!response.ok) {
                throw new Error(`API error: ${response.status} ${response.statusText}`);
            }

            const api = await response.json();

            if (!api.status || !api.result?.[0]?.response) {
                throw new Error(`Unexpected response format: ${JSON.stringify(api)}`);
            }

            data.result = api.result[0].response;
            
            return {
                code: d.util.setCode(data)
            };
            
        } catch (err) {
            return d.util.aoiError.fnError(d, "custom", {}, `API error: ${err.message}`);
        }
    }
}