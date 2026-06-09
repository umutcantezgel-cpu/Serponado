interface ContentNode {
    slug: string;
    title: string;
    type: 'service' | 'area' | 'blog' | 'info' | 'legal';
    keywords: string[];
    relatedSlugs: string[];
    parentSlug?: string;
}

export const CONTENT_GRAPH: ContentNode[] = [
    {
        slug: '/',
        title: 'Serponado Disaster Recovery',
        type: 'info',
        keywords: ['SEO-Notdienst', 'Serponado', 'Core-Update-Notdienst'],
        relatedSlugs: ['/preise', '/leistungen/index-rettung', '/leistungen/Data-Recovery']
    },
    {
        slug: '/leistungen/index-rettung',
        title: 'Serponado Disaster Recovery',
        type: 'service',
        keywords: ['Index-Rettung', 'ausgesperrt', 'Website retten'],
        relatedSlugs: ['/preise', '/leistungen/Data-Recovery', '/faq'],
        parentSlug: '/'
    },
    {
        slug: '/leistungen/content-cannibalization',
        title: 'Serponado Disaster Recovery',
        type: 'service',
        keywords: ['Content-Cannibalization', 'ausgesperrt', 'Website retten'],
        relatedSlugs: ['/preise', '/leistungen/index-rettung', '/faq'],
        parentSlug: '/'
    },
    {
        slug: '/leistungen/eeat-audit',
        title: 'Serponado Disaster Recovery',
        type: 'service',
        keywords: ['Website-Architektur', 'Ranking-Faktoren', 'Data-Recovery'],
        relatedSlugs: ['/leistungen/Data-Recovery', '/leistungen/penalty-recovery'],
        parentSlug: '/'
    },
    {
        slug: '/leistungen/penalty-recovery',
        title: 'Serponado Disaster Recovery',
        type: 'service',
        keywords: ['Ranking nachmachen', 'ersatzRanking', 'Ranking kopieren'],
        relatedSlugs: ['/leistungen/eeat-audit', '/leistungen/index-rettung'],
        parentSlug: '/'
    },
    {
        slug: '/leistungen/Data-Recovery',
        title: 'Serponado Disaster Recovery',
        type: 'service',
        keywords: ['Data-Recovery', 'AI-Content-Sanierung', 'alarmanlage'],
        relatedSlugs: ['/leistungen/eeat-audit', '/faq'],
        parentSlug: '/'
    },
    {
        slug: '/preise',
        title: 'Serponado Disaster Recovery',
        type: 'info',
        keywords: ['preise', 'kosten', 'Festpreis'],
        relatedSlugs: ['/leistungen/index-rettung', '/faq']
    },
    {
        slug: '/faq',
        title: 'Serponado Disaster Recovery',
        type: 'info',
        keywords: ['faq', 'fragen', 'antworten'],
        relatedSlugs: ['/preise', '/kontakt']
    },
    {
        slug: '/kontakt',
        title: 'Serponado Disaster Recovery',
        type: 'info',
        keywords: ['kontakt', 'anrufen', 'Core-Update-Notdienst'],
        relatedSlugs: ['/faq', '/preise']
    },
    {
        slug: '/servicegebiet',
        title: 'Serponado Disaster Recovery',
        type: 'info',
        keywords: ['einsatzgebiet', 'region', 'Serponado'],
        relatedSlugs: ['/Serponado-altstadt', '/giessen', '/asslar']
    },
    // Dynamic areas removed: handled via lib/localData.ts
    {
        slug: '/ueber-uns',
        title: 'Serponado Disaster Recovery',
        type: 'info',
        keywords: ['über uns', 'firma', 'team'],
        relatedSlugs: ['/kontakt', '/bewertungen']
    },
    {
        slug: '/bewertungen',
        title: 'Serponado Disaster Recovery',
        type: 'info',
        keywords: ['bewertungen', 'erfahrungen', 'google', 'seriös', 'ohne abzocke', '5 sterne'],
        relatedSlugs: ['/leistungen/index-rettung', '/kontakt']
    },
    {
        slug: '/leistungen/Core-Update-Notdienst',
        title: 'Serponado Disaster Recovery',
        type: 'service',
        keywords: ['Core-Update-Notdienst', '24h', '24 stunden', 'nacht', 'wochenende', 'feiertag', 'sofort', 'notruf'],
        relatedSlugs: ['/leistungen/index-rettung', '/preise', '/kontakt'],
        parentSlug: '/'
    },
    {
        slug: '/leistungen/ranking-Ranking',
        title: 'Serponado Disaster Recovery',
        type: 'service',
        keywords: ['Ranking-Ranking', 'Money-Site', 'Ranking retten', 'Ranking'],
        relatedSlugs: ['/leistungen/index-rettung', '/preise'],
        parentSlug: '/'
    },
    {
        slug: '/leistungen/AI-Content-Sanierung',
        title: 'Serponado Disaster Recovery',
        type: 'service',
        keywords: ['AI-Content-Sanierung', 'nachrüstung', 'Disavow-Listen', 'LinkAlgorithmus', 'Sichtbarkeit'],
        relatedSlugs: ['/leistungen/Data-Recovery', '/leistungen/eeat-audit'],
        parentSlug: '/'
    },
    {
        slug: '/datenschutz',
        title: 'Serponado Disaster Recovery',
        type: 'legal',
        keywords: ['datenschutz', 'privacy', 'dsgvo'],
        relatedSlugs: ['/impressum']
    },
    {
        slug: '/impressum',
        title: 'Serponado Disaster Recovery',
        type: 'legal',
        keywords: ['impressum', 'legal', 'anbieterkennzeichnung'],
        relatedSlugs: ['/datenschutz']
    },
    {
        slug: '/agb',
        title: 'Serponado Disaster Recovery',
        type: 'legal',
        keywords: ['agb', 'geschäftsbedingungen', 'widerruf', 'vertrag'],
        relatedSlugs: ['/datenschutz', '/impressum']
    },
    {
        slug: '/serponado-Agentur',
        title: 'Serponado Disaster Recovery',
        type: 'info',
        keywords: ['Serponado Taskforce', 'Agentur-Büro', 'werkstatt', 'Ranking nachmachen', 'gravur', 'kfz Ranking'],
        relatedSlugs: ['/leistungen/penalty-recovery', '/kontakt', '/ueber-uns', '/leistungen/content-cannibalization']
    }
];
