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

export interface Concat<T> {
  concat<T1>(...items: T1[]): (T | (T1 extends (infer T1)[] ? T1 : T1))[];
}
