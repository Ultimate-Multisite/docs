---
title: Multi-tenancy Hostinger
sidebar_position: 8
_i18n_hash: d7facb9c131877c2c834bd2184d9a073
---
# Multi-tenancy Hostinger

Ultimate Multisite: Multi-Tenancy 1.2.0 adaugă o capacitate de multi-tenant Hostinger, permițând domeniile găzduite să participe la provizionarea de tenant sovereign alături de integrarea existentă de mape de domenii Hostinger.

Folosiți această capacitate atunci când gestionați domeniile tenant și infrastructura tenant izolată prin hPanel Hostinger.

## Note de configurare

1. Configurați integrarea principală Hostinger sub **Ultimate Multisite > Settings > Host Integrations**.
2. Confirmați că tokenul API Hostinger poate gestiona domeniul sau subdomain țintă.
3. Activați addon-ul Multi-Tenancy.
4. Configurați strategia de izolare a tenantului înainte de publicarea acestuia.
5. Rulați fluxul de verificare a migrației înainte de trimiterea traficului de producție către tenant.

Capacitatea Hostinger utilizează conexiunea partajată Hostinger pentru operațiunile pe partea de host. DNS trebuie să continue să pointeze către contul Hostinger corect, iar limitele contului hPanel se aplică în continuare.

## Modificări specifice capacității

- Tenantii sovereign pot fi creați cu operațiuni de domeniu conștiente de host (host-aware).
- Știrile de găzduire a bazei de date pe aceeași mașină sunt normalizate înainte de verificarea concedierii.
- Tenantii gestionați de Hostinger ar trebui să folosească valoarea știrii de bază de date afișată în hPanel, decât dacă runtime-ul WordPress necesită o suprascrierea locală.
- Vizitele SSO se bazează pe rezolvarea domeniului tenant către tenantul găzduit de Hostinger.

## Depanare tenantilor Hostinger

- Dacă instalarea unui tenant eșuează, verificați dacă domeniul este deja atașat contului Hostinger.
- Dacă verificarea bazei de date eșuează, comparați numele utilizatorului Bazei de Date a tenantului, numele Bazei de Date și legarea știrii cu hPanel.
- Dacă **Visit (SSO)** eșuează, confirmați că DNS-ul și SSL-ul sunt active pentru domeniul tenantului.
- Dacă demontarea lasă resursele host în urmă, eliminați orice baze de date, utilizatori sau foldere rămase din hPanel după confirmarea backup-urilor.
