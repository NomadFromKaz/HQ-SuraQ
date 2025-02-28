from telegram import Update
from telegram.ext import Application, CommandHandler, ContextTypes

async def start(update: Update, context: ContextTypes.DEFAULT_TYPE):
    await update.message.reply_text("Welcome to Trivia Game! Use /play to start.")

async def play(update: Update, context: ContextTypes.DEFAULT_TYPE):
    web_app_url = "https://your-username.github.io/HQ-SuraQ"  # Replace with your deployed URL
    await update.message.reply_text(
        "Starting the game...",
        reply_markup={
            "inline_keyboard": [[{
                "text": "Play Now",
                "web_app": {"url": web_app_url}
            }]]
        }
    )

def main():
    application = Application.builder().token("8103926966:AAF0iuZA5uP_HRT6bKkuUzRemL8lHGqUdnw").build()
    application.add_handler(CommandHandler("start", start))
    application.add_handler(CommandHandler("play", play))
    application.run_polling()

if __name__ == "__main__":
    main()
