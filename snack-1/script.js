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
        peso: 4000
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
var biciLeggera

for (let i = 0; i < bici.length; i++) {
    let {peso} = bici[i];

    if (peso < leggero) {
        
        leggero = peso;
        biciLeggera = bici[i];
    }
    
}

console.log(biciLeggera);