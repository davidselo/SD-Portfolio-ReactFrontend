import apolloClient from './apollo';
export const getClient = () => {
    return new apolloClient();
};

export default getClient;
