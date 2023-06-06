import { rollDie } from "../utility/rollDie";
import { Result, Ok, Err } from "ts-results";

function generateTag<T>(tags: T[]): Result<T, Error> {
    const dieroll = rollDie(tags.length - 1, 0);
    const result = tags[dieroll];
    if (!result) return Err(new Error(`Shit's fucked`));
    return Ok(result);
}

export { generateTag };