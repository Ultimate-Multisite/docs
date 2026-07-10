---
title: Field ng Checkout at DNS ng Customer
sidebar_position: 3
_i18n_hash: b5312cf530779a7cb03d611e6827be87
---
# Pamamahala ng Field sa Checkout at DNS ng Customer {#checkout-field-and-customer-dns-management}

## Ang field na Domain Selection {#the-domain-selection-checkout-field}

Ang **Domain Selection** field ay isang elemento sa checkout na nagbibigay sa mga customer ng pagpipilian kung paano nila makukuha ang domain para sa kanilang site. Idagdag ito sa anumang checkout form para maging kaya itong magbenta ng domain.

### Pagdaragdag ng field sa checkout form {#adding-the-field-to-a-checkout-form}

1. Pumunta sa **Network Admin › Ultimate Multisite › Checkout Forms**
2. Buksan o gumawa ng isang checkout form
3. Sa editor ng checkout, i-click ang **Add Field**
4. Piliin ang **Domain Selection** mula sa listahan ng mga field
5. I-configure ang mga opsyon ng field (tingnan sa ibaba)
6. I-save ang form

### Mga opsyon ng field {#field-options}

**Domain modes** — Pumili kung aling mga tab ang makikita ng customer. Ang bawat mode ay maaaring i-enable o i-disable nang hiwalay:

| Mode | Ano ang ginagawa nito |
|---|---|
| **Subdomain** | Gumagamit ang customer ng libreng subdomain sa iyong network (halimbawa, `mysite.yournetwork.com`). Walang bayad na kailangan. |
| **Register New Domain** | Naghahanap ang customer para sa bagong domain at nagre-register nito sa pamamagitan ng provider na naka-configure mo. Gumagamit ito ng katugmang produkto ng domain para sa pagpepresyo. |
| **Existing Domain** | Ina-map (maps) ng customer ang isang domain na kanilang pag-aari na. Walang bayad sa pagre-register. Awtomatikong ini-map ang domain sa kanilang site. |

**Default mode** — Kapag lahat ng tatlong mode ay naka-enable, aling tab ang bubukas muna? Itakda ito sa **Subdomain** para panatilihing opsyonal ang pagre-register ng domain, o **Register New Domain** para hikayatin ang mga pagbili.

**Domain product** — Opsyonal na i-pin (i-link) itong field sa isang partikular na domain product. Kung hindi itinakda, awtomatikong pipiliin ng addon ang katugmang produkto batay sa TLD na hinahanap ng customer.

### Mga field para sa contact ng nagre-register {#registrant-contact-fields}

Kapag pinili ng customer ang tab na **Register New Domain**, magdaragdag ang checkout form ng mga field para sa contact ng nagre-register nang direkta:

- Pangalan (First name / Last name)
- Email address
- Address (linya 1, lungsod, estado/lalawigan, postal code, bansa)
- Numero ng telepono

Ito ay kinakailangan ng lahat ng registrar at binibigyang-valid bago gawin ang registration API call. Awtomatikong ini-format ang mga numero ng telepono sa internasyonal na format na `+CC.NNN` na inaasahan ng mga registrar.

### Auto-generated site URL {#auto-generated-site-url}

Kapag nagrehistro o nagmamapa ng domain ang isang customer, awtomatikong napopuno ang field na site URL mula sa napiling domain. Hindi kailangang punan ng mga customer ang hiwalay na field para sa URL.

### Search behaviour {#search-behaviour}

- Ang availability ng domain ay sinusuri nang real-time gamit ang AJAX habang nagta-type ang customer
- Ipinapakita ang mga alternatibong TLD suggestions kapag hindi available ang paboritong domain
- Ang presyo ay kinukuha nang live at ipinapakita nang malinaw (presyong registration, presyong renewal, optional WHOIS privacy fee)
- Ang coupon codes ay naaangkop sa mga produkto ng domain tulad ng anumang iba pang produkto

**Pag-tune ng search responsiveness:**

```php
// Dagdagan ang debounce delay (milliseconds) para mabawasan ang API calls sa mabagal na koneksyon
add_filter('wu_domain_seller_search_delay', function($delay) {
    return 800; // default: 500
});
```

**Pagdaragdag ng custom fields sa domain search form:**

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

## Pamamahala ng DNS ng Customer {#customer-dns-management}

Maaaring pamahalaan ng mga customer ang mga record sa DNS para sa kanilang mga nairehistrong domain mula sa pahinang **My Account**, sa ilalim ng entry ng kanilang domain.

### Mga Sinusuportahang uri ng record {#supported-record-types}

| Uri | Paggamit |
|---|---|
| **A** | Mag-map ng hostname sa IPv4 address |
| **AAAA** | Mag-map ng hostname sa IPv6 address |
| **CNAME** | Gumawa ng alias na tumuturo sa ibang hostname |
| **MX** | Itakda ang mail exchange server |
| **TXT** | Magdagdag ng SPF, DMARC, verification, o iba pang text records |

### Aling mga provider ang sumusuporta sa DNS management? {#which-providers-support-dns-management}

Ang pamamahala ng DNS (pagdaragdag, pag-edit, pagtanggal ng mga record) ay available sa **OpenSRS**, **ResellerClub**, **Enom**, **HostAfrica**, at **Openprovider**. Ang mga domain ng **Hostinger** ay maaaring mag-update ng nameservers sa pamamagitan ng Domain Seller; ang DNS records para sa mga naka-host na domain ay pinamamahalaan ng core Hostinger domain-mapping integration. Ipinapakita ng Namecheap, GoDaddy, at NameSilo domains ang status at impormasyon tungkol sa expiry ngunit dapat pang pamahalaan nang direkta sa control panel ng registrar.

### Default DNS records {#default-dns-records}

Maaari kang mag-configure ng default DNS records na awtomatikong ipapatupad kapag nagrehistro ng domain. Pumunta sa **Settings › Domain Seller › Default DNS Records**.

Ang mga halaga ng default record ay sumusuporta sa dalawang token:

| Token | Palitan ng |
|---|---|
| `{DOMAIN}` | Ang rehistradong pangalan ng domain (halimbawa, `example.com`) |
| `{SITE_URL}` | Ang WordPress site URL para sa site ng customer |

**Halimbawa — ituro ang apex domain at www sa IP address ng iyong server:**

```
Type: A
Name: {DOMAIN}
Value: 203.0.113.10

Type: CNAME
Name: www.{DOMAIN}
Value: {DOMAIN}
```

### Admin: pagtingin at pag-edit ng DNS {#admin-viewing-and-editing-dns}

Maaaring tingnan at i-edit ng mga network admin ang mga DNS record para sa anumang domain ng customer mula sa edit page ng domain sa **Network Admin › Ultimate Multisite › Domains**.
