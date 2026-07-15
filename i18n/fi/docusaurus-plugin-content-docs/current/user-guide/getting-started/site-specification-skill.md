---
title: Sivuston määrittelytaito
sidebar_position: 18
_i18n_hash: 7470e8d04c1f380b3dca6ba5559b34f5
---
# Sivustiedon taito

**Sivustiedon taito** on rakennettu lähestymistapa sivustosi tavoitteiden, yleisön ja bränditunnisteen tallentamiseen. Tämä tieto tallennetaan **site_brief** -muistiisi, jota agentit viittaavat eri istunnoissa tarjotakseen johdonmukaista, kontekstia ymmärtävää apua.

## Mitä sivustiedon taito on? {#what-is-site-specification}

Sivustiedon taito on prosessi, jossa dokumentoidaan:

- **Sivuston tarkoitus**: Mitä sivusto tekee ja miksi se on olemassa
- **Kohdeyleisö**: Kuka vierailee sivustollasi ja mitä he tarvitsevat
- **Bränditunniste**: Värit, sävy ja visuaalinen tyyli
- **Liiketoimintatavoitteet**: Mitä menestys tarkoittaa sivustollesi kannalta
- **Sisällön rakenne**: Miten sivustosi on järjestetty

Tämä tiedosto muuttuu sinun **site_brief** -muistiksi, pysyvänä muistina, jota agentit käyttävät ymmärtääksessään sivustosi kontekstia.

## Miksi käyttää sivustiedon taitoa? {#why-use-site-specification}

### Yhtenäisyys istuntojen välillä {#consistency-across-sessions}

Ilman site_briefiä sinun pitäisi selittää sivustosi tarkoitusta uudelleen joka kerta, kun aloitat uuden istunnon. Sen avulla agentit ymmärtävät heti:

- Sivustosi tavoitteet ja yleisö
- Brändivärit ja sävy
- Sisällön rakenne
- Liiketoimintatavoitteesi

### Paremmat suositukset {#better-recommendations}

Agentit käyttävät site_briefiä seuraavasti:

- Ehdottaa ominaisuuksia, jotka vastaavat sivustosi tarkoitusta
- Suositella sisältörakenteita, jotka sopivat tavoitteisiisi
- Ehdottaa suunnittelua, joka on johdonmukaista brändisi kanssa
- Välttää epäsoveltuvien ominaisuuksien ehdottamisen

### Nopeampi aloitus {#faster-onboarding}

Uudet agentit (tai uuden istunnon agentit) voivat nopeasti päästä alkuun lukemalla site_briefiä sen sijaan, että he kysyisivät selventäviä kysymyksiä.

## Sivustiedon taiton käynnistäminen {#initiating-site-specification}

### Teeman rakentamisen aikana (Theme Builder Onboarding) {#during-theme-builder-onboarding}

Sivustiedon taito käynnistyy automaattisesti **Theme Builder onboarding flow** -prosessin aikana. Setup Assistant agenti kysyy kysymyksiä ja rakentaa sinun site_briefisi.

### Manuaalinen käynnistäminen {#manual-initiation}

Voit aloittaa sivuston määrittelyn milloin tahansa:

```
"Määritellään sivuston määrittely"
```

tai

```
"Auta minua luomaan sivuston tiivistelmän"
```

## Sivuston määrittelyprosessi {#the-site-specification-process}

### Vaihe 1: Sivuston tarkoitus {#step-1-site-purpose}

Agentti kysyy:

```
Mikä on sivustosi pääasiallinen tarkoitus?
- Verkkokauppa
- Blogi tai sisältösivusto
- Portfoliot tai esittelysivu
- SaaS-sovellus
- Yhteisö tai foorumi
- Muu: [kuvaile]
```

Voit valita luokan tai kuvailla omaa tarkoitustasi.

### Vaihe 2: Kohdeyleisö {#step-2-target-audience}

