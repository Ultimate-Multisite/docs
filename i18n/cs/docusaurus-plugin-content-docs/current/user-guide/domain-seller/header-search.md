---
title: Vyhledávání domén v záhlaví
sidebar_position: 4
_i18n_hash: c8b44ed222646006fb33c195ca6ac7a1
---
# Vyhledávání domény v hlavičce

Použijte toto nastavení, když chcete malý formulář v hlavičce, který spustí vyhledávání domény a poté zákazníkovi umožní vybrat si z dostupných domén uvnitř checkoutu Ultimate Multisite.

## Požadavky {#requirements}

- Ultimate Multisite aktivní v síti.
- Multisite Ultimate Domain Seller aktivní v síti.
- Alespoň jeden aktivní produkt registrace domény s:
  - `domain_provider` nastaveným na nakonfigurovaného poskytovatele.
  - Nakonfigurovanými podporovanými TLD, například `com`, `net` a `org`.
- Platný checkout formulář obsahující pole **Výběr domény**.

## Checkout formulář {#checkout-form}

1. Vytvořte nebo upravte checkout formulář používaný registrační stránkou.
2. Přidejte běžná povinná checkout/account pole, včetně **Uživatelské jméno**. Checkout formulář obsahující pouze pole domény je validací Ultimate Multisite odmítnut.
3. Přidejte pole **Výběr domény**.
4. Nastavte režim Domain Selection na **Pouze registrace**, když se má flow zaměřit na registrované domény spíše než na bezplatné subdomény nebo existující domény.
5. Přiřaďte k tomuto poli produkt registrace domény.

Registrační stránka by měla vykreslit checkout formulář, například:

```text
[wu_checkout slug="domain-form"]
```

## Formulář v hlavičce {#header-form}

Přidejte do hlavičky webu malý `GET` formulář, který odešle zadaný hledaný výraz na stránku checkoutu jako `domain_name`:

```html
<form class="ums-header-domain-search" action="/register/" method="get">
  <label class="screen-reader-text" for="ums-header-domain-search-input">Search for a domain</label>
  <input id="ums-header-domain-search-input" name="domain_name" type="text" placeholder="Find your domain" autocomplete="off">
  <button type="submit">Search</button>
</form>
```

Vlastním JavaScript v hlavičce nepředvybírejte doménu. Hlavička by měla pouze předat hledaný výraz. Checkout skript Domain Seller přečte `?domain_name=example`, vyplní vyhledávací pole v checkoutu a spustí vyhledávání dostupnosti, aby si zákazník mohl vybrat z vrácených domén.

## Očekávané chování {#expected-behaviour}

Vyhledání `example` v hlavičce by mělo otevřít:

```text
/register/?domain_name=example
```

Checkout by pak měl zobrazit volitelné výsledky, jako například:

- `example.com`
- `example.net`
- `example.org` nedostupná
- další TLD podporované poskytovatelem

Po výběru dostupného výsledku by souhrn objednávky měl obsahovat produkt registrace domény a vybraný název domény.

## Ověření {#verification}

1. Otevřete domovskou stránku.
2. Vyhledejte samotný název, například `example`.
3. Ověřte, že URL checkoutu obsahuje `?domain_name=example`.
4. Ověřte, že pole domény v checkoutu obsahuje `example`.
5. Ověřte, že se zobrazí seznam možností domény.
6. Klikněte na **Vybrat** u dostupné domény.
7. Ověřte, že souhrn objednávky obsahuje `Domain Registration - example.com` nebo vybranou doménu.

## Řešení problémů {#troubleshooting}

- Pokud se nezobrazí žádný seznam, zkontrolujte v prohlížeči kartu sítě pro `admin-ajax.php?action=wu_domain_search` a ověřte, že vrací neprázdné `domains` nebo `results`.
- Pokud checkout formulář selže při ukládání validací, přidejte povinná account pole, jako je **Uživatelské jméno**.
- Pokud výběr domény neaktualizuje košík, ověřte, že `window.wu_checkout_form` existuje a že jsou na stránce checkoutu načteny assets Domain Seller checkoutu.
