---
title: Installation och leverantörskonfiguration
sidebar_position: 1
_i18n_hash: 854fd649457edceefde0eb8246446ebe
---
# Domain Seller: installation och leverantörskonfiguration {#domain-seller-setup-and-provider-configuration}

Domain Seller addon levereras med en guidad installationsguide som leder dig genom varje obligatoriskt steg. Den här sidan beskriver guideflödet och hur du konfigurerar eller konfigurerar om leverantörer efteråt.

## Krav {#requirements}

- **Ultimate Multisite** v2.4.12 eller högre, nätverksaktiverad
- **PHP** 7.4+
- API-uppgifter för minst en registrar som stöds

## Installationsguide vid första körning {#first-run-setup-wizard}

Installationsguiden startar automatiskt första gången du nätverksaktiverar pluginet. Den är också tillgänglig när som helst från **Network Admin › Ultimate Multisite › Domain Seller Setup**.

### Steg 1 — Välj en leverantör {#step-1--choose-a-provider}

Välj den registrar du vill ansluta. Alternativ som stöds:

| Leverantör | DNS-hantering | WHOIS-integritet |
|---|---|---|
| OpenSRS | Ja | Ja |
| Namecheap | Nej | Ja (WhoisGuard, gratis) |
| HostAfrica | Ja | Ja (ID-skydd) |
| Openprovider | Ja | Ja |
| Hostinger | Via grundläggande Hostinger-domänmappning för hostade domäner | Ja |
| GoDaddy | Nej | Nej |
| ResellerClub | Ja | Nej |
| NameSilo | Nej | Nej |
| Enom | Ja | Nej |

### Steg 2 — Ange uppgifter {#step-2--enter-credentials}

Varje leverantör har olika uppgiftsfält:

**OpenSRS** — Användarnamn och privat nyckel (från OpenSRS Reseller Control Panel)

**Namecheap** — Användarnamn och API-nyckel (från Account › Tools › API Access)

**HostAfrica** — Domains Reseller API-endpoint och uppgifter från HostAfrica-återförsäljarmodulen. Ingen separat sandbox-endpoint är för närvarande dokumenterad; testa med säkra skrivskyddade kontroller innan du kör live-registreringar.

**Openprovider** — Användarnamn och lösenord med API-åtkomst aktiverad. Valfritt sandbox-läge använder Openprovider sandbox-API, och ett valfritt standardkundhandtag kan återanvändas för registreringar.

**Hostinger** — Den delade Hostinger hPanel API-token från den grundläggande Hostinger-integrationen. Samma token driver grundläggande domänmappning och registreringsåtgärder i Domain Seller.

**GoDaddy** — API-nyckel och hemlighet (från developer.godaddy.com)

**ResellerClub** — Återförsäljar-ID och API-nyckel (från ResellerClub-kontrollpanelen)

**NameSilo** — API-nyckel (från namesilo.com › Account › API Manager)

**Enom** — Account ID och API-token

Markera **Sandbox mode** där det är tillgängligt för att testa mot leverantörens testmiljö innan du går live.

### Steg 3 — Testa anslutningen {#step-3--test-the-connection}

Klicka på **Test Connection**. Guiden skickar ett lättviktigt API-anrop för att verifiera uppgifter och anslutning. Åtgärda eventuella problem med uppgifterna innan du fortsätter.

### Steg 4 — Importera TLD:er {#step-4--import-tlds}

Klicka på **Import TLDs** för att hämta alla tillgängliga TLD:er och grossistpriser från den anslutna leverantören. Detta fyller TLD-listan som används av domänprodukter. Importen kan ta 30–60 sekunder för leverantörer med stora TLD-kataloger.

TLD:er synkroniseras också om automatiskt en gång per dag via ett schemalagt cron-jobb.

### Steg 5 — Skapa en domänprodukt {#step-5--create-a-domain-product}

Guiden skapar en standardiserad catch-all-domänprodukt med 10 % påslag. Du kan redigera denna produkt direkt eller hoppa över och skapa produkter manuellt under **Ultimate Multisite › Products**.

