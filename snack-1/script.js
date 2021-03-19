var bici = [
    {
        nome: "bici1",
        peso: 3000
    },
    {
        nome: "bici2",
        peso: 1000
    },
    {
        nome: "bici3",
        peso: 9000
    },
    {
        nome: "bici4",
        peso: 2000
    },
    {
        nome: "bici5",
        peso: 5000
    }
];

var {peso} = bici[0];
var leggero = peso;

for (let i = 0; i < bici.length; i++) {
    let {peso} = bici[i];

    if (peso < leggero) {
        
        leggero = bici[i];

    }
    
}

console.log(leggero);