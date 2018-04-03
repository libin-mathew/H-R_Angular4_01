

const itemOperations = {
    itemArray:[],
    deleteMarkItem(){
        this.itemArray = this.itemArray.filter(itemObject=>itemObject.markForDelete==false)
    },
    addItem(itemObject){
       this.itemArray.push(itemObject); 
    },
    searchById(id){
        var result = this.itemArray.filter(itemObject=>itemObject.id == id);
        return result[0];
    },
    countMark(){
        return this.itemArray.filter(itemObject=>itemObject.markForDelete).length;
        // var subArray = this.itemArray.filter(itemObject=>itemObject.markForDelete);
        // return subArray.length;
    },
    mark(id){
        var itemObject = this.searchById(id);
        itemObject.toggle();
    },
    findIndexOfItem(id){
        return this.itemArray.findIndex(itemObject=>itemObject.id==id);
    },
    updateData(itemObject){
        var indexOfItem = this.findIndexOfItem(itemObject.id);
        var item  = new Item(0,"",0,"","","","");
        for(let key in item){  
         if(key=='markForDelete'){
             continue;
         }
         this.itemArray[indexOfItem][key] =itemObject[key];
        }
    },
    sort() {
          this.itemArray.sort((a,b)=>a.price-b.price);
    }
}
