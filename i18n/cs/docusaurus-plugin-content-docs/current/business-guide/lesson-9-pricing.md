---
title: 'Lekce 9: Cenotvorba pro zisk'
sidebar_position: 10
_i18n_hash: 0f58d92d3effcc1ffc1f62104d21cdcc
---
# Lekce 9: Cenotvorba pro zisk

V Lekci 5 jsme nastavili počáteční ceny pro plány FitSite. Nyní však vylepšíme strategii cenotvorby technikami, které zvýší příjem, podpoří akupgradování a sníží odchod zákazníků (churn).

## Kde jsme skončili

FitSite má připravené plány, šablony, proces platby (checkout), branding a onboarding. Počáteční ceny byly 49/99/199 dolarů měsíčně. Nyní ale musíme tuto cenotvorbu „využít“ efektivněji.

## Principy cenotvorby pro nišní platformy

### Cena podle hodnoty, ne podle nákladů

Vaše náklady na hosting mohou být 5–15 dolarů za zákaznickou stránku. To neznamená, že vaše cena by měla být 20 dolarů. Vy neprodáváte hosting. Prodáváte:

- Profesionální fitness web, který by se na míru postavil za 2 000–5 000 dolarů
- Neustálou údržbu, aktualizace a zabezpečení, o kterých se zákazník nemusí starat
- Nišní funkce, které generické buildery neposkytují
- Dostupnost a důvěryhodnost platformy navržené pro jejich průmysl

Cenujte podle hodnoty, kterou dodáváte, nikoli podle nákladů na její dodání.

### Kotvování k alternativám

Když majitel fitness studia posuzuje FitSite, porovnává ho s:

- **Nájem webového vývojáře**: 2 000–5 000 dolarů jednorázově + 50–100 dolarů/měsíc údržby
- **Wix/Squarespace**: 16–45 dolarů/měsíc, ale bez specifických fitness funkcí, musí si to postavit sami
- **Nic**: Ztráta členů, kteří se online nemohou najít

Za 49–199 dolarů/měsíc je FitSite levnější než vývojář, schopnější než generické buildery a nesrovnatelně lepší než žádná webová stránka.

## Implementace variací cen

Roční cenotvorba podporuje závazek a snižuje odchod zákazníků. Přejděte do záložky **Price Variations** (Variace cen) každého plánu a přidejte roční možnosti:

| Plan | Monthly | Annual (per month) | Annual Total | Savings |
|------|---------|-------------------|--------------|---------|
| Starter | $49/mo | $39/mo | $468/year | 20% off |
| Growth | $99/mo | $79/mo | $948/year | 20% off |
| Pro | $199/mo | $159/mo | $1,908/year | 20% off |

