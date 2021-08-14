import {
  sortOwnerPetData,
  sortCats,
  filterOwnerWithCats,
  filterByGender,
} from "./SortData";

describe("Making sure sorting returning data successfully", () => {
  it("should break it up into single pet per owner", () => {
    const lists = [
      {
        name: "Bob",
        gender: "Male",
        age: 23,
        pets: [
          { name: "Garfield", type: "Cat" },
          { name: "Fido", type: "Dog" },
        ],
      },
      {
        name: "Jennifer",
        gender: "Female",
        age: 18,
        pets: [{ name: "Garfield", type: "Cat" }],
      },
    ];
    const expectedResults = [
      {
        ownerName: "Bob",
        ownerGender: "Male",
        name: "Garfield",
        type: "Cat",
      },
      {
        ownerName: "Bob",
        ownerGender: "Male",
        name: "Fido",
        type: "Dog",
      },
      {
        ownerName: "Jennifer",
        ownerGender: "Female",
        name: "Garfield",
        type: "Cat",
      },
    ];
    const mock = sortOwnerPetData(lists);
    expect(mock).toEqual(expectedResults);
  });

  it("should sort item by alphabetical order", () => {
    const lists = [
      {
        ownerName: "A",
        ownerGender: "Male",
        name: "Carrot",
        type: "Cat",
      },
      {
        ownerName: "B",
        ownerGender: "Male",
        name: "Banana",
        type: "Cat",
      },
      {
        ownerName: "C",
        ownerGender: "Male",
        name: "Apple",
        type: "Cat",
      },
    ];
    const expectedResults = [
      {
        ownerName: "C",
        ownerGender: "Male",
        name: "Apple",
        type: "Cat",
      },
      {
        ownerName: "B",
        ownerGender: "Male",
        name: "Banana",
        type: "Cat",
      },
      {
        ownerName: "A",
        ownerGender: "Male",
        name: "Carrot",
        type: "Cat",
      },
    ];
    const mock = sortCats(lists);
    expect(mock).toEqual(expectedResults);
  });

  it("should only get object that contains type Cat", () => {
    const lists = [
      {
        ownerName: "A",
        ownerGender: "Male",
        name: "Carrot",
        type: "Fish",
      },
      {
        ownerName: "B",
        ownerGender: "Male",
        name: "Banana",
        type: "Cat",
      },
      {
        ownerName: "C",
        ownerGender: "Male",
        name: "Apple",
        type: "Dog",
      },
    ];
    const expectedResults = [
      {
        ownerName: "B",
        ownerGender: "Male",
        name: "Banana",
        type: "Cat",
      },
    ];
    const mock = filterOwnerWithCats(lists);
    expect(mock).toEqual(expectedResults);
  });

  it("should only get object that contains specific gender", () => {
    const lists = [
      {
        ownerName: "A",
        ownerGender: "Male",
        name: "Carrot",
        type: "Fish",
      },
      {
        ownerName: "B",
        ownerGender: "Female",
        name: "Banana",
        type: "Cat",
      },
      {
        ownerName: "C",
        ownerGender: "Female",
        name: "Apple",
        type: "Dog",
      },
    ];
    const expectedResults = [
      {
        ownerName: "A",
        ownerGender: "Male",
        name: "Carrot",
        type: "Fish",
      },
    ];
    const mock = filterByGender(lists, "Male");
    expect(mock).toEqual(expectedResults);
  });
});
