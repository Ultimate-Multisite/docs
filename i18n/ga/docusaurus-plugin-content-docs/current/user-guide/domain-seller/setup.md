---
title: An t-aonráin agus an chuidí oibríochta
sidebar_position: 1
_i18n_hash: 854fd649457edceefde0eb8246446ebe
---
# Seller Domáin: Set-up agus Coinníollacha Anailís {#domain-seller-setup-and-provider-configuration}

Tá an Addon Domain Seller ag cur le chéile ar fáil le seomra set-up a bhfaidh tú tréimhse ar chuid deatach a thaispeánann go léir gach áit ag cur le chéile. Cuireann an cur chuimne seo an t-amach agus conas a chur in áit nó a athchruinneáil na cungaitheoirí (providers) tar éis.

## Cinnteanna {#requirements}

- **Multisite Ultimate** v2.4.12 nó níos fearr, le fáil ar na ngrúpa (network-activated)
- **PHP** 7.4+
- Cuidiúin API do chuid registrar a bhíonn ag cur le chéile

## Seomra set-up ar an áit ar an chéad uair {#first-run-setup-wizard}

Lánann an seomra set-up go mbeidh tú an t-amach ar an chéad uair atá tú ag fáil ar na ngrúpa (network-activate) an plugin. Tá sé cur faisnéis ag aon am chun **Network Admin › Ultimate Multisite › Domain Seller Setup** a bheith agat.

### Step 1 — Déan chun cungaitheoir a chur in áit {#step-1--choose-a-provider}

Déan chun an registrar atá tú ag cur le chéile a chur in áit. Opciones a bhíonn ar fáil:

| Cungaitheoir | Cur chuimne DNS | Físeachas WHOIS |
|---|---|---|
| OpenSRS | Is | Is |
| Namecheap | Níl | Is (WhoisGuard, grát) |
| HostAfrica | Is | Is (ID protection) |
| Openprovider | Is | Is |
| Hostinger | Trá do chuid domaina cur le chéile ar fáil | Is |
| GoDaddy | Níl | Níl |
| ResellerClub | Is | Níl |
| NameSilo | Níl | Níl |
| Enom | Is | Níl |

### Step 2 — Déan chun faisnéis a chur in áit {#step-2--enter-credentials}

Tá feidhm cheangailte ag cungaitheoirí éasca ag cur le chéile:

**OpenSRS** — Username agus private key (as fháil mar chuid OpenSRS Reseller Control Panel)

**Namecheap** — Username agus API key (as fháil mar Account › Tools › API Access)

**HostAfrica** — Endpoint API deiridh a chur le chéile agus faisnéis mar chuid module reseller HostAfrica. Níl endpoint sandbox seachaint ag cur in áit anois; déan ar chuid chreideanna safe read-only ar fáil primaithe ar bheith a dhéanamh ar na cur chuimne laigh primaithe.

**Openprovider** — Username agus password le cur fáil API. Is féidir modh sandbox optional a úsáid API Openprovider, agus is féidir handle custaimer default optional a úsáid ar fáil do cur le chéile.

**Hostinger** — An t-token hPanel shared de Hostinger óraig seo. An t-token cé aith chun mapeáil domáin core agus oiriúnachais oiriúnaithe Domán Seller.

**GoDaddy** — API key agus secret (os developer.godaddy.com)

**ResellerClub** — ID Reseller agus API key (os control panel ResellerClub)

**NameSilo** — API key (os namesilo.com › Account › API Manager)

**Enom** — ID Account agus t-token

Chonrócht **Sandbox mode** a bhfuil sé ar fáil chun teastáil ar an chuid test de bhfostála leat ar an chuid ardán ar an chuid test de bhfostála primaill ar bhealach a bhí.

### Step 3 — Teastaigh an cur chuimneamh {#step-3--test-the-connection}