```
Kuka on sinun ensisijainen kohdeyleisösi?
- Kuluttajat / yleinen yleisö
- Liiketoiminnan ammattilaiset
- Kehittäjät / tekniset käyttäjät
- Opiskelijat / opettajat
- Muu: [kuvaile]

Mitä he tarvitsevat pääasiassa?
```

### Vaihe 3: Brändiidentiteetti {#step-3-brand-identity}

```
Millaiset ovat brändisi värit?
- Pääväri: [värivaihtoehto tai hex-koodi]
- Toissijainen väri: [värivaihtoehto tai hex-koodi]
- Korostusväri: [valinnainen]

Miten kuvaalisit brändisi sävyn?
- Ammattimainen / yrityksellinen
- Luova / taiteellinen
- Leikkisä / rento
- Minimalistinen / moderni
- Lämmin / ystävällinen
```

### Vaihe 4: Liiketoimintatavoitteet {#step-4-business-goals}

```
Miltä menestys näyttää sivustollasi?
- Potentiaalisten asiakkaiden hankkiminen (leads)
- Tuotteiden myyminen
- Yhteisön rakentaminen
- Tiedon jakaminen
- Auktoriteetin luominen
- Muu: [kuvaile]

Mikä on ensisijainen mittari?
- Tulo
- Käyttäjäsitoutuminen (User engagement)
- Sisällön saavutus
- Konversiot
- Muut
```

### Vaihe 5: Sisällön rakenne {#step-5-content-structure}

```
Miten sisällösi on järjestetty?
- Tasainen (kaikki sisältö samalla tasolla)
- Hierarkkinen (luokat ja alaluokat)
- Kronologinen (blogimainen)
- Tuotteisiin perustuva (katalogi)
- Muu: [kuvaile]

Minkälaisia sisällön tyyppejä käytät?
- Blogikirjoitukset
- Tuotesivut
- Tapauskertomukset (Case studies)
- Dokumentaatio
- Videot
- Muut
```

## Sivuston tiivistelmäsi muisti (**site_brief Memory**) {#your-sitebrief-memory}

Sivuston määrittelyn jälkeen tiedot tallennetaan **site_brief** -nimellä agentin muistiin. Tämä on rakennettu tallenne, joka sisältää:

## Sivustiedot ja päivitykset {#viewing-and-updating-your-sitebrief}

### Katso sivustiedotietosi (site_brief) {#view-your-sitebrief}

Kysy agentilta:

```
"Show me my site brief"
```

tai

```
"What do you know about my site?"
```

Agent näyttää tallennetut tiedotietosi.

### Päivitä sivustiedotietosi (site_brief) {#update-your-sitebrief}

Jos sivustosi kehittyy, voit päivittää sitä:

```
"Update my site brief: we're now targeting B2B customers"
```

tai

```
"Refresh my site specification"
```

Tämä käynnistää uudelleen Site Specification -taidon olemassa olevalla tiedolla lähtökohtana.

## Miten agentit käyttävät sivustiedotietoa (site_brief) {#how-agents-use-sitebrief}

### Suunnittelun suositukset {#design-recommendations}

Kun pyydät suunnittelun muutoksia, agentit viittaavat sivustiedotietoihisi:

```
Sinä: "Redesign my homepage"
Agentti: "Sivustiedotietosi perusteella kohderyhmäsi ovat naiset 25–45-vuotiaat
ja sinulla on lämmin, käsityötaiteellinen sävy. Luon suunnittelun, joka korostaa
käsityökoruja ja kestävällisiä arvoja."
```

### Ominaisuuden ehdotukset {#feature-suggestions}

Agentit ehdottavat ominaisuuksia, jotka vastaavat tavoitteitasi:

```
Sinä: "What features should I add?"
Agentti: "E-commerce-liikkeen kohderyhmän sitouttamisen kannalta suosittelen:
sitoutumispohjaista ohjelmaa (loyalty program), asiakasarvosteluja, sähköpostikirjeenä
uutiskirjeen ja tuotteiden suosituksia."
```

