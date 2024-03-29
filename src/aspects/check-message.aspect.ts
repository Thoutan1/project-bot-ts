import { SimpleException } from "exceptions/simple.exception";
import { Message } from "discord.js";
import { Bot } from "classes/client.class";
import { Aspect } from "ts-aspect";

export class CheckMessageAspect implements Aspect {
  execute(event: Event, args: any[]): void {
    const client: Bot = args[0];
    const message: Message = args[1];
    const author = message.author;
    const prefix = client.config.prefix;

    if (!author.bot && client.user.id !== author.id) {
      const isValidGuild = !!message.guild;
      const isValidPrefix = message.content.toLocaleLowerCase().trim().startsWith(prefix);

      if (!isValidPrefix) {
        throw new SimpleException(author, "Prefix Is Invalid");
      }

      if (!isValidGuild) {
        throw new SimpleException(author, "Guild Is Invalid");
      }
    } else {
      throw {};
    }
  }
}
