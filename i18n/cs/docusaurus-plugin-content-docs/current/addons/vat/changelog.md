---
title: Změny v DPH
sidebar_position: 99
_i18n_hash: 6a39ef4779b6ed52a08804c75ca25fc9
---
# Historie změn DPH

Verze 1.0.7 - Vydáno 2026-02-03

* Oprava: Německé (DE) DPH čísla selhávala při validaci kvůli chybám VIES SOAP služby MS_MAX_CONCURRENT_REQ. Přepnuli jsme se z zastaralé SOAP API na oficiální EU VIES REST API pro spolehlivější validaci.
* Oprava: DPH čísla jsou nyní přijímána i v případě, že je služba VIES dočasně nedostupná, namísto toho, že jsou chybně odmítnuta. Buve vytvozen záznam v logu k pozdějšímu zkontrovaní.
* Oprava: Pole pro DPH/Daňové ID je nyní viditelné pro všechny země, nejen pro členy EU. Ne-EU daňová ID (např. švýcarské CHE čísla) jsou uložena pro zobrazení na fakturách bez validace VIES.
* Oprava: Zjišťování prefixu DPH pro Řecko (GR), Monako (MC) a ostrov Man byl porušen kvůli nesprávné logice vyhledávání v polech.
* Vylepšení: Odstraněn byl zbytečný závislost pro vývojáře `wp-cli-bundle`, který může způsobit fatální chyby při použití s addonem Site Exporter.
* Vylepšení: Přidána komplexní sada jednotkových testů (53 testy).

Verze 1.0.6 - Vydáno 2026-01-25

* Oprava: Domácí B2B transakce nyní správně účtují DPH. Podle EU pravidel pro DPH se zpětná daň (reverse charge) vztahuje pouze na mezinárodní B2B transakce, nikoli když se země zákazníka shoduje s zemí společnosti.

Verze 1.0.5 - Vydáno 2026-01-22

* Oprava: Addon se nenačítal nebo nefungoval správně.
* Změna: Zdroj dat DPH byl přesunut z euvatrates.com do úložiště ibericode/vat-rates pro spolehlivější a aktivně udržované údaje.
* Oprava: Opravena byla překlepová hodnota pro možnost `super_reduced_rates`.
* Vylepšení: Přidány byly kontroly nulových hodnot pro zpracování kódů zemí, aby se zabránilo chybám.
* Změna: Odstraněny byly balíkové soubory s překladem ve prospěch automatických aktualizací přes Traduttore.

Verze: 1.0.3 - Vydáno 2025-09-28

* Překřejmenován prefix na ultimate-multisite; aktualizován textový domén; zvýšena verze.

Verze 1.0.0-beta.4 - 2021-09-24

* Přidáno: filtrování `wp_ultimo_skip_network_active_check` pro nastavení založené na mu-plugins;

Verze 1.0.0 - 05/08/2021 - Počáteční vydání
