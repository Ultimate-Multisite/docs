---
title: Inkambu Yokukhokha kanye ne-DNS Yekhasimende
sidebar_position: 3
_i18n_hash: b5312cf530779a7cb03d611e6827be87
---
# Inkambu Yokukhokha Nokuphathwa kwe-DNS Yamakhasimende

## Inkambu yokukhokha ethi Ukukhetha i-Domain {#the-domain-selection-checkout-field}

Inkambu ethi **Ukukhetha i-Domain** iyisici sokukhokha esinika amakhasimende ukukhetha ukuthi ayithola kanjani i-domain yesayithi lawo. Yengeze kunoma yiliphi ifomu lokukhokha ukuze unike amandla ukuthengiswa kwama-domain.

### Ukwengeza inkambu efomini lokukhokha {#adding-the-field-to-a-checkout-form}

1. Yiya ku-**Network Admin › Ultimate Multisite › Amafomu Okukhokha**
2. Vula noma dala ifomu lokukhokha
3. Kumhleli wokukhokha, chofoza **Engeza Inkambu**
4. Khetha **Ukukhetha i-Domain** ohlwini lwezinkambu
5. Lungiselela izinketho zenkambu (bheka ngezansi)
6. Londoloza ifomu

### Izinketho zenkambu {#field-options}

**Izindlela ze-domain** — Khetha ukuthi yimaphi amathebhu abonwa yikhasimende. Indlela ngayinye inganikwa amandla noma ikhutshazwe ngokuzimela:

| Indlela | Ekwenzayo |
|---|---|
| **I-subdomain** | Ikhasimende lisebenzisa i-subdomain yamahhala kunethiwekhi yakho (isb., `mysite.yournetwork.com`). Akudingeki nkokhelo. |
| **Bhalisa i-Domain Entsha** | Ikhasimende licinga i-domain entsha bese liyibhalisa ngomhlinzeki omumisiwe. Kusebenzisa umkhiqizo we-domain ohambisanayo ukuze kutholwe intengo. |
| **I-Domain Ekhona** | Ikhasimende lixhumanisa i-domain elivele linayo. Ayikho imali yokubhalisa. I-domain ixhunywa ngokuzenzakalelayo kusayithi lalo. |

**Indlela ezenzakalelayo** — Uma zonke izindlela ezintathu zinikwe amandla, yiliphi ithebhu elivuleka kuqala. Setha ku-**I-subdomain** ukuze ukugcina ukubhaliswa kwe-domain kuyinketho, noma ku-**Bhalisa i-Domain Entsha** ukuze ukhuthaze ukuthenga.

**Umkhiqizo we-domain** — Ngokuzikhethela, namathisela le nkambu kumkhiqizo othile we-domain. Uma ingasethwanga, i-addon ikhetha ngokuzenzakalelayo umkhiqizo ohambisanayo ngokusekelwe ku-TLD ikhasimende eliyiseshayo.

### Izinkambu zokuxhumana zomubhalisi {#registrant-contact-fields}

Uma ikhasimende likhetha ithebhu ethi **Bhalisa i-Domain Entsha**, ifomu lokukhokha lengeza izinkambu zokuxhumana zomubhalisi ngaphakathi:

- Igama / Isibongo
- Ikheli le-imeyili
- Ikheli (umugqa 1, idolobha, isifunda/isifundazwe, ikhodi yeposi, izwe)
- Inombolo yocingo

Lokhu kudingwa yibo bonke ababhalisi futhi kuqinisekiswa ngaphambi kokuthi kwenziwe ucingo lwe-API lokubhalisa. Izinombolo zocingo zifomethwa ngokuzenzakalelayo zibe ifomethi yamazwe omhlaba ethi `+CC.NNN` elindelwe ababhalisi.

### I-URL yesayithi ekhiqizwa ngokuzenzakalelayo {#auto-generated-site-url}

Uma ikhasimende libhalisa noma lixhumanisa i-domain, inkambu ye-URL yesayithi igcwaliswa ngokuzenzakalelayo isuselwa ku-domain ekhethiwe. Amakhasimende awadingi ukugcwalisa inkambu ye-URL ehlukile.

### Ukuziphatha kosesho {#search-behaviour}

- Ukutholakala kwe-domain kuhlolwa ngesikhathi sangempela nge-AJAX njengoba ikhasimende lithayipha
- Iziphakamiso zamanye ama-TLD ziboniswa lapho i-domain ekhethwayo ingatholakali
- Intengo ilandwa bukhoma futhi iboniswa ngokucacile (intengo yokubhalisa, intengo yokuvuselela, imali yokuzikhethela yobumfihlo be-WHOIS)
- Amakhodi ekhuphoni asebenza emikhiqizweni ye-domain ngendlela efanayo nanoma yimuphi omunye umkhiqizo

**Ukulungisa ukusabela kosesho:**

```php
// Increase debounce delay (milliseconds) to reduce API calls on slow connections
add_filter('wu_domain_seller_search_delay', function($delay) {
    return 800; // default: 500
});
```

**Ukwengeza izinkambu zangokwezifiso efomini lokusesha i-domain:**

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

## Ukuphathwa kwe-DNS kwamakhasimende {#customer-dns-management}

Amakhasimende angaphatha amarekhodi e-DNS ama-domain awo abhalisiwe ekhasini elithi **My Account**, ngaphansi kokufakwa kwe-domain yawo.

### Izinhlobo zamarekhodi ezisekelwayo {#supported-record-types}

| Uhlobo | Ukusetshenziswa |
|---|---|
| **A** | Xhumanisa igama lomsingathi nekheli le-IPv4 |
| **AAAA** | Xhumanisa igama lomsingathi nekheli le-IPv6 |
| **CNAME** | Dala isibizo esikhomba kwelinye igama lomsingathi |
| **MX** | Setha iseva yokushintshisana ngemeyili |
| **TXT** | Engeza amarekhodi e-SPF, DMARC, okuqinisekisa, noma amanye amarekhodi ombhalo |

### Yibaphi abahlinzeki abasekela ukuphathwa kwe-DNS? {#which-providers-support-dns-management}

Ukuphathwa kwe-DNS (ukwengeza, ukuhlela, ukususa amarekhodi) kuyatholakala nge-**OpenSRS**, **ResellerClub**, **Enom**, **HostAfrica**, kanye ne-**Openprovider**. Ama-domain e-**Hostinger** angabuyekeza ama-nameserver nge-Domain Seller; amarekhodi e-DNS ama-domain asingathiwe aphathwa ukuhlanganiswa okuyisisekelo kwe-Hostinger kokuxhumanisa ama-domain. Ama-domain e-Namecheap, GoDaddy, kanye ne-NameSilo abonisa isimo nolwazi lokuphelelwa yisikhathi kodwa i-DNS kufanele iphathwe ngqo kuphaneli yokulawula yomubhalisi.

### Amarekhodi e-DNS azenzakalelayo {#default-dns-records}

Ungalungiselela amarekhodi e-DNS azenzakalelayo asetshenziswa ngokuzenzakalelayo lapho i-domain ibhaliswa. Yiya ku-**Settings › Domain Seller › Amarekhodi e-DNS Azenzakalelayo**.

Amanani amarekhodi azenzakalelayo asekela amathokheni amabili:

| Ithokheni | Kushintshwa ngakho |
|---|---|
| `{DOMAIN}` | Igama le-domain elibhalisiwe (isb., `example.com`) |
| `{SITE_URL}` | I-URL yesayithi le-WordPress yesayithi lekhasimende |

**Isibonelo — khomba i-apex domain kanye ne-www ekhelini le-IP leseva yakho:**

```
Type: A
Name: {DOMAIN}
Value: 203.0.113.10

Type: CNAME
Name: www.{DOMAIN}
Value: {DOMAIN}
```

### Admin: ukubuka nokuhlela i-DNS {#admin-viewing-and-editing-dns}

Ama-admin enethiwekhi angabuka futhi ahlele amarekhodi e-DNS anoma iyiphi i-domain yekhasimende ekhasini lokuhlela le-domain ku-**Network Admin › Ultimate Multisite › Ama-Domain**.
