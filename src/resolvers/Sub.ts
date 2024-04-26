export const Subscription = {
    newCv: {
        subscribe: (parent, args, context) => context.pubsub.subscribe("newCv"),
        resolve: (payload) => { return payload; },
    },
};