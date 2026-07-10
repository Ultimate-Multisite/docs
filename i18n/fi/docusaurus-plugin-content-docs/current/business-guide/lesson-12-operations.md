---
title: 'Oppitunti 12: Yrityksen pyörittäminen'
sidebar_position: 13
_i18n_hash: 0fe6371df216b74a2051b95972ad68e8
---
# Oppitunti 12: Liiketoiminnan pyörittäminen {#lesson-12-running-the-business}

Alusta ei ole projekti, jonka saat valmiiksi -- se on liiketoiminta, jota pyörität. Tämä oppitunti käsittelee FitSiten hallinnan päivittäisiä toimintoja: tukea, laskutusta, ylläpitoa ja asiakkaiden tyytyväisenä pitämistä.

## Mihin jäimme {#where-we-left-off}

FitSite on julkaistu ja asiakkaat rekisteröityvät. Nyt sinun täytyy pyörittää toimintaa kestävästi.

## Päivittäiset toiminnot {#daily-operations}

### Seuranta {#monitoring}

Tarkista nämä päivittäin (tai määritä hälytykset):

- **Käytettävyys**: Onko alusta saavutettavissa? Käytä käytettävyyden seurantapalvelua.
- **Uudet rekisteröitymiset**: Kuinka monta uutta asiakasta rekisteröityi tänään?
- **Epäonnistuneet maksut**: Onko maksuhäiriöitä, jotka vaativat huomiota?
- **Tukipyynnöt**: Onko vastaamattomia asiakaskysymyksiä?

### Asiakastuki {#customer-support}

Niche-kohdennuksesi on tässä etu. Koska kaikki asiakkaasi ovat fitness-studioita, näet samoja kysymyksiä toistuvasti:

**Yleisiä kysymyksiä, joita saat:**

- "Kuinka päivitän tuntiaikatauluni?"
- "Voinko vaihtaa sivustoni värejä?"
- "Kuinka lisään uuden valmentajan sivustolleni?"
- "Verkkotunnukseni ei toimi"
- "Kuinka perun tai päivitän planini?"

Rakenna tietopohjasi (aloitettu oppitunnilla 8) näiden toistuvien kysymysten ympärille. Jokainen tukipyyntö, josta olisi voinut tehdä tietopohja-artikkelin, on merkki kirjoittaa kyseinen artikkeli.

### Tukitasot {#support-tiers}

Kun kasvat, jäsennä tuki planin mukaan:

| Plan | Tuen taso | Vastausaika |
|------|--------------|---------------|
| Starter | Tietopohja + sähköposti | 48 tuntia |
| Growth | Sähköpostituki | 24 tuntia |
| Pro | Prioriteettisähköposti + perehdytyspuhelu | 4 tuntia |

[Support Tickets addon](/addons/support-tickets) voi auttaa hallitsemaan tukipyyntöjä alustalla.

## Laskutustoiminnot {#billing-operations}

### Toistuvat maksut {#recurring-payments}

Ultimate Multisite hoitaa toistuvan laskutuksen automaattisesti maksuyhdyskäytäväsi kautta. Sinun tehtäväsi on seurata:

- **Epäonnistuneet maksut**: Ota yhteyttä nopeasti. Useimmat epäonnistumiset johtuvat vanhentuneista korteista, eivät tarkoituksellisista peruutuksista.
- **Maksujen perintä**: Määritä automaattinen uudelleenyrityslogiikka maksuyhdyskäytäväsi kautta (Stripe hoitaa tämän hyvin)
- **Peruutuspyynnöt**: Ymmärrä, miksi asiakkaat lähtevät. Jokainen peruutus on palautetta.

### Jäsenyyksien hallinta {#managing-memberships}

Siirry kohtaan **Ultimate Multisite > Memberships** tehdäksesi seuraavaa:

- Näytä kaikki aktiiviset tilaukset
- Käsittele päivitys- ja alennuspyynnöt
- Käsittele hyvitykset tarvittaessa
- Hallitse kokeilujaksojen päättymisiä

Katso täydellinen viite kohdasta [Jäsenyyksien hallinta](/user-guide/administration/managing-memberships).

### Laskutus {#invoicing}

Varmista, että laskut luodaan oikein jokaisesta maksusta. Asiakkaat voivat tarvita laskuja liiketoiminnan kuluraportointiin. Katso [Maksujen ja laskujen hallinta](/user-guide/administration/managing-payments-and-invoices).

## Alustan ylläpito {#platform-maintenance}

### WordPress- ja plugin-päivitykset {#wordpress-and-plugin-updates}

Verkoston ylläpitäjänä olet vastuussa seuraavista:

- **WordPress-ytimen päivitykset**: Testaa staging-sivustolla ennen tuotantoon viemistä
- **Plugin-päivitykset**: Sama -- testaa ensin ja ota sitten käyttöön koko verkostossa
- **Theme-päivitykset**: Varmista, että mallipohjat näyttävät edelleen oikeilta theme-päivitysten jälkeen
- **Ultimate Multisite -päivitykset**: Seuraa muutoslokia ja testaa ennen päivittämistä

