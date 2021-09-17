import { LogExceptionAspect } from "aspects/log-exception.aspect";
import { UseAspect, Advice } from "ts-aspect";
import { Exception } from "classes/exception.class";
import { Command } from "classes/command.class";
import { Message } from "discord.js";

export class OwnerOnlyException extends Exception {
  msg: Message;

  constructor(msg: Message) {
    super();

    this.msg = msg;
    this.message = `[COMMAND] Hey ${msg.author.tag} This Command are **(Only Developer To Execute)**`;
  }

  @UseAspect(Advice.Before, LogExceptionAspect)
  async action(): Promise<void> {
    await this.msg.reply({ content: this.message });
  }
}
