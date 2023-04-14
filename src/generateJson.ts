import fs from 'fs';
import path from 'path';
import { Setting } from './settings';

//Change output folder to whatever you want
const outputFolder = path.join(__dirname, '../output');

//Loop over our "settings" and spit out JSON files
export async function generateJson(settings: Setting[]) {
    if (!fs.existsSync(outputFolder)) fs.mkdirSync(outputFolder)

    for (const setting of settings) {
        const fileName = `${setting.name}-${setting.thing}.json`
        const filePath = path.join(outputFolder, fileName)

        await fs.promises.writeFile(filePath, JSON.stringify(setting), 'utf-8')
        console.log('JSON generated')
    }
}