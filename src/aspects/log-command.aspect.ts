import { Command } from "classes/command.class";
import { Aspect } from "ts-aspect";
import consola from "consola";
import moment from "moment";

export class LogCommandAspect implements Aspect {
  execute(command: Command): void {
    const username = command.message.author.username;
    const date = Date.now();

    consola.success(`[COMMAND] [${username}] Use Command [${command.name}] [${command.description}] - ${moment(date).format("LLLL")}`);
  }
}
