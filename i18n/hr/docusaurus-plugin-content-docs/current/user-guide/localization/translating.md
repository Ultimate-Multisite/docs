---
title: Prevod Ultimate Multisite
sidebar_position: 19
_i18n_hash: a433d81386db16579adeb9a60f6af240
---
# Prevod Ultimate Multisite

Ultimate Multisite je razvijen na engleskom jeziku, ali plugin je potpuno prevodljiv i aktivno pozivamo doprinose prijevima.

## Prevo Ultimate Core Plugin-a {#core-plugin-translations}

Core Ultimate Multisite plugin se prevodi putem službene **platforme za prijevod WordPress.org**:

**[translate.wordpress.org/projects/wp-plugins/ultimate-multisite/](https://translate.wordpress.org/projects/wp-plugins/ultimate-multisite/)**

Ovo je standardni sustav za prijevima u zajednici WordPressa. Kada se prevodi do dovoljno visokog praga odobrenja, automatski se distribuiraju svim Ultimate Multisite korisnicima putem ažuriranja pluginova WordPressa.

**Potrebna nam je pomoć!** Ako govorite jezik koji nije engleski, molimo vas da razmislite o doprinosu prijevima. Čak i prijevod nekoliko tekstova pomaže. Za početak:

1. Posjetite [translate.wordpress.org](https://translate.wordpress.org/projects/wp-plugins/ultimate-multisite/)
2. Odaberite svoj jezik
3. Kliknite na "Contribute Translation" (Doprijavi prijevod)
4. Potrebno vam je besplatan račun na WordPress.org

Ako želite postati urednik prijevovnih tekstova za svoj jezik (koji može odobriti prevode), obratite se putem [GitHub Discussions](https://github.com/Ultimate-Multisite/ultimate-multisite/discussions).

## Prevo Addon Pluginova {#addon-translations}

Addon pluginovi se prevode zasebno na:

**[translate.ultimatemultisite.com](https://translate.ultimatemultisite.com/)**

Prevo addon pluginova trenutno generiraju AI kao početnu točku. Oni pokrivaju sve podržane jezike, ali mogu sadržavati neobične fraze ili pogreške u preciznosti. Dobro bismo primili ljudske prevodnike da ih pregledaju i predlažu poboljšanja kako bi postali prirodniji i točniji.

## Lokalni Prevo {#local-translations}

Ako preferirate da napravite prevode lokalno za svoj projekat umjesto da doprinijivate upstream projektu, postoje dvije opcije:

### Korištenje Poedita (Poedit) {#using-poedit}

Možete koristiti desktop aplikaciju **[Poedit](https://poedit.net)** za prevođenje `.pot` datoteke:

1. Preuzmite Poedit s [poedit.net](https://poedit.net)
2. Otvorite `.pot` datoteku iz `wp-content/plugins/ultimate-multisite/lang/`
3. Prevedite tekst (stringove) u interfejsu Poedita
4. Sačuvajte -- Poedit će generirati `.po` i `.mo` datoteke
5. Postavite izlazne datoteke u `lang` folder

### Korištenje Loco Translate {#using-loco-translate}

WordPress plugin **[Loco Translate](https://wordpress.org/plugins/loco-translate/)** omogućuje vam da prevodite direktno iz admin panela bez potrebe za desktop alatima. On će se pobrinuti o kreiranju i kompilaciji datoteka za prijevod za vas.
