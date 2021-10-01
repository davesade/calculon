// Priklady zprav

let messages = ["kolik je 1+1", "kolik je 6*12", "kolik je 7x8", "kolik je 89 / 9", "kolik je 64- 8", "kolik je 1 plus 1", "kolik je 6 *34"]

for (message of messages) {
    console.log(message)
    let vyparsovana_zprava = parsuj(message)
    console.log(kalkuluj(vyparsovana_zprava))
}

// Exportovane funkce

module.exports = function (message) {
    let vyparsovana_zprava = parsuj(message)
    let vysledek = kalkuluj(vyparsovana_zprava)
    if (typeof vysledek == 'number') {
        return `Spocital jsem, ze ${vyparsovana_zprava.a} ${vyparsovana_zprava.operator} ${vyparsovana_zprava.b} se rovna ${vysledek}. Dekujeme, ze pouzivate Kalkulona!`
    } else return "Neco se pokazilo, nedokozal jsem to spocitat. Omlouvame se."
}

function parsuj(message) {
    const povolene_operatory = ["+", "-", "*", "x", "/"]
    let zvoleny_operator = null

    povolene_operatory.forEach(operator => {
        if (message.includes(operator)) {
            zvoleny_operator = operator
        }
    });

    if (zvoleny_operator == null) return "Operator nebyl ve zprave nalezen."

    let rozdelena_zprava = message.split(zvoleny_operator)

    let cisla = rozdelena_zprava.map(element => {
        const regex = /[^\d.-]/g
        const vyparsovane_cislo = element.replace(regex, "")
        return parseInt(vyparsovane_cislo)
    })

    return {
        a: cisla[0],
        b: cisla[1],
        operator: zvoleny_operator
    }
}

function kalkuluj(objekt) {
    const operator = objekt.operator
    const a = objekt.a
    const b = objekt.b

    switch (operator) {
        case "+":
            return a + b
        case "-":
            return a - b
        case "*":
        case "x":
            return a * b
        case "/":
            return a / b
    }
}