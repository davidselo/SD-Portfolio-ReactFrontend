import React, {ReactNode} from 'react';

const viewportContext = React.createContext({});

type Props = {
    children?: ReactNode;
};

export const ViewportProvider: React.FC<Props> = ({children}: Props) => {
    const [width, setWidth] = React.useState(window.innerWidth);
    const [height, setHeight] = React.useState(window.innerHeight);

    const handleWindowResize = () => {
        setWidth(window.innerWidth);
        setHeight(window.innerHeight);
    };

    React.useEffect(() => {
        window.addEventListener('resize', handleWindowResize);
        return () => window.removeEventListener('resize', handleWindowResize);
    }, []);

    /* Now we are dealing with a context instead of a Hook, so instead
     of returning the width and height we store the values in the
     value of the Provider */
    return (
        <viewportContext.Provider value={{width, height}}>
            {children}
        </viewportContext.Provider>
    );
};

export default viewportContext;
