---
title: Export a import
sidebar_position: 12
_i18n_hash: 6536f9ebee269a8553a57733e4cb03fc
---
# Export a importovať

Ultimate Multisite 2.9.0 pridáva nástroj **Export a import** pod sekciu **Nástroje > Export a import**. Použite ho, ak potrebujete jeden WordPress port v ZIP súbor zbalil, obnoviť tento ZIP alebo presmiesti port medzi kompatibilnými inštaláciami Ultimate Multisite a single-site WordPress.

## Požadované prístupy

Musíte sa prihlásiť ako admin, ktorý má prístup k menu **Nástroje** v portu, ktorý exportujete alebo importujete. V siete multisite použite účet administrátora siete pri exportovaní alebo importovaní subportov z nástrojov Ultimate Multisite na úrovni siete.

Stiahnutia ZIP súborov exportu sa poskytujú cez autentizovaný bod stiahnutia, takže si udržujte aktívnú admin sesiu, kým sa stiahnutie neuskutoční a nespoľahujte generované URL odkazy na stiahnutie verejnosti.

## Exportovanie portu do ZIP súboru

1. V admin WordPressa pre port, ktorý chcete skopírovať, prejdite do **Nástroje > Export a import**.
2. Otvorte priestor exportu a vyberte port, ktorý chcete zbalil.
3. Vyberte voliteľné obsahu na zahrnutie, ako sú súbory zobrazených (uploads), pluginy a témy, ak sú tieto možnosti dostupné.
4. Začnite export a počkajte, kým proces skončí. Veľké porty môžu potrebovať čas v pozadí, aby sa ZIP súbor pripravil.
5. Stiahnite hotový ZIP súbor z zoznamu exportov.

Udržujte ZIP súbor na bezpečnom mieste. Môže obsahovať obsah portu, nastavenia, media súbory a vybrané kódsedlove.

## Čo export zahŕňa

ZIP súbor exportu môže obsahovať:

- Obsah databázy a konfiguráciu vybraného portu.
- Zobrazené media súbory, ak sú zahrnuté zobrazených súborov.
- Pluginy a témy, ak ste si tieto možnosti vybrali.
- Metadát pre import používané nástrojom Export a import na obnovenie portu na cieľovej inštalácii.

Účelový súbor ZIP závisí na objeme médií, vybraných pluginov a tém, ako aj veľkosti tabuliek databázy webu.

## Importovanie webu z ZIP súboru

1. Prejdite do **Nástroje > Export a import** na cieľovej WordPress site.
2. Otvorte priestor pre import a načtajte ZIP súbor vytvorený nástrojom Export a import.
3. Vpíšte zastúpenie URL, ak má web použiť novú adresu, alebo zostavte pole prázdne, aby ste zachovali pôvodnú URL.
4. Vyberte, či chcete odstrániť načítaný ZIP súbor po dokončení importu.
5. Kliknite na **Začína import**.
6. Monitorujte priebeh odoberať import, kým sa neuskutoční. Používajte **Zrušiť import** len ak potrebujete proces zastaviť pred jeho dokončením.
7. Prejdite si načítaný web pred tým, ako uvoľíte normálny prístup alebo prístup zákazníkov.

Na jednorazovej WordPress inštalácii sa import ZIP súboru nahradí aktuálnym webom načítaným webom. Pred začiatkom vytvorte kompletnú zálohu cieľového webu a vyhýbajcie sa spúšťania viacerých importov pre ten istý web naraz.

## Omeňujúce informácie a poznámky o kompatibilite

Dôležité upozornenia:

* Veľké súbory prenášania alebo médií môžu vytvárať veľké ZIP súbory. Pred exportom alebo importom veľkých sítí si uistite, že máte správne nastavené limity PHP prenášania, limity vykonávania, priestor na disku, pamäť a časový limit servera.
* Veľké médiové knihovny môžu byť potrebné presmiestať počas okna údržby s nízkou aktivitou.
* Cílová inštancia WordPress musia bežať kompatibilné verzie WordPress, PHP, Ultimate Multisite, pluginov a tém.
* Import jednosítne súbor nahradí cílovú sít. Nie je to nástroj na spojenie (merge tool).
* Presmiestať medzi multisit a jednosítny a jednosítny a multisitové inštancie je podporované len vtedy, ak môže cieľová среda bežať pluginy, tém, URL adresy a potrebné komponenty Ultimate Multisite exportovanej sity.
* ZIP súbor udržujte súkromný. Môže obsahovať obsah databázy, nahrané súbory a konfiguračné detaily z exportovanej sity.

Pre staršie pracovné toky exportu na úrovni siete si pozrite [Site Export](/user-guide/administration/site-export).
