export const usingLet = () => {
    let a = 10;
    const innerF = () => {
        let b = 10;
        console.log(a);
    }
    innerF();
    console.log(b); // this will give an error

    if (true)
    {
      let c = 4;   
    }

    console.log(c); // this will give an error

    if (true)
    {
        var d = 5;
    }
    
    console.log(d); // this will run correct as it is in the scope
}