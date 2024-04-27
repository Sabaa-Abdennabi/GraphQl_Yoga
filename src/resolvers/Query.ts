
export const Query={
    hello:(_,{name})=>{
        return `Hello  ${name}`;
    },
    getAllCvs: async(parent,args,context) => {
        const cvs= await context.prisma.cv.findMany({
          include: {
            skills: true,
            user: true,
        }});
        console.log(cvs[0].skills); ;
        return cvs;
      
      },
    
    getCvById: (parent, args, context) => {
        return context.prisma.cv.findUnique({
          where: {
            id: 1,
          },
          include:{
            skills: true,
            user: true,
          }
        });
    },
    
};
/*
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
};*/