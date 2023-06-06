const lowTradeTag = [
    { tag: `Alien`, description: `Strange or inhuman inhabitants` },
    { tag: `Closed`, description: `Contact is technically forbidden` },
    { tag: `Communist`, description: `All belongs to the State` },
    { tag: `Disorganized`, description: `There's no central authority` },
    { tag: `Dying`, description: `The world is doomed in the near future` },
    { tag: `Fractious`, description: `The locals are in struggling factions` },
    { tag: `Kleptocratic`, description: `The rulers are unabashed thieves` },
    { tag: `Laissez Faire`, description: `Free trade is a prized value` },
    { tag: `Megacorps`, description: `Giant corporations control trade` },
    { tag: `Military`, description: `The planet is heavily militarized` },
    { tag: `Opened`, description: `They only recently contacted others` },
    { tag: `Panopticon`, description: `Everyone is always watched` }
];
const highTradeTag = [
    { tag: `Primitive`, description: `The locals are tech-primitive` },
    { tag: `Restricted`, description: `Someone is restraining trade there` },
    { tag: `Scarcity`, description: `The world direly lacks something` },
    { tag: `Secret`, description: `The outside cosmos is a secret there` },
    { tag: `Sophisticated`, description: `They're jaded toward far traders` },
    { tag: `Theocratic`, description: `Trade goes through priest-rulers` },
    { tag: `Thriving`, description: `The local economy is booming` },
    { tag: `Tribute`, description: `Everyone works to provide tribute` },
    { tag: `Tyrannical`, description: `The ruler is a brutal tyrant` },
    { tag: `Usurped`, description: `Someone else profits by their trade` },
    { tag: `Vendor`, description: `Something precious is only made here` },
    { tag: `Xenophobic`, description: `The locals fear and hate outsiders` }
];
interface ITradeTag {
    tag: string,
    description: string
}

export { lowTradeTag, highTradeTag, ITradeTag }