Se [Domänprodukter och prissättning](./domain-products) för den fullständiga konfigurationsguiden för produkter.

---

## Konfigurera om en leverantör {#reconfiguring-a-provider}

Gå till **Network Admin › Ultimate Multisite › Settings › Domain Seller** (eller klicka på **Settings** i pluginlistan).

Inställningssidan innehåller:

- **Aktivera domänförsäljning** — slå på/av hela funktionen
- **Standardleverantör** — leverantören som används för domänsökningar och nya produkter
- **Max TLD:er per sökning** — hur många TLD:er som ska kontrolleras när en kund söker; högre värden visar fler alternativ men är långsammare
- **Cachetid för tillgänglighet** — hur länge tillgänglighets- och prissättningsresultat ska cachas; lägre värden är mer exakta men ökar API-anrop
- **Hantera domänprodukter** — snabblänk till produktlistan
- **Konfigurera leverantörer** — öppnar Integration Wizard för att lägga till eller konfigurera om leverantörer

### Lägga till en andra leverantör {#adding-a-second-provider}

Klicka på **Konfigurera leverantörer** och kör guiden igen för den nya registraren. Du kan ha flera leverantörer konfigurerade samtidigt. Tilldela varje domänprodukt till en specifik leverantör, eller lämna den på standarden.

### Synkronisera TLD:er manuellt {#syncing-tlds-manually}

På inställningssidan klickar du på **Sync TLDs** bredvid valfri konfigurerad leverantör för att hämta den senaste prissättningen. Detta är användbart efter att en leverantör uppdaterar grossistpriser eller lägger till nya TLD:er.

---

## Loggar {#logs}

Varje leverantör skriver till sin egen loggkanal. Loggar kan visas under **Network Admin › Ultimate Multisite › Logs**:

| Loggkanal | Innehåll |
|---|---|
| `domain-seller-registration` | Alla registreringsförsök (lyckade och misslyckade) |
| `domain-seller-renewal` | Resultat från förnyelsejobb |
| `domain-seller-opensrs` | Rå OpenSRS API-aktivitet |
| `domain-seller-namecheap` | Rå Namecheap API-aktivitet |
| `domain-seller-hostafrica` | Rå HostAfrica API-aktivitet |
| `domain-seller-openprovider` | Rå Openprovider API-aktivitet |
| `domain-seller-hostinger` | Rå Hostinger API-aktivitet |
| `domain-seller-godaddy` | Rå GoDaddy API-aktivitet |
| `domain-seller-resellerclub` | Rå ResellerClub API-aktivitet |
| `domain-seller-namesilo` | Rå NameSilo API-aktivitet |
| `domain-seller-enom` | Rå Enom API-aktivitet |

---

## Anteckningar om leverantörers funktioner {#provider-capability-notes}

Inte varje registrar-API exponerar samma åtgärder. Addon visar åtgärder som inte stöds med tydliga fel för administratörer i stället för att misslyckas tyst.

- **HostAfrica** stöder det bredaste live-arbetsflödet för återförsäljare, inklusive sökning, TLD/prissynkronisering, registrering, förnyelse, transfer, uppdateringar av nameserver, DNS-poster, EPP-koder, registrar lock och ID-skydd.
- **Openprovider** stöder TLD-synkronisering med återförsäljarpriser, registrering, förnyelse, transfers, uppdateringar av nameserver, DNS-zoner, EPP-koder, registrar lock och WHOIS privacy. Det autentiserar med ett kortlivat bearer token som addon förnyar automatiskt.
- **Hostinger** stöder tillgänglighetssökning, registrering, portfoliosökning, uppdateringar av nameserver, registrar lock och WHOIS privacy via den delade hPanel API-token. Hostingers offentliga Domains API exponerar inte återförsäljar-/grossistpriser, inkommande transfer, explicit förnyelse eller hämtning av EPP-kod; förnyelser är endast auto-renew.
