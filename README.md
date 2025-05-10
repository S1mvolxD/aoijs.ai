<p align="center">
  <a>
    <img width="300" src="https://cdn.discordapp.com/attachments/1143145944767021096/1369982783463886868/Picsart_25-05-08_17-20-41-395.png?ex=681dd764&is=681c85e4&hm=2dc992964a864edbd63bc352ced74131a6689fc9493f2459970c0b5a0317f8f1&">
  </a>

  - **[Aoi.js Support Server](https://aoi.js.org/invite)**
  - **[Aoijs.ai Support Server](https://discord.gg/KrH5xHns5v)**
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

  <summary>Show Setting's List</summary>

| Name                    | Value                                                                              | Approximately                                    |
|-------------------------|------------------------------------------------------------------------------------|--------------------------------------------------|
| $fastTTV                | [anime, realistic.]                                                                | $fastTTV[A cute kitten with cute girl;realistic] |
| $flux                   | [square, portrait, landscape, 1024x1024, 1024x712, 712x1024, 1024x512, 512x1024.]  | $flux[A cute kitten;square]                      |

</details>
