/**  Problem 1 - A
 * Crear un objeto con un metodo "Hello" que imprima "Hello <name> in the console"
 */

const p = {
    name: "Josimar",
    hello: () => console.log(`Hello ${p.name}`)
}

p.hello();
p.name="Carlos";
p.hello();



/**  Problem 1 - B
 * Hacer que el nombre sea inmutable
 */
//Object.freeze(p);

p.name="Izco";
p.hello();
p.name="manuel";
p.hello();

/**  Problem 2
 * obtener las 5 ciudades mas repetidas
 */

const city = ([
    "andahuaylas",
    "andahuaylas",
    "ayacucho",
    "andahuaylas",
    "ayacucho",
    "abancay",
    "cuzco",
    "arequipa",
    "juliaca",
    "puno",
    "ayacucho",
    "tacna",
    "andahuaylas",
    "ayacucho",
    "abancay",
    "moquegua",
    "andahuaylas",
    "abancay",
    "juliaca"
]);

function logOcurrCities(numCities){
    const cities = {}
    city.forEach(city2 => {
        cities[city2] = !cities[city2] ? 1 : cities[city2] += 1
    })

    return Object.keys(cities)
    .map(city2 => ({name:city2, times:cities[city2]}))
    .sort((a,b)=> b.times-a.times)

}

console.log(logOcurrCities(5));