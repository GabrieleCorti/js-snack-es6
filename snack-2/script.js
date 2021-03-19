function randomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

const Squadre = [
    {
        nome: "Samp",
        falliSubiti: 0,
        punti: 0
    },
    {
        nome: "Milan",
        falliSubiti: 0,
        punti: 0
    },
    {
        nome: "Inter",
        falliSubiti: 0,
        punti: 0
    }
];

const NewSquadre = [];
for (let i = 0; i < Squadre.length; i++) {
    
    Squadre[i]["falliSubiti"] = randomInt(0, 10);
    Squadre[i]["punti"] = randomInt(0, 10);

    NewSquadre.push({
        nome: Squadre[i]["nome"],
        falliSubiti: Squadre[i]["falliSubiti"]
    })
}
console.log(NewSquadre);