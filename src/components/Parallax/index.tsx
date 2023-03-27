import {Box} from '@mui/material';
import React, {useRef} from 'react';
import {Parallax, ParallaxLayer, IParallax} from '@react-spring/parallax';
import SectionItem from 'components/SectionItem';
import ufoAlien from 'assets/images/ufo-2.svg';
import starsBackgorund from 'assets/background/stars.svg';
import cloud from 'assets/background/cloud.svg';

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
                        backgroundImage: `url(${starsBackgorund})`,
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

                {/* Clouds */}
                <ParallaxLayer offset={1} speed={0.8} style={{opacity: 0.1}}>
                    <img
                        src={cloud}
                        style={{
                            display: 'block',
                            width: '20%',
                            marginLeft: '55%',
                        }}
                    />
                    <img
                        src={cloud}
                        style={{
                            display: 'block',
                            width: '10%',
                            marginLeft: '15%',
                        }}
                    />
                </ParallaxLayer>

                <ParallaxLayer offset={1.75} speed={0.5} style={{opacity: 0.1}}>
                    <img
                        src={cloud}
                        style={{
                            display: 'block',
                            width: '20%',
                            marginLeft: '70%',
                        }}
                    />
                    <img
                        src={cloud}
                        style={{
                            display: 'block',
                            width: '20%',
                            marginLeft: '40%',
                        }}
                    />
                </ParallaxLayer>

                <ParallaxLayer offset={1} speed={0.2} style={{opacity: 0.2}}>
                    <img
                        src={cloud}
                        style={{
                            display: 'block',
                            width: '10%',
                            marginLeft: '10%',
                        }}
                    />
                    <img
                        src={cloud}
                        style={{
                            display: 'block',
                            width: '20%',
                            marginLeft: '75%',
                        }}
                    />
                </ParallaxLayer>

                <ParallaxLayer offset={1.6} speed={-0.1} style={{opacity: 0.4}}>
                    <img
                        src={cloud}
                        style={{
                            display: 'block',
                            width: '20%',
                            marginLeft: '60%',
                        }}
                    />
                    <img
                        src={cloud}
                        style={{
                            display: 'block',
                            width: '25%',
                            marginLeft: '40%',
                        }}
                    />
                    <img
                        src={cloud}
                        style={{
                            display: 'block',
                            width: '10%',
                            marginLeft: '80%',
                        }}
                    />
                </ParallaxLayer>

                <ParallaxLayer offset={2.6} speed={0.4} style={{opacity: 0.6}}>
                    <img
                        src={cloud}
                        style={{
                            display: 'block',
                            width: '20%',
                            marginLeft: '5%',
                        }}
                    />
                    <img
                        src={cloud}
                        style={{
                            display: 'block',
                            width: '15%',
                            marginLeft: '75%',
                        }}
                    />
                </ParallaxLayer>
                <ParallaxLayer
                    offset={2.7}
                    speed={-0.4}
                    style={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        pointerEvents: 'none',
                    }}
                >
                    <img src={url('earth')} style={{width: '60%'}} />
                </ParallaxLayer>
            </Parallax>
        </Box>
    );
};

export default ParallaxAboutMe;
