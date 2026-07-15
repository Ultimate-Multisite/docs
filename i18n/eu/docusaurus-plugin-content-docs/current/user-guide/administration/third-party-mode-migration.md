---
title: |+
  Migrazioa irudiak

sidebar_position: 17
_i18n_hash: 21e66c5c40d03011402c58addf6d96f3
---
# Migrazioa Trantzi-Parteak (Third-Party Mode Migration)

Superdav AI Agent v1.12.0-ekik, trantzi-parteak (third-party abilities) gaurren jakinarazpenak onartzen ditu. **Trantzi-parte modu horrek auto-ekin defaulta da**, zehatz konfiguratzea ez duzu behar; WordPress 7.0+ arren native WordPress Abilities API integrazioa aktibatzen du.

## Zer Hasartu da? {#what-changed}

### v1.12.0 Herrian Aurrera egin baino lehen {#before-v1120}

Trantzi-parteak manuel konfiguratzea behar zion:

- "Third-party mode" (trantzi-parte modu) ezarritzea eskatzen zion
- Abilities hauek registry bat osoa partirak zion
- WordPress Abilities API-rekin integrazioa opsionala zion
- Legacy modua da defaulta

### v1.12.0 Herrian Aurrera egin ondoren {#after-v1120}

Trantzi-parteak autoan berriz lan egiten dute:

- Trantzi-parte modu horrek "auto"ekin defaulta da
- Abilities hauek WordPress Abilities API-rekin native (natiboa) integratzen dira
- WordPress 7.0+ arren manuel konfiguratzea ez da beharrezkoa
- Ezkerra modua (Legacy mode) da WordPress bertsio zahar batzuk jasanez ere erabilera dago

## Kudeatutako Barkatu? {#who-is-affected}

### Instalazioak Bizi (WordPress 7.0+) {#new-installations-wordpress-70}

**Ez aurreko ekintza behar duzu.** Trantzi-parte modu horrek autoan "auto"ekin ematen da, eta abilities hauek berezkoa lan egiten dute.

### Instalazioak Ezkututa Datuak {#existing-installations}

**Barkatuak preserbatzen dira.** Hau erabiltzen zion dela:

- **Legacy mode (Ezkerra modua)**: Legacy moduan jarraitu duzu (ez aldatu)
- **Manual third-party mode (Manuel trantzi-parte modu)**: Manuel moduan jarraitu duzu (ez aldatu)
- **Auto mode**: Auto moduan jarraitu duzu (ez aldatu)

### WordPress Bertsioak 7.0 Herrian Aurrera egin baino lehen {#wordpress-versions-before-70}

**Legacy mode da erabilera dago.** Hau WordPress 6.x edo alderdi zahar batarekin jarraitzen ari zete:

- Trantzi-parte modu horrek "legacy"ekin defaulta da
- Deseatzen dut manuel trantzi-parte modu aktibatu dezakezu
- Native Abilities API erabilera jartzeko WordPress 7.0+ irudien artean aurrera egin

## Moduak Erratzena (Understanding the Modes) {#understanding-the-modes}

### Auto Mode (Defaulta Bikoa) {#auto-mode-new-default}

**Auto mode** native WordPress Abilities API integrazioa erabiltzen du:

- Abilities hauek WordPress hooks batzuen bidez ematen dira
- WordPress 7.0+ Abilities API-rekin oso onartzea (compatibility)
- Trantzi-parte abilities hauek autoan aurkitzen dira
- Manuel konfiguratzea ez da beharrezkoa

**Garrantzen dit eraildu**: WordPress 7.0+ eta hiru-blargia (third-party) funtzi aukerak

### Modu Manuala {#manual-mode}

**Modu manuala** irren ditu ezarritako konfiguratazioa eskatzen du:

- Zerbi hiru-blargiak (third-party abilities) laden dituzteko espezifikatu duzu
- Probatzeko edo aukerak zehaztean laden dituzteko da
- Konfigurazio funtziak editeatzea eskatzen du
- Kontrola gehiago, baina konfiguratazio gehiago

**Garrantzen dit eraildu**: Probatzea, aukerak zehaztean laden ditzea edo konfiguratazioa oso ezarritakoak

### Modu Legazia (Legacy Mode) {#legacy-mode}

**Modu legazia** hiru-blargiak funtziaren bat sistema jadiz duten:

