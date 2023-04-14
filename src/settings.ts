//Update interface as JSON file changes
export interface Setting {
    name: string;
    thing: string;
}

//Each item will be turned into its own JSON file
export const settings: Setting[] = [
    { name: 'profile 1', thing: 'cool' },
    { name: 'profile 2', thing: 'thing' },
    { name: 'profile 3', thing: 'asd' },
    { name: 'profile 4', thing: 'thhgdhding' }
]

