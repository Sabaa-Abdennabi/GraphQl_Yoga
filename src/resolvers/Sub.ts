export const Subscription = {
    newCv: {
        subscribe: (parent, args, context) => context.pubsub.asyncIterator("new cv added"),
        resolve: (payload) => { return payload; },
    },
};