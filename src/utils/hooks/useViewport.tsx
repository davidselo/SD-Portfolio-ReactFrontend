import viewportContext from 'providers/Viewport';
import React from 'react';

interface WindowDimensions {
    width: number;
    height: number;
}

export const useViewport = (): WindowDimensions => {
    /* We can use the "useContext" Hook to acccess a context from within
     another Hook, remember, Hooks are composable! */
    const {width, height} = React.useContext(viewportContext);
    return {width, height};
};
