import React from 'react';
import Beluga from 'components/Whale/Beluga';
import Blue from 'components/Whale/Blue';
import {useParams} from 'react-router-dom';

const Whale: React.FC = () => {
    const {type} = useParams();
    console.log(type);

    return (
        <>
            <h2>Whale</h2>
            {type === 'beluga' && <Beluga />}
            {type === 'blue' && <Blue />}
        </>
    );
};

export default Whale;
