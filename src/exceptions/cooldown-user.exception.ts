import { LogExceptionAspect } from "aspects/log-exception.aspect";
import { UseAspect, Advice } from "ts-aspect";
import { Exception } from "classes/exception.class";
import { Command } from "classes/command.class";

export class CooldownException extends Exception {
  command: Command;

  constructor(command: Command) {
    super();

    this.command = command;
    this.message = `[COMMAND] Username ${this.command.message.author.username} ` + `This command ${this.command.name} In cooldown `;
  }

  @UseAspect(Advice.Before, LogExceptionAspect)
  async action(): Promise<void> {
    await this.command.message.reply({ content: this.message });
  }
}
