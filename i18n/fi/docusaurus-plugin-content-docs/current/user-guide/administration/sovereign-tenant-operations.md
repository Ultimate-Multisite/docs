---
title: Suvereenin vuokralaisen toiminnot
sidebar_position: 15
_i18n_hash: bcde2032a685b60e17f1944b5b588f25
---
# Suvereenisten vuokralaisoperaatiot

Ultimate Multisite: Multi-Tenancy 1.2.0 tuo operatiivista työkaluja suvereenisille vuokralaisille: alialueille (subsites), jotka toimivat omalla tietokannallaan, tiedostonjuurilla ja reitityskontekstilla, mutta pysyvät näkyvissä verkko-adminilta.

Käytä tätä sivua kun hallinnoit eristettyjä asiakastiloja, etäisyyksien siirtoja tai migraatioita, joissa standardi alialue siirretään suvereeniseen infrastruktuuriin.

## Mitkä muutokset ylläpitäjille {#what-changes-for-administrators}

- **Tilattomalla vuokralaisautentikoinnilla** — Verkko-adminit voivat vierailla suvereenisessa vuokrailaisessa ilman riippuvuutta pitkäikäisestä ja jaetusta istuntatilasta. SSO-token on tarkoitukseen rajattu, lähderajattu (origin-pinned), toistettavuuden suojaama ja rajoitettu lyhyen vanhentumisaikajan mukaisesti.
- **Suvereenilla tietoisella reitityksellä** — Vanhat eristetty verkostot ja suvereeniset vuokralaiset ratkeavat samalla sivustoreitityspolulla, mikä vähentää aloituseroja vanhojen ja uusien eristettyjen asennusten välillä.
- **Vahvistettu migraatiotila** — Migraation vahvistus tarkistaa käyttäjän tarjonnan, tietokannan kirjoitusoikeudet, jonojen tyhjennysstatus ja vanhan taulukon puuttuminen ennen kuin vuokralainen pidetään kokonaiseksi.
- **Turvallisempi poisto** — Suvereenisen poiston avulla vuokralais tunnukset poistetaan siististi, jotta poistetut vuokralaiset eivät jätä jälkeensä vanhentuneita tietokantayhteyksiä.

## Suvereenisen vuokrailaisen vieraileminen {#visiting-a-sovereign-tenant}

1. Avaa **Network Admin > Ultimate Multisite > Sites**.
2. Valitse suvereeninen vuokralainen.
3. Käytä **Visit (SSO)**, jos se on saatavilla, sen sijaan että kopioisit salasanoja tai luotaisit väliaikaisia ylläpitotilejä.

Vierailemisen prosessi luo lyhytaikaisen kirjautumistokennin kyseiselle vuokralaiselle ja tallentaa SSO-tapahtuman vuokralaisen auditointijäljelle. Jos painike epäonnistuu, tarkista, että vuokralaisen domeeni ratkeaa odotetulle asennukselle ja että vuokralainen pystyy tavoittamaan verkko-puolen SSO-päätepisteen.

## Etäisyyksien operaatiochecklisti {#remote-site-operations-checklist}

Ennen suvereenisen tai etäisen vuokralaisen muuttamista varmista:

Kaikki omistajien nimet osoittavat isäntään, joka omistaa vuokralaisen tiedostonjärjestelmän.
Vuokralaisen tietokantayhtiön isäntä vastaa kyseisen asennuksen määritellystä isännän sitoutumisasetuksesta.
Migraatiotarkistuskomennot läpäisevät vuokralaisen kohdalla.
Asynkroniset migraatiojonot tyhjennetään ennen DNS- tai omistajuuden muutosten tekemistä.
Vuokralaisen ylläpitäjäkäyttäjää on luotu migraation aikana ja hän voi kirjautua sisään SSO:n kautta.

## Suvereenisten vuokralaisdomainien poistaminen {#deleting-sovereign-tenants}

Suvereenisen vuokralaisen poistaminen on tuhoavaa. Varmista ensin varmuuskopio- ja vientitilanne, sitten poista sivuston hallintapaneelista. Versiosta 1.2.0 poistoprosessi poistaa vuokralaisen tietokantakäyttäjät siivousvaiheen osana, mutta ylläpitäjien tulisi silti varmistaa, että isäntätason tietokantakäyttäjät ja -kansiot ovat poissa käytöstä, kun käytetään ulkoisia isännöintapaneeleja.

:::warning
Älä poista suvereenista vuokralaisdomainia, kun migraatiotarkistus on vielä käynnissä tai asynkroniset push-työt ovat jonossa. Odota varmistuksen valmistumista, jotta poisto ei poista käyttäjätunnuksia, joita odottavat työt tarvitsevat.
:::
