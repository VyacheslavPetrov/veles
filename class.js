class Table {
  constructor(item){
    this.arr = []
    console.log(item)
  }

  onPush(item) {
    this.arr.push(item)
  }

  onGet(){
    return this.arr
  }
}

module.exports = {Table}





