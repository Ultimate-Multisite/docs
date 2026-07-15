---
title: PayPalin asennus
sidebar_position: 10
_i18n_hash: 894ca1f2ca4ca589f3ef49c131e330d5
---
# PayPal-portaalivayksen asennus (v2)

_**TÄRKEÄ HUOMIO: Tämä artikkeli viittaa Ultimate Multisite -versioon 2.x.**_

Voit aktivoida jopa neljä maksutapaa maksun asetussivullasi: Stripe, Stripe Checkout, PayPal ja Manuaalinen. Tässä artikkelissa katsomme, miten integroidaan **PayPal**-järjestelmään.

Aivan kuten Stripe, PayPal on laajalti käytetty verkossa tapahtuvaan maksuun, erityisesti WordPress-sivustoilla. Tämä artikkeli ohjaa sinut siihen, kuinka käyttää PayPali maksutapaa saatavina verkkoyhteydessäsi.

Huomaa, että tarvitset **PayPal Business -tilin** saadaksesi API-tunnisteen, jota tarvitaan tähän integraatioon.

## PayPalin aktivoiminen verkostossasi {#enabling-paypal-on-your-network}

Jotta voit aktivoida PayPali saatavaksi maksutavaksi verkkoyhteydessäsi, siirry kohtaan **Ultimate Multisite > Asetukset > Maksut** ja valitse ruutu PayPalin vieressä.

![PayPalin aktivoiminen aktiivisissa maksuportaaleissa](/img/config/settings-payment-gateways.png)

## Ohjattu asennuswizardin käyttö {#using-the-guided-setup-wizard}

Ultimate Multisite 2.10.0 lisää ohjatun PayPal-asennuswizardin maksuportaalin asetuksiin. Kun olet aktivoimassa PayPaliä, käytä wizardia kohtaa **Ultimate Multisite > Asetukset > Maksut** valitaksesi, miten haluat yhdistää portailun ja vahvistaaksesi, mitä tunnisteita tarvitaan ennen tallennusta.

Wizard tukee kahta asennuspolkua:

* **Manuaan tunnisteiden syöttäminen**: Käytä tätä polkua, jos sinulla on jo PayPalin API-tunnisteet, kun OAuth-asetusta ei ole saatavilla tilillesi tai jos haluat kopioida tunnisteet itse PayPalista. Syötä API Username, API Password ja API Signature PayPal-kenttiin ja tallenna sitten maksutiedot.
* **OAuth-yhteysportti**: Käytä tätä polkua vain silloin, kun OAuth-vaihtoehto on saatavilla ja käytössä asennuksessasi. Ohjelma näyttää OAuth-virran feature flagin takana, joten verkkojen, joissa ei ole flagia, jatkavat manuaalisen tunnisteiden syöttökenttien käyttöä.

Jos et näe OAuth-vaihtoehtoa ohjelmassa, suorita alla olevan manuaalisen tunnisteiden syöttöprosessin. Portti toimii samoilla PayPal Business API -tunnisteilla kuin aiemmissa Ultimate Multisite 2.x -versioissa.

## PayPal-API-tunnisteiden hankkiminen {#getting-the-paypal-api-credentials}

Kun olet aktivoitunut maksukeskuksena PayPalissa, sinun on täytettävä kentät PayPalin API **Username**, PayPalin API **Password** ja PayPalin API **Signature**.

Voit saada nämä kirjautumalla sisään PayPal-tilillesi [Live](https://www.paypal.com/home) tai [Sandbox](https://www.sandbox.paypal.com/home).

(Muista, että voit käyttää **sandbox-tilaa** maksutestaukseen ja nähdä, onko portti asetettu oikein. Vaihda vain vastaava osio päälle.)

![PayPal API credentials fields and sandbox mode toggle](/img/config/settings-payment-gateways.png)

API-tunnisteiden tai sertifikaattitunnisteiden pyytämiseksi PayPal-tilillesi:

  1. Siirry [Account Settings](https://www.paypal.com/businessmanage/account/accountAccess) -sivulle.

  2. **API access** -osiossa napsauta **Update**.
![PayPal Account Settings with API access section](/img/config/settings-payment-gateways.png)

3. **NVP/SOAP API -integraatio (Classic)** -kohdasta klikkaa **Manage API credentials**.
![PayPal NVP/SOAP API integration Manage API credentials](/img/config/settings-payment-gateways.png)

     * Jos sinulla on jo luotu API Signature tai sertifikaatti, sinut ohjataan sivulle, josta voit löytää tunnuksesi.

     * _**Huomautus:** Jos sinulta pyydetään vahvistamaan PayPal-tiliasi, noudata näytöllä olevia ohjeita._

  4. Valitse **yksi** seuraavista vaihtoehdoista ja klikkaa **Agree and Submit**.

     * **Request API Signature** – Valitse API Signature -autentikointia varten.

     * **Request API Certificate** – Valitse API Certificate -autentikointia varten.

  5. PayPal luo sinulle API-tunnisteet seuraavasti:
![PayPal generated API credentials](/img/config/settings-payment-gateways.png)

     * **API Signature -tunnisteet** sisältävät API Username, API Password ja Signaturin, joka ei vanhene. Nämä arvot on piilotettu oletuksena lisäturvallisuuden vuoksi. Klikkaa **Show/Hide** (Näytä/Piilota) niiden kytkeäksesi ne päälle tai pois päältä. Kun olet valmis, klikkaa **Done**.

     * **API Certificate -tunnisteet** sisältävät API Username, API Password ja Sertifikaatin, joka vanhenee automaattisesti kolmen vuoden kuluttua. Klikkaa **Download Certificate** (Lataa sertifikaatti) tallentaaksesi API-Sertifikaatin työpöydällesi.

Tämä on valmis! PayPal-maksuintegraatio on suoritettu!

Jos sinulla on kysyttävää PayPal-asetuksista, voit viitata PayPalin [Help Center](https://www.paypal.com/br/smarthelp/home).
