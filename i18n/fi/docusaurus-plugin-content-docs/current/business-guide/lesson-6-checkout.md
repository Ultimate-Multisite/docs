---
title: 'Oppitunti 6: Rekisteröitymiskokemus'
sidebar_position: 7
_i18n_hash: a5c16cdd9b4e53a69e138df7bb042411
---
# Oppitunti 6: Rekisteröitymiskokemus

Kassaprosessi on kohta, jossa kiinnostus muuttuu tuotoksi. Sekava tai geneerinen rekisteröitymisprosessi menettää asiakkaita. Niche-kohtainen prosessi, joka puhuu heidän kieltään ja tuntuu vaivattomalta, konvertoi heidät.

## Mihin jäimme {#where-we-left-off}

FitSitelle on määritetty mallipohjat ja paketit. Nyt rakennamme rekisteröitymis- ja kassakokemuksen, joka muuttaa fitness-studioiden omistajat maksaviksi asiakkaiksi.

## Rekisteröitymisprosessin ymmärtäminen {#understanding-the-registration-flow}

Ultimate Multisite:n kassalomakkeet ovat täysin mukautettavia monivaiheisia lomakkeita. FitSitelle haluamme prosessin, joka:

1. Tuntuu siltä kuin se olisi rakennettu fitness-yrityksille
2. Kerää vain tarvittavat tiedot
3. Vie asiakkaan toimivaan sivustoon mahdollisimman nopeasti

Katso täydellinen tekninen viite kohdasta [Rekisteröitymisprosessi](/user-guide/configuration/the-registration-flow).

## FitSite-kassan suunnittelu {#designing-the-fitsite-checkout}

Siirry kohtaan **Ultimate Multisite > Kassalomakkeet** ja luo uusi lomake.

### Vaihe 1: Paketin valinta {#step-1-plan-selection}

Ensimmäisen asian, jonka fitness-studion omistaja näkee, tulisi olla paketit esitettyinä termeillä, jotka hän ymmärtää.

- Lisää **Hinnoittelutaulukko**-kenttä
- Määritä se näyttämään kaikki kolme FitSite-pakettia
- Oppitunnilla 5 kirjoittamasi pakettikuvaukset näkyvät tässä -- varmista, että ne puhuvat fitness-yritysten tarpeista, eivät teknisistä ominaisuuksista

:::tip Niche Language Matters
"1 GB storage" means nothing to a gym owner. "Everything you need for a professional studio website" means everything. Write plan descriptions in your customer's language.
:::

### Vaihe 2: Mallipohjan valinta {#step-2-template-selection}

Paketin valinnan jälkeen asiakas valitsee aloitusmallipohjansa.

- Lisää **Mallipohjan valinta**-kenttä
- Saatavilla olevat mallipohjat suodatetaan asiakkaan valitseman paketin perusteella (määritetty oppitunnilla 5)
- Jokaisella mallipohjalla tulisi olla esikatselukuva, joka näyttää fitness-kohtaisen designin

### Vaihe 3: Accountin luonti {#step-3-account-creation}

Pidä tämä mahdollisimman yksinkertaisena. Kerää vain:

- Sähköpostiosoite
- Salasana
- Studion/yrityksen nimi (tästä tulee heidän sivustonsa nimi)

Älä kysy tietoja, joita et tarvitse rekisteröitymisessä. Jokainen ylimääräinen kenttä vähentää konversioita.

### Vaihe 4: Sivuston määritys {#step-4-site-setup}

- **Sivuston otsikko**: Esitäytä vaiheessa 3 annetulla studion nimellä
- **Sivuston URL**: Luo automaattisesti studion nimestä (esim. `ironworks.fitsite.com`)

### Vaihe 5: Maksu {#step-5-payment}

