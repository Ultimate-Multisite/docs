---
title: Export stránky
sidebar_position: 11
_i18n_hash: d25255aa1b01df64a9008f91e3dcbeb1
---
# Exportování webu

Administrativní stránka **Exportování webu** umožňuje administrátorům sítě balíkovat jeden web, nebo celou síť, do stahovatelného archivu pro migraci, zálohování nebo předání.

## Exportování jednoho webu {#exporting-one-site}

Přejděte na **Ultimate Multisite > Site Export** a vyberte **Generate new Site Export** (Vytvořit nový export webu). Vyberte podweb, který chcete exportovat, a poté zvolte, zda má archiv obsahovat nahrání, pluginy a téma.

Po dokončení exportu si stáhněte ZIP z seznamu **Existing Exports** (Existující exporty). Exportované ZIPy nyní obsahují samozačínající `index.php` a soubor `readme.txt`, takže archiv lze nahrajit na nový host a spustit bez předchozí instalace samostatného pluginu pro import.

## Exportování celé sítě {#exporting-the-whole-network}

Použijte **Network Export** (Export sítě) na stránce Site Export, když potřebujete jeden archiv obsahující všechny podweby v síti. Je to užitečné před migraci hostů, simulací obnovy po katastrofě nebo rekonstrukcí prostředí (staging), kde musí cestovat každý podweb společně.

Protože export celé sítě může být mnohem větší než export jednoho webu, proveďte ho během období nízké návštěvnosti a potvrďte, že cílové úložiště má dostatek volného místa pro nahrání, pluginy, téma a vygenerované ZIP soubory.

### Balíčky importu sítě {#network-import-bundles}

S Ultimate Multisite 2.12.0 je Site Exporter schopen generovat **network import bundles** (balíčky importu sítě) — specializované archivy navržené pro zjednodušenou obnovu webu v celé síti. Balíček importu sítě obsahuje všechny potřebné soubory a metadata k obnovení více webů na novou instalaci sítě.

#### Generování balíčku importu sítě {#generating-a-network-import-bundle}

1. Přejděte na **Ultimate Multisite > Site Export**
2. Klikněte na **Generate new Network Export** (Vytvořit nový export sítě)
3. Vyberte **Network Import Bundle** jako typ exportu
4. Vyberte, zda chcete zahrnout nahrání, pluginy a téma
5. Klikněte na **Generate** (Vytvořit)
6. Stáhněte balíček ZIP ze seznamu **Existing Exports** (Existující exporty)

#### Obnova z balíčku importu sítě {#restoring-from-a-network-import-bundle}

Pro obnovení webů z balíčku importu sítě:

1. Nainstalujte Ultimate Multisite na cílové hostování
2. Dokončete průvodce nastavením multisite
3. Přejděte na **Ultimate Multisite > Site Export** na nové síti
4. Klikněte na **Import Network Bundle** (Importovat balíček sítě)
5. Nahrajte ZIP soubor balíčku importu sítě
6. Dodržujte pokyny pro import na obrazovce
7. Proces importu obnoví všechny weby, jejich obsah a konfigurace

Balíčky importu sítě zachovávají:
- Obsah webu (příspěvky, stránky, vlastní typy příspěvků)
- Nastavení a možnosti webu
- Role a oprávnění uživatelů
- Pluginy a téma (pokud jsou zahrnuty v balíčku)
- Nahrání médií (pokud jsou zahrnuty v balíčku)
- Vlastní tabulky a data v databázi

## Instalace samozačínajícího export ZIP {#installing-a-self-booting-export-zip}

Pro obnovení samozačínajícího ZIP na novém hostování:

1. Nahrajte obsah exportovaného ZIP do kořenového adresáře webu.
2. Otevřete nahraný `index.php` v prohlížeči.
3. Dodržujte pokyny pro instalaci na obrazovce z balíkovaného exportního balíčku.
4. Prostudujte balíkovaný `readme.txt` kvůli poznámkám specifickým pro export, než odstraníte dočasné soubory.

Více informací o instalaci a importu specifických addonů naleznete v dokumentaci [Site Exporter addon](/addons/site-exporter).

Pro nástroj pro jednotlivé weby přidán v Ultimate Multisite 2.9.0, viz [Export & Import](/user-guide/administration/export-import).
