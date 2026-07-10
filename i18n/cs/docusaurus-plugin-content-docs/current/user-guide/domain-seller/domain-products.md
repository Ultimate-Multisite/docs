---
title: Doménové produkty a ceny
sidebar_position: 2
_i18n_hash: 48757ad5b423db8f169a793b96d7bc71
---
# Produkty domén a ceny {#domain-products-and-pricing}

Produkty domén určují, jak spravujete ceny, TLD (top-level domény), soukromí WHOIS a výběr poskytovatelů. Každý produkt domény je standardní produkt Ultimate Multisite s navíc záložkou **Domain Settings** (Nastavení domény).

## Vytváření produktu domény {#creating-a-domain-product}

1. Přejděte na **Network Admin › Ultimate Multisite › Products**
2. Klikněte na **Add New** (Přidat nový)
3. Nastavte typ produktu na **Domain** (Doména)
4. Konfigurujte záložku **Domain Settings** (viz níže)
5. Uložte

Produkty domén se v seznamu produktů zobrazí fialovým odznakem **Domain** a lze je filtrovat pomocí záložky **Domain Products** (Produkty domén).

## Záložka nastavení domény {#domain-settings-tab}

### Provider (Poskytovatel) {#provider}

Vyberte, který registrátor zajistí registraci pro tento produkt. Výchozí je globální **Default provider** (Výchozí poskytovatel) nastavený v nastavení Domain Seller.

### Supported TLDs (Podporované TLD) {#supported-tlds}

Nechte prázdné, pokud chcete vytvořit **catch-all produkt** (produkt zachycující vše), který platí pro všechny TLD, které není shodováno jiným produktem.

Zadejte seznam TLD oddělených čárkou (např. `.com, .net, .org`), abyste vytvořili **TLD-specifický produkt**, který platí pouze pro tyto koncovky.

**Jak funguje shoda produktů:** Když zákazník hledá doménu, addon vybere nejpřesněji odpovídající produkt. Produkt s `.com` v seznamu TLD má přednost před catch-all produktem. Pokud žádný TLD-specifický produkt neodpovídá, použije se catch-all. Pokud žádné produkty neexistují, doménová vyhledávání se nezobrazí.

### Markup type (Typ marže) {#markup-type}

Tři režimy kontrolují, jak se váš prodejní cena vypočítá z dodavatelské ceny:

| Mode (Režim) | How it works (Jak to funguje) |
|---|---|
| **Percentage** (Procento) | Přičte se procento k dodavatelské ceně. 20% marže na dodavatelskou doménu za 10 $ dá 12 $. |
| **Fixed markup** (Fixovaná marže) | Přičte se fixní částka v dolarech. 5 $ marže na doménu za 10 $ dá 15 $. |
| **Fixed price** (Fixní cena) | Zohledňuje dodavatelskou cenu zcela. Vždy účtuje částku, kterou zadáte. |

### Introductory pricing (Úvodní ceny) {#introductory-pricing}

Zapněte, abyste mohli nabídnout zlevněnou cenu za první rok. Nastavte samostatnou **Introductory price** (úvodní cenu, cena za rok 1) vedle běžné **Renewal price** (cena za obnovu, rok 2+). Zákazník uvidí obě ceny během pokladny, aby věděl, co očekávat při obnově.

### WHOIS privacy (Soukromí WHOIS) {#whois-privacy}

Kontroluje, zda je pro domény registrované prostřednictvím tohoto produktu nabízeno ochrana soukromí WHOIS.

| Setting (Nastavení) | Behaviour (Chování) |
|---|---|
| **Disabled** (Zakázáno) | Soukromí WHOIS nikdy není nabízeno ani aktivováno. |
| **Always Included** (Vždy zahrnuto) | Soukromí WHOIS je automaticky aktivováno při registraci bez poplatku. |
| **Customer Choice** (Volba zákazníka) | Během pokladny se objeví zaškrtávací pole. Nastavte **Privacy price** (Cena za soukromí) tak, aby bylo účtováno ročně, nebo ho nechte na 0 $ pro bezplatnou nabídku. |

Pro Namecheap soukromí WHOIS používá WhoisGuard (vždy bezplatné). Pro OpenSRS používá službu OpenSRS privacy (může mít dodavatelskou cenu).

---

## Import a synchronizace TLD {#tld-import-and-sync}

Produkty domén zobrazují v reálném čase dodavatelské ceny získané od připojeného poskytovatele. Aby to fungovalo, musí být TLD importovány.

- **Manual sync** (Manuální synchronizace): Settings › Domain Seller › Sync TLDs (pro poskytovatele)
- **Automatic sync** (Automatická synchronizace): Spouští se denně pomocí plánovaného cron jobu pro všechny nakonfigurované poskytovatele

Po synchronizaci se přihlaste do záložky Domain Settings libovolného produktu domény a použijte TLD picker, abyste viděli dostupné TLD s jejich aktuálními dodavatelskými cenami.

---

## Auto-renewal (Automatická doba platnosti) {#auto-renewal}

Obnovy domén jsou spojeny se statusem členství zákazníka:

- Když se členství obnoví a doména je spojena, automaticky se zahájí proces obnovy domény
- Pokusy o obnovu používají aktivní platební bránu zákazníka
- Selhání obnovy se pokusí automaticky opakovat s exponenciálním zpomalením (exponential backoff)
- E-mailové upozornění jsou odeslána pro úspěšné obnovy, selhání a nadcházející expirace

ID e-mailových šablon pro události životního cyklu domény:

| Event (Událost) | Template ID (ID šablony) |
|---|---|
| Domain registered (Doména zaregistrována) | `domain_registered` |
| Domain renewed (Doména obnovena) | `domain_renewed` |
| Renewal failed (Obnova selhala) | `domain_renewal_failed` |
| Domain expiring soon (Doména brzy vyprší) | `domain_expiring_soon` |

---

## Admin: Ruční registraci domény {#admin-manual-domain-registration}

Pokud chcete zaregistrovat doménu ve jménu zákazníka, aby neprocházel pokladnu:

1. Přejděte na **Network Admin › Ultimate Multisite › Register Domain**
2. Vyberte zákazníka a zadejte název domény
3. Vyplňte kontaktní údaje registračního subjektu (jméno, adresa, telefon)
4. Klikněte na **Register** (Zaregistrovat)

Knihovna domény je vytvořena a spojena se systémem zákazníka.