- Lisää **Maksu**-kenttä
- Määritä maksuvälittäjäsi ([Stripe](/user-guide/payment-gateways/stripe) on suositeltava tilauslaskutukseen)
- Jos loit tilauslisäyksiä oppitunnilla 5, lisää **Tilauslisäys**-kenttä ennen maksuvaihetta

### Vaihe 6: Vahvistus {#step-6-confirmation}

- Mukauta vahvistusviesti fitness-kohtaisella kielellä
- Esimerkki: "Fitness-studiosi verkkosivustoa luodaan. Sinut ohjataan uudelle sivustollesi muutaman sekunnin kuluttua."

## Laskutuskauden valintakytkimen lisääminen {#adding-a-period-selection-toggle}

Jos määritit paketteihisi hintavaihteluita (kuukausittainen vs. vuosittainen), lisää kassalomakkeeseen **Laskutuskauden valinta**-kenttä, jotta asiakkaat voivat vaihtaa laskutuskausien välillä. Katso ohjeet kohdasta [Kassalomakkeet](/user-guide/configuration/checkout-forms#adding-a-period-selection-toggle).

## Maksun määrittäminen {#configuring-payment}

Jos et ole vielä määrittänyt maksuvälittäjää:

1. Siirry kohtaan **Ultimate Multisite > Asetukset > Maksuvälittäjät**
2. Noudata [Stripe-määritysopasta](/user-guide/payment-gateways/stripe) tai valitsemaasi maksuvälittäjää koskevia ohjeita
3. Testaa koko kassaprosessi testimaksulla

Katso lisätietoja siitä, miten maksut kulkevat tilillesi, kohdasta [Maksujen vastaanottaminen](/user-guide/payment-gateways/getting-paid).

## Prosessin testaaminen {#testing-the-flow}

Ennen kuin jatkat, suorita täydellinen testirekisteröityminen:

1. Avaa kassalomake incognito-/yksityisessä selainikkunassa
2. Valitse paketti
3. Valitse mallipohja
4. Luo Account
5. Suorita maksu (käytä testitilaa)
6. Varmista, että sivusto luodaan oikealla mallipohjalla

Tarkista, että:

- [ ] Pakettikuvaukset ovat selkeitä ja niche-kohtaisia
- [ ] Mallipohjien esikatselut näyttävät fitnessiin sopivia designeja
- [ ] Sivuston URL muodostuu oikein studion nimestä
- [ ] Maksu käsitellään onnistuneesti
- [ ] Asiakas päätyy toimivalle sivustolle, jossa on valittu mallipohja
- [ ] Vahvistussähköpostit käyttävät fitness-kohtaista kieltä

## FitSite-verkosto tähän mennessä {#the-fitsite-network-so-far}

```
FitSite Network
├── WordPress Multisite (subdomain mode)
├── Ultimate Multisite (configured)
├── Hosting with wildcard SSL + domain mapping
├── Site Templates (Studio Essential, Gym Pro, Fitness Chain)
├── Products (Starter, Growth, Pro + Order Bumps)
├── Checkout Flow
│   ├── Plan selection with niche-specific descriptions
│   ├── Template selection with fitness previews
│   ├── Minimal account creation
│   ├── Payment via Stripe
│   └── Fitness-specific confirmation
└── Ready for branding (next lesson)
```

## Mitä rakensimme tällä oppitunnilla {#what-we-built-this-lesson}

- **Monivaiheinen kassalomake**, joka on räätälöity fitness-studioiden omistajille
- **Niche-kohtainen kieli** koko rekisteröitymisprosessissa
- **Mahdollisimman vähän kitkaa** -- vain olennaiset kentät, nopea polku toimivaan sivustoon
- **Maksuintegraatio** testivarmennuksella
- **Testattu alusta loppuun -prosessi** paketin valinnasta toimivaan sivustoon

---

**Seuraavaksi:** [Oppitunti 7: Tee siitä omasi](lesson-7-branding) -- white-labeloimme alustan ja vakiinnutamme FitSiten brändiksi.
