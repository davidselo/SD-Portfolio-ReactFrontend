import React from 'react';
import EducationCard from 'components/Cv/EducationCard';
import '@testing-library/jest-dom';
import {render, waitFor, getByText} from '@testing-library/react';

describe('EducationCard Component', () => {
    test('Should match the Screenshot', () => {
        // Arrange
        // Act
        const careerMockData = {
            institution: 'Institution 1',
            url: 'Url',
            area: 'Area',
            studyType: 'Study type example',
            startDate: '01/01/2002',
            endDate: '01/01/2005',
            score: 'Example score',
            courses: ['Course 1', 'Course 2'],
        };
        const {container} = render(
            <EducationCard education={[careerMockData]} />,
        );

        // Assert
        expect(container).toMatchSnapshot();
    });
    test('Should match the Screenshot for two education items', () => {
        // Arrange
        // Act
        const careerMockData1 = {
            institution: 'Institution 1',
            url: 'Url',
            area: 'Area 1',
            studyType: 'Study type example 1',
            startDate: '01/01/2002',
            endDate: '01/01/2005',
            score: 'Example score 1',
            courses: ['Course 1', 'Course 2'],
        };
        const careerMockData2 = {
            institution: 'Institution 2',
            url: 'Url 2',
            area: 'Area 2',
            studyType: 'Study type example 2',
            startDate: '01/01/2002',
            endDate: '01/01/2005',
            score: 'Example score 2',
            courses: ['Course 3', 'Course 4'],
        };

        const {container} = render(
            <EducationCard education={[careerMockData1, careerMockData2]} />,
        );

        // Assert
        expect(container).toMatchSnapshot();
    });
    test('Render outcome produce the correct HTML', async () => {
        // Arrange
        // Act
        const careerMockData = {
            institution: 'Institution 1',
            url: 'Url',
            area: 'Area',
            studyType: 'Study type example',
            startDate: '01/01/2002',
            endDate: '01/01/2005',
            score: 'Example score',
            courses: ['Course 1', 'Course 2'],
        };
        const {container} = render(
            <EducationCard education={[careerMockData]} />,
        );
        // Assert
        await waitFor(() => {
            expect(getByText(container, 'EDUCATION')).toBeInTheDocument();
            expect(getByText(container, 'Institution 1')).toBeInTheDocument();
            expect(
                getByText(container, 'Study type example'),
            ).toBeInTheDocument();
        });
    });
});
