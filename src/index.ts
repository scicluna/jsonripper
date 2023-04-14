import { generateJson } from './generateJson';
import { settings } from './settings';
import wotlkSettings from './wotlk';

console.log(wotlkSettings);

//simply executes our generateJson async
(async () => {
    await generateJson(wotlkSettings);
    process.exit(0);
})()

