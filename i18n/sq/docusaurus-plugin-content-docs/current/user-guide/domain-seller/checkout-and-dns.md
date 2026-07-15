---
title: Fusha e Kontodave dhe DNS i Klientit
sidebar_position: 3
_i18n_hash: b5312cf530779a7cb03d611e6827be87
---
# Menaxhimi i Fushës së Checkout dhe DNS-it të Klientit

## Fusha e Zgjedhjes së Domenit në Checkout {#the-domain-selection-checkout-field}

Fusha e **Zgjedhjes së Domenit** është një element në procesin e pagesës (checkout) që i jep klientëve zgjedhjen se si do të marrin domen për faqen tuaj. E shtoni këtë fushë në çdo formular të pagesës për të aktivizuar shitjen e domeneve.

### Shtimi i fushës në një formular të pagesës {#adding-the-field-to-a-checkout-form}

1. Shko te **Network Admin › Ultimate Multisite › Checkout Forms**
2. Hap ose krijoj një formular të pagesës (checkout form).
3. Në redaktuesin e formularit të pagesës, kliko **Add Field** (Shto Fushë).
4. Zgjidh **Domain Selection** (Zgjedhja e Domenit) nga lista e fushave.
5. Konfiguro fushën (shiko më poshtë):

6. Ruaj formularin

### Opsionet e fushave {#field-options}

**Modat e domenit (Domain modes)** — Zgjidhni cilat tab-e do të shohë klienti. Çdo mod mund të aktivizohet ose i deaktivizohet në mënyrë të pavarur:

| Moduleti | Çfarë bën |
|---|---|
| **Subdomeni** | Klienti përdor një subdomen të lirë në rrjetin tuaj (p.sh., `mysite.yournetwork.com`). Nuk kërkohet pagesë.

| **Regjistro Domenin e Ri** | Klienti kërkon një domen të ri dhe e regjistron përmes ofrues që ke konfiguruar. Përdoret produkti i domeneve që përputhet për çmimin. |

| **Domani Ekzistues** | Klienti mapon një domenin që tashmë e ka. Nuk ka taksim për regjistrim. Domani i mapi automatikisht me faqen e tij. |

**Modi i paracaktuar** — Kur të gjitha tre modet janë aktivizuar, cilët tab hapet fillimisht? Vendosni në **Subdomain** për të mbajtur regjistrimin e domeneve opsional, ose **Register New Domain** për të inkurajuar blerjet.

**Produkt i domene** — Opsionalisht, vendosni këtë fushë në një produkt të caktuar të domenit tuaj. Nëse nuk e vendosni, addon-i automatikisht zgjedh produktin që përputhet me TLD (Top-Level Domain) që kërkon klienti.

### Fushat e kontaktit të regjistrantit {#registrant-contact-fields}

Kur një klient zgjedh tabin **Register New Domain**, forma e pagesës shton fusha kontaktit të regjistrues në mënyrë inline:

- Emri / Mbiemri
- Adresa (vija 1, qyteti, shteti/provincia, kod postal, vendi)
- Numri i telefonit

Këto janë të nevojshme nga të gjithë regjistratësit dhe vallohen para se të bëhet thirrja API për regjistrim. Numrat telefoni automatikisht formatohen në formatin ndërkombëtar `+CC.NNN` që pritet nga regjistratësit.

### URL i automatikisht generuar i faqes {#auto-generated-site-url}

Kur një klient regjistrohet ose mapon një domen, fusha e URL-s së faqes (site URL) plotësohet automatikisht nga domeni i zgjedhur. Klientët nuk kanë nevojë të plotësojnë një fushë të veçantë për URL-n.

### Sjellja e kërkimit {#search-behaviour}

Disponueshmëria e domenit kontrollon në kohë reale me AJAX ndërsa klienti shkruan.
Kur domeni i preferuar nuk është i disponueshëm, shfaqen sugjerime alternative të TLD-ve (Top-Level Domain).

- Çmimi merr informacion nga sistemi në kohë reale dhe shfaqet qartë (çmimi i regjistrimit, çmimi i rinovimit, taxa opsionale WHOIS privacy).
- Kody kuponi aplikohet për produktet e domeneve ashtu si për çdo produkt tjetër.

**Optimizimi i përgjigjes së kërkimeve:**

// Rritni kohën e ndalimit (në milisegmente) për të ulur thirrjet API në lidhje të ngadaltë
add_filter('wu_domain_seller_search_delay', function($delay) {
    return 800; // default: 500
});

**Shtimi i fushave të personalizuara në formularin e kërkimit të domeneve:**

```php
add_filter('wu_checkout_form_register_domain_form_fields', function($fields) {
    $fields['custom_note'] = [
        'type'  => 'text',
        'label' => 'Shënim shtesë',
    ];
    return $fields;
});
```

## Menaxhimi i DNS për klientët {#customer-dns-management}

Klientët mund të menaxhojnë regjistrat e DNS-it për domenët e tyre të regjistruar nga faqja **My Account**, në seksionin që përgjigjet domeneve tuaja.

### Llojet e regjistrave të mbështetura {#supported-record-types}

| Lloji | Përdorimi |
|---|---|
| **A** | Mape emrin e hostit me adresën IPv4 |
| **AAAA** | Mape emrin e hostit me adresën IPv6 |
| **CNAME** | Krijoni një alias që i drejton në një emër të tjetrit |
| **MX** | Vendos serverin e shkëmbimit të postave (mail exchange) |

| **TXT** | Shtoni regjistrat SPF, DMARC, verifikim ose të tjerë teksti |

### Të cilët ofrues mbështesin menaxhimin e DNS-it? {#which-providers-support-dns-management}

Menaxhimi i DNS (shtimi, redaktimi, fshirja e regjistrave) është i disponues me **OpenSRS**, **ResellerClub**, **Enom**, **HostAfrica** dhe **Openprovider**. Domenet Hostinger mund të përditësojnë serverët e emrit (nameservers) përmes Domain Seller; regjistrat DNS për domenët e hostuar menaxhohen nga integrimi i bazës së Hostinger për mapimin e domenve. Domenet Namecheap, GoDaddy dhe NameSilo shfaqin statusin dhe informacionin e datës së skadimit, por DNS-i duhet të menaxhohet drejtpërdrejt në panelin e kontrollit të regjistrit.

### Regjistrim i regjistrave DNS të paracaktuar {#default-dns-records}

Mund të konfigurosh regjistrat DNS të paracaktuar që aplikohen automatikisht kur një domene regjistrohet. Shko te **Settings › Domain Seller › Default DNS Records**.

Vlera e regjistrave paracaktuar mbështesin dy tokenë:

| Token | Zëvendësohet me |
|---|---|
| `{DOMAIN}` | Emri i domeneve të regjistruar (p.sh., `example.com`) |
| `{SITE_URL}` | URL-ja e faqes WordPress për faqen e klientit |

**Shembull — drejtoni domenit kryesor dhe www te IP-ja juaj serveri:**

Lloji: A
Emri: {DOMAIN}
Vlera: 203.0.113.10

Lloji: CNAME
Emri: www.{DOMAIN}
Vlera: {DOMAIN}

### Administrator: shfaqja dhe redaktimi i DNS-it {#admin-viewing-and-editing-dns}

Administratorët e rrjetit mund të shohin dhe të redigjojnë regjistrat DNS për çdo domen klient nga faqja e redaktimit të domenit në **Network Admin › Ultimate Multisite › Domains**.
