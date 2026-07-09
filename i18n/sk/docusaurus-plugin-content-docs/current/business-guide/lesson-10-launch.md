---
title: 'Lekcia 10: Deň spustenia'
sidebar_position: 11
_i18n_hash: 49ba467b8efba57e92cf072bcec53969
---
# Lekcia 10: Deň spustenia

Všetko je pripravené. Skôr než otvoríte dvere, táto lekcia vás prevedie predspúšťacím kontrolným zoznamom, aby ste sa uistili, že nič nie je pokazené, nechýba ani nepôsobí trápne.

## Kde sme skončili

FitSite má šablóny, plány, proces platby, branding, onboarding a ceny kompletne nakonfigurované. Teraz overíme, že všetko funguje, a spustíme to naostro.

## Predspúšťací kontrolný zoznam

Prejdite si každú položku. Žiadnu nepreskakujte.

### Infraštruktúra platformy

- [ ] Hosting je stabilný a funguje dobre aj pri záťaži
- [ ] Wildcard SSL je aktívne a všetky subdomény sa poskytujú cez HTTPS
- [ ] Mapovanie domén funguje -- otestujte vytvorenie webu a namapovanie vlastnej domény
- [ ] Zálohy sú nakonfigurované a otestované (obnovte aspoň jednu, aby ste to overili)
- [ ] Monitoring je zavedený -- budete vedieť, ak platforma vypadne

### Šablóny

- [ ] Všetky tri šablóny sa na nových weboch načítavajú správne
- [ ] Zástupný obsah je užitočný a bez preklepov
- [ ] Všetky obrázky majú správnu licenciu (žiadne vodoznaky zo stock fotografií)
- [ ] Mobilná responzivita funguje na každej stránke šablóny
- [ ] Rýchlosť načítania stránok je prijateľná (otestujte nástrojom ako GTmetrix alebo PageSpeed Insights)
- [ ] Na žiadnej šablóne nie sú nefunkčné odkazy ani chýbajúce súbory

### Plány a produkty

- [ ] Všetky tri plány sú aktívne a viditeľné
- [ ] Popisy plánov sú presné a špecifické pre danú niku
- [ ] Ceny sú správne (mesačné aj ročné)
- [ ] Poplatky za nastavenie sú nakonfigurované pri správnych plánoch
- [ ] Skúšobné obdobie funguje pri pláne Starter
- [ ] Doplnkové ponuky pri objednávke sa správne zobrazujú počas procesu platby
- [ ] Obmedzenia pluginov a tém sa správne vynucujú podľa plánu

### Proces platby

- [ ] Dokončite plnú testovaciu registráciu pri každom pláne (použite testovací platobný režim)
- [ ] Výber šablóny zobrazuje správne šablóny podľa plánu
- [ ] Platba sa úspešne spracuje
- [ ] Zákazník dostane po registrácii uvítací e-mail
- [ ] Nový web sa vytvorí so správnou šablónou
- [ ] Zákazník sa môže okamžite prihlásiť do svojho nového webu
- [ ] Zľavové kódy fungujú správne

### Branding

- [ ] Prihlasovacia stránka zobrazuje branding FitSite
- [ ] Admin Dashboard zobrazuje branding FitSite
- [ ] Všetky systémové e-maily používajú branding FitSite a jazyk špecifický pre fitness
- [ ] Faktúry sa zobrazujú správne s údajmi vašej firmy
- [ ] Marketingový web je spustený a odkazuje na formulár procesu platby

### Onboarding

- [ ] Widget Rýchly štart sa zobrazuje na Dashboardoch nových zákazníkov
- [ ] Všetky odkazy Rýchleho štartu smerujú na správne stránky
- [ ] Uvítacia e-mailová sekvencia je nakonfigurovaná a otestovaná
- [ ] Články znalostnej bázy sú publikované a dostupné
- [ ] Stránka Account zobrazuje správne informácie o pláne a možnosti upgradu

### Právne a obchodné záležitosti

