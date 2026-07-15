---
title: 'Lektioun 7: Et zu Ärem maachen'
sidebar_position: 8
_i18n_hash: 90013fc79a9cbb15283ce89b688002b1
---
# Lektioun 7: Maacht et zu Ärem Eegenen

Är Clientë sollten ni d'Gefill hunn, datt si "iergendee WordPress Plugin" benotzen. Si sollten d'Gefill hunn, datt si FitSite benotzen -- eng Plattform, déi fir hir Branche gebaut ass. Dës Lektioun behandelt Branding, White-Labeling, an wéi d'Plattform sech wéi e Produkt ufillt.

## Wou mir opgehalen hunn {#where-we-left-off}

FitSite huet e funktionéierende Bezuelflow, deen Besëtzer vu Fitnessstudioe vun der Plangauswiel bis bei eng live Site féiert. Elo maache mir déi ganz Erfarung zu engem zesummenhängenden, markéierte Produkt.

## Är Plattform-Domain {#your-platform-domain}

D'Fundament vun Ärer Mark ass Är Domain. Fir FitSite:

- **Haaptdomain**: `fitsite.com` (Är Marketing-Site an de Netzwierk-Root)
- **Client-Siten**: `studioname.fitsite.com` (Subdomains)
- **Eegen Domains**: Clienten op Growth- a Pro-Pläng kënnen hir eege Domain verknëppen

### Är Domain ariichten {#setting-up-your-domain}

1. Registréiert Är Plattform-Domain
2. Weist se op Ären Hosting-Ubidder
3. Konfiguréiert Wildcard-DNS (`*.fitsite.com`) fir Client-Subdomains
4. Gitt sécher, datt Wildcard-SSL aktiv ass

Kuckt [Wéi een Domain Mapping konfiguréiert](/user-guide/domain-mapping/how-to-configure-domain-mapping) fir detailléiert Uweisungen.

## D'Admin-Erfarung als White-Label ubidden {#white-labeling-the-admin-experience}

Wann e Besëtzer vun engem Fitnessstudio sech an hire Site-Dashboard aloggt, soll hien Är Mark gesinn, net WordPress- oder Ultimate Multisite-Branding.

### Personaliséiert Login-Säit {#custom-login-page}

Passt d'WordPress-Login-Säit un, fir Folgendes ze weisen:

- Äre FitSite-Logo
- Fitness-passend Hannergrondbiller
- Är Markefaarwen

### Dashboard-Branding {#dashboard-branding}

Benotzt den [Admin Page Creator](/addons/admin-page-creator) Addon oder eegent CSS, fir:

- De WordPress-Logo duerch Äre FitSite-Logo ze ersetzen
- D'Admin-Faarfschema un Är Mark unzepassen
- E personaliséierten Dashboard-Widget mat fitness-spezifesche Schnelllinken an Hëllefsressourcen derbäizesetzen

### Personaliséiert Admin-Säiten {#custom-admin-pages}

Iwwerleet, personaliséiert Admin-Säiten ze erstellen, déi déi relevantst Aktioune fir Besëtzer vu Fitnessstudioen ervirhiewen:

- "Äre Courseplang änneren"
- "Trainer-Profiler aktualiséieren"
- "Är Site ukucken"

Dat reduzéiert d'Léierkurv, andeems niche-relevant Aktiounen an de Mëttelpunkt gesat ginn, amplaz se am Standard-WordPress-Menü ze verstoppen.

## Är Kommunikatiounen branden {#branding-your-communications}

All E-Mail, Rechnung an Notifikatioun soll Är Mark verstäerken.

### System-E-Mailen {#system-emails}

Navigéiert op **Ultimate Multisite > Settings > Emails** a passt all System-E-Mailen un:

- **Vun-Numm**: FitSite
- **Vun-E-Mail**: hello@fitsite.com
- **E-Mail-Schablounen**: Benotzt Är Markefaarwen an Äre Logo
- **Sprooch**: Duerchgängeg fitness-spezifesch

