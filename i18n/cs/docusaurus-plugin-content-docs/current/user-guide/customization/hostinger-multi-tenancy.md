---
title: Multi-tenancy Hostinger
sidebar_position: 8
_i18n_hash: d7facb9c131877c2c834bd2184d9a073
---
# Hostinger Multi-Tenancy

Ultimate Multisite: Multi-Tenancy 1.2.0 přidává možnost multi-tenancy od Hostingu, což umožňuje, aby hostované domény spolu s existující integrací mapování domén Hostinger mohly участвовать v poskytování suverénních tenantů.

Používejte tuto funkci, když spravujete domény tenantů a izolovanou infrastrukturu tenantů prostřednictvím Hostinger hPanel.

## Poznámky k nastavení {#setup-notes}

1. Nastavte základní integraci Hostinger pod **Ultimate Multisite > Settings > Host Integrations**.
2. Potvrďte, že token API Hostinger může spravovat cílovou doménu nebo poddoménu.
3. Aktivujte příருst Multi-Tenancy addon.
4. Nastavte strategii izolace tenantů před publikováním tenantu.
5. Spusťte pracovní postup pro ověření migrace před odesláním produkčního provozu do tenantu.

Možnost Hostinger používá sdílené spojení Hostinger pro operace na straně hostitele. DNS musí stále ukazovat na správné účto Hostinger a limity účtu hPanel se stále vztahují.

## Změny specifické pro možnost {#capability-specific-changes}

- Suverénní tenancy lze vytvářet s operačními doménami, které jsou vědomé hostitele (host-aware).
- Hostitelské řetězce databázových hostů na stejné masce jsou normalizovány před ověřením oprávnění.
- Tenanty spravované Hostingerem by měly používat hodnotu hosta databáze zobrazenou v hPanel, pokud to runtime WordPress ne vyžaduje lokální přepis (override).
- Návštěvy pomocí SSO se spoléhají na to, že doména tenantu se rozresolbuje na hostovaného tenantu Hostingerem.

## Řešení problémů s tenancy od Hostinger {#troubleshooting-hostinger-tenants}

- Pokud selže instalace tenantu, ověřte, zda je doména již připojena k účtu Hostinger.
- Pokud selže ověření databáze, porovnejte uživatele databáze tenantu, název databáze a hostování s hPanel.
- Pokud selže **Visit (SSO)**, potvrďte, že DNS a SSL jsou aktivní pro doménu tenantu.
- Pokud je odpojení (teardown) nechává za sebou hostitelské zdroje, odeberte jakékoli zbývající databáze, uživatele nebo adresáře z hPanel po potvrzení záloh.
