import { NonExistentCommandException } from "exceptions/non-existent-command.exception";
import { DisbaleExpection } from "exceptions/disbale.expection";
import { CheckMessageAspect } from "aspects/check-message.aspect";
import { Message } from "discord.js";
import { getMessageArgs } from "utils/string.util";
import { Bot } from "classes/client.class";
import { Event } from "classes/event.class";
import { UseAspect, Advice } from "ts-aspect";

export class MessageEvent extends Event {
  constructor() {
    super({
      name: "messageCreate",
    });
  }

  @UseAspect(Advice.Before, CheckMessageAspect)
  async action(client: Bot, message: Message): Promise<void> {
    const args = getMessageArgs(message, client.config.prefix);
    const command = client.getCommand(args.shift());

    if (command) {
      if (command.disable == true) {
        throw new DisbaleExpection(message);
      }
      command.setMessage(message);
      command.run(client, message, args);
    } else {
      throw new NonExistentCommandException(message);
    }
  }
}
