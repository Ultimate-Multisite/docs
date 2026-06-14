---
title: Sähköpostien ja levitysten lähettäminen
sidebar_position: 11
_i18n_hash: e9ddc461d32299505e4a7a5af491cff6
---
# Sähköpostien ja levitysten lähettäminen (v2)

_**TÄRKEÄ HUOMIO: Tämä artikkeli viittaa Ultimate Multisite -versioon 2.x.**_

Ultimate Multisite sisältää ominaisuuden, jolla voit kommunikoida asiakkaidesi kanssa lähettämällä sähköpostia kohdistetulle käyttäjälle tai käyttäjäryhmälle sekä lähettämällä ilmoituksia heidän hallintapaneelinsa (admin dashboard) kautta levittääksesi tiedotteita.

## Lisää hallintailmoituksia asiakkaiden paneeleihin levitysten avulla

Ultimate Multisite -levitysominaisuutta käyttäen voit lisätä **hallintailmoituksia** käyttäjän aliasteisen sivuston (subsite) hallintapaneeliin.

Tämä on erittäin hyödyllistä, jos sinun tarvitsee tehdä ilmoitusta, kuten järjestelmän ylläpidosta tai uuden tuotteen tai palvelun tarjoamisesta olemassa oleville käyttäjillesi. Näin hallintailmoitus näyttää käyttäjän paneelissa.

<!-- Screenshot unavailable: Hallintailmoitus levityksen näkymä asiakkaan aliasteisen sivuston paneelissa -->

Jotta voit aloittaa hallintailmoituksen luomisen, siirry verkkohallintapaneeliisi ja **Ultimate Multisite** -valikosta löydät **Broadcasts** (Levitykset) -vaihtoehdon.

![Levitysten luettelon sivu Ultimate Multisite -hallintapaneelissa](/img/admin/broadcasts-list.png)

Voit myös muokata olemassa olevia levityksiä:

![Levityksen muokkausliittymä](/img/admin/broadcast-edit.png)

Tästä sivulta klikkaa ylhäällä olevaa **Add Broadcast** (Lisää levitys) -painiketta.

Tämä avaa Add broadcast -modaaliikkunan, jossa voit valita, millaista levitystä haluat lähettää.

Valitse sitten **Message** (Viesti) ja klikkaa **Next Step** (Seuraava askel) -painiketta.

![Add broadcast -modaaliikkuna, jossa Message-vaihtoehto on valittuna](/img/admin/broadcast-add-message.png)

Seuraava ikkuna kysyy sinulta joko **Target customer** (Kohdistettu asiakas) tai **Target product** (Kohdistettu tuote). Huomaa, että voit valita useampaa käyttäjää tai useampaa tuotetta.

Haluatko etsiä käyttäjä tai tuote, sinun täytyy aloittaa kirjoittamalla avainsanaa kenttään.

**Viestityyppi**-kentässä voit valita ilmoituksen värin. Tämä korostaa viestisi kiireellisyyttä.

Voit sitten klikata **Seuraava vaihe**.

![Kohdeasiakkaat, kohde tuote ja viestityyppi -kentät viestin lähettämiseen](/img/admin/broadcast-message-targets.png)

Seuraava ikkuna on paikka, josta voit aloittaa viestisi laatimisen syöttämällä aiheen ja sisällön/viestin, jonka haluat lähettää käyttäjille.

![Lähetysaihe ja sisällön muokkaus lähetysvaiheessa](/img/admin/broadcast-edit.png)

Viestin luomisen jälkeen voit painaa **Lähetä**-painiketta.

Ja niin, se on valmis. Ylläpitäjäilmoitus näkyy heti käyttäjän hallintapaneelissa.

## Lähetä sähköposteja asiakkaille

Ultimate Multisite -lähetysominaisuutta käyttäen voit lähettää sähköpostia käyttäjillesi. Sinulla on vaihtoehto lähettää sähköpostin vain tiettyihin käyttäjiin tai kohdistaa sen tietyn käyttäjäryhmän tuotteen tai suunnitelman perusteella, jota he ovat tilaajina.

Sähköpostilähetystä aloittaaksesi siirry verkkoasi hallintapaneeliin ja Ultimate Multisite -valikosta löydät Lähetys (Broadcast) -vaihtoehdon.

![Lähetysten lista sähköpostilähetystä aloittamiseksi](/img/admin/broadcasts-list.png)

Tästä sivulta klikkaa yläreunassa **Lisää lähetys** (Add broadcast) -painiketta.

Tämä avaa Lisää lähetys -modaaliikkunan, josta voit valita, millaista lähetystä haluat lähettää. Valitse sitten **Sähköposti** (Email) ja klikkaa **Seuraava vaihe** (Next Step) -painiketta.

