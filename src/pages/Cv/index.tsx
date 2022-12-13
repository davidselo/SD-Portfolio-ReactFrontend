import React from 'react';
import {useViewport} from 'utils/hooks/useViewport';
import MobileCv from 'components/Cv/Mobile';
import DesktopCv from 'components/Cv/Desktop';
import BREAKPOINTS from 'utils/BreakPoints';

const Cv: React.FC = () => {
    const {width} = useViewport();

    return (
        <>
            {/* Render Mobile component for tables and mobile screens.*/}
            {width < BREAKPOINTS.tablet && <MobileCv />}
            {/* Render Desktop component for the rest of devices.*/}
            {width > BREAKPOINTS.tablet && <DesktopCv />}
        </>
    );
};
export default Cv;
