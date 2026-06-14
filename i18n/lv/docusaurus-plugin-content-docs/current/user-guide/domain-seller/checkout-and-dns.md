---
title: Pārdošanas lauka un klienta DNS
sidebar_position: 3
_i18n_hash: b5312cf530779a7cb03d611e6827be87
---
# Checkout laukums un domēna pārvaldība

## Domānas izvēles lauks

**Domānas izvēles** lauks ir checkout elements, kas nodrošina klientiem izvēli, kā saņemt savas vietnes domānu. Pievienojiet to jebkuram checkout formai, lai atrodotu iespēju pārdot domānas.

### Laukuma pievienošana checkout formai

1. Navigojiet uz **Network Admin › Ultimate Multisite › Checkout Forms**
2. Atveriet vai izveidojiet checkout formu
3. Checkout redaktētā, noklikšķiniet uz **Add Field** (Pievienot lauku)
4. No lauku saraksta izvēlieties **Domain Selection** (Domānas izvēles)
5. Konfiguriet lauka opcijas (skatīt lai)
6. Saglabājiet formu

### Lauku opcijas

**Domānas režīmi** — Izvēlieties, kuras tabulas redz klientam. Katrs režīms var būt ieslēgts vai izslēgts nepalīgi:

| Režīms | Kas tas dara |
|---|---|
| **Subdomain** (Subdomēns) | Klient izmanto bezmaksas subdomēnu jūsu tīklā (piemēram, `mysite.yournetwork.com`). Nepieciešama maksājums. |
| **Register New Domain** (Reģistrēt jaunu domānu) | Klient meklē jaunu domānu un reģistrē to caur jūsu konfiguriētu pakalpojumu sniedzēja. Izmantojiet atbilstošu domānas produktu cenām. |
| **Existing Domain** (Sajūstaina domāns) | Klient saistīja domānu, ko viņš jau ir savs. Nav reģistrācijas maksu. Domāns automātiski saistīts ar viņa vietni. |

**Default režīms** — Kad visi trīs režīmi ir ieslēgti, kurš tabula atveras pirms? Iestatiet **Subdomain**, lai domānas reģistrāciju turētu opcionālu, vai **Register New Domain**, lai iedzinātu iepirkumu.

**Domānas produkts** — Optiāli saistiet šo lauku ar konkrētu domānas produktu. Ja nav iestatīts, addon automātiski izvēlas atbilstošu produktu, pamatojoties uz TLD, ko klient meklē.

### Reģistranta kontakta laukumi

Kad klient izvēlas **Register New Domain** tabu, checkout forma iekļauj reģistranta kontakta laukus:

- Vārds / Uzvārds
- E-pasta adrese
- Adrese (1. līnija, pilsēta, valsts/provincija, postcodes, valsts)
- Telefons

Šie ir nepieciešmas visiem registratoriem un tiek validēti pirms API zīmes reģistrācijas sūtīšanas. Telefoni automātiski formatējas pēc starptautiskās `+CC.NNN` formāta, ko registratori sagaida.

### Automāti generētais vietnes URL adrese

Kad kliente reģistrējas vai mape domainu, vietnes URL adrese automātiski tiek ietilpina no izvēlētā domēna. Klientiem nav nepieciešams aizpildīt atsevišķu URL lauku.

### Mēģinājuma uzvedība (Search behaviour)

- Domēnas pieejamība tiek pārbaudīta reāllaikā ar AJAX, kad kliente ievada tekstu
- Ja iepriekš izvēlētā domēna nav pieejama, tiek parādīti alternatīvās TLD (top-level domain) ieteikumi
- Cenas tiek saņemtas tiešreāli un skaidri redzamas (reģistrācijas cena, atjauninājuma cena, opcionālā WHOIS privātuma maksas cena)
- Kuponu kodi piemērojas domēnu produktiem tādu kā citi jebkuram produktam

**Mēģinājuma atsaucamo spēka pielāgošana (Tuning search responsiveness):**

```php
// Palielināt debounce aizkavējumu (milis), lai samazinātu API sūtījumus lēni savienojumos
add_filter('wu_domain_seller_search_delay', function($delay) {
    return 800; // default: 500
});
```

**Domēnas meklēšanas formai papildu lauku pievienošana:**

```php
add_filter('wu_checkout_form_register_domain_form_fields', function($fields) {
    $fields['custom_note'] = [
        'type'  => 'text',
        'label' => 'Papildu paziņojumi',
    ];
    return $fields;
});
```

---

## Klientu DNS pārvaldība (Customer DNS management)

Klienti var pārvaldīt DNS ierakstus saviem reģistrētiem domēniem no **Mans konta** lapas, zem domēnas ienākuma.

### Atbalstītie ierakstu tipa

| Tips | Lietošana |
|---|---|
| **A** | Mapejāt hostnesmeni uz IPv4 adresi |
| **AAAA** | Mapejāt hostnesmeni uz IPv6 adresi |
| **CNAME** | Izveidot aliasu, kas uzrauga citam hostnesmenim |
| **MX** | Noteēt e-pasta serveri (mail exchange server) |
| **TXT** | Pievienot SPF, DMARC, apstiprinājumu vai citus tekstus ierakstus |

### Kādi pakalpojumi atbalsta DNS pārvaldību?

DNS pārvaldība (reģistrēt, rediģēt, izslēgt ierakstus) ir pieejama ar **OpenSRS**, **ResellerClub**, **Enom**, **HostAfrica** un **Openprovider**. Hostinger domāni var atjaunināt nameserverus caur Domain Seller; hostēto domānu DNS ieraksti tiek pārvaldīti ar galvenās Hostinger domānas mapi integrāciju. Namecheap, GoDaddy un NameSilo domāni parāda statusu un pēkšlapas termiņus, bet DNS ir jāpārvalda tieši reģistrāra kontrolpanelē.

### Default DNS ieraksti

Jūs varat konfigurēt default DNS ierakstus, kas automātiski piemērots, kad domāns tiek reģistrēts. Navigējieties uz **Settings › Domain Seller › Default DNS Records**.

Default ierakstu vērtības atbalsta divus tokenus:

| Token | Atrodas vietā |
|---|---|
| `{DOMAIN}` | Reģistrētais domānas nosaukums (piemēram, `example.com`) |
| `{SITE_URL}` | WordPress vietnes URL adrese klienta vietnei |

**Piemērs — uzraicīt apex un www adreses savam servera IP adresi:**

```
Type: A
Name: {DOMAIN}
Value: 203.0.113.10

Type: CNAME
Name: www.{DOMAIN}
Value: {DOMAIN}
```

### Admin: DNS skatīšana un rediģēšana

Tīrnieku administratori var skatīt un rediģēt DNS ierakstus jebkuram klienta domānas no domānas rediģēšanas lapas caur **Network Admin › Ultimate Multisite › Domains**.
