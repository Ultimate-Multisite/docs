---
title: Multisite Setup Wizard
sidebar_position: 3
_i18n_hash: fd09dc94f24b0b37245b847380feea3f
---
# Multisite Setup Wizard

Ultimate Multisite bevat een ingebouwde wizard die een standaard WordPress-installatie automatisch omzet in een WordPress Multisite-netwerk. Dit elimineert de noodzaak om handmatig `wp-config.php` te bewerken of databasecommando's uit te voeren.

:::tip
Als je WordPress-installatie al draait als een Multisite-netwerk, kun je deze stap volledig overslaan. De wizard verschijnt alleen als Multisite nog niet is ingeschakeld.
:::

## Wanneer verschijnt de wizard?

Wanneer je Ultimate Multisite activeert op een standaard (niet-Multisite) WordPress-installatie, detecteert de plugin dat Multisite niet is ingeschakeld en leidt je automatisch naar de Multisite Setup Wizard in plaats van naar de reguliere setup wizard.

Je kunt het ook rechtstreeks openen via **WP Admin > Ultimate Multisite > Multisite Setup**.

## Voorwaarden

Voordat je de wizard uitvoert, zorg ervoor dat:

- Je hebt **administrator toegang** tot je WordPress-installatie
- Het `wp-config.php`-bestand van je server is **schrijfbaar** voor de webserver
- Je hebt een **recente back-up** van je bestanden en database

:::warning
De wizard wijzigt je `wp-config.php`-bestand en maakt nieuwe databanktabellen aan. Maak altijd een back-up voordat je verdergaat.
:::

## Stap 1: Welkom

Het eerste scherm legt uit wat WordPress Multisite is en wat de wizard zal doen:

- Schakel de Multisite-functie in je WordPress-configuratie in
- Maak de noodzakelijke netwerkdatabanktabellen aan
- Voeg de vereiste multisite-constanten toe aan `wp-config.php`
- Activeer Ultimate Multisite netwerkbreed

![Multisite Setup Wizard - Welkomststap](/img/installation/multisite-wizard/wizard-welcome.png)

Klik op **Doorgaan** om door te gaan.

## Stap 2: Netwerkconfiguratie

Deze stap vraagt je om je netwerkinstellingen te configureren.

### Site-structuur

Kies hoe je netwerk sites georganiseerd zullen worden:

- **Subdomeinen** (Aanbevolen) — Sites krijgen hun eigen subdomein, bijv. `site1.jouwdomein.com`
- **Subdirectories** — Sites worden aangemaakt als paden, bijv. `jouwdomein.com/site1`

:::note
Als je subdomeinen kiest, moet je **wildcard DNS** en een **wildcard SSL-certificaat** voor je domein configureren. De meeste beheerde WordPress-hosts doen dit automatisch. Zie [Ultimate Multisite 101](./ultimate-multisite-101) voor een gedetailleerde vergelijking.
:::

### Netwerk Titel

Voer een naam in voor je netwerk. Standaard is dit de huidige sitetitel met 'Network' toegevoegd. Je kunt dit later wijzigen via de netwerkinstellingen.

### Netwerkbeheerder E-mailadres

Het e-mailadres dat wordt gebruikt voor netwerkbeheer notificaties. Standaard is dit het e-mailadres van de huidige gebruiker.

![Multisite Setup Wizard - Netwerkconfiguratie](/img/installation/multisite-wizard/wizard-network-configuration.png)

Na het invullen van de velden, klik op **Doorgaan** om door te gaan.

## Stap 3: Installatie

Klik op de knop **Install** om te beginnen. De wizard voert vijf geautomatiseerde stappen achter elkaar uit, waarbij elke stap zijn voortgang in realtime toont:

![Multisite Setup Wizard - Installatie in behandeling](/img/installation/multisite-wizard/wizard-installation-pending.png)

