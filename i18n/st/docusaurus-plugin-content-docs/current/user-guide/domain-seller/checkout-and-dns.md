---
title: Tlhahlobo le Mopuo wa Leano la Morero
sidebar_position: 3
_i18n_hash: b5312cf530779a7cb03d611e6827be87
---
# Checkout Field le DNS ya Mopuo a Morero BaMopuo

## Le field la Domain Selection

Le **Domain Selection** field ke sebope la checkout e sebope sebope sa ba mofuo a morero ba domain ya site. A re sebope ka form ya checkout a goba ka morero ba domain.

### Go bone le field ya checkout form

1. La **Network Admin › Ultimate Multisite › Checkout Forms** go.
2. Open kapa ya checkout form, ke fela kapa ya tsena.
3. Le checkout editor, ntlha **Add Field**.
4. Choose **Domain Selection** se list ya field.
5. Configure le options ya field (tsena below).
6. Save le form.

### Options ya field

**Domain modes** — Choose ka tabs a reba mofuo. Ka mode e ka baetsope kapa ka baetsope ka tsena.

| Mode | Ka go dira |
|---|---|
| **Subdomain** | Mofuo o batla subdomain ya free mo network ya fela (e.g., `mysite.yournetwork.com`). Ke a na morero ya tšepo. |
| **Register New Domain** | Mofuo o batla domain ya ntlha le a reba e ka go baetsope ka sebope ya fela. A uba morero ya product ya domain ya tsena. |
| **Existing Domain** | Mofuo o mapo domain ya a na. Ke a na morero ya registration. Le domain e ka baetsope automatically le site ya mofuo. |

**Default mode** — Fa ka tsela tsa mode tse re ba etsope, ke tab e tla ba baetsi fa. Set seba sa **Subdomain** fa o batla go dira gore morero ya domain a ka baetsope kapa **Register New Domain** fa o batla go baetsoa morero.

**Domain product** — Ka tsena, o ka ba etsope le field ya tsena le product ya domain e ntlha. Fa o se setse, addon e tla baetsoa product ya tsena e fetang ka TLD (Top-Level Domain) mofuo o batla.

### Fields ya contact ya registrant

Fa mofuo a ba etsope tab ya **Register New Domain**, checkout form e tla baetsoa fields ya contact ya registrant leba:

- First name / Last name
- Email address
- Address (line 1, city, state/province, postal code, country)
- Phone number

Lezi tse di hlophisoho tse hlokang ke boithuti bohle ba registrars le ba thapelo ka fa API ya registration e tla fana. Numera tsa phone di fetokwa go tlhahiswe ka format ya tsantsa `+CC.NNN` e e mongolo e e tlhagiso ea registrars.

### Auto-generated site URL (URL ya site e hlalosang)

Ha moruti a fana ka le mapo a domain, sehlopha sa URL sa site se tla tsamaiswa ho fetola ho tsoalo la domain o o tsoalo. Moruti ha hloka ho raba sehlopha sehlopha sa URL sehlopha sehlopha sehlopha.

### Search behaviour (Ho ba le leboha la ho hlalosa)

- Ho tsamaisa ho ba le leboha la domain ho fana ka real-time ho AJAX ha moruti a dirang fa o fetola
- Boitshwaro ba TLD (Top-Level Domain) bo fana ka ho bonahala ha domain o o tsoalo ha o na le.
- Ho tsamaisa ho hlokomela ho feta (pricing) ho fetokwa ka lebaka la ho tsamaea (registration price), ho fetokwa ho fetola (renewal price), le tsela e hloka ea WHOIS privacy fee, le ho bonahala ka kholo.
- Coupon codes ba fana ka produk tsa domain joalo ka bohlokoa ba lefelo la anya.

**Ho tsamaea ho ba le leboha la ho hlalosa (Tuning search responsiveness):**

```php
// Ho tsamaea ho fetola tsela ea debounce (milliseconds) ho feta ho fana ka API calls fa kone tsa sehlopha sa maikutlo a le thaba
add_filter('wu_domain_seller_search_delay', function($delay) {
    return 800; // default: 500
});
```

**Ho nthela fields e hloka ho domain search form:**

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

## Customer DNS management (Ho tsamaea ho ba le leboha la DNS)

Moruti ba ka ba le leboha la DNS tsa domain ea bona ha ba le **My Account** page, ka morero ea entry ya domain ea bona.

### Supported record types (Tse tsela tse hlokang)

| Type | Use (Ho sebelisa) |
|---|---|
| **A** | Ho fetola hostname ho address e e fapaneng ea IPv4 |
| **AAAA** | Ho fetola hostname ho address e e fapaneng ea IPv6 |
| **CNAME** | Ho hlalosa alias e tsoang ho hostname e fapaneng |
| **MX** | Ho setsoa mail exchange server |
| **TXT** | Ho nthela SPF, DMARC, verification, kapa tse ling tsa text records |

### Which providers support DNS management? (Boithuti ba ba thapelo ea ho tsamaea ho DNS?)

Bokotseletso (DNS) management (goela, hloboho, le tshepelo tsa record) ke lebetsa le fetogile ho ba le **OpenSRS**, **ResellerClub**, **Enom**, **HostAfrica**, le **Openprovider**. Domanai ea **Hostinger** e ka fetola leena nameservers ka hare ho Seller ea Domain; records ea DNS ea domanai ea ho hlokomelisa haholo (hosted domains) e fana ka ho tsamaisa ka integration ea core ea Hostinger. Domanai ea Namecheap, GoDaddy, le NameSilo e bontša litlhahlo tsa tshepelo le tshepelo ea ho fihla (expiry), empa DNS e hloka ho ba fetolwa ka hare ka panel ea control ya registrar.

### Records ea DNS ea default

U ka setso records ea DNS ea default tse a tla tsamaisa ka ho hlokompha ha domain e fetola. Ho fana ka **Settings › Domain Seller › Default DNS Records**.

Tshepelo ea record ea default e tšoa leena tokens tse pedi:

| Token | E fetolwa ka |
|---|---|
| `{DOMAIN}` | Leano la domain le le fetilwe (e.g., `example.com`) |
| `{SITE_URL}` | WordPress site URL ea ho hlokompha ea morao oa morao |

**Sehlopiso — se fana ka apex domain le www e tla fihla ka IP ea server ea hau:**

```
Type: A
Name: {DOMAIN}
Value: 203.0.113.10

Type: CNAME
Name: www.{DOMAIN}
Value: {DOMAIN}
```

### Admin: ho bona le ho fetola DNS

Admins ea network e ka bona le ho fetola records ea DNS ea domanai ea morao ka domain e fetileng ka panel ea **Network Admin › Ultimate Multisite › Domains**.
