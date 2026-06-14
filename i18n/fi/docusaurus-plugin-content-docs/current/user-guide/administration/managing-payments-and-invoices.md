---
title: Maksut ja laskujen hallinta
sidebar_position: 15
_i18n_hash: 1aefdd4ebf84e2eda188b3d28ce18e36
---
# Maksujen ja laskujen hallinta

## Maksun asetukset

En aloittaaksesi maksujen vastaanottamisen tarvitset määrittää maksuiin liittyvät asetukset. Siirry **Ultimate Multisite → Asetukset** -sivulle ja napsauta **Maksut**-välilehteä.

![Payment settings tab](/img/admin/settings-payments-top.png)

Tässä on koko maksuasetusten sivu:

![Payment settings full page](/img/admin/settings-payments-full.png)

### Yleiset maksutiedot

Yleisissä asetuksissa voit määrittää:

- **Valuutta** — Oletusvaluutta, jota käytetään transaktioissa
- **Valuutan sijainti** — Missä valuuttasymboli näkyy (summan ennen/jälkeen)

![Payment gateway settings](/img/admin/settings-payments-options.png)

### Maksukalvojen hallinta

Ultimate Multisite tukee useita maksukalvoja. Voit aktivoida ja määrittää kunkin niistä maksun asetusten välilehdeltä.

![Payment gateway configuration](/img/admin/settings-payments-gateways.png)

Saatavilla olevat kalvot ovat:

- **Stripe** — Luottokorttimaksut Stripe-palveluiden kautta
- **PayPal** — PayPal-maksut
- **Manuaalinen** — Offline- tai räätälöity maksujen käsittelyyn

Jokaisella kalvolla on oma konfiguraatioseenä, johon syötät API-avaimet ja muut asetukset.

![Additional gateway settings](/img/admin/settings-payments-gateways-2.png)

### Sandbox-tila

Voit aktivoida **Sandbox-tilassa** testataksesi maksun integroinnin ennen live-käyttöä. Kun sandbox-tila on aktiivinen, ei tehdä todellisia veloituksia.

## Maksujen katselu

Siirry Ultimate Multisite -sivuston alta olevaan **Maksut**-sivulle nähdäksesi kaikki transaktiot verkostossasi.

![Payments list](/img/admin/payments-list.png)

Voit suodattaa maksuja tilan mukaan (valmis, odottava, epäonnistunut, palautettu) ja etsiä tiettyjä transaktioita hakutoiminnolla.

Napsauta maksua nähdäksesi sen koko tiedot, mukaan lukien tuotteet, liittyvät jäsenyydet, asiakestiedot ja maksuportaalin tiedot.

## Laskut

Ultimate Multisite voi luoda laskuja automaattisesti maksuista. Voit muokata laskun mallia ja numeroinnin tapaa Maksuasetuksista.

Laskun mukauttamisvaihtoehdot ovat:

- **Yrityksen nimi ja osoite** näytettävä laskuissa
- **Laskun numeroinnin** muoto ja järjestys
- **Logo** näytettävä laskun yläosassa
- **Mukautettu alatunnisteen teksti** ehdoille, huomautuksille tai oikeudellisiin tietoihin

Laskun mallin muokkaamiseksi siirry kohtaan **Ultimate Multisite → Asetukset → Maksu** ja etsi laskuihin liittyvät asetukset.
