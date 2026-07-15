---
title: Cyfluniad a Cyfathrebu y Cynllunwrth
sidebar_position: 1
_i18n_hash: 854fd649457edceefde0eb8246446ebe
---
# Domain Seller: Rheoliad a Chwaraeon a Chwaraeon ac Cyflwyniadwr

Mae'r add-on Domain Seller yn cael ei gyflwyno gyda gwyrddiadau cyfarwyddiadol sy'n gweso chi trwy pob cynllun sydd angen. Mae'r dogfennau hwn yn gwrcio'r llwybr y wyrddiadau a sut i sicr ychwanegu neu drosglwyddo'r cyflwyniadwr ar ôl hynny.

## Cynllun y cyflym cyntaf {#requirements}

Mae'r wyrddiadau cyfarwyddiadol yn dechrau yn awt traws y tro cyntaf i gyflwyniadwch y plugin. Mae'n ar gael hefyd mewn unrhyw amser o **Network Admin › Ultimate Multisite › Domain Seller Setup**.

### Cynllun 1 — Dewch y chwaraeon {#first-run-setup-wizard}

Dechrau'r registrar syedig eich bod eisiau cysylltu. Opsiadau cyflwyniadol:

| Cyflwyniadwr | Rheoli DNS | Hifnogaeth WHOIS |
|---|---|---|
| OpenSRS | Yedd | Yedd |
| Namecheap | Nid | Yedd (WhoisGuard, rhanbarth) |
| HostAfrica | Yedd | Yedd (Cyddrefn ID) |
| Openprovider | Yedd | Yedd |
| Hostinger | Trwy mappio domain Hostinger sydd wedi'i gweithredu ar gyfer domainau sydd wedi'u gweithredu | Yedd |
| GoDaddy | Nid | Nid |
| ResellerClub | Yedd | Nid |
| NameSilo | Nid | Nid |
| Enom | Yedd | Nid |

### Cynllun 2 — Cyflwynwch y chwaraeon {#step-1--choose-a-provider}

Mae pob cyflwyniadwr yn cael ei ddefnyddio ffeiliau cyflwyniadol:

**OpenSRS** — Genymegneur a chref pren (o OpenSRS Reseller Control Panel)

**Namecheap** — Genymegneur a API key (o Account › Tools › API Access)

**HostAfrica** — Penodol API endpointau Domain Reseller a chwaraeon o module reseller HostAfrica. Nid oes penodol sandbox endpoint wedi'i ddefnyddio ar gyfer hynny; gwneud gwylio gyda chynllunion darllen yn unig cyn gwneud cyflwyniadau bydd yn gweithredol.

**Openprovider** — Genymegneur a pren gyda cyffredinol API access wedi'i chwaraeon. Mae modd sandbox optional yn defnyddio'r Openprovider sandbox API, ac gall ychwanegu handle cleient ddefnyddiol i gyflwyniadau cael ei ddefnyddio am gyflwyniadau.

**Hostinger** — Mae'r token hPanel siaradigol Hostinger sydd hanesydd o'r cyfathrebu core. Mae'r token yn gwneud ymddangosio domainau cynhwysol a gweithgareddau gyfrifolwr Domain Seller.

**GoDaddy** — API key a secret (o developer.godaddy.com)

**ResellerClub** — Reseller ID a API key (o panel cyddefnyddwyr ResellerClub)

**NameSilo** — API key (o namesilo.com › Account › API Manager)

**Enom** — Account ID a API token

Gwylio **Sandbox mode** lle mae'n cael ei ddefnyddio i gwneud gwyliau ar gyfer ystref â'r amgylchedd test o'r chyfathrebu cyn mynd i weithrediad.

### Cynllun 3 — Gwylio'r cysylltiad {#step-2--enter-credentials}

Cliciwch ar **Test Connection**. Mae'r gweithredwr yn anfon awi API llygfaol i gywirio cyfrifolion a chysylltiad. Gyfwrdd unrhyw anwylydion cyn datblygu.

### Cynllun 4 — Import TLDs {#step-3--test-the-connection}

Cliciwch ar **Import TLDs** i gael pob TLD a chyfathrebu pris wholesale o'r chyfathrebu sydd wedi'i cysylltu. Mae hyn yn cyflwyno'r llystref TLD a ddefnyddir eu proddectionau domain. Gall y import tynnu 30–60 segwn i gyfathreu gyda chyfathrebu sydd â llystref TLD mawr.

Mae TLDs hefyd yn cael eu cyfrifolio canlynol un gwaith mewn dydd drwy cron job wedi'i cysylltu.

### Cynllun 5 — Creu proddection domain {#step-4--import-tlds}

Mae'r gweithredwr yn creu proddection domain ddefnyddiol gyda chynllun 10%. Gallwch redig y proddection hwn yn gyflym neu gwneud proddectionau manwl yn ôl **Ultimate Multisite › Products**.

Gwylio [Domain Products and Pricing](./domain-products) ar gyfer cyfarwyddyd o'r proddection yn llawn.

---

## Reconfigu'r chyfathrebu {#step-5--create-a-domain-product}