Přidejte pole **Period Selection** (Výběr období) do vašeho formuláře platby, aby zákazníci mohli přepínat mezi měsíčním a ročním fakturováním. Podívejte se na [Checkout Forms](/user-guide/configuration/checkout-forms#adding-a-period-selection-toggle).

### Proč funguje roční cenotvorba

- **Pro vás**: Předběžný hotový příjem, nižší odchod zákazníků (zákazníci, kteří platí ročně, mají menší tendenci zrušit v průběhu období)
- **Pro ně**: Skutečné úspory, předvídatelnost rozpočtu

## Poplatky za nastavení

Zvažte jednorázové poplatky za nastavení pro plány, které zahrnují ruční konfiguraci:

- **Starter**: Žádné poplatky za nastavení (odstranění bariér vstupu)
- **Growth**: Poplatek za nastavení 99 dolarů (pokrývá konfiguraci vlastního doménového jména a počáteční konzultaci)
- **Pro**: Poplatek za nastavení 299 dolarů (pokrývá nastavení více lokalit a onboardingový hovor)

Konfigurujte poplatky za nastavení v sekci cenotvorby každého plánu. Podrobnější informace o [Vytváření vašeho prvního produktu s předplatným](/user-guide/configuration/creating-your-first-subscription-product) naleznete zde.

## Zkušební období

Nabídnout zkušební období snižuje tření při registraci, ale představuje riziko nekonverze. Pro FitSite:

- **7denní bezplatné zkušební období** pouze pro plán Starter
- Žádné zkušební období pro Growth a Pro (títo zákazníci jsou více zavázáni a očekávají platbu)

Konfigurujte zkušební období v sekci cenotvorby plánu Starter, aktivací přepínače **Offer Trial** (Nabídnout zkušební období) a nastavením délky na 7 dní.

### Jak zajistit konverzi ze zkušebního období

Zkušební období funguje pouze tehdy, když zákazník během něj zažije hodnotu. Vaše sekvence onboardingu (Lekce 8) je zde kritická – uvítací e-maily by měly být načasovány tak, aby podpořily zapojení během 7denního okna.

## Skupinové kódy (Discount Codes)

Vytvořte strategické kódy pro specifické účely:

- **FITLAUNCH** – 30 % sleva na první 3 měsíce (pro launchovou akci)
- **ANNUAL20** – 20 % sleva na roční plány (pokud není již zlevněno)
- **REFERRAL** – 1 měsíc zdarma (pro doporučení zákazníků)

Přejděte na **Ultimate Multisite > Discount Codes** k vytvoření těchto kódů. Podrobný návod naleznete v [Vytváření skupinových kódů](/user-guide/configuration/creating-discount-codes).

:::tip Nezlevňujte výchozíně
Slevy by měly být strategické nástroje, ne trvalé prvky. Pokud dostane každý slevu, není to sleva – je to vaše skutečná cena. Používejte je pro specifické kampaně, doporučení a akce s omezenou platností.
:::

## Zpracování daní

Pokud působíte ve jurisdikci, která vyžaduje sběr daní:

1. Konfigurujte saznky daní v **Ultimate Multisite > Settings > Taxes**
2. Použijte kategorie daní pro své plány
3. Zajistěte, že faktury správně zobrazují daně

Podrobnější konfiguraci naleznete v [Tax Handling](/user-guide/payment-gateways/tax-handling). Pokud sloužíte zákazníkům mezinárodně, zvažte [VAT addon](/addons/vat) pro dodržování předpisů EU.

## Revize cenotvorby

Po spuštění zkontrolujte cenotvorbu kvartálně. Zkuste se podívat na:

- **Konverze podle plánu**: Pokud Starter konvertuje dobře, ale Growth ne, mezera mezi nimi může být příliš velká
- **Rate akupgradování**: Pokud málo zákazníků upgraduje ze Starteru na Growth, plán Growth nemusí nabízet dostatečnou dodatečnou hodnotu
- **Odchod zákazníků podle plánu**: Pokud roční zákazníci méně odcházejí, více tlačíte na roční cenotvorbu
- **Ceny konkurence**: Co účtují alternativy? Jsme správně umístěni?

## FitSite Network na tuto chvíli

```
FitSite Network
├── WordPress Multisite (subdomain mode)
├── Ultimate Multisite (configured + branded)
├── Platform Domain (fitsite.com + wildcard SSL)
├── Site Templates (Studio Essential, Gym Pro, Fitness Chain)
├── Products
│   ├── FitSite Starter ($49/mo or $468/yr) + 7-day trial
│   ├── FitSite Growth ($99/mo or $948/yr) + $99 setup fee
│   ├── FitSite Pro ($199/mo or $1,908/yr) + $299 setup fee
│   └── Order Bumps + Discount Codes
├── Checkout Flow (with period selection toggle)
├── Branding (login, dashboard, emails, invoices, marketing site)
├── Customer Onboarding (Quick Start, emails, help resources)
├── Pricing Strategy
│   ├── Annual discounts (20% off)
│   ├── Strategic setup fees
│   ├── 7-day trial on Starter
│   ├── Discount codes for campaigns and referrals
│   └── Tax configuration
└── Ready for launch (next lesson)
```

## Co jsme v této lekci vytvořili

- **Roční cenotvorba** se s 20% slevou pro podpoření závazku
- **Poplatky za nastavení** na vyšších úrovních pro pokrytí úsilí při onboardingu
- **Zkušební období** na základním plánu pro snížení tření při registraci
- **Strategické skupinové kódy** pro spuštění, doporučení a kampaně
- **Konfigurace daní** pro dodržující fakturaci
- **Rámcový systém revize cenotvorby** pro neustálou optimalizaci

---

**Další:** [Lekce 10: Den spuštění](lesson-10-launch) – kontrolní seznam před spuštěním a aktivace.
