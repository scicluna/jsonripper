import fs from 'fs';
import path from 'path';
import { Setting } from './settings';
import { WotlkSetting } from './wotlk';

//Change output folder to whatever you want
const outputFolder = path.join(__dirname, '../output');

//Loop over our "settings" and spit out JSON files
export async function generateJson(settings: WotlkSetting[]) {
    if (!fs.existsSync(outputFolder)) fs.mkdirSync(outputFolder)

    for (const setting of settings) {
        const fileName = `${setting.player.class}${setting.player.bonusStats.stats[9]}.json`
        const filePath = path.join(outputFolder, fileName)

        await fs.promises.writeFile(filePath, JSON.stringify(setting), 'utf-8')
        console.log('JSON generated')
    }
}