Cliceáil ar **Test Connection**. Bíonn an fáil ag an mór a chur ar API call leat chun cur chuimhneamh agus cur chuimhneamh ar chuid féin a sholáir. Féach an aon cheisteanna cur chuimhneamh primaill go léir primaill a bheith agat primaill go léir a bhí agat primaill a fháil go léir a bheith agat primaill a bheith agat primaill a fháil go léir a bheith agat primaill a bheith agat primaill a fháil go léir a bheith agat primaill a bheith agat primaill a fháil go léir a bheith agat primaill a bheith agat primaill a fháil go léir a bheith agat primaill a bheith agat primaill a fháil go léir a bheith agat primaill a bheith agat primaill a fháil go léir a bheith agat primaill a bheith agat primaill a fháil go léir a bheith agat primaill a bheith agat primaill a fháil go léir a bheith agat primaill a bheith agat primaill a fháil go léir a bheith agat primaill a bheith agat primaill a fháil go léir a bheith agat primaill a bheith agat primaill a fháil go léir a bheith agat primaill a bheith agat primaill a fháil go léir a bheith agat primaill a bheith agat primaill a fháil go léir a bheith agat primaill a bheith agat primaill a fháil go léir a bheith agat primaill a bheith agat primaill a fháil go léir a bheith agat primaill a bheith agat primaill a fháil go léir a bheith agat primaill a bheith agat primaill a fháil go léir a bheith agat primaill a bheith agat primaill a fháil go léir a bheith agat primaill a bheith agat primaill a fháil go léir a bheith agat primaill a bheith agat primaill a fháil go léir a bheith agat primaill a bheith agat primaill a fháil go léir a bheith agat primaill a bheith agat primaill a fháil go léir a bheith agat primaill a bheith agat primaill a fháil go léir a bheith agat primaill a bheith agat primaill a fháil go léir a bheith agat primaill a bheith agat primaill a fháil go léir a bheith agat primaill a bheith agat primaill a fháil go léir a bheith agat primaill a bheith agat primaill a fháil go léir a bheith agat primaill a bheith agat primaill a fháil go léir a bheith agat primaill a bheith agat primaill a fháil go léir a bheith agat primaill a bheith agat primaill a fháil go léir a bheith agat primaill a bheith agat primaill a fháil go léir a bheith agat primaill a bheith agat primaill a fháil go léir a bheith agat primaill a bheith agat primaill a fháil go léir a bheith agat primaill a bheith agat primaill a fháil go léir a bheith agat primaill a bheith agat primaill a fháil go léir a bheith agat primaill a bheith agat primaill a fháil go léir a bheith agat primaill a bheith agat primaill a fháil go léir a bheith agat primaill a bheith agat primaill a fháil go léir a bheith agat primaill a bheith agat primaill a fháil go léir a bheith agat primaill a bheith agat primaill a fháil go léir a bheith agat primaill a bheith agat primaill a fháil go léir a bheith agat primaill a bheith agat primaill a fháil go léir a bheith agat primaill a bheith agat primaill a fháil go léir a bheith agat primaill a bheith agat primaill a fháil go léir a bheith agat primaill a bheith agat primaill a fháil go léir a bheith agat primaill a bheith agat primaill a fháil go léir a bheith agat primaill a bheith agat primaill a fháil go léir a bheith agat primaill a bheith agat primaill a fháil go léir a bheith agat primaill a bheith agat primaill a fháil go léir a bheith agat primaill a bheith agat primaill a fháil go léir a bheith agat primaill a

- **Fáilte ar an gcurraíocht domáin** — féach ar an fáil (toggle) an fáil go léir na feichar.
- **Chuidítheas leatúil** — an cuidítheas a thuigitheann chun curraíocht domáin agus píbiseanna nua a dhéanamh.
- **Max TLDs ar chuidítheas** — conas atá fáil ar TLDs (Top-Level Domains) a chekiú nuair a bhfaidh an custaimse a chur ar chuidítheas; cur mionglúcháin láidir a chuireann cur mionglúcháin níos mó ag fáil ach is éasca.
- **Tairgseán cache availability** — conas leat a dhéanamh ar an tairgseán (cache) ar na rathacha agus ar na táirgeanna; cur chuidítheas is airmiúla níl mór a chruthú ach aithreachaí API a chur in áit.
- **Tráchnaigh píbiseanna domáin** — línteán leatúil chun an liosta píbiseanna a chuiditeáil.
- **Curaíocht chuidítheisí** — léiríonn sé an fáil ar an gcurraíocht (Integration Wizard) chun cuidítheisí nua a chur i bhfeidm mar gheall ar chuidítheisí nó a athchruinneáil.

### Áirítear cuidítheis eile {#step-4--import-tlds}

Cliceáil ar **Curaíocht chuidítheisí** agus déan an fáil ar an gcurraíocht (wizard) ar an registrar nua. Is féidir leat cuidítheisí go léir a chur i bhfeidm go díreach, nó a bheith ag cur mionglúcháin leatúil. Déan an cuidítheas domáin chúirt chun cuidítheis a sholáthach a chur ar chuidítheas, nó léim go léir ar an cuidítheas leatúil.

### Synchreinradh TLDs go díreach {#step-5--create-a-domain-product}

