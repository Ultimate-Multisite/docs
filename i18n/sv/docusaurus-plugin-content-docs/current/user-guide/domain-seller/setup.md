---
title: Inställning och konfiguration av leverantör
sidebar_position: 1
_i18n_hash: 2a9c0d63fc6ee6bad011c099707fb3f3
---
# Domain Seller: Inställning och leverantörskonfiguration

Domain Seller-tillägget kommer med en guidad uppsättningsguide som leder dig genom varje nödvändigt steg. Denna sida täcker flödet i guiden och hur du konfigurerar eller omkonfigurerar leverantörer därefter.

## Krav

- **Ultimate Multisite** v2.4.12 eller högre, aktiverat på nätverksnivå
- **PHP** 7.4+
- API-uppgifter för minst en stödd registrar

## Första körningens uppsättningsguide

Uppsättningsguiden startar automatiskt första gången du aktiverar tillägget på nätverksnivå. Den är också tillgänglig när som helst via **Network Admin › Ultimate Multisite › Domain Seller Setup**.

### Steg 1 — Välj en leverantör

Välj registrar du vill ansluta dig till. Stödda alternativ:

| Provider | DNS management | WHOIS privacy |
|---|---|---|
| OpenSRS | Ja | Ja |
| Namecheap | Nej | Ja (WhoisGuard, gratis) |
| GoDaddy | Nej | Nej |
| ResellerClub | Ja | Nej |
| NameSilo | Nej | Nej |
| Enom | Ja | Nej |

### Steg 2 — Ange uppgifter

Varje leverantör har olika fält för uppgifter:

**OpenSRS** — Användarnamn och privat nyckel (från OpenSRS Reseller Control Panel)

**Namecheap** — Användarnamn och API-nyckel (från Account › Tools › API Access)

**GoDaddy** — API-nyckel och hemlighet (från developer.godaddy.com)

**ResellerClub** — Reseller ID och API-nyckel (från ResellerClub control panel)

**NameSilo** — API-nyckel (från namesilo.com › Account › API Manager)

**Enom** — Account ID och API-token

Kontrollera **Sandbox mode** där det är tillgängligt för att testa mot leverantörens testmiljö innan du går live.

### Steg 3 — Testa anslutningen

Klicka på **Test Connection**. Guiden skickar ett lätt API-anrop för att verifiera uppgifter och anslutbarhet. Åtgärda eventuella problem med uppgifter innan du fortsätter.

### Steg 4 — Importera TLD:er

Klicka på **Import TLDs** för att hämta alla tillgängliga TLD:er och engrospriser från den anslutna leverantören. Detta fyller TLD-listan som används av domänprodukter. Importen kan ta 30–60 sekunder för leverantörer med stora TLD-kataloger.

TLD:er synkroniseras också automatiskt en gång per dag via en schemalagd cron-jobb.

### Steg 5 — Skapa en domänprodukt

Guiden skapar en standard "catch-all"-domänprodukt med ett påslag på 10%. Du kan redigera denna produkt direkt eller hoppa över och skapa produkter manuellt under **Ultimate Multisite › Products**.

Se [Domain Products and Pricing](./domain-products) för den fullständiga guiden för produktkonfiguration.

---

## Omkonfigurera en leverantör

Gå till **Network Admin › Ultimate Multisite › Settings › Domain Seller** (eller klicka på **Settings** i tilläggslistan).

Inställningssidan innehåller:

- **Enable domain selling** — växla hela funktionen på/av
- **Default provider** — leverantören som används för domänökningar och nya produkter
- **Max TLDs per search** — hur många TLD:er som ska kontrolleras när en kund söker; högre värden visar fler alternativ men är långsammare
- **Availability cache duration** — hur länge tillgänglighets- och prisresultat ska cachas; lägre värden är mer exakta men ökar API-anropen
- **Manage domain products** — snabblänk till produktlistan
- **Configure providers** — öppnar Integration Wizard för att lägga till eller omkonfigurera leverantörer

### Lägga till en andra leverantör

Klicka på **Configure providers** och kör guiden igen för den nya registratorn. Du kan ha flera leverantörer konfigurerade samtidigt. Tilldela varje domänprodukt till en specifik leverantör, eller lämna den på standardinställningen.

### Manuell synkronisering av TLD:er

På inställningssidan, klicka på **Sync TLDs** bredvid vilken konfigurerad leverantör som helst för att hämta de senaste priserna. Detta är användbart efter att en leverantör har uppdaterat engrospriser eller lagt till nya TLD:er.

---

## Loggar

Varje leverantör skriver till sin egen loggkanal. Loggar kan ses under **Network Admin › Ultimate Multisite › Logs**:

| Loggkanal | Innehåll |
|---|---|
| `domain-seller-registration` | Alla registreringsförsök (framgång och misslyckande) |
| `domain-seller-renewal` | Resultat från förnyelsejobbet |
| `domain-seller-opensrs` | Rå OpenSRS API-aktivitet |
| `domain-seller-namecheap` | Rå Namecheap API-aktivitet |
| `domain-seller-godaddy` | Rå GoDaddy API-aktivitet |
| `domain-seller-resellerclub` | Rå ResellerClub API-aktivitet |
| `domain-seller-namesilo` | Rå NameSilo API-aktivitet |
| `domain-seller-enom` | Rå Enom API-aktivitet |
