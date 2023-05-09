//const { defa } = import("crypto");
/* Sample function decorator with sample parameter */
export function sampleMethodDecorator(toNetwork: boolean) {
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

export function Capitalize(
  target: any,
  propertyKey: string,
  descriptor: PropertyDescriptor
) {
  const fn = descriptor.get;
  descriptor.get = function () {
    const origRtn = fn?.call(this);
    return typeof origRtn === "string" ? origRtn.toUpperCase() : origRtn;
  };
}

export function Capitalize2(
  target: any,
  propertyKey: string,
  descriptor: PropertyDescriptor
) {
  const fn = descriptor.value;
  descriptor.value = function (...args: any) {
    const origRtn = fn?.call(this, ...args);
    return typeof origRtn === "string" ? origRtn.toUpperCase() : origRtn;
  };
}
