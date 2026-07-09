---
title: Bestuur van Wesites
sidebar_position: 14
_i18n_hash: 520a6eed862c756f0475de6f264632c6
---
# Bestuur van Webwerwe {#managing-sites}

Webwerwe (of subsites) is die kern van jou WaaS-besigheid. Ultimate Multisite het 3 tipe webwerwe:

- **Klant-geëdig** — Webwerwe wat aan spesifieke kliënte behoort
- **Webwerf-templates** — Vooraf gedefinieerde webwerwe wat kliënte as 'n beginpunt kan kies
- **Hoofwebwerf** — Jou primêre netwerkwebwerf

## Kyk na Webwerwe {#viewing-sites}

Navigeer na **Ultimate Multisite → Sites** om al die subsites in jou netwerk te sien. Elke webwerf word gemerk met die tipe, en jy kan filter op Alle Webwerwe, Klant-Geëdig, Templates, of Uitstaande.

![Sites list page](/img/admin/sites-list.png)

## Voeg 'n Nuwe Webwerf by {#adding-a-new-site}

Klik op die **Add Site**-knoppie om 'n nuwe webwerf te skep. Jy sal die volgende moet verskaf:

- **Webwerf Titel** — Die naam van die nuwe webwerf
- **Webwerf URL** — Die domein/pad vir die webwerf
- **Webwerf Tipe** — Of dit 'n kliëntwebwerf, template, of gewone webwerf is

Die **Copy Site**-opsie laat jou toe om 'n nuwe webwerf te skep op grond van 'n bestaande webwerf-template. Wanneer dit ingeskakel is, kan jy kies watter template as 'n beginpunt te gebruik. Maak seker dat **Copy Media on Duplication** ingeskakel is om mediabestelle in te sluit.

## Bestuur van 'n Bestaande Webwerf {#managing-an-existing-site}

Klik op **Manage** op enige webwerf om die **Edit Site**-bladsy oop te maak. Hier sal jy vind:

### Basiese Inligting {#basic-information}

Die webwerf se naam, tipe, webwerf-ID, en beskrywing. Jy sal ook die gemapte domein, verbonde lidmaatskap, en die klantrekening wat die webwerf besit, sien.

### Webwerfopsies {#site-options}

Konfigureer die webwerf se vermoëns en beperkings:

- **Bezoekbeperkings** — Maksimum aantal webwerfbesoeke
- **Gebruikersrekeningbeperkings** — Beperkings per gebruikersrol
- **Skiefruimte** — Bergingskvota vir die webwerf
- **Aangepaste domein** — Skakel domeinmapping vir hierdie webwerf in
- **Plugin- en tema-sigbaarheid** — Beheer watter plugins en temas sigbaar, verberg, of vooraf geaktiveer is

Standaard volg webwerwe die beperkings wat op die lidmaatskapvlak ingestel is. Die stel van beperkings op die webwerfnivels sal die lidmaatskapinstellings oorskry.

### Verbande {#associations}

Onder die webwerfopsies sal jy inligting vind oor:

- **Gemapte domeine** wat aan die webwerf gekoppel is
- **Lidmaatskap** waaronder die webwerf val
- **Klantrekening** wat aan die webwerf gekoppel is

### Regterkant Sidebar {#right-sidebar}

Aan die regterkant kan jy:

- **Die webwerf inskakel/uitskakel** met 'n omskakelaar-knoppie
- **Die webwerf tipe verander** of eienaarskap hertoewys
- **'n Webwerf-beeld/miniatuur** stel (wat op die frontend vir webwerf-templates vertoon word)
- **Die webwerf permanent verwyder**

:::warning
Die verwydering van 'n webwerf is onomkeerbaar. Die webwerf en al sy inhoud sal permanent verwyder word.
:::
