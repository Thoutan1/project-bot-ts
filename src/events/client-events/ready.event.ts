import { Event } from "classes/event.class";
import { Bot } from "classes/bot.class";
import consola from "consola";

export class Ready extends Event {
  constructor() {
    super({
      name: "ready",
    });
  }

  async action(client: Bot): Promise<void> {
    consola.success(`${client.user.tag} is online!`);
    client.user.setActivity({
      name: "Anime Wibu",
      type: "LISTENING",
    });
  }
}
