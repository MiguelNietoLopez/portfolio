import path from "path";
import { promises as fs} from "fs";

export default async function handler(req, res)
{
    const jsonPath = path.join(process.cwd(), 'public');
    const fileContents = await fs.readFile(jsonPath + "/languagesToRender.json", 'utf-8');
    res.status(200).json(fileContents);

}