- Aukerak egindako registroa (WordPress Abilities API ez da)
- WordPress bertsio goreneagoekin bakarra kompatiboa da
- WordPress-arekin naturko integrazio ez da
- Ez dago erabilera, baina hala ere suportatzen da

**Garrantzen dit eraildu**: WordPress 6.x edo lehenak, edo legazia kompatibilitatea behar duzu

## Modu Aurreratuaren Kontroloa {#checking-your-current-mode}

### Administrazio Panelu bidez {#via-admin-panel}

1. **WordPress Admin** → **Superdav AI Agent** → **Settings** (Konfigurazioa)
2. **Third-Party Mode** (Hirublargia Modua) aukera aldatzeko bilatu
3. Modu aurreratua eta hori aldatzeko aukerak ikusten duzu

### Koda bidez {#via-code}

```php
$mode = get_option( 'superdav_third_party_mode' );
echo $mode; // 'auto', 'manual', edo 'legacy'
```

## Modu Aldatzea {#changing-your-mode}

### Auto Modu (Auto Mode) funtziara aldatzea {#switch-to-auto-mode}

WordPress 7.0+ dago eta auto modu erabili nahi duzu:

1. **Superdav AI Agent** → **Settings** (Konfigurazioa)
2. **Third-Party Mode** (Hirublargia Modua) bilatu
3. **Auto (WordPress Abilities API)** aukera desitu
4. **Save** (Saldu) klikatu duzu

Superdav AI Agent-ek hiru-blargiak automaticoan aurkitu eta registroatuko da.

### Manual Modu (Manual Mode) funtziara aldatzea {#switch-to-manual-mode}

Hiru-blargiak laden dituzten aukerak oso ezarritakoak kontrola nahi duzu:

1. **Superdav AI Agent** → **Settings** (Konfigurazioa)
2. **Third-Party Mode** (Hirublargia Modua) bilatu
3. **Manual** aukera desitu
4. **Save** (Saldu) klikatu duzu
5. Konfiguratizio funtziak editeatu eta laden dituzten aukerak espezifikatu

### Legazian Moduarekin (Legacy Mode) aldatzea {#switch-to-legacy-mode}

Legazia kompatibilitatea behar duzu:

1. Irduku **Superdav AI Agent**-ra → **Configurazioak**
2. **Hitz eginbidea (Third-Party Mode)** aldiru
3. **Legacy** aldatu
4. **Saldu** klikatu

## Auto Moduen Benefiziotasunak {#benefits-of-auto-mode}

### Automatiko Aurretxera (Automatic Discovery) {#automatic-discovery}

Abilidades automaticoki aurkitzen dira:

- Instalatu pluginak
- Aktibo tema (theme)
- Zure beharrezko pluginak (Must-use plugins)
- Drop-in pluginak

Manualki eregitura ez da beharrezkoa.

### Integrazio Natiboa (Native Integration) {#native-integration}

Abilidades WordPress Abilities API-rekin integratzen dira:

- WordPress core-arekin ondo inbidatuta dago
- WordPress administrazioa (admin) arekin lan egiten du
- Abilities API erabilitzen pluginakarekin kompatizkoa da
- WordPress-ek sailkatzen duen bezala, iraupabetzeko modu handiagoa da

### Administrazioa Orokorizatua (Simplified Management) {#simplified-management}

- Editu behar diren konfigurazio arkidu ez da
- Manualki abilidades eregitura ez da
- Abilidadesaren erabilera kontrolak automaticoki lan egiten du
- Admin-ek noturia alertatzen dute abilidadesez bat ez dagoela.

### Irrendituta Nagusia (Better Performance) {#better-performance}

- Abilidades cache egiten dira
- Bezkaz behar dituen legez (lazy-loaded) daiteke
- WordPress 7.0+ iraupabetzeko optimizatuta da

## Migrazio Bidea (Migration Path) {#migration-path}

### Hau WordPress 6.x-an dagoenean {#if-youre-on-wordpress-6x}

1. **WordPress 7.0+ra aukeratu** (gehitu den bitartean)
2. **Superdav AI Agent-a v1.12.0+ra updatea** egin
3. **Hitz eginbideak Auto-ra aldatu** (opsionala; legacy modu hala lan egiten du)
4. **Abilidadesaren erabilera iruditu** (access controls ondo eta zuzena jakinarazteko)

### Hau WordPress 7.0+an dagoenean {#if-youre-on-wordpress-70}

