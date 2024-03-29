import { Event } from "classes/event.class";
import { Bot } from "classes/client.class";
import consola from "consola";

export class Ready extends Event {
  constructor() {
    super({
      name: "ready",
    });
  }

  async action(client: Bot): Promise<void> {
    consola.success(`${client.user.tag} is online!`);
    client.user.setActivity("Ray Typescript", { type: "COMPETING" });
  }
}
