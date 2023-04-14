import fs from 'fs';
import path from 'path';
import { settings, Setting } from './settings';

const outputFolder = path.join(__dirname, '../output');

export async function generateJson(settings: Setting[]) {
    if (!fs.existsSync(outputFolder)) fs.mkdirSync(outputFolder)

    for (const setting of settings) {
        const fileName = `${setting.name}-${setting.thing}.json`
        const filePath = path.join(outputFolder, fileName)

        await fs.promises.writeFile(filePath, JSON.stringify(setting), 'utf-8')
        console.log('JSON generated')
    }
}