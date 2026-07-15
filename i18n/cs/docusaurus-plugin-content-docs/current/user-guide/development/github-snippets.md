---
title: GitHub Snippets
sidebar_position: 3
_i18n_hash: c643f3d76aace8c15fd224b984af6633
---
# Jak používat fragmenty kódu Ultimate Multisite z našeho GitHub repozitáře

Na GitHubu jsou k dispozici fragmenty kódu, které často požadují uživatelé Ultimate Multisite. Tyto fragmenty umožňují přidat drobné funkce, jako je vložení skriptu Google Analytics na registrační stránky nebo skrytí meta boxu v administraci.

V tomto článku vám ukážeme, jak tyto kódy použít, a konkrétně kam je umístit.

Fragmenty kódu najdete na odkazu níže.

https://github.com/next-press/wp-ultimo-snippets/

Kód můžete přidat dvěma způsoby:

  1. Do souboru functions.php vašeho motivu.

  2. Pomocí Must-Use pluginů (mu-plugins)

# Jak přidat fragment kódu do souboru functions.php vašeho motivu

  1. Přihlaste se do administrace vaší WordPress multisite sítě a přejděte na Vzhled > Editor motivů (viz snímek obrazovky níže).

  2. Na stránce „Úprava motivů" se ujistěte, že máte v rozbalovacím seznamu v pravém horním rohu obrazovky vybraný váš aktivní motiv (č. 3 na snímku obrazovky níže).

  3. V sekci „Soubory motivu" klikněte na soubor functions.php, aby se načetl. Přejděte na konec souboru a vložte fragment kódu Ultimate Multisite, který jste získali z GitHub repozitáře.

<!-- Screenshot unavailable: WordPress Theme Editor showing functions.php file editing -->

# Jak vytvořit Must-Use pluginy (mu-plugins)

WordPress má funkci, která umožňuje načítat vlastní funkcionalitu pomocí takzvaných „Must-Use pluginů", zkráceně „mu-plugins".

Tyto speciální mu-pluginy se načítají před všemi ostatními běžnými pluginy a nelze je deaktivovat. V multisite síti se kód v těchto mu-pluginech načte na všech webech vaší instalace.

1\. Pomocí FTP nebo SSH se připojte k souborovému systému vaší WordPress instalace.

2\. V adresáři wp-content vaší WordPress instalace vytvořte nový adresář s názvem: mu-plugins.

<!-- Screenshot unavailable: File manager showing wp-content directory with mu-plugins folder -->

3\. Na svém počítači vytvořte nový PHP soubor s názvem wu-snippet.php pomocí Poznámkového bloku nebo jiného editoru kódu.

4\. Do souboru vložte fragment kódu Ultimate Multisite, který jste získali z GitHub repozitáře, a soubor uložte. Na začátek fragmentu kódu můžete také přidat následující kód, který váš mu plugin označí.
