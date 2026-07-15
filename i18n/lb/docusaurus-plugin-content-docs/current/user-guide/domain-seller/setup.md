---
title: Usetzungs- und Anbieterkonfiguratioun
sidebar_position: 1
_i18n_hash: 854fd649457edceefde0eb8246446ebe
---
# Domain Seller: Irichtigsetze und Providerkonfigurierig

De Domain Seller Addon schickt mit eme geführte Setup-Wizard, wo Sie Schritt für Schritt dur all die nötige Schritte führt. Dësi Seite deckt de Wizard-Fluss ab und wie Sie d'Provider anschriit oder neu konfigurierä chönne.

## Aaforderige {#requirements}

- **Multisite Ultimate** v2.4.12 oder höcher, netzwerkaktiviert
- **PHP** 7.4+
- API-Credentials für mindestens e Registrierungsanbieter

## Ersti Lauf Setup Wizard {#first-run-setup-wizard}

De Setup Wizard startet automatisch de erscht Mal, wenn Sie d'Plugin netzwerkaktivierä. Er isch au jederzeit über **Network Admin › Ultimate Multisite › Domain Seller Setup** verfügbar.

### Schritt 1 — Wähle en Provider {#step-1--choose-a-provider}

Wähle de Registrar us, wo Sie verbinde wend. Unterstützte Optionne:

| Provider | DNS-Verwaltig | WHOIS-Privatsphäre |
|---|---|---|
| OpenSRS | Ja | Ja |
| Namecheap | Nein | Ja (WhoisGuard, gratis) |
| HostAfrica | Ja | Ja (ID-Schutz) |
| Openprovider | Ja | Ja |
| Hostinger | Über d'Core Hostinger Domain Mapping für gehosteti Domains | Ja |
| GoDaddy | Nein | Nein |
| ResellerClub | Ja | Nein |
| NameSilo | Nein | Nein |
| Enom | Ja | Nein |

### Schritt 2 — Credentials iigäh {#step-2--enter-credentials}

Jeder Provider het verschiedeni Feld für d'Credentials:

**OpenSRS** — Benutzername und private Schlüssel (vom OpenSRS Reseller Control Panel)

**Namecheap** — Benutzername und API-Schlüssel (vom Account › Tools › API Access)

**HostAfrica** — Domains Reseller API-Endpunkt und Credentials vom HostAfrica Reseller Modul. Es git aktuell kei separate Sandbox-Endpunkt dokumentiert; teste Sie mit sichere Lese-Nur-Prüfungen, bevor Sie Live-Registrierige durchfüehre.

**Openprovider** — Benutzername und Passwort mit API-Zugriff aktiviert. De optional Sandbox-Modus brucht d'Openprovider Sandbox API, und en optional Standard-Kundenhandle chann für Registrierige wiederverwendet werde.

**Hostinger** — De API token vum Hostinger hPanel, wo us de Kern-Hostinger-Integration chunnt. Dë gliich Token bedriicht d'Kern-Domain Mapping und d'Operationen fir Domain Seller Registrierungs.

**GoDaddy** — API key und secret (us developer.godaddy.com)

**ResellerClub** — Reseller ID und API key (us ResellerClub control panel)

**NameSilo** — API key (us namesilo.com › Account › API Manager)

**Enom** — Account ID und API token

Überprüche de **Sandbox mode**, wo verfügbar, um d'Verbindig gege de Testumfeld vom Provider z'teste, bevor du live gaasch.

### Schritt 3 — D'Verbindig teste {#step-3--test-the-connection}

Klick uf **Test Connection**. De Wizard schickt en leichte API-Call, um d'Credentials und d'Verbindig z'überprüefe. Korrigier alli Problem mit de Credentials, bevor du wiitergaasch.

### Schritt 4 — TLDs importiere {#step-4--import-tlds}

Klick uf **Import TLDs**, um alli verfügbare TLDs und de Großhandelspreise vum verbunde Provider z'zieh. Das füllt d'TLD-Liste us, wo fir Domain-Produkte brucht wird. D'Import chan 30–60 Sekunde dure, wenn de Provider en grosse TLD-Katalog het.

TLDs wëssen au automatisch allan eimal am Tag wider synched dur en geplante cron job.

### Schritt 5 — En Domain-Produkt erstellen {#step-5--create-a-domain-product}