![Lisää lähetys -modaali ikkuna sähköpostivaihtoehto valittuna](/img/admin/broadcast-add-email.png)

Seuraava ikkuna kysyy sinulta joko **Kohdeasiakas** (Target customer) tai **Kohde tuote** (Target product). Huomaa, että voit valita useampia käyttäjiä tai useampia tuotteita.

Haluatko etsiä käyttäjä tai tuote, sinun täytyy aloittaa kirjoittamalla avainsanaa kenttään.

Kun olet valinnut kohdeyleisösi ja kohde tuotteesi, voit klikata **Seuraava vaihe**.

![Kohdeyleisten ja kohdetuotteiden valinta sähköpostin lähetykselle](/img/admin/broadcast-email-targets.png)

Seuraava ikkuna on paikka, josta voit aloittaa sähköpostisi luomisen syöttämällä aiheen ja sisällön/viestin, jonka haluat lähettää käyttäjille.

<!-- Screenshot unavailable: Sähköpostin lähetysaihe ja -sisältöeditori luomisvaiheessa -->

Viestisi luomisen jälkeen voit painaa **Lähetä**-painiketta.

Näin helppoa on lähettää sähköpostia loppukäyttäjille lähetysominaisuuden avulla.

## Järjestelmän sähköpostit (System emails)

Ultimate Multisite -järjestelmässä järjestelmän sähköpostit ovat niitä **automaattisia ilmoituksia**, jotka järjestelmä lähettää tiettyjen toimintojen jälkeen, kuten rekisteröitymisen, maksun tai verkkotunnuksen kartoituksen jälkeen. Näitä sähköposteja voi muokata tai muuttaa Ultimate Multisite -asetuksista. Se sisältää myös ominaisuuden, jolla voit nollata ja tuoda olemassa olevia asetuksia toisesta Ultimate Multisite -asennuksesta.

### Asetusten nollaaminen ja tuominen sisään (Resetting & Importing)

Uusissa Ultimate Multisite -versioissa sekä lisäosissa voi olla uusia sähköposteja ajoittain.

Konfliktien ja muiden ongelmien välttämiseksi **emme lisää uusia sähköpostimalleja järjestelmän sähköposteiksi asennuksesi automaattisesti**, ellei ne ole kriittisiä tietyn ominaisuuden oikean toiminnan kannalta.

Kuitenkin superadminit ja agentit voivat tuoda nämä uudet rekisteröityneet sähköpostit importer-työkalun avulla. Tämä prosessi luo uuden järjestelmän sähköpostin, jossa on uuden mallin sisältö ja konfiguraatio, jolloin superadmini voi tehdä haluamiaan muutoksia tai pitää ne sellaisina.

#### Järjestelmän sähköpostien tuominen sisään (How to import system emails)

Siir Ultimate Multisite -asetuksiin ja mene **Emails**-välilehdelle.

![Emails tab in Ultimate Multisite settings showing the System Emails section](/img/config/settings-emails-tab.png)

Sivupalkista klikkaa sitten painiketta **Customize System Emails**.

<!-- Screenshot unavailable: Customize System Emails button on the System Emails sidebar panel -->

System Emails -sivulla näet ylhäällä toiminnon **Reset & Import** (Nollaa ja tuo) painikkeen. Klikkaamalla sitä avautuu importointi- ja nollausikkuna.

![Reset or Import action button on the System Emails admin page](/img/admin/system-emails-reset-import.png)

Tämän jälkeen voit vaihtaa **Import Emails** -asetuksia nähdäksesi, mitkä järjestelmän sähköpostit ovat saatavilla tuomiseen.

<!-- Screenshot unavailable: Reset and Import modal with the Import Emails options expanded -->

#### System Emails -asetusten nollaaminen (Reseting System Emails)

Muissa tilanteissa huomaat, että tekemäsi muutokset tiettyyn sähköpostimalleihin eivät enää toimi ja haluat palauttaa ne **oletusasetuksiin**.

Tällöin sinulla on kaksi vaihtoehtoa: voit yksinkertaisesti poistaa järjestelmän sähköpostin ja tuoda sen takaisin (käyttäen yllä olevia ohjeita) – tämä poistaa lähetysmittarit ja muut asiat, mikä tekee tästä menetelmästä vähemmän suositun.

Tai voit käyttää **Reset & Import** -työkalua sähköpostimalleja nollaamiseen.

Säätääksesi sähköpostimalleja nollaamista varten, voit seurata yllä olevia vaiheita, kunnes pääset Reset & Import -työkaluun, ja sitten aktivoit **Reset** (Nollaa) -vaihtoehdon ja valitset ne sähköpostit, joita haluat palauttaa oletussisältöön.

<!-- Screenshot unavailable: Reset and Import modal with the Reset Emails options expanded -->
