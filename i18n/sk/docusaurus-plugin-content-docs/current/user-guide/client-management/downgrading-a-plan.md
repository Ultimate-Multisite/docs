---
title: Dowolňovanie plánu
sidebar_position: 7
_i18n_hash: ce49309d1cd1d8310fd360fa324119f3
---
# Sníženie plánu (v2)

_**DÔLEŽITÉ UPOZORNENIE: Tento článok sa týka Ultimate Multisite verzie 2.x.**_

Sníženie plánu alebo predplatného je bežná akcia, ktorú môžu urobiť vaši zákazníci, ak majú obmedzený rozpočet alebo rozhodli, že im na správu ich subsitehto potrebujú len málo zasobov.

## Ako znížiť plán

Vaši zákazníci si môžu plán v anytime znížiť, keď sa prihlásia do admin dashboardu svojho subsite a kliknú na **Zmeniť** pod sekciou ich účtu.

![Stránka s účtom zákazníka s Vašou kartou členstva a tlačidlom Zmeniť](/img/account-page/membership-change-button.png)

Po kliknutí na tlačidlo **Zmeniť** bude používateľ/zákazník presmerovaný na stránku pokladne, kde si môže vybrať plán, ktorý chce zmeniť svoj predplatné.

![Stránka s možnosťami zníženia plánu zo strany zákazníka](/img/account-page/downgrade-picker.png)

V tomto príklade znížame plán z **Premium** na **Free**.

Aby používateľ pokračoval, musí len kliknúť na tlačidlo **Dokončiť pokladňovanie**. Potom ho presmeruje späť na stránku s účtom, kde bude vidieť správu o nejakom odloženom zmenení členstva. Zmeny sa uplatnia pri **nasledujúcej fakturačnej cykle** zákazníka.

![Stránka s účtom zobrazujúca banner o odloženom zmenení členstva](/img/account-page/pending-change.png)

### Čo sa stane, keď používateľ zníži svoj plán

Je dôležité si všimnúť, že zníženie plánu ne mení existujúcu konfiguráciu v subsite používateľa.

Nemení automaticky šablon subsitehto, pretože zmena šablóny subsitehto úplne odstráni a resetuje subsitehto. To je na to, aby sa vyhnilo nepotrebným stratením dát. Preto bude disková kapacita, témy, pluginy atď. zachované, len posty nie.

Rozumieme, že vaša hlavná obava sú limity a kvóty, ktoré nastavíte pod každým plánom, ale musíme zvážiť poškodenie subportálu používateľa, ak odstránime alebo zmeníme jeho niektoré nastavenia.

Pre príspevky, ktoré prekonajú limit stanovený v pláne, máte 3 možnosti: **Zostávať s príspevkami** *,* **Pridať príspevky do košíka** *,* alebo **Pridať príspevky do návrhu** *.* Môžete to nakonfigurovať v nastaveniach Ultimate Multisite.

![Strana Nastavení Adminu Sieť zobrazujúca možnosti pre príspevky, ktoré prekonajú limit](/img/account-page/settings-sites-post-limit.png)

### Čo sa stane s platbou

V verzii 2.0 už nie je potrebné žiadne úpravy v platbe týkajúce sa proratovania (prípadového účtovania).

To je preto, že systém čaká na to, aby existujúca členstvo **dokončilo svoj fakturačný cyklus, než** bude nový plán/členstvo platť. Nová fakturačná suma pre nové členstvo sa automaticky uplatní a účtuje pri nasledujúcom fakturačnom cykle.
