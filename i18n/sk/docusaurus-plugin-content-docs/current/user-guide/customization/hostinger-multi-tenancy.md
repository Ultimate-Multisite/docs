---
title: Multi-tenancy Hostinger
sidebar_position: 8
_i18n_hash: d7facb9c131877c2c834bd2184d9a073
---
# Hostinger Multi-Tenancy

Ultimate Multisite: Multi-Tenancy 1.2.0 pridáva schopnosť multi-tenancy Hostinger, takže hostované domény môžu participar v poskytovaní suverénnych klientov (tenant provisioning) vedľa existujúcej integrácie mapovania domén Hostinger.

Použite túto funkciu, ak správate domény klientov a izolovanú infraštruktúru klientov cez Hostinger hPanel.

## Poznámky k nastaveniu {#setup-notes}

1. Konfigurujte základnú integráciu Hostinger pod **Ultimate Multisite > Settings > Host Integrations**.
2. Potvrďte, že token API Hostinger môže spravovať cieľovú doménu alebo poddoménu.
3. Vклюčte doplnok Multi-Tenancy.
4. Konfigurujte strategiu izolácie klientov pred publikovaním klienta.
5. Vykonajte pracovný tok verifikácie migrácie pred odobraním produkčného trafiku na klienta.

Schopnosť Hostinger používa zdieľanú spojenie Hostinger pre operácie na strane hostiteľa (host-side operations). DNS musí stále ukecať na správny účet Hostinger, a limity účtu hPanel platia aj v tomto prípade.

## Zmeny špecifické pre schopnosť {#capability-specific-changes}

- Suverénne klientov (sovereign tenants) sa môžu vytvárať s doménovými operáciami, ktoré sú určené na hostiteľa.
- Strojové názvy hostov dátovej databázy sa normalizujú pred overením prístupu.
- Klienti spravované Hostinger by mali používať hodnotu hosta dátovej databázy zobrazenú v hPanel, ak to runtime WordPress nepožaduje lokálne prepisovanie (override).
- Navíjanie SSO závisí na tom, že doména klienta sa rozhrani s klientom hostovaným v Hostinger.

## Riešenie problémov s klientmi Hostinger {#troubleshooting-hostinger-tenants}

- Ak sa nainštalácia klienta neúspetí, overte, či je doména už pridaná k účtu Hostinger.
- Ak sa verifikácia dátovej databázy neúspetí, porovnate hosťové menášte dátovej databázy, názov dátovej databázy a hostovanie s hPanel.
- Ak sa **Visit (SSO)** neúspetí, potvrďte, že DNS a SSL sú aktívne pre doménu klienta.
- Ak sa odobrať odstráni zvyšné zdroje hostiteľa, odstráňte všetky zostávajúce databázy, používateľské účty alebo adresá v hPanel po potvrdení záloh.
