---
title: Muutosloki
sidebar_position: 5
_i18n_hash: 9747e37b1fd831941c9f86e6c3f85c81
---
# Muutosloki

## 1.18.0 — Julkaistu 2026-06-29

### Uutta

- **Google Calendar -työkalut** — lue määritettyjä kalentereita ja tapahtumia aikataulut huomioivia automaatioita varten
- **Yhteystietojen yhdistäminen ja osallistuja-apurit** — yhdistä kalenterin osallistujat sivuston käyttäjiin ja yhteystietoihin
- **Ihmishyväksynnän portit ja muistutustietueet** — keskeytä automaatiot tarkistusta varten ja vältä päällekkäiset ilmoitukset
- **TextBee SMS -palveluntarjoaja** — lähetä määritettyjä tekstiviesti-ilmoituksia TextBeen kautta
- **Edistynyt kumppanipaketti** — lisää luotetun kehittäjän tiedostojärjestelmä-, tietokanta-, WP-CLI-, REST-välittäjä-, pluginin rakennus-, git snapshot-, käyttäjähallinta- ja suorituskykytestityökalut, jotka jaetaan erillään WordPress.org-koontiversiosta

### Parannettu

- **Hallinnoidun Superdav-palvelun määritys** — lisää isännöidyn palvelun endpointit ja automaattinen yhteyden käyttöönotto tuetuille sivustoille
- **Julkaisupaketointi** — koosta erilliset ydin- ja Advanced-ZIPit, julkaise molemmat GitHubissa ja lähetä vain ydinpaketti WordPress.orgiin

### Korjattu

- **AI-pyyntöjen luotettavuus** — paranna mallin valintaa, pyyntöjen aikakatkaisuja, oletusmääritysmallia, päättelytekstin käsittelyä ja uudelleenyritysohjeistusta virheellisiä työkalukutsuja varten
- **Kalenterin ja muistutusten vahvistaminen** — vahvista Google Calendar -tokeneita ja muistutusten päällekkäisyyksien poistoa
- **Käyttöönoton ja hyväksyntöjen jatkaminen** — korjaa frontend-käyttöönoton käynnistykset ja vahvistettujen toimintojen jatkaminen
- **WordPress.org-paketoinnin tarkistusongelmat** — käsittele ydinjulkaisun paketointitarkistuksen palaute

## 1.16.0 — Julkaistu 2026-05-20

### Uutta

- **Luo logo-SVG -toiminto** — Theme Builder voi nyt luoda ja upottaa mukautettuja logo-SVG:itä nimiavaruusturvallisella puhdistuksella
- **Kuvan lataus kartoitushaastattelussa** — Theme Builderin kartoitushaastattelu sisältää nyt kuvan latausvaiheen rikkaampaa suunnittelukontekstia varten
- **Validoi paletin kontrasti -toiminto** — tarkista väriparien WCAG-yhteensopivuus ennen niiden käyttämistä teemaan
- **Majoitus- ja ravintola-alan valikot** — Theme Builder voi nyt luoda rakenteisia ruoka- ja juomavalikkosivuja majoitus- ja ravintola-alan yrityksille
- **Työpöytä- ja mobiiliesikatselun renderöinti** — esikatsele suunnitelmaasi työpöydällä ja mobiililaitteilla suunnittelusuunnan valinnan aikana
- **Navigaation otsikkoparametri** — Luo valikko -toiminto tukee nyt erillistä `navigation_label`-arvoa, joka on erillään sivun otsikosta
- **Tason 1 työkalujen saatavuus** — sd-ai-agent/site-scrape on nyt tason 1 työkalu, joka on oletuksena käytettävissä Theme Builderissa

### Korjattu

- **AI Client -välimuisti** — käyttää nyt transienteja pyyntöjen väliseen pysyvyyteen, mikä estää tietojen häviämisen pitkään kestävissä agenttitehtävissä
- **Plugin-rivin toimintolinkit** — korjattu ja nimetty uudelleen selkeyden vuoksi

## 1.10.0 — Julkaistu 2026-05-05

### Uutta

- **Tavily-internethaku** — lisää Tavily hakupalveluntarjoajaksi tuottamaan rikkaampia internethakutuloksia Brave Searchin rinnalle
- **Teematietoiset sisäänrakennetut taidot** — Block Themes-, Classic Themes-, Kadence Blocks- ja Kadence Theme -taito-oppaat toimitetaan nyt pluginin mukana
- **Sivustonrakentajan yhteydenottolomaketoiminto** — lisää yhteydenottolomake mille tahansa sivulle suoraan chat-käyttöliittymästä

### Parannettu

- **WooCommerce-integraatio uudistettu** — käyttää nyt natiiveja WooCommerce API -rajapintoja paremman luotettavuuden ja yhteensopivuuden saavuttamiseksi
- **Palveluntarjoajaluettelo päivittyy automaattisesti** — kun mikä tahansa plugin aktivoidaan tai poistetaan käytöstä

### Korjattu

- **navigate-to-toiminto** — korjattu loputon uudelleenlataussilmukka joillakin ylläpitosivuilla
- **list-posts-toiminto** — ratkaisee nyt kategoria- ja taginimet oikein slugeiksi
- **WP-CLI-komennot** — palautettu puuttuvat nimiavaruusaliakset aiemman uudistuksen jälkeen
- **Tapahtuma-automaatio** — käsittelee sujuvasti sivustot, joilla automaatiotauluja ei ole vielä luotu
- **memory-save-toiminto** — käyttää nyt oikeaa nimiavaruusetuliitettä järjestelmäohjeiden rakentajassa
- **Skalaariset työkalutulokset** — kääritään nyt oikein ennen niiden palauttamista AI:lle
- **Käyttötilastot** — käsittelevät nyt oikein vanhan toimintonavainmuodon päivitettäessä vanhemmista versioista
