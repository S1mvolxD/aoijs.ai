module.exports = {
  name: '$flux',
  type: 'djs',
  code: async (d) => {
    const data = d.util.aoiFunc(d);
    const [text, ratio = 'square'] = data.inside.splits;

    if (!text) return d.aoiError.fnError(d, "custom", {}, "You didn't enter the text");

    try {
        const fetch = globalThis.fetch || (await import("node-fetch")).default;

        const apiUrl = `https://api.kastg.xyz/api/ai/flux?prompt=${encodeURIComponent(text)}&ratio=${ratio}&key=Kastg_IMKOBLxprQ5YmJSsnZjX_free`;
        const response = await fetch(apiUrl);

        if (!response.ok) {
            throw new Error(`API error: ${response.status} ${response.statusText}`);
        }

        const api = await response.json();

        let imageUrl;
        if (api.url) {
            imageUrl = api.url;
        } else if (api.result?.[0]?.url) {
            imageUrl = api.result[0].url;
        } else if (api.result?.[0]?.response) {
            imageUrl = api.result[0].response;
        } else {
            throw new Error(`Unexpected response format: ${JSON.stringify(api)}`);
        }

        data.result = imageUrl;
        
        return {
            code: d.util.setCode(data)
        };
        
    } catch (err) {
        console.error("Ошибка в $flux:", err);
        return d.aoiError.fnError(d, "custom", {}, `API error: ${err.message}`);
    }
  }
};