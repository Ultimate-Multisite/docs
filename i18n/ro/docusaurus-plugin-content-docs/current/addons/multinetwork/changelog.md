---
title: Jurnal de Modificări Multi-Rețea
sidebar_position: 99
_i18n_hash: 277edeab455a1d2e70dbbb4617f115a0
---
# Istoric de versiuni Multi-Network

### 1.3.0
* Nou: Vizualizator de template-uri de rețea — puteți naviga și pre-vizualiza template-urile de rețea cu un panou live înainte de achiziție.
* Nou: Selector de template-uri de rețea la checkout — clienții pot selecta un template de rețea în timpul procesului de înscriere (checkout).
* Nou: SSO (Single Sign-On) cu magic link între rețele — clienții pot accesa sub-rețele fără probleme prin autentificarea cu magic-link.
* Nou: Clonarea mediului de rețea — mediul site-ului este duplicat corect atunci când clonați rețele dintr-un template.
* Corecție: Clonarea rețelei funcționează acum fără addon-ul multi-tenancy; drepturile de super admin sunt re-acordate după clonare.
* Corecție: Crearea rețelei este acum compatibilă cu WooCommerce și toate gateway-urile de plată.
* Corecție: Numărul portului este acum inclus în generarea domeniului de rezervă (fallback).
* Corecție: CSS-ul selectorului de template a fost mutat într-un stylesheet înregistrat (enqueued) pentru o afișare corectă pe toate temele.
* Corecție: Adăugat un gard (guard) împotriva cheii `network_id` nedefinite în scopul interogării site-ului.
* Corecție: Verificarea permisiunilor de rețea înainte de schimbarea contextului previne erorile de proprietate ale tabelei `wpdb`.

### 1.0.4
* Corecție: Crearea unei noi rețele.
* Corecție: Afișarea meniurilor.

### 1.0.3
* Actualizat la Plugin Update Checker v5
* Adăugate anteturi moderne pentru plugin-uri WordPress
* Îmbunătățită compatibilitatea cu cele mai recente versiuni WordPress

### 1.0.2
* Corecții de bug-uri și îmbunătățiri de performanță
* Izolare îmbunătățită a rețelei

### 1.0.0
* Lansare inițială
* Funcționalitatea de bază multi-network
* Integrare cu Multisite Ultimate
