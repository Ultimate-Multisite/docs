---
title: Nastavení a konfigurace poskytovatele
sidebar_position: 1
_i18n_hash: 854fd649457edceefde0eb8246446ebe
---
# Domain Seller: Nastavení a konfigurace poskytovatele {#domain-seller-setup-and-provider-configuration}

Addon Domain Seller se dodává s průvodcem nastavením, který vás provede každým vyžadovaným krokem. Tato stránka popisuje průběh průvodce a jak později nakonfigurovat nebo znovu nakonfigurovat poskytovatele.

## Požadavky {#requirements}

- **Multisite Ultimate** v2.4.12 nebo vyšší, aktivované v síti
- **PHP** 7.4+
- API přihlašovací údaje alespoň pro jednoho podporovaného registrátora

## Průvodce prvotním nastavením {#first-run-setup-wizard}

Průvodce nastavením se spustí automaticky při první síťové aktivaci pluginu. Je také kdykoli dostupný z **Network Admin › Ultimate Multisite › Domain Seller Setup**.

### Krok 1 — Vyberte poskytovatele {#step-1--choose-a-provider}

Vyberte registrátora, kterého chcete připojit. Podporované možnosti:

| Poskytovatel | Správa DNS | Ochrana soukromí WHOIS |
|---|---|---|
| OpenSRS | Ano | Ano |
| Namecheap | Ne | Ano (WhoisGuard, zdarma) |
| HostAfrica | Ano | Ano (ochrana ID) |
| Openprovider | Ano | Ano |
| Hostinger | Přes základní mapování domén Hostinger pro hostované domény | Ano |
| GoDaddy | Ne | Ne |
| ResellerClub | Ano | Ne |
| NameSilo | Ne | Ne |
| Enom | Ano | Ne |

### Krok 2 — Zadejte přihlašovací údaje {#step-2--enter-credentials}

Každý poskytovatel má různá pole přihlašovacích údajů:

**OpenSRS** — Uživatelské jméno a soukromý klíč (z OpenSRS Reseller Control Panel)

**Namecheap** — Uživatelské jméno a API klíč (z Account › Tools › API Access)

**HostAfrica** — Endpoint Domains Reseller API a přihlašovací údaje z modulu prodejce HostAfrica. Aktuálně není zdokumentován žádný samostatný sandbox endpoint; před spuštěním ostrých registrací testujte pomocí bezpečných kontrol pouze pro čtení.

**Openprovider** — Uživatelské jméno a heslo s povoleným API přístupem. Volitelný režim sandbox používá Openprovider sandbox API a volitelný výchozí zákaznický handle lze znovu použít pro registrace.

**Hostinger** — Sdílený API token Hostinger hPanel z hlavní integrace Hostinger. Stejný token zajišťuje základní mapování domén i registrační operace Domain Seller.

**GoDaddy** — API klíč a tajný klíč (z developer.godaddy.com)

**ResellerClub** — ID prodejce a API klíč (z ovládacího panelu ResellerClub)

**NameSilo** — API klíč (z namesilo.com › Account › API Manager)

**Enom** — ID Account a API token

Zaškrtněte **Sandbox mode**, kde je k dispozici, abyste mohli před spuštěním do ostrého provozu testovat proti testovacímu prostředí poskytovatele.

### Krok 3 — Otestujte připojení {#step-3--test-the-connection}

Klikněte na **Test Connection**. Průvodce odešle lehké volání API, aby ověřil přihlašovací údaje a konektivitu. Před pokračováním opravte případné problémy s přihlašovacími údaji.

### Krok 4 — Importujte TLD {#step-4--import-tlds}

Klikněte na **Import TLDs**, chcete-li stáhnout všechny dostupné TLD a velkoobchodní ceny od připojeného poskytovatele. Tím se naplní seznam TLD používaný doménovými produkty. Import může u poskytovatelů s rozsáhlými katalogy TLD trvat 30–60 sekund.

TLD se také automaticky znovu synchronizují jednou denně prostřednictvím naplánované cron úlohy.

### Krok 5 — Vytvořte doménový produkt {#step-5--create-a-domain-product}

Průvodce vytvoří výchozí univerzální doménový produkt s 10% přirážkou. Tento produkt můžete ihned upravit, nebo tento krok přeskočit a vytvořit produkty ručně v **Ultimate Multisite › Products**.

