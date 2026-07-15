---
title: 'Lekcia 8: Zaškolenie zákazníkov'
sidebar_position: 9
_i18n_hash: 5b71133bebf067164c77d33db7c81806
---
# Lekcia 8: Onboarding zákazníkov

Získať zákazníka, aby sa zaregistroval, je len polovica práce. Ak sa prihlási, cíti sa zahltený a už sa nikdy nevráti, stratili ste ho. Táto lekcia navrhuje skúsenosť, ktorá premení novú registráciu na aktívneho, zapojeného zákazníka.

## Kde sme skončili {#where-we-left-off}

FitSite je plne brandovaný s funkčným tokom pokladne. Teraz sa zameriame na to, čo sa stane po tom, ako majiteľ fitness štúdia dokončí registráciu a prvýkrát pristane na svojej novej stránke.

## Prečo na onboardingu záleží {#why-onboarding-matters}

Prvých 30 minút po registrácii rozhoduje o tom, či zákazník zostane alebo odíde. Majiteľ fitness štúdia, ktorý:

- Prihlási sa a vidí stránku, ktorá už vyzerá ako fitness web → zostane
- Presne vie, čo má urobiť ďalej → zostane
- Cíti sa stratený v generickom WordPress Dashboarde → odíde

Vaše niche šablóny (Lekcia 4) riešia prvý bod. Táto lekcia rieši druhý.

## Skúsenosť pri prvom prihlásení {#the-first-login-experience}

### Uvítací Dashboard widget {#welcome-dashboard-widget}

Vytvorte vlastný Dashboard widget, ktorý privíta nových zákazníkov a prevedie ich nastavením. Mal by sa zobraziť výrazne pri ich prvom prihlásení.

**Rýchly štart FitSite:**

1. **Pridajte názov a logo svojho štúdia** -- Odkaz na Customizer alebo nastavenia identity stránky
2. **Aktualizujte rozvrh svojich lekcií** -- Priamy odkaz na editor stránky Lekcie
3. **Pridajte svojich trénerov** -- Odkaz na editor stránky Tréneri
4. **Nastavte svoje kontaktné údaje** -- Odkaz na editor stránky Kontakt
5. **Zobrazte náhľad svojej stránky** -- Odkaz na frontend

Každý krok odkazuje priamo na relevantnú stránku alebo nastavenie. Žiadne hľadanie v menu.

### Zjednodušte Dashboard {#simplify-the-dashboard}

Noví zákazníci nepotrebujú vidieť každú položku WordPress menu. Zvážte:

- Skrytie položiek menu, ktoré nie sú relevantné pre správu fitness stránky (napr. Komentáre, ak sa nepoužívajú)
- Zmenu poradia menu tak, aby boli najpoužívanejšie položky ako prvé
- Pridanie vlastných označení menu, ktoré dávajú zmysel pre niche („Vaše štúdio“ namiesto „Vzhľad“)

Addon [Plugin & Theme Manager](/addons/plugin-and-theme-manager) môže pomôcť kontrolovať, čo zákazníci vidia.

## Sekvencia uvítacích e-mailov {#welcome-email-sequence}

Jeden uvítací e-mail nestačí. Nastavte sekvenciu, ktorá prevedie zákazníkov ich prvým týždňom:

### E-mail 1: Privítanie (okamžite po registrácii) {#email-1-welcome-immediately-after-signup}

- Predmet: „Vitajte vo FitSite -- webová stránka vášho štúdia je aktívna“
- Obsah: Odkaz na prihlásenie, kroky rýchleho štartu, odkaz na zdroje pomoci
- Tón: Nadšený, povzbudzujúci, špecifický pre fitness

### E-mail 2: Rýchle víťazstvá (1. deň) {#email-2-quick-wins-day-1}

- Predmet: „3 veci, ktoré treba urobiť ako prvé na vašom FitSite“
- Obsah: Pridajte svoje logo, aktualizujte hero obrázok domovskej stránky, pridajte rozvrh lekcií
- Zahrňte snímky obrazovky, ktoré presne ukazujú, kam kliknúť

### E-mail 3: Prispôsobte si to (3. deň) {#email-3-make-it-yours-day-3}

- Predmet: „Nechajte svoju fitness stránku vyniknúť“
- Obsah: Prispôsobte farby, pridajte fotografie trénerov, napíšte príbeh svojho štúdia
- Odkaz na príklady skvelých fitness stránok na platforme

### E-mail 4: Spustenie (7. deň) {#email-4-go-live-day-7}

