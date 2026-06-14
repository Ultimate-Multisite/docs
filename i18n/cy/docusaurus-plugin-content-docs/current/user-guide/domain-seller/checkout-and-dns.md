---
title: Fael y Cyflwyniad a DNS Cwmiwr
sidebar_position: 3
_i18n_hash: b5312cf530779a7cb03d611e6827be87
---
# Gweithioedd y Cyflwyniad a Gwarlo DNS o'r Clientwr

## Y field Dechlinio Ddwyllian (Domain Selection)

Mae'r field **Dechlinio Ddwyllian** yn element o'r cyflwyniad checkout sy'n rhoi ddefnyddiol i'r tebyg i gael y ddwyllian eu siwyl. Refnogwch ef i unrhyw ffurf checkout i gael ei ddefnyddio ar gyfer gwerthu ddwyllian.

### Ymloi'r field i ffurf checkout

1. Gweithio i **Network Admin › Ultimate Multisite › Checkout Forms**
2. Agorwch neu creuwch ffurf checkout
3. Yn y redytor checkout, gwchwch ar **Add Field** (Ymloi Field)
4. Dewch **Domain Selection** o'r llyfr ffieldau
5. Rheoliwch y opsiynau y field (gweli isod)
6. Cadw'r ffurf

### Opsiynau y field

**Modau ddwyllian (Domain modes)** — Dewch beth yw'r tabau a'r tebyg yn gweld. Gall cael unrhyw un o'r modau i gael ei chwarae neu ddwyn yn sefydlog:

| Mod | Beth mae'n gwneud |
|---|---|
| **Subdomain** | Mae'r tebyg yn defnyddio subdomain cyffredinol ar y rheol eich network (e.e., `mysite.yournetwork.com`). Nid oes angen gwerthu. |
| **Register New Domain** | Mae'r tebyg yn chwilio am ddwyllian newydd a'i gwerthu drwy'r prifwr sydd wedi'i rheoli. Defnyddiwch y produsdd ddwyllian gyfathogol ar gyfer y pris. |
| **Existing Domain** | Mae'r tebyg yn mapi ddwyllian sydd ei fod wedi'i gael. Nid oes angen cyfrifau gwerthu. Mae'r ddwyllian yn cael ei mappio'n awtomatig i'w siwyl. |

**Mod defnyddiol (Default mode)** — Pan mae pob un o'r tri modau wedi'i chwarae, pa tab yw'r cyntaf sydd yn agor? Rheoliwch i **Subdomain** i gadw gwerthu ddwyllian yn ddefnyddiol, neu **Register New Domain** i gefnogi y gwerthu.

**Prodwydd ddwyllian (Domain product)** — Gallwch chi gwneud ei field yn cyfathogol i produsdd ddwyllian penodol. Os nid yw'n cael ei setio, mae'r addon yn dewis prodwydd gyfathogol ar adeiladu ar gyfer y TLD (Top-Level Domain) a'r tebyg yn chwilio am.

### Ffieldau cyflwyniad gwrthrychiadwr (Registrant contact fields)

Pan mae'r tebyg yn dewis tab **Register New Domain**, mae'r ffurf checkout yn ychwanegu ffieldau cyflwyniad gwrthrychiadwr yn llwyr:

- Enw cyntaf / Enw olaf
- Adres (linell 1, dinas, stat/provinsi, cod post, wlad)
- Rhif ffôn

Mae'r hyn ymlaenau hyn yn cael eu cyflwyno gan holl gweithredwyr a fydd yn cael eu chyfathriol قبل asgynnu'r API o gyfrannu. Mae nwyromau ffôn yn cael eu ffurfio'n awtomatig i ffurf international `+CC.NNN` sydd yn cael ei gofyn gan y gweithredwyr.

### URL siat aros-gynnol (Auto-generated site URL)

Pan mae client yn regrannu neu gyfathrioli domain, mae'r field URL siat yn cael ei cyflwyno'n awtomatig o'r domain a ddewiswyd. Nid oes angen i'r client gwneud fylch mewn field URL parhaol.

### Ymhlawnydd chwilio (Search behaviour)

