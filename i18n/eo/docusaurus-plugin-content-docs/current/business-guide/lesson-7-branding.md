---
title: 'Leciono 7: Igi ĝin via'
sidebar_position: 8
_i18n_hash: 90013fc79a9cbb15283ce89b688002b1
---
# Leciono 7: Fari Ĝin Via

Viaj klientoj neniam devus senti, ke ili uzas "ian WordPress kromprogramon." Ili devus senti, ke ili uzas FitSite -- platformon konstruitan por ilia industrio. Ĉi tiu leciono pritraktas markigon, blankmarkigon, kaj kiel igi la platformon sentiĝi kiel produkto.

## Kie Ni Ĉesis {#where-we-left-off}

FitSite havas funkciantan pagprocezan fluon, kiu kondukas posedantojn de fitnesaj studioj de plana elekto ĝis aktiva retejo. Nun ni igas la tutan sperton sentiĝi kiel kohera, markita produkto.

## Via Platforma Domajno {#your-platform-domain}

La fundamento de via marko estas via domajno. Por FitSite:

- **Ĉefa domajno**: `fitsite.com` (via merkatika retejo kaj reta radiko)
- **Klientaj retejoj**: `studioname.fitsite.com` (subdomajnoj)
- **Propraj domajnoj**: Klientoj en Growth kaj Pro planoj povas ligi sian propran domajnon

### Agordi Vian Domajnon {#setting-up-your-domain}

1. Registru vian platforman domajnon
2. Direktigu ĝin al via gastiga provizanto
3. Agordu ĵokeran DNS (`*.fitsite.com`) por klientaj subdomajnoj
4. Certigu, ke ĵokera SSL estas aktiva

Vidu [Kiel Agordi Domajnan Ligadon](/user-guide/domain-mapping/how-to-configure-domain-mapping) por detalaj instrukcioj.

## Blankmarkigi la Administran Sperton {#white-labeling-the-admin-experience}

Kiam posedanto de fitnesa studio ensalutas en sian retejan Dashboard, ili devus vidi vian markon, ne markigon de WordPress aŭ Ultimate Multisite.

### Propra Ensaluta Paĝo {#custom-login-page}

Agordu la WordPress ensalutan paĝon por montri:

- Vian FitSite emblemon
- Fitnese taŭgajn fonbildojn
- Viajn markajn kolorojn

### Dashboard Markigo {#dashboard-branding}

Uzu la [Admin Page Creator](/addons/admin-page-creator) aldonaĵon aŭ propran CSS por:

- Anstataŭigi la WordPress emblemon per via FitSite emblemo
- Agordi la administran kolorskemon por kongrui kun via marko
- Aldoni propran Dashboard fenestraĵon kun fitnese specifaj rapidaj ligiloj kaj helpaj rimedoj

### Propraj Administraj Paĝoj {#custom-admin-pages}

Konsideru krei proprajn administrajn paĝojn, kiuj montras la plej gravajn agojn por posedantoj de fitnesaj studioj:

- "Redaktu Vian Klasan Horaron"
- "Ĝisdatigu Trejnistajn Profilojn"
- "Vidu Vian Retejon"

Tio reduktas la lernokurbon metante niĉe rilatajn agojn antaŭen kaj centre anstataŭ kaŝi ilin en la norma WordPress menuo.

## Markigi Viajn Komunikadojn {#branding-your-communications}

Ĉiu retpoŝto, fakturo, kaj sciigo devus plifortigi vian markon.

### Sistemaj Retpoŝtoj {#system-emails}

Iru al **Ultimate Multisite > Settings > Emails** kaj agordu ĉiujn sistemajn retpoŝtojn:

- **De-nomo**: FitSite
- **De-retpoŝto**: hello@fitsite.com
- **Retpoŝtaj ŝablonoj**: Uzu viajn markajn kolorojn kaj emblemon
- **Lingvo**: Fitnese specifa ĉie

Ŝlosilaj retpoŝtoj por agordi:

