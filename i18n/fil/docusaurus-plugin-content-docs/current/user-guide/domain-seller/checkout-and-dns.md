---
title: Larangan sa Pag-checkout at DNS ng Kustomer
sidebar_position: 3
_i18n_hash: 6723eb72a4f1a6663a643a8d310c2e63
---
# Pamamahala ng Field sa Checkout at DNS ng Customer

## Ang Domain Selection checkout field

Ang **Domain Selection** field ay isang element sa checkout na nagbibigay sa mga customer ng pagpipilian kung paano kukuha ng domain para sa kanilang site. Idagdag ito sa anumang checkout form para maging posible ang pagbebenta ng domain.

### Pagdaragdag ng field sa checkout form

1. Pumunta sa **Network Admin › Ultimate Multisite › Checkout Forms**
2. Buksan o gumawa ng isang checkout form
3. Sa checkout editor, i-click ang **Add Field**
4. Piliin ang **Domain Selection** mula sa listahan ng field
5. I-configure ang mga opsyon ng field (tingnan sa ibaba)
6. I-save ang form

### Field options

**Domain modes** — Piliin kung aling mga tab ang makikita ng customer. Ang bawat mode ay maaaring i-enable o i-disable nang hiwalay:

| Mode | Ano ang ginagawa nito |
|---|---|
| **Subdomain** | Gumagamit ang customer ng libreng subdomain sa network mo (hal., `mysite.yournetwork.com`). Hindi kailangan ng bayad. |
| **Register New Domain** | Naghahanap ang customer ng bagong domain at ire-rehistro ito sa pamamagitan ng provider na naka-configure mo. Gumagamit ito ng matching domain product para sa pagpepresyo. |
| **Existing Domain** | I-ma-map ng customer ang domain na pag-aari na niya. Walang registration fee. Awtomatikong i-ma-map ang domain sa kanilang site. |

**Default mode** — Kapag naka-enable ang tatlong mode, alin ang unang magbubukas na tab. Itakda sa **Subdomain** para manatiling opsyonal ang pagre-register ng domain, o sa **Register New Domain** para hikayatin ang pagbili.

**Domain product** — Opsyonal na i-pin ang field na ito sa isang tiyak na domain product. Kung hindi itinakda, awtomatikong pipiliin ng addon ang matching product batay sa TLD na hinahanap ng customer.

### Registrant contact fields

Kapag pinili ng customer ang tab na **Register New Domain**, magdaragdag ang checkout form ng mga registrant contact fields nang inline:

- First name / Last name
- Email address
- Address (line 1, city, state/province, postal code, country)
- Phone number

Ito ay kinakailangan ng lahat ng registrar at i-va-validate bago gawin ang registration API call. Ang mga phone number ay awtomatikong i-fo-format sa `+CC.NNN` international format na inaasahan ng mga registrar.

### Auto-generated site URL

Kapag nag-re-register o nag-ma-map ang customer ng domain, awtomatikong mapupuno ang site URL field mula sa napiling domain. Hindi na kailangang maglagay ng hiwalay na URL field ang mga customer.

### Search behaviour

- Ang availability ng domain ay tinitingnan sa real-time gamit ang AJAX habang nagta-type ang customer
- Ipinapakita ang mga alternative TLD suggestions kapag hindi available ang preferred domain
- Ang pagpepresyo ay kinukuha live at malinaw na ipinapakita (registration price, renewal price, optional WHOIS privacy fee)
- Ang coupon codes ay naa-apply sa domain products tulad ng sa anumang ibang product

**Pag-aayos ng search responsiveness:**

```php
// Increase debounce delay (milliseconds) to reduce API calls on slow connections
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

## Customer DNS management

Maaaring pamahalaan ng mga customer ang DNS records para sa kanilang mga na-register na domain mula sa pahina ng **My Account**, sa ilalim ng entry ng kanilang domain.

### Supported record types

| Type | Gamit |
|---|---|
| **A** | I-ma-map ang hostname sa IPv4 address |
| **AAAA** | I-ma-map ang hostname sa IPv6 address |
| **CNAME** | Gumawa ng alias na tumuturo sa ibang hostname |
| **MX** | Magtakda ng mail exchange server |
| **TXT** | Magdagdag ng SPF, DMARC, verification, o iba pang text records |

### Aling mga provider ang sumusuporta sa DNS management?

Ang DNS management (pagdaragdag, pag-edit, pag-delete ng records) ay available sa **OpenSRS**, **ResellerClub**, at **Enom**. Ang mga domain mula sa Namecheap, GoDaddy, at NameSilo ay nagpapakita ng status at expiry information ngunit ang DNS ay dapat pamahalaan nang direkta sa control panel ng registrar.

### Default DNS records

Maaari kang mag-configure ng default DNS records na awtomatikong ia-apply kapag nag-re-register ng domain. Pumunta sa **Settings › Domain Seller › Default DNS Records**.

Ang default record values ay sumusuporta sa dalawang token:

| Token | Papalitan ng |
|---|---|
| `{DOMAIN}` | Ang na-register na pangalan ng domain (hal., `example.com`) |
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

### Admin: pagtingin at pag-edit ng DNS

Maaaring makakita at makapag-edit ang mga network admin ng DNS records para sa anumang customer domain mula sa edit page ng domain sa **Network Admin › Ultimate Multisite › Domains**.
