---
title: Moniverkoston muutosloki
sidebar_position: 99
_i18n_hash: 277edeab455a1d2e70dbbb4617f115a0
---
# Multi-Network-muutosloki

### 1.3.0
* Uusi: Verkkopohjien esikatselin — selaa ja esikatsele verkkopohjia live-paneelissa ennen ostamista.
* Uusi: Verkkopohjan valitsin kassalla — asiakkaat voivat valita verkkopohjan rekisteröitymisen kassaprosessin aikana.
* Uusi: Verkkojen välinen magic link SSO — asiakkaat voivat käyttää aliverkkoja saumattomasti magic-link-tunnistautumisen kautta.
* Uusi: Verkon median kloonaus — sivuston media monistetaan oikein, kun verkkoja kloonataan pohjasta.
* Korjaus: Verkon kloonaus toimii nyt ilman multi-tenancy-lisäosaa; super admin -oikeudet myönnetään uudelleen kloonauksen jälkeen.
* Korjaus: Verkon luonti on nyt yhteensopiva WooCommerce ja kaikkien maksuyhdyskäytävien kanssa.
* Korjaus: Porttinumero sisällytetään nyt varadomainin luontiin.
* Korjaus: Pohjan valitsimen CSS siirrettiin jonoon lisättyyn tyylitiedostoon, jotta se renderöityy oikein kaikissa teemoissa.
* Korjaus: Suojaus määrittelemätöntä `network_id`-avainta vastaan sivustokyselyn rajauksessa.
* Korjaus: Verkon oikeustarkistus ennen kontekstin vaihtoa estää `wpdb`-taulun ominaisuusvirheet.

### 1.0.4
* Korjaus: Uuden verkon luonti.
* Korjaus: Valikoiden renderöinti.

### 1.0.3
* Päivitetty Plugin Update Checker v5:een
* Lisätty modernit WordPress plugin -otsakkeet
* Parannettu yhteensopivuutta uusimpien WordPress-versioiden kanssa

### 1.0.2
* Virheenkorjauksia ja suorituskykyparannuksia
* Parannettu verkon eristystä

### 1.0.0
* Ensimmäinen julkaisu
* Multiverkon ydintoiminnallisuus
* Integraatio Multisite Ultimate kanssa
