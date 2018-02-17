// how to fetch the values from object
export const readObjectValues = () => {
   const obj = {name:"Virat", age:"30"};

   const {name: firstName, age: personAge} = obj;

   console.log(firstName);
   console.log(personAge);

   const obj1 = {name:"Ankit", age:"32"};
   readParameters(obj1);
}

// reading values from the function parameter
const readParameters = ({name, age}) => {
    console.log(name);
    console.log(age);
}


