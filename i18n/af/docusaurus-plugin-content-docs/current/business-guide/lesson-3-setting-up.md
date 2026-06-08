---
title: 'Les 3: Opstel van jou netwerk'
sidebar_position: 4
_i18n_hash: 4bffe2f3ba68d1a58bfc32d6b0a3c5c7
---
# Les 3: Opstel van jou Netwerk

Dit is tyd om te bou. In hierdie les gaan jy Ultimate Multisite installeer en die fondasie van die FitSite-netwerk konfigureer. Elke besluit hier word met die fitness-niche in gedagte geneem.

## Waar ons gehou het

Ons het fitness-studio's as ons niche gekies en die geleentheid gevalideer. Nou verander ons daardie idee in 'n werkende platform.

## Keuse van jou Hosting

Jou hostingkeuse is belangriker vir 'n niche-platform as vir 'n enkele webwerf. Jy host nie net een webwerf nie – jy host 'n netwerk wat sal groei tot dosينه of honderde webwerwe.

### Wat om te kyk vir

- **WordPress Multisite ondersteuning**: Nie almal hosts hanteer multisite goed nie
- **Wildcard SSL**: Essensieel vir subdomain-gebaseerde netwerke
- **Skalabele hulpbronne**: Jy het ruimte nodig om te groei sonder om te migreer
- **Ultimate Multisite integrasie**: Geïntegreerde domeinmappering en SSL spaar aansienlike operasionele moeite

### Aanbevole benadering

Kies 'n host van die [Compatible Providers](/user-guide/host-integrations/closte) lys. Hierdie is getoets met Ultimate Multisite en bied die integrasies wat jy nodig het vir domeinmappering en SSL-automatisering.

Vir FitSite sal ons 'n subdomain-konfigurasie gebruik. Dit beteken dat kliëntwebwerwe aanvanklik sal verskyn as `studienaam.fitsite.com` voordat hulle opsioneel hul eie domein koppel.

## Installeer WordPress Multisite

As jy nog nie 'n WordPress Multisite-installasie het nie:

1. Installeer WordPress by jou hosting-verskaffer
2. Volg die [How to Install WordPress Multisite](/user-guide/getting-started/how-to-install-wordpress-multisite) gids
3. Kies **subdomain** konfigurasie wanneer gevra word

:::tip Hoekom Subdomains?
Subdomains gee elke kliëntwebwerf sy eie unieke adres (`studio.fitsite.com`) eerder as 'n pad (`fitsite.com/studio`). Dit is professioneler vir jou kliënte en voorkom permalink-konflikte. Kyk na [Ultimate Multisite 101](/user-guide/getting-started/ultimate-multisite-101) vir 'n gedetailleerde vergelyking.
:::

## Installeer Ultimate Multisite

Volg die [Installing Ultimate Multisite](/user-guide/getting-started/installing-ultimate-multisite) gids om:

1. Die plugin op netwerkvlak te laai en te aktiveer
2. Die [Setup Wizard](/user-guide/getting-started/multisite-setup-wizard) te loop

Tydens die setup wizard, hou die FitSite-niche in gedagte:

- **Valuut**: Stel dit in op die valuut wat jou fitness-studio kliënte gebruik
- **Maatskappy naam**: "FitSite" (of jou gekose handelsnaam)
- **Maatskappy logo**: Laai jou handelsmerklogo op – dit verskyn op fakture en e-posse

## Konfigureer vir die Fitness-Niche

Met Ultimate Multisite geïnstalleer, maak asseblief hierdie niche-spesifieke konfigurasiekeuses:

### Algemene Instellings

Navigeer na **Ultimate Multisite > Settings** en konfigureer:

- **Site name**: FitSite
- **Default role**: Administrator – fitness-studio eienaars benodig volle beheer oor hul webwerfinhoud
- **Registration**: Aktiveer gebruikersregistrasie sodat studio eienaars hulself kan aanmeld

### E-pos Konfigurasie

Jou stelsel-e-posse moet die taal van jou niche praat. Navigeer na **Ultimate Multisite > Settings > Emails** en pas aan:

- Vervang generiese "your new site" taal met fitness-spesifieke boodskappe
- Voorbeeld welkomstonderwerp: "Jou fitness-studio webwerf is gereed"
- Voorbeeld welkomstliggaam: Verwys na hul studio, klasse, en hoe om met hul fitness-webwerf te begin

Ons sal hierdie verder verfyn in Les 8 (Kliënt Onboarding), maar die toon nou stel verseker selfs vroeë toetsaanmeldings niche-spesifiek voel.

### Domein Konfigurasie

As jy 'n bietkompatibele hosting-verskaffer gebruik, konfigureer domeinmappering nou:

1. Navigeer na **Ultimate Multisite > Settings > Domain Mapping**
2. Volg die integrasiegids vir jou spesifieke host
3. Toets dat nuwe subsites outomaties SSL kry

Dit verseker dat wanneer ons begin met die skep van templates en toetswebwerwe in die volgende les, alles van begin tot einde werk.

## Die FitSite Netwerk tot Nou

Aan die einde van hierdie les, is hier wat jy het:

```
FitSite Netwerk
├── WordPress Multisite (subdomain modus)
├── Ultimate Multisite (geïnstalleer en gekonfigureer)
├── Hosting met wildcard SSL
├── Domeinmappering gekonfigureer
├── Niche-spesifieke e-pos templates (aanvanklik)
└── Gereed vir webwerf templates (volgende les)
```

## Wat ons hierdie Les Gebou Het

- **'n Werkende WordPress Multisite**-installasie in subdomain-modus
- **Ultimate Multisite geïnstalleer** en gekonfigureer met FitSite-branding
- **Hosting en SSL** opgestel vir 'n groeiende netwerk
- **Domeinmappering** gekonfigureer vir jou hosting-verskaffer
- **Niche-spesifieke e-pos toon** vanaf dag een vasgestel

---

**Volgende:** [Les 4: Bou van Niche Templates](lesson-4-templates) – ons skep webwerf templates wat fitness-studio eienaars werklik sal wil gebruik.
