import {Telegraf} from "telegraf"
import addButton from "./src/addButton"
import run from "./src/run"
import bt from "./bot"
try {

let bot = new Telegraf(process.env.TOKEN as any);

addButton(bot);
run(bot)
bt(bot)

bot.launch({"dropPendingUpdates": true})

} catch (error: any) {
   
}
const express = require('express');

const app = express();
const port = 3000;

// Route handler for the root URL
app.get('/', (req:any, res:any) => {
  res.send('Hello, Express!');
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});