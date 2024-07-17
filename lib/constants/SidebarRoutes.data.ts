import {
    BarChart4,
    Building2,
    PanelsTopLeft,
    Settings,
    ShieldCheck,
    CircleHelpIcon,
    Calendar,
    icons
} from "lucide-react";

export const GeneralSidebarData = [
    {
        icon: PanelsTopLeft,
        label: 'Dashboard',
        href: '/'
    },
    {
        icon: Building2,
        label: 'Products',
        href: '/products'
    },
    {
        icon: Calendar,
        label: 'Calendar',
        href: '/calendar'
    }
];

export const ToolsSidebarData = [
    {
        icon: CircleHelpIcon,
        label: 'Faqs',
        href: '/faqs'
    },
    {
        icon: BarChart4,
        label: 'Analytics',
        href: '/analytics'
    }
];

export const SupportSidebarData = [
    {
        icon: Settings,
        label: 'Settings',
        href: '/settings'
    },
    {
        icon: ShieldCheck,
        label: 'Security',
        href: '/security'
    }
];