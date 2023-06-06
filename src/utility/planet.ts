import { worldTag } from "../constants/world_tags";
import { atmosphere } from "../constants/atmosphere_tags";
import { temperature } from "../constants/temperature_tags";
import { biosphere } from "../constants/biosphere_tags";
import { population } from "../constants/population_tags";
import { techLevel } from "../constants/tech_level_tags";
import { highTradeTag, lowTradeTag } from "../constants/trade_tags";
import { generateTradeTag } from "../generators/tradeTags";
import { generateTag } from "../generators/tags";

const world = generateTag(worldTag).unwrap();
const atmo = generateTag(atmosphere).unwrap();
const temp = generateTag(temperature).unwrap();
const bios = generateTag(biosphere).unwrap();
const pop = generateTag(population).unwrap();
const tech = generateTag(techLevel).unwrap();
const trade = generateTradeTag(highTradeTag, lowTradeTag).unwrap();

const planet = {
    world,
    atmo,
    temp,
    bios,
    pop,
    tech,
    trade
}

export {planet}; 