//Convert the function below to a generic function:
/*
functionecho(arg) { returnarg; }
*/

function echo<T>(arg: T): T {
  return arg;
}

/*
functionprintName<T>(obj:T) {console.log(obj.name);}

//When compiling the following piece of code, we get an error saying ‘Property name does 
not exist on type T’. How can we solve this problem?


•An Entity should have a unique identifier. The type of identifier, however, is dependent on the use case. In some cases, the ID might be a number, in other cases, it might be a string, GUID, etc. Represent the entity using a generic class.  interfaceUser { userId:number; username:string;}•Given the following interface, what does keyof User return?

*/
interface IName {
  name?: string;
}
function printName<T extends IName>(obj: T) {
  console.log(obj.name);
}
