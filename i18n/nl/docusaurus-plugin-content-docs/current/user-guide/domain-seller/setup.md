---
title: Installatie en providerconfiguratie
sidebar_position: 1
_i18n_hash: 854fd649457edceefde0eb8246446ebe
---
# Domain Seller: installatie en providerconfiguratie

De Domain Seller addon wordt geleverd met een begeleide installatiewizard die je door elke vereiste stap leidt. Deze pagina behandelt de wizard-flow en hoe je providers daarna configureert of opnieuw configureert.

## Vereisten

- **Multisite Ultimate** v2.4.12 of hoger, netwerk-geactiveerd
- **PHP** 7.4+
- API-inloggegevens voor ten minste één ondersteunde registrar

## Installatiewizard bij eerste gebruik

De installatiewizard start automatisch de eerste keer dat je de plugin netwerk-activeert. Deze is ook op elk moment beschikbaar via **Netwerkbeheer › Ultimate Multisite › Domain Seller Setup**.

### Stap 1 — Kies een provider

Selecteer de registrar waarmee je verbinding wilt maken. Ondersteunde opties:

| Provider | DNS-beheer | WHOIS-privacy |
|---|---|---|
| OpenSRS | Ja | Ja |
| Namecheap | Nee | Ja (WhoisGuard, gratis) |
| HostAfrica | Ja | Ja (ID-bescherming) |
| Openprovider | Ja | Ja |
| Hostinger | Via core Hostinger-domeintoewijzing voor gehoste domeinen | Ja |
| GoDaddy | Nee | Nee |
| ResellerClub | Ja | Nee |
| NameSilo | Nee | Nee |
| Enom | Ja | Nee |

### Stap 2 — Voer inloggegevens in

Elke provider heeft verschillende velden voor inloggegevens:

**OpenSRS** — Gebruikersnaam en privésleutel (uit het OpenSRS Reseller Control Panel)

**Namecheap** — Gebruikersnaam en API-sleutel (via Account › Tools › API Access)

**HostAfrica** — Domains Reseller API-endpoint en inloggegevens uit de HostAfrica-resellermodule. Er is momenteel geen apart sandbox-endpoint gedocumenteerd; test met veilige alleen-lezen-controles voordat je live registraties uitvoert.

**Openprovider** — Gebruikersnaam en wachtwoord met API-toegang ingeschakeld. Optionele sandboxmodus gebruikt de Openprovider sandbox-API, en een optionele standaardklant-handle kan opnieuw worden gebruikt voor registraties.

**Hostinger** — De gedeelde Hostinger hPanel API-token uit de core Hostinger-integratie. Dezelfde token ondersteunt core domeintoewijzing en Domain Seller-registratiebewerkingen.

**GoDaddy** — API-sleutel en geheim (via developer.godaddy.com)

**ResellerClub** — Reseller-ID en API-sleutel (uit het ResellerClub-controlepaneel)

**NameSilo** — API-sleutel (via namesilo.com › Account › API Manager)

**Enom** — Account-ID en API-token

Vink **Sandbox mode** aan waar beschikbaar om te testen met de testomgeving van de provider voordat je live gaat.

### Stap 3 — Test de verbinding

Klik op **Test Connection**. De wizard stuurt een lichte API-aanroep om inloggegevens en connectiviteit te verifiëren. Los eventuele problemen met inloggegevens op voordat je doorgaat.

### Stap 4 — Importeer TLD's

Klik op **Import TLDs** om alle beschikbare TLD's en groothandelsprijzen van de verbonden provider op te halen. Dit vult de TLD-lijst die door domeinproducten wordt gebruikt. De import kan 30–60 seconden duren voor providers met grote TLD-catalogi.

TLD's worden ook automatisch eenmaal per dag opnieuw gesynchroniseerd via een geplande cron-taak.

### Stap 5 — Maak een domeinproduct aan

De wizard maakt een standaard catch-all domeinproduct aan met een opslag van 10%. Je kunt dit product direct bewerken of overslaan en producten handmatig aanmaken onder **Ultimate Multisite › Products**.

