import {Skills} from 'contracts/Skills';
import DataReturn from 'contracts/data/ReturnType';
export const SKILLS_DATA: DataReturn<Skills> = {
    error: false,
    loading: false,
    data: {
        introductionSkills: [
            {
                description:
                    'Coding is a Lego with endless pieces. This is where I get the freedom of creating.',
            },
            {
                description:
                    'In programming, I value not only code quality and challenging tasks, but also communication with the customer and the end user',
            },
            {
                description:
                    'I am exited to help businesses solve challenges of modern day and stay competitive',
            },
            {
                description:
                    'I want to build awesome applications based on cost-effective and flexible architecture',
            },
        ],
    },
};

export default SKILLS_DATA;
