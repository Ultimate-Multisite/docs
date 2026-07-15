---
title: Operations vom Souveränte Mieter
sidebar_position: 15
_i18n_hash: bcde2032a685b60e17f1944b5b588f25
---
# Sovereign Tenant Operations

Ultimate Multisite: Multi-Tenancy 1.2.0 füegt operationelli Werkzüg für souveräni Tenants bi: subsites mit ihri eigeti Datenbank, Dateisystemwurzel und Routing-Kontext hinzu, wo trotzdem vom Netzwerkanbieter sichtbar bliebe.

Bruche die Page, wenn Sie isolierti Kundesite verwalte, remote-Site-Übergäng oder Migration mache, wo en Standard-Subsite in souveräni Infrastruktur verschiebt.

## Was sich für Administratore ändert {#what-changes-for-administrators}

- **Stateless tenant autologin** — Netzwerkanbieter chönne en souveräne Tenant bsueche, ohni uf langlaufendi gmeinti Session-Zuestand z'setze. De SSO Token isch gezielt definiert (purpose-scoped), origin-fixiert (origin-pinned), replay-geschützt und mit ere churze Ablaufziit begrenzt.
- **Sovereign-aware routing** — Legacy isolierti Netzwärch und souveräni Tenants löse sich über de gliichi Site Router Pfad uf, was d'Unterschied bi de Bootstrap zwüsche alte und neue isolierte Installatione reduziert.
- **Verified migration state** — D'Migration-Verifizierig prüeft d'Benutzerbereitstellig (user provisioning), d'Schriiberberechtigunge für d'Datenbank (database writer permissions), de Status vom Queue Drain und d'Abwesenheit vo Legacy-Tabellen, bevor en Tenant als vollständig betrachtet wird.
- **Safer teardown** — D'Souveräni Abmüehlig entfernt jetz d'Tenant-Credentials sauber, sodass gelöschti Tenants kei veralteti Datenbankzugriff hinterlah.

## Souveräne Tenant bsueche {#visiting-a-sovereign-tenant}

1. Öffne **Network Admin > Ultimate Multisite > Sites**.
2. Wähle de souveräne Tenant us.
3. Bruche **Visit (SSO)**, wenn verfügbar, statt Passwörter z'kopiere oder temporäri Admin-Kontä z'erstelle.

De Visit-Fluss erstellt en kurzlebige Login-Token für dä Tenant und speichert s'SSO-Ereignis im Audit Trail vom Tenant. Wenn d'Schaltflächi fehlschlaht, überprüefed Sie, ob de Tenant-Domain zur erwartete Installation ufzeichnet isch und ob de Tenant de Netzwerksit-SSO-Endpunkt erreiche cha.

## Remote-Site Operations Checklist {#remote-site-operations-checklist}

Bevor Sie en souveräne oder remote Tenant ändere, bestätige Sie:

- De Domäne vom Mieter zeigt uf de Host, wo d'Mieterdateie beherrscht.
- De Datenbankhost vom Mieter stimmt mit de konfigurierten Host-Binding für die Installation überei.
- D'Migrationsverifizierigsbefehl laufe für de Mieter erfolgreich ab.
- Async migration queues werded geleert, bevor DNS- oder Ownership-Änderige gmacht wärded.
- De Admin-User vom Mieter isch während de Migration bereitgstellt worde und cha über SSO iilogge.

## Sovereign Tenants lösche {#deleting-sovereign-tenants}

Sovereine Mieter lösche isch zerstörerisch. Bestätige zerscht de Backup- und Exportstatus, bevor du ihn vo de Site Management-Schiin löschst. De 1.2.0 Teardown-Flow entfernt d'Mieterdatenbank-Credentials als Teil vom Aufrüüm, aber Admins sölled trotzdem überprüefe, ob Host-Level-Datenbank-User und Ordner weg sind, wenn sie externe Hosting-Panels bruched.

:::warning
Lösch en souveräne Mieter nöd, während d'Migrationsverifizierig no lauft oder wyl async push Jobs i de Warteschlange sind. Warte, bis d'Verifizierig fertig isch, damit de Teardown kei Credentials entfernt, wo für pending Jobs nötig sind.
:::
