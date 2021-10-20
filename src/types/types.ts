export interface OwnerPets {
  ownerName?: string;
  ownerGender?: string;
  name?: String;
  type?: string;
}

export interface Owner {
  [x: string]: any;
  name?: string;
  gender?: string;
  age?: String;
  pets?: PetsName[];
}

export interface GenderOwnersPet {
  maleCatList?: OwnerPets[];
  femaleCatList?: OwnerPets[];
}

interface PetsName {
  name?: string;
  type?: string;
}

export interface Concat<T> {
  concat<T1>(...items: T1[]): (T | (T1 extends (infer T1)[] ? T1 : T1))[];
}
