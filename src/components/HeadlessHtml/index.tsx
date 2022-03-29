import React from "react";
import { GET_SKILLS } from '../../graphql/query/introdutionSkill';
import { useQuery } from '@apollo/client';
import { Skills } from '../../contracts/Skills';


const HeadlessHtml: React.FC = () => {
    const { loading, error, data } = useQuery<Skills>(GET_SKILLS);
    if (loading) return (<p>Loading...</p>);
    if (error) return (<p>Error! ${error.message}</p>);
    return (
        <div>
            {data.introductionSkills.map((skill, index) => (
                <p key={index}>{skill.description}</p>
            ))}
        </div>
    );
}


export default HeadlessHtml;