| Retpoŝto | Ĝenerala Versio | FitSite Versio |
|-------|----------------|-----------------|
| Bonvenigo | "Via nova retejo estas preta" | "Via fitnesa studia retejo estas aktiva" |
| Paga kvitanco | "Pago ricevita" | "FitSite abona pago konfirmita" |
| Provo finiĝanta | "Via provo baldaŭ finiĝos" | "Via FitSite provo finiĝas post 3 tagoj -- tenu vian studian retejon aktiva" |

### Fakturoj {#invoices}

Agordu fakturajn ŝablonojn kun:

- Via FitSite emblemo kaj markaj koloroj
- Viaj komercaj detaloj
- Fitnese specifaj produktaj nomoj (ne ĝeneralaj planaj ID-oj)

## La Klientalfronta Retejo {#the-customer-facing-site}

Via ĉefa domajno (`fitsite.com`) bezonas merkatikan retejon, kiu vendas la platformon. Ĉi tio estas aparta de la Ultimate Multisite reta administrado -- ĝi estas la publika vizaĝo de via komerco.

Ŝlosilaj paĝoj:

- **Hejmpaĝo**: Klara valorpropono por fitnesaj entreprenoj
- **Trajtoj**: Kion FitSite faras, per fitnesaj terminoj
- **Prezado**: Viaj tri planoj kun niĉe specifaj trajto-komparoj
- **Ekzemploj**: Montrujaj retejoj konstruitaj sur la platformo
- **Registriĝo**: Ligiloj al via pagformularo

:::tip Via Merkatika Retejo Povas Esti Reta Retejo
Kreu vian merkatikan retejon kiel retejon ene de via propra reto. Tio permesas al vi administri ĝin de la sama Dashboard kaj demonstras la kapablojn de via propra platformo.
:::

## Propra Domajno por Klientoj {#custom-domain-for-customers}

Por klientoj en planoj, kiuj inkluzivas proprajn domajnojn, dokumentu la procezon klare:

1. Kliento registras aŭ transdonas sian domajnon al registristo
2. Kliento ĝisdatigas DNS por direkti al via platformo (provizu ĝustajn rikordojn)
3. Ultimate Multisite pritraktas la domajnan ligadon kaj SSL

Kreu helpartikolon aŭ scibazan eniron specife por ĉi tiu procezo, verkitan por neteknikaj posedantoj de fitnesaj studioj.

## La FitSite Reto Ĝis Nun {#the-fitsite-network-so-far}

```
FitSite Reto
├── WordPress Multisite (subdomajna reĝimo)
├── Ultimate Multisite (agordita + markita)
├── Platforma Domajno (fitsite.com + ĵokera SSL)
├── Retejaj Ŝablonoj (Studio Essential, Gym Pro, Fitness Chain)
├── Produktoj (Starter, Growth, Pro + Mendaj Aldonproponoj)
├── Pagproceza Fluo (niĉe specifa, testita)
├── Markigo
│   ├── Propra ensaluta paĝo
│   ├── Markita administra Dashboard
│   ├── Niĉe specifaj sistemaj retpoŝtoj
│   ├── Markitaj fakturoj
│   └── Merkatika retejo ĉe fitsite.com
└── Preta por enkonduka fluo (sekva leciono)
```

## Kion Ni Konstruis en Ĉi Tiu Leciono {#what-we-built-this-lesson}

- **Platforma domajno kaj DNS** agorditaj por markita sperto
- **Blankmarkita administrado** kun FitSite markigo ĉie
- **Agorditaj komunikadoj** -- retpoŝtoj, fakturoj, kaj sciigoj ĉiuj laŭmarkaj
- **Merkatika retejo** kiu vendas FitSite al posedantoj de fitnesaj studioj
- **Dokumentado pri propra domajno** por klientoj kiuj volas sian propran domajnon

---

**Sekva:** [Leciono 8: Klienta Enkonduko](lesson-8-onboarding) -- ni desegnas la sperton, kiu transformas novan registriĝon en aktivan, feliĉan klienton.
