---
title: Istoric al schimbărilor TVA
sidebar_position: 99
_i18n_hash: 6a39ef4779b6ed52a08804c75ca25fc9
---
# Jurnal de modificări TVA

Versiunea 1.0.7 - Lansată pe 2026-02-03

* Corecție: Numerele TVA germane (DE) care eșuau validarea din cauza erorilor MS_MAX_CONCURRENT_REQ ale serviciului VIES SOAP. Am trecut de la API-ul SOAP vechi la API-ul oficial VIES REST pentru o validare mai fiabilă.
* Corecție: Acum se acceptă numerele TVA chiar dacă serviciul VIES nu este disponibil temporar, în loc să fie respinse greșit. Se creează o intrare în jurnal pentru revizuire ulterioară.
* Corecție: Câmpul TVA/ID Fiscal este acum vizibil pentru toate țările, nu doar pentru membrii UE. ID-urile fiscale non-UE (de exemplu, numerele CHE elvețiene) sunt stocate pentru afișarea facturii, fără validare VIES.
* Corecție: Căutarea prefixului TVA pentru Grecia (GR), Monaco (MC) și Isle of Man (IM) era defectă din cauza unei logici incorecte de căutare în array.
* Îmbunătățire: Am eliminat dependența de dezvoltare inutilă `wp-cli-bundle` care putea cauza erori fatale atunci când era utilizată împreună cu addon-ul Site Exporter.
* Îmbunătățire: Am adăugat un set cuprinzător de teste unitare (53 teste).

Versiunea 1.0.6 - Lansată pe 2026-01-25

* Corecție: Tranzacțiile B2B interne acum calculează corect TVA-ul. Conform regulilor TVA ale UE, taxarea inversă se aplică doar tranzacțiilor B2B transfrontaliere, nu atunci când țara clientului se potrivește cu țara companiei.

Versiunea 1.0.5 - Lansată pe 2026-01-22

* Corecție: Addonul nu se încarca sau nu funcționa corect.
* Schimbare: Am schimbat sursa de date pentru ratele TVA de la euvatrates.com la repository-ul ibericode/vat-rates pentru date mai fiabile și menținute activ.
* Corecție: Am corectat greșeala de tipar a valorii opțiunii `super_reduced_rates`.
* Îmbunătățire: Am adăugat verificări de tip `null` pentru gestionarea codurilor de țară pentru a preveni erorile.
* Schimbare: Am eliminat fișierele de traducere încorporate în favoarea actualizărilor automate prin Traduttore.

Versiunea: 1.0.3 - Lansată pe 2025-09-28

* Am schimbat prefixul în ultimate-multisite; am actualizat domeniul de text; creștere a versiunii.

Versiunea 1.0.0-beta.4 - 2021-09-24

* Adăugat: filtrul `wp_ultimo_skip_network_active_check` pentru setările bazate pe mu-plugins;

Versiunea 1.0.0 - 05/08/2021 - Lansare inițială
