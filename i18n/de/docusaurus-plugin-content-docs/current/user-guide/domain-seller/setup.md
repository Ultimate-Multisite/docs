---
title: Einrichtung und Anbieter-Konfiguration
sidebar_position: 1
_i18n_hash: 854fd649457edceefde0eb8246446ebe
---
# Domain Seller: Einrichtung und Provider-Konfiguration {#domain-seller-setup-and-provider-configuration}

Das Domain Seller Addon wird mit einem geführten Einrichtungsassistenten ausgeliefert, der dich durch jeden erforderlichen Schritt führt. Diese Seite behandelt den Ablauf des Assistenten und wie du Provider anschließend konfigurierst oder neu konfigurierst.

## Anforderungen {#requirements}

- **Multisite Ultimate** v2.4.12 oder höher, netzwerkaktiviert
- **PHP** 7.4+
- API-Zugangsdaten für mindestens einen unterstützten Registrar

## Einrichtungsassistent beim ersten Start {#first-run-setup-wizard}

Der Einrichtungsassistent startet automatisch, wenn du das plugin zum ersten Mal netzwerkaktivierst. Er ist außerdem jederzeit unter **Network Admin › Ultimate Multisite › Domain Seller Setup** verfügbar.

### Schritt 1 — Einen Provider auswählen {#step-1--choose-a-provider}

Wähle den Registrar aus, den du verbinden möchtest. Unterstützte Optionen:

| Provider | DNS-Verwaltung | WHOIS-Datenschutz |
|---|---|---|
| OpenSRS | Ja | Ja |
| Namecheap | Nein | Ja (WhoisGuard, kostenlos) |
| HostAfrica | Ja | Ja (ID-Schutz) |
| Openprovider | Ja | Ja |
| Hostinger | Über das zentrale Hostinger-Domain-Mapping für gehostete Domains | Ja |
| GoDaddy | Nein | Nein |
| ResellerClub | Ja | Nein |
| NameSilo | Nein | Nein |
| Enom | Ja | Nein |

### Schritt 2 — Zugangsdaten eingeben {#step-2--enter-credentials}

Jeder Provider hat unterschiedliche Felder für Zugangsdaten:

**OpenSRS** — Benutzername und privater Schlüssel (aus dem OpenSRS Reseller Control Panel)

**Namecheap** — Benutzername und API-Schlüssel (aus Account › Tools › API Access)

**HostAfrica** — Domains Reseller API endpoint und Zugangsdaten aus dem HostAfrica Reseller-Modul. Derzeit ist kein separater Sandbox endpoint dokumentiert; teste mit sicheren schreibgeschützten Prüfungen, bevor du Live-Registrierungen ausführst.

**Openprovider** — Benutzername und Passwort mit aktiviertem API-Zugriff. Der optionale Sandbox-Modus verwendet die Openprovider Sandbox-API, und ein optionaler Standard-Kundenhandle kann für Registrierungen wiederverwendet werden.

**Hostinger** — Das gemeinsame Hostinger hPanel API-Token aus der zentralen Hostinger-Integration. Dasselbe Token betreibt das zentrale Domain-Mapping und die Registrierungsvorgänge von Domain Seller.

**GoDaddy** — API-Schlüssel und Secret (von developer.godaddy.com)

**ResellerClub** — Reseller-ID und API-Schlüssel (aus dem ResellerClub Control Panel)

**NameSilo** — API-Schlüssel (von namesilo.com › Account › API Manager)

**Enom** — Account-ID und API-Token

Aktiviere **Sandbox mode**, sofern verfügbar, um gegen die Testumgebung des Providers zu testen, bevor du live gehst.

### Schritt 3 — Verbindung testen {#step-3--test-the-connection}

Klicke auf **Verbindung testen**. Der Assistent sendet einen schlanken API-Aufruf, um Zugangsdaten und Konnektivität zu verifizieren. Behebe alle Probleme mit den Zugangsdaten, bevor du fortfährst.

### Schritt 4 — TLDs importieren {#step-4--import-tlds}

Klicke auf **TLDs importieren**, um alle verfügbaren TLDs und Großhandelspreise vom verbundenen Provider abzurufen. Dadurch wird die TLD-Liste befüllt, die von Domain-Produkten verwendet wird. Der Import kann bei Providern mit großen TLD-Katalogen 30–60 Sekunden dauern.

TLDs werden außerdem automatisch einmal pro Tag über einen geplanten Cron-Job neu synchronisiert.

### Schritt 5 — Ein Domain-Produkt erstellen {#step-5--create-a-domain-product}

