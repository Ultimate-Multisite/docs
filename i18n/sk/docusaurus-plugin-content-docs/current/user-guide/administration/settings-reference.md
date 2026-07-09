---
title: Referenčná príručka nastavení
sidebar_position: 11
_i18n_hash: d9ab375be74a5dff1aaf4f4eaf80c3be
---
# Referencia nastavení

Táto stránka sleduje nastavenia, ktoré ovplyvňujú každodennú správu a nedávne zmeny správania v Ultimate Multisite.

## Ďalšie možnosti

Oblasť **Ďalšie možnosti** sa zobrazuje pod **Ultimate Multisite > Settings > Login & Registration**.

| Nastavenie | Popis |
|---|---|
| **Enable Jumper** | Zobrazuje nástroj rýchlej navigácie Jumper v administrátorskej oblasti. Použite ho na priamy prechod na obrazovky Ultimate Multisite, sieťové objekty a podporované administrátorské ciele. Vypnite ho, ak nechcete, aby bola táto skratka viditeľná. |

## Hlásenie chýb a telemetria

Predchádzajúce nastavenie prihlásenia sa k hláseniu chýb bolo zo stránky nastavení odstránené. Anonymná telemetria je vypnutá a neexistuje žiadny prepínač v UI na jej zapnutie.

Ak udržiavate interné príručky alebo snímky obrazovky pre stránku nastavení, odstráňte odkazy na staré pole prihlásenia sa k hláseniu chýb, aby administrátori nehľadali nastavenie, ktoré už nie je prítomné.

## Nastavenia importu/exportu

Karta nastavení **Import/Export** opisuje, ktoré nastavenia ovláda, a odkazuje priamo na **Ultimate Multisite > Site Export** pre archívy webov a siete. Kartu nastavení použite na konfiguráciu importu/exportu, **Tools > Export & Import** použite pre pracovný postup exportu/importu jedného webu a nástroj Site Export použite, keď potrebujete úplný archív Network Export.

## Upozornenie na zostatok Domain Seller HostAfrica

Keď je doplnok Domain Seller pripojený k HostAfrica, administrátori siete teraz vidia zrušiteľné upozornenie na nízky zostatok, keď je zostatok účtu predajcu príliš nízky na spoľahlivé spracovanie registrácie alebo obnovenia domén.

Berte toto oznámenie ako prevádzkové upozornenie: pred prijímaním ďalších platených registrácií domén doplňte zostatok predajcu HostAfrica, potom sa vráťte do nastavení Domain Seller alebo na obrazovku monitorovania domén a potvrďte, že registrácie a obnovenia môžu pokračovať normálne.

## Nastavenia konektora poskytovateľa AI

Nastavenia konektora poskytovateľa AI teraz zobrazujú iba podporované skupiny účtov OAuth:

| Poskytovateľ | Postup nastavenia |
|---|---|
| **Anthropic Max** | Pripojte jeden alebo viac účtov Anthropic Max pomocou tlačidla OAuth. Použite manuálnu záložnú možnosť OAuth, keď sandboxovaný prehliadač nedokáže automaticky dokončiť presmerovanie. |
| **OpenAI ChatGPT/Codex** | Pripojte účty ChatGPT prostredníctvom rovnakého pracovného postupu skupiny OAuth. Operácie podporované konektorom môžu po pripojení účtu používať volania nástroja ChatGPT Codex. |
| **Google AI Pro** | Pripojte účty Google AI Pro prostredníctvom OAuth a potom obnovte konektor, ak sa zoznam účtov neaktualizuje okamžite. |

Cursor Pro už nie je podporovaný poskytovateľ. Odstráňte staré interné snímky obrazovky, príručky alebo kroky zaškolenia, ktoré spomínajú polia nastavenia Cursor Pro alebo cesty konektora.

Pri pridávaní alebo odstraňovaní účtov poskytovateľa zadajte platnú e-mailovú adresu účtu, ktorý sa obnovuje alebo odstraňuje, a pred testovaním operácií podporovaných konektorom uložte nastavenia poskytovateľa.