Agair mór ar an curraíocht (settings page), cliceáil ar **Synchreinradh TLDs** a chur i bhfeidm ag cuidítheis nó a chuiditeáil chun an gníomhacha nua a laighinn. Is é seo go maith tar éifeachtach tar éifeachtach tar éifeachtach tar éifeachtach tar éifeachtach tar éifeachtach tar éifeachtach tar éifeachtach tar éifeachtach tar éifeachtach tar éifeachtach tar éifeachtach tar éifeachtach tar éifeachtach tar éifeachtach tar éifeachtach tar éifeachtach tar éifeachtach tar éifeachtach tar éifeachtach tar éifeachtach tar éifeachtach tar éifeachtach tar éifeachtach tar éifeachtach tar éifeachtach tar éifeachtach tar éifeachtach tar éifeachtach tar éifeachtach tar éifeachtach tar éifeachtach tar éifeachtach tar éifeachtach tar éifeachtach tar éifeachtach tar éifeachtach tar éifeachtach tar éifeachtach tar éifeachtach tar éifeachtach tar éifeachtach tar éifeachtach tar éifeachtach tar éifeachtach tar éifeachtach tar éifeachtach tar éifeachtach tar éifeachtach tar éifeachtach tar éifeachtach tar éifeachtach tar éifeachtach tar éifeachtach tar éifeachtach tar éifeachtach tar éifeachtach tar éifeachtach tar éifeachtach tar éifeachtach tar éifeachtach tar éifeachtach tar éifeachtach tar éifeachtach tar éifeachtach tar éifeachtach tar éifeachtach tar éifeachtach tar éifeachtach tar éifeachtach tar éifeachtach tar éifeachtach tar éifeachtach tar éifeachtach tar éifeachtach tar éifeachtach tar éifeachtach tar éifeachtach tar éifeachtach tar éifeachtach tar éifeachtach tar éifeachtach tar éifeachtach tar éifeachtach tar éifeachtach tar éifeachtach tar éifeachtach tar éifeachtach tar éifeachtach tar éifeachtach tar éifeachtach tar éifeachtach tar éifeachtach tar éifeachtach tar éifeachtach tar éifeachtach tar éifeachtach tar éifeachtach tar éifeachtach tar éifeachtach tar éifeachtach tar éifeachtach tar éifeachtach tar éifeachtach tar éifeachtach tar éifeachtach tar éifeachtach tar éifeachtach tar éifeachtach tar éifeachtach tar éifeachtach tar éifeachtach tar éifeachtach tar éifeachtach tar éifeachtach tar éifeachtach tar éifeachtach tar éifeachtach tar éifeachtach tar éifeachtach tar éifeachtach tar éifeachtach tar éifeachtach tar éifeachtach tar éifeachtach tar éifeachtach tar éifeachtach tar éifeachtach tar éifeachtach tar éifeachtach tar éifeachtach tar éifeachtach tar éifeachtach tar éifeachtach tar éifeachtach tar éifeachtach tar éifeachtach tar éifeachtach tar éifeachtach tar éifeachtach tar éifeachtach tar éifeachtach tar éifeachtach tar éifeachtach tar éifeachtach tar éifeachtach tar éifeachtach tar éifeachtach tar éifeachtach tar éifeachtach tar éifeachtach tar éifeachtach tar éifeachtach tar éifeachtach tar éifeachtach tar éifeachtach tar éifeachtach tar éifeachtach tar éifeachtach tar

| Chanál Log | Caipteann |
|---|---|
| `domain-seller-registration` | Conascthaíocht shlomach (slais agus fáil) de bhfostála |
| `domain-seller-renewal` | Results de job ríomhcheangailt |
| `domain-seller-opensrs` | Actáir API OpenSRS rudacha |
| `domain-seller-namecheap` | Actáir API Namecheap rudacha |
| `domain-seller-hostafrica` | Actáir API HostAfrica rudacha |
| `domain-seller-openprovider` | Actáir API Openprovider rudacha |
| `domain-seller-hostinger` | Actáir API Hostinger rudacha |
| `domain-seller-godaddy` | Actáir API GoDaddy rudacha |
| `domain-seller-resellerclub` | Actáir API ResellerClub rudacha |
| `domain-seller-namesilo` | Actáir API NameSilo rudacha |
| `domain-seller-enom` | Actáir API Enom rudacha |

---

## Nótaí ar chuid cúaitheoirí (Provider capability notes) {#reconfiguring-a-provider}

Ndiú mar n-éosta API de chuid registrar a chur i ardán na haghaidh gach oiriúnach. Tá an addon a chur in i ardán na oiriúnacha an-aontaithe (unsupported operations) le éiríneadh admin ar fáil go bhfuil siad ag déanamh éiríneadh ar fáil ach níl siad ag déanamh éiríneadh ar fáil.

- **HostAfrica** a thabhairt cur chuile oiriúnach ríomhcheangailte (live reseller workflow), gan cur isteach: leathrú, sincéin TLD/prisiú, fhaisáil, ríomhcheangailt, tairiscint, athrú nameserver, record DNS, codau EPP, lock registrar, agus chiontaí ID.
- **Openprovider** a thabhairt cur chuile sincéin prisiú reseller TLD, fhaisáil, ríomhcheangailt, tairiscint, athrú nameserver, zones DNS, codau EPP, lock registrar, agus chiontaí WHOIS privacy. Tá sé ag féachaint le token bearer beag-chúramh (short-lived) a bhfáthfaidh an addon go dtí an t-am ag athrú go dtí.
- **Hostinger** a thabhairt cur chuile fhaisáil ar fáil, ríomhcheangailt, fhaisáil portfolio, athrú nameserver, lock registrar, agus chiontaí WHOIS privacy tríd an token API hPanel cúaitheúil (shared). Níl API Domains public de Hostinger ag chur in i ardán prisiú reseller/wholesale, tairiscint inbound, ríomhcheangailt explicit, nó fhaisáil codau EPP; tá ríomhcheangailte ag athrú go dtí an t-am ach ar fáil.
