---
title: Migracija v tretji strani
sidebar_position: 17
_i18n_hash: 21e66c5c40d03011402c58addf6d96f3
---
# Migracija na režim tretjih oseb (Third-Party Mode Migration) {#third-party-mode-migration}

Superdav AI Agent v1.12.0 spremeni način obdelave sposobnosti tretjih oseb. **Režim tretjih oseb se zdaj po defaultu uporablja "auto"**, kar omogoča natavno integracijo WordPress Abilities API na WordPress 7.0+ brez ručne konfiguracije.

## Kaj se spremenilo? {#what-changed}

### Pred v1.12.0 {#before-v1120}

Sposobnosti tretjih oseb so zahtevale ručno konfiguracijo:

- Morali ste eksplicitno vključiti "third-party mode"
- Sposobnosti so bile vnosjene iz prilagojene registrcije (custom registry)
- Integracija z WordPress Abilities API je bila opcionalna
- Starostni režim (legacy mode) je bil default

### Po v1.12.0 {#after-v1120}

Sposobnosti tretjih oseb delujejo samodejno:

- Režim tretjih oseb se po defaultu uporablja "auto"
- Sposobnosti se natavno integrirajo z WordPress Abilities API
- Na WordPress 7.0+ ni potrebna ručna konfiguracija
- Starostni režim je še vedno na voljo za stareje verzije WordPressa

## Kdo je vpljen? {#who-is-affected}

### Novi uporabi (WordPress 7.0+) {#new-installations-wordpress-70}

**Ni potrebn nobene akciji.** Režim tretjih oseb se samodejno postavi na "auto", in sposobnosti delujejo iz paketa (out of the box).

### Obstajajoči uporabniki {#existing-installations}

**Vaše nastavitve so ohranjene.** Če ste uporabili:

- **Starostni režim (Legacy mode)**: Ostanete v starostnem režimu (ni sprememb)
- **Ručni režim tretjih oseb**: Ostanete v ručnem načinu (ni sprememb)
- **Auto režim**: Nadaljuješ z auto režimom (ni sprememb)

### Verzije WordPressa pred 7.0 {#wordpress-versions-before-70}

**Starostni režim je še vedno na voljo.** Če ste na WordPressu 6.x ali starejšem:

- Režim tretjih oseb se po defaultu uporablja "legacy"
- Lahko ručno vključite režim tretjih oseb, če želite
- Ažirajte na WordPress 7.0+ za uporabo natavnega Abilities API

## Razumevanje režimov {#understanding-the-modes}

### Auto Režim (Novi default) {#auto-mode-new-default}

**Auto režim** uporablja natavno integracijo WordPress Abilities API:

- Sposobnosti so registrirane preko WordPress hookov
- Polna kompatibilnost z WordPress 7.0+ Abilities API
- Avtomatsko odkrivanje sposobnosti tretjih oseb
- Ni potrebna ručna konfiguracija

**Kaj uporabiti**: WordPress 7.0+ z možnostmi tretjih strank

### Manualni način (Manual Mode) {#manual-mode}

**Manualni način** zahteva navodilo in konfiguracijo:

- Določite, kakšne možnosti tretjih strank želite vključiti
- Uporabno za testiranje ali izbirano vključitev mozošnosti
- Zahteva ureditev konfiguracijskih datotek
- Več kontrole, vendar več postavitve

**Kaj uporabiti**: Testiranje, izbirana vključitev mozošnosti ali prilagojene konfiguracije

### Starostni način (Legacy Mode) {#legacy-mode}

**Starostni način** uporablja stare sistem tretjih strank:

- Prilagodljiv registar mozošnosti (ne WordPress Abilities API)
- Zaenkratno kompatibilen z starejšimi različicami WordPressa
- Ni natančno integriran z WordPressom
- Je zastarejen, vendar je še vedno podprt

**Kaj uporabiti**: WordPress 6.x ali starejši, ali ko potrebujete starostno kompatibilnost

## Preverjanje trenutnega načina {#checking-your-current-mode}

