import { Cv } from "./Query";

export const Mutation={

    createCv: (parent, args, context) => {
        const newCv = {
          id: context.db.cvs.length + 1,
          name: args.input.name,
          age: args.input.age,
          job: args.input.job,
          user_id: args.input.user_id,
          skills_id: args.input.skills_id,
        };
        context.db.cvs.push(newCv);
        context.pubSub.publish("new cv added",{newCv:Cv});
        return newCv;
      },
    /*addUser: (parent,args,context) => {
        const newUser = {
            id: context.db.users.length + 1,
            name: args.name,
            email: args.email,
            role: args.role,
            cvs_id: args.cvs_id,
        };
        context.db.users.push(newUser);
        return newUser;
    },
    addSkill: (parent,args,context) => {
        const newSkill = {
            id: context.db.skills.length + 1,
            name: args.name,
            designation: args.designation,
            cvs_id: args.cvs_id,
        };
        context.db.skills.push(newSkill);
        return newSkill;
    },*/
    deleteCv: (parent,args,context) => {
        const cvIndex = context.db.cvs.findIndex((cv) => cv.id === args.id);
        if (cvIndex === -1) {
            throw new Error("Cv not found");
        }
        const deletedCv = context.db.cvs.splice(cvIndex, 1)[0];
        return "deleted cv !";
    },
    /*
    deleteUser: (parent,args,context) => {
        const userIndex = context.db.users.findIndex((user) => user.id === args.id);
        if (userIndex === -1) {
            throw new Error("User not found");
        }
        const deletedUser = context.db.users.splice(userIndex, 1)[0];
        return deletedUser;
    },
    deleteSkill: (parent,args,context) => {
        const skillIndex = context.db.skills.findIndex((skill) => skill.id === args.id);
        if (skillIndex === -1) {
            throw new Error("Skill not found");
        }
        const deletedSkill = context.db.skills.splice(skillIndex, 1)[0];
        return deletedSkill;
    },*/
    updateCv: (parent, args, context) => {
        const cvIndex = context.db.cvs.findIndex((cv) => cv.id === args.id);
        if (cvIndex === -1) {
          throw new Error("Cv not found");
        }
        const updatedCv = {
          ...context.db.cvs[cvIndex],
          ...args.input,
        };
        context.db.cvs[cvIndex] = updatedCv;
        return updatedCv;
      }
}