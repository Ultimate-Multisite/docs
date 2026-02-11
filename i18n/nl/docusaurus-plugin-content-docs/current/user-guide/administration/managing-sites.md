---
title: Sites beheren
sidebar_position: 14
_i18n_hash: 520a6eed862c756f0475de6f264632c6
---
# Beheren van Sites

Sites (of subsites) zijn de kern van uw WaaS-bedrijf. Ultimate Multisite heeft 3 soorten sites:

- **Customer-owned** — Sites die behoren tot specifieke klanten
- **Site Templates** — Vooraf gedefinieerde sites die klanten kunnen selecteren als startpunt
- **Main Site** — Uw primaire netwerk site

## Sites bekijken

Navigeer naar **Ultimate Multisite → Sites** om alle subsites in uw netwerk te bekijken. Elke site is gelabeld op type en u kunt filteren op All Sites, Customer-Owned, Templates, of Pending.

![Site lijst pagina](/img/admin/sites-list.png)

## Een nieuwe site toevoegen

Klik op de **Add Site** knop om een nieuwe site te maken. U moet het volgende opgeven:

- **Site Title** — De naam van de nieuwe site
- **Site URL** — Het domein/pad voor de site
- **Site Type** — Of het een klantsite, template of reguliere site is

De optie **Copy Site** laat u een nieuwe site maken op basis van een bestaande site template. Wanneer ingeschakeld, kunt u kiezen welke template als startpunt gebruikt moet worden. Zorg ervoor dat **Copy Media on Duplication** is ingeschakeld om mediabestanden op te nemen.

## Een bestaande site beheren

Klik op **Manage** op elke site om de **Edit Site** pagina te openen. Hier vindt u:

### Basisinformatie

De site naam, type, site ID en beschrijving. U ziet ook het gemapte domein, de bijbehorende membership en het klantaccount dat de site bezit.

### Siteopties

Configureer de mogelijkheden en limieten van de site:

- **Visit limits** — Maximale aantal sitebezoeken
- **User account limits** — Limieten per gebruikersrol
- **Disk space** — Opslagquota voor de site
- **Custom domain** — Schakel domeinmapping voor deze site in
- **Plugin and theme visibility** — Controleer welke plugins en thema's zichtbaar, verborgen of vooraf geactiveerd zijn

Standaard volgen sites de limieten die op het membershipniveau zijn ingesteld. Het instellen van limieten op het site niveau overschrijft de membershipinstellingen.

### Associaties

Onder de siteopties vindt u informatie over:

- **Mapped domains** die aan de site zijn gekoppeld
- **Membership** onder welke de site valt
- **Customer account** gekoppeld aan de site

### Rechterzijbalk

Aan de rechterkant kunt u:

- **Enable/disable the site** met een schakelknop
- **Change the site type** of herverdeling van eigendom
- **Set a site image/thumbnail** (weergegeven op de frontend voor site templates)
- **Delete the site** permanent

:::warning
Het verwijderen van een site is onomkeerbaar. De site en al zijn inhoud worden permanent verwijderd.
:::
