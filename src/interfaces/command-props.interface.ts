import { Message } from "discord.js";
import { Category } from "enums/category.enum";

export interface CommandProps {
  name: string;
  category: Category;
  disable: boolean;
  cooldownReply?: number;
  description?: string;
  aliases?: string[];
  message?: Message;
  cooldownToUse?: number;
}
