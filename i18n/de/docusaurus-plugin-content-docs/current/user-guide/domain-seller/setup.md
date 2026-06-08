---
title: Einrichtung und Anbieterkonfiguration
sidebar_position: 1
_i18n_hash: 2a9c0d63fc6ee6bad011c099707fb3f3
---
# Domain Seller: Einrichtung und Provider-Konfiguration

Das Domain Seller Addon wird mit einem geführten Einrichtung-Assistenten geliefert, der Sie durch jeden erforderlichen Schritt führt. Auf dieser Seite erfahren Sie mehr über den Ablauf des Assistenten und wie Sie die Provider danach konfigurieren oder neu konfigurieren.

## Voraussetzungen

- **Multisite Ultimate** v2.4.12 oder höher, auf Netzwerkebene aktiviert
- **PHP** 7.4+
- API-Anmeldeinformationen für mindestens einen unterstützten Registrar

## Einrichtung-Assistent beim ersten Start

Der Einrichtung-Assistent startet automatisch das erste Mal, wenn Sie das Plugin auf Netzwerkebene aktivieren. Sie können ihn jederzeit unter **Network Admin › Ultimate Multisite › Domain Seller Setup** aufrufen.

### Schritt 1 — Provider auswählen

Wählen Sie den Registrar, den Sie verbinden möchten. Unterstützte Optionen:

| Provider | DNS-Verwaltung | WHOIS-Datenschutz |
|---|---|---|
| OpenSRS | Ja | Ja |
| Namecheap | Nein | Ja (WhoisGuard, kostenlos) |
| GoDaddy | Nein | Nein |
| ResellerClub | Ja | Nein |
| NameSilo | Nein | Nein |
| Enom | Ja | Nein |

### Schritt 2 — Anmeldeinformationen eingeben

Jeder Provider hat unterschiedliche Felder für die Anmeldeinformationen:

**OpenSRS** — Benutzername und privater Schlüssel (aus dem OpenSRS Reseller Control Panel)

**Namecheap** — Benutzername und API-Schlüssel (unter Account › Tools › API Access)

**GoDaddy** — API-Schlüssel und Secret (von developer.godaddy.com)

**ResellerClub** — Reseller ID und API-Schlüssel (aus dem ResellerClub Control Panel)

**NameSilo** — API-Schlüssel (von namesilo.com › Account › API Manager)

**Enom** — Account ID und API-Token

Überprüfen Sie, falls verfügbar, den **Sandbox mode**, um vor dem Live-Betrieb gegen die Testumgebung des Providers zu testen.

### Schritt 3 — Verbindung testen

Klicken Sie auf **Test Connection**. Der Assistent sendet einen leichten API-Aufruf, um die Anmeldeinformationen und die Konnektivität zu überprüfen. Beheben Sie alle Probleme mit den Anmeldeinformationen, bevor Sie fortfahren.

### Schritt 4 — TLDs importieren

Klicken Sie auf **Import TLDs**, um alle verfügbaren TLDs und den Großhandelspreis vom verbundenen Provider abzurufen. Dadurch wird die TLD-Liste gefüllt, die von den Domain-Produkten verwendet wird. Der Import kann für Provider mit großen TLD-Katalogen 30–60 Sekunden dauern.

TLDs werden außerdem einmal täglich automatisch über einen geplanten Cron-Job resynchronisiert.

### Schritt 5 — Ein Domain-Produkt erstellen

Der Assistent erstellt ein voreingestelltes „Catch-all“-Domain-Produkt mit einem Aufschlag von 10 %. Sie können dieses Produkt sofort bearbeiten oder den Schritt überspringen und die Produkte manuell unter **Ultimate Multisite › Products** erstellen.

Weitere Informationen zur vollständigen Produktkonfiguration finden Sie in [Domain Products and Pricing](./domain-products).

---

## Einen Provider neu konfigurieren

Gehen Sie zu **Network Admin › Ultimate Multisite › Settings › Domain Seller** (oder klicken Sie in der Plugin-Liste auf **Settings**).

Auf der Einstellungsseite finden Sie:

- **Enable domain selling** — schaltet die gesamte Funktion ein/aus
- **Default provider** — der Provider, der für Domain-Suchen und neue Produkte verwendet wird
- **Max TLDs per search** — wie viele TLDs geprüft werden, wenn ein Kunde sucht; höhere Werte zeigen mehr Optionen, sind aber langsamer
- **Availability cache duration** — wie lange die Verfügbarkeits- und Preisdaten zwischengespeichert werden; niedrigere Werte sind genauer, erhöhen aber die API-Aufrufe
- **Manage domain products** — schneller Link zur Produktliste
- **Configure providers** — öffnet den Integration Wizard, um Provider hinzuzufügen oder neu zu konfigurieren

### Einen zweiten Provider hinzufügen

Klicken Sie auf **Configure providers** und führen Sie den Assistenten für den neuen Registrar erneut aus. Sie können mehrere Provider gleichzeitig konfiguriert haben. Weisen Sie jedes Domain-Produkt einem bestimmten Provider zu oder lassen Sie es auf dem Standard-Provider.

### TLDs manuell synchronisieren

Klicken Sie auf der Einstellungsseite neben einem konfigurierten Provider auf **Sync TLDs**, um die neuesten Preise abzurufen. Dies ist nützlich, nachdem ein Provider die Großhandelspreise aktualisiert oder neue TLDs hinzugefügt hat.

---

## Logs

Jeder Provider schreibt in seinen eigenen Log-Kanal. Die Logs sind unter **Network Admin › Ultimate Multisite › Logs** einsehbar:

| Log-Kanal | Inhalt |
|---|---|
| `domain-seller-registration` | Alle Registrierungsversuche (Erfolg und Misserfolg) |
| `domain-seller-renewal` | Ergebnisse der Verlängerungsjobs |
| `domain-seller-opensrs` | Rohdaten der OpenSRS API-Aktivität |
| `domain-seller-namecheap` | Rohdaten der Namecheap API-Aktivität |
| `domain-seller-godaddy` | Rohdaten der GoDaddy API-Aktivität |
| `domain-seller-resellerclub` | Rohdaten der ResellerClub API-Aktivität |
| `domain-seller-namesilo` | Rohdaten der NameSilo API-Aktivität |
| `domain-seller-enom` | Rohdaten der Enom API-Aktivität |
