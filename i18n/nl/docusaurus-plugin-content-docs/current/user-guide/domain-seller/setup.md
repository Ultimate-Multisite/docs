---
title: Setup en Providerconfiguratie
sidebar_position: 1
_i18n_hash: 2a9c0d63fc6ee6bad011c099707fb3f3
---
# Domain Seller: Instellen en Providerconfiguratie

De Domain Seller addon wordt geleverd met een begeleide setup wizard die u stap voor stap door elke vereiste stap leidt. Deze pagina behandelt de flow van de wizard en hoe u providers later kunt configureren of opnieuw kunt configureren.

## Vereisten

- **Multisite Ultimate** v2.4.12 of hoger, geactiveerd op het netwerk
- **PHP** 7.4+
- API-gegevens voor minstens één ondersteunde registrar

## Setup wizard bij de eerste keer gebruik

De setup wizard start automatisch de eerste keer dat u de plugin op het netwerk activeert. U kunt deze ook op elk moment vinden via **Network Admin › Ultimate Multisite › Domain Seller Setup**.

### Stap 1 — Kies een provider

Selecteer de registrar die u wilt verbinden. Ondersteunde opties:

| Provider | DNS management | WHOIS privacy |
|---|---|---|
| OpenSRS | Ja | Ja |
| Namecheap | Nee | Ja (WhoisGuard, gratis) |
| GoDaddy | Nee | Nee |
| ResellerClub | Ja | Nee |
| NameSilo | Nee | Nee |
| Enom | Ja | Nee |

### Stap 2 — Voer gegevens in

Elke provider heeft verschillende velden voor gegevens:

**OpenSRS** — Gebruikersnaam en private key (uit het OpenSRS Reseller Control Panel)

**Namecheap** — Gebruikersnaam en API key (van Account › Tools › API Access)

**GoDaddy** — API key en secret (van developer.godaddy.com)

**ResellerClub** — Reseller ID en API key (van het ResellerClub control panel)

**NameSilo** — API key (van namesilo.com › Account › API Manager)

**Enom** — Account ID en API token

Controleer **Sandbox mode** waar beschikbaar om te testen tegen de testomgeving van de provider voordat u live gaat.

### Stap 3 — Test de verbinding

Klik op **Test Connection**. De wizard stuurt een lichte API-aanroep om de gegevens en de connectiviteit te verifiëren. Los eventuele problemen met de gegevens op voordat u verdergaat.

### Stap 4 — Import TLDs

Klik op **Import TLDs** om alle beschikbare TLD's en groothandelsprijzen van de verbonden provider op te halen. Dit vult de TLD-lijst in die wordt gebruikt door domeinproducten. De import kan 30–60 seconden duren voor providers met grote TLD-catalogi.

TLD's worden ook automatisch gesynchroniseerd, één keer per dag, via een gepland cron job.

### Stap 5 — Maak een domeinproduct aan

De wizard maakt standaard een 'catch-all' domeinproduct aan met een opslagverhoging van 10%. U kunt dit product direct bewerken of overslaan en producten handmatig aanmaken onder **Ultimate Multisite › Products**.

Zie [Domain Products and Pricing](./domain-products) voor de volledige handleiding voor productconfiguratie.

---

## Een provider opnieuw configureren

Ga naar **Network Admin › Ultimate Multisite › Settings › Domain Seller** (of klik op **Settings** in de pluginlijst).

De instellingenpagina bevat:

- **Enable domain selling** — schakelt de hele functie in/uit
- **Default provider** — de provider die wordt gebruikt voor domeinsurchanten en nieuwe producten
- **Max TLDs per search** — hoeveel TLD's worden gecontroleerd wanneer een klant zoekt; hogere waarden tonen meer opties, maar zijn langzamer
- **Availability cache duration** — hoe lang de beschikbaarheids- en prijsresultaten worden opgeslagen; lagere waarden zijn nauwkeuriger, maar verhogen de API-aanroepen
- **Manage domain products** — snelle link naar de Productenlijst
- **Configure providers** — opent de Integration Wizard om providers toe te voegen of opnieuw te configureren

### Een tweede provider toevoegen

Klik op **Configure providers** en voer de wizard opnieuw uit voor de nieuwe registrar. U kunt meerdere providers tegelijkertijd configureren. Wijs elk domeinproduct toe aan een specifieke provider, of laat het op de standaardinstelling.

### TLD's handmatig synchroniseren

Klik op de knop **Sync TLDs** naast een geconfigureerde provider op de instellingenpagina om de nieuwste prijzen op te halen. Dit is handig nadat een provider de groothandelsprijzen heeft bijgewerkt of nieuwe TLD's heeft toegevoegd.

---

## Logs

Elke provider schrijft naar zijn eigen logkanaal. De logs zijn te bekijken onder **Network Admin › Ultimate Multisite › Logs**:

| Log channel | Contents |
|---|---|
| `domain-seller-registration` | Alle registratiepogingen (succes en falen) |
| `domain-seller-renewal` | Resultaten van de verlengingsjob |
| `domain-seller-opensrs` | Ruwe OpenSRS API-activiteit |
| `domain-seller-namecheap` | Ruwe Namecheap API-activiteit |
| `domain-seller-godaddy` | Ruwe GoDaddy API-activiteit |
| `domain-seller-resellerclub` | Ruwe ResellerClub API-activiteit |
| `domain-seller-namesilo` | Ruwe NameSilo API-activiteit |
| `domain-seller-enom` | Ruwe Enom API-activiteit |
