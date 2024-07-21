import {
    BarChart4,
    Building2,
    PanelsTopLeft,
    Settings,
    ShieldCheck,
    CircleHelpIcon,
    Calendar
} from "lucide-react";

export const getGeneralSidebarData = (translations: { [key: string]: string }) => [
    {
        icon: PanelsTopLeft,
        label: translations['Dashboard'] || 'Dashboard',
        href: '/'
    },
    {
        icon: Building2,
        label: translations['Products'] || 'Products',
        href: '/products'
    },
    {
        icon: Calendar,
        label: translations['Calendar'] || 'Calendar',
        href: '/calendar'
    }
];

export const getToolsSidebarData = (translations: { [key: string]: string }) => [
    {
        icon: CircleHelpIcon,
        label: translations['Faqs'] || 'Faqs',
        href: '/faqs'
    },
    {
        icon: BarChart4,
        label: translations['Analytics'] || 'Analytics',
        href: '/analytics'
    }
];

export const getSupportSidebarData = (translations: { [key: string]: string }) => [
    {
        icon: Settings,
        label: translations['Settings'] || 'Settings',
        href: '/settings'
    },
    {
        icon: ShieldCheck,
        label: translations['Security'] || 'Security',
        href: '/security'
    }
];