- [ ] Obchodné podmienky sú publikované a prepojené z procesu platby
- [ ] Zásady ochrany osobných údajov sú publikované a dostupné
- [ ] Zásady vrátenia peňazí sú definované a zdokumentované
- [ ] Obchodný subjekt je pripravený na prijímanie platieb
- [ ] Platobná brána je v produkčnom režime (nie v testovacom režime)
- [ ] Daňová konfigurácia je správna pre vašu jurisdikciu

## Mäkké spustenie vs. ostré spustenie

Zvážte dvojfázové spustenie:

### Fáza 1: Mäkké spustenie

Pozvite 5-10 majiteľov fitness štúdií, aby sa zaregistrovali ešte pred verejným spustením. Toto sú vaši beta zákazníci. Ponúknite im výraznú zľavu (50 % zľavu doživotne alebo 3 mesiace zadarmo) výmenou za:

- Úprimnú spätnú väzbu k registrácii a onboardingu
- Povolenie použiť ich web ako ukážkový príklad
- Nahlásenie akýchkoľvek chýb alebo problémov, na ktoré narazia

Tak získate skutočnú zákaznícku spätnú väzbu a živé weby, ktoré môžete ukázať ešte pred otvorením pre verejnosť.

### Fáza 2: Verejné spustenie

Keď zapracujete spätnú väzbu z mäkkého spustenia:

- Prepnite platobnú bránu do produkčného režimu
- Zverejnite svoj marketingový web
- Začnite získavať zákazníkov (Lekcia 11)
- Oznámte spustenie na relevantných kanáloch fitness odvetvia

## Kroky v deň spustenia

V deň, keď pôjdete na verejnosť:

1. **Prepnite na ostré platby** -- vypnite testovací režim vo svojej platobnej bráne
2. **Overte ešte raz** -- urobte kompletnú testovaciu registráciu so skutočnou platbou (potom si ju refundujte)
3. **Pozorne monitorujte** -- sledujte chyby, neúspešné registrácie alebo problémy s platbami
4. **Buďte k dispozícii** -- vaši prví skutoční zákazníci môžu potrebovať pomoc a rýchla odpoveď buduje dôveru
5. **Krátko to oslávte** -- a potom sa vráťte k práci

## Čo sa môže pokaziť

Buďte pripravení na:

- **Problémy s platobnou bránou**: Majte pripravený kontakt na podporu poskytovateľa svojej brány
- **Problémy s SSL certifikátom**: Vedzte, ako kontrolovať a obnovovať certifikáty
- **Zlyhania doručovania e-mailov**: Otestujte, že e-maily skutočne prichádzajú (skontrolujte priečinky so spamom)
- **Výkon pri záťaži**: Ak dostanete dopravnú špičku, vedzte, ako škálovať svoj hosting
- **Zmätenie zákazníkov**: Majte pripravenú znalostnú bázu a kanály podpory

## Sieť FitSite doteraz

```
FitSite Network
├── WordPress Multisite (subdomain mode) ✓
├── Ultimate Multisite (configured + branded) ✓
├── Platform Domain (fitsite.com + wildcard SSL) ✓
├── Site Templates (Studio Essential, Gym Pro, Fitness Chain) ✓
├── Products (Starter, Growth, Pro + Order Bumps + Discounts) ✓
├── Checkout Flow (tested end-to-end) ✓
├── Branding (complete) ✓
├── Customer Onboarding (Quick Start, emails, help resources) ✓
├── Pricing Strategy (annual, trials, setup fees, discounts) ✓
├── Pre-Launch Checklist (verified) ✓
├── Soft Launch (beta customers onboarded) ✓
└── LIVE ✓
```

## Čo sme v tejto lekcii vytvorili

- **Komplexný predspúšťací kontrolný zoznam** pokrývajúci infraštruktúru, obsah, platby a právne záležitosti
- **Stratégiu mäkkého spustenia** na získanie skutočnej spätnej väzby pred verejným spustením
- **Postupy na deň spustenia** na spustenie naostro s istotou
- **Záložný plán** pre bežné problémy v deň spustenia

---

**Ďalej:** [Lekcia 11: Hľadanie zákazníkov](lesson-11-customers) -- keď je FitSite už spustený, ako presvedčíte majiteľov fitness štúdií, aby sa zaregistrovali?