### Splet admin panela (Admin Panel) {#via-admin-panel}

1. Pojdite na **WordPress Admin** → **Superdav AI Agent** → **Settings**
2. Poiščite nastavitvo **Third-Party Mode**
3. Tam boste videli svoj trenutni način in možnosti za njegovo spremembo

### Splet kode (Code) {#via-code}

```php
$mode = get_option( 'superdav_third_party_mode' );
echo $mode; // 'auto', 'manual', ali 'legacy'
```

## Sprememba načina {#changing-your-mode}

### Preklap na Auto Mode {#switch-to-auto-mode}

Če ste na WordPress 7.0+ in želite uporabiti auto mode:

1. Pojdite na **Superdav AI Agent** → **Settings**
2. Poiščite **Third-Party Mode**
3. Izberite **Auto (WordPress Abilities API)**
4. Kliknite na **Save**

Superdav AI Agent bo sam odkril in registriral tretjine mozošnosti.

### Preklap na Manualni način {#switch-to-manual-mode}

Če želite sami upravljati, kakšne mozošnosti se vključijo:

1. Pojdite na **Superdav AI Agent** → **Settings**
2. Poiščite **Third-Party Mode**
3. Izberite **Manual**
4. Kliknite na **Save**
5. Uredite svoj konfiguracijski datotek, da navedete, kakšne mozošnosti želite vključiti

### Preklap na Starostni način (Legacy Mode) {#switch-to-legacy-mode}

Če potrebujete starostno kompatibilnost:

1. Poi v **Superdav AI Agent** → **Settings**
2. Poi najdete **Third-Party Mode** (Trtiti stranski način)
3. Izberite **Legacy** (Staro načino)
4. Kliknite na **Save** (Shrani)

## Prednosti Auto Mode {#benefits-of-auto-mode}

### Avtomatsko odkritje {#automatic-discovery}

Sposobnosti se avtomatsko odkrijeta iz:

- Instaliranih pluginov
- Aktivenega teme
- Obveznih pluginov
- Drop-in pluginov

Ni potrebno ručno registracijo.

### Deželna integracija (Native Integration) {#native-integration}

Sposobnosti se integrirajo z WordPress Abilities API:

- U skladu z WordPress core
- Deluje z WordPress adminom
- Compatibilno je z drugimi pluginami, ki uporabljajo Abilities API
- Prihodnostna varnost glede na razvoj WordPressa

### Preprosto upravljanje (Simplified Management) {#simplified-management}

- Ni potrebno urediti konfiguracijske datoteke
- Ni potrebno ručno registrirati sposobnosti
- Kontrole vidljivosti sposobnosti delujejo avtomatsko
- Admine obvestijo vas o neklasificiranih sposobnostih

### Boljša zmogljivost (Better Performance) {#better-performance}

- Sposobnosti so v cache
- Lazy-loaded na zahtevo
- Optimizirano za WordPress 7.0+

## Pot za migracijo {#migration-path}

### Če ste na WordPressu 6.x {#if-youre-on-wordpress-6x}

1. **Ažirajte na WordPress 7.0+** (ko je pripravljen)
2. **Ažirajte Superdav AI Agent** na v1.12.0+
3. **Preimenujte third-party mode na Auto** (opcionalno; legacy mode še vedno deluje)
4. **Pregledajte vidljivost sposobnosti**, da se zagotvate, da so pravilne kontrole dostopa

### Če ste na WordPressu 7.0+ {#if-youre-on-wordpress-70}

1. **Ažirajte Superdav AI Agent** na v1.12.0+
2. **Preverite, da je third-party mode nastavljen na Auto** (bi bi bil po defaultu)
3. **Pregledajte vidljivost sposobnosti**, da se zagotvate, da so pravilne kontrole dostopa
4. **Preizkusite third-party sposobnosti**, da potrdite, da delujejo

## Reševanje težav (Troubleshooting) {#troubleshooting}

### Sposobnosti se ne vklajajo v auto mode {#abilities-arent-loading-in-auto-mode}

