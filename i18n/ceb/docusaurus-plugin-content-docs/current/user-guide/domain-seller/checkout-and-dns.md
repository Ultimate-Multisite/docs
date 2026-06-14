---
title: Field sa Checkout ug Customer DNS
sidebar_position: 3
_i18n_hash: b5312cf530779a7cb03d611e6827be87
---
# Checkout Field ug DNS Management sa Customer

## Ang checkout field para sa Domain Selection

Ang **Domain Selection** field kay usa ka elemento sa checkout nga naghatag sa mga customer og kapilian kung unsaon nila pagkuha sa domain sa ilang site. Idugang kini sa bisan unsang checkout form aron mapagana ang pagbaligya sa domain.

### Pagdugang sa field sa checkout form

1. Adto sa **Network Admin › Ultimate Multisite › Checkout Forms**
2. Buksan o himuon og bag-ong checkout form
3. Sa checkout editor, i-click ang **Add Field**
4. Pilia ang **Domain Selection** gikan sa listahan sa field
5. I-configure ang mga opsyon sa field (tan-awa sa ubos)
6. I-save ang form

### Mga opsyon sa field

**Domain modes** — Pilia kung unsang tabs makita sa customer. Ang matag mode pwede i-enable o i-disable nga independente:

| Mode | Unsa ang buhaton niini |
|---|---|
| **Subdomain** | Ang customer mogamit og libreng subdomain sa imong network (pananglitan, `mysite.yournetwork.com`). Walay bayad gikinahanglan. |
| **Register New Domain** | Ang customer mangita og bag-ong domain ug magparehistro niini pinaagi sa provider nga imong gi-configure. Gigamit ang matching domain product para sa pagpasa og presyo. |
| **Existing Domain** | Ang customer mag-mapa sa usa ka domain nga ilang gipanag-iya na. Walay bayad sa pagparehistro. Ang domain awtomatikong ma-mapa sa ilang site. |

**Default mode** — Kung ang tulo ka modes anaa, unsa ang tab nga mosugod una? I-set kini sa **Subdomain** aron ang pagparehistro sa domain mahimong optional, o **Register New Domain** aron mag-encourage og mga palit.

**Domain product** — Optional ba ni nga field nga i-pin sa usa ka specific domain product. Kung wala i-set, ang addon awtomatikong mopili sa matching product base sa TLD nga gitan-aw sa customer.

### Mga contact fields sa Registrant

Kung ang usa ka customer mogamit sa **Register New Domain** tab, ang checkout form magdugang og registrant contact fields sa sulod:

- First name / Last name
- Email address
- Address (line 1, city, state/province, postal code, country)
- Phone number

Kini kinahanglanon sa tanang mga registrar ug gi-validate una pa magpadala og registration API call. Ang mga numero sa telepono awtomatikong ma-format ngadto sa internasyonal nga format nga `+CC.NNN` nga gipaabot sa mga registrar.

### Auto-generated site URL

Kung ang usa ka customer nagparehistro o nagmapa og domain, ang field sa site URL awtomatikong mapuno gikan sa napili nga domain. Ang mga customer dili kinahanglan magpuno og laing field para sa URL.

### Search behaviour

- Ang availability sa domain gi-check sa real-time gamit ang AJAX samtang nag-type ang customer
- Gipakita ang mga alternatibo nga TLD suggestions kung wala ang gusto nga domain
- Ang presyo kuhaon live ug ipakita klaro (presyo sa registration, presyo sa renewal, optional WHOIS privacy fee)
- Ang coupon codes magamit sa mga produkto sa domain sama sa bisan unsang laing produkto

**Pag-tune sa responsiveness sa pagpangita:**

```php
// Idugang ang debounce delay (milliseconds) aron makuha og gamay nga API calls sa hinay nga koneksyon
add_filter('wu_domain_seller_search_delay', function($delay) {
    return 800; // default: 500
});
```

**Pagdugang og custom fields sa domain search form:**

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

Ang mga customer makama sa pagdumala og DNS records para sa ilang mga registered domains gikan sa **My Account** page, ubos sa entry sa ilang domain.

### Mga suportadong klase sa record

| Type | Gamit |
|---|---|
| **A** | Map ang hostname ngadto sa IPv4 address |
| **AAAA** | Map ang hostname ngadto sa IPv6 address |
| **CNAME** | Paghimo og alias nga nagtudlo sa laing hostname |
| **MX** | Mag-set og mail exchange server |
| **TXT** | Dugang og SPF, DMARC, verification, o uban pang text records |

### Unsa nga mga provider ang nagsuporta sa DNS management?

Ang pag-manage sa DNS (pagdagay, pag-edit, pagtanggal og mga record) kay available gamit ang **OpenSRS**, **ResellerClub**, **Enom**, **HostAfrica**, ug **Openprovider**. Ang mga domain sa **Hostinger** pwede i-update ang nameservers pinaagi sa Domain Seller; ang DNS records para sa mga gi-host nga domain gihimong manage pinaagi sa core Hostinger domain-mapping integration. Ang mga domain sa Namecheap, GoDaddy, ug NameSilo nagpakita og status ug expiry information pero kinahanglan i-manage direkta sa control panel sa registrar.

### Default DNS records

Pwede ka mag-configure og default DNS records nga awtomatikong iapil kung ang usa ka domain gi-register. Adto sa **Settings › Domain Seller › Default DNS Records**.

Ang mga default record values nagsuporta sa duha ka tokens:

| Token | Mapulihan ngadto sa |
|---|---|
| `{DOMAIN}` | Ang gi-register nga domain name (pananglitan, `example.com`) |
| `{SITE_URL}` | Ang WordPress site URL para sa site sa customer |

**Pananglitan — itudlo ang apex domain ug www ng imong server IP:**

```
Type: A
Name: {DOMAIN}
Value: 203.0.113.10

Type: CNAME
Name: www.{DOMAIN}
Value: {DOMAIN}
```

### Admin: pagtan-aw ug pag-edit sa DNS

Ang mga network admin pwede tan-aw ug i-edit ang DNS records para sa bisan unsang customer domain gikan sa edit page sa domain sa **Network Admin › Ultimate Multisite › Domains**.
