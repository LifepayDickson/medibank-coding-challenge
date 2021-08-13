export interface Pets {
  userName?: string;
  userGender?: string;
  name?: String;
  type?: string;
}

export interface Owner {
  name?: string;
  gender?: string;
  age?: String;
  pets?: PetsName[];
}

interface PetsName {
  name: string;
  type: string;
}
