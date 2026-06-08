---
title: Changelog Sincronizare Conținut
sidebar_position: 99
_i18n_hash: 3b44da06636d21415abe77d8cef605f3
---
# Istoric de schimbări pentru Content Sync

### Versiunea 1.1.0 - Lansată pe 2025-12-31
* Nou: Suport pentru sincronizarea tuturor tipurilor de postări (postări, pagini, tipuri de postări personalizate)
* Nou: Filtrare după tipul de postare în etapa de selecție a conținutului
* Nou: Etapa de selecție a site-ului sursă - sincronizare din orice site, nu doar de pe site-ul principal
* Nou: Pre-selecția site-urilor copil pentru site-urile de șablon
* Nou: Extragerea mediilor din `post_content` pentru toate tipurile de postări
* Nou: Sincronizarea taxonomiei (categorii, etichete, taxonomie personalizate)
* Schimbat: Repdenumit de la "Elementor Template Sync" la "Content Sync"
* Schimbat: Etapa "Select Templates" redenumită în "Select Data"
* Îmbunătățit: Codul specific Elementor rulează acum doar pentru tipul de postare `elementor_library`

### Versiunea 1.0.0 - Lansată pe 2025-12-19
* Eliberare inițială
* Wizard cu mai multe etape pentru selecția de șabloane și site-uri
* Procesare în grup (batch) cu feedback în timp real despre progres
* Sincronizare completă a mediilor cu re-maparea automată a ID-urilor
* Integrare cu setările Ultimate Multisite
* Suport pentru excluderea site-urilor prin setările de rețea
* Ștergerea cache-ului Elementor după sincronizare
* Conservarea taxonomiei șablonului
