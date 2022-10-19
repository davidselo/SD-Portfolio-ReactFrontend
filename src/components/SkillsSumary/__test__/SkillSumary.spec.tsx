import React from 'react';
import '@testing-library/jest-dom';
import {render, screen} from '@testing-library/react';
import SkillsSumary from '../index';
import {MockedProvider} from '@apollo/client/testing';
import {GET_SKILLS} from '../../../graphql/query/introdutionSkill';
import {GraphQLError} from 'graphql';

describe('Skills Sumary Component', () => {
    test('Component renders the block with Mock data', async () => {
        // Arrange
        const mocks = [
            {
                request: {
                    query: GET_SKILLS,
                },
                result: {
                    data: {
                        introductionSkills: [
                            {description: 'Description 1'},
                            {description: 'Description 2'},
                            {description: 'Description 3'},
                            {description: 'Description 4'},
                            {description: 'Description 5'},
                        ],
                    },
                },
            },
        ];
        // Act
        const {container} = render(
            <MockedProvider mocks={mocks} addTypename={false}>
                <SkillsSumary />
            </MockedProvider>,
        );
        // Assert
        expect(await screen.findByText('Loading...')).toBeInTheDocument();
        expect(await screen.findByText('Description 1')).toBeInTheDocument();
        expect(container).toMatchSnapshot();
    });

    test('Component when got error on GraphQL', async () => {
        // Arrange
        const mocks = [
            {
                request: {
                    query: GET_SKILLS,
                },
                result: {
                    errors: [new GraphQLError('code 1')],
                },
            },
        ];
        render(
            <MockedProvider mocks={mocks} addTypename={false}>
                <SkillsSumary />
            </MockedProvider>,
        );
        expect(await screen.findByText('Error! code 1')).toBeInTheDocument();
    });
});
