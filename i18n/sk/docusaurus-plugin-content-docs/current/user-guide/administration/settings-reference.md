---
title: Referencia nastavení
sidebar_position: 11
_i18n_hash: 0259b88b319090b358483322ad97fc2d
---
# Referencia nastavení

Tato stránka sleduje nastavení, které ovlivňují každodennou správu a nedávné změny chování v Ultimate Multisite.

## Další možnosti

Sekce **Další možnosti** se nachází pod **Ultimate Multisite > Settings > Login & Registration**.

| Nastavení | Popis |
|---|---|
| **Enable Jumper** | Zobrazuje rychlý nástroj navigace Jumper v administrativním zařízení. Použijte ho k přímému přesunu na obrazovky Ultimate Multisite, síťové objekty a podporované destinace pro administraci. Deaktivujte jej, pokud si tuto zkratku nechtíte vidět. |

## Nahlášení chyb a telemetrie

Poprzední nastavení pro souhlas s nahlášením chyb bylo odstraněno ze stránky nastavení. Anonymní telemetrie je vypnuto a na rozhraní není žádný přepínač k její aktivaci.

Pokud udržujete interní runbooks nebo snímky obrazovky pro stránku nastavení, odeberte odkazy na staré pole pro souhlas s nahlášením chyb, abyste administrátoři neměli hledat nastavení, které již neexistuje.

## Nastavení importu/exportu

T absorbent záložka **Import/Export** popisuje, která nastavení ovládá a přímo odkazuje na **Ultimate Multisite > Site Export** pro archivy sítí a sítě. Používejte záložku nastavení pro konfiguraci importu/exportu, použijte **Tools > Export & Import** pro pracovní postup exportu/importu pro jednu síť a použijte nástroj Site Export, když potřebujete kompletní archiv exportu sítě.

## Nastavení konektoru AI poskytovatele

Nastavení konektoru AI poskytovatele nyní zobrazují pouze podporované skupiny účtů OAuth:

| Provider | Nastavenie toku |
|---|---|
| **Anthropic Max** | Pripojte jeden alebo viac účtov Anthropic Max pomocou tlačidla OAuth. Použite manuálnu OAuth záverku, ak sa v sandboxed prehliadači automaticky neprejdie na cieľ. |
| **OpenAI ChatGPT/Codex** | Pripojte účty ChatGPT cez ten istý pracovný postup OAuth. Operácie podporované kontejnerom môžu používať nástroje ChatGPT Codex po pripojení účtu. |
| **Google AI Pro** | Pripojte účty Google AI Pro pomocou OAuth, potom si obnovte kontejner, ak sa zoznam účtov neaktualizuje okamžite. |

Cursor Pro už nie je podporovaný poskytovateľom. Odstránte staré interné snímky obrazovky, runbóky alebo kroky na začiatok, ktoré spomínajú nastavenia Cursor Pro alebo cesty kontejnerov.

Pri pridávaní alebo odstránovaní účtov poskytovateľa zadajte platnú e-mailovú adresu pre účet, ktorý sa obnovuje alebo odstráni, a uložte nastavenia poskytovateľa pred testovaním operácií podporovaných kontejnerom.
