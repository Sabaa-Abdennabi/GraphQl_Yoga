import { Cv, Role, Skill, User } from "./tables"; 

const user1: User = {
  id: 1,
  name: "John Doe",
  email: "johndoe@example.com",
  role: Role.USER,
  cvs_id:[1],
};

const skill1: Skill = {
  id: 1,
  name: "JavaScript",
  designation: "Frontend Developer",
  cvs_id: [1],
};

const skill2: Skill = {
  id: 1,
  name: "Python",
  designation: "Data Scientist",
  cvs_id:[1],
};

const cv1: Cv = {
  id: 1,
  name: "Jane Doe",
  age: 30,
  job: "Software Engineer",
  role: Role.ADMIN,
  user_id: 1,
  skills_id: [1,2],
};
export const db = {
  cvs: [cv1], 
  users: [user1], 
  skills: [skill1, skill2], 
};