- Preverite, da ste na WordPressu 7.0+
- Preverite, da je third-party mode nastavljen na "Auto"
- Preverite, da je plugin, ki zagotavlja sposobnost, aktiven
- Preverite WordPress error logs za napake pri registraciji

### Želim ohraniti legacy mode {#i-want-to-keep-legacy-mode}

- Poi v **Settings** → **Third-Party Mode**
- Izberite **Legacy** (Staro načino)
- Kliknite na **Save** (Shrani)
- Legacy mode bo nadalje deloval

### Moja prilagodljiva sposobnosti se ne prikazuje {#my-custom-abilities-arent-showing}

- Preverite ali so jih registrirali preko WordPress hookov
- Preverite da pravilno implementirate Abilities API
- Pregledajte WordPress error logove
- Uporabite admin stran **Ability Visibility** za vidik vseh registriranih sposobnosti

### Dobavljam sporočila "nepoznatne sposobnosti" (unclassified ability) {#im-getting-unclassified-ability-notices}

- To je normalno pri novih tretjih strank sposobnostih
- Pregledajte in klasifikirajte jih v admin noticah
- Vidite **Ability Visibility** za podrobnosti o klasifikaciji

## Zgodnost z starejšimi verzijami (Backward Compatibility) {#backward-compatibility}

### Obstojna konfiguracija (Existing Configurations) {#existing-configurations}

Če imate obstoječe konfiguracije tretjih strank sposobnosti:

- **Legacy mode**: Vaša konfiguracija nadaljuje delovanje
- **Manual mode**: Vaša konfiguracija nadaljuje delovanje
- **Auto mode**: Vaša konfiguracija je ignorirana (auto mode prevzame nad)

Da bi ohranili svojo prilagodljive konfiguracijo, ostajte v Manual ali Legacy modu.

### Vременi izobraževanja (Deprecation Timeline) {#deprecation-timeline}

- **v1.12.0**: Mode Legacy in Manual še vedno popolnoma podporni
- **v1.13.0+**: Mode Legacy lahko prikazuje sporočila o izobraževanju (deprecation notices)
- **v2.0.0**: Mode Legacy se lahko odstrani (odločeno)

## Najboljše prakse (Best Practices) {#best-practices}

### Za nove instalacije {#for-new-installations}

- Uporabite Auto mode (to je zadana nastavitva)
- Dajte Superdav AI Agentu sposobnostih samodejno odkrijati
- Uporabite Ability Visibility za nadzor dostopa

### Za obstoječe instalacije {#for-existing-installations}

- Posodobite na WordPress 7.0+ če je to mogoče
- Preklapajte se na Auto mode za preprosto upravljanje
- Pregledajte in klasifikirajte sposobnosti z uporabo Ability Visibility

### Za prilagodljive sposobnosti (Custom Abilities) {#for-custom-abilities}

- Registrirajte sposobnosti preko WordPress hookov (Abilities API)
- Izogibajte se registraciji prilagodljivih sposobnosti (custom ability registries)
- Testirajte na WordPress 7.0+ z Auto mode

## Naslednji koraki (Next Steps) {#next-steps}

1. **Preverite svojo verzijo WordPressa**: Preverite, da ste na 7.0+ za Auto mode
2. **Pregledajte svoj tredj party mode**: Pojdite v Settings in preverite trenutni mod
3. **Obnovite če je potrebno**: Preklopite na Auto mode, če ste na WordPressu 7.0+
4. **Kategorizirajte sposobnosti**: Pregledajte in kategorizirajte kakršne koli nekatestrirane sposobnosti
5. **Testiranje**: Preverite, da delujejo vaši tredj party abilities pravilno

## Povezani pod temami {#related-topics}

- **Vidljivost sposobnosti (Ability Visibility)**: Kontrolirajte, kjer so expozirane določene sposobnosti
- **WordPress Abilities API**: Učite se o nativni registraciji WordPress ability
- **Razvoj tredj party ability**: Ustvarite sposobnosti, ki delujejo z Auto mode
