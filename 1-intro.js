// Globals no window !!!

// __dirname -path to current dir
// __filename fille name
//  require function to use modules(CommonJS)
//  module info about about current module (file)
// process -info about env 


const amount = 12
if (amount <10)   {
    console.log('small number');  
} else{
    console.log('Large number');
}

console.log(__dirname)
setInterval(()=> {
    console.log('Helo world')
}, 1000)