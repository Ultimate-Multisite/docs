---
title: 'Oppitunti 8: Asiakkaan käyttöönotto'
sidebar_position: 9
_i18n_hash: 5b71133bebf067164c77d33db7c81806
---
# Oppitunti 8: Asiakkaan käyttöönotto

Asiakkaan saaminen rekisteröitymään on vasta puolet työstä. Jos hän kirjautuu sisään, tuntee olonsa kuormittuneeksi eikä koskaan palaa, olet menettänyt hänet. Tässä oppitunnissa suunnitellaan kokemus, joka muuttaa uuden rekisteröitymisen aktiiviseksi ja sitoutuneeksi asiakkaaksi.

## Mihin jäimme

FitSite on täysin brändätty, ja sillä on toimiva kassaprosessi. Nyt keskitymme siihen, mitä tapahtuu sen jälkeen, kun kuntostudion omistaja viimeistelee rekisteröitymisen ja saapuu uudelle sivustolleen ensimmäistä kertaa.

## Miksi käyttöönotolla on merkitystä

Ensimmäiset 30 minuuttia rekisteröitymisen jälkeen ratkaisevat, jääkö asiakas vai poistuuko hän. Kuntostudion omistaja, joka:

- Kirjautuu sisään ja näkee sivuston, joka näyttää jo kuntosivustolta → jää
- Tietää täsmälleen, mitä tehdä seuraavaksi → jää
- Tuntee olonsa eksyneeksi yleisessä WordPress Dashboardissa → lähtee

Kohderyhmäkohtaiset mallisi (Oppitunti 4) hoitavat ensimmäisen kohdan. Tämä oppitunti hoitaa toisen.

## Ensimmäisen kirjautumisen kokemus

### Tervetuloa-Dashboard-widget

Luo mukautettu Dashboard-widget, joka tervehtii uusia asiakkaita ja ohjaa heidät asetusten läpi. Sen tulisi näkyä selvästi, kun he kirjautuvat sisään ensimmäisen kerran.

**FitSite-pika-aloitus:**

1. **Lisää studiosi nimi ja logo** -- Linkki Customizeriin tai Site Identity -asetuksiin
2. **Päivitä tuntiaikataulusi** -- Linkki suoraan Tunnit-sivun editoriin
3. **Lisää valmentajasi** -- Linkki Valmentajat-sivun editoriin
4. **Aseta yhteystietosi** -- Linkki Yhteystiedot-sivun editoriin
5. **Esikatsele sivustoasi** -- Linkki julkiseen näkymään

Jokainen vaihe linkittää suoraan asiaankuuluvalle sivulle tai asetukseen. Ei valikoiden läpikäymistä etsimällä.

### Yksinkertaista Dashboard

Uusien asiakkaiden ei tarvitse nähdä jokaista WordPress-valikkokohtaa. Harkitse:

- Sellaisten valikkokohtien piilottamista, jotka eivät ole olennaisia kuntosivuston hallinnassa (esim. Kommentit, jos niitä ei käytetä)
- Valikon järjestämistä uudelleen niin, että eniten käytetyt kohdat ovat ensin
- Mukautettujen valikkotekstien lisäämistä niin, että ne sopivat kohderyhmään ("Studiosi" eikä "Ulkoasu")

[Plugin & Theme Manager](/addons/plugin-and-theme-manager) -lisäosa voi auttaa hallitsemaan sitä, mitä asiakkaat näkevät.

## Tervetulosähköpostien sarja

Yksi tervetulosähköposti ei riitä. Määritä sarja, joka ohjaa asiakkaita heidän ensimmäisen viikkonsa aikana:

### Sähköposti 1: Tervetuloa (heti rekisteröitymisen jälkeen)

- Aihe: "Tervetuloa FitSiteen -- studiosi verkkosivusto on julkaistu"
- Sisältö: Kirjautumislinkki, pika-aloituksen vaiheet, linkki ohjeresursseihin
- Sävy: Innostunut, kannustava, kuntoteemaan sopiva

### Sähköposti 2: Nopeat onnistumiset (päivä 1)

- Aihe: "3 asiaa, jotka kannattaa tehdä ensin FitSitessäsi"
- Sisältö: Lisää logosi, päivitä etusivun hero-kuva, lisää tuntiaikataulusi
- Sisällytä kuvakaappauksia, jotka näyttävät täsmälleen, mihin klikata

### Sähköposti 3: Tee siitä omasi (päivä 3)

- Aihe: "Tee kuntosivustostasi erottuva"
- Sisältö: Mukauta värejä, lisää valmentajakuvia, kirjoita studiosi tarina
- Linkitä esimerkkeihin alustan hienoista kuntosivustoista

### Sähköposti 4: Julkaise (päivä 7)

