import { generateJson } from './generateJson';
import { settings } from './settings';

//simply executes our generateJson async
(async () => {
    await generateJson(settings);
    process.exit(0);
})()

