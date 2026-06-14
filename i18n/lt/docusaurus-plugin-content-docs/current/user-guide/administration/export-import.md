---
title: Išvaizduoti ir įvaizduoti
sidebar_position: 12
_i18n_hash: 6536f9ebee269a8553a57733e4cb03fc
---
# Eksportavimas ir importavimas

Ultimate Multisite 2.9.0 pridėjo vieną vienytį **Eksportavimo ir importavimo** įrankį, esantįje meniu **Tools > Export & Import**. Naudokite jį, kai jums reikia paketuoti vieną WordPress svetainę kaip ZIP failą, atnaujinti tą ZIP arba pereiti svetainę tarp sujungtų Ultimate Multisite ir vienytinių WordPress įrenginių.

## Reikalaujami teisės

Jums reikia prisiųsti kaip administratorius, kuriam privalo turėti prieigą prie meniu **Tools** WordPress ant to svetainės, kurią eksportuojate ar importuojate. Multisite tinklu naudokite tinklo administratoriaus paskyrą eksportuodami arba importuodami subsvetų iš tinklo-nivelio Ultimate Multisite įrankių.

Eksportavimo ZIP žymybės teikiamos per autentifikuotą atsisiųsinimo punktą, todėl turėkite aktyvų administratoriaus sesiją iki to, kol atsisiųsinimas baigs, ir ne dalinkite generuotais atsisiųsinimo URL adresais viešai.

## Svetainės eksportavimas į ZIP

1. WordPress admin'yje svetaine, kurią norite kopijuoti, eikite į **Tools > Export & Import**.
2. Atidarykite eksportavimo vietą ir pasirinkite svetainę, kurią norite paketuoti.
3. Pasirinkite opcionalius turinį, kurį reikia įtraukti, pavyzdžiui, įkrovimus, pluginus ir temų, kai šios opsijos yra prieinamos.
4. Pradėkite eksportavimą ir laukite, kol procesas baigs. Didbioms svetainėms gali reikėti baigti užduotį fonui, kol ZIP bus pasiruošęs.
5. Atsisiųskite baigtą ZIP failą iš eksportavimo sąrašą.

Laikykite ZIP failą sauguje. Jis gali turėti svetainės turinį, nustatymus, medijos failus ir pasirinktus kodą aktyvumo elementus.

## Kas įskaitoma eksportavimas

Eksportavimo ZIP failas gali įtraukti:

- Pasirinktos svetainės duomenų bazos turinį ir konfigūraciją.
- Įkrovimus, jei jie yra įtraukiami.
- Pluginus ir temas, jei pasirinkta šios opsijos.
- Importavimo metadatos, naudojamų Eksportavimo ir importavimo įrankiui svetainę atnaujinti tiksliniame įrenginyje.

Tikslus ZIP failų dydis priklauso nuo medya kiekio, pasirinktų pluginų ir temų taip pat kaip ir naujų vietos duomenų bazės santraukų dydis.

## Vietos įvaizdymo (Importavimo) atvedimas iš ZIP

1. Perjunkite į **Tools > Export & Import** (Įveskite ir eksportuokite) ant jūsų tikslinės WordPress svetainės.
2. Atidarykite importavimo vietą ir įkiškite ZIP failą, kurį pateikė Eksportų ir importavimo įrankis.
3. Įveskite pakeitimo URL (naujo adresas), jei svetaine reikalinga nauja vieta, arba palikykite laukelį tuščia, kad išlaikytumėte originalų URL.
4. Pasirinkite, ar nustatykite ZIP failą po importavimo pabaigos.
5. Spauskite **Begin Import** (Pradėti importavimą).
6. StabdYKite laukimo importavimo, kol jis pasibaigs. Naudokite **Cancel Import** (Atšaukti importavimą) tik tada, jei norite sustoti procesą prieš pabaigimą.
7. Patikrinkite įvedytą svetainę, prieš leidžiant normaliam trafikui ar klientams prieigai.

Tik vienoje svetainėje kurto WordPress instalacijoje ZIP failas pakeičia dabartinę svetainę importuotu svetaine. Prieš pradėdami, sukurkite visą rezervą (backup) tikslinės svetainės ir vengite pradėti vienu metu kelios importavimo operacijų tą pačia svetaine.

## Apribojimai ir tinkamumo nuostatos

* Labai didelių įkrovimo katalogai ar medijos bibliotekos gali generuoti didelius ZIP failus. Patikrinkite PHP įkrovimo limitus, vykdymo limitus, diskų vietą, RAM ir serverio laiko nustatymus prieš eksportuojant arba importuojant didelius svetainis.*
* Labai didelių medijos bibliotekos gali reikėti pernešti metu su mažais trafikais.
* Tikslinė WordPress instancija turi veikti su sudergiamais WordPress, PHP, Ultimate Multisite, plugino ir temo versijomis.*
* Vienos svetainės importas pakeičia tikslinę svetainę. Tai nėra jungimo įrankis (merge tool).*
* Multisite-to-single-site ir single-site-to-multisite permaišimai palaikomi tik tada, kai tikslinė aplinka gali veikti eksportuoto svetainės pluginus, temus, URL adresus ir reikalingus Ultimate Multisite komponentus.*
* Laikykite ZIP failą privaizu. Jis gali turėti duomenų bazos turinį, įkrovytus failus ir konfigūracijos detalus eksportuoto svetainės išvadyklėms.*

* Visi senesni tinklo laiko eksportavimo procesai nurodomi [Site Export](/user-guide/administration/site-export).*
