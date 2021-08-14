import { OwnerPets, Owner, Concat } from "../types";

// The very beginning of the data retrieval. Main goal is to fetch cats name based on owners gender.
export const fetchCats = (
  data: Owner
): { maleCatList?: OwnerPets[]; femaleCatList?: OwnerPets[] } => {
  // Do a validation check when reading data, check if Array data is empty
  if (data === undefined) {
    return {};
  }
  // Begin sorting owners data and break it down to single user with pets.
  let catArray: OwnerPets[] = sortOwnerPetData(data);
  // Depending on returned data, check if array contains item if not return empty.
  if (catArray.length === 0) {
    return {};
  }
  // Break it down to list of owner gender that owns a cat.
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
export const sortOwnerPetData = (data: Owner) => {
  // Executes a reducer function on each element of the array, resulting in a single output value.
  let ownerPet = data.reduce((collection: Concat<OwnerPets>, owner: Owner) => {
    // Check if this owner has pets
    if (owner.pets) {
      // Creates a new array populated with the results of calling a provided function on every element in the calling array.
      let pets = owner.pets.map((pet: OwnerPets) => {
        let mergePetOwner: OwnerPets = {};
        // Copies all enumerable owner properties from one or more source objects to a target object. It returns the modified target object.
        Object.assign(mergePetOwner, pet);

        mergePetOwner.ownerName = owner.name;
        mergePetOwner.ownerGender = owner.gender;
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
export const sortCats = (list: OwnerPets[]) => {
  return list.sort((a: OwnerPets, b: OwnerPets) =>
    (a.name as string) > (b.name as string) ? 1 : -1
  );
};

// Filter and return Owner that owns a cat
export const filterOwnerWithCats = (cats: OwnerPets[]) => {
  return cats.filter((item) => item.type?.toLowerCase() === "cat");
};

// Filter and return car Array Results based on Gender
export const filterByGender = (catArray: OwnerPets[], gender: string) => {
  return catArray.filter(
    (item: OwnerPets) => (item.ownerGender as string) === gender
  );
};
