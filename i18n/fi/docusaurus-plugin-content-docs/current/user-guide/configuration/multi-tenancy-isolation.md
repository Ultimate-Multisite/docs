---
title: Monitenanttinen erottelu
sidebar_position: 12
_i18n_hash: 5aaf1504c3022f94b9aec9faaa4eda22
---
# Monitointi erillisyys (Multi-Tenancy Isolation)

Ultimate Multisite: Multi-Tenancy 1.2.0 tukee per-subsite -tietokoneen ja tiedostojärjestelmän erillisyyden varmistamista itsenäisille vuokralaisille. Tämä pitää vuokralaisen datan erillään säilyttäen samalla verkko-tason tarjonnan, laskutuksen ja hallinnan.

## Erillisyyden strategia (Isolation strategy) {#isolation-strategy}

Käytä itsemääräistä erillisyysratkaisua asiakkaille, jotka vaativat vahvempaa datan erottelua, omistettua tiedostojärjestelmätilaa tai erillisen isäntärajapinnan.

Jokaisella itsemääräisellä vuokralaisella tulee olla:

- Omistettu vuokralaisen tietokanta tai tietokantakäikken etuliittymä (database prefix strategy), joka on hyväksytty isännälle.
- Omistettu vuokralaisen tiedostojärjestelmän juurireitti (filesystem root).
- Vuokralaisrekisterin merkintä, joka yhdistää sivuston tietokantaan, juurireittiin, isäntänimeen ja erillisyysmallin.
- Migraation vahvistusarvo ennen kuin vuokralainen pidetään käytössä (live).

## Tietokantojen isännän sitominen (Database host binding) {#database-host-binding}

Versio 1.2.0 muuttaa oletuskäyttäytymistä samalla koneella olevan isännän sitomisessa itsemääräisissä asennuksissa. Saman koneen arvot, kuten `localhost`, normalisoidaan niin, että Bedrock-, FrankenPHP- ja konttoriin asennetut WordPress-asennukset voivat antaa ja vahvistaa oikeuksia isäntäkentän MySQL:n todellisen näkymän vastaanottamiseksi.

Kun määrität itsemääräisen vuokralaisen:

1. Aset tietokantojen isäntä arvoon, jota tarvitaan vuokralaisen ajon (runtime) mukaan.
2. Käytä `localhost` paikallisille soket-asennuksille, kun isäntä odottaa paikallisia yhteyksiä.
3. Käytä `127.0.0.1` tai palvelimen nimeä vain silloin, kun tietokantapalvelin antaa oikeuksia kyseiselle isännälle.
4. Suorita migraation vahvistus sen jälkeen, kun isäntän sitomista on muutettu.

Jos vahvistus raportoi pääsyvirheitä (grant failures), vertaa vuokralaisen tietokantayläkäyttäjien antamia oikeuksia määritettyyn isännän sitomiseen. Käyttäjälle annetut oikeudet `user@localhost`-muodossa eroavat käyttäjästä, jolle on annettu oikeudet `user@127.0.0.1` tai `user@%`.

## Tiedostojärjestelmän juuri (Filesystem root) {#filesystem-root}

Vuokran juurihakemisto (tenant root) tulisi olla vakaa uudelleenkäynnistysten ja käyttöönottojen välillä. Vältä väliaikaisia asennuspolkuja. Bedrock-tyylisissä asennuksissa varmista, että juurihakemisto osoittaa WordPressin verkkonjuureen, jota tenantin bootstrap odottaa, ei vain projektin juureen.

## Tarjousjärjestys (Provisioning order) {#provisioning-order}

Uusille suvereenisille vuokralaisille käytä tätä järjestystä:

1. Luo tarjousrekisterin merkintä (tenant registry entry).
2. Luo tenantin tietokanta ja tietokantaykilönti (database user).
3. Bootstrapaa tenantin skema.
4. Tarjoa tenantin käyttäjiä.
5. Konfiguroi tenantin tiedoston polut (filesystem paths).
6. Suorita migraation vahvistus.
7. Vaihda reititystä tai DNS:ää vahvistuksen jälkeen.

Tämä järjestys estää osittain eristettyjä vuokralaisia vastaanottamasta liikennettä ennen kuin tietokantaykilönti, käyttäjät ja tiedostojärjestelmä ovat valmiita.

## Suvereenisten asiakastilojen hallintajärjestelmät (Sovereign customer management flows) {#sovereign-customer-management-flows}

Ultimate Multisite v2.13.0 pitää asiakastilojen hallinnan toimenpiteet pääsivustolla, kun suvereeninen tila on käytössä. Tenant voi silti toimia erillisenä WordPress-asennuksena, mutta asiakasläheiset toiminnot, jotka riippuvat verkkojen laskutuksesta, jäsenyyksistä tai yhteisestä tilidataa, tulisi ohjata käyttäjä pääsivustolle sen sijaan, että yritettäisiin suorittaa toimintoja tenantin ajonaikana.

Pääsivuston virta koskee seuraavia:

- Kassalleen ja suunnitelman muutokset (Checkout and plan changes).
- Tilin yleiskatsaus ja asiakastiedot (Account overview and customer profile actions).
- Laskutusosoitteiden päivitykset ja maksunhallintapaneelit (Billing address updates and payment-management screens).
- Laskut- ja maksuhistorian näkymät (Invoice and payment-history views).
- Sivuston hallintatoiminnot, kuten sivustojen lisääminen tai poistaminen (Site management actions such as adding sites or deleting a site).
- Mallin vaihtaminen (Template switching).
- Alueiden kartoitus ja ensisivuston muutokset (Domain mapping and primary-domain changes).

Kun asiakas aloittaa jotakin näistä toimenpiteistä omasta (sovereign) vuokralaisista, Ultimate Multisite rakentaa vastaavan pääsivuston URL:n ja säilyttää lähdevuokraimen palauttava kohdetta, kun se on turvallista. Tämä antaa asiakkaalle suorittaa hallitun toimenpiteen verkkojen rekistereillä, ja sen jälkeen palata vuokralaisen kontekstiin ilman laskutus- tai jäsenyyden tilan duplikaatiota sovereenissa tietokannassa.

Operaattoreille käytännön sääntö on: pidä laskutus-, tili-, kassaprosessin, laskutus- ja mallipohjan sekä verkkotunnusten hallinnan sivut saatavilla pääsivustolla sovereenisille verkostoille. Vuokralaisilmoitukset voivat linkittää näihin sivuille, mutta pääsivusto pysyy todennäköisesti oikeana lähteänä kyseiselle toiminnolle.
