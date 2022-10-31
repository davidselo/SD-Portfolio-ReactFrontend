import SKILLS_DATA from 'data/staticData/StaticSkills';

// Map definitions
const data = new Map();

// Add all the static collections to the Map as they come.
data.set('SKILLS', SKILLS_DATA);

export const getStaticData = (collectionName: string) => {
    return data.get(collectionName);
};

export default getStaticData;
