import { Pets, Owner } from "../types";

export const sortUserPetData = (data: Owner) => {
  if (data === undefined || !Array.isArray(data) || data.length === 0) {
    return [];
  }
  let cats = data.reduce((collection, owner: Owner) => {
    console.log("+++++++++++++++=", collection);
    if (owner.pets) {
      let pets = owner.pets.map((pet: Pets) => {
        let userMergedPet: Pets = {};
        Object.assign(userMergedPet, pet);
        userMergedPet.userName = owner.name;
        userMergedPet.userGender = owner.gender;
        return userMergedPet;
      });
      return collection.concat(pets);
    } else {
      return collection;
    }
  }, []);
  return cats;
};
