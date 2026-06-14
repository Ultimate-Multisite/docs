---
title: Suunnitelman alennus
sidebar_position: 7
_i18n_hash: ce49309d1cd1d8310fd360fa324119f3
---
# Suunnitelman alennus (v2)

_**TÄRKEÄ HUOMIO: Tämä artikkeli viittaa Ultimate Multisite -versioon 2.x.**_

Suunnitelman tai tilauksen alennuttaminen on yleinen asia, jonka asiakkaat saattavat tehdä, jos heillä on rajallinen budjetti tai päättäneet, ettei he tarvitse paljon resursseja sivustonsa ylläpitämiseen.

## Miten suunnitelmaa alennetaan

Asiakkaat voivat alentaa suunnitelma milloin tahansa kirjautumalla sisään subsite-admin-dashboardiin ja klikkaamalla **Change** (Muuta) -painiketta tilin sivulta.

![Asiakkaan tili-sivu, jossa on jäsenyyden kortti ja Muuta-painike](/img/account-page/membership-change-button.png)

Kun klikkaat **Change**-painiketta, käyttäjä/asiakas ohjataan kassalle sivulle, josta voi valita suunnitelman, johon haluaa muuttaa tilaustaan.

![Suunnitelman alennusvaihtoehtojen sivu asiakkaan puolelta](/img/account-page/downgrade-picker.png)

Tässä esimerkissä alennamme suunnitelmaa **Premium**-tasolta **Free**-tasolle.

Jatkaaksesi käyttäjän tarvitsee vain klikata **Complete Checkout** (Suorita kassalla) -painiketta. Tämän jälkeen hänet ohjataan takaisin tiliin, jossa näkyy ilmoitus odottavasta muutoksesta jäsenyyteen liittyen. Muutokset tulevat voimaan asiakkaan **seuraavassa laskutusajassa**.

![Tilin sivu, jossa on odotettavan jäsenyyden muutoksen banneri](/img/account-page/pending-change.png)

### Mitä tapahtuu, kun käyttäjä alentaa suunnitelmaa

On tärkeää huomata, että suunnitelman alennuttaminen ei muuta olemassa olevaa konfiguraatiota käyttäjän subsite-sivustolla.

Se ei muuta automaattisesti sivuston mallia (template), koska sivustomallin muuttaminen poistaa ja nollaa koko subsite-sivuston. Tämä tehdään välttää tarpeettavaa tietojen menetyksen. Siksi levykapasiteetti, teemat, pluginit jne. pysyvät ehjinä, paitsi postaukset.

Ymmärrämme, että päähuolenne ovat jokaisen suunnitelman alla asettamasi rajoitukset ja kvootit, mutta meidän täytyy miettiä sitä vahinkoa, jonka se aiheuttaisi käyttäjän alisivulle, jos poistaisimme tai muuttaisimme sen asetuksia.

Posteille, jotka ylittävät suunnitelmassa asetetun rajan, sinulla on 3 eri vaihtoehtoa: **Pidä postit sellaisina** *,* **Siirrä postit roskakoriin** *,* tai **Siirrä postit luonnokseen** *. Voit määrittää tämän Ultimate Multisite -asetuksissa.

![Network Admin Settings Sites page showing post-limit-exceeded behaviour options](/img/account-page/settings-sites-post-limit.png)

### Mitä tapahtuu maksulle

Versiossa 2.0 ei enää vaadi prorataation suhteen mitään muutoksia maksuun liittyen.

Tämä johtuu siitä, että järjestelmä odottaa olemassa olevan jäsenyyden **valmistelevan laskutuskauden ennen** uuden suunnitelman/jäsenyyden tuloa voimaan. Uuden jäsenyyden uusi laskutusmäärä lisätään ja veloitetaan automaattisesti seuraavalla laskutuskaudella.
