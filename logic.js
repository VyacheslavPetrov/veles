const {Table} = require('./class')

const myTable = new Table('item')
myTable.onPush({id: 1, name: "vasya"})

const arr = myTable.onGet()

console.log(arr)