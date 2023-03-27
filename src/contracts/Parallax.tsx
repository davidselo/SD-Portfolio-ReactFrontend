interface ParallaxSectionItem {
    title: string;
    body: string;
}

export type SectionNumber = 'section1' | 'section2' | 'section3';

interface ParallaxStaticData {
    data: Record<SectionNumber, ParallaxSectionItem>;
}

export {ParallaxSectionItem, ParallaxStaticData};