Wichteg E-Mailen, déi Dir upasse sollt:

| E-Mail | Generesch Versioun | FitSite-Versioun |
|-------|----------------|-----------------|
| Wëllkomm | "Är nei Site ass prett" | "Är Fitnessstudio-Websäit ass live" |
| Bezuelquittung | "Bezuelung empfaangen" | "FitSite-Abonnementsbezuelung confirméiert" |
| Testphas geet op en Enn | "Är Testphas geet geschwënn op en Enn" | "Är FitSite-Testphas endet an 3 Deeg -- haalt Är Studio-Websäit live" |

### Rechnungen {#invoices}

Passt Rechnungsschablounen un mat:

- Ärem FitSite-Logo an Äre Markefaarwen
- Äre Geschäftsdetailer
- Fitness-spezifesche Produktnimm (net generesch Plang-IDen)

## D'Client-orientéiert Site {#the-customer-facing-site}

Är Haaptdomain (`fitsite.com`) brauch eng Marketing-Site, déi d'Plattform verkeeft. Dëst ass getrennt vum Ultimate Multisite-Netzwierk-Admin -- et ass dat ëffentlecht Gesiicht vun Ärem Geschäft.

Wichteg Säiten:

- **Startsäit**: Kloer Wäertversprieche fir Fitness-Betriber
- **Funktiounen**: Wat FitSite mécht, a Fitness-Begrëffer
- **Präisser**: Är dräi Pläng mat niche-spezifesche Funktiounsvergläicher
- **Beispiller**: Siten weisen, déi op der Plattform gebaut goufen
- **Umellen**: Linken op Äre Bezuelformular

:::tip Your Marketing Site Can Be a Network Site
Create your marketing site as a site within your own network. This lets you manage it from the same dashboard and demonstrates your own platform's capabilities.
:::

## Eegen Domain fir Clienten {#custom-domain-for-customers}

Fir Clienten op Pläng, déi eegen Domains enthalen, dokumentéiert de Prozess kloer:

1. De Client registréiert oder transferéiert seng Domain bei e Registrar
2. De Client aktualiséiert DNS, fir op Är Plattform ze weisen (gitt exakt Records un)
3. Ultimate Multisite këmmert sech ëm d'Domain Mapping an SSL

Erstellt en Hëllefsartikel oder en Entrée an der Wëssensbasis speziell fir dëse Prozess, geschriwwe fir net-technesch Besëtzer vu Fitnessstudioen.

## De FitSite-Netzwierk bis elo {#the-fitsite-network-so-far}

```
FitSite Network
├── WordPress Multisite (subdomain mode)
├── Ultimate Multisite (configured + branded)
├── Platform Domain (fitsite.com + wildcard SSL)
├── Site Templates (Studio Essential, Gym Pro, Fitness Chain)
├── Products (Starter, Growth, Pro + Order Bumps)
├── Checkout Flow (niche-specific, tested)
├── Branding
│   ├── Custom login page
│   ├── Branded admin dashboard
│   ├── Niche-specific system emails
│   ├── Branded invoices
│   └── Marketing site on fitsite.com
└── Ready for onboarding flow (next lesson)
```

## Wat mir an dëser Lektioun gebaut hunn {#what-we-built-this-lesson}

- **Plattform-Domain an DNS** konfiguréiert fir eng markéiert Erfarung
- **White-Label-Admin** mat FitSite-Branding duerchgoend
- **Personaliséiert Kommunikatiounen** -- E-Mailen, Rechnungen an Notifikatiounen all markekonform
- **Eng Marketing-Site**, déi FitSite u Besëtzer vu Fitnessstudioe verkeeft
- **Dokumentatioun fir eegen Domains** fir Clienten, déi hir eege Domain wëllen

---

**Nächst:** [Lektioun 8: Client-Onboarding](lesson-8-onboarding) -- mir gestalten d'Erfarung, déi eng nei Umeldung an en aktiven, zefriddene Client verwandelt.
