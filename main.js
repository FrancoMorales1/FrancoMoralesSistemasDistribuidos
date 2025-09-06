const apiHandler = require('./apiHandler');
const util = require('./util');

async function sequential_execution() {
    console.time("Secuencial");
    console.log("--- Ejecución Secuencial ---");

    let users = await apiHandler.getUsers();
    users.splice(3); // Arranca del 1 el array al usar splice y no del cero. ¿?
    let posts = null;
    for (const user of users) {
        posts = await apiHandler.getPostsWithId(user.id);
        console.log(`${user.name} tiene ${posts.length} publicaciones`);
    }
    console.timeEnd("Secuencial");
    // Originalmente use 
    // users.foreach(async (user) => {
    //      posts = await apiHandler.getPostsWithId(user.id);
    //      console.log(`${user.name} tiene ${posts.length} publicaciones`);
    // })
    // Problema: No espera a que termine cada ejecucion del foreach
    // lo que afecta el resto de ejecucion de codigo en el metodo main.
    // Se uso ChatGPT para identificar que 'for (const user of users) {' espera
    // a que termine cada ejecucion. Hasta donde entiendo es porque no estaria
    // llamando metodos asincronos, cosa que si hago con el users.foreach
}

async function parallel_execution() {
    console.time("Paralelo");
    console.log("--- Ejecución Paralela ---");
    let users = null;
    let promises = [];
    await apiHandler.getUsers()
        .then(response => {
            users = response;
            users.splice(3);
        })
        .then(() => {
            users.forEach(user => {
                promises.push(apiHandler.getPostsWithId(user.id))
            })
        })
        .then(() => {
            Promise.all(promises)
                .then((values) => {
                    users.forEach((user, index) => {
                        console.log(`${user.name} tiene ${values[index].length} publicaciones`);
                    })
                    
                })
        })
    console.timeEnd("Paralelo");
}

async function main(){
    await sequential_execution();
    console.log("\n");
    await parallel_execution();
}

main()