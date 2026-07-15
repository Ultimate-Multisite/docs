---
title: Chikoro Chepuro uye DNS ya Mwana
sidebar_position: 3
_i18n_hash: b5312cf530779a7cb03d611e6827be87
---
# Checkout Field and Customer DNS Management

## Famba ya Uchaguo wa Domain {#the-domain-selection-checkout-field}

Famba la **Domain Selection** ndicho chombo cha checkout kinachompa wateja uwezo wa kuchagua jinsi wanavyopata domain ya tovuti yao. Ongeeni kwenye fomu yoyote ya checkout ili kuwapa wateja uwezo wa kuuza domain.

### Kuongeza famba kwenye fomu ya checkout {#adding-the-field-to-a-checkout-form}

1. Nenda kwa **Network Admin › Ultimate Multisite › Checkout Forms**
2. Fungua au tengeneza fomu ya checkout
3. Katika mhariri wa checkout, bonyeza **Add Field** (Ongeza Famba)
4. Chagua **Domain Selection** kutoka kwenye orodha ya famba
5. Ripoti chaguo za famba (angalia chini)
6. Hifadhi fomu

### Chaguo za famba {#field-options}

**Domain modes** — Chagua tab zipi wateja wataziona. Kila mode inaweza kuweshwa au kuizimwa kwa kujitegemea:

| Mode | Inafanya nini |
|---|---|
| **Subdomain** | Mteja anatumia subdomain ya bure kwenye mtandao wako (k.m., `mysite.yournetwork.com`). Hakuna malipo yanahitajika. |
| **Register New Domain** | Mteja anatafuta domain mpya na kuifanyia usajili kupitia mtoa huduma uliofungua. Inatumia bidhaa ya domain inayolingana kwa bei. |
| **Existing Domain** | Mteja anahusisha domain aliyomiliki tayari. Hakuna ada ya usajili. Domain inahusishwa kiotomatiki na tovuti yao. |

**Default mode** — Wakati vyote vitatu vya modes vinapokuwa vimeweshwa, tab gani itafunguliwa kwanza. Weka **Subdomain** ili kuacha usajili wa domain kuwa chaguo tu, au **Register New Domain** ili kuwahamasisha ununuzi.

**Domain product** — Unaweza kuweka famba hii kwenye bidhaa maalum ya domain. Ikiwa haijewekwa, addon itachagua kiotomatiki bidhaa inayolingana kulingana na TLD ambayo mteja anatafuta.

### Famba za mawasiliano ya msajili (Registrant contact fields) {#registrant-contact-fields}

Wakati mteja anapochagua tab ya **Register New Domain**, fomu ya checkout inaanza kuongeza famba za mawasiliano ya msajili moja kwa moja:

- Jina la kwanza / Jina la pili
- Anwani (msimu wa 1, jiji, nchi/wilaya, namba ya posta, nchi)
- Namba ya simu

Nye zvinhu izivakwa nevanhu vose ve registrar uye zvinovavalidwa panguva yakare nekuti API call yekuregistra itarisirwa. Zvinoda inyota dzine namba dzinogadzirwa nekuti zvichigadzirwa kune format ya chinhu chete `+CC.NNN` inotarisirwa nevanhu ve registrar.

### Auto-generated site URL {#auto-generated-site-url}

Nekuti munhu anoregistra kana anopanga domain, field ye site URL inogadzirwa nekuti yeyo domain yakagadzirwa. Vanhu havi na chinangwa chekupa field ye URL pane.

### Search behaviour (Kugadzirisa Kufamba kweSearch) {#search-behaviour}

- Kuti zvinhu zvinogona kuonekwa mberi neAJAX kana munhu anoratidza, kunge kune kuratidza domain inoshandiswa nekuti munhu anotaura
- Zvinhu zveTLD (Top-Level Domain) zvinogone kuonekwa kana domain yakafanana isina kukwanisa kutarisirwa
- Mhinduro dzinoperekedza dzine mhinduro dziri kune zvinhu zvakasiyana (registration price, renewal price, optional WHOIS privacy fee) dzichigadzirwa nekuti zvinogone kuonekwa zvakanyanya

**Kugadzirisa kuratidza Search:**

```php
// Kurudza debounce delay (milliseconds) kuti zvinhu zveAPI zvizokwanisa kune connections dzine kurudzo
add_filter('wu_domain_seller_search_delay', function($delay) {
    return 800; // default: 500
});
```

**Kutanga custom fields ku domain search form:**

```php
add_filter('wu_checkout_form_register_domain_form_fields', function($fields) {
    $fields['custom_note'] = [
        'type'  => 'text',
        'label' => 'Additional notes',
    ];
    return $fields;
});
```

---

## Customer DNS management (Kugadzirisa DNS kweMunhu) {#customer-dns-management}

Vanhu vanogona kugadzirisa DNS records dzine domain dzavo dzinogadzirwa kubva pane page ya **My Account**, panguva yechinyorwa ye domain.

### Supported record types (Zvinhu zviri kuita) {#supported-record-types}

| Type | Use (Kuti chii) |
|---|---|
| **A** | Kuratidza hostname kune IPv4 address |
| **AAAA** | Kuratidza hostname kune IPv6 address |
| **CNAME** | Kupa alias inosimbisa kune hostname inotra |
| **MX** | Kuratidza mail exchange server |
| **TXT** | Kuratidza SPF, DMARC, verification, kana records dzine text dzine ngano dzine other |

### Which providers support DNS management? (Vanhu vanhu vose vanopara kugadzirisa DNS?) {#which-providers-support-dns-management}

Ukurati DNS management (kuongeza, kusasnya, kudivuta records) inowanikwa ne **OpenSRS**, **ResellerClub**, **Enom**, **HostAfrica**, na **Openprovider**. Domain dzine dzinogona kuupedzisira zvinobva nekuti ndiri munzira yakakwana. Domains dzine kudzidzwa (hosted domains) dzine DNS inodzidzwa neintegration ya core Hostinger domain-mapping. Domains dzine Namecheap, GoDaddy, na NameSilo dzinowanzisa status uye expiry information, asi DNS inofanira kuwedziswa nekuti munzira yakakwana yechikwiri (registrar's control panel).

### Default DNS records {#default-dns-records}

Mudawo unogona kuita default DNS records kuti zvizivikaniswe nekuita automatically kana domain iratidzidzwa. Endaenda ku **Settings › Domain Seller › Default DNS Records**.

Default record values dzine supporti tokens maviri:

| Token | Inozuva |
|---|---|
| `{DOMAIN}` | Zvinoda domain yakaratidzidwa (e.g., `example.com`) |
| `{SITE_URL}` | WordPress site URL yekuita customer's site |

**Example — point the apex domain uye www kuIP yako ya server:**

```
Type: A
Name: {DOMAIN}
Value: 203.0.113.10

Type: CNAME
Name: www.{DOMAIN}
Value: {DOMAIN}
```

### Admin: viewing and editing DNS {#admin-viewing-and-editing-dns}

Network admins vanogona kuona uye kusasnya DNS records dzine domain yese ya customer kubva munzira yakakwana yeedit page mune **Network Admin › Ultimate Multisite › Domains**.
