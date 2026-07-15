---
title: Zvinhira dziri dzeNkhani dzakare uye Mhando dzemakore
sidebar_position: 2
_i18n_hash: 48757ad5b423db8f169a793b96d7bc71
---
# Zvinodi Kurumbira neKupedzisira

Domain products ndiyo nzira unogona kuva uri wauri kurumbidza upfungundu, TLDs (Top-Level Domains), WHOIS privacy, uye uchigadzirisa vanopenyu. Chikonzero chakanaka, munzvimbo dzese dzinogona kubva panguva yakakwana ya Ultimate Multisite netabu inotodzidzira **Domain Settings**.

## Kuita domain product {#creating-a-domain-product}

1. Enda kuenda kune **Network Admin › Ultimate Multisite › Products**
2. Chibvumira **Add New**
3. Ramba uri upfungundu weproduct yacho ndiyo **Domain**
4. Ramba uri mutsara we **Domain Settings** (ona pano)
5. Save

Domain products dzabva nebadge re-purple re**Domain** munzvimbo dzeproducts uye ndizogona kuonekwa nekubatsirwa netabu ya **Domain Products**.

## Tab ye Domain settings {#domain-settings-tab}

### Provider {#provider}

Chibvumira kuti upereke nenzira inoshandiswa kune registration yechidzidzo chacho. Inoita zvakare iye **Default provider** inotanga mune Domain Seller settings.

### Supported TLDs {#supported-tlds}

Ramba uri panguva yakakwana kuti uingise list ye TLDs (kuti zvinhu zviri kuitwa, saka .com, .net, .org) kuti uingise product inoshandiswa nekuti inoshandiswa neproduct rechinangwa chekuti iye anozivikanwa.

**Kuti matching ye product inogona kuenda sei:** Kana munhu achifamba kudzidza domain, addon inotanga kuita product inosimba uye inosimbisa zvakanyanya. Product inoshandiswa ne `.com` mu list ye TLDs inosimbisa pane product rechinangwa chekuti iye anozivikanwa. Kana usina product yechidzidzo chekuti uingise, product rechinangwa chekuti iye anozivikanwa rinogona kuenda. Kana usina products, kudzidza domain hachazowoneonekwa.

### Markup type (Chikamu chakanaka) {#markup-type}

Mazuva matatu anogona kuita kuti upfungundu yako ya retail inenge yakaitwa sei kubva kuupedzisira we wholesale cost:

| Mode | Inoita sei |
|---|---|
| **Percentage** | Inogadzirisa percentage pamusoro pe wholesale cost. Markup ye 20% pamusoro pe domain inoshandiswa newholesale cost ya $10 inogona kuita $12. |
| **Fixed markup** | Inogadzirisa shamba rine dollar amount. Markup ye $5 pamusoro pe domain inoshandiswa ne wholesale cost ya $10 inogona kuita $15. |
| **Fixed price** | Inogona kunzwa wholesale cost zvose. Inogona kuita chaka chaka chako chiri munzira unogadzirisa. |

### Introductory pricing {#introductory-pricing}

Kusarira kuipa chineera zvinhu zvakakosha.

### WHOIS privacy {#whois-privacy}

Ino shandisa kuti uone kuti kune zvinangwa (domains) zvichigadzirwa kunzwisisa kwemweya (WHOIS privacy protection) kana kuti haunogona kushandiswa.

| Setting | Kufungwa |
|---|---|
| **Disabled** | WHOIS privacy haingazivikanwa kana kuva kune. |
| **Always Included** | WHOIS privacy inozivikanwa nekuti iwe utangei kunge, uye haunogona kuita zvinhu nezvinhu. |
| **Customer Choice** | Chibvumirano chinotopwa nguva yakare kana checkout. Shandisa **Privacy price** kuti uone kupfuura kwa mwaka, kana kuti shandisa $0 kuti utangei kunge unogona kuita zvichi chine kune. |

Kuti Namecheap, WHOIS privacy inoshandisa WhoisGuard (inotsvaga nekuti haunogona kuita zvinhu). Kuti OpenSRS, inoshandisa service ya OpenSRS (kunyangwe kunogona kuva nekuita zvinhu kana kupfuura kwa wholesale).

---

## TLD import and sync {#tld-import-and-sync}

Zvinangwa (domain products) zvinokwanisa kuone upfuura wewholesale wemweya (real-time wholesale pricing) unotsvaga kubva munzvimbo yakaita kune provider. Kuti izvi zvigone, TLDs dzinogona kuva kunge dzakagadzirwa.

- **Manual sync:** Settings › Domain Seller › Sync TLDs (per provider)
- **Automatic sync:** Inoenda nekuita mazuva nekuita cron job yakatidzidzwa pamusoro peproviders wose wakaonekwa.

Panguva ya sync, enda ku tab ya Domain Settings yevine dziri munangwa uye shandisa TLD picker kuti uone TLDs dzinogona kubva nekupfuura kwa wholesale kwavo.

---

## Auto-renewal {#auto-renewal}

Kupfuura kwezvinangwa (domain renewals) kunoshandiswa nekuita membership ya mutenda wese:

- Kana membership inotamba uye domain inokwanisa, kupfuura kwedomain kunogadzirwa nekuti kune.
- Zvinhu zvinotamba zvichishandisa payment gateway yakakwana yevine.
- Kupfuura kwakavara kunoreva kuti zvinotamba zvichingopfuura nekuita retry (exponential backoff).
- Notifications dzememail dzinotsvaga kupfuura kwezvinangwa, kupfuura kuitika, uye kupfuura kunoda kuenda.

Email template IDs dzinotsvaga lifecycle events yevine dziri munangwa:

| Event | Template ID |
|---|---|
| Domain registered | `domain_registered` |
| Domain renewed | `domain_renewed` |
| Renewal failed | `domain_renewal_failed` |
| Domain expiring soon | `domain_expiring_soon` |

---

## Admin: Kuratira (Manual) kuregistira domaini {#admin-manual-domain-registration}

Ukuregisira domaini kubva kuita kwa mwanawo asi vachikumbire checkout:

1. Enda ku **Network Admin › Ultimate Multisite › Register Domain**
2. Chigadzira mwanawo uye shandisa dzina dzo domaini
3. Shandisa maitemo ekutanga (zita, chiri chete, phone)
4. Chibvumira **Register**

Rakaureki rekuregistra rine kuita nekubatanidza neakuru ye mwanawo.
