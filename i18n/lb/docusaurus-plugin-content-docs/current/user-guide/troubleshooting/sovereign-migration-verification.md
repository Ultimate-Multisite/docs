---
title: Verifikatioun vo de Souveränte Migratioun
sidebar_position: 16
_i18n_hash: a19bc6263b278573f09cbba17581f632
---
# Sovereign Migration Verifikatioun {#sovereign-migration-verification}

Ultimate Multisite: Multi-Tenancy 1.2.0 beinhaltet WP-CLI verifikationsbefehl für souveräne Tenant-Migrationen. Bruche si die, wenn e Tenant-Migration, en SSO-Besuch oder en isolierti Installation nöd wie erwartet funktioniert.

## Befehl zur Uusfüehrig {#commands-to-run}

Führe d'verifikatioun vo de WordPress-Installation im Netzwerk us:

```bash
wp tenant verify-no-legacy --site=<site-id>
wp tenant verify-sovereign-push --site=<site-id>
```

Bruche d'Site ID für de Tenant, wo Sie migriere wend. De erscht Befehl prüeft, ob de Tenant nöd meh uf Legacy Netzwerk-Daten abhängig isch. De zweiti Befehl überprüft, ob souveräni Push Jobs verarbeite und entleere chönd.

## Häufigi Fehler {#common-failures}

### Datenbank-Grants stimme nöd mit em Host übere {#database-grants-do-not-match-the-host}

Wenn d'Verifikatioun Fehlermeldige über Grants oder Writer-User meldet, überprüefet de konfigurierti Datenbank-Host. `localhost`, `127.0.0.1` und en Container-Service-Name sind verschiedeni MySQL Grant Hosts. Aktualisieret d'Tenant Host Binding oder d'Datenbank-Grants, und führet d'Verifikatioun no mal us.

### Bedrock oder lokali Installatione chönd nöd verbinde {#bedrock-or-local-installs-cannot-connect}

Bedrock- und lokale Socket-Installation chönne d'Datenbank als `localhost` melde, während de Runtime über en normalisierte Adress verbindet. Version 1.2.0 normalisiert Host-Strings uf em gliiche System, aber benutzerdefinierti Host-Überschribige chönd immer no mit Datenbank-Grants kollidiere.

### Asynchroni Push-Warteschte wird nöd entleert {#async-push-queue-does-not-drain}

Wenn `verify-sovereign-push` nöd fertig wird, überprüeft de Action Scheduler oder de konfigurierti asynchi Runner. Löschet fehlgeschlageni Jobs nume, nachdem Sie bestätigt händ, dass sie sicher sind zum neu z'versueche oder z'verwerfe.

### Tenant-Benutzeranzahl isch falsch {#tenant-user-count-is-wrong}

D'Migration söll Benutzer für de souveräne Tenant bereitstelle. Wenn de erwarteti Installationsbenutzer fehlt, führet Sie de Schritt zur Benutzerbereitstellig no mal us, bevor Sie SSO neu versuechet.

### SSO-Besuch wird abglehnt {#sso-visit-is-rejected}

Für de autologin vo de Tenant ohni State bruche Sie d'Tenant-Domain, de Origin Pin, de Token Purpose, de Nonce und de Expiry müesse übereinstamme. Bestätige Sie, dass d'Tenant URL korrekt isch und versueche Sie de Login kurz nach em Generiere vom SSO Visit.

## Wann neu versueche? {#when-to-retry}

Versueche Sie d'Verifizierig nach jede Infrastrukturänderig erneut. Wechsle Sie nöd de Produktionsverkehr, lösche Sie d'Quelldate oder entferne Sie d'Migrations-Credentials, bis alli Verifizierigsprüefige bestande sind.
