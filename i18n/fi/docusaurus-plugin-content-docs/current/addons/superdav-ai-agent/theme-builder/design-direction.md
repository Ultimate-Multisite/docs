---
title: Suunnittelun suunta
sidebar_position: 2
_i18n_hash: 0a55afffd66ffad6930c7794d4074971
---
# Suunnittelusuunta

**Suunnittelusuunta**-vaiheessa voit tarkistaa, hioa ja viimeistellä teemasi visuaalisen suunnittelun ennen kuin Theme Builder luo täydellisen teeman.

## Yleiskatsaus

Discovery Interviewin suorittamisen jälkeen Theme Builder näyttää suunnittelusuuntasi **desktop- ja mobiiliesikatselun renderöinnillä**. Näin voit nähdä tarkalleen, miltä suunnittelusi näyttää eri laitteilla ennen kuin sitoudut teemaan.

## Suunnittelusuunnan osat

### 1. Väripaletti

Teemasi värimaailma, mukaan lukien:

- **Ensisijainen väri** — pääasiallinen brändiväri, jota käytetään painikkeissa, linkeissä ja korostuksissa
- **Toissijainen väri** — täydentävä väri vaihtelua varten
- **Korostusväri** — korostusväri tärkeille elementeille
- **Neutraalit värit** — harmaat ja valkoiset taustoihin ja tekstiin
- **Tekstin väri** — ensisijainen tekstiväri luettavuuden varmistamiseksi

### 2. Typografia

Fonttivalinnat seuraaville:

- **Otsikkofontti** — käytetään sivun otsikoissa ja osioiden otsikoissa
- **Leipätekstin fontti** — käytetään kappaletekstissä ja sisällössä
- **Fonttikoot** — responsiivinen mitoitus eri näyttökokoja varten
- **Riviväli** — rivien välinen väli luettavuuden parantamiseksi
- **Fonttipaksuudet** — lihavoidut, normaalit ja kevyet muunnelmat

### 3. Asettelu ja välit

- **Säilön leveys** — sisällön enimmäisleveys
- **Täytteet ja marginaalit** — elementtien ympärillä oleva tila
- **Ruudukkojärjestelmä** — sarakeasettelu responsiivista suunnittelua varten
- **Komponenttien välit** — UI-elementtien välinen etäisyys

### 4. Visuaaliset elementit

- **Painiketyylit** — ensisijaiset, toissijaiset ja kolmannen tason painikemallit
- **Korttimallit** — asettelut sisältölohkoille
- **Kuvakkeet** — kuvaketyyli ja mitoitus
- **Reunukset ja varjot** — hienovarainen visuaalinen syvyys
- **Hover-tehosteet** — interaktiivisen tilan tyylit

## Esikatselun renderöinti

### Desktop-esikatselu

Desktop-esikatselu näyttää suunnittelusi täydellä leveydellä (yleensä 1200px tai leveämpänä):

- Täysi navigointivalikko
- Täydellinen asettelu kaikilla sarakkeilla
- Suuri typografia ja välit
- Kaikki visuaaliset elementit täysikokoisina

### Mobiiliesikatselu

Mobiiliesikatselu näyttää suunnittelusi mobiilileveydellä (yleensä 375px):

- Responsiivinen navigointi (hampurilaisvalikko)
- Yhden sarakkeen asettelu
- Mukautettu typografia ja välit
- Kosketusystävälliset painikekoot

### Responsiiviset katkaisupisteet

Theme Builder renderöi esikatselut näissä katkaisupisteissä:

| Laite | Leveys | Esikatselu |
|--------|-------|---------|
| **Mobiili** | 375px | Pysty puhelin |
| **Tabletti** | 768px | Vaaka tabletti |
| **Desktop** | 1200px | Täysleveä desktop |
| **Suuri Desktop** | 1920px | Ultraleveä näyttö |

## Suunnittelun hiominen

### Säätöjen tekeminen

Voit hioa suunnittelusuuntaasi seuraavasti:

1. **Värien säätäminen** — muuta mitä tahansa paletin väriä
2. **Fonttien vaihtaminen** — valitse eri kirjasintyyppejä
3. **Välien muokkaaminen** — säädä täytteitä ja marginaaleja
4. **Asettelun päivittäminen** — muuta säilöjen leveyksiä ja ruudukon sarakkeita
5. **Elementtien mukauttaminen** — muokkaa painiketyylejä, korttimalleja jne.

### Esikatselun päivitykset

Muutokset näkyvät reaaliajassa:

- Desktop-esikatselu päivittyy välittömästi
- Mobiiliesikatselu päivittyy välittömästi
- Kaikki responsiiviset katkaisupisteet päivitetään
- Voit vaihtaa esikatselujen välillä varmistaaksesi muutokset

### Vertailunäkymä

Vertaa suunnittelusuuntaasi seuraaviin:

- **Alkuperäinen suunnittelu** — näe, mikä muuttui
- **Kilpailijoiden suunnittelut** — vertaa inspiraatiosivustoihin
- **Aiemmat versiot** — palaa aikaisempiin suunnittelusuuntiin

## Suunnittelusuunnan hyväksyntä

Kun olet tyytyväinen suunnitteluusi:

1. **Tarkista molemmat esikatselut** — varmista, että desktop ja mobiili näyttävät hyviltä
2. **Tarkista kaikki värit** — varmista kontrasti ja saavutettavuus
3. **Testaa typografia** — varmista luettavuus kaikissa ko'oissa
4. **Vahvista asettelu** — tarkista välit ja kohdistus
5. **Hyväksy suunnittelu** — siirry teeman luontiin

## Seuraavat vaiheet

Suunnittelusuunnan hyväksymisen jälkeen:

1. Theme Builder luo täydellisen teemasi
2. Teema asennetaan WordPress-sivustollesi
3. Voit mukauttaa lisää WordPressin mukauttimella
4. Siirry kohtaan [Hospitality-valikot](./hospitality-menus.md) tai muihin ominaisuuksiin

## Parhaat käytännöt

- **Testaa oikeilla laitteilla** — käytä oikeita puhelimia ja tabletteja, jos mahdollista
- **Tarkista luettavuus** — varmista, että teksti on luettavaa kaikissa ko'oissa
- **Varmista kontrasti** — käytä [Validate Palette Contrast](../abilities/validate-palette-contrast.md) saavutettavuuden varmistamiseen
- **Huomioi suorituskyky** — optimoi kuvat ja fontit nopeutta varten
- **Suunnittele sisällön mukaan** — varmista, että asettelu toimii todellisen sisältösi kanssa

## Vianmääritys

### Esikatselu ei päivity

- Päivitä sivu
- Tyhjennä selaimen välimuisti
- Kokeile toista selainta
- Tarkista internetyhteys

### Värit näyttävät erilaisilta

- Tarkista näytön väriasetukset
- Kokeile eri laitteilla
- Varmista värikontrasti saavutettavuustyökaluilla
- Harkitse värisokeussimulaattoreita

### Typografiaongelmat

- Varmista, että fonttitiedostot latautuvat
- Tarkista fonttikoko eri katkaisupisteissä
- Testaa todellisella sisällöllä
- Huomioi rivin pituus luettavuuden kannalta

## Aiheeseen liittyvä dokumentaatio

- [Discovery Interview](./discovery-interview.md) — kerää suunnittelutietoja
- [Hospitality Menus](./hospitality-menus.md) — luo rakenteisia valikkosivuja
- [Validate Palette Contrast](../abilities/validate-palette-contrast.md) — tarkista värien saavutettavuus
- [Generate Logo SVG](../abilities/generate-logo-svg.md) — luo mukautettuja logoja
