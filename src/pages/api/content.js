import { Content } from "./model";

export default async function handler(req, res) {
  if (req.method === "GET") {
    const contentData = await Content.find({});
    res.status(200).json(contentData);
  } else if (req.method === "POST") {
    const { body } = req;
    const contentData = new Content({ data: body });
    await contentData.save();
    res.status(200).json({ msg: "Data Saved Successfully" });
  }
}
