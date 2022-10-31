import {DocumentNode, useQuery} from '@apollo/client';
import {Skills} from 'contracts/Skills';
import {getStaticData} from 'data/staticData/DataMapping';

const STATIC_PERSISTANCE_MODE = 'static';
const GRAPHQL_PERSISTANCE_MODE = 'headless';

const useQueryFacade = (
    collectionName: string, // collection name for static mode.
    grapQLQuery: DocumentNode, // GraphQL query for Headless mode.
) => {
    const {loading, error, data} = useQuery<Skills>(grapQLQuery);
    if (process.env.PERSISTANCE_MODE == STATIC_PERSISTANCE_MODE) {
        return getStaticData(collectionName);
    } else if (process.env.PERSISTANCE_MODE == GRAPHQL_PERSISTANCE_MODE) {
        return {loading, error, data};
    }
};

export default useQueryFacade;
