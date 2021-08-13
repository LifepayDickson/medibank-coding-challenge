import { Pets, Owner, Concat } from "../types";

// Reverse engineering to break user multiple pets to single user with their respective pets.
export const sortOwnerPetData = (data: Owner) => {
  // Do a validation check when reading data, check if Array data is empty
  if (data === undefined || !Array.isArray(data) || data.length === 0) {
    return [];
  }

  // Executes a reducer function on each element of the array, resulting in a single output value.
  let ownerPet = data.reduce((collection: Concat<Pets>, owner: Owner) => {
    // Check if this owner has pets
    if (owner.pets) {
      // Creates a new array populated with the results of calling a provided function on every element in the calling array.
      let pets = owner.pets.map((pet: Pets) => {
        let mergePetOwner: Pets = {};
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
