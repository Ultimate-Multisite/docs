---
title: Automatinis paieška ir keitimas svetainės šablonuose
sidebar_position: 8
_i18n_hash: 0842f53505d24579010d91568e06ef68
---
# Automatinas ir keitimas svetainės šabloonu (v2) {#auto-search-and-replace-in-site-templates-v2}

_**Šis tutorial reikalauja Ultimate Multisite versiją 2.x.**_

Viena iš stipriausiomis savybių Ultimate Multisite yra įgaliojimo pridėti bet kokį tekstą, spalvas ir pasirinkti laukus registracijos formai. Kai turime tą duomenis sugrįsti, galime naudoti juos, kad pre-pildytumėme svetainės šabloono nurodytų dalis. Tada, kai naujas svetainė bus publikuojama, Ultimate Multisite atitiks vietines (placeholders) su tikrai įvesta informacija registracijos metu įvestais duomenimis.

Pavyzdžiui, galite turėti savo šabloonus su vietiniais. Vietiniai turi būti apimti dvipus viršutais – {{placeholder_name}}.

Tada galite paprastai pridėti atitinkamą registracijos lauką, kad sugrįstumėte tą duomenų.

Jūsų klientas tada bus gali užpildyti šį lauką registracijos metu.

Ultimate Multisite tada automatiškai atitiks vietines įvestais duomenimis, pateiktais klientui.

## **Problemos sprendimas „šabloonas pilnas vietiniais“** {#solving-the-template-full-of-placeholders-problem}

Visi tai yra puiku, bet susidaro su nepatogiu problemu: dabar mūsų svetainės šabloonai – kuriuos gali vizinti kiti vartotojai – užpildyti nepatogiai vietiniais, kurie ne du daug informacijos.

Šį problemą sprendžiamas per pasiūlymą nustatyti fiksuotas vertus vietiniams ir naudoti juos, kad ieškote ir keitote jų turinį šabloonu svetainėse, kol jūsų klientai visada vizinima.

Jūs galite pasiekti šabloono vietinių redaktorių per **Ultimate Multisite > Settings > Sites**, ženkant į dalį Site Template Options ir tada paspaudus nuorodą **Edit Placeholders**.

![Site Template Options area in the Sites settings page](/img/config/settings-sites-templates-section.png)

Tai pateiks jus į vietinių turinio redaktorių redaktorių, kur galite pridėti vietinius ir jų atitinkamą turinį.

![Šaltinio šaltiniai rediguojimo taškas](/img/config/settings-sites-templates-section.png)
