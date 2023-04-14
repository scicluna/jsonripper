export interface WotlkSetting {
    settings: {
        iterations: number;
        phase: number;
        showDamageMetrics: boolean;
        language: string;
        faction: string;
        filters: {
            oneHandedWeapons: boolean;
            twoHandedWeapons: boolean;
        };
    };
    raidBuffs: {
        giftOfTheWild: string;
        arcaneBrilliance: boolean;
        divineSpirit: boolean;
        demonicPactSp: number;
        moonkinAura: string;
        sanctifiedRetribution: boolean;
    };
    debuffs: {
        judgementOfWisdom: boolean;
        misery: boolean;
        faerieFire: string;
        curseOfElements: boolean;
        shadowMastery: boolean;
    };
    partyBuffs: Record<string, unknown>;
    player: {
        name: string;
        race: string;
        class: string;
        equipment: {
            items: {
                id: number;
                enchant?: number;
                gems?: number[];
            }[];
        };
        consumes: {
            flask: string;
            food: string;
            defaultPotion: string;
        };
        bonusStats: {
            stats: number[];
            pseudoStats: number[];
        };
        buffs: {
            blessingOfKings: boolean;
            blessingOfWisdom: string;
            vampiricTouch: boolean;
        };
        talentsString: string;
        glyphs: {
            major1: number;
            major2: number;
            major3: number;
            minor1: number;
            minor2: number;
            minor3: number;
        };
        profession1: string;
        profession2: string;
        cooldowns: Record<string, unknown>;
        healingModel: Record<string, unknown>;
        database: Record<string, unknown>;
        elementalShaman: {
            rotation: {
                totems: {
                    earth: string;
                    air: string;
                    fire: string;
                    water: string;
                };
                type: string;
                fnMinManaPer: number;
                clMinManaPer: number;
                useThunderstorm: boolean;
            };
            options: {
                shield: string;
                bloodlust: boolean;
            };
        };
    };
    encounter: {
        duration: number;
        durationVariation: number;
        executeProportion20: number;
        executeProportion25: number;
        executeProportion35: number;
        targets: {
            level: number;
            mobType: string;
            stats: number[];
            minBaseDamage: number;
            swingSpeed: number;
            parryHaste: boolean;
        }[];
    };
    epWeightsStats: {
        stats: number[];
        pseudoStats: number[];
    };
}

const wotlkSettings: WotlkSetting[] = []

//stat 10 is haste
let haste = 10;
for (let i = 0; i < 100; i++) {
    const setting: WotlkSetting =
    {
        "settings": {
            "iterations": 3000,
            "phase": 2,
            "showDamageMetrics": true,
            "language": "en",
            "faction": "Alliance",
            "filters": {
                "oneHandedWeapons": true,
                "twoHandedWeapons": true
            }
        },
        "raidBuffs": {
            "giftOfTheWild": "TristateEffectImproved",
            "arcaneBrilliance": true,
            "divineSpirit": true,
            "demonicPactSp": 500,
            "moonkinAura": "TristateEffectImproved",
            "sanctifiedRetribution": true
        },
        "debuffs": {
            "judgementOfWisdom": true,
            "misery": true,
            "faerieFire": "TristateEffectImproved",
            "curseOfElements": true,
            "shadowMastery": true
        },
        "partyBuffs": {},
        "player": {
            "name": "Player",
            "race": "RaceDraenei",
            "class": "ClassShaman",
            "equipment": {
                "items": [
                    {
                        "id": 40516,
                        "enchant": 3820,
                        "gems": [
                            41285,
                            40027
                        ]
                    },
                    {
                        "id": 44661,
                        "gems": [
                            39998
                        ]
                    },
                    {
                        "id": 40286,
                        "enchant": 3810
                    },
                    {
                        "id": 44005,
                        "enchant": 3722,
                        "gems": [
                            40027
                        ]
                    },
                    {
                        "id": 40514,
                        "enchant": 3832,
                        "gems": [
                            42144,
                            42144
                        ]
                    },
                    {
                        "id": 40324,
                        "enchant": 2332,
                        "gems": [
                            42144,
                            0
                        ]
                    },
                    {
                        "id": 40302,
                        "enchant": 3246,
                        "gems": [
                            0
                        ]
                    },
                    {
                        "id": 40301,
                        "gems": [
                            40014
                        ]
                    },
                    {
                        "id": 40560,
                        "enchant": 3721
                    },
                    {
                        "id": 40519,
                        "enchant": 3826
                    },
                    {
                        "id": 37694
                    },
                    {
                        "id": 40399
                    },
                    {
                        "id": 40432
                    },
                    {
                        "id": 40255
                    },
                    {
                        "id": 40395,
                        "enchant": 3834
                    },
                    {
                        "id": 40401,
                        "enchant": 1128
                    },
                    {
                        "id": 40267
                    }
                ]
            },
            "consumes": {
                "flask": "FlaskOfTheFrostWyrm",
                "food": "FoodFishFeast",
                "defaultPotion": "RunicManaInjector"
            },
            "bonusStats": {
                "stats": [
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    haste, // haste
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0
                ],
                "pseudoStats": [
                    0,
                    0,
                    0,
                    0,
                    0,
                    0
                ]
            },
            "buffs": {
                "blessingOfKings": true,
                "blessingOfWisdom": "TristateEffectImproved",
                "vampiricTouch": true
            },
            "talentsString": "0532001523212351322301351-005052031",
            "glyphs": {
                "major1": 41524,
                "major2": 45776,
                "major3": 41536,
                "minor1": 44923,
                "minor2": 43386,
                "minor3": 43725
            },
            "profession1": "Engineering",
            "profession2": "Jewelcrafting",
            "cooldowns": {},
            "healingModel": {},
            "database": {},
            "elementalShaman": {
                "rotation": {
                    "totems": {
                        "earth": "StrengthOfEarthTotem",
                        "air": "WrathOfAirTotem",
                        "fire": "TotemOfWrath",
                        "water": "ManaSpringTotem"
                    },
                    "type": "Adaptive",
                    "fnMinManaPer": 66,
                    "clMinManaPer": 33,
                    "useThunderstorm": true
                },
                "options": {
                    "shield": "WaterShield",
                    "bloodlust": true
                }
            }
        },
        "encounter": {
            "duration": 180,
            "durationVariation": 5,
            "executeProportion20": 0.2,
            "executeProportion25": 0.25,
            "executeProportion35": 0.35,
            "targets": [
                {
                    "level": 83,
                    "mobType": "MobTypeGiant",
                    "stats": [
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        574,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        10643,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0
                    ],
                    "minBaseDamage": 65000,
                    "swingSpeed": 1.5,
                    "parryHaste": true
                }
            ]
        },
        "epWeightsStats": {
            "stats": [
                0,
                0,
                0,
                0.22,
                0,
                1,
                0.08,
                0,
                0.67,
                1.29,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0
            ],
            "pseudoStats": [
                0,
                0,
                0,
                0,
                0,
                0
            ]
        }
    }
    wotlkSettings.push(setting);
    haste += 10;
}

export default wotlkSettings;