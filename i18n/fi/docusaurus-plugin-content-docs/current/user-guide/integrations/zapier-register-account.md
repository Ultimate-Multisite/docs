---
title: Rekisteröi tili Zapierin kautta
sidebar_position: 1
_i18n_hash: f452b2407a1eee1d88505abe1cff8f9e
---
# Tapahtuma: Rekisteri käyttäjä Zapierillä {#event-register-an-account-via-zapier}

Artikkelissa [Integrating Ultimate Multisite with Zapier](zapier.md) kävimme läpi, miten voit käyttää Zapieriä suorittamaan erilaisia toimintoja Ultimate Multisite -alustalla laukaisimien ja tapahtumien perusteella. Tässä artikkelissa näyttämme sinulle, kuinka voit integroida kolmannen osapuolen sovelluksia. Käytämme Google Sheetsiä datan lähteenä ja lähetämme tiedot Ultimate Multisiteen käyttäjän rekisteröintiin.

Ennen Zapierin yhdistämistä siirry **Ultimate Multisite > Settings > API & Webhooks** -osioon ja varmista, että API on käytössä. Kopioi API-avaimen (API Key) ja API-salaisuuden (API Secret) näytöltä, kun Zapier pyytää Ultimate Multisite-tilin tunnuksia.

![API and Webhooks settings with API Key, API Secret, and Enable API options](/img/admin/settings-api-webhooks.png)

Ensin sinun täytyy luoda **Google Sheet** Google Driveessasi. Varmista, että määrität jokaisen sarakkeen oikein, jotta voit myöhemmin yhdistää datan helposti.

Kun olet luonut Google Sheetin, voit kirjautua Zapier-tilillesi ja aloittaa zapin luomisen.

**"App event"** -hakukentän alta valitse **"Google Sheets"**.

Sitten **"Event"** -kenttään valitse **"New spreadsheet row"** (Uusi taulukkorivi) ja paina **"Continue"** (Jatka).

Seuraava vaihe pyytää sinua valitsemaan **Google Accountin**, johon Google Sheet on tallennettu. Varmista siis vain, että oikea Google-tili on määritetty.

**"Set up trigger"** -osion alta sinun täytyy valita ja määrittää se Google Sheet ja taulukko (worksheet), jota käytät datan lähteena. Jatka täyttämällä tiedot ja painamalla **"Continue"**.

Seuraavaksi on **"test your trigger"** (testaa laukaisinta) varmistaaksesi, että Google Sheetsi on oikein yhdistetty.

Jos testisi onnistuu, näet tuloksena arvoja jo jostakin taulukostasi. Paina **"Continue"** jatkaaksesi.

Seuraava askel on asettaminen toiseksi toiminnaksi, joka luo tai rekisteröi tilin Ultimate Multisite -järjestelmään. Hakukentässä valitse "**Ultimate Multisite(2.0.2)** ".

"Event" (Tapahtuma) -kentän alla valitse "**Register an Account in Ultimate Multisite** " ja napsauta sitten "**Continue** " (Jatka) -painiketta.

"Set up an action" (Toiminnon asettaminen) -kohdassa näet erilaisia kenttiä asiakastietoihin, jäsenyyksiin, tuotteisiin jne. Voit yhdistää arvoja Google Sheetistäsi ja määrittää niitä oikeaan kenttään, johon ne tulisi täyttää, kuten kuvakaappauksessa näkyy.

Arvojen yhdistämisen jälkeen voit testata toimintoa.
