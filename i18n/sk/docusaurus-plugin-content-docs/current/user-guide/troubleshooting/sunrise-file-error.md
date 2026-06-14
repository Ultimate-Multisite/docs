---
title: Chyba s súborem Sunrise
sidebar_position: 12
_i18n_hash: 53d988d644c244d20f04444350bd5d3c
---
# Chyba instalácie súboru sunrise.php

Súbor `sunrise.php` je špeciálny súbor, ktorý WordPress hľadá počas svojej inicializácie (bootstrappingu). Aby sa WordPress dostal k zoznamu tohto súboru, musí byť umiestnený v priečastke **wp-content**.

Keď aktivujete Ultimate Multisite a prejdete po pomocných návode ako ten na obrázku, Ultimate Multisite si snaží skopírovať náš súbor `sunrise.php` do priečastka wp-content.

<!-- Obrázok nedostupný: Stránka pomocného návodu zobrazujúca krok instalácie sunrise.php -->

V väčšine prípadov sme túto kontrolu úspešne skopírovali a všetko funguje. Avšak, ak niečo nebola správne nastavená (napr. povolenia priečastka), môžete gặpť situáciu, kde Ultimate Multisite nemôže súbor skopírovať.

Ak si prečitate chybové hlásenie, ktoré vám Ultimo dá, uvidíte, že to je presne to, čo sa tu stalo: **Sunrise copy failed** (Skopírovanie sunriseu neúspešne).

<!-- Obrázok nedostupný: Chybové hlásenie zobrazujúce Sunrise copy failed -->

Aby ste to opravili, môžete jednoducho skopírovať súbor `sunrise.php` z priečastka pluginu wp-ultimo a vstať ho do vášho priečastka wp-content. Po tom si prestehnite pomocný návod a kontrolné body by mal byť úspešne dokončené.

<!-- Obrázok nedostupný: Správca súborov zobrazujúci sunrise.php v priečastku pluginu wp-ultimo --> V každom prípade je to dobrá príležitosť pre všeobecnú kontrolu povolenia priečastkov, aby ste sa v budúcnosti vyhnuli problémom (nielen s Ultimate Multisite, ale aj s inými pluginmi a témovi).

Narzúda **Health Check tool**, ktorá je súčasťou WordPressu (môžete ju zobraziť v hlavnej kontrolnej paneli vášho webu: **admin panel > Tools > Health Check**), vám môže ukázať, či máte povolenia priečastkov nastavené na hodnoty, ktoré by mohli spôsobiť problémy s WordPressom.

<!-- Zobrazenie obrázka nie je dostupné: Nástroj pre kontrolu stavu WordPress zobrazuje informáciu o právach súborov v složke -->
