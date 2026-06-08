---
title: Kassafält och kund-DNS
sidebar_position: 3
_i18n_hash: 6723eb72a4f1a6663a643a8d310c2e63
---
# Hantering av domän och kundens DNS

## Fältet för domänval i kassan

Fältet **Domain Selection** (Domänval) är ett kassafält som ger kunderna ett val av hur de vill få sin webbplatsdomän. Lägg till det på vilket kasseformulär som helst för att möjliggöra försäljning av domäner.

### Lägga till fältet i ett kasseformulär

1. Gå till **Network Admin › Ultimate Multisite › Checkout Forms**
2. Öppna eller skapa ett kasseformulär
3. I kasseeditorn, klicka på **Add Field** (Lägg till fält)
4. Välj **Domain Selection** från fältlistan
5. Konfigurera fältoalternativen (se nedan)
6. Spara formuläret

### Fältoalternativ

**Domain modes** (Domänlägen) — Välj vilka flikar kunden ska se. Varje läge kan aktiveras eller inaktiveras oberoende:

| Mode | Vad det gör |
|---|---|
| **Subdomain** | Kunden använder en gratis subdomän på ditt nätverk (t.ex. `mysite.yournetwork.com`). Ingen betalning krävs. |
| **Register New Domain** | Kunden söker efter en ny domän och registrerar den via din konfigurerade leverantör. Använder det matchande domänprodukten för prissättning. |
| **Existing Domain** | Kunden kopplar en domän de redan äger. Ingen registreringsavgift. Domänen kopplas automatiskt till deras webbplats. |

**Default mode** (Standardläge) — När alla tre lägena är aktiverade, vilken flik öppnas först. Ställ in till **Subdomain** för att hålla domänregistreringen valfri, eller **Register New Domain** för att uppmuntra köp.

**Domain product** (Domänprodukt) — Du kan valfritt koppla detta fält till en specifik domänprodukt. Om det inte är inställt, väljer tillägget automatiskt den matchande produkten baserat på TLD som kunden söker.

### Registrant contact fields (Kontaktuppgifter för registreraren)

När en kund väljer fliken **Register New Domain**, lägger kasseformuläret till kontaktuppgifter för registreraren inline:

- Förnamn / Efternamn
- E-postadress
- Adress (rad 1, stad, län/provins, postnummer, land)
- Telefonnummer

Dessa krävs av alla registreringar och valideras innan API-anropet för registreringen görs. Telefonnummer formateras automatiskt till det internationella formatet `+CC.NNN` som krävs av registreringarna.

### Auto-generated site URL (Automatgenererad webbadress)

När en kund registrerar eller kopplar en domän, fylls fältet för webbadress automatiskt på baserat på den valda domänen. Kunderna behöver inte fylla i ett separat URL-fält.

### Search behaviour (Sökbeteende)

- Domänåtkomlighet kontrolleras i realtid med AJAX medan kunden skriver
- Alternativa TLD-förslag visas när den föredragna domänen är otillgänglig
- Prissättning hämtas live och visas tydligt (registreringspris, förnyelsepris, valfri WHOIS-integritetsavgift)
- Kupongkoder gäller för domänprodukter på samma sätt som för alla andra produkter

**Justering av sökresponsivitet:**

```php
// Öka debounce-fördröjningen (millisekunder) för att minska API-anrop på långsamma anslutningar
add_filter('wu_domain_seller_search_delay', function($delay) {
    return 800; // default: 500
});
```

**Lägga till anpassade fält i domänssökformuläret:**

```php
add_filter('wu_checkout_form_register_domain_form_fields', function($fields) {
    $fields['custom_note'] = [
        'type'  => 'text',
        'label' => 'Ytterligare anteckningar',
    ];
    return $fields;
});
```

---

## Hantering av kundens DNS

Kunder kan hantera DNS-poster för sina registrerade domäner från sidan **My Account** (Mitt konto), under sin domänpost.

### Stödde posttyper

| Type | Användning |
|---|---|
| **A** | Mappar värdnamn till IPv4-adress |
| **AAAA** | Mappar värdnamn till IPv6-adress |
| **CNAME** | Skapar ett alias som pekar till ett annat värdnamn |
| **MX** | Ställer in mailutbytesserver |
| **TXT** | Lägger till SPF-, DMARC-, verifierings- eller andra textposter |

### Vilka leverantörer stöder DNS-hantering?

DNS-hantering (lägga till, redigera, ta bort poster) är tillgängligt med **OpenSRS**, **ResellerClub** och **Enom**. Domäner från Namecheap, GoDaddy och NameSilo visar status- och utgångsinformation, men DNS måste hanteras direkt i registratörens kontrollpanel.

### Standard DNS-poster

Du kan konfigurera standard DNS-poster som automatiskt tillämpas när en domän registreras. Gå till **Settings › Domain Seller › Default DNS Records**.

Standardpostvärden stöder två tokens:

| Token | Ersätts med |
|---|---|
| `{DOMAIN}` | Det registrerade domännamnet (t.ex. `example.com`) |
| `{SITE_URL}` | WordPress-webbadressen för kundens webbplats |

**Exempel — peka apex-domänen och www till din server-IP:**

```
Type: A
Name: {DOMAIN}
Value: 203.0.113.10

Type: CNAME
Name: www.{DOMAIN}
Value: {DOMAIN}
```

### Admin: visning och redigering av DNS

Nätverksadministratörer kan se och redigera DNS-poster för vilken kunddomän som helst från domänens redigeringssida i **Network Admin › Ultimate Multisite › Domains**.