De Wizard erstellt en Standard-Catch-all Domain-Produkt mit en 10% Markup. Du chann das Produkt sofort bearbeite oder überspringe und manuell Produkte unter **Ultimate Multisite › Products** erstellen.

Lies [Domain Products and Pricing](./domain-products) fir de vollständigi Konfigurationsguide vun de Produkte.

---

## En Provider neu konfiguréieren {#reconfiguring-a-provider}

Gang zu **Network Admin › Ultimate Multisite › Settings › Domain Seller** (oder klick uf **Settings** i de Plugin-Liste).

D'Einstellungen-Seite enthält:

- **Domain verchaufe aktivieren** — schalte die ganz Funktion ein oder aus
- **Standardanbieter** — der Anbieter, den du für Domain-Suchen und neue Produkte verwendest
- **Max TLDs pro Suche** — wie viele Top-Level-Domains (TLDs) überprüft werden sollen, wenn ein Kunde sucht; höhere Werte zeigen mehr Optionen an, sind aber langsamer
- **Verfügbarkeits-Cache-Dauer** — wie lange die Verfügbarkeits- und Preisdaten gecacht werden sollen; niedrigere Werte sind genauer, erhöhen aber die API-Aufrufe
- **Domainprodukte verwalten** — schneller Link zur Produkte-Liste
- **Anbieter konfigurieren** — öffnet den Integration Wizard, um Anbieter hinzuzufügen oder neu einzurichten

### Einen zweiten Anbieter hinzufügen {#adding-a-second-provider}

Klick auf **Anbieter konfigurieren** und führe den Wizard erneut für den neuen Registrar aus. Du kannst mehrere Anbieter gleichzeitig konfigurieren. Weise jedes Domainprodukt einem bestimmten Anbieter zu oder lass es auf dem Standardanbieter bleiben.

### TLDs manuell synchronisieren {#syncing-tlds-manually}

In der Einstellungen klickst du neben jedem konfigurierten Anbieter auf **TLDs synchronisieren**, um die neuesten Preise abzurufen. Das ist nützlich, nachdem ein Anbieter die Großhandelspreise aktualisiert oder neue TLDs hinzugefügt hat.

---

## Logs {#logs}

Jeder Anbieter schreibt seine Daten in seinen eigenen Log-Kanal. Die Logs kannst du unter **Network Admin › Ultimate Multisite › Logs** anzeigen lassen:

| Log channel | Inhoud |
|---|---|
| `domain-seller-registration` | All registratieversuivingen (succes en mislukking) |
| `domain-seller-renewal` | Resultaten van de vernieuwingsjob |
| `domain-seller-opensrs` | Ruwe OpenSRS API activiteit |
| `domain-seller-namecheap` | Ruwe Namecheap API activiteit |
| `domain-seller-hostafrica` | Ruwe HostAfrica API activiteit |
| `domain-seller-openprovider` | Ruwe Openprovider API activiteit |
| `domain-seller-hostinger` | Ruwe Hostinger API activiteit |
| `domain-seller-godaddy` | Ruwe GoDaddy API activiteit |
| `domain-seller-resellerclub` | Ruwe ResellerClub API activiteit |
| `domain-seller-namesilo` | Ruwe NameSilo API activiteit |
| `domain-seller-enom` | Ruwe Enom API activiteit |

---

## Provider vermogensnotizen {#provider-capability-notes}

Niet elke registrar API biedt dezelfde operaties aan. De addon toont niet-ondersteunde operaties met duidelijke foutmeldingen voor de admin, in plaats van dat het stil faalt.

- **HostAfrica** ondersteunt de breedste live reseller workflow, inclusief lookup, TLD/prijs synchronisatie, registratie, vernieuwing, overdracht, nameserver updates, DNS records, EPP codes, registrar lock en ID protection.
- **Openprovider** ondersteunt reseller-prijzen voor TLD sync, registratie, vernieuwing, overdrachten, nameserver updates, DNS zones, EPP codes, registrar lock en WHOIS privacy. Het authenticatie met een kortlopende bearer token dat de addon automatisch ververst.
- **Hostinger** ondersteunt beschikbaarheidszoekopdrachten, registratie, portfolio lookup, nameserver updates, registrar lock en WHOIS privacy via de gedeelde hPanel API token. De publieke Domains API van Hostinger toont geen reseller/wholesale prijzen, inkomende overdrachten, expliciete vernieuwing of EPP-code ophalen; vernieuwing is alleen automatisch vernieuwd.
