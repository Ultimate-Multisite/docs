---
title: Field sa Pag-checkout at DNS ng Kustomer
sidebar_position: 3
_i18n_hash: b5312cf530779a7cb03d611e6827be87
---
# Pamamahala ng Checkout Field at Customer DNS

## Ang checkout field na Pagpili ng Domain {#the-domain-selection-checkout-field}

Ang field na **Pagpili ng Domain** ay isang elemento sa checkout na nagbibigay sa mga customer ng pagpipilian kung paano makukuha ang domain ng kanilang site. Idagdag ito sa anumang checkout form upang paganahin ang pagbebenta ng domain.

### Pagdaragdag ng field sa checkout form {#adding-the-field-to-a-checkout-form}

1. Pumunta sa **Network Admin › Ultimate Multisite › Checkout Forms**
2. Magbukas o gumawa ng checkout form
3. Sa checkout editor, i-click ang **Add Field**
4. Piliin ang **Pagpili ng Domain** mula sa listahan ng field
5. I-configure ang mga opsyon ng field (tingnan sa ibaba)
6. I-save ang form

### Mga opsyon ng field {#field-options}

**Mga mode ng domain** — Piliin kung aling mga tab ang makikita ng customer. Maaaring paganahin o i-disable ang bawat mode nang magkahiwalay:

| Mode | Ano ang ginagawa nito |
|---|---|
| **Subdomain** | Gumagamit ang customer ng libreng subdomain sa iyong network (hal., `mysite.yournetwork.com`). Walang kailangang bayad. |
| **Magrehistro ng Bagong Domain** | Naghahanap ang customer ng bagong domain at nirerehistro ito sa pamamagitan ng provider na na-configure mo. Ginagamit ang katugmang domain product para sa pagpepresyo. |
| **Umiiral na Domain** | Nagmamap ang customer ng domain na pagmamay-ari na nila. Walang bayad sa pagpaparehistro. Awtomatikong imamap ang domain sa kanilang site. |

**Default na mode** — Kapag naka-enable ang lahat ng tatlong mode, kung aling tab ang unang bubukas. Itakda sa **Subdomain** upang manatiling opsyonal ang pagpaparehistro ng domain, o **Magrehistro ng Bagong Domain** upang hikayatin ang mga pagbili.

**Domain product** — Opsyonal na i-pin ang field na ito sa isang partikular na domain product. Kung hindi nakatakda, awtomatikong pinipili ng addon ang katugmang product batay sa TLD na hinahanap ng customer.

### Mga field ng contact ng registrant {#registrant-contact-fields}

Kapag pinili ng customer ang tab na **Magrehistro ng Bagong Domain**, nagdaragdag ang checkout form ng mga field ng contact ng registrant nang inline:

- Pangalan / Apelyido
- Email address
- Address (linya 1, lungsod, estado/probinsya, postal code, bansa)
- Numero ng telepono

Kinakailangan ang mga ito ng lahat ng registrar at vina-validate bago gawin ang registration API call. Awtomatikong pino-format ang mga numero ng telepono sa internasyonal na format na `+CC.NNN` na inaasahan ng mga registrar.

### Awtomatikong nabuong URL ng site {#auto-generated-site-url}

Kapag nagrehistro o nagmap ng domain ang customer, awtomatikong pinupunan ang field ng URL ng site mula sa napiling domain. Hindi kailangang punan ng mga customer ang hiwalay na field ng URL.

### Gawi ng paghahanap {#search-behaviour}

- Tinitingnan ang availability ng domain nang real-time gamit ang AJAX habang nagta-type ang customer
- Ipinapakita ang mga alternatibong mungkahi ng TLD kapag hindi available ang gustong domain
- Kinukuha nang live ang pagpepresyo at malinaw na ipinapakita (presyo ng pagpaparehistro, presyo ng renewal, opsyonal na bayad sa WHOIS privacy)
- Nalalapat ang mga coupon code sa mga domain product katulad ng anumang ibang product

**Pag-tune sa bilis ng tugon ng paghahanap:**

```php
// Increase debounce delay (milliseconds) to reduce API calls on slow connections
add_filter('wu_domain_seller_search_delay', function($delay) {
    return 800; // default: 500
});
```

**Pagdaragdag ng mga custom field sa form ng paghahanap ng domain:**

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

## Pamamahala ng DNS ng customer {#customer-dns-management}

Maaaring pamahalaan ng mga customer ang mga DNS record para sa kanilang mga rehistradong domain mula sa page na **My Account**, sa ilalim ng entry ng kanilang domain.

### Mga sinusuportahang uri ng record {#supported-record-types}

| Uri | Gamit |
|---|---|
| **A** | Imap ang hostname sa IPv4 address |
| **AAAA** | Imap ang hostname sa IPv6 address |
| **CNAME** | Gumawa ng alias na tumuturo sa ibang hostname |
| **MX** | Itakda ang mail exchange server |
| **TXT** | Magdagdag ng SPF, DMARC, beripikasyon, o iba pang text record |

### Aling mga provider ang sumusuporta sa pamamahala ng DNS? {#which-providers-support-dns-management}

Available ang pamamahala ng DNS (magdagdag, mag-edit, magtanggal ng mga record) sa **OpenSRS**, **ResellerClub**, **Enom**, **HostAfrica**, at **Openprovider**. Maaaring i-update ng mga domain ng **Hostinger** ang nameservers sa pamamagitan ng Domain Seller; ang mga DNS record para sa mga naka-host na domain ay pinamamahalaan ng pangunahing integration ng pagmamap ng domain ng Hostinger. Ipinapakita ng mga domain ng Namecheap, GoDaddy, at NameSilo ang status at impormasyon ng expiry ngunit ang DNS ay dapat pamahalaan nang direkta sa control panel ng registrar.

### Mga default na DNS record {#default-dns-records}

Maaari mong i-configure ang mga default na DNS record na awtomatikong inilalapat kapag nirehistro ang isang domain. Pumunta sa **Settings › Domain Seller › Default DNS Records**.

Sinusuportahan ng mga default na halaga ng record ang dalawang token:

| Token | Pinapalitan ng |
|---|---|
| `{DOMAIN}` | Ang rehistradong pangalan ng domain (hal., `example.com`) |
| `{SITE_URL}` | Ang URL ng WordPress site para sa site ng customer |

**Halimbawa — ituro ang apex domain at www sa IP ng iyong server:**

```
Type: A
Name: {DOMAIN}
Value: 203.0.113.10

Type: CNAME
Name: www.{DOMAIN}
Value: {DOMAIN}
```

### Admin: pagtingin at pag-edit ng DNS {#admin-viewing-and-editing-dns}

Maaaring tingnan at i-edit ng mga network admin ang mga DNS record para sa anumang domain ng customer mula sa page ng pag-edit ng domain sa **Network Admin › Ultimate Multisite › Domains**.
