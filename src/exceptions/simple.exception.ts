import { LogExceptionAspect } from "aspects/log-exception.aspect";
import { User } from "discord.js";
import { Exception } from "classes/exception.class";
import { UseAspect, Advice } from "ts-aspect";
import moment from "moment";

export class SimpleException extends Exception {
  constructor(user: User, msg: string) {
    super();
    let date = Date.now();
    this.message = `[COMMAND] [${user.username}] - ${msg} - ${moment(date).format("LLLL")}`;
  }

  @UseAspect(Advice.Before, LogExceptionAspect)
  async action(): Promise<void> {}
}
