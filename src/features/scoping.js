export const usingLet = () => {
    let a = 10;
    const innerF = () => {
        let b = 10;
        console.log(a);
    }
    innerF();
    console.log(b); // this will give error

}