export class Cv {
    id: number;
    name: string;
    age: number;
    job: string;
    role: Role;
    user_id:number;
    skills_id: number[];  // Reference to Skill object
    // Reference to User object
  }
  
  export enum Role {
    USER = "USER",
    ADMIN = "ADMIN",
  }
  export class User {
    id: number;
    name: string;
    email: string;
    role: Role;
    cvs_id: number[];
  }
  export class Skill {
    id: number;
    name: string;
    designation: string;
    cvs_id:number[];
  }