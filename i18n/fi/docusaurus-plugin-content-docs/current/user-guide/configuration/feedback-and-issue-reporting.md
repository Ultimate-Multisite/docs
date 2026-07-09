---
title: Asiakaspalautteet ja ongelmien raportointi
sidebar_position: 25
_i18n_hash: b8cc1801782ca29dbdcddcf9db34fb48
---
# Asiakkaanpalautteet ja ongelmien raportointi {#customer-feedback--issue-reporting}

Gratis AI Agent v1.5.0 tuo mukanaan sisäänrakennetun palautteen ja ongelmien raportoinnin järjestelmän, jonka avulla käyttäjät voivat merkitä hyödyttömät vastaukset ja raportoida ongelmia suoraan chatin käyttöliittymästä. Tämä järjestelmä sisältää suostumuksen hallinnan, automaattisen raportointikomennon ja taustajärjestelmän AI-avusteisen priorisoinnin (triage).

## Peukalo alas -painike {#thumbs-down-button}

AI-assistentin lähettämä jokainen viesti näyttää **peukalon alas** (👎) -painikkeen. Kun käyttäjä klikkaa sitä, hän voi merkitä vastauksen hyödyttömäksi tai virheelliseksi.

- Painike ilmestyy hiiren osoittimen ylle jokaisen avustajan viestin vieressä.
- Klikkaamalla painiketta aukeaa **Palautteen suostumusikkuna** (Feedback Consent Modal).
- Palautteen liitetään keskusteluketjuun ja kyseiseen viestiin.

## Palautteen suostumuksen ikkuna (Feedback Consent Modal) {#feedback-consent-modal}

Kun käyttäjä klikkaa peukalo alas -painiketta, ennen kuin mitään tietoja lähetetään, ilmestyy suostumusikkuna. Ikkuna:

- Selittää, mitä tietoja kerätään (keskustelun otos, selainkonteksti).
- Pyytää käyttäjää vahvistamaan suostumuksensa tietojen jakamiseen.
- Tarjoaa vapaamuotoisen tekstikentän, jolla käyttäjä voi kuvailla, mitä meni pieleen.
- Tarjoaa **Peruuta** -vaihtoehdon sulkeakseen ilman lähettämistä.

Palautetta ei tallenneta ennen kuin käyttäjä vahvista sen nimenomaisesti.

## Automaattinen palautteen banneri (Auto-Prompt Feedback Banner) {#auto-prompt-feedback-banner}

Keskustelun lopussa avustaja saattaa näyttää **automaattisen palautteen bannerin** — ei häiritsevä viesti, joka kysyy, oli vaihdon hyödyllinen.

Tämä banneri ilmestyy automaattisesti keskustelun pituuden ja tuloksen perusteella määritettyjen sääntöjen mukaisesti. Se linkittää samaan palautteeseen liittyvään prosessiin kuin peukalo alas -painike. Käyttäjät voivat sulkea bannerin ilman, että antavat palautetta.

## /report-issue slash command {#report-issue-slash-command}

Käyttäjät voivat käynnistää palautteen prosessin suoraan kirjoittamalla `/report-issue` chatin syöttökenttään. Tämä komento:

Avaa palautteen suostumusikkuna välittömästi.
Esitä kuvauskenttä kontekstilla nykyisestä keskustelusta.
Mahdollistaa käyttäjien lisätietojen lisäämisen ennen lähetystä.

`/report-issue` -komento on käytettävissä kaikissa chatiomodeissa (inline, kelluva widget, koko näyttö).

## AI-avusteinen priorisointi (AI-Assisted Triage) {#ai-assisted-triage}

Lähetetty palaute ohjataan AI-priorisointikerrokseen, joka:

- Luokittelee raportin (faktoimainen virhe, hyödytön vastaus, sopimaton sisältö jne.).
- Liittää asiaankuuluvat keskustelutiedot.
- Lähettää priorisointisuosituksen konfiguroitua **Feedback Endpoint** -päätepisteelle (katso [Asetukset > Edistyneet](#settings-advanced)).

Tämä vähentää manuaalista tarkastusaikaa esittämällä tärkeimmät ongelmat ensin.

## Asetukset > Edistyneet {#settings-advanced}

Jotta palaute-backend pääsee käytettäväksi, määritä seuraavat kentät **Gratis AI Agent → Asetukset → Edistyneet** -osiossa:

| Kenttä | Kuvaus |
|---|---|
| **Feedback Endpoint URL** | URL, joka vastaanottaa POST-pyyntöjä palaute-kuormilla (JSON). |
| **Feedback API Key** | Bearer-token, joka lähetetään `Authorization`-otsikossa palautteen lähettämisen varmennukseen. |

Jätä molemmat kentät tyhjäksi poistaaksesi palautteen keräämisen pois käytöstä. Yksittäiset palautepainikkeet pysyvät näkyvissä käyttäjille, mutta lähetetyt tiedot eivät lähetetä eteenpäin.

:::tip
Palaute-päätepisteen on hyväksyttävä JSON-runko, jossa on vähintään `message_id`, `conversation_id`, `feedback_text` ja `triage_category` -kentät. Katso päätepalveluntarjoajan dokumentaatiota nähdäksesi odotetun rakenteen.
:::
