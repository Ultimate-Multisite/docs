---
title: Mphindo wa Kufunga ndi Mphindo wa DNS wa Mwana
sidebar_position: 3
_i18n_hash: b5312cf530779a7cb03d611e6827be87
---
# Checkout Field and Customer DNS Management {#checkout-field-and-customer-dns-management}

## Kufuka kwa Kifaa cha Kuchagua Domain {#the-domain-selection-checkout-field}

Kifaa cha **Domain Selection** ndi chinthu chomwe kumakondome m'checkout chomwe kumapereka wamweneza kuti awone kuti angachita bwanji domain ya site yake. Tambani m'form yopereka checkout yoyote kuti muchezi kupereka domain.

### Kufamba ndi kifaa ku form yopereka checkout {#adding-the-field-to-a-checkout-form}

1. Phamu **Network Admin › Ultimate Multisite › Checkout Forms**
2. Opereka kapena chita form yopereka checkout
3. M'editor ya checkout, chita **Add Field**
4. Chonjeza **Domain Selection** kuchokera m'list ya fields
5. Onesha (configure) options za fieldo (one m'mmodzi)
6. Save the form

### Options za Fieldo {#field-options}

**Domain modes** — Onesha kuti tab zikuchezedwe ndi chiyani wamweneza. Kukhala kwa mode imodzi kumathandizira kapena kukhala m'mmodzi:

| Mode | Kodi ikupanga chiyani |
|---|---|
| **Subdomain** | Wamweneza amagwiritsa ntchito subdomain yosangalatsa pa network yanu (mwachitsanzo, `mysite.yournetwork.com`). Sakuti kulipeza mphatso. |
| **Register New Domain** | Wamweneza amachita search kwa domain yosangalatsa komwe ndipo amapereka m'provider yanu yomwe yenera. Imayendetsa product ya domain yosangalatsa yomwe yenera kwa mphatso. |
| **Existing Domain** | Wamweneza amapereka domain yosangalatsa komwe ndipo imayendetsedwa m'provider yanu. Sakuti kulipeza mphatso ya registration. Domain imayendetsedwa bwino ku site yake. |

**Default mode** — Pamene mode onse imodzi imathandizira, ipi tab yomwe ikupanga poyamba. Onesha kuti **Subdomain** kuti domain registration ikukhala opatsa (optional), kapena **Register New Domain** kuti makhale ndi kupereka mphatso.

**Domain product** — Mwachidule, onesha kifaa chimodzi ku domain product yenera. Ngati sikuperekedwa, addon imayendetsa product yomwe yenera monga momwe wamweneza akugwiritsa ntchito TLD (Top-Level Domain).

### Fields za M'registrant {#registrant-contact-fields}

Pamene wamweneza amachita selection ya tab **Register New Domain**, form yopereka checkout imapereka fields za m'registrant m'mmodzi:

- First name / Last name
- Email address
- Address (line 1, city, state/province, postal code, country)
- Phone number

Koma ndi zomwe zikufunika ndi onse omwe aliwonse (registrars) ndipo zimaphatikizidwa pansi pa kufufuza API ya registration. Nambala za fon ndi zikuyenera kukhala m'moyo wopereka `+CC.NNN` format imene registrars amayamba kupeza.

### Auto-generated site URL (URL ya siti yomwe imaphatikizidwa kwa ajiji) {#auto-generated-site-url}

Pamene munthu akalankhula kapena akamaphatikiza domain, field ya site URL imaphatikizidwa m'moyo poyamba kuchokera ku domain yomwe yaliyendetsedwa. Munthu samayenera kulemba field yosiyanasiyana ya URL.

### Search behaviour (Mwayi wa kufufuza) {#search-behaviour}

- Kufufuza kuti domain imaphatikizidwa kumaphatikizidwa m'moyo poyamba ndi AJAX pamene munthu akulimbikiza
- Zomwe zikuyenera kuwoneka za TLD (Top-Level Domain) zina zomwe zimaphatikizidwa pamene domain yomwe imayenera si imaphatikizidwa
- Malingaliro imaphatikizidwa m'moyo ndipo imapowonera bwino (malo mwa kuregister, malo mwa kukhazikitsa kwa nthawi ya kukonza, ndi mphamvu ya WHOIS privacy yomwe imayenera)
- Coupon codes zimaphatikizidwa pa zinthu za domain monga zina zomwe zikuyenera

**Kukonza kutuluka kwa kufufuza:**

```php
// Kufotokozera nthawi ya debounce (milliseconds) kuti muchezi API zosowekera pa mabwino a kukhala m'moyo
add_filter('wu_domain_seller_search_delay', function($delay) {
    return 800; // default: 500
});
```

**Kulemba fields zina pa form ya kufufuza domain:**

```php
add_filter('wu_checkout_form_register_domain_form_fields', function($fields) {
    $fields['custom_note'] = [
        'type'  => 'text',
        'label' => 'Zomwe zikuyenera kukhala m'moyo',
    ];
    return $fields;
});
```

---

## Customer DNS management (Kupereka DNS kwa munthu) {#customer-dns-management}

Munthu akhoza kupereka DNS records pa domain aliye yendetsedwa monga m'My Account, pansi pa entry ya domain.

### Supported record types (Mwayi wa records zomwe zikuyenera) {#supported-record-types}

| Type | Use (Kufuna kuli) |
|---|---|
| **A** | Kukhazikitsa hostname ku IPv4 address |
| **AAAA** | Kukhazikitsa hostname ku IPv6 address |
| **CNAME** | Kupereka alias yomwe imaphatikizidwa ku hostname lina |
| **MX** | Kukhazikitsa mail exchange server |
| **TXT** | Kulemba SPF, DMARC, verification, kapena records zina za text |

### Which providers support DNS management? (Omwe aliwonse amapereka DNS management?) {#which-providers-support-dns-management}

Kupanga ya DNS (kugawa, kubadilisha, kudondoka) ipo ndi **OpenSRS**, **ResellerClub**, **Enom**, **HostAfrica**, ndipo **Openprovider**. Dziko la **Hostinger** lina ulemu wa kusintha nameservers monga momwe muli ndi Domain Seller; DNS records za dziko lomwe limapereka (hosted domains) zimapangidwa ndi integration ya core ya Hostinger domain-mapping. Namecheap, GoDaddy, ndipo NameSilo dziko lina ulemu wa kuwonetsa malo ndi kusunga kwa nthawi yomwe lina m'moyo koma DNS linayenera kudziwika m'moyo wopangidwa pa control panel ya registrar.

### Default DNS records {#default-dns-records}

Muli ndi ulemu wopangidwa (default DNS records) momwe mungapereke kuti zikugwiritsidwe ntchito monga momwe dziko lina m'moyo kumaperekedwa. Kodi mwayi ku **Settings › Domain Seller › Default DNS Records**.

Malingaliro a ulemu wopangidwa (Default record values) amakubwera mitundu mituwo mawulu:

| Token | Kugwiritsidwa ntchito ndi |
|---|---|
| `{DOMAIN}` | Dziko lomwe limaperekedwa (mwachitsanzo, `example.com`) |
| `{SITE_URL}` | WordPress site URL yomwe imayenera kwa dziko la m'moyo woperekedwa |

**Mwayi — kupereka apex domain ndi www ku IP ya server yanu:**

```
Type: A
Name: {DOMAIN}
Value: 203.0.113.10

Type: CNAME
Name: www.{DOMAIN}
Value: {DOMAIN}
```

### Admin: kupereka ndi kubadilika DNS {#admin-viewing-and-editing-dns}

Admins a network angathe kuwonetsa ndi kubadilika DNS records za dziko lomwe limayenera m'moyo monga momwe muli pa edit page ya dziko m'moyo woperekedwa **Network Admin › Ultimate Multisite › Domains**.
