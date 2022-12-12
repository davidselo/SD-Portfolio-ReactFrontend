import React from 'react';
import {useViewport} from 'utils/hooks/useViewport';

const Cv: React.FC = () => {
    const {width, height} = useViewport();

    return (
        <h1>
            <h2>Width: {width}</h2>
            <h2>height: {height}</h2>
        </h1>
    );
};
export default Cv;
