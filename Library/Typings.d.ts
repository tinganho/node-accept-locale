declare module "accept-language" {
    interface AcceptLanguage {
        /**
         * Define your supported languages. The first language will be your default language.
         */
        languages(languages: string[]): void;

        /**
         * Sets default//fallback languages. If not called - then defaults language will be languages[0], which were set via languages(...) method.
         */
        setDefaultLanguageTag(defaultLanguageTag: string | null): void;

        /**
         * Get matched language. If no match, the default language will be returned.
         */
        get(priorityList: string | null | undefined): string | null;
    }

    interface AcceptLanguageModule extends AcceptLanguage {
        /**
         * Create instance of parser
         */
        create(): AcceptLanguage;
    }

    const __$export: AcceptLanguageModule & { default: AcceptLanguageModule };
    export = __$export;
}
