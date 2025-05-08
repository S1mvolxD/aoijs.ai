module.exports = {
    name: '$fastTTV',
    type: 'djs',
    code: async (d) => {
        const data = d.util.aoiFunc(d);
        const [text, style = 'realistic'] = data.inside.splits;
    
        if (!text) return d.aoiError.fnError(d, "custom", {}, "You didn't enter the text");
    
        try {
            const fetch = globalThis.fetch || (await import("node-fetch")).default;
    
            const apiUrl = `https://api.kastg.xyz/api/ai/fast-ttv?prompt=${encodeURIComponent(text)}&style=${style}&key=Kastg_IMKOBLxprQ5YmJSsnZjX_free`;
            
            const response = await fetch(apiUrl, {
                headers: {
                    'User-Agent': 'Mozilla/5.0'
                },
                timeout: 10000
            });

            const responseText = await response.text();
            
            if (!response.ok) {
                throw new Error(`API error ${response.status}: ${responseText}`);
            }

            let api;
            try {
                api = JSON.parse(responseText);
            } catch (e) {
                throw new Error(`Invalid JSON response: ${responseText}`);
            }
    
            const imageUrl = api.url 
                || api.image_url 
                || api.result?.[0]?.url 
                || api.result?.[0]?.response 
                || api.data?.url;
            
            if (!imageUrl) {
                throw new Error(`No image URL found in response. Full response logged.`);
            }
    
            data.result = imageUrl;
            
            return {
                code: d.util.setCode(data)
            };
            
        } catch (err) {
            console.error("Error in $fastTTV:", err);
            return d.aoiError.fnError(d, "custom", {}, `Failed to generate image: ${err.message}`);
        }
    }
};