---
title: Automatické vyhľadávanie a nahradenie v šablónach webových stránok
sidebar_position: 8
_i18n_hash: 0842f53505d24579010d91568e06ef68
---
# Automatické vyhľadávanie a nahradenie v šablónach stránok (v2) {#auto-search-and-replace-in-site-templates-v2}

_**Tento tutorial vyžaduje WP UItimo verzii 2.x.**_

Jednou z najsilnejších vlastností Ultimate Multisite je schopnosť pridať do formulára registráции akékoľvek text, farby a výberné pole. Keď tieto údaje zachytáme, môžeme ich použiť na predpripravovanie obsahu v určitých častiach vybraného šablónu stránky. Potom, keď je nová stránka publikovaná, Ultimate Multisite nahradí zástupníky (placeholders) reálnymi informáciami zadanými počas registráции.

Napriek tomu môžete svoje šablóny stránok s zástupnikmi. Zástupníky pridajte obklopený dvojitým curly braces - {{placeholder_name}}.

Potom si môžete jednoducho pridať odpovedajúce pole na registrácii, aby ste zachytili tieto údaje.

Vtedy bude váš zákazník môcť toto pole vyplniť počas registráции.

Ultimate Multisite potom automaticky nahradí zástupníky údajmi poskytnutými zákazníkom.

## **Riešenie problému „šablóna plná zástupníkov“** {#solving-the-template-full-of-placeholders-problem}

Všetko to je skvelé, ale gặpáme sa s neviditeľným problémom: teraz naše šablóny stránok – ktoré môžu navštíviť naši zákazníci – sú plné neviditeľných zástupnikov, ktoré nehovoria nič zaujímavé.

Aby sme to vyriešili, ponúkame možnosť nastaviť falošné hodnoty pre zástupniky a používame tieto hodnoty na vyhľadávanie a nahradenie ich obsahu v šablónach stránok, kým sú zákazníci na stránke.

Môžete sa dostat do redaktóra zástupnikov šablóny pomocou navigácie do **Ultimate Multisite > Settings > Sites**, prechádzania na sekciu Site Template Options a potom kliknutia na odkaz **Edit Placeholders**.

![Obsah sekcie Site Template Options v nastaveniach stránok](/img/config/settings-sites-templates-section.png)

To vás presmeruje do redaktóra obsahu zástupnikov, kde môžete pridať zástupniky a ich príslušný obsah.

![Editor vstupný bod šablón pre nastavenia sitov](/img/config/settings-sites-templates-section.png)
