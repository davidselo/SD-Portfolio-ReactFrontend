import {useState, useLayoutEffect} from 'react';

export enum Adaptive {
    xs = 'xs',
    s = 's',
    m = 'm',
    l = 'l',
    xl = 'xl',
}

interface UseAdaptiveTriggersProps {
    onExtraSmallEnter?: () => void;
    onSmallEnter?: () => void;
    onMediumEnter?: () => void;
    onLargeEnter?: () => void;
    onExtraLargeEnter?: () => void;
}

export const useAdaptiveTriggers = ({
    onExtraSmallEnter,
    onSmallEnter,
    onMediumEnter,
    onLargeEnter,
    onExtraLargeEnter,
}: UseAdaptiveTriggersProps): Adaptive => {
    const [width, setWidth] = useState<Adaptive>(Adaptive.xl);
    useLayoutEffect(() => {
        const handleResize = () => {
            if (window?.innerWidth < 768) {
                onExtraSmallEnter?.();
                return setWidth(Adaptive.xs);
            }
            if (window?.innerWidth < 1024) {
                onSmallEnter?.();
                return setWidth(Adaptive.s);
            }
            if (window?.innerWidth < 1280) {
                onMediumEnter?.();
                return setWidth(Adaptive.m);
            }
            if (window?.innerWidth < 1440) {
                onLargeEnter?.();
                return setWidth(Adaptive.l);
            }
            onExtraLargeEnter?.();
            return setWidth(Adaptive.xl);
        };
        window.addEventListener('resize', handleResize);
        handleResize();
        return () => window.removeEventListener('resize', handleResize);
    }, [
        onSmallEnter,
        onMediumEnter,
        onLargeEnter,
        onExtraLargeEnter,
        onExtraSmallEnter,
    ]);
    return width;
};

export enum Pages {
    firstPage = 'firstPage',
    secondPage = 'secondPage',
    thirdPage = 'thirdPage',
}

export interface PageConfig {
    offset: number;
    speed: number;
}

export interface LayoutConfig {
    pages: number;
}

export const ParallaxConfig: Record<
    Adaptive,
    Record<Pages, PageConfig> & LayoutConfig
> = {
    [Adaptive.xs]: {
        pages: 3,
        [Pages.firstPage]: {
            offset: 0,
            speed: 0.8,
        },
        [Pages.secondPage]: {
            offset: 1.1,
            speed: 0.8,
        },
        [Pages.thirdPage]: {
            offset: 1.99,
            speed: 0.6,
        },
    },
    [Adaptive.s]: {
        pages: 3,
        [Pages.firstPage]: {
            offset: 0,
            speed: 0.8,
        },
        [Pages.secondPage]: {
            offset: 1.1,
            speed: 0.8,
        },
        [Pages.thirdPage]: {
            offset: 1.99,
            speed: 0.7,
        },
    },
    [Adaptive.m]: {
        pages: 3,
        [Pages.firstPage]: {
            offset: 0,
            speed: 0.8,
        },
        [Pages.secondPage]: {
            offset: 1.1,
            speed: 0.8,
        },
        [Pages.thirdPage]: {
            offset: 1.99,
            speed: 0.7,
        },
    },
    [Adaptive.l]: {
        pages: 3,
        [Pages.firstPage]: {
            offset: 0,
            speed: 1,
        },
        [Pages.secondPage]: {
            offset: 1,
            speed: 1,
        },
        [Pages.thirdPage]: {
            offset: 1.9,
            speed: 1,
        },
    },
    [Adaptive.xl]: {
        pages: 3,
        [Pages.firstPage]: {
            offset: 0,
            speed: 1,
        },
        [Pages.secondPage]: {
            offset: 1,
            speed: 1,
        },
        [Pages.thirdPage]: {
            offset: 1.9,
            speed: 1,
        },
    },
};
