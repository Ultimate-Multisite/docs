---
title: Sähköpostien ja joukkolähetysten lähettäminen
sidebar_position: 11
_i18n_hash: 0563b0c364cc014990c7066b8251ba36
---
# Sähköpostien ja lähetysten lähettäminen (v2) {#sending-emails-and-broadcasts-v2}

_**TÄRKEÄ HUOMAUTUS: Tämä artikkeli koskee Ultimate Multisite -versiota 2.x.**_

Ultimate Multisite sisältää ominaisuuden, jonka avulla voit viestiä asiakkaidesi kanssa lähettämällä sähköpostin kohdennetulle käyttäjälle tai käyttäjäryhmälle sekä lähettää ilmoituksia heidän ylläpidon Dashboardiin tiedotteiden julkaisemiseksi

## Lisää ylläpitoilmoituksia asiakkaidesi Dashboardiin Broadcasts-toiminnolla {#add-admin-notices-to-your-customers-dashboard-with-broadcasts}

Ultimate Multisite -lähetysominaisuuden avulla voit lisätä **ylläpitoilmoituksia** käyttäjäsi alisivuston ylläpidon Dashboardiin.

Tämä on erittäin hyödyllistä, jos sinun täytyy tehdä tiedote esimerkiksi järjestelmähuollosta tai tarjota uusia tuotteita tai palveluja nykyisille käyttäjillesi. Tältä ylläpitoilmoitus näyttää käyttäjäsi Dashboardissa.

<!-- Kuvakaappaus ei saatavilla: Ylläpitoilmoituslähetys näkyy asiakkaan alisivuston Dashboardissa -->

Aloita ylläpitoilmoitus siirtymällä verkon ylläpidon Dashboardiin, ja **Ultimate Multisite** -valikon alta löydät **Broadcasts**-vaihtoehdon.

![Broadcasts-luettelosivu Ultimate Multisite -ylläpidossa](/img/admin/broadcasts-list.png)

Voit myös muokata olemassa olevia lähetyksiä:

![Lähetyksen muokkausnäkymä](/img/admin/broadcast-edit.png)

Napsauta tältä sivulta ylhäällä olevaa **Add Broadcast** -painiketta.

Tämä avaa Add broadcast -modaali-ikkunan, jossa voit valita, minkä tyyppisen lähetyksen haluat lähettää.

Valitse **Message** ja napsauta sitten **Next Step** -painiketta.

![Add broadcast -modaali, jossa Message-vaihtoehto on valittuna](/img/admin/broadcast-add-message.png)

Seuraava ikkuna kysyy joko **Target customer**- tai **Target product** -kohdetta. Huomaa, että voit valita useamman kuin yhden käyttäjän tai useamman kuin yhden tuotteen.

Hakeaksesi joko käyttäjätiliä tai tuotetta sinun täytyy alkaa kirjoittaa avainsanaa kenttään.

**Message type** -kentässä voit valita ilmoituksen värin. Tämä korostaa viestisi kiireellisyyttä.

Voit sitten napsauttaa **Next Step**.

![Kohdeasiakkaat, kohdetuote ja viestityypin kentät Message-lähetystä varten](/img/admin/broadcast-message-targets.png)

Seuraavassa ikkunassa voit alkaa laatia viestiäsi syöttämällä aiheen ja sisällön/viestin, jonka haluat lähettää käyttäjille.

![Lähetysviestin aihe- ja sisältöeditori laatimisvaiheessa](/img/admin/broadcast-edit.png)

Kun olet luonut viestisi, voit painaa **Send**-painiketta.

Siinä kaikki. Ylläpitoilmoituksen pitäisi näkyä heti käyttäjäsi Dashboardissa.

## Lähetä sähköposteja asiakkaillesi {#send-emails-to-your-customers}

Ultimate Multisite -lähetysominaisuuden avulla voit lähettää sähköpostin käyttäjillesi. Voit lähettää sähköpostin vain tietyille käyttäjille tai kohdentaa tietyn käyttäjäryhmän sen tuotteen tai paketin perusteella, jonka alle he ovat tilanneet.

Aloita sähköpostilähetys siirtymällä verkon ylläpidon Dashboardiin, ja Ultimate Multisite -valikon alta löydät Broadcast-vaihtoehdon.

![Broadcasts-luettelosivu, jota käytetään sähköpostilähetyksen aloituspisteenä](/img/admin/broadcasts-list.png)

Napsauta tältä sivulta ylhäällä olevaa **Add broadcast** -painiketta.

Tämä avaa Add broadcast -modaali-ikkunan, jossa voit valita, minkä tyyppisen lähetyksen haluat lähettää. Valitse **Email** ja napsauta sitten **Next Step** -painiketta.

![Add broadcast -modaali, jossa Email-vaihtoehto on valittuna](/img/admin/broadcast-add-email.png)

