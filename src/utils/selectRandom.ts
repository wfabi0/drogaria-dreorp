import { ProductCardProps } from "./types";

export default function selectRandom(
  array: ProductCardProps[],
  quantity: number
) {
  if (quantity <= array.length) {
    const newArray = array.slice();
    const elements = [];
    for (let i = 0; i < quantity; i++) {
      const index = Math.floor(Math.random() * newArray.length);
      const elementsSelected = newArray.splice(index, 1)[0];
      elements.push(elementsSelected);
    }
    return elements;
  } else {
    return [];
  }
}