- Aihe: "Valmis jakamaan FitSitesi maailmalle?"
- Sisältö: Tarkistuslista siitä, mitä varmistaa ennen jakamista, miten yhdistää mukautettu verkkotunnus (jos Growth/Pro-suunnitelmassa), vinkkejä sosiaaliseen jakamiseen

:::tip Sähköpostiautomaatio
Käytä [Webhooks](/user-guide/integrations/webhooks)- tai [Zapier](/user-guide/integrations/zapier)-integraatiota näiden sähköpostien käynnistämiseen sähköpostimarkkinointialustasi kautta. Tämä antaa sinulle enemmän hallintaa ajoituksesta ja mahdollistaa sitoutumisen seuraamisen.
:::

## Ohjeresurssit

Luo kohderyhmäkohtaista ohjesisältöä, joka vastaa kysymyksiin, joita kuntostudioiden omistajat oikeasti kysyvät:

### Tietopankkiartikkelit

- "Kuinka päivität tuntiaikataulusi"
- "Valmentajaprofiilien lisääminen ja muokkaaminen"
- "Studiosi logon ja värien vaihtaminen"
- "Oman verkkotunnuksen yhdistäminen" (Growth/Pro-asiakkaille)
- "Varauswidgetin lisääminen sivustollesi"

Kirjoita nämä ei-teknisille käyttäjille. Käytä kuvakaappauksia. Vältä WordPress-jargonia.

### Video-opastukset

Lyhyet (2–3 minuutin) näyttötallenteet, jotka näyttävät:

- Ensimmäisen kirjautumisen ja perehdytyksen
- Etusivun muokkaamisen
- Tuntiaikataulun päivittämisen
- Uuden valmentajan lisäämisen

Näiden ei tarvitse olla viimeisteltyjä tuotantoja. Selkeys, hyödyllisyys ja kohderyhmäkohtaisuus ovat tärkeintä.

## Account Page

Ultimate Multisite sisältää asiakasnäkymän [Account Page](/user-guide/client-management/account-page), jossa asiakkaat hallitsevat tilaustaan. Mukauta se niin, että se:

- Näyttää heidän nykyisen FitSite-suunnitelmansa
- Näyttää päivitysvaihtoehdot kuntoteemaan sopivilla hyödyillä
- Tarjoaa laskutushistorian ja laskujen lataukset
- Linkittää ohjeresursseihin

## Käyttöönoton onnistumisen mittaaminen

Seuraa näitä mittareita tietääksesi, toimiiko käyttöönotto:

- **Aktivointiaste**: Kuinka suuri osuus rekisteröityneistä todella mukauttaa sivustoaan ensimmäisen viikon aikana?
- **Ensimmäisen viikon kirjautumiset**: Kuinka monta kertaa uusi asiakas kirjautuu sisään ensimmäisen viikon aikana?
- **Uusien asiakkaiden tukipyynnöt**: Suuri määrä tarkoittaa, että käyttöönotossasi on aukkoja
- **Kokeilusta maksavaksi -konversio**: Jos tarjoat kokeilujaksoja, kuinka suuri osuus siirtyy maksaviksi?

## FitSite-verkosto tähän mennessä

```
FitSite Network
├── WordPress Multisite (subdomain mode)
├── Ultimate Multisite (configured + branded)
├── Platform Domain (fitsite.com + wildcard SSL)
├── Site Templates (Studio Essential, Gym Pro, Fitness Chain)
├── Products (Starter, Growth, Pro + Order Bumps)
├── Checkout Flow (niche-specific, tested)
├── Branding (login, dashboard, emails, invoices, marketing site)
├── Customer Onboarding
│   ├── Quick Start dashboard widget
│   ├── Simplified dashboard for fitness site management
│   ├── 4-email welcome sequence
│   ├── Niche-specific knowledge base
│   ├── Video walkthroughs
│   └── Customized account page
└── Ready for pricing strategy (next lesson)
```

## Mitä rakensimme tässä oppitunnissa

- **Ohjattu ensimmäisen kirjautumisen kokemus**, jossa on Pika-aloitus-widget
- **Yksinkertaistettu Dashboard**, joka keskittyy kuntosivuston hallintatehtäviin
- **Tervetulosähköpostien sarja**, joka ohjaa asiakkaita heidän ensimmäisen viikkonsa aikana
- **Kohderyhmäkohtaiset ohjeresurssit**, jotka on kirjoitettu ei-teknisille kuntostudioiden omistajille
- **Käyttöönoton mittarit**, joilla kokemusta voi seurata ja parantaa

---

**Seuraavaksi:** [Oppitunti 9: Kannattava hinnoittelu](lesson-9-pricing) -- hiomme hinnoittelustrategiaa tuottojen maksimoimiseksi ja vaihtuvuuden minimoimiseksi.
