const stringOperations = {
  validateInput: (value: string, validType: string): boolean => {
    switch (validType) {
      case "number":
        return /^\d+$/.test(value);

      default:
        return true;
    }
  },
};
export default stringOperations;
