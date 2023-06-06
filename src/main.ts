import { planet } from "./utility/planet";
import { commodity } from "./utility/commodities";

console.log(
   `This world is ${planet.world.description}.
    The atmosphere is ${planet.atmo.description}.
    The temperature is ${planet.temp.description}.
    The biosphere is ${planet.bios.description}.
    The population is ${planet.pop.description}.
    The tech level is ${planet.tech.description}.
    The trade nature is ${planet.trade.description}.
    The local commodity is ${commodity.cargo}, ${commodity.cost} credits, ${commodity.techLevel}, ${commodity.type}.`
);