- Mae cyfathrioliad domain yn cael ei gyfeiriol mewn amser byr gyda AJAX pan mae'r client yn teimlo
- Mae cynlluniau TLD allweddol arall yn cael eu dangos pan nid yw'r domain a dymunwyd yn llai
- Mae prifyniadau yn cael eu cyfathriol mewn byth ac yn cael eu dangos yn glir (prifyniad regrannu, prifyniad atalio, prifyniad WHOIS allweddol)
- Mae codau coupon yn golygu ar gyfer cynnyrion domain fel ychwanegol i unrhyw produs agor

**Tylau'r chwilio i ddefnyddio:**

```php
// Yn ddefnyddio cyfathrioliad debens (milliseconds) i ddifyn y cyfarfeydd API ar cysylltiadau llawer
add_filter('wu_domain_seller_search_delay', function($delay) {
    return 800; // defnyddiol: 500
});
```

**Cynllunio fylch newydd i ffurf chwilio domain:**

```php
add_filter('wu_checkout_form_register_domain_form_fields', function($fields) {
    $fields['custom_note'] = [
        'type'  => 'text',
        'label' => 'Notedion ychwanegol',
    ];
    return $fields;
});
```

---

## Rheoli DNS o ddefnyddwyr (Customer DNS management)

Gall y gweithredwyr rheoli cyfrannau DNS ar gyfer eu domainau aregwyd o'r dudalen **My Account**, yn ôl y cyflwyniad eu domain.

### Cypathau cyfrannau a ddefnyddio

| Tyd | Defnydd |
|---|---|
| **A** | Mae'n cyfathrioli'r enw gweithredol i adran IPv4 |
| **AAAA** | Mae'n cyfathrioli'r enw gweithredol i adran IPv6 |
| **CNAME** | Creu alias sydd yn cael ei gyfeiriol i enw gweithredol arall |
| **MX** | Rheoli server cyfrannau llwybr |
| **TXT** | Ychwanegu codau SPF, DMARC, cyfathrioliad, neu codau text eraill |

### Pa beth sy'n chynllunio rheoli DNS?

Mae rheoliad DNS (ydd, redig, gwbl) ar gael gyda **OpenSRS**, **ResellerClub**, **Enom**, **HostAfrica**, a **Openprovider**. Gallai'r domena Hostinger gwneud newidi'r amrywiadau name server trwy Domain Seller; mae cyfathiadau DNS ar gyfer domena cael ei gysylltu yn cael eu rheoli gan y cyfathiadau domain-mapping sydd yn cyd-fynd â WordPress. Mae domena Namecheap, GoDaddy, a NameSilo yn dangos cyflwyniad a wybodaeth am ddyddiadau diwethaf ond rhaid i'r DNS ei rheoli'n dros y panel cyd-gweithredol y registrar sydd yn cael ei gysylltu.

### Cyfathiadau DNS ddefnyddiol (Default)

Gallwch chi gynllun cyfathiadau DNS ddefnyddiol sydd wedi'u cyflwyno'n awtomatig pan fydd domena yn cael ei regrffynnu. Ymddangos i **Settings › Domain Seller › Default DNS Records**.

Mae gwerthau ddefnyddiol ychwanegol (Default record values) yn cefnogi ddau token:

| Token | Yn cael ei allw'n gwahaniaeth â |
|---|---|
| `{DOMAIN}` | Enw domena wedi'i regrffynnu (e.e., `example.com`) |
| `{SITE_URL}` | URL y safle WordPress ar gyfer safle y cyd-defnyddwyr |

**Esgwyddo — rhoi'r apex domain a www i'r IP y dyfarn:**

```
Type: A
Name: {DOMAIN}
Value: 203.0.113.10

Type: CNAME
Name: www.{DOMAIN}
Value: {DOMAIN}
```

### Admin: gwylio a redig DNS

Gall y gweithredwyr cyd-gweithredol gwylio a redig cyfathiadau DNS ar gyfer unrhyw domena cyd-defnyddwyr o'r dudalen redig y domena yn **Network Admin › Ultimate Multisite › Domains**.
