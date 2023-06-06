import { coinFlip, rollDie } from "../utility/rollDie";
import { ITradeTag } from "../constants/trade_tags";
import { Result, Ok, Err } from "ts-results";
function generateTradeTag(highTradeTags: ITradeTag[], lowTradeTags: ITradeTag[]): Result<ITradeTag, Error> {
    if (coinFlip()) {
        const table = rollDie(highTradeTags.length);
        const result = highTradeTags[table]
        if (typeof result !== "undefined") {
            return Ok(result);
        }
    } else {
        const table = rollDie(lowTradeTags.length);
        const result = lowTradeTags[table]
        if (typeof result !== "undefined") {
            return Ok(result);
        }
    }
    return Err(new Error(`shit's fucked`));
}

export { generateTradeTag };