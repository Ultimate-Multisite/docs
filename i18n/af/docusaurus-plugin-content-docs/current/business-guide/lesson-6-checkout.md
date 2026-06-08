---
title: 'Les 6: Die Registrasie-ervaring'
sidebar_position: 7
_i18n_hash: a5c16cdd9b4e53a69e138df7bb042411
---
# Les 6: Die Aanmeldervaring

Die afrekenproses is waar belangstelling om inkomste verander. ’n Verwarrende of generiese aanmeldproses verloor kliënte. ’n Nis-spesifieke proses wat hul taal praat en moeiteloos voel, konverteer hulle.

## Waar Ons Gebly Het

FitSite het templates en planne gekonfigureer. Nou bou ons die registrasie- en afrekenervaring wat ewigheidsstudio-eienaars in betalende kliënte omskep.

## Die Registrasieproses Begryp

Ultimate Multisite se afrekenvorms is volledig aanpasbare meer-stappe vorms. Vir FitSite wil ons ’n proses hê wat:

1. Voel of dit vir gesondheidsstudio-besighede gebou is
2. Net die nodige inhaal
3. Die kliënt so vinnig moontlik by ’n werkende webwerf kry

Kyk na [Die Registrasieproses](/user-guide/configuration/the-registration-flow) vir die volledige tegniese verwysing.

## Die FitSite Afrekening Ontwerp

Navigeer na **Ultimate Multisite > Checkout Forms** en skep ’n nuwe vorm.

### Stap 1: Plankeuseke

Die eerste ding wat ’n gesondheidsstudio-eienaar moet sien, moet die planne wees, aangebied in terme wat hulle verstaan.

- Voeg ’n **Pricing Table** vel by
- Konfigureer dit om al drie FitSite-planne te wys
- Die planbeskrywings wat jy in Les 5 geskryf het, verskyn hier – maak seker dit spreek oor gesondheidsbesigheidsbehoeftes, nie tegniese kenmerke nie

:::tip Die Nis-taal is Belangrik
"1 GB berging" beteken niks vir ’n gim-eienaar nie. "Alles wat jy nodig het vir ’n professionele studio-webwerf" beteken alles. Skryf planbeskrywings in jou kliënt se taal.
:::

### Stap 2: Template Keuse

Nadat die plan gekies is, kies die kliënt hul begin-template.

- Voeg ’n **Template Selection** vel by
- Die beskikbare templates word gefilter deur die plan wat hulle gekies het (gekonfigureer in Les 5)
- Elke template moet ’n voorskoubeeld hê wat ’n gesondheids-spesifieke ontwerp wys

### Stap 3: Rekening Skep

Hou dit minimaal. Vang net in:

- E-posadres
- Wenkwoord
- Studio/besigheidsnaam (dit word hul webwerfnaam)

Vra nie vir inligting wat jy nie nodig het by aanmelding nie. Elke ekstra vel verminder konversies.

### Stap 4: Webwerf Opstel

- **Site title**: Voorvul vanaf die studio naam wat in Stap 3 ingvoer is
- **Site URL**: Outomaties genereer vanaf die studio naam (bv. `ironworks.fitsite.com`)

### Stap 5: Betaling

- Voeg die **Payment** vel by
- Konfigureer jou betalingshek ([Stripe](/user-guide/payment-gateways/stripe) word aanbeveel vir abonnementsbelasting)
- As jy order bumps in Les 5 geskep het, voeg ’n **Order Bump** vel by voordat die betalingsstap kom

### Stap 6: Bevestiging

- Pas die bevestigingsboodskap aan met gesondheids-spesifieke taal
- Voorbeeld: "Jou gesondheidsstudio-webwerf word geskep. Jy sal binne 'n paar sekondes na jou nuwe webwerf herlei word."

## Byvoeg van ’n Periodeseleksie-Toggle

As jy prysvariasies in jou planne ingestel het (maandeliks teenoor jaarliks), voeg ’n **Period Selection** vel by die afrekenvorm sodat kliënte tussen belastingperiodes kan skakel. Kyk na [Checkout Forms](/user-guide/configuration/checkout-forms#adding-a-period-selection-toggle) vir instruksies.

## Betaling Konfigureer

As jy nog nie ’n betalingshek ingestel het nie:

1. Navigeer na **Ultimate Multisite > Settings > Payment Gateways**
2. Volg die [Stripe setup guide](/user-guide/payment-gateways/stripe) of jou voorkeurhek
3. Test ’n volledige afrekenproses met ’n toetsbetaling

Kyk na [Getting Paid](/user-guide/payment-gateways/getting-paid) vir besonderhede oor hoe betalings na jou rekening vloei.

## Die Proses Toets

Voordat jy verdergaan, voltooi ’n volledige toets-aanmelding:

1. Maak die afrekenvorm oop in ’n inkognito/privaat browservenster
2. Kies ’n plan
3. Kies ’n template
4. Skep ’n rekening
5. Voltooi betaling (gebruik toetsmodus)
6. Verifieer dat die webwerf met die korrekte template geskep is

Kontroleer dat:

- [ ] Planbeskrywings duidelik en nis-spesifiek is
- [ ] Template voorskoues gesondheids-passende ontwerpe toon
- [ ] Die webwerf-URL korrek vanaf die studio naam genereer
- [ ] Betaling suksesvol verwerk word
- [ ] Die kliënt op ’n werkende webwerf met die gekose template land
- [ ] Bevestigings-e-posse gesondheids-spesifieke taal gebruik

## Die FitSite Netwerk Tot Nou

```
FitSite Network
├── WordPress Multisite (subdomain mode)
├── Ultimate Multisite (gekonfigureer)
├── Hosting met wildcard SSL + domain mapping
├── Site Templates (Studio Essential, Gym Pro, Fitness Chain)
├── Products (Starter, Growth, Pro + Order Bumps)
├── Checkout Flow
│   ├── Plan keuse met nis-spesifieke beskrywings
│   ├── Template keuse met gesondheidsvoorskoues
│   ├── Minimaal rekening skep
│   ├── Betaling via Stripe
│   └── Gesondheids-spesifieke bevestiging
└── Gereed vir branding (volgende les)
```

## Wat Ons Hierdie Les Gebou Het

- **’n Meer-stappe afrekenvorm** wat gesondheidsstudio-eienaars gerig is
- **Nis-spesifieke taal** deur die hele aanmeldproses
- **Minimale fynheid** – net noodsaaklike velde, vinnige pad na ’n werkende webwerf
- **Betalingsintegrasie** met toetsverifikasie
- **’n Geteste end-tot-end proses** van plankeuse tot werkende webwerf

---

**Volgende:** [Les 7: Maak Dit Joune](lesson-7-branding) -- ons white-label die platform en vestig FitSite as ’n handelsmerk.