1. **Superdav AI Agent-a v1.12.0+ra updatea** egin
2. **Hitz eginbideak Auto-re ematen dela jartzen** (defaulta da)
3. **Abilidadesaren erabilera iruditu** (access controls ondo eta zuzena jakinarazteko)
4. **Abilidades zure testatu** (lan egiten duen ziurtatzeko)

## Problema Erregitzenak (Troubleshooting) {#troubleshooting}

### Auto moduan abilidades ez dagoenean {#abilities-arent-loading-in-auto-mode}

- WordPress 7.0+an dagoela ziurtatu duzu
- Hitz eginbideak "Auto"re ematen dela kontrolatu duzu
- Abilidadesa ematen pluginak aktibo dagoela ziurtatu duzu
- WordPress error logs (erros logiak) iruditu abeldu erreguntzak

### Legacy modu ki egon dut {#i-want-to-keep-legacy-mode}

- **Configurazioak** → **Hitz eginbideak** aldiru
- **Legacy** aldatu
- **Saldu** klikatu
- Legacy modu hala lan egiten du

### Hau ez da funtziak ez du {#my-custom-abilities-arent-showing}

- Ezinbestatu da horiek WordPress hooks-ek bidez registering egin duen jakinarazteko.
- Ezkiritu, zein erabilizki implementatzen dituzke Abilities API-a.
- WordPress error logs-ek jartzen ditu.
- **Ability Visibility** admin page-a erabildu, guztiz registered dauden abilities hauek ikusteko.

### "unclassified ability" (ez klasifikatu ability) notiziak hartzen dutena {#im-getting-unclassified-ability-notices}

- Hau normala da berri third-party abilities-ek bitartean.
- Admin notice-an zeharra ikusi eta klasifikatu.
- Klasifikazio bidezko detallak **Ability Visibility**-an ikustu.

## Backward Compatibility (Ireki-aldia) {#backward-compatibility}

### Konfigurazioak dagoen daude {#existing-configurations}

Ezkerre third-party ability konfigurazio bat duzun denean:

- **Legacy mode (Modo Zaharra)**: Konfigurazioa jarraitzen du.
- **Manual mode (Modo Manuala)**: Konfigurazioa jarraitzen du.
- **Auto mode (Modo Autoa)**: Konfigurazioa ignora da (auto modua hartzen du).

Konfigurazioa oso berezia jarraitu nahi duzena, Manual edo Legacy moduan jarraitu.

### Deprecation Timeline (Ez-eragiketa aldea) {#deprecation-timeline}

- **v1.12.0**: Legacy eta Manual moduak guztiz jarraitzen dira.
- **v1.13.0+**: Legacy modua depikazio notiziak erakusten dezake.
- **v2.0.0**: Legacy modua lehen daite (TBD).

## Best Practices (Mehietako praktikak) {#best-practices}

### Berri instalazioetan {#for-new-installations}

- Auto modea erabildu (horrak default-a da).
- Superdav AI Agent-ek abilities hauek automaticoan aukeratu behartu.
- Zuzendaritza kontrolatzeko Ability Visibility-a erabildu.

### Instalazioak dagoen daude {#for-existing-installations}

- Posible izan denean WordPress 7.0+ honera jarri.
- Jarraipamendu zehatzago batzuk arautzeko Auto modean jarraitu.
- Ability Visibility erabilizki abilities hauek ikusi eta klasifikatu behartu.

### Abilities bereziak (Custom Abilities) {#for-custom-abilities}

- WordPress hooks-ek bidez registering egin duzu abilities-ek (Abilities API).
- Custom ability registries ez aurkitu behar dira.
- Auto modean WordPress 7.0+ honera jarraitu testatzeko.

## Next Steps (Irudiak) {#next-steps}

1. **Kontrollatu zure WordPress bertsioa**: Ezkutatu 7.0 edo gehiak da Auto modua bitartean.
2. **Etxeko modua (third-party mode) iruditu**: Settings-le jarraitu eta modu aktuatzen duen modu iruditu.
3. **Aktualizatu behar dela**: WordPress 7.0 edo gehiak da, Auto moda aktiboa izan behar duzu.
4. **Abilitate zehaztu**: Ez zehatutako abilitateak iruditu eta zehaztu.
5. **Etxatu**: Zure modu ez-WordPress abilitateak lehenbait dagoen jakin bat da.
