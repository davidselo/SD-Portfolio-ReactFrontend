import {Box} from '@mui/material';
import React, {useRef} from 'react';
import {Parallax, ParallaxLayer, IParallax} from '@react-spring/parallax';
import SectionItem from 'components/SectionItem';
import ufoAlien from 'assets/images/ufo-2.svg';

import {
    useAdaptiveTriggers,
    ParallaxConfig,
    Pages,
} from 'hooks/parallaxAdaptive';

const url = (name: string, wrap = false) =>
    `${
        wrap ? 'url(' : ''
    }https://awv3node-homepage.surge.sh/build/assets/${name}.svg${
        wrap ? ')' : ''
    }`;

export const ParallaxAboutMe: React.FC = () => {
    const parallax = useRef<IParallax>(null!);
    const width = useAdaptiveTriggers({});

    return (
        <Box sx={{width: '100%', height: '100%', background: '#253237'}}>
            <Parallax
                ref={parallax}
                pages={ParallaxConfig[width].pages}
                style={{top: '0', left: '0'}}
                key={width}
            >
                <ParallaxLayer
                    key={width}
                    offset={ParallaxConfig[width][Pages.firstPage].offset}
                    speed={ParallaxConfig[width][Pages.firstPage].speed}
                    style={{backgroundColor: '#805E73'}}
                >
                    <SectionItem sectionNumber="section1" />
                </ParallaxLayer>
                <ParallaxLayer
                    offset={ParallaxConfig[width][Pages.secondPage].offset}
                    speed={ParallaxConfig[width][Pages.secondPage].speed}
                    style={{backgroundColor: '#87BCDE'}}
                >
                    <SectionItem sectionNumber="section2" />
                </ParallaxLayer>
                <ParallaxLayer
                    offset={0}
                    speed={0}
                    factor={3}
                    style={{
                        backgroundImage: url('stars', true),
                        backgroundSize: 'cover',
                    }}
                />
                <ParallaxLayer
                    offset={ParallaxConfig[width][Pages.thirdPage].offset}
                    speed={ParallaxConfig[width][Pages.thirdPage].speed}
                    onClick={() => parallax.current.scrollTo(1)}
                    style={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                    }}
                >
                    <SectionItem sectionNumber="section3" />
                </ParallaxLayer>

                <ParallaxLayer
                    offset={0.6}
                    speed={0.3}
                    horizontal={false}
                    onClick={() => parallax.current.scrollTo(2)}
                    style={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                    }}
                >
                    <Box
                        alignContent="center"
                        alignItems="center"
                        justifyContent="center"
                        display="flex"
                    >
                        <img src={ufoAlien} style={{width: '40%'}} />
                    </Box>
                </ParallaxLayer>
            </Parallax>
        </Box>
    );
};

export default ParallaxAboutMe;
