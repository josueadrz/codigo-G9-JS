// for (let i = 0 ; i <=20 ; i++){
//     console.log("iterador" , i)
// }

// for (let i = 5 ; i <=20 ; i++){
//     console.log("iterador" , i)
// }

// for (let j = 10 ; j <=50 ; i++){
//     console.log("jotas" , j);
// }




const places = [
    {
        name: "tecsup",
        location: "peru",
    },
    {
        name: "playa",
        location: "cancun",
    },
    {
        name: "parque",
        location: "kenedi",
    }
]

places.map((places)=>{
    console.log(places.location)
})


// //veamos retunr del map
// const numerito = {1,2,3,4,5,6,7,8,9,10};

// const operacionProducto = numerito.map((numerito)=>{
//     return numerito * 2
// })