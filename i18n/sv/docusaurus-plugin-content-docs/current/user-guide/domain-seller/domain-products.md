---
title: Domänprodukter och prissättning
sidebar_position: 2
_i18n_hash: 48757ad5b423db8f169a793b96d7bc71
---
# Domänprodukter och prissättning

Domänprodukter är hur du styr prissättning, TLD:er, WHOIS-integritet och val av leverantör. Varje domänprodukt är en standardprodukt i Multisite Ultimate med en extra **Domain Settings**-flik.

## Skapa en domänprodukt {#creating-a-domain-product}

1. Gå till **Network Admin › Ultimate Multisite › Products**
2. Klicka på **Add New**
3. Ställ in produktkategorin till **Domain**
4. Konfigurera fliken **Domain Settings** (se nedan)
5. Spara

Domänprodukter visas med ett lila **Domain**-märke i produktlistan och kan filtreras med hjälp av fliken **Domain Products**.

## Domain settings tab {#domain-settings-tab}

### Provider {#provider}

Välj vilken registrar som hanterar registreringen för denna produkt. Standardinställningen är den globala **Default provider** som är satt i Domain Seller-inställningarna.

### Supported TLDs {#supported-tlds}

Lämna tomt för att skapa en **catch-all-produkt** som gäller för alla TLD:er som inte matchas av någon annan produkt.

Ange en komma-separerad lista med TLD:er (t.ex. `.com, .net, .org`) för att skapa en **TLD-specifik produkt** som endast gäller för dessa utlängningar.

**Hur produktmatchning fungerar:** När en kund söker efter en domän väljer tillägget den mest specifika matchande produkten. En produkt med `.com` i sin TLD-lista har företräde framför en catch-all-produkt. Om ingen TLD-specifik produkt matchar, används catch-allen. Om inga produkter finns, visas inte domänökningen.

### Markup type {#markup-type}

Tre lägen styr hur din detaljpris beräknas från engroskostnaden:

| Mode | Hur det fungerar |
|---|---|
| **Percentage** | Lägger till en procentandel på engroskostnaden. Ett 20% påslag på en engrosdomän på 10 dollar ger 12 dollar. |
| **Fixed markup** | Lägger till ett fast dollarbelopp. Ett påslag på 5 dollar på en domän på 10 dollar ger 15 dollar. |
| **Fixed price** | Ignorerar engroskostnaden helt. Tar alltid ut det belopp du anger. |

### Introductory pricing {#introductory-pricing}

Aktivera för att erbjuda ett rabatterat pris för det första året. Ställ in ett separat **Introductory price** (priset för år 1) bredvid det vanliga **Renewal price** (pris från år 2 och framåt). Kunden ser båda priserna under kassan så att de vet vad de kan förvänta sig vid förnyelsen.

### WHOIS privacy {#whois-privacy}

Styr om WHOIS-integritet erbjuds för domäner som registreras via denna produkt.

| Setting | Behaviour |
|---|---|
| **Disabled** | WHOIS-integritet erbjuds eller aktiveras aldrig. |
| **Always Included** | WHOIS-integritet aktiveras automatiskt vid registreringen utan extra kostnad. |
| **Customer Choice** | En kryssruta visas under kassan. Ställ in **Privacy price** för att ta ut en avgift per år, eller lämna den på 0 dollar för att erbjuda det gratis. |

För Namecheap använder WHOIS-integritet WhoisGuard (alltid gratis). För OpenSRS använder det OpenSRS-integritetstjänsten (kan ha en kostnad på engrosnivå).

---

## TLD-import och synkronisering {#tld-import-and-sync}

Domänprodukter visar realtidsengrospriser hämtade från den anslutna leverantören. För att detta ska fungera måste TLD:er importeras.

- **Manual sync:** Settings › Domain Seller › Sync TLDs (per provider)
- **Automatic sync:** Körs dagligen via en schemalagd cron-jobb över alla konfigurerade leverantörer

Efter en synkronisering, gå till fliken Domain Settings för vilken domänprodukt som helst och använd TLD-väljaren för att se tillgängliga TLD:er med deras aktuella engrospriser.

---

## Auto-renewal {#auto-renewal}

Domänförnyelser är kopplade till kundens medlemsstatus:

- När ett medlemskap förnyas och en domän är kopplad, ställs domänförnyelsen automatiskt i kö
- Försök till förnyelse använder kundens aktiva betalningsgateway
- Misslyckade förnyelser försöks automatiskt igen med exponentiell backoff
- E-postmeddelanden skickas för lyckade förnyelser, misslyckanden och kommande utgångsdatum

E-postmall-ID:n för domänlivscykelhändelser:

| Event | Template ID |
|---|---|
| Domain registered | `domain_registered` |
| Domain renewed | `domain_renewed` |
| Renewal failed | `domain_renewal_failed` |
| Domain expiring soon | `domain_expiring_soon` |

---

## Admin: Manuell domänregistrering {#admin-manual-domain-registration}

För att registrera en domän å en kund utan att de behöver gå genom kassan:

1. Gå till **Network Admin › Ultimate Multisite › Register Domain**
2. Välj kunden och ange domännamnet
3. Fyll i registrerande kontaktuppgifter (namn, adress, telefon)
4. Klicka på **Register**

Domänregistret skapas och kopplas till kundens konto.