Der Assistent erstellt ein standardmäßiges Catch-all-Domain-Produkt mit einem Aufschlag von 10 %. Du kannst dieses Produkt sofort bearbeiten oder überspringen und Produkte manuell unter **Ultimate Multisite › Produkte** erstellen.

Siehe [Domain-Produkte und Preise](./domain-products) für den vollständigen Leitfaden zur Produktkonfiguration.

---

## Einen Provider neu konfigurieren {#reconfiguring-a-provider}

Gehe zu **Network Admin › Ultimate Multisite › Settings › Domain Seller** (oder klicke in der plugin-Liste auf **Einstellungen**).

Die Einstellungsseite enthält:

- **Domain-Verkauf aktivieren** — die gesamte Funktion ein-/ausschalten
- **Standard-Provider** — der Provider, der für Domain-Suchen und neue Produkte verwendet wird
- **Max. TLDs pro Suche** — wie viele TLDs geprüft werden, wenn ein Kunde sucht; höhere Werte zeigen mehr Optionen, sind aber langsamer
- **Dauer des Verfügbarkeits-Caches** — wie lange Verfügbarkeits- und Preisergebnisse zwischengespeichert werden; niedrigere Werte sind genauer, erhöhen aber API-Aufrufe
- **Domain-Produkte verwalten** — Schnelllink zur Produktliste
- **Provider konfigurieren** — öffnet den Integrationsassistenten, um Provider hinzuzufügen oder neu zu konfigurieren

### Einen zweiten Provider hinzufügen {#adding-a-second-provider}

Klicke auf **Provider konfigurieren** und führe den Assistenten erneut für den neuen Registrar aus. Du kannst mehrere Provider gleichzeitig konfiguriert haben. Weise jedes Domain-Produkt einem bestimmten Provider zu oder belasse es beim Standard.

### TLDs manuell synchronisieren {#syncing-tlds-manually}

Klicke auf der Einstellungsseite neben einem konfigurierten Provider auf **TLDs synchronisieren**, um die neuesten Preise abzurufen. Das ist nützlich, nachdem ein Provider Großhandelspreise aktualisiert oder neue TLDs hinzugefügt hat.

---

## Logs {#logs}

Jeder Provider schreibt in seinen eigenen Log-Kanal. Logs sind unter **Network Admin › Ultimate Multisite › Logs** einsehbar:

| Log-Kanal | Inhalte |
|---|---|
| `domain-seller-registration` | Alle Registrierungsversuche (Erfolg und Fehler) |
| `domain-seller-renewal` | Ergebnisse von Verlängerungsjobs |
| `domain-seller-opensrs` | Raw OpenSRS API-Aktivität |
| `domain-seller-namecheap` | Raw Namecheap API-Aktivität |
| `domain-seller-hostafrica` | Raw HostAfrica API-Aktivität |
| `domain-seller-openprovider` | Raw Openprovider API-Aktivität |
| `domain-seller-hostinger` | Raw Hostinger API-Aktivität |
| `domain-seller-godaddy` | Raw GoDaddy API-Aktivität |
| `domain-seller-resellerclub` | Raw ResellerClub API-Aktivität |
| `domain-seller-namesilo` | Raw NameSilo API-Aktivität |
| `domain-seller-enom` | Raw Enom API-Aktivität |

---

## Hinweise zu Provider-Funktionen {#provider-capability-notes}

Nicht jede Registrar-API stellt dieselben Vorgänge bereit. Das Addon zeigt nicht unterstützte Vorgänge mit klaren, an Admins gerichteten Fehlern an, anstatt stillschweigend fehlzuschlagen.

- **HostAfrica** unterstützt den umfassendsten Live-Reseller-Workflow, einschließlich Suche, TLD-/Preissynchronisierung, Registrierung, Verlängerung, Transfer, Nameserver-Aktualisierungen, DNS-Einträgen, EPP-Codes, Registrar-Sperre und ID-Schutz.
- **Openprovider** unterstützt TLD-Synchronisierung mit Reseller-Preisen, Registrierung, Verlängerung, Transfers, Nameserver-Aktualisierungen, DNS-Zonen, EPP-Codes, Registrar-Sperre und WHOIS-Datenschutz. Es authentifiziert sich mit einem kurzlebigen bearer token, den das Addon automatisch aktualisiert.
- **Hostinger** unterstützt Verfügbarkeitssuche, Registrierung, Portfolio-Suche, Nameserver-Aktualisierungen, Registrar-Sperre und WHOIS-Datenschutz über den gemeinsamen hPanel-API-Token. Hostingers öffentliche Domains API stellt keine Reseller-/Großhandelspreise, eingehenden Transfer, explizite Verlängerung oder EPP-Code-Abruf bereit; Verlängerungen erfolgen nur per automatischer Verlängerung.
