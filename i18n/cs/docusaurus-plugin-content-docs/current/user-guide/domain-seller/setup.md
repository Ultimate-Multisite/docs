---
title: Nastavení a konfigurace poskytovatele
sidebar_position: 1
_i18n_hash: 2a9c0d63fc6ee6bad011c099707fb3f3
---
# Domain Seller: Nastavení a konfigurace poskytovatelů

Addon Domain Seller je vybaven průvodním asistenta, který vás provede každým požadovaným krokem. Tato stránka pokrývá průběh asistenta a cách nakonfigurovat nebo rekonfigurovat poskytovatele poté.

## Požadavky

- **Multisite Ultimate** verze 2.4.12 nebo vyšší, aktivováno na úrovni sítě (network-activated)
- **PHP** 7.4+
- API údaje pro alespoň jedno podporované registrátory

## První spuštění asistenta

Asistent se spustí automaticky při prvním aktivování pluginu na úrovni sítě. Je také k dispozici kdykoli na adrese **Network Admin › Ultimate Multisite › Domain Seller Setup**.

### Krok 1 — Výběr poskytovatele

Vyberte registrátora, kterého chcete připojit. Podporované možnosti:

| Poskytovatel | Správa DNS | Soukromí WHOIS |
|---|---|---|
| OpenSRS | Ano | Ano |
| Namecheap | Ne | Ano (WhoisGuard, zdarma) |
| GoDaddy | Ne | Ne |
| ResellerClub | Ano | Ne |
| NameSilo | Ne | Ne |
| Enom | Ano | Ne |

### Krok 2 — Zadání údajů

Každý poskytovatel má jiné pole pro údaje:

**OpenSRS** — Uživatelské jméno a soukromý klíč (z OpenSRS Reseller Control Panel)

**Namecheap** — Uživatelské jméno a API klíč (z Account › Tools › API Access)

**GoDaddy** — API klíč a tajný klíč (z developer.godaddy.com)

**ResellerClub** — Reseller ID a API klíč (z ovládacího panelu ResellerClub)

**NameSilo** — API klíč (z namesilo.com › Account › API Manager)

**Enom** — ID účtu a API token

Zkontrolujte **Sandbox mode**, pokud je k dispozici, abyste mohli otestovat připojení v testovacím prostředí poskytovatele před spuštěním do provozu.

### Krok 3 — Testování připojení

Klikněte na **Test Connection**. Asistent odešle lehké API volání, které ověří údaje a konektivitu. Opravte jakékoli problémy s údaji, než budete pokračovat.

### Krok 4 — Import TLDs

Klikněte na **Import TLDs**, abyste načetli všechny dostupné TLD a velkoobchodní ceny od připojeného poskytovatele. To vyplní seznam TLD, který používají produkty domén. Import může trvat 30–60 sekund u poskytovatelů s velkým katalogem TLD.

TLD jsou také automaticky synchronizovány jednou denně pomocí plánovaného cron jobu.

### Krok 5 — Vytvoření produktu domény

Asistent vytvoří výchozí produkt domény typu „catch-all“ se ziskem 10 %. Tento produkt můžete okamžitě upravit nebo přeskočit a vytvořit produkty ručně na adrese **Ultimate Multisite › Products**.

Podrobný průvodce konfiguracími produktů se nachází na [Domain Products and Pricing](./domain-products).

---

## Rekonfigurace poskytovatele

Přejděte na **Network Admin › Ultimate Multisite › Settings › Domain Seller** (nebo klikněte na **Settings** v seznamu pluginů).

Na stránce nastavení najdete:

- **Enable domain selling** — přepínání celé funkce zapnuto/vypnuto
- **Default provider** — poskytovatel používaný pro vyhledávání domén a nové produkty
- **Max TLDs per search** — kolik TLD je kontrolováno při vyhledávání zákazníkem; vyšší hodnoty zobrazí více možností, ale jsou pomalejší
- **Availability cache duration** — jak dlouho jsou výsledky dostupnosti a cen v cache; nižší hodnoty jsou přesnější, ale zvyšují volání API
- **Manage domain products** — rychlý odkaz na seznam produktů
- **Configure providers** — otevře Integrace Wizard pro přidání nebo rekonfiguraci poskytovatelů

### Přidání druhého poskytovatele

Klikněte na **Configure providers** a spusťte asistentu znovu pro nového registrátora. Můžete mít nakonfigurováno více poskytovatelů současně. Přiřaďte každý produkt domény k konkrétnímu poskytovateli nebo ho nechte na výchozí.

### Ruční synchronizace TLDs

Na stránce nastavení klikněte na **Sync TLDs** vedle jakéhokoli nakonfigurovaného poskytovatele, abyste načetli nejnovější ceny. Je to užitečné, pokud poskytovatel aktualizoval velkoobchodní ceny nebo přidal nové TLD.

---

## Logy

Každý poskytovatel zapisuje do vlastního kanálu logů. Logy jsou viditelné na adrese **Network Admin › Ultimate Multisite › Logs**:

| Logový kanál | Obsah |
|---|---|
| `domain-seller-registration` | Všechny pokusy o registraci (úspěšné i neúspěšné) |
| `domain-seller-renewal` | Výsledky úlohy obnovy |
| `domain-seller-opensrs` | Rohový API provoz OpenSRS |
| `domain-seller-namecheap` | Rohový API provoz Namecheap |
| `domain-seller-godaddy` | Rohový API provoz GoDaddy |
| `domain-seller-resellerclub` | Rohový API provoz ResellerClub |
| `domain-seller-namesilo` | Rohový API provoz NameSilo |
| `domain-seller-enom` | Rohový API provoz Enom |