Ymddangoswch i **Network Admin › Ultimate Multisite › Settings › Domain Seller** (neu clicwch ar **Settings** yn y llyfrgell pluginau).

Mae'r dudalen setegau yn cynnwys:

- **Gaelogio'r gaelogio** — rheoliwch y ffeithrin cyfan o'r ffeithrin aron/off
- **Cyflenwr ddefnyddiol** — y cyflenwr a cael ei ddefnyddio ar gyfer chwilio am domainau a produsau newydd
- **Max TLDs per search** — sut mae'r amlgen TLDs i gwch yn cael eu gwch yn rhyddwch; mae gwerthau wythnosol mwy yn dangos fwy o opsiynau ond mae hi'n ddrwg o hyd
- **Availability cache duration** — sut llawer amser i cachedio gysbyriaeth a rheiniadau cyfathrebu; mae gwerthau isonol yn fwy cywir ond mae'n lladdio cyfalafion API

- **Manage domain products** — linc cyflym i'r list Prodau
- **Configure providers** — agor y Wizard Cyfathriadau i drososi neu gyfathri newyddion

### Ychwanegu cyflenwr ail {#reconfiguring-a-provider}

Cliciw ar **Configure providers** a rhedeg y wizard eto ar gyfer y registrar newydd. Gallwch gael melyn cyflenwr yn cyflenwi'n amser yn unol. Gyfynnu pob produs domain i flenwr penodol, neu gadael ei fod ar ddefnyddiol.

### Cyfathri TLDs yn hanesyddol {#adding-a-second-provider}

Ar y peidiad setegau, cliciw ar **Sync TLDs** yn y cyflym gyda phob cyflenwr wedi'i gyfathri i gael y rheiniadau diwethaf. Mae hyn yn ddefnyddiol ar ôl bod y cyflenwr wedi cyfathri rheiniadau wholesale neu wedi ychwanegu TLDs newydd.

---

## Logs {#syncing-tlds-manually}

Mae pob cyflenwr yn ysgrifennu i'r llinell ei hun. Gallai gweld y llinellau o dan **Network Admin › Ultimate Multisite › Logs**:

| Llinell | Cynnwysiadau |
|---|---|
| `domain-seller-registration` | Pob cyflymion y cyfrifol (digonol a ddiweddar) (cyfathrebu a fethau) |
| `domain-seller-renewal` | Ailaduau gysbysu'r cyfrifol |
| `domain-seller-opensrs` | Gweithredoedd API OpenSRS sydd yn gwrth |
| `domain-seller-namecheap` | Gweithredoedd API Namecheap sydd yn gwrth |
| `domain-seller-hostafrica` | Gweithredoedd API HostAfrica sydd yn gwrth |
| `domain-seller-openprovider` | Gweithredoedd API Openprovider sydd yn gwrth |
| `domain-seller-hostinger` | Gweithredoedd API Hostinger sydd yn gwrth |
| `domain-seller-godaddy` | Gweithredoedd API GoDaddy sydd yn gwrth |
| `domain-seller-resellerclub` | Gweithredoedd API ResellerClub sydd yn gwrth |
| `domain-seller-namesilo` | Gweithredoedd API NameSilo sydd yn gwrth |
| `domain-seller-enom` | Gweithredoedd API Enom sydd yn gwrth |

---

## Notyn y gallu'r cyfathrebu (Provider capability notes) {#logs}

Mae nid pob API o'r registrar yn dangos yr unigol o weithgareddau. Mae'r addon yn dangos weithgareddau nad yw'n cael eu chwanegu gyda chyflwyniadau admin yn glir, yn hytrach na'i ddefnyddio yn sil ychwanegol.

- **HostAfrica** mae'n chwanegu'r ffordd gweithredol mwyaf cyffredinol o reseller, gan gynnwys chwilio (lookup), cysylltu TLD/gynlluniau, cyfrifol, ail-cyfrifol (renewal), trosennu (transfer), cyfathrebu enwserfer (nameserver updates), recordau DNS, codau EPP, gysylltiad registrar (registrar lock), a chawyd am y cyfrifol.
- **Openprovider** mae'n chwanegu cysylltu TLD gyda chyfrifol reseller, cyfrifol, ail-cyfrifol, trosennu, cyfathrebu enwserfer, zonau DNS, codau EPP, gysylltiad registrar, a gwarchnad WHOIS privacy. Mae'n cyflwyno â token bearer sydd yn cael ei adnewidiio'r addon yn awt.
- **Hostinger** mae'n chwanegu chwilio am ddefnyddio (availability search), cyfrifol, chwilio portfolio, cyfathrebu enwserfer, gysylltiad registrar, a gwarchnad WHOIS privacy drwy token API hPanel sydd yn cael ei rhannu. Mae'r API Domains o'r Hostinger yn dangos y chyfrifol reseller/wholesale, trosennu gan ddefnyddio (inbound transfer), ail-cyfrifol yn ddefnyddiol, neu gael codau EPP; mae ail-cyfrifoliadau yn cael eu ail-cyfrifoli yn awt dim ond.
