---
title: Hallintaosion tutkailu
sidebar_position: 16
_i18n_hash: d8ee34d53f01aaaa8009bec02bcd891a
---
# Hallinta Admin-paneelin tutkiskelu

Ultimate Multisite pyrkii olemaan mahdollisimman yksinkertainen ja selkeä, mutta tällaisen tehokkaan työkalun kanssa se voi auttaa ohjattavassa kierroksessa. Käydään läpi admin-sivuja auttaaksemme sinua asettumaan paikoillesi.

## Dashboard

Ultimate Multisite **Dashboard** näyttää perusraportteja ja analyysejä, mukaan lukien tulot, sivuston aktiviteetit, jäsenkasvu, vierailijamäärät ja maantieteelliset tiedot.

![Ultimate Multisite Dashboard](/img/admin/um-dashboard-top.png)

Tässä on dashboardin kokonaisnäkymä:

![Ultimate Multisite Dashboard full page](/img/admin/um-dashboard-full.png)

Ja dashboardin alaosio:

![Ultimate Multisite Dashboard bottom section](/img/admin/um-dashboard-bottom.png)

Tässä on myös verkko-dashboardin kokonaisnäkymä:

![Network Dashboard full page](/img/admin/network-dashboard-full-page.png)

## Kassaprosessit (Checkout Forms)

**Checkout Forms** antavat sinulle joustavuutta luodaksesi räätälöityjä rekisteröintisivuja. Voit muokata kenttiä, lisätä omaa luokkaa ja skriptejä sekä rajoittaa pääsyä vierailijan maan tai sijainnin perusteella.

![Checkout Forms list](/img/admin/checkout-forms-list.png)

## Tuotteet (Products)

**Products** -osio on paikka, jossa luot eri suunnitelmia, paketteja ja palveluita verkostollesi varten. Määrittele hinnat, laskutusajot ja rajoitukset sekä kvootit tuote-tason tasolla.

![Products list](/img/admin/products-list.png)

## Jäsenyydet (Memberships)

**Memberships** -sivu näyttää kaikki tilaukset verkostossasi. Tarkista ja muokkaa tilaustietoja, mukaan lukien suunnitelmat, tuotteet, laskutusmäärät ja -ajot, maksushistoria sekä aikaleimat.

![Memberships list](/img/admin/memberships-list.png)

## Maksut (Payments)

**Maksut**-sivu tarjoaa nopean yleiskuvan maksahistoriasta koko verkostossasi, sisältäen yksityiskohtaisia tapahtumatietoja, mukaan lukien tiettyjä tuotteita ja summia.

![Payments list](/img/admin/payments-list.png)

## Asiakkaat

**Asiakkaat**-sivu näyttää kaikki verkostossasi rekisteröityneet jäsenet peruskäyttötiedoilla, kuten nimellä, sähköpostiosoitteella, viimeisimmällä sisäänkirjautumisella ja "vaihto" -linkillä aliasivustolle kirjautumiseen.

![Customers list](/img/admin/customers-list.png)

## Sivustot

**Sivustot**-sivu listaa kaikki aliasivustosi verkostossasi, mukaan lukien sivustomallit ja asiakkaiden omistamat sivustot. Hallinnoi helposti kartoitettuja domeeneja, rajoituksia ja kvootteja, plugin-ohjelmia ja teemoja sekä sivuston esikatselukuvia.

![Sites list](/img/admin/sites-list.png)

## Domeenit

**Domeenit**-sivu on omistettu aliasivustoille kartoitettaville custom-domeeneille. Superadminina voit lisätä tai kartoittaa custom-domeenne nimi manuaalisesti ja tarkastella DNS-rekistereitä sekä logeja.

![Domains list](/img/admin/domains-list.png)

## Alennuskoodit

**Alennuskoodit** antavat sinulle mahdollisuuden luoda kuponkikoodejä tarjota alennuksia loppukäyttäjillesi. Määrittele alennusarvo ja kohdenna tiettyjä käyttäjiä tai ryhmiä.

![Discount Codes list](/img/admin/discount-codes-list.png)

## Lähetysviestit

**Lähetysviestit** on työkalu ilmoitusten levittämiseen tai yksityisten viestien lähettämiseen aliasivustosi käyttäjille. Kohdenna tiettyjä käyttäjäryhmiä sopimuksen tai tuotteen perusteella, johon he ovat tilaajia.

![Broadcasts list](/img/admin/broadcasts-list.png)

## Asetukset

**Asetukset**-sivu on paikka, josta voit määrittää Ultimate Multisite — rekisteröintiasetukset, maksut, API ja webhooks, domeenikartaus sekä muut integraatiot.

Kaikki tällä hetkellä tuetut OAuth-palojen joukot ovat: Anthropic Max, OpenAI ChatGPT/Codex ja Google AI Pro. Jokainen tarjouskortti antaa superadminille mahdollisuuden yhdistää tilin, päivittää tallennettuja tilejä, poistaa tilin sähköpostilla sekä käyttää manuaalista OAuth-vaihtoehtoa, jos eristetty ympäristö estää selainohjauksen. Cursor Pro -asetukset on poistettu hallintapaneelista.

ChatGPT/Codex -tilit tukevat koneellisesti tuetun työkalujen käyttöä, jossa operaatio sallii työkaluja, joten admin-työt voivat käyttää Codexin työkalutäyttöä sen jälkeen, kun OpenAI-tili on yhdistetty.

![Settings page](/img/admin/settings-general.png)

Tässä on koko yleisen asetussivun näkymä:

![Settings general full page](/img/admin/settings-general-full.png)

Ja sähköpostiasetussivu:

![Settings emails full page](/img/admin/settings-emails-full.png)

Ja maksiasetussivu:

![Settings payments full page](/img/admin/settings-payments-full.png)

Ja maksiasetusten alaosan näkymä:

![Settings payments bottom section](/img/admin/settings-payments-bottom.png)

Ja sivustojen asetussivu:

![Settings sites full page](/img/admin/settings-sites-full.png)

## Tapahtumat (Events)

**Tapahtumat**-sivu pitää kirjaa kaikista tapahtumista ja lokeista verkostossasi. Se seuraa toimintoja kuten suunnitelmien muutoksia, rekisteröitymistä ja muita liikkeitä – hyödyllistä multisite-ympäristön seurannassa.

![Events list](/img/admin/events-list.png)

## Webhookit

**Webhookit** antavat sinulle mahdollisuuden lähettää dataa toiselle sovellukselle. Hyödyllistä datan lähettämiseen Ultimate Multisite -alustalta palveluihin kuten Zapier.

![Webhooks list](/img/admin/webhooks-list.png)