### Sisällön rakenne {#content-structure}

Agentit ehdottavat sisällön järjestelyjä rakenteesi perusteella:

Miten kannan blogia järjestää?
Vastaus: Koska käytät tuotekatalogia ja blogia, ehdotan postauksia järjestellä tuotekategorioiden mukaan ja luoda 'tyyliopastoa', jossa esitellään useita tuotteita yhdessä.

## Parhaat käytännöt {#best-practices}

### Ole tarkka {#be-specific}
Sen sijaan, että käytät yleistä termiä "yleisö", kuvaile todellista kohdeasiasi:

- ✓ "Naiset 25–45-vuotiaat, jotka ovat kiinnostuneita kestävän muodin kanssa"
- ✗ "Kaikki"

### Päivitä säännöllisesti {#update-regularly}
Kun sivustosi kehittyy, päivitä site_briefiäsi:

- Kun siirryt uuteen yleisöön
- Kun lisäät uusia tuoteryhmiä
- Kun brändisi identiteetti muuttuu
- Kun liiketoimintatavoitteesi muuttuvat

### Käytä johdonmukaista terminologiaa {#use-consistent-terminology}
Käytä samoja termejä kaikissa tiloissa:

- ✓ Sano aina "kestävää korua" (ei "ekologisia koruja" ja "vihreitä tuotteita")
- ✓ Viittaa yleisöön johdonmukaisesti samalla tavalla

### Sisällytä kontekstia {#include-context}
Anna taustatietoja, jotka auttavat agenttia ymmärtämään päätöksesi:

- "Kohdistamme ammattilaisiin, jotka arvostavat laatua hintaan nähden"
- "Yleisömeistä on teknisesti taitavia ja odottavat modernia suunnittelua"
- "Olemme startupi, jolla ei ole rahoitusta, joten tarvitsemme kustannustehviä ratkaisuja"

## Suhtautuminen Theme Builder -onboardingiin {#relationship-to-theme-builder-onboarding}

Site Specification -taito on integroitu **Theme Builder -onboarding-virtaan**. Kun suoritat onboardingin, site_briefisi luodaan automaattisesti antamiesi tietojen perusteella.

Voit myös ajaa Site Specificationia itsenäisesti, jos haluat:

- Hienosäätää spesifikaatiota alkuasetusten jälkeen
- Päivittää site_briefiäsi sivustosi kehittyessä
- Luoda yksityiskohtaisen spesifikaation ennen Theme Builder -alkamista

## Ongelmanratkaisu {#troubleshooting}

**Site_briefini ei ole käytössä**
- Varmista, että agentilla on pääsy muistiin
- Pyydä agenttia "muistamaan site_briefini" (recall my site brief)
- Tarkista, että muisti on käytössä asetuksissasi

**Haluan aloittaa alusta uuden site\_briefin kanssa**
- Pyydä agentilta: "Tyhjennä sivustokuvailu ja aloita uusi"
- Suorita sitten Site Specification uudelleen

**Agentti antaa suosituksia, jotka eivät vastaa sivustokuvailuaani**
- Pyydä agentilta: "Arvioi sivustokuvailuni"
- Päivitä site\_briefiäsi, jos se on vanhentunut
- Tarjoa lisäkohinaa pyyntöihisi

## Seuraavat askeleet {#next-steps}

Sivustokuvailun määritellysen jälkeen:

1. **Käytä Theme Builderia**: Luo oma teema perustuen sivustokuvailuusi
2. **Hienosäädä suunnittelua**: Käytä Design System Aesthetics -taitoa yksityiskohtaiseen suunnitteluun
3. **Suunnittele sisältöä**: Pyydä agenteilta sisällön rakenteellisia suosituksia
4. **Rakenna ominaisuudet**: Pyydä ominaisuuksia, jotka vastaavat liiketoimintatavoitteitasi
