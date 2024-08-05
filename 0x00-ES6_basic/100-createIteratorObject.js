export default function createIteratorObject(report) {
  return {
    [Symbol.iterator]() {
      const allEmps = Object.values(report.allEmployees).flat();
      let i = -1;
      return {
        next() {
          if (i < allEmps.length - 1) {
            i += 1;
            return { done: false, value: allEmps[i] };
          }
          return { done: true, value: undefined };
        },
      };
    },
  };
}
