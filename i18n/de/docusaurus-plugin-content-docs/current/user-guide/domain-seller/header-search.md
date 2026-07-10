---
title: Kopfzeilen-Domain-Suche
sidebar_position: 4
_i18n_hash: c8b44ed222646006fb33c195ca6ac7a1
---
# Header-Domain-Suche {#header-domain-search}

Verwende dieses Setup, wenn du ein kleines Header-Formular möchtest, das eine Domain-Suche startet und den Kunden anschließend im Ultimate Multisite Checkout aus verfügbaren Domains auswählen lässt.

## Anforderungen {#requirements}

- Ultimate Multisite netzwerkweit aktiv.
- Multisite Ultimate Domain Seller netzwerkweit aktiv.
- Mindestens ein aktives Domain-Registrierungsprodukt mit:
  - `domain_provider` auf einen konfigurierten Anbieter gesetzt.
  - Unterstützte TLDs konfiguriert, zum Beispiel `com`, `net` und `org`.
- Ein gültiges Checkout-Formular, das das Feld **Domain-Auswahl** enthält.

## Checkout-Formular {#checkout-form}

1. Erstelle oder bearbeite das Checkout-Formular, das von der Registrierungsseite verwendet wird.
2. Füge die normalen erforderlichen Checkout-/Account-Felder hinzu, einschließlich **Benutzername**. Ein Checkout-Formular, das nur das Domain-Feld enthält, wird von der Ultimate Multisite Validierung abgelehnt.
3. Füge ein Feld **Domain-Auswahl** hinzu.
4. Setze den Modus der Domain-Auswahl auf **Nur registrieren**, wenn sich der Ablauf auf registrierte Domains statt auf kostenlose Subdomains oder vorhandene Domains konzentrieren soll.
5. Weise diesem Feld das Domain-Registrierungsprodukt zu.

Die Registrierungsseite sollte das Checkout-Formular ausgeben, zum Beispiel:

```text
[wu_checkout slug="domain-form"]
```

## Header-Formular {#header-form}

Füge ein kleines `GET`-Formular im Website-Header hinzu, das den eingegebenen Suchbegriff als `domain_name` an die Checkout-Seite sendet:

```html
<form class="ums-header-domain-search" action="/register/" method="get">
  <label class="screen-reader-text" for="ums-header-domain-search-input">Search for a domain</label>
  <input id="ums-header-domain-search-input" name="domain_name" type="text" placeholder="Find your domain" autocomplete="off">
  <button type="submit">Search</button>
</form>
```

Wähle keine Domain in benutzerdefiniertem Header-JavaScript vorab aus. Der Header sollte nur den Suchbegriff übergeben. Das Domain Seller Checkout-Skript liest `?domain_name=example`, füllt das Checkout-Suchfeld aus und führt die Verfügbarkeitssuche aus, sodass der Kunde aus den zurückgegebenen Domains wählen kann.

## Erwartetes Verhalten {#expected-behaviour}

Die Suche nach `example` im Header sollte Folgendes öffnen:

```text
/register/?domain_name=example
```

Der Checkout sollte dann auswählbare Ergebnisse anzeigen, wie zum Beispiel:

- `example.com`
- `example.net`
- `example.org` nicht verfügbar
- andere vom Anbieter unterstützte TLDs

Nach der Auswahl eines verfügbaren Ergebnisses sollte die Bestellübersicht das Domain-Registrierungsprodukt und den ausgewählten Domain-Namen enthalten.

## Überprüfung {#verification}

1. Öffne die Startseite.
2. Suche nach einem reinen Namen, zum Beispiel `example`.
3. Bestätige, dass die Checkout-URL `?domain_name=example` enthält.
4. Bestätige, dass das Checkout-Domain-Feld `example` enthält.
5. Bestätige, dass eine Liste mit Domain-Optionen angezeigt wird.
6. Klicke bei einer verfügbaren Domain auf **Auswählen**.
7. Bestätige, dass die Bestellübersicht `Domain Registration - example.com` oder die ausgewählte Domain enthält.

## Fehlerbehebung {#troubleshooting}

- Wenn keine Liste erscheint, prüfe den Netzwerk-Tab des Browsers auf `admin-ajax.php?action=wu_domain_search` und bestätige, dass nicht leere `domains` oder `results` zurückgegeben werden.
- Wenn die Validierung des Checkout-Formulars beim Speichern fehlschlägt, füge die erforderlichen Account-Felder wie **Benutzername** hinzu.
- Wenn die Auswahl einer Domain den Warenkorb nicht aktualisiert, bestätige, dass `window.wu_checkout_form` existiert und dass die Domain Seller Checkout-Assets auf der Checkout-Seite geladen sind.