Seuraava ikkuna kysyy joko **Target customer**- tai **Target produc** t -kohdetta. Huomaa, että voit valita useamman kuin yhden käyttäjän tai useamman kuin yhden tuotteen.

Hakeaksesi joko käyttäjätiliä tai tuotetta sinun täytyy alkaa kirjoittaa avainsanaa kenttään.

Kun kohdeyleisösi on valittu, voit napsauttaa **Next Step**.

![Kohdeasiakkaiden ja kohdetuotteen valinta Email-lähetystä varten](/img/admin/broadcast-email-targets.png)

Seuraavassa ikkunassa voit alkaa laatia sähköpostiasi syöttämällä aiheen ja sisällön/viestin, jonka haluat lähettää käyttäjille.

<!-- Kuvakaappaus ei saatavilla: Sähköpostilähetyksen aihe- ja sisältöeditori laatimisvaiheessa -->

Kun olet luonut viestisi, voit painaa **Send**-painiketta.

Ja näin helppoa on lähettää sähköpostia loppukäyttäjillesi lähetysominaisuuden avulla.

## Järjestelmäsähköpostit {#system-emails}

Ultimate Multisite -järjestelmäsähköpostit ovat niitä **automaattisia ilmoituksia**, jotka järjestelmä lähettää tiettyjen toimintojen, kuten rekisteröinnin, maksun, domain mappingin jne. jälkeen. Näitä sähköposteja voi muokata tai muuttaa Ultimate Multisite -asetuksista. Se sisältää myös ominaisuuden, jonka avulla voit nollata ja tuoda olemassa olevia asetuksia toisesta Ultimate Multisite -asennuksesta.

### Nollaus ja tuonti {#resetting--importing}

Uudet Ultimate Multisite -versiot sekä lisäosat voivat ja tulevat rekisteröimään uusia sähköposteja aika ajoin.

Ristiriitojen ja muiden ongelmien estämiseksi **emme lisää uusia sähköpostipohjia System Emails -kohteiksi asennukseesi automaattisesti** , elleivät ne ole ratkaisevan tärkeitä tietyn ominaisuuden oikealle toiminnalle.

Super adminit ja agentit voivat kuitenkin tuoda nämä uudet rekisteröidyt sähköpostit tuontityökalun kautta. Tämä prosessi luo uuden järjestelmäsähköpostin uuden sähköpostipohjan sisällöllä ja määrityksillä, jolloin super admin voi tehdä haluamansa muutokset tai pitää ne sellaisinaan.

#### Kuinka tuoda järjestelmäsähköposteja {#how-to-import-system-emails}

Siirry Ultimate Multisite Settings -sivulle ja mene **Emails**-välilehdelle.

![Emails-välilehti Ultimate Multisite -asetuksissa, jossa näkyy System Emails -osio](/img/config/settings-emails-tab.png)

Napsauta sitten sivupalkissa **Customize System Emails** -painiketta.

<!-- Kuvakaappaus ei saatavilla: Customize System Emails -painike System Emails -sivupalkkipaneelissa -->

System Emails -sivulla näet ylhäällä **Reset & Import** -toimintopainikkeen. Painikkeen napsauttamisen pitäisi avata tuonti- ja nollausmodaali-ikkuna.

![Reset tai Import -toimintopainike System Emails -ylläpitosivulla](/img/admin/system-emails-reset-import.png)

Sen jälkeen voit ottaa Import Emails -asetukset käyttöön nähdäksesi, mitkä järjestelmäsähköpostit ovat tuotavissa.

<!-- Kuvakaappaus ei saatavilla: Nollaa ja tuo -modaali, jossa Tuo sähköpostit -asetukset on laajennettu -->

#### Järjestelmäsähköpostien nollaaminen {#reseting-system-emails}

Toisinaan huomaat, että tiettyyn sähköpostimalliin tekemäsi muutokset eivät enää toimi sinulle, ja haluat palauttaa sen **oletustilaan**.

Tällaisissa tapauksissa sinulla on kaksi vaihtoehtoa: voit yksinkertaisesti poistaa järjestelmäsähköpostin ja tuoda sen takaisin (yllä olevien ohjeiden avulla) – mikä poistaa lähetysmittarit ja muita asioita, joten tämä menetelmä on vähiten suositeltava.

Tai voit käyttää **Nollaa ja tuo -työkalua** kyseisen sähköpostimallin nollaamiseen.

Voit nollata sähköpostimallin noudattamalla yllä olevia vaiheita, kunnes pääset Nollaa ja tuo -työkaluun, ja ottamalla sitten **Nollaa**-asetuksen käyttöön sekä valitsemalla sähköpostit, jotka haluat palauttaa niiden oletussisältöön.

<!-- Kuvakaappaus ei saatavilla: Nollaa ja tuo -modaali, jossa Nollaa sähköpostit -asetukset on laajennettu -->
