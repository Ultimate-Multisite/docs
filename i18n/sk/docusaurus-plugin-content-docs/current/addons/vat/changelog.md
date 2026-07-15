---
title: Zoznam zmien DPH
sidebar_position: 99
_i18n_hash: 6a39ef4779b6ed52a08804c75ca25fc9
---
# Zoznam zmien DPH

Verzia 1.0.7 - Vydané 2026-02-03

* Oprava: Nemecké (DE) čísla DPH neprechádzali validáciou z dôvodu chýb VIES SOAP služby MS_MAX_CONCURRENT_REQ. Pre spoľahlivejšiu validáciu sa prešlo zo staršieho SOAP API na oficiálne EU VIES REST API.
* Oprava: Čísla DPH sa teraz akceptujú, keď je služba VIES dočasne nedostupná, namiesto toho, aby boli nesprávne odmietnuté. Vytvorí sa záznam v logu na neskoršiu kontrolu.
* Oprava: Pole DPH/daňového ID je teraz viditeľné pre všetky krajiny, nielen pre členov EÚ. Daňové ID mimo EÚ (napr. švajčiarske čísla CHE) sa ukladajú na zobrazenie na faktúre bez validácie cez VIES.
* Oprava: Vyhľadávanie predpony DPH pre Grécko (GR), Monako (MC) a Ostrov Man (IM) bolo nefunkčné z dôvodu nesprávnej logiky vyhľadávania v poli.
* Vylepšenie: Odstránená nepotrebná vývojová závislosť wp-cli-bundle, ktorá mohla spôsobovať fatálne chyby pri použití spolu s doplnkom Site Exporter.
* Vylepšenie: Pridaný komplexný balík jednotkových testov (53 testov).

Verzia 1.0.6 - Vydané 2026-01-25

* Oprava: Domáce B2B transakcie teraz správne účtujú DPH. Podľa pravidiel EÚ pre DPH sa prenesenie daňovej povinnosti vzťahuje iba na cezhraničné B2B transakcie, nie keď sa krajina zákazníka zhoduje s krajinou spoločnosti.

Verzia 1.0.5 - Vydané 2026-01-22

* Oprava: Addon sa nenačítaval alebo nefungoval správne.
* Zmena: Zdroj údajov sadzieb DPH bol zmenený z euvatrates.com na repozitár ibericode/vat-rates pre spoľahlivejšie a aktívne udržiavané údaje.
* Oprava: Opravený preklep v hodnote možnosti super_reduced_rates.
* Vylepšenie: Pridané kontroly null pri spracovaní kódov krajín, aby sa predišlo chybám.
* Zmena: Odstránené pribalené prekladové súbory v prospech automatických aktualizácií cez Traduttore.

Verzia: 1.0.3 - Vydané 2025-09-28

* Premenovaná predpona na ultimate-multisite; aktualizovaná textová doména; zvýšená verzia.

Verzia 1.0.0-beta.4 - 2021-09-24

* Pridané: filter wp_ultimo_skip_network_active_check pre nastavenia založené na mu-plugins;

Verzia 1.0.0 - 05/08/2021 - Prvé vydanie
