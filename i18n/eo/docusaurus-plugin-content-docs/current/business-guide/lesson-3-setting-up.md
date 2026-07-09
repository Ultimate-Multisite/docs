---
title: 'Leciono 3: Agordi vian reton'
sidebar_position: 4
_i18n_hash: 4bffe2f3ba68d1a58bfc32d6b0a3c5c7
---
# Leciono 3: Agordi Vian Reton

Tempo konstrui. En ĉi tiu leciono vi instalos Ultimate Multisite kaj agordos la fundamenton de la FitSite-reto. Ĉiu decido ĉi tie estas farita kun la fitness-niĉo en menso.

## Kie Ni Restis

Ni elektis fitness-studiojn kiel nian niĉon kaj validigis la ŝancon. Nun ni transformas tiun ideon en funkciantan platformon.

## Elekti Vian Gastigadon

Via gastigada elekto gravas pli por niĉa platformo ol por unuopa retejo. Vi ne gastigas unu retejon -- vi gastigas reton, kiu kreskos al dekoj aŭ centoj da retejoj.

### Kion Serĉi

- **Subteno por WordPress Multisite**: Ne ĉiuj gastigantoj bone traktas multisite
- **Wildcard SSL**: Esenca por subdomajn-bazitaj retoj
- **Skaleblaj rimedoj**: Vi bezonas spacon por kreski sen migrado
- **Ultimate Multisite integriĝo**: Aŭtomatigita domajna mapado kaj SSL ŝparas signifan operacian penon

### Rekomendita Aliro

Elektu gastiganton el la listo de [Kongruaj Provizantoj](/user-guide/host-integrations/closte). Ĉi tiuj estis testitaj kun Ultimate Multisite kaj provizas la integriĝojn, kiujn vi bezonas por domajna mapado kaj SSL-aŭtomatigo.

Por FitSite, ni uzos subdomajnan agordon. Ĉi tio signifas, ke klientaj retejoj komence aperos kiel `studioname.fitsite.com` antaŭ ol ili laŭvole mapos sian propran domajnon.

## Instali WordPress Multisite

Se vi ankoraŭ ne havas instalaĵon de WordPress Multisite:

1. Instalu WordPress ĉe via gastigada provizanto
2. Sekvu la gvidilon [Kiel Instali WordPress Multisite](/user-guide/getting-started/how-to-install-wordpress-multisite)
3. Elektu agordon de **subdomajno** kiam vi estos petata

:::tip Kial Subdomajnoj?
Subdomajnoj donas al ĉiu klienta retejo sian propran distingan adreson (`studio.fitsite.com`) anstataŭ vojon (`fitsite.com/studio`). Ĉi tio estas pli profesia por viaj klientoj kaj evitas konfliktojn de konstantaj ligiloj. Vidu [Ultimate Multisite 101](/user-guide/getting-started/ultimate-multisite-101) por detala komparo.
:::

## Instali Ultimate Multisite

Sekvu la gvidilon [Instali Ultimate Multisite](/user-guide/getting-started/installing-ultimate-multisite) por:

1. Alŝuti kaj aktivigi la kromprogramon tra la tuta reto
2. Ruli la [Agordan Sorĉiston](/user-guide/getting-started/multisite-setup-wizard)

Dum la agorda sorĉisto, memoru la FitSite-niĉon:

- **Valuto**: Agordu al la valuto, kiun uzas viaj fitness-studiaj klientoj
- **Firmaa nomo**: "FitSite" (aŭ via elektita markonomo)
- **Firmaa emblemo**: Alŝutu vian markemblemon -- ĉi tio aperas sur fakturoj kaj retpoŝtoj

## Agordi por la Fitness-Niĉo

Kun Ultimate Multisite instalita, faru ĉi tiujn niĉ-specifajn agordajn elektojn:

### Ĝeneralaj Agordoj

Iru al **Ultimate Multisite > Agordoj** kaj agordu:

- **Reteja nomo**: FitSite
- **Defaŭlta rolo**: Administranto -- posedantoj de fitness-studioj bezonas plenan regon de sia reteja enhavo
- **Registriĝo**: Ebligu uzantan registriĝon por ke studiaj posedantoj povu mem aliĝi

### Retpoŝta Agordo

Viaj sistemaj retpoŝtoj devus paroli la lingvon de via niĉo. Iru al **Ultimate Multisite > Agordoj > Retpoŝtoj** kaj personecigu:

- Anstataŭigu ĝeneralan lingvaĵon de "via nova retejo" per fitness-specifaj mesaĝoj
- Ekzempla bonveniga temo: "Via fitness-studia retejo estas preta"
- Ekzempla bonveniga korpo: Referencu ilian studion, klasojn, kaj kiel komenci kun ilia fitness-retejo

Ni plue rafinos ĉi tiujn en Leciono 8 (Klienta Enkonduko), sed agordi la tonon nun certigas, ke eĉ fruaj testaj aliĝoj sentas sin niĉ-specifaj.

### Domajna Agordo

Se vi uzas kongruan gastigadan provizanton, agordu domajnan mapadon nun:

1. Iru al **Ultimate Multisite > Agordoj > Domajna Mapado**
2. Sekvu la integriĝan gvidilon por via specifa gastiganto
3. Testu, ke novaj subretejoj ricevas SSL aŭtomate

Ĉi tio certigas, ke kiam ni komencos krei ŝablonojn kaj testajn retejojn en la sekva leciono, ĉio funkcios de komenco ĝis fino.

## La FitSite-Reto Ĝis Nun

Je la fino de ĉi tiu leciono, jen kion vi havas:

```
FitSite-Reto
├── WordPress Multisite (subdomajna reĝimo)
├── Ultimate Multisite (instalita kaj agordita)
├── Gastigado kun wildcard SSL
├── Domajna mapado agordita
├── Niĉ-specifaj retpoŝtaj ŝablonoj (komencaj)
└── Preta por retejaj ŝablonoj (sekva leciono)
```

## Kion Ni Konstruis en Ĉi Tiu Leciono

- **Funkcianta instalaĵo de WordPress Multisite** en subdomajna reĝimo
- **Ultimate Multisite instalita** kaj agordita kun FitSite-markado
- **Gastigado kaj SSL** agorditaj por kreskanta reto
- **Domajna mapado** agordita por via gastigada provizanto
- **Niĉ-specifa retpoŝta tono** establita ekde la unua tago

---

**Sekva:** [Leciono 4: Konstrui Niĉajn Ŝablonojn](lesson-4-templates) -- ni kreas retejajn ŝablonojn, kiujn posedantoj de fitness-studioj efektive volos uzi.
