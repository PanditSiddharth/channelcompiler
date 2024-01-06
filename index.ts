require("./config")
import {Telegraf} from "telegraf"
import addButton from "./src/addButton"
import run from "./src/run"
import bt from "./bot"
try {

let bot = new Telegraf(process.env.TOKEN as any, {handlerTimeout: 1000000});

addButton(bot);
run(bot)
bt(bot)

bot.launch({"dropPendingUpdates": true})

} catch (error: any) {
   
}
