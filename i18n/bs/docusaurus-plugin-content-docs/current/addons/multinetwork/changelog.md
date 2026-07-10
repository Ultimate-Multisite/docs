---
title: Dnevnik promjena više mreža
sidebar_position: 99
_i18n_hash: 277edeab455a1d2e70dbbb4617f115a0
---
# Dnevnik promjena za Multi-Network {#multi-network-changelog}

### 1.3.0 {#130}
* Novo: Preglednik šablona mreže — pregledajte i predgledajte šablone mreže na uživo sa panelom prije kupnje.
* Novo: Odabir šablona mreže na checkoutu — kupci mogu odabrati šablon mreže tokom procesa prijave.
* Novo: Međumrežni magic link SSO — kupci mogu pristupiti podmrežama bez problema putem autentifikacije magic link-om.
* Novo: Kloniranje medija mreže — mediji lokacije se ispravno dupliraju prilikom kloniranja mreža sa šablona.
* Popravak: Kloniranje mreže sada radi bez dodatka za multi-tenancy; super admin privilegije se ponovo dodjeljuju nakon kloniranja.
* Popravak: Kreiranje mreže sada je kompatibilno sa WooCommerce-om i svim gatewayima za plaćanje.
* Popravak: Broj porta sada je uključen u generisanje fallback domena.
* Popravak: CSS za odabir šablona premješten je u enqueued stylesheet radi ispravnog renderovanja na svim temama.
* Popravak: Zaštita od nedefinisiranog ključa `network_id` u opsegu upita lokacije.
* Popravak: Provjera dozvole mreže prije prebacivanja konteksta sprječava greške svojstava `wpdb` tabele.

### 1.0.4 {#104}
* Popravak: Kreiranje nove mreže.
* Popravak: Renderovanje menija.

### 1.0.3 {#103}
* Ažurirano na Plugin Update Checker v5
* Dodati moderni WordPress zaglavlja za pluginove
* Poboljšana kompatibilnost sa najnovijim verzijama WordPressa

### 1.0.2 {#102}
* Popravci grešaka i poboljšanja performansi
* Poboljšana izolacija mreže

### 1.0.0 {#100}
* Početno izdanje
* Osnovna funkcionalnost multi-mreže
* Integracija sa Multisite Ultimate
