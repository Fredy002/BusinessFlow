"use client";

import React, { createContext, useContext, useState, ReactNode, useEffect } from 'react';

type Language = 'en' | 'es';

interface LanguageContextProps {
    language: Language;
    setLanguage: (language: Language) => void;
    translations: { [key: string]: { [key: string]: string } };
}

const LanguageContext = createContext<LanguageContextProps | undefined>(undefined);

const loadTranslations = async (language: Language) => {
    const cardsSummary = (await import(`../locales/${language}/cardsSummary`)).default;
    const sidebarRoutes = (await import(`../locales/${language}/sidebarRoutes`)).default;

    return { cardsSummary, sidebarRoutes };
};

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
    const [language, setLanguage] = useState<Language>('en');
    const [translations, setTranslations] = useState<{ [key: string]: { [key: string]: string } }>({
        cardsSummary: {},
        sidebarRoutes: {},
    });

    useEffect(() => {
        const fetchTranslations = async () => {
            const translations = await loadTranslations(language);
            setTranslations(translations);
        };

        fetchTranslations();
    }, [language]);

    return (
        <LanguageContext.Provider value={{ language, setLanguage, translations }}>
            {children}
        </LanguageContext.Provider>
    );
};

export const useLanguage = (): LanguageContextProps => {
    const context = useContext(LanguageContext);
    if (!context) {
        throw new Error('useLanguage must be used within a LanguageProvider');
    }
    return context;
};
