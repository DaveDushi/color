import getColorPallet from "../utils/openai.js";
import sendEmail from "../utils/mailer.js";
import { User } from "../models/tables.js";
import { emailSchema } from "../config/validationSchemas.js";

export const generate = async (req, res) => {
  const {
    email,
    use,
    audience,
    cultural,
    style,
    accessibility,
    mood,
    brand,
    medium,
    specificColors,
    colorCount,
    colorHarmonies,
    marketingEmails,
  } = req.body;

  console.log(req.body);

  try {
    emailSchema.parse({
      email,
      marketingEmails: marketingEmails === "on",
    });

    const user = await User.create({
      email,
      marketingEmails: marketingEmails === "on",
    });

    const prompt = `Create a ${colorCount}-color palette for a ${use} that evokes ${mood} and ${brand} identity. 
      Include shades of ${specificColors} and one accent color. 
      Consider the ${audience}, ${cultural} significance, ${style}, and ${accessibility} of the palette. 
      The colors should reflect ${colorHarmonies} and be suitable for ${medium}`;

    const message = await getColorPallet(prompt);

    const colorList = message.split("\n").map((color) => color.trim());

    const response = await sendEmail(email, colorList);

    res.status(200).json({ message });
  } catch (error) {
    res.status(500).json({ error });
  }
};

export const getUsers = async (req, res) => {
  const users = await User.findAll();
  res.json(users);
};
