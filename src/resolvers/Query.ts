
export const Query={
    hello:(_,{name})=>{
        return `Hello  ${name}`;
    },
    getAllCvs: (parent,args,context) => {
        return context.db.cvs;
    },
    getAllSkills: (parent,args,context) => {
      return context.db.skills;
  },
    getCvById: (parent, args, context) => {
        return context.db.cvs.find((cv) => cv.id === args.id);
    },
    getAllUsers: (parent, args, context) => {
      return context.db.users;}
}

export const Skill = {
  cvs: (parent, args, context) => {
    return context.db.cvs.filter((cv) => parent.cvs_id.includes(cv.id));
  },
};

export const User = {
  cvs: (parent, args, context) => {
    return context.db.cvs.filter((cv) => parent.cvs_id.includes(cv.id));
  },
};

export const Cv = {
  skills: (parent, args, context) => {
    return context.db.skills.filter((skill) => parent.skills_id.includes(skill.id));
  },
  user: (parent, args, context) => {
    console.log("hedhy el user",context.db.users.find((user) => user.id === parent.user_id));
    return context.db.users.find((user) => user.id === parent.user_id);
  }
};