Úplný průvodce konfigurací produktu najdete v části [Doménové produkty a ceny](./domain-products).

---

## Překonfigurování poskytovatele {#reconfiguring-a-provider}

Přejděte na **Network Admin › Ultimate Multisite › Settings › Domain Seller** (nebo klikněte na **Settings** v seznamu pluginů).

Stránka nastavení obsahuje:

- **Povolit prodej domén** — zapne/vypne celou funkci
- **Výchozí poskytovatel** — poskytovatel používaný pro vyhledávání domén a nové produkty
- **Maximální počet TLD na vyhledávání** — kolik TLD kontrolovat, když zákazník vyhledává; vyšší hodnoty zobrazí více možností, ale jsou pomalejší
- **Doba trvání cache dostupnosti** — jak dlouho ukládat do cache výsledky dostupnosti a cen; nižší hodnoty jsou přesnější, ale zvyšují počet API volání
- **Spravovat doménové produkty** — rychlý odkaz na seznam Products
- **Konfigurovat poskytovatele** — otevře Integration Wizard pro přidání nebo překonfigurování poskytovatelů

### Přidání druhého poskytovatele {#adding-a-second-provider}

Klikněte na **Configure providers** a spusťte průvodce znovu pro nového registrátora. Můžete mít nakonfigurováno více poskytovatelů současně. Přiřaďte každý doménový produkt ke konkrétnímu poskytovateli, nebo jej ponechte na výchozím.

### Ruční synchronizace TLD {#syncing-tlds-manually}

Na stránce nastavení klikněte na **Sync TLDs** vedle libovolného nakonfigurovaného poskytovatele, abyste stáhli nejnovější ceny. To je užitečné poté, co poskytovatel aktualizuje velkoobchodní ceny nebo přidá nové TLD.

---

## Logy {#logs}

Každý poskytovatel zapisuje do vlastního kanálu logů. Logy lze zobrazit v **Network Admin › Ultimate Multisite › Logs**:

| Kanál logu | Obsah |
|---|---|
| `domain-seller-registration` | Všechny pokusy o registraci (úspěšné i neúspěšné) |
| `domain-seller-renewal` | Výsledky úloh obnovení |
| `domain-seller-opensrs` | Nezpracovaná aktivita OpenSRS API |
| `domain-seller-namecheap` | Nezpracovaná aktivita Namecheap API |
| `domain-seller-hostafrica` | Nezpracovaná aktivita HostAfrica API |
| `domain-seller-openprovider` | Nezpracovaná aktivita Openprovider API |
| `domain-seller-hostinger` | Nezpracovaná aktivita Hostinger API |
| `domain-seller-godaddy` | Nezpracovaná aktivita GoDaddy API |
| `domain-seller-resellerclub` | Nezpracovaná aktivita ResellerClub API |
| `domain-seller-namesilo` | Nezpracovaná aktivita NameSilo API |
| `domain-seller-enom` | Nezpracovaná aktivita Enom API |

---

## Poznámky ke schopnostem poskytovatelů {#provider-capability-notes}

Ne každé API registrátora zpřístupňuje stejné operace. Addon zobrazuje nepodporované operace s jasnými chybami určenými administrátorům místo toho, aby tiše selhal.

- **HostAfrica** podporuje nejširší živý workflow pro prodejce, včetně vyhledávání, synchronizace TLD/cen, registrace, obnovení, převodu, aktualizací nameserverů, DNS záznamů, EPP kódů, registrar locku a ochrany ID.
- **Openprovider** podporuje synchronizaci TLD za prodejní ceny, registraci, obnovení, převody, aktualizace nameserverů, DNS zóny, EPP kódy, registrar lock a WHOIS privacy. Ověřuje se pomocí krátkodobého bearer token, který addon automaticky obnovuje.
- **Hostinger** podporuje vyhledávání dostupnosti, registraci, vyhledávání v portfoliu, aktualizace nameserverů, registrar lock a WHOIS privacy prostřednictvím sdíleného hPanel API tokenu. Veřejné Domains API od Hostinger nezpřístupňuje prodejní/velkoobchodní ceny, příchozí převod, explicitní obnovení ani získání EPP kódu; obnovení probíhají pouze automaticky.
