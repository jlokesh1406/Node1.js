
const name1="LOKESH";
const name2="lokesh";
module.exports={name1,name2};


module.exports.items=['one','two','three'];

const person = 
{
    name:"obj"
}
module.exports.obj=person;


let a = 1;
let b = 12;
function sum1() 
{
   console.log(a + b);
   return a + b;
}
module.exports.sum1 = sum1;

function sum2(c, d)
{
   console.log(c + d);
   return c + d;
}
module.exports.sum2 = sum2;