- Predmet: „Ste pripravení zdieľať svoj FitSite so svetom?“
- Obsah: Kontrolný zoznam toho, čo overiť pred zdieľaním, ako pripojiť vlastnú doménu (ak ste na Growth/Pro), tipy na zdieľanie na sociálnych sieťach

:::tip Automatizácia e-mailov
Použite [Webhooks](/user-guide/integrations/webhooks) alebo [Zapier](/user-guide/integrations/zapier) na spúšťanie týchto e-mailov cez vašu platformu pre e-mailový marketing. Získate tak väčšiu kontrolu nad načasovaním a môžete sledovať zapojenie.
:::

## Zdroje pomoci {#help-resources}

Vytvorte pomocný obsah špecifický pre niche, ktorý odpovedá na otázky, ktoré majitelia fitness štúdií skutočne kladú:

### Články znalostnej bázy {#knowledge-base-articles}

- „Ako aktualizovať rozvrh lekcií“
- „Pridávanie a úprava profilov trénerov“
- „Zmena loga a farieb vášho štúdia“
- „Pripojenie vlastného názvu domény“ (pre zákazníkov Growth/Pro)
- „Pridanie rezervačného widgetu na vašu stránku“

Píšte ich pre netechnických používateľov. Používajte snímky obrazovky. Vyhnite sa WordPress žargónu.

### Video návody {#video-walkthroughs}

Krátke (2-3 minútové) nahrávky obrazovky, ktoré ukazujú:

- Prvé prihlásenie a orientáciu
- Úpravu domovskej stránky
- Aktualizáciu rozvrhu lekcií
- Pridanie nového trénera

Nemusia to byť dokonale vyprodukované materiály. Dôležité je, aby boli jasné, užitočné a špecifické pre niche.

## Stránka Account {#the-account-page}

Ultimate Multisite obsahuje zákaznícky orientovanú [stránku Account](/user-guide/client-management/account-page), kde zákazníci spravujú svoje predplatné. Prispôsobte ju tak, aby:

- Zobrazovala ich aktuálny plán FitSite
- Zobrazovala možnosti upgradu s benefitmi špecifickými pre fitness
- Poskytovala históriu fakturácie a sťahovanie faktúr
- Odkazovala na zdroje pomoci

## Meranie úspešnosti onboardingu {#measuring-onboarding-success}

Sledujte tieto ukazovatele, aby ste vedeli, či váš onboarding funguje:

- **Miera aktivácie**: Aké percento registrácií si v priebehu prvého týždňa skutočne prispôsobí svoju stránku?
- **Prihlásenia počas prvého týždňa**: Koľkokrát sa nový zákazník prihlási počas svojho prvého týždňa?
- **Tikety podpory od nových zákazníkov**: Vysoký objem znamená, že váš onboarding má medzery
- **Konverzia zo skúšobnej verzie na platenú**: Ak ponúkate skúšobné obdobia, aké percento sa konvertuje?

## Sieť FitSite zatiaľ {#the-fitsite-network-so-far}

```
Sieť FitSite
├── WordPress Multisite (režim subdomén)
├── Ultimate Multisite (nakonfigurované + brandované)
├── Doména platformy (fitsite.com + wildcard SSL)
├── Šablóny stránok (Studio Essential, Gym Pro, Fitness Chain)
├── Produkty (Starter, Growth, Pro + Order Bumps)
├── Tok pokladne (špecifický pre niche, otestovaný)
├── Branding (prihlásenie, Dashboard, e-maily, faktúry, marketingová stránka)
├── Onboarding zákazníkov
│   ├── Dashboard widget Rýchly štart
│   ├── Zjednodušený Dashboard na správu fitness stránky
│   ├── Uvítacia sekvencia 4 e-mailov
│   ├── Znalostná báza špecifická pre niche
│   ├── Video návody
│   └── Prispôsobená stránka Account
└── Pripravené na cenovú stratégiu (ďalšia lekcia)
```

## Čo sme vytvorili v tejto lekcii {#what-we-built-this-lesson}

- **Vedenú skúsenosť pri prvom prihlásení** s widgetom Rýchly štart
- **Zjednodušený Dashboard** zameraný na úlohy správy fitness stránky
- **Sekvenciu uvítacích e-mailov**, ktorá prevedie zákazníkov ich prvým týždňom
- **Zdroje pomoci špecifické pre niche** napísané pre netechnických majiteľov fitness štúdií
- **Metriky onboardingu** na sledovanie a zlepšovanie skúsenosti

---

**Ďalej:** [Lekcia 9: Cenotvorba pre zisk](lesson-9-pricing) -- zdokonalíme cenovú stratégiu, aby sme maximalizovali príjmy a minimalizovali odchod zákazníkov.
