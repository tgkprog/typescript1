export function LogIt(toNetwork: boolean) {
  return function (
    target: any,
    propertyKey: string,
    descriptor: PropertyDescriptor
  ) {
    if (toNetwork) {
      console.log("lgi to network too ");
    }
    const fn = descriptor.value as Function;
    descriptor.value = function (...args: any) {
      console.log("log before ");
      let error1;
      try {
        fn.call(this, ...args);
      } catch (er) {
        error1 = er; //make sure we log after too, but still have error to rethrow
      }
      console.log("method call done ");
      if (error1 !== undefined) throw error1;
    };
  };
}