| Stap | Beschrijving |
|------|-------------|
| **Multisite inschakelen** | Voegt de constante `WP_ALLOW_MULTISITE` toe aan `wp-config.php` |
| **Netwerk aanmaken** | Maakt de multisite databanktabellen aan (`wp_site`, `wp_sitemeta`, `wp_blogs`, etc.) en vult ze met je netwerkconfiguratie |
| **Configuratie bijwerken** | Voegt de definitieve multisite-constanten toe aan `wp-config.php` (`MULTISITE`, `SUBDOMAIN_INSTALL`, `DOMAIN_CURRENT_SITE`, etc.) |
| **Cookies repareren** | Zorgt ervoor dat de site-URL correct is in de netwerkmetadata om authenticatieproblemen na activatie te voorkomen |
| **Plugin netwerkactiveren** | Activeert Ultimate Multisite netwerkbreed zodat het op het hele netwerk draait |

Elke stap toont een van deze statussen:

- **In afwachting** — Wachtend op verwerking
- **Installeren...** — Word momenteel uitgevoerd
- **Succes!** — Succesvol voltooid
- **Foutbericht** — Er is een fout opgetreden (de boodschap zal het probleem beschrijven)

Zodra alle stappen succesvol zijn voltooid, zie je een groene status 'Succes!' voor elk item:

![Multisite Setup Wizard - Installatie voltooid](/img/installation/multisite-wizard/wizard-installation-complete.png)

De wizard gaat vervolgens automatisch naar het voltooide scherm.

## Stap 4: Voltooid

Zodra de installatie voltooid is, zie je een succesbericht dat bevestigt dat WordPress Multisite is ingeschakeld.

![Multisite Setup Wizard - Setup Voltooid](/img/installation/multisite-wizard/wizard-complete.png)

Je kunt nu doorgaan met de Ultimate Multisite setup wizard om je WaaS-platform te configureren (bedrijfsgegevens, standaardinhoud, betalingsgateways, enz.).

:::note
Na het voltooien van de multisite-installatie wordt je browser doorgestuurd via de nieuw ingeschakelde netwerkbeheerder. Mogelijk moet je opnieuw inloggen, omdat de authenticatiecookies zijn bijgewerkt voor de multisite-omgeving.
:::

## Handmatige Setup Terugval

Als de wizard niet kan schrijven naar je `wp-config.php`-bestand (door bestandspermissies of serverbeperkingen), toont hij de exacte code die je handmatig moet toevoegen:

1. De **wp-config.php constants** die boven de regel `/* That's all, stop editing! */` moeten worden toegevoegd
2. De **.htaccess rewrite rules** die geschikt zijn voor je gekozen site-structuur (subdomein of subdirectory)

Na het aanbrengen van de handmatige wijzigingen, vernieuw je de pagina en detecteert de wizard dat multisite nu actief is.

## Probleemoplossing

### De wizard geeft aan dat wp-config.php niet schrijfbaar is

Het webserverproces heeft schrijfrechten nodig voor het `wp-config.php`-bestand. Je kunt:

- Tijdelijk de bestandspermissies wijzigen naar `644` of `666`
- Gebruik de handmatige setup terugval-instructies die door de wizard worden verstrekt
- Vraag hulp aan je hostingprovider

### Sites zijn niet toegankelijk na de installatie (subdomeinen)

Als je de subdomeinstructuur hebt gekozen, moet je **wildcard DNS** voor je domein configureren. Voeg een DNS-record toe:

```
Type: A (or CNAME)
Host: *
Value: [your server IP]
```

Controleer bij je hostingprovider als je niet zeker weet hoe je dit moet configureren.

### Authenticatieproblemen na de installatie

Als je bent uitgelogd of cookiefouten ervaart na de multisite-installatie:

1. Wis de browsercookies voor de site
2. Log opnieuw in op `yourdomain.com/wp-login.php`
3. Als het probleem aanhoudt, controleer dan of je `wp-config.php` niet `COOKIE_DOMAIN` op `false` heeft ingesteld — dit is een bekend probleem bij subdomein multisite-installaties

### Een stap faalde tijdens de installatie

Als een van de installatie stappen een fout toont:

1. Noteer het weergegeven foutbericht
2. Ga terug naar de configuratiestap en probeer het opnieuw
3. Als de fout aanhoudt, controleer dan het PHP-foutlogboek van je server voor meer details
4. Stappen die al zijn voltooid, worden overgeslagen bij volgende runs (de installer is idempotent)
