const obj = {
  name: "Onkar",
  address: {
    city: "pune",
  },
};

const obj2 = { ...obj }; //shallow copy
obj2.address.city = "solapur";

console.log(obj.address.city);
