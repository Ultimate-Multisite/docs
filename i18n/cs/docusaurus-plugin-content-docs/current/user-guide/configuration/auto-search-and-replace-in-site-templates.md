---
title: Automatické vyhledání a nahrazení v šablonách webů
sidebar_position: 8
_i18n_hash: 0842f53505d24579010d91568e06ef68
---
# Automatické vyhledávání a nahrazování v šablonách webů (v2)

_**Tento návod vyžaduje WP UItimo verze 2.x.**_

Jednou z nejvýkonnějších funkcí Ultimate Multisite je možnost přidávat do registračního formuláře libovolný text, barvu a výběrová pole. Jakmile máme tato data zachycená, můžeme je použít k předvyplnění obsahu v určitých částech vybrané šablony webu. Poté, když je nový web publikován, Ultimate Multisite nahradí zástupné symboly skutečnými informacemi zadanými během registrace.

Například můžete své šablonové weby připravit se zástupnými symboly. Zástupné symboly by měly být přidány obklopené dvojitými složenými závorkami - {{placeholder_name}}.

Poté můžete jednoduše přidat odpovídající registrační pole, které tato data zachytí

Váš zákazník pak bude moci toto pole během registrace vyplnit.

Ultimate Multisite poté automaticky nahradí zástupné symboly daty poskytnutými zákazníkem.

## **Řešení problému „šablony plné zástupných symbolů“**

To vše je skvělé, ale narážíme na nepříjemný problém: naše šablony webů – které mohou navštěvovat naši zákazníci – jsou nyní plné nevzhledných zástupných symbolů, které toho mnoho neřeknou.

Abychom to vyřešili, nabízíme možnost nastavit pro zástupné symboly falešné hodnoty a tyto hodnoty používáme k vyhledání a nahrazení jejich obsahu na šablonových webech, když je vaši zákazníci navštěvují.

K editoru zástupných symbolů šablony se dostanete tak, že přejdete do **Ultimate Multisite > Nastavení > Weby**, posunete se do oblasti Možnosti šablony webu a poté kliknete na odkaz **Upravit zástupné symboly**.

![Oblast Možnosti šablony webu na stránce nastavení Weby](/img/config/settings-sites-templates-section.png)

Tím se dostanete do editoru obsahu zástupných symbolů, kde můžete přidávat zástupné symboly a jejich příslušný obsah.

![Vstupní bod editoru zástupných symbolů šablony](/img/config/settings-sites-templates-section.png)
