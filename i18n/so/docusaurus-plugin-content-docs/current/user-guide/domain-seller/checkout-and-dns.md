---
title: Goobta lacagta iyo DNS-ka Macmiilka
sidebar_position: 3
_i18n_hash: b5312cf530779a7cb03d611e6827be87
---
# Maareynta Meelka Lacagta Bixinta iyo DNS-ka Macmiilka

## Meelka Lacagta Bixinta (Checkout) Field-ka Doorka Domain-ka {#the-domain-selection-checkout-field}

**Domain Selection** field-ku waa qayb ka mid ah meesha lacagta bixinta oo si macmiillada u siinayo doorasho sida ay helaan domain-ka website-ka. Ku daruu isha lacagta bixinta (checkout form) kasta si aad u oggolaato iibinta domain-ka.

### Ku daridda field-ka meesha lacagta bixinta {#adding-the-field-to-a-checkout-form}

1. Tag **Network Admin › Ultimate Multisite › Checkout Forms**
2. Fur ama abuuro checkout form
3. Addbiyaha (editor) lacagta bixinta, riix **Add Field**
4. Doorashada **Domain Selection** laga helo liiska field-yada
5. Habka u qaabeyso doorashooyinka field-ka (sowda hoose)
6. Hayse form-ka

### Doorashooyinka field-ka {#field-options}

**Domain modes** — Dooro tab-yada ay macmiilku arko. Kasta oo mode-ga ah ayaa la shaqayn karaa ama laga xirayaa si madaxbannaan:

| Mode | Waa waxa uu qabto |
|---|---|
| **Subdomain** | Macaamiilladu waxay isticmaalaan subdomain bilaash ah oo ku jirta shirkaddaada (tusaale: `mysite.yournetwork.com`). Ma baahna lacag la bixiyo. |
| **Register New Domain** | Macaamiilladu waxay raadiyaan domain cusub waxayna si ay u diiwaangeliyaan iyagoo isticmaalaya barnaamijka aad dejisay. Waxaa loo adeegsada barnaamijka domain-ka la midka ah qiimaha. |
| **Existing Domain** | Macaamiilladu waxay xirnaadaan domain ay horey u leeyihiin. Ma jirto kharash diiwaangelinta. Domain-ka waxaa si toos ah loo xiriiriyaa website-ka (site) ee ay leeyihiin. |

**Mode-ka guud** — Marka dhammaan saddexda mode-kaas la fuliyo, tab-ka (tab) kaas oo furmi doona ayaa hore u bilaabmaya. U dejinta **Subdomain** haddii aad rabto inaad diiwaangelinta domain-ka ka dhigto mid ixtira ah (optional), ama **Register New Domain** haddii aad rabto inaad dadka ku dhiirigeliso inay iibsadaan.

**Domain product** — Waxaad doorbidaa in aad tani si ixtiraam ah ugu xirto alaabta (product) domain gaar ah. Haddii aanad dejin, addon-ka wuxuu si toos ah u doonayaa alaabta la midka ah iyadoo ku saleysan TLD (domain extension) uu macmiilku raadinayo.

### Goobaha xiriirka qofka diiwaangeliyaha (Registrant contact fields) {#registrant-contact-fields}

Marka macmiilku doorto tab-ka **Register New Domain** (Diyaarso Domain Cusub), foomka checkout-ka wuxuu si toos ah u darayaa goobaha xiriirka qofka diiwaangeliyaha:

- Magaca hore / Magaca dambe
- Email-ka
- Cinwaanka (saddexda, magaalada, gobolka/wiliga, lambarka positaanka, wadamada)
- Lambarka taleefanka

Kuwaas waa kuwo loo baahan yahay dhammaan diiwaangeliyeyaasha (registrars) waxayna la hubiyaan ka hor inta aan la sameeyo codsiga API ee diiwaangelinta. Lambarka taleefanka waxaa si toos ah loo qaabaysiiyaa qaabka caalamiga ah ee `+CC.NNN` ee ay diiwaangeliyeyaasha u baahan yihiin.

### Auto-generated site URL (URL-ka goobta website-ka oo si toos ah la abuuro) {#auto-generated-site-url}

Markada macaamiishu waxay diiwaangelinayaan ama waxay qorsheynayaan domain (goob internetka), magaca URL-ka website-ka si toos ah ayaa loo buuxiyaa domain-ka la doorbiyay. Macaamiishu ma baahnayn inay buuxiyaan meel kale oo lagu qorayo URL-ka.

### Wax-soo-dhiga raadinta (Search behaviour) {#search-behaviour}

- Ma jirto in la hubiyo heli lahayd domain-ka si degdeg ah iyadoo la isticmaalayo AJAX marka macaamiishu ku qoraan
- Haddii domain-ka la dooratay uu ka maqan yahay, waxaa soo bandhigayaa talooyin kale oo nooc (TLD) ah
- Qiimaha ayaa si degdeg ah loogu soo qaadaa oo si cad loo muujiyaa (qiimaha diiwaangelinta, qiimaha cusboonaysiinta, iyo kharashka shaqaynta WHOIS ee ixtiraamka ah)
- Koodka kuwan (Coupon codes) waxay si isku mid u shaqeeyaan alaabta domain-ka sida alaab kale

**Xirfad-qaadashada jawaabta raadinta:**

```php
// Kor u qaadista wakhtiga sugidda (milliseconds) si loo yareeyo wicitaan API-yada marka isku xirnaanta ay hoos u dhacaan
add_filter('wu_domain_seller_search_delay', function($delay) {
    return 800; // default: 500
});
```

**Ku daridda meelo gaar ah (custom fields) oo foomka raadinta domain-ka:**

```php
add_filter('wu_checkout_form_register_domain_form_fields', function($fields) {
    $fields['custom_note'] = [
        'type'  => 'text',
        'label' => 'Fiirooyin dheeri ah',
    ];
    return $fields;
});
```

---

## Maareynta DNS-ka Macaamiisha (Customer DNS management) {#customer-dns-management}

Macaamiishu waxay maareyn karaan diiwaanka DNS-ka domain-kooda oo ay ku jiraan bogga **My Account** (Akawtiyada), hoos ka dhanka fariinta domain-ka.

### Noocyada diiwaanka ee taageerada ah (Supported record types) {#supported-record-types}

| Nooca | Isticmaalka |
|---|---|
| **A** | In la isku xiro magaca host-ka (hostname) iyo ciwaan IPv4 |
| **AAAA** | In la isku xiro magaca host-ka (hostname) iyo ciwaan IPv6 |
| **CNAME** | In la abuuro alias oo siisaya mid kale oo magac ah (hostname) |
| **MX** | In la dejiyo server-ka fariimaha (mail exchange server) |
| **TXT** | In la ku daro diiwaanka SPF, DMARC, xaqiijinta (verification), ama diiwaanno kale oo qoraal ah |

### Waa maxay kuwa taageera maareynta DNS-ka? {#which-providers-support-dns-management}

Maareynta DNS (ku darid, wax ka beddelid, caddeyn) waxaa laga heli karaa **OpenSRS**, **ResellerClub**, **Enom**, **HostAfrica**, iyo **Openprovider**. Domain-yada **Hostinger** waxay cusboonaysiin karaan server-ka (nameservers) iyagoo isticmaalaya Domain Seller; DNS records-ka domain-yada la hosteyay waxaa maareyn karaa isku-dhafka asalka ah ee Hostinger. Domain-yada Namecheap, GoDaddy, iyo NameSilo waxay muujiyaan xaaladda iyo taariikhda dhacdo (expiry information), laakiin DNS-ka waa in si toos ah loo maareeyaa dashboard-ka registrar-ka.

### DNS-ka asalka ah (Default DNS records) {#default-dns-records}

Waxaad samayn kartaa DNS records-ka asalka ah ee si toos ah loogu cusboonaysiiyo marka domain la diiwaangeliyo. Tag **Settings › Domain Seller › Default DNS Records**.

Qiimaha default-ka records-ka waxay taageera laba token:

| Token | Waxaa la beddelay |
|---|---|
| `{DOMAIN}` | Magaca domain-ka lagu diiiray (tusaale: `example.com`) |
| `{SITE_URL}` | URL-ka WordPress ee bogga macaamiisha |

**Tusaale — si aad u tilmaato apex domain iyo www server IP-kaaga:**

```
Type: A
Name: {DOMAIN}
Value: 203.0.113.10

Type: CNAME
Name: www.{DOMAIN}
Value: {DOMAIN}
```

### Admin: Aragtida iyo wax ka beddelista DNS-ka {#admin-viewing-and-editing-dns}

Maamulayaasha shabakad (Network admins) waxay arki karaan oo wax ka beddeli karaan diiwaanka DNS-ka (DNS records) ee domain-ka macmiilka ah iyagoo isticmaalaya bogga wax ka beddelka (edit page) ee **Network Admin › Ultimate Multisite › Domains**.
