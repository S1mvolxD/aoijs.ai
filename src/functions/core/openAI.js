module.exports = {
    name: '$openAI',
    type: 'djs',
    code: async (d) => {
        const data = d.util.aoiFunc(d);
        const [text, apiKey, model = 'gpt-3.5-turbo', baseURL] = data.inside.splits;

        if (data.err) return d.error(data.err);
        if (!text) return d.aoiError.fnError(d, 'custom', {}, "You didn't enter the text");
        if (!apiKey) return d.aoiError.fnError(d, 'custom', {}, "The OPENAI_API_KEY environment variable is missing or empty; either provide it, or instantiate the OpenAI client with an apiKey option, like new OpenAI({ apiKey: 'My API Key' }).");
        
        const OpenAI = (await import('openai')).default; 

        const openai = new OpenAI.OpenAI({
            baseURL: baseURL,
            apiKey: apiKey,
        });

        const completion = await openai.chat.completions.create({
            messages: [
                {
                    role: 'user',
                    content: encodeURIComponent(text)
                },
            ],
            model: model,
        });

        data.result = completion.choices[0].message.content;

        return {
            code: d.util.setCode(data)
        };
    }
}