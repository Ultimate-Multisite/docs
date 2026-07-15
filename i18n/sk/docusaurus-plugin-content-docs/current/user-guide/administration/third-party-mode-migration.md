---
title: Migrácia v režime third-party
sidebar_position: 17
_i18n_hash: 21e66c5c40d03011402c58addf6d96f3
---
# Migracja do režimu třetích strán

Agent Superdav AI v1.12.0 zmenil spôsob, ako saoberajú schopnosti tretích strán. **Režim třetich strán teraz chcelia automaticky**, čo umožňuje priamu integráciu s WordPress Abilities API na WordPress 7.0+ bez potreby manuálnej konfigurácie.

## Čo sa zmenilo? {#what-changed}

### Pred v1.12.0 {#before-v1120}

Schopnosti tretích strán vyžadovali manuálnu konfiguráciu:

- Museli ste explicitne zapnúť "third-party mode"
- Schopnosti sa načítali z prispôsobeného registru
- Integrácia s WordPress Abilities API bola voliteľná
- Legacy režim bol štandardným nastavením

### Po v1.12.0 {#after-v1120}

Schopnosti tretích strán fungujú automaticky:

- Režim třetich strán je štandardne nastavený na "auto"
- Schopnosti sa integrovat priamo s WordPress Abilities API
- Na WordPress 7.0+ žiadna manuálna konfigurácia nie je potrebná
- Legacy režim je stále dostupný pre staršie verzie WordPressu

## Kto je ovplyvnený? {#who-is-affected}

### Nové inštalácie (WordPress 7.0+) {#new-installations-wordpress-70}

**Nie je potrebné nič robiť.** Režim třetich strán je automaticky nastavený na "auto" a schopnosti fungujú priamo z krabice.

### Existujúce inštalácie {#existing-installations}

**Vaše nastavenia sú zachovaná.** Ak ste používali:

- **Legacy režim**: Zostanete v legacy režime (zmena nie je)
- **Manuálny režim třetich strán**: Zostanete v manuálnom režime (zmena nie je)
- **Auto režim**: Pokračujete v auto režime (zmena nie je)

### Verzie WordPressu pred 7.0 {#wordpress-versions-before-70}

**Legacy režim je stále dostupný.** Ak ste na WordPressu 6.x alebo staršom:

- Režim třetich strán je štandardne nastavený na "legacy"
- Môžete manuálne zapnúť režim třetich strán, ak chcete
- Upgrade na WordPress 7.0+ pre použitie priame Abilities API

## Zrozumenie režimov {#understanding-the-modes}

### Auto režim (Nové štandardné nastavenie) {#auto-mode-new-default}

**Auto režim** používa priamu integráciu s native WordPress Abilities API:

- Schopnosti sa registrujú pomocou WordPress hookov
- Plná kompatibilita s Abilities API na WordPress 7.0+
- Automatické nájdenie schopností tretích strán
- Žiadna manuálna konfigurácia nie je potrebná

**Kedy použiť**: WordPress 7.0+ s externými schopnosťami (third-party)

### Manuálny režim (Manual Mode) {#manual-mode}

Manuálny režim vyžaduje explicitú konfiguráciu:

- Určite, ktoré externe schopnosti zaistiť
- Užitečný na testovanie alebo selektívne načítanie schopností
- Vyžaduje úpravu konfiguračných súborov
- Viac kontroly, ale viac nastavenia

**Kedy použiť**: Testovanie, selektívne načítanie schopností alebo prispôsobené konfigurácie

### Starý režim (Legacy Mode) {#legacy-mode}

Starý režim používa starý systém externých schopností:

- Prispôsobený registár schopností (nie WordPress Abilities API)
- Zpět kompatibilný s pôvodnými verziami WordPressu
- Žiadna natívna integrácia s WordPressom
- Starý, ale stále podporovaný

**Kedy použiť**: WordPress 6.x alebo staršie verzie, alebo ak potrebujete starú kompatibilitu

## Kontrola aktuálneho režimu {#checking-your-current-mode}

### Via Admin Panel (Administratívny panel) {#via-admin-panel}

1. Prejdite do **WordPress Admin** → **Superdav AI Agent** → **Settings**
2. Hľadajte nastavenie **Third-Party Mode** (Externý režim)
3. Uvidíte svoj aktuálny režim a možnosti jeho zmeny

### Via Code (Via kód) {#via-code}

```php
$mode = get_option( 'superdav_third_party_mode' );
echo $mode; // 'auto', 'manual' alebo 'legacy'
```

## Zmena režimu {#changing-your-mode}

### Prejsť na Auto Mode (Automatický režim) {#switch-to-auto-mode}

Ak ste na WordPress 7.0+ a chcete použiť auto režim:

1. Prejdite do **Superdav AI Agent** → **Settings**
2. Nájdite **Third-Party Mode**
3. Vyberte **Auto (WordPress Abilities API)**
4. Kliknite na **Save** (Uložiť)

Superdav AI Agent automaticky nájde a zaregistruje externe schopnosti.

### Prejsť na Manual Mode (Manuálny režim) {#switch-to-manual-mode}

Ak chcete manuálne ovládať, ktoré schopnosti sa načítajú:

1. Prejdite do **Superdav AI Agent** → **Settings**
2. Nájdite **Third-Party Mode**
3. Vyberte **Manual**
4. Kliknite na **Save** (Uložiť)
5. Upravte svoj konfiguračný súbor, aby ste určil, ktoré schopnosti zaistiť

### Prejsť na Legacy Mode (Starý režim) {#switch-to-legacy-mode}

Ak potrebujete starú kompatibilitu:

1. Prejdite do **Superdav AI Agent** → **Settings**
2. Nájdite **Third-Party Mode** (Tretia strana)
3. Vyberte **Legacy** (Stará verzia)
4. Kliknite na **Save** (Uložiť)

## Výhody automatického režimu (Auto Mode) {#benefits-of-auto-mode}

### Automatické nájdenie (Automatic Discovery) {#automatic-discovery}

Možnosti sa automaticky objavia z:

- Nainstalovaných pluginov
- Aktuálneho témy (theme)
- Pluginov, ktoré sú povinné použiť
- Drop-in pluginov

Nejde o manuálnu registráciu.

### Natívne integrovanie (Native Integration) {#native-integration}

Možnosti sa integrujú s WordPress Abilities API:

- Je konzistentné s jádrom WordPressu
- Práve funguje s adminom WordPressu
- Kompatibilné s inými pluginmi, ktoré používajú Abilities API
- Budúce kompatibilné so zmenami v WordPressu

### Zjednodušené správanie (Simplified Management) {#simplified-management}

- Žiadne súbory konfiguračného parametru na úpravu
- Žiadna manuálna registracia možností
- Kontrola viditeľnosti možností sa vykonáva automaticky
- Notifikácie v adminom paneli vás upozornia na neuskriátane (nevyklasované) možnosti

### Lepšie výkon (Better Performance) {#better-performance}

- Možnosti sú cacheované (cache)
- Lazy-loaded (na vyžiadanie) len pri potrebe
- Optimalizované pre WordPress 7.0+

## Cesta migracie (Migration Path) {#migration-path}

### Ak ste na WordPressu 6.x {#if-youre-on-wordpress-6x}

1. **Vytvorte pôsobenie na WordPress 7.0+** (keď budete môcť)
2. **Aktualizujte Superdav AI Agent** na verziu v1.12.0+
3. **Zmieňte third-party mode na Auto** (voliteľné; legacy režim stále funguje)
4. **Prejdite cez viditeľnosť možností**, aby ste zabezpečili správne kontroly prístupu

### Ak ste na WordPressu 7.0+ {#if-youre-on-wordpress-70}

1. **Aktualizujte Superdav AI Agent** na verziu v1.12.0+
2. **Potvrďte, že third-party mode je nastavený na Auto** (môže byť to štandard)
3. **Prejdite cez viditeľnosť možností**, aby ste zabezpečili správne kontroly prístupu
4. **Testujte third-party možnosti**, aby ste si uistili, že fungujú

## Úprava problémov (Troubleshooting) {#troubleshooting}

### Možnosti sa nezaverujú v auto režime {#abilities-arent-loading-in-auto-mode}

- Prejdite na WordPress 7.0+
- Skontrolujte, či je third-party mode nastavený na "Auto"
- Potvrďte, že plugin, ktorý poskytuje možnosť, je aktívny
- Skontrolujte si logy chýb WordPressu na chyby registrácii

### Chcem zachovať legacy režim {#i-want-to-keep-legacy-mode}

- Prejdite do **Settings** → **Third-Party Mode**
- Vyberte **Legacy** (Stará verzia)
- Kliknite na **Save** (Uložiť)
- Legacy režim bude pokračovať v fungovaní

### Moje prispôsoben schopnosti sa neobjavujú {#my-custom-abilities-arent-showing}

- Overtečte, či sú zaregistrované pomocou WordPress hookov
- Skontrolujte, či ich implementujete API Schopností (Abilities API) správne
- Prejdite si logy chýb v WordPress

### Dostávam upozornenia o „nezúfačných schopnosti“ (unclassified ability) {#im-getting-unclassified-ability-notices}

- Toto je normálne pre nové schopnosti od tretích strán
- Prejdite si ich a klasifikujte v admin upozornení
- Pre viac informácií o klasifikácii si pozrite do **Ability Visibility**

## Zpiningová kompatibilita (Backward Compatibility) {#backward-compatibility}

### Existujúce konfigurácie {#existing-configurations}

Ak máte existujúce konfigurácie schopností od tretích strán:

- **Legacy režim**: Vaša konfigurácia bude pokračovať v fungovaní
- **Manuálny režim**: Vaša konfigurácia bude pokračovať v fungovaní
- **Auto režim**: Vaša konfigurácia je ignorovaná (auto režim zberá kontrolu)

Aby ste zachovali svoju prispôsobenú konfiguráciu, zostaňte v Manuálnom alebo Legacy režime.

### Časový rámec zastarčovania (Deprecation Timeline) {#deprecation-timeline}

- **v1.12.0**: Legacy a Manuálny režim sú stále plne podporované
- **v1.13.0+**: Legacy režim môže zobrazovať upozornenia o zastarčovaní
- **v2.0.0**: Legacy režim môže byť odstránený (TBD)

## Najlepšie praxe (Best Practices) {#best-practices}

### Pre nové inštalácie {#for-new-installations}

- Používajte Auto režim (je to štandard)
- Nechajte agent Superdav AI Agent automaticky nájsť schopnosti
- Používajte Ability Visibility na kontrolu prístupu

### Pre existujúce inštalácie {#for-existing-installations}

- Upgrade na WordPress 7.0+ ak je to možné
- Prejdite na Auto režim pre uprostúpené správanie
- Prejdite si ich a klasifikujte pomocou Ability Visibility

### Pre prispôsobené schopnosti {#for-custom-abilities}

- Registrujte schopnosti pomocou WordPress hookov (Abilities API)
- Vyhnáajte sa vlastným registrom schopností
- Testujte na WordPress 7.0+ s Auto režimom

1. **Skontrolujte svoju verziu WordPressu**: Prejdite na 7.0+ pre Auto režim.
2. **Prejdite si cez režim third-party**: Prejdite do Nastavení a zkontrolujte aktuální režim.
3. **Aktualizujte, pokud je potřeba**: Přepněte na Auto režim, pokud používáte WordPress 7.0+.
4. **Klasifikujte schopnosti**: Projděte si a klasifikujte jakékoli neklasifikované schopnosti.
5. **Testování**: Ověřte, že vaše third-party schopnosti fungují správně.

## Související témata {#next-steps}

- **Viditelnost schopností (Ability Visibility)**: Kontrolujte, kde jsou které schopnosti zobrazeny.
- **WordPress Abilities API**: Naučte se o nativní registraci schopností WordPressu.
- **Vývoj third-party schopností**: Vytvořte schopnosti, které fungují s Auto režimem.
