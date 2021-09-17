import { Command } from "classes/command.class";
import { Bot } from "classes/client.class";
import { Category } from "enums/category.enum";
import { Message, MessageEmbed } from "discord.js";
import { Colors } from "enums/color.enum";
import weather from "weather-js";

export class Weather extends Command {
  constructor(client: Bot) {
    super(client, {
      name: "weather",
      description: "Show Information Data Weather (Country)",
      category: Category.MESSAGE,
      disable: false,
      cooldownReply: 0,
      cooldownToUse: 5000,
      aliases: ["cuaca"],
    });
  }

  async runCommand(client: Bot, message: Message, args: string[]): Promise<void> {
    if (!args[0]) {
      this.respond("Pliss Insert the country");
      return;
    }
    weather.find({ search: args[0], degreeType: "C" }, async function (err, result) {
      const WeatherEmbed = new MessageEmbed()
        .setColor(Colors.Neutral)
        .setThumbnail(result[0].current.imageUrl)
        .setDescription(`Showing weather data for ${result[0].location.name}`)
        .addField("Temp", `${result[0].current.temperature}°${result[0].location.degreetype}`);
      await message.reply({ embeds: [WeatherEmbed] });
    });
  }
}
