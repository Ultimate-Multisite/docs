---
title: Producaethau a Prysau y Domenaid
sidebar_position: 2
_i18n_hash: 48757ad5b423db8f169a793b96d7bc71
---
# Producaeddau Domena a Prifyniadau

Mae producaeddau domena yn ddefnyddio i gwneud cyd-deall ar prifyniadau, TLDs (Top-Level Domains), gwarchnad WHOIS, a wybullesu y cyfiderdd. Mae pob producaed domena yn produs Ultimate Multisite standard gyda thlab **Domain Settings** (Cyd-deallau Domena) ychwanegol.

## Creu proddecaed domena

1. Ymddangos i **Network Admin › Ultimate Multisite › Products**
2. Clic ar **Add New** (Ychwaneg New)
3. Rheoli'r mathwedd produs yn **Domain** (Domena)
4. Rheoli'r thlab **Domain Settings** (cysylltu isod) (gwylio isod)
5. Saeswch

Mae producaeddau domena yn dangos gyda badge **Domain** (Domena) mor morwch yn y rheol produs ac gallai cael eu filtru drwy'r thlab **Domain Products**.

## Thlab Domain Settings

### Provider (Cyfiderddwr)

Sgynlltu beth yw'r registrar sydd â'r cyfrannu ar gyfer y proddecaed hwn. Mae'n ddefnyddio'r **Default provider** (Cyfiderddwr Defnyddiol) global a'i cael ei setio mewn rheol Domain Seller.

### Supported TLDs (TLDs Cyfathogh)

Rhaid i'w gadael yn gwbl i creu proddecaed **catch-all product** (proddecaed cyflenwiol) sydd ar gael i'r holl TLDs nad yw'n cael eu cyfathogh gan produs arall.

Rheoliwch llyfr gyfathogh o TLDs wedi'u cynnwys yn cyfeiriad (e.g., `.com, .net, .org`) i creu proddecaed **TLD-specific product** (proddecaed penodol TLD) sydd ar gael yn unig i'r gyfathriadau hyn.

**Sut mae cyfathogi produs yn gweithio:** Pan mae cyd-defnyddi'r clustog ar gyfer domena, mae'r addon yn gw milltedd proddecaed sydd â'r cyfathogi mwyaf penodol. Mae proddecaed gyda `.com` mewn llyfr TLD ei ddefnyddio'n gynnigol oproddecaed catch-all. Os nad oes unrhyw produsau sydd, nid cael y chwilio domena yn dangos.

### Markup type (Mathwedd Math)

Mae tri modd yn gwario sut mae eich prifyniad riedhosiad yn cael ei cyfrannu o'r cost wholesale:

| Modd | Sut mae'n gweithio |
|---|---|
| **Percentage** (Penodol) | Ychwanegwch penodol ar y cost wholesale. Mae mathwedd 20% ar gyfer domena wholesale $10 yn rhoi $12. |
| **Fixed markup** (Mathwedd Cyflenwiol) | Ychwanegwch amlwr drosol. Mae mathwedd $5 ar gyfer domena $10 yn rhoi $15. |
| **Fixed price** (Prifyniad Cyflenwiol) | Mae'n gwella cost wholesale yn llwyr. Mae'n cyfrannu y amlwr sydd â'i gael. |

### Introductory pricing (Prifyniad Prifynol)

Gaelogwch i offer pris cyntaf wedi'i ddefnyddio. Rheoli **Pris Cyntaf** (pris y bleau) yn rhydd o'r **Pris Atal** (pris 2 a'o). Mae'r cyd-fyndol yn gweld both prysau hyn yn ystod y chefnogaeth i gwybod beth i'w gofyn ar atal.

### Cynhyrchu gyfrifau WHOIS

Rhyddwch beth yw cyflwyno amddiffyniad WHOIS ar gyfer domenau a roedd wedi'u regrann drwy'r produsg hwnnw.

| Rheoli | Gweithrediad |
|---|---|
| **Arwain** | Nid cael unrhyw ddifyniad WHOIS neu ei chynllunio. |
| **Mae'n cael ei ddefnyddio bob amser** | Mae ddifyniad WHOIS yn cael ei chynllunio'n awtomatig ar gyfer regrann gyda chwarae nad oes cost. |
| **Deall y gartref** | Mae'r cheffyniad Prifau ar gyfer cyflym yn dangos i'w ddarganfod per year, neu rhieni'n ei gadael ar $0 i offerio'r ffurf. |

Ar Namecheap, mae WHOIS privacy yn defnyddio WhoisGuard (bob amser rydyn). Ar OpenSRS, mae'n defnyddio gwasanaeth cyfrifau OpenSRS (gall fod â cost ar gyfer y ddefnydd o'r wholesale).

---

## Cyflwyno a chysylltu TLDs

Mae produsau domenau yn dangos pris wholesale mewn amser byr a cael ei ddefnyddio gan y cyfiderwr sydd wedi'i cysylltu. I fod hyn yn gweithio, rhaid i'r TLDs i cael eu cyflwyno.

- **Cyfrifau manwl:** Rheoliadau › Domain Seller › Sync TLDs (per provider)
- **Cyfrifau awtomatig:** Mae’n gweithio bob dydd drwy cron job wedi'i cysylltu arall arall i gyd-fyndol.

Ar ôl cyfrif, mynd i unrhyw tab Rheoliadau Domain o'r produsg domen yn defnyddio'r pwyllgor TLD i weld y TLDs a ddefnyddi gyda'u pris wholesale ar gyfer y cyflym.

---

## Atal awtomatig

Mae atal domenau wedi'i cysylltu â'r statws y gweithredwr:

- Pan mae rhywbeth yn atal ac mae domen wedi'i cysylltu, mae atal domen yn cael ei cyflwyno'n awtomatig
- Mae ymchwiliadau atal yn defnyddio'r gwyddu cyfrif y gweithredwr yn weithredol
- Mae atalau wedi'u ddefnyddio'n drosol gyda chwarae arall (exponential backoff)
- Mae anfoniadau e-bost yn cael eu cyflwyno am atalau llwyddiannus, fethau, a chyfathriadau yn ymlaen

| Digwyddiad | ID y Template |
|---|---|
| Cyfeiriad wedi'i regrâd | `domain_registered` |
| Cyfeiriad wedi'i atalio | `domain_renewed` |
| Atalio cyfeiriad wedi'i ddefnyddio | `domain_renewal_failed` |
| Cyfeiriad yn cael ei ddefnyddio yn fuan | `domain_expiring_soon` |

---

## Admin: Regrâd cyfeiriad manwl

Ireg cyfeiriad ar ôl y cyddeewr heb eu mynd trwy'r checkout:

1. Ymddangos i **Network Admin › Ultimate Multisite › Register Domain**
2. Dewch y cyddeewr a rhoi enw y cyfeiriad
3. Bawb y cyflwyniadau cysylltiad y regrâdwr (enw, adres, ffon)
4. Clic ar **Register**

Mae'r regradd cyfeiriad yn cael ei creu ac yn cael ei cysylltu â'r cyfrifoldeb y cyddeewr.
