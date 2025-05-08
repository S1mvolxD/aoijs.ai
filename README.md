<p align="center">
  <a>
    <img width="300" src="https://cdn.discordapp.com/attachments/1143145944767021096/1369982095065092136/photo_2025-05-08_17-16-43.jpg?ex=681dd6c0&is=681c8540&hm=de4dffccc7d8ec556f0e821b8c42de528b977d5e98573a9a64403367f5ea16ab&">
  </a>
</p>

# ✨️ Information
- **What is aoijs.ai** --  this is an extension for the bot constructor aoi.js adding simple integration with neural networks:
- **Warning:** only supports aoi.js version: v6+
  
- **Explanation for those who do not know aoi.js:** 
  - aoi.js is a JavaScript library that is designed to make it easy to build Discord bots.

  - It is open-source and free to use, and provides a simple, easy-to-use interface for interacting with the Discord API and handling events.

  - aoi.js is suitable for beginners who are new to building bots, as well as experienced developers who want to save time and streamline their workflow.

---

### 📒 Setup
```bash
npm install https://github.com/S1mvolxD/aoijs.ai.git
```

- To get started with aoijs.ai, follow these steps:
- index.js
```js
const { AoiClient } = require("aoi.js");
const { AIManager } = require('aoijs.ai');

const client = new AoiClient({
  token: "Discord Bot Token",
  prefix: "Discord Bot Prefix",
  intents: ["MessageContent", "Guilds", "GuildMessages"],
  events: ["onMessage", "onInteractionCreate"],
  database: {
    type: "aoi.db",
    db: require("@aoijs/aoi.db"),
    dbType: "KeyValue",
    tables: ["main"],
    securityKey: "a-32-characters-long-string-here"
    }
});

new AIManager(client, {
    debug: true,
})
```
<details>
  <summary>Show Function's List</summary>

| Functions               | Params                          | Required Params ( true / false ) | Description                            |
|-------------------------|---------------------------------|----------------------------------|----------------------------------------|
| $chatGPTV4              | [text]                          | [true]                           | ChatGPT 4 from OpenAI.                 |
| $commandRPlus           | [text]                          | [true]                           | Command R+ from Cohere AI.             |
| $fastTTV                | [text;style]                    | [true, false]                    | Fast Text-To-Video with styles.        |
| $flux                   | [text;ratio]                    | [true, false]                    | Flux.1 models from blackforextlabs.ai. |

</details>
