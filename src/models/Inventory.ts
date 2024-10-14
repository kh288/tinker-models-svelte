import type Item from "./Item";

export default class Inventory {
  items: Item[];
  constructor(items: Item[]) {
    this.items = items;
  }
}
