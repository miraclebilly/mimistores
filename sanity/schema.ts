import { type SchemaTypeDefinition } from "sanity"
import { product } from "./schemas/product-schema";
product

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [product],
}
