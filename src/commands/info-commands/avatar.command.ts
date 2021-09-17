import { Command } from "classes/command.class";
import { Bot } from "classes/bot.class";
import { Category } from "enums/category.enum";
import { Message, MessageEmbed } from "discord.js";
import { Colors } from "enums/color.enum";

export class Avatar extends Command {
  constructor(client: Bot) {
    super(client, {
      name: "avatar",
      description: "Show your avatar",
      category: Category.MESSAGE,
      disable: false,
      cooldownReply: 0,
      cooldownToUse: 5000,
      aliases: ["av"],
    });
  }

  async runCommand(client: Bot, message: Message, args: string[]): Promise<void> {
    const EmbedAvatar = new MessageEmbed().setColor(Colors.Success).setImage(message.author.displayAvatarURL({ dynamic: true, size: 256 }));
    await this.respond({ embeds: [EmbedAvatar] });
  }
}
