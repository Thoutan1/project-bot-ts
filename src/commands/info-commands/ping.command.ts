import { Command } from "classes/command.class";
import { Bot } from "classes/client.class";
import { Category } from "enums/category.enum";
import { Message, MessageEmbed } from "discord.js";
import { Colors } from "enums/color.enum";

export class Ping extends Command {
  constructor(client: Bot) {
    super(client, {
      name: "ping",
      description: "Replied with pong",
      category: Category.MESSAGE,
      disable: true,
      ownerOnly: false,
      cooldownReply: 0,
      cooldownToUse: 5000,
      aliases: ["pg"],
    });
  }

  async runCommand(client: Bot, message: Message, args: string[]): Promise<void> {
    const Floor = ["pong", "ping", "yeah"];
    const Math1 = Floor[Math.floor(Math.random() * Floor.length)];
    const EmbedPing = new MessageEmbed()
      .setColor(Colors.Info)
      .setThumbnail(message.author.displayAvatarURL({ dynamic: true, format: "png" }))
      .setDescription(`${Math1.toLowerCase()} ${client.ws.ping}`)
      .setFooter(`Request By ${message.author.tag}`);
    await this.respond({ embeds: [EmbedPing] });
  }
}
