import { Telegraf, Context } from "telegraf"

let addButton = (bot: Telegraf) => {
  bot.on("channel_post", async (ctx: Context) => {
    try{
    let cp: any = ctx.channelPost
    
    let a = (m:any) => {
      if(cp.text.startsWith(m)){
       cp.text = cp.text.replace(m, "")
        return true
      }
      return false
    }
    
    let cmp:string;
    
    if(a("/js"))
      cmp = "js"
    else if(a("/py"))
      cmp = "py"
          else if(a("/jv"))
      cmp = "jv"
        else if(a("/cc"))
      cmp = "code"
        else if(a("/cpp"))
      cmp = "cpp"
        else if(a("/go"))
      cmp = "go"
          else if(a("/ts"))
      cmp = "ts"

    if(!cmp)
      return
      
    ctx.deleteMessage().catch((err:any)=>{})

    if(cmp == "py"){
    ctx.sendMessage(cp.text, {
      reply_markup: {
        inline_keyboard: [
          [{ text: "Run", callback_data: "" + cmp },
          { text: "show", url: "t.me/python_0bot?start=run" }]
        ]
      }
    }).catch((err: any)=>{})

    } else {
          ctx.sendMessage(cp.text, {
      reply_markup: {
        inline_keyboard: [
          [{ text: "Run", callback_data: "" + cmp },
          { text: "show", url: "t.me/compiler0bot?start=run" }]
        ]
      }
    }).catch((err: any)=>{})
    }
  } catch (error: any) {}
    
  })
}

export default addButton;