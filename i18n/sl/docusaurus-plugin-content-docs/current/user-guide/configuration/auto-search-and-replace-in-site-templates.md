---
title: Avtomatizirano iskanje in zamenjava v predloških spletnih strani
sidebar_position: 8
_i18n_hash: 0842f53505d24579010d91568e06ef68
---
# Avtomatizirano iskanje in zamenjava v šabloni spletnih strani (v2) {#auto-search-and-replace-in-site-templates-v2}

_**Ta tutorial zahteva WP Uitimo verzijo 2.x.**_

E ena močnejših funkcij Ultimate Multisite je možnost dodajanja proizvoljnega besedila, barv in izbirnih polj na registracijski obrazec. Ko imamo ta podatke pridobljene, lahko uporabimo jih za predpopolnjenje vsebine v določenih delih izbranega šablona spletne strani. Nato, ko je nova stran objavljena, Ultimate Multisite zamenja mesta-zadržanje (placeholders) z dejanskimi informacijami, ki so vnosile pri registraciji.

Na primer lahko ustvarjate svoje šablone spletnih strani s mesti-zadržanjem. Mesta-zadržanje morajo biti obvrščena dvokrili curly brace - {{placeholder_name}}.

Potem lahko preprosto dodate odgovarjajoče polje za registracijo, ki bo to podatke pridobilo.

Vaš kupce bodo nato imeli možnost to polje vpisati med registracijo.

Ultimate Multisite pa se potem sam avtomatsko zamenja mesta-zadržanje z pododobitvami, ki jih je prinesel kupce.

## **Reševanje problema "šablon poln mestih-zadržanj"** {#solving-the-template-full-of-placeholders-problem}

Vse to je super, vendar imamo neugodo: našim šablonim spletnim stranem - ki jih lahko obiščejo naši kupci - so popolnoma polni z neugodnimi mesta-zadržanj, ki ne povejo veliko.

Da bi to rešili, ponujamo možnost nastavitve lažnih vrednosti za mesta-zadržanje in te vrednosti uporabljamo za iskanje in zamenjavo njihovih vsebin na šablonih spletnih strani med obiskami vaših kupcev.

Lahko boste dostopali do editorja mestih-zadržanj, če grete na **Ultimate Multisite > Settings > Sites**, prehodite do območja Site Template Options in nato kliknite na povezavo **Edit Placeholders**.

![Območje Site Template Options v strani nastavitve Sites](/img/config/settings-sites-templates-section.png)

To vas bo peljalo do editorja vsebine mestih-zadržanj, kjer lahko dodate mesta-zadržanje in njihove odgovarjajoče vsebine.

![Template placeholders editor entry point](/img/config/settings-sites-templates-section.png)
