---
title: Produinntacha domáin agus prisiúchán
sidebar_position: 2
_i18n_hash: 48757ad5b423db8f169a793b96d7bc71
---
# Produidíocht Donáin agus Prísaí

Tá produidí donáin an cur chun cinn a bhfuil tú ag cur rath ar prísaí, TLDs (Top-Level Domains), privacy WHOIS, agus seilbhís cungaithe. Tá méid sảnraithe Multisite Ultimate deacairt le tab éifeachtach **Domain Settings** (Céadtaí Donáin).

## Creacht an produidí donáin

1. Déan cur isteach i **Network Admin › Ultimate Multisite › Products**.
2. Cliom ar **Add New** (Agradd Nua).
3. Déan an tairgseán sảnraithe go **Domain**.
4. Cuidigh an tab **Domain Settings** (déan ar an cur le chéile) (fáine seo a dhuit).
5. Síocháin (Save).

Bíonn produidí donáin ag teacht le badge **Domain** (Donán) gormhaiteach in bhfeidm sảnraithe agus is féidir iad a fháil ar chuid **Domain Products**.

## Tab Domain Settings

### Provider (Cungaitheoir)

Déan cur isteach an registrar a bheith ag teacht ar an cur le chéile chun an cur le chéile a chur in áit. Tá sé ag cur isteach an **Default provider** (Cur le chéile is gnáthach) a bhí ag cur rath i gcónaí sa chuid Domain Seller settings.

### Supported TLDs (TLDs a bhfháil)

Lónaithe go bhfuil sé leat chun produid a chur in áit a bheith ar **catch-all product** (produid a fháil ar gach chéad) a bhíonn ag cur rath ar gach TLD atá anseo níl ag cur rath ar produid eile.

Déan cur isteach línte chomhcheangta (comma-separated list) de TLDs (e.g., `.com, .net, .org`) chun **TLD-specific product** (produid a fháil ar chéad TLD) a chur in áit a bheith ag cur rath ar a chéile.

**Conas a bhíonn an cur le chéile ag eolais:** Nuair a bhíonn siúlacht chuid ischtatú ar donán, níl aon produid a fháil ar chuid a bhí ag teacht ar an cur le chéile. Tá produid le `.com` i línte TLD a bheith ag cur rath níos fearr ná produid catch-all. Má níl aon produid a fháil ar chéad TLD a bheith ag cur rath, is féidir an catch-all a úsáid. Má níl aon produid a fháil, níl an siúlacht donáin a shaosadh.

### Markup type (Téarann cur le chéile)

Trí modhanna a chiallaíonn conas a bhíonn prísa rialta agat ag cur rath ó chostais seilbhís:

| Mode | Conas a bhíonn sé ag eolais |
|---|---|
| **Percentage** (Péistí) | Tá spraoi ar phearsú ar chuid chostais seilbhís. Tá spraoi 20% ar donán chostais seilbhís $10 a thaispeánta $12. |
| **Fixed markup** (Spraoi cur le chéile) | Tá spraoi dólar cur le chéile. Tá spraoi $5 ar donán chostais seilbhís $10 a thaispeánta $15. |
| **Fixed price** (Prísa cur le chéile) | Níl aon chostais seilbhís ag cur rath go léir. Tá sé ag cur rath an táirge atá agat. |

### Introductory pricing (Prísa cur chun cinn)

Féach a bhfáth a fáil ar chuidas phríomhartha ar chuidais ar fáil. Déan seachaint **Price Initiúirc** (prisiann na hionn-1) seachaint le **Price Atam** (prisiann na hionn 2 agus níos lár). Bidh an chuidiste ag fheiceáil curte scáthair seo go dtí an t-aisleán, mar a bheith ag iarraidh a bheith ag éifeachtach ar athchruinne.

### Gnáthacha WHOIS (WHOIS privacy)

Céadfaidh sé a chur ar fáil an chiontáil WHOIS privacy do chuidais a bhaineann le domáin a sholáir go dtí an t-aonra seo.

| Seachaint | Déanamh |
|---|---|
| **Disabled** (An t-aonra) | Níl WHOIS privacy ar fáil nó chun éifeachtach. |
| **Always Included** (Ag cur isteach go léir) | Bidh WHOIS privacy ar chuidais ag cur isteach go léir ag an t-aonra ag cur isteach gan aon cheist. |
| **Customer Choice** (Chonacht chuidiste) | Bhíonn curte scáthair ag cur isteach ag an t-aisleán. Déan seachaint **Privacy price** a chur ar fáil per shannán, nó léim go dtí $0 chun é a chur ar fáil go raibh sé leat. |

Do Namecheap, usaíonn WHOIS privacy WhoisGuard (go léir gan cheist). Do OpenSRS, usaíonn siúlacht privacy OpenSRS (leathúil eirí phríomhartha ag an t-aonra).

---

## Import agus sincéad TLDs

Bíonn curte scáthair wholesale réel-time ag domáin a sholáir ag cur isteach ó chuidíthe a bhaineann leat. Chun cheann seo a bheith ar fáil, caithfidh TLDs a chur isteach.

- **Sincéad manachainn (Manual sync):** Settings › Domain Seller › Sync TLDs (per provider)
- **Sincéad authiomait (Automatic sync):** Déan sé lá ar fad tríd cron job ag cur isteach ar chuidíthe a bhaineann leat.

Tar éis an sincéad, rag thar an tab Domain Settings de domán aonair agus usaigh an t-picker TLDs chun TLDs atá ar fáil le prisianna wholesale a bheith agat ag cur isteach.

---

## Athchruinne authiomait (Auto-renewal)

Tá athchruinne domáin ag cur éifeachtach ar stáit chuidiste:

- Nuair a thaispeann an t-aonra agus a bhaineann domán, beidh athchruinne domáin ag cur isteach authiomait.
- Búnaíonn athchruinne a bheith ag úsáid an gcatadh de chuidiste atá ar fáil.
- Beidh athchruinne a fháil ag cur isteach go léir ag cur isteach authiomait le backoff exponintial (exponential backoff).
- Bidh e-mail notifications ag cur isteach do athchruinne a bheith ag éifeachtach, éirí phríomhartha, agus ar chuidais atá ag cur isteach.

ID template éirí phríomhartha do athchruinne domáin:

| Event | Template ID |
|---|---|
| Domain registered | `domain_registered` |
| Domain renewed | `domain_renewed` |
| Renewal failed | `domain_renewal_failed` |
| Domain expiring soon | `domain_expiring_soon` |

---

## Admin: Registration domain manualmente

Leide an domáin ar oiriócht de chuidisteoirí gan a bheith i gcóras checkout:

1. Go tới **Network Admin › Ultimate Multisite › Register Domain**
2. Déan chun an chuidisteoir a chur ar fáil agus cur an teangail domáin
3. Bhraigh an teangail contact de chuidisteoirí (teangail, áit, phone)
4. Cliog ar **Register**

Bíonn an cur chuig domáin ag cur isteach agus ag cur i gcomhionadh le an account de chuidisteoir.
