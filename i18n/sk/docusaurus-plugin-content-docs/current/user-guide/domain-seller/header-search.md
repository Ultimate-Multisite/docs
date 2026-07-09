---
title: Hlavička vyhľadávania domény
sidebar_position: 4
_i18n_hash: c8b44ed222646006fb33c195ca6ac7a1
---
# Vyhľadávanie domény v hlavičke

Použite toto nastavenie, keď chcete malý formulár v hlavičke, ktorý spustí vyhľadávanie domény a potom umožní zákazníkovi vybrať si z dostupných domén v rámci Ultimate Multisite checkout.

## Požiadavky

- Ultimate Multisite aktívny v sieti.
- Multisite Ultimate Domain Seller aktívny v sieti.
- Aspoň jeden aktívny produkt registrácie domény s:
  - `domain_provider` nastaveným na nakonfigurovaného providera.
  - Nakonfigurovanými podporovanými TLD, napríklad `com`, `net` a `org`.
- Platný checkout formulár obsahujúci pole **Výber domény**.

## Checkout formulár

1. Vytvorte alebo upravte checkout formulár používaný registračnou stránkou.
2. Pridajte bežné povinné checkout/account polia vrátane **Používateľského mena**. Checkout formulár obsahujúci iba pole domény bude odmietnutý validáciou Ultimate Multisite.
3. Pridajte pole **Výber domény**.
4. Nastavte režim Domain Selection na **Iba registrovať**, keď sa má tok sústrediť na registrované domény namiesto bezplatných subdomén alebo existujúcich domén.
5. Priraďte produkt registrácie domény k tomuto poľu.

Registračná stránka by mala vykresliť checkout formulár, napríklad:

```text
[wu_checkout slug="domain-form"]
```

## Formulár v hlavičke

Pridajte malý `GET` formulár do hlavičky stránky, ktorý odošle zadaný hľadaný výraz na checkout stránku ako `domain_name`:

```html
<form class="ums-header-domain-search" action="/register/" method="get">
  <label class="screen-reader-text" for="ums-header-domain-search-input">Search for a domain</label>
  <input id="ums-header-domain-search-input" name="domain_name" type="text" placeholder="Find your domain" autocomplete="off">
  <button type="submit">Search</button>
</form>
```

Vlastným JavaScriptom v hlavičke nepredvyberajte doménu. Hlavička má iba odovzdať hľadaný výraz. Checkout skript Domain Seller prečíta `?domain_name=example`, vyplní vyhľadávacie pole v checkoute a spustí vyhľadávanie dostupnosti, aby si zákazník mohol vybrať z vrátených domén.

## Očakávané správanie

Vyhľadanie `example` v hlavičke by malo otvoriť:

```text
/register/?domain_name=example
```

Checkout by potom mal zobraziť voliteľné výsledky, ako napríklad:

- `example.com`
- `example.net`
- `example.org` nedostupná
- ďalšie TLD podporované providerom

Po výbere dostupného výsledku by súhrn objednávky mal obsahovať produkt registrácie domény a vybraný názov domény.

## Overenie

1. Otvorte domovskú stránku.
2. Vyhľadajte holý názov, napríklad `example`.
3. Potvrďte, že checkout URL obsahuje `?domain_name=example`.
4. Potvrďte, že doménové pole v checkoute obsahuje `example`.
5. Potvrďte, že sa zobrazí zoznam možností domén.
6. Kliknite na **Vybrať** pri dostupnej doméne.
7. Potvrďte, že súhrn objednávky obsahuje `Domain Registration - example.com` alebo vybranú doménu.

## Riešenie problémov

- Ak sa nezobrazí žiadny zoznam, skontrolujte kartu siete v prehliadači pre `admin-ajax.php?action=wu_domain_search` a potvrďte, že vracia neprázdne `domains` alebo `results`.
- Ak checkout formulár pri ukladaní zlyhá na validácii, pridajte povinné account polia, ako napríklad **Používateľské meno**.
- Ak výber domény neaktualizuje košík, potvrďte, že `window.wu_checkout_form` existuje a že checkout assety Domain Seller sú načítané na checkout stránke.
