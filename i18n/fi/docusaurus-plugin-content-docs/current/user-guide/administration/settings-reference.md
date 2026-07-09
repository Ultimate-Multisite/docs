---
title: Asetusten viite
sidebar_position: 11
_i18n_hash: d9ab375be74a5dff1aaf4f4eaf80c3be
---
# Asetusten viite

Tämä sivu seuraa asetuksia, jotka vaikuttavat päivittäiseen ylläpitoon ja viimeaikaisiin käyttäytymismuutoksiin Ultimate Multisite -palvelussa.

## Muut asetukset

**Muut asetukset** -alue näkyy kohdassa **Ultimate Multisite > Asetukset > Kirjautuminen ja rekisteröityminen**.

| Asetus | Kuvaus |
|---|---|
| **Ota Jumper käyttöön** | Näyttää Jumper-pikanavigointityökalun ylläpitoalueella. Käytä sitä siirtyäksesi suoraan Ultimate Multisite -näkymiin, verkko-objekteihin ja tuettuihin ylläpitokohteisiin. Poista se käytöstä, jos et halua tämän pikakuvakkeen näkyvän. |

## Virheraportointi ja telemetria

Aiempi virheraportoinnin suostumusasetus on poistettu asetussivulta. Anonyymi telemetria on poistettu käytöstä, eikä sen käyttöönottoon ole UI-valitsinta.

Jos ylläpidät sisäisiä ohjeistoja tai kuvakaappauksia asetussivusta, poista viittaukset vanhaan virheraportoinnin suostumuskenttään, jotta ylläpitäjät eivät etsi asetusta, jota ei enää ole.

## Tuonti-/vientiasetukset

**Tuonti/vienti**-asetusten välilehti kuvaa, mitä asetuksia se hallitsee, ja linkittää suoraan kohtaan **Ultimate Multisite > Sivuston vienti** sivusto- ja verkkoarkistoja varten. Käytä asetusten välilehteä tuonti-/vientimäärityksiin, käytä kohtaa **Työkalut > Vienti ja tuonti** yksittäisen sivuston vienti-/tuontityönkulkuun ja käytä Sivuston vienti -työkalua, kun tarvitset täyden verkon vientiarkiston.

## Domain Seller HostAfrica -saldovaroitus

Kun Domain Seller -lisäosa on yhdistetty HostAfricaan, verkon ylläpitäjät näkevät nyt kuitattavan alhaisen saldon varoituksen, kun jälleenmyyjätilin saldo on liian pieni luotettavaan verkkotunnusten rekisteröintiin tai uusimisten käsittelyyn.

Käsittele tätä ilmoitusta operatiivisena varoituksena: lisää HostAfrica-jälleenmyyjäsaldoa ennen kuin hyväksyt lisää maksullisia verkkotunnusrekisteröintejä, ja palaa sitten Domain Seller -asetuksiin tai verkkotunnusten valvontanäkymään varmistaaksesi, että rekisteröinnit ja uusimiset voivat jatkua normaalisti.

## AI-palveluntarjoajan liitinasetukset

AI-palveluntarjoajan liitinasetukset näyttävät nyt vain tuetut OAuth-tilipoolit:

| Palveluntarjoaja | Määritystyönkulku |
|---|---|
| **Anthropic Max** | Yhdistä yksi tai useampi Anthropic Max -tili OAuth-painikkeella. Käytä manuaalista OAuth-vararatkaisua, kun hiekkalaatikoitu selain ei voi suorittaa uudelleenohjausta automaattisesti. |
| **OpenAI ChatGPT/Codex** | Yhdistä ChatGPT-tilit saman OAuth-poolityönkulun kautta. Liittimen tukemat toiminnot voivat käyttää ChatGPT Codex -työkalukutsuja, kun tili on yhdistetty. |
| **Google AI Pro** | Yhdistä Google AI Pro -tilit OAuthin kautta ja päivitä sitten liitin, jos tililuettelo ei päivity heti. |

Cursor Pro ei ole enää tuettu palveluntarjoaja. Poista vanhat sisäiset kuvakaappaukset, ohjeistot tai perehdytysvaiheet, joissa mainitaan Cursor Pro -määrityskentät tai liitinpolut.

Kun lisäät tai poistat palveluntarjoajan tilejä, syötä päivitettävän tai poistettavan tilin kelvollinen sähköpostiosoite ja tallenna palveluntarjoajan asetukset ennen liittimeen tukeutuvien toimintojen testaamista.
