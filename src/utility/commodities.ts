import { generateTag } from "../generators/tags";
import { standardCommodities } from "../constants/commodities_tags";
export { ITag } from "./tags"

const commodity = generateTag(standardCommodities).unwrap();

export { commodity };