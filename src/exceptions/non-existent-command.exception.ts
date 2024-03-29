import { LogExceptionAspect } from "aspects/log-exception.aspect";
import { UseAspect, Advice } from "ts-aspect";
import { Message } from "discord.js";
import { Exception } from "classes/exception.class";

export class NonExistentCommandException extends Exception {
  msg: Message;

  constructor(msg: Message) {
    super();

    this.msg = msg;
    this.message = `[COMMAND] Executor ${msg.author.tag} This Command Not Found: ${msg.content}?`;
  }

  @UseAspect(Advice.Before, LogExceptionAspect)
  async action(): Promise<void> {
    this.msg.reply({
      content: this.message,
    });
  }
}
