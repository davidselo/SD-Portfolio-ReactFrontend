import {DocumentNode, useQuery} from '@apollo/client';
import {Skills} from 'contracts/Skills';
import {getStaticData} from 'data/staticData/DataMapping';

const GRAPHQL_PERSISTENCE_MODE = 'headless';

const useQueryFacade = (
    collectionName: string, // collection name for static mode.
    grapQLQuery: DocumentNode, // GraphQL query for Headless mode.
) => {
    const isHeadless =
        process.env.PERSISTENCE_MODE === GRAPHQL_PERSISTENCE_MODE;
    // Skip the network request entirely when running in static mode so the
    // deployed (static) build never fires a doomed request to the GraphQL API.
    const {loading, error, data} = useQuery<Skills>(grapQLQuery, {
        skip: !isHeadless,
    });
    if (isHeadless) {
        return {loading, error, data};
    }
    // Default to static data for any non-headless mode so the hook never
    // returns undefined (which would crash consumers destructuring the result).
    return getStaticData(collectionName);
};

export default useQueryFacade;
