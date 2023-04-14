import { exit } from 'process';
import { generateJson } from './generateJson';
import { settings } from './settings';

(async () => {
    await generateJson(settings);
    process.exit(0);
})()

