---
title: Sivuston vienti
sidebar_position: 11
_i18n_hash: d25255aa1b01df64a9008f91e3dcbeb1
---
# Sivustiedosto

**Sivustotiedoston (Site Export)** hallintapaneeli antaa verkkoasi ylläpitäjille mahdollisuuden pakata yhden sivuston tai koko verkoston ladattavaksi arkistoksi siirto-, varmuuskopio- tai siirtämistyötä varten.

## Yhden sivuston vienti

Siirry kohtaan **Ultimate Multisite > Site Export** ja valitse **Generate new Site Export**. Valitse sitten alisivusto, jota haluat vientiä, ja valitse, sisältyykö arkistoon lataukset, pluginit ja teemat.

Kun vienti on valmis, ladataan ZIP-tiedosto listalta **Existing Exports**. Vienti-ZIP-tiedostot sisältävät nyt itsensä käynnistyvän `index.php`-tiedoston ja `readme.txt`-tiedoston, jotta arkisto voidaan ladata uuteen isäntään ilman erillisen tuontityökalun asennusta.

## Koko verkoston vienti

Käytä **Network Export** Site Export -sivulla, kun tarvitset yhden arkiston, joka sisältää kaikki verkon alisivustot. Tämä on hyödyllistä isännän siirtojen, katastrofivarmuuskopiointitestien tai staging-palautusten yhteydessä, joissa jokaisen alisivuston on kuljettava yhdessä.

Koska verkoston vienti voi olla paljon suurempi kuin yksittäisen sivuston vienti, suorita se matalan liikenteen ajaksi ja varmista, että kohdistetulla tallennustilalla on riittävästi vapaata tilaa latauksille, plugin-ille, teemoille ja luotuille ZIP-tiedostoille.

### Verkoston tuontibundelit (Network Import Bundles)

Ultimate Multisite 2.12.0:n mukaisesti Site Exporter voi luoda **network import bundles** — erikoistuneita arkistoja, jotka on suunniteltu verkkojen laajuiseen sivuston palauttamiseen tehokkaasti. Verkoston tuontibundle sisältää kaikki tarvittavat tiedostot ja metatiedot useiden sivustojen palauttamiseksi uuteen verkkoasennukseen.

#### Verkoston tuontibundleen luominen

1. Mene **Ultimate Multisite > Site Export** -valitse
2. Napsauta **Generate new Network Export** (Luo uusi verkko-exportti)
3. Valitse exportityyppinä **Network Import Bundle** (Verkko-importin paketti)
4. Valitse, haluatko sisällyttää lataukset, lisäosat ja teemat
5. Napsauta **Generate** (Luo)
6. Lataa paketin ZIP-tiedosto listalta **Existing Exports** (Olemassa olevat exportit)

#### Palautus Network Import Bundle -paketista

Palauta sivustoja network import bundle -paketista seuraavasti:

1. Asenna Ultimate Multisite kohdehostillesi
2. Suorita multisite-asennusohjelma
3. Mene uudelle verkolle **Ultimate Multisite > Site Export** -sivulle
4. Napsauta **Import Network Bundle** (Importoi verkko-importin paketin)
5. Lataa network import bundle ZIP-tiedosto
6. Noudata näytöllä olevia ohjeita importiin
7. Importointiprosessi palauttaa kaikki sivustot, niiden sisällöt ja asetukset

Network import bundle -paketit säilyttävät:
- Sivuston sisällön (postaukset, sivut, räätälöidyt postityyppit)
- Sivuston asetukset ja vaihtoehdot
- Käyttäjäroolit ja oikeudet
- Lisäosat ja teemat (jos ne on sisällytetty pakettiin)
- Tiedostokansioiden lataukset (jos ne on sisällytetty pakettiin)
- Räätälöidyt tietokantataulut ja data

## Itse käynnistyvän export ZIP:n asennus

Palauta itse käynnistyvä ZIP-tiedosto uuteen hostiin:

1. Lataa exportoidun ZIP-sisältö kohdeverkkojärjestelmän juureen (web root)
2. Avaa lataamasi `index.php` selaimella
3. Noudata paketin sisältämän exportin ohjeita näytöllä olevasta asennusohjelmasta
4. Tarkista paketin sisällä oleva `readme.txt` -tiedosto exportiin liittyviä huomioita ennen väliaikaisten tiedostojen poistamista.

Lisäosien erityisasennus- ja importitiedot näet [Site Exporter addon documentation](/addons/site-exporter) -dokumentaatiossa.

Ultimate Multisite 2.9.0:aan lisätty yksittäisen sivuston työkalu koskee [Export & Import](/user-guide/administration/export-import).