:::warning Älä koskaan päivitä tuotannossa ilman testausta
Rikkinäinen päivitys vaikuttaa jokaiseen asiakassivustoon verkostossasi. Testaa päivitykset aina ensin verkostosi staging-kopiolla.
:::

### Tietoturva {#security}

- Pidä kaikki ohjelmistot ajan tasalla
- Käytä vahvoja salasanoja ja kaksivaiheista tunnistautumista admin-tileillä
- Seuraa epäilyttävää toimintaa
- Laadi suunnitelma tietoturvapoikkeamia varten

### Suorituskyky {#performance}

Kun verkostosi kasvaa, seuraa:

- **Sivujen latausajat**: Ovatko asiakassivustot nopeita?
- **Palvelimen resurssien käyttö**: CPU, muisti, levytila
- **Tietokannan suorituskyky**: Suuret verkostot tarvitsevat ajan myötä tietokannan optimointia

Harkitse välimuistin käyttöönottoa (sivuvälimuisti, objektivälimuisti) ja CDN:ää, jos et ole vielä tehnyt niin. [Cloudflare-integraatio](/user-guide/host-integrations/cloudflare) hoitaa suuren osan tästä.

## Asiakkaan elinkaaren hallinta {#customer-lifecycle-management}

### Poistuman vähentäminen {#reducing-churn}

Poistuma on niiden asiakkaiden prosenttiosuus, jotka peruuttavat joka kuukausi. Tilausliiketoiminnassa poistuman vähentäminen on yhtä tärkeää kuin uusien asiakkaiden hankkiminen.

**Yleisiä syitä, miksi fitness-studioasiakkaat poistuvat:**

- He eivät ymmärtäneet, kuinka alustaa käytetään → paranna perehdytystä
- Sivusto ei näyttänyt riittävän hyvältä → paranna mallipohjia
- He eivät nähneet arvoa → paranna ominaisuuksia tai viestintää
- He löysivät halvemman vaihtoehdon → vahvista niche-arvoasi
- Heidän liiketoimintansa päättyi → väistämätöntä, mutta seuraa tätä erikseen

### Päivityksiin kannustaminen {#encouraging-upgrades}

Starter-planilla olevia asiakkaita, jotka menestyvät, tulisi kannustaa päivittämään:

- Kun he saavuttavat planin rajat (sivustot, tallennustila), näytä päivityskehotteita
- Lähetä kohdennettuja sähköposteja, joissa korostat Growth-planin ominaisuuksia, joista he hyötyisivät
- Esittele, mitä Growth/Pro-asiakkaat ovat rakentaneet

### Takaisinvoittokampanjat {#win-back-campaigns}

Kun asiakas peruuttaa:

1. Kysy miksi (poistumiskysely tai sähköposti)
2. Käsittele hänen huolenaiheensa, jos mahdollista
3. Tarjoa alennusta paluuta varten (30–60 päivää peruutuksen jälkeen)

## Viikoittaiset ja kuukausittaiset rutiinit {#weekly-and-monthly-routines}

### Viikoittain {#weekly}

- Tarkista uudet rekisteröitymiset ja peruutukset
- Vastaa kaikkiin avoimiin tukipyyntöihin
- Tarkista alustan suorituskyky ja käytettävyys
- Tarkista mahdolliset epäonnistuneet maksut

### Kuukausittain {#monthly}

- Analysoi keskeiset mittarit (MRR, poistuma, uudet asiakkaat, päivitykset)
- Ota käyttöön WordPress- ja plugin-päivitykset (staging-testin jälkeen)
- Tarkista ja päivitä tietopohjaa tukipyyntöjen mallien perusteella
- Lähetä uutiskirje tai päivitys asiakkaille (uudet ominaisuudet, vinkit, fitness-alan uutiset)

### Neljännesvuosittain {#quarterly}

- Tarkista hinnoittelu suhteessa kilpailijoihin ja asiakaspalautteeseen
- Arvioi mallipohjien suunnittelu -- tarvitsevatko ne päivittämistä?
- Arvioi hosting-kapasiteetti -- pitääkö sinun skaalata?
- Tarkista ja paranna perehdytystä aktivointidatan perusteella

## Mitä rakensimme tällä oppitunnilla {#what-we-built-this-lesson}

- **Päivittäiset seurantakäytännöt** käytettävyydelle, rekisteröitymisille, maksuille ja tuelle
- **Porrastettu tukirakenne**, joka vastaa plan-tasoja
- **Laskutusoperaatiot**, mukaan lukien perintä ja peruutusten käsittely
- **Ylläpitomenettelyt** päivityksiä, tietoturvaa ja suorituskykyä varten
- **Asiakaspoistuman vähentämisstrategiat**, jotka on räätälöity fitness-nicheen
- **Viikoittaiset, kuukausittaiset ja neljännesvuosittaiset operatiiviset rutiinit**

---

**Seuraavaksi:** [Oppitunti 13: Skaalaaminen](lesson-13-growth) -- FitSiten kasvattaminen pienestä toiminnasta oikeaksi liiketoiminnaksi.
