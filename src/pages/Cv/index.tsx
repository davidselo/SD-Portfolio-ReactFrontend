import React from 'react';
import {useViewport} from 'utils/hooks/useViewport';
import MobileCv from 'components/Cv/Mobile';
import BREAKPOINTS from 'utils/BreakPoints';

const Cv: React.FC = () => {
    const {width, height} = useViewport();

    return <>{width < BREAKPOINTS.tablet && <MobileCv />}</>;
};
export default Cv;
