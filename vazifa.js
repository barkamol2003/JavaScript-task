let obj = [
    {
        id: 1,
        name: 'Bekzod',
        surname: 'Abdulkhaev'
    },
    {
        id: 2,
        name: 'Akbarjon',
        surname: 'Urasbayev'
    },
    {
        id: 3,
        name: 'Barkamol',
        surname: 'Olimjonov'
    },
    {
        id: 4,
        name: 'Jamshid',
        surname: 'Karimkulov'
    },
    {
        id: 5,
        name: 'Mirabdullo',
        surname: 'Toshtanov'
    }
]
obj.sort(function(a ,b){
    if (a.name.toLocaleLowerCase() < b.name.toLocaleLowerCase()) return -1;
    if (a.name.toLocaleLowerCase() > b.name.toLocaleLowerCase()) return 1;
    return 0
});
console.log(obj);