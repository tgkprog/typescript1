export function CacheIt(
  target: any,
  propertyKey: string,
  descriptor: PropertyDescriptor
) {
  const fn = descriptor.value;
  descriptor.value = function (...args: any) {
    const origRtn = fn?.call(this, ...args);
    return origRtn;
  };
}
