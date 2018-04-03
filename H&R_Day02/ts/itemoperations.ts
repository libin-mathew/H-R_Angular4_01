import { Item } from './item'

const itemOperations = {
    itemArray: [],
    deleteMarkItem() {
        this.itemArray = this.itemArray.filter((itemObject: Item) => itemObject.getMarkForDelete == false)
    },
    addItem(itemObject: Item) {
        this.itemArray.push(itemObject);
    },
    searchById(id: number) {
        var result = this.itemArray.filter((itemObject: Item) => itemObject.getId == id);
        return result[0];
    },
    countMark() {
        return this.itemArray.filter((itemObject: Item) => itemObject.getMarkForDelete).length;
        // var subArray = this.itemArray.filter(itemObject=>itemObject.markForDelete);
        // return subArray.length;
    },
    mark(id: number) {
        var itemObject: Item = this.searchById(id);
        itemObject.toggle();
    },
    findIndexOfItem(id: number) {
        return this.itemArray.findIndex((itemObject: Item) => itemObject.getId == id);
    },
    updateData(itemObject: Item) {
        var indexOfItem: number = this.findIndexOfItem(itemObject.getId);
        var keyItem = new Item(0, "", 0, "", "", "", "", false);
        for (let key in keyItem) {
            if (key == 'markForDelete') {
                continue;
            }
            this.itemArray[indexOfItem][key] = itemObject[key];
        }
    },
    sort() {
        this.itemArray.sort((a: Item, b: Item) => a.getPrice - b.getPrice);
    }

}
export default itemOperations.itemArray;
