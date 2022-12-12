import viewportContext from 'providers/Viewport';
import React from 'react';

interface WindowDimensions {
    width: number;
    height: number;
}
// just Hook version.
/* export const useViewport = (): WindowDimensions => {
    const [width, setWidth] = useState(window.innerWidth);
    const [height, setHeight] = useState(window.innerHeight);
    useEffect(() => {
        const handleWindowResize = () => {
            setWidth(window.innerWidth);
            setHeight(window.innerHeight);
        };
        window.addEventListener('resize', handleWindowResize);
        return () => window.removeEventListener('resize', handleWindowResize);
    }, []);
    return {width, height};
}; */

// Optimize performance using Context.
export const useViewport = (): WindowDimensions => {
    /* We can use the "useContext" Hook to acccess a context from within
     another Hook, remember, Hooks are composable! */
    const {width, height} = React.useContext(viewportContext);
    return {width, height};
};
