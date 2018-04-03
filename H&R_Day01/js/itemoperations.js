

const itemOperations = {
    itemArray:[],
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
    deleteItem(){
        this.itemArray = this.itemArray.filter(itemObject=>!itemObject.markForDelete);
    },
    findIndexOfItem(id){
        return this.itemArray.findIndex(itemObject=>itemObject.id==id);
    },
    updateItem(id,updatedData){
        //var itemObject = this.searchById(id);
        var indexOfItem = this.findIndexOfItem(id);
        var data = this.itemArray[indexOfItem];
        var item  = new Item(0,"",0,"","","","");
        for(let key in item){  
         if(key=='markForDelete'){
             continue;
         }
         item[key] = document.querySelector("#"+key)
            .value;
            data[key]=updatedData[key];  
        }
    }
}
