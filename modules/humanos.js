const pets = require('./../data/pets.json')

const exibirNomeDoDono = idDoPet => {
    for (let pet of pets) {
        if (idDoPet == pet.id) {
            console.log(`Nome do dono: ${pet.nomeDoDono}`)
        }
    }
}
module.exports = exibirNomeDoDono