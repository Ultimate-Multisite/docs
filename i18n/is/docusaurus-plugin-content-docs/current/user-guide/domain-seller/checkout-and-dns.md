---
title: Skráningarfelt og viðskiptavarkennar DNS
sidebar_position: 3
_i18n_hash: b5312cf530779a7cb03d611e6827be87
---
# Checkout Fél og DNS-stjórnun við viðskipti

## Felturinn fyrir doménvalg

**Domain Selection** felturinn er eitthvaður sem kemur í viðskipti og gefur viðskiptavinum val á því hvernig þeir geta skráð sitt símtíðarviði. Skrá hann í hvaða viðskiptiform sem bara til að leysa domén.

### Að bæta feltinu í viðskiptiform

1. Gangi yfir **Network Admin › Ultimate Multisite › Checkout Forms**
2. Opna eða skapa viðskiptiform
3. Í viðskiptiformu, klikka á **Add Field** (Bæta felt)
4. Veldu **Domain Selection** frá lista felta
5. Stillinga feltans (sjá hér að neðan)
6. Skrá formann

### Feltustillingar

**Domain modes** — Veldu hvern tabinn viðskiptavinur sjá. Hvert mönnum getist séð á við eða sést sérstaklega:

| Mode | Hvað það gerir |
|---|---|
| **Subdomain** | Viðskiptavinur notar freklega domén á netverkinn þinn (t.d. `mysite.yournetwork.com`). Engin betalning nauðsynleg. |
| **Register New Domain** | Viðskiptavinur leitar eftir nýjum domén og skrár það í gegnum viðskiptavini sem er sett upp. Notar samsvarandi produkt fyrir setningu til prísningar. |
| **Existing Domain** | Viðskiptavinur tengir framdomén sem hann eigin. Engin skráningarfélgja. Domén er sjálfskipt í sína símtíðarviði. |

**Default mode** — Þegar þrír mönnum eru sést, hvern tabinn opnar fyrst. Setið á **Subdomain** til að halda doménskráningu valfræð fyrir, eða **Register New Domain** til að hjálða til að kaupa.

**Domain product** — Veldu valfræðlega að binda þetta felt í sérstaka produkt. Ef ekki er sett á, velur viðbúið add-on sjálft samsvarandi produkt ánar eftir því hvernig doménin leitar eftir TLD (top-level domain).

### Feltur fyrir tengiljan/skráningu

Þegar viðskiptavinur velur **Register New Domain** tabinn, bætir viðskiptiforminn feltum fyrir tengiljan/skráningu í sama form:

- Fyrirna nafni / Eftirna nafni
- Tölvupóstur
- Heiti (1. linja, stjórnshóp, staður/provins, postanumarnir, land)
- Samskiptatífa

Þessir eru nauðsynlegar fyrir alla registrara og valdið viðkoma þegar byggingarnafn er skráð. Telefonnúmer eru sjálfvirkt formáttarðarðar í alþjóðlega áttamótuna `+CC.NNN` sem registrara spara sér.

### Sjálfvirkur vísar til vefsítalls (Auto-generated site URL)

Þegar viðskiptavinur skráir sig inn eða tengir domén, er fältið fyrir vefsítallinn sjálfvirkt fyllt með valtu doméni. Viðviljandi þarf ekki að fylla í sérstakt fält fyrir URL-gildi.

### Leitarhættur (Search behaviour)

- Til að skoða tilvarðar domén eru skortunar á raunverulegri tíma með AJAX þegar viðskiptavinur er að skrifa
- Alternativt forslag um TLD (top-level domain) sýnist þegar framlagður domén er ekki til við disponir
- Prísa er hent í live og sýnist clart (skráningarpresa, uppfærjunarpresa, valfræðar gæfa fyrir WHOIS skjuli)
- Kupónkóðir eru að ganga á doménvörum eins og öll öðrum vörum

**Innreiðing leitarhættar:**

```php
// Auka debouncing tveimur (millisekund) til að minnka API kalla á óhjákvæsendum tengdum
add_filter('wu_domain_seller_search_delay', function($delay) {
    return 800; // default: 500
});
```

**Að bæta sérstök fält í leitarformið fyrir domén:**

```php
add_filter('wu_checkout_form_register_domain_form_fields', function($fields) {
    $fields['custom_note'] = [
        'type'  => 'text',
        'label' => 'Aðgerðarskrifstökum',
    ];
    return $fields;
});
```

---

## Stjórnun DNS fyrir viðskiptavini (Customer DNS management)

Viðviljandi geta stýrt DNS skjuli fyrir skráð domén hennar í **My Account** síðu, undir innburði þeirra doméns.

### Staðfestar skjulisorð (Supported record types)

| Staða | Notkun |
|---|---|
| **A** | Tengja nafnana við IPv4 áttamótun |
| **AAAA** | Tengja nafnana við IPv6 áttamótun |
| **CNAME** | Skapa alias sem tengist annar nafnanum |
| **MX** | Setja server fyrir tölvupósti |
| **TXT** | Að bæta SPF, DMARC, staðfestingu eða övrum texta skjuli |

### Hvernig veitir viðskipti stjórnun DNS?

DNS-stjórnun (að viðbúa, breyta, sýna úrskurð) er til aðgengi með **OpenSRS**, **ResellerClub**, **Enom**, **HostAfrica** og **Openprovider**. Þú getur uppfærð nafnarvörðum fyrir Hostinger dómvörð með vönduðum sölujafnari (Domain Seller); DNS-skráir fyrir hostaða dómvörð eru stýrt af kjarninnáttunni Hostinger domain-mapping integration. Namecheap, GoDaddy og NameSilo dómvörð sýna staðsetning og lausa tímabréf, en þú verður að stjórna DNS beint í kontrollpanelinn registrarinnar.

### Skráir með skrefum (Default DNS records)

Þú getur sett upp skráir með skrefum sem eru nánast sjálfar á við þegar dómvörð er skráð. Gangi **Settings › Domain Seller › Default DNS Records**.

Skráir með skrefum stuðla að tveimjum tokenum:

| Token | Er skilað með |
|---|---|
| `{DOMAIN}` | Skráðan dómvörðinavn (t.d., `example.com`) |
| `{SITE_URL}` | WordPress símtarúrsíða fyrir viðskiptavininnar síðu |

**Dæmi — að stjórna apex dómvörð og www til IP-nánasta þín:**

```
Type: A
Name: {DOMAIN}
Value: 203.0.113.10

Type: CNAME
Name: www.{DOMAIN}
Value: {DOMAIN}
```

### Stjórnari: sýna og breyta DNS-skráum

Netverkstjórnmenn geta sýnt og breytt DNS-skráir fyrir hvaða viðskiptavin dómvörðs í **Network Admin › Ultimate Multisite › Domains** á breytingasíðu dómvörðs.