Zie [Domeinproducten en prijzen](./domain-products) voor de volledige configuratiegids voor producten.

---

## Een provider opnieuw configureren

Ga naar **Netwerkbeheer › Ultimate Multisite › Settings › Domain Seller** (of klik op **Settings** in de pluginlijst).

De instellingenpagina bevat:

- **Domeinverkoop inschakelen** — schakel de volledige functie aan/uit
- **Standaardprovider** — de provider die wordt gebruikt voor domeinzoekopdrachten en nieuwe producten
- **Max. TLD's per zoekopdracht** — hoeveel TLD's moeten worden gecontroleerd wanneer een klant zoekt; hogere waarden tonen meer opties maar zijn trager
- **Duur van beschikbaarheidscache** — hoe lang beschikbaarheids- en prijsresultaten worden gecachet; lagere waarden zijn nauwkeuriger maar verhogen het aantal API-aanroepen
- **Domeinproducten beheren** — snelle link naar de Products-lijst
- **Providers configureren** — opent de Integration Wizard om providers toe te voegen of opnieuw te configureren

### Een tweede provider toevoegen

Klik op **Configure providers** en voer de wizard opnieuw uit voor de nieuwe registrar. Je kunt meerdere providers tegelijk geconfigureerd hebben. Wijs elk domeinproduct toe aan een specifieke provider, of laat het op de standaard staan.

### TLD's handmatig synchroniseren

Klik op de instellingenpagina op **Sync TLDs** naast een geconfigureerde provider om de nieuwste prijzen op te halen. Dit is nuttig nadat een provider groothandelsprijzen bijwerkt of nieuwe TLD's toevoegt.

---

## Logs

Elke provider schrijft naar zijn eigen logkanaal. Logs zijn te bekijken onder **Netwerkbeheer › Ultimate Multisite › Logs**:

| Logkanaal | Inhoud |
|---|---|
| `domain-seller-registration` | Alle registratiepogingen (succesvol en mislukt) |
| `domain-seller-renewal` | Resultaten van verlengingstaken |
| `domain-seller-opensrs` | Ruwe OpenSRS API-activiteit |
| `domain-seller-namecheap` | Ruwe Namecheap API-activiteit |
| `domain-seller-hostafrica` | Ruwe HostAfrica API-activiteit |
| `domain-seller-openprovider` | Ruwe Openprovider API-activiteit |
| `domain-seller-hostinger` | Ruwe Hostinger API-activiteit |
| `domain-seller-godaddy` | Ruwe GoDaddy API-activiteit |
| `domain-seller-resellerclub` | Ruwe ResellerClub API-activiteit |
| `domain-seller-namesilo` | Ruwe NameSilo API-activiteit |
| `domain-seller-enom` | Ruwe Enom API-activiteit |

---

## Opmerkingen over providermogelijkheden

Niet elke registrar-API biedt dezelfde bewerkingen. De addon toont niet-ondersteunde bewerkingen met duidelijke fouten voor beheerders in plaats van stil te falen.

- **HostAfrica** ondersteunt de breedste live reseller-workflow, waaronder lookup, TLD/pricing sync, registratie, verlenging, overdracht, nameserver-updates, DNS-records, EPP-codes, registrar lock en ID-bescherming.
- **Openprovider** ondersteunt TLD-sync met resellertarieven, registratie, verlenging, overdrachten, nameserver-updates, DNS-zones, EPP-codes, registrar lock en WHOIS privacy. Het authenticeert met een kortlevende bearer token die de addon automatisch vernieuwt.
- **Hostinger** ondersteunt beschikbaarheidszoekopdrachten, registratie, portfolio-lookup, nameserver-updates, registrar lock en WHOIS privacy via de gedeelde hPanel API token. Hostinger's openbare Domains API biedt geen reseller-/groothandelsprijzen, inkomende overdracht, expliciete verlenging of het ophalen van EPP-code; verlengingen verlopen uitsluitend via auto-renew.
