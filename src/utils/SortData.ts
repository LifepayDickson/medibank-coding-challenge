import { OwnerPets, Owner, Concat } from "../types";

// The very beginning of the data retrieval, this is to test your understanding on how to get the owner cats name.
export const fetchCats = (
  data: Owner
): { maleCatList?: OwnerPets[]; femaleCatList?: OwnerPets[] } => {
  if (data === undefined) {
    return {};
  }
  let catArray: OwnerPets[] = sortOwnerPetData(data);
  if (catArray.length === 0) {
    return {};
  }
  return {
    maleCatList: sortCats(
      filterOwnerWithCats(filterByGender(catArray, "Male"))
    ),
    femaleCatList: sortCats(
      filterOwnerWithCats(filterByGender(catArray, "Female"))
    ),
  };
};

// Reverse engineering to break user multiple pets to single user with their respective pets.
const sortOwnerPetData = (data: Owner) => {
  // Do a validation check when reading data, check if Array data is empty
  if (data === undefined || !Array.isArray(data) || data.length === 0) {
    return [];
  }

  // Executes a reducer function on each element of the array, resulting in a single output value.
  let ownerPet = data.reduce((collection: Concat<OwnerPets>, owner: Owner) => {
    // Check if this owner has pets
    if (owner.pets) {
      // Creates a new array populated with the results of calling a provided function on every element in the calling array.
      let pets = owner.pets.map((pet: OwnerPets) => {
        let mergePetOwner: OwnerPets = {};
        // Copies all enumerable owner properties from one or more source objects to a target object. It returns the modified target object.
        Object.assign(mergePetOwner, pet);
        mergePetOwner.userName = owner.name;
        mergePetOwner.userGender = owner.gender;
        return mergePetOwner;
      });
      return collection.concat(pets);
    } else {
      return collection;
    }
  }, []);
  return ownerPet;
};

// Sorting cat name alphabethically
const sortCats = (list: OwnerPets[]) => {
  return list.sort((a: OwnerPets, b: OwnerPets) =>
    (a.name as string) > (b.name as string) ? 1 : -1
  );
};

// Filter and return Owner that owns a cat
const filterOwnerWithCats = (cats: OwnerPets[]) => {
  return cats.filter((item) => item.type?.toLowerCase() === "cat");
};

// Filter and return car Array Results based on Gender
const filterByGender = (catArray: OwnerPets[], gender: string) => {
  return catArray.filter(
    (item: OwnerPets) => (item.userGender as string) === gender
  );
};
