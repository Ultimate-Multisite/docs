---
title: Kontakt formuláre budov webových stránok
sidebar_position: 22
_i18n_hash: b8d4d2003a8946f4184ca72fd9529d35
---
# Kontaktformulá na budovateľom stránky

Superdav AI Agent v1.10.0 pridáva možnosť vytvárať kontaktné formulá priamo z chatu pomocou agenta Site Builder. To vám umožňuje pridať plne funkčné kontaktné formulá na akýkoľvek stránku bez toho, aby ste opustili chat.

## Prehľad

Možnosť vytvárať kontaktné formulá v rámci Site Builder (`create_contact_form`) automaticky detekuje váš nainštalovaný plugin a vytvára kontaktné formy pomocou jeho natívnych funkcií. Podporované formulárne pluginy zahŕňajú:

- Contact Form 7
- WPForms
- Fluent Forms
- Gravity Forms

Asistent automaticky vyberie najlepšie dostupný formulárny plugin na vašej stránke a vytvorí kontaktné formy prispôsobené tom pluginu.

## Vytvorenie kontaktného formulára

Aby ste vytvorili kontaktný formulár pomocou Site Builder:

1. Otvorte chatovú panely **Gratis AI Agent** v admin panel WordPressu.
2. Prejsť na agent **Site Builder**, kliknutím na ikonu agenta v hlavičke chatu.
3. Popíšte kontaktný formulár, ktorý chcete vytvoriť. Napríklad:

   > "Pridaj kontaktný formulár na stránku Kontakt s polmi pre meno, e-mail, správu a telefónne číslo."

   Alebo jednoducho:

   > "Vytvorte kontaktný formulár pre stránku Kontakt."

4. Site Builder vytvorí kontaktný formulár a vráti krátky kód (shortcode) pripravený na zobrazenie.

## Používanie generovaného kódu

Po tom, čo Site Builder vytvorí kontaktný formulár, vráti krátky kód (napríklad `[contact-form-7 id="123"]`). Môžete:

1. **Vložiť ho do stránky alebo príspevku** — Skopírujte krátky kód a vložte ho do akékoľvek stránky alebo príspevku pomocou block editora alebo klasického editora.
2. **Pridať ho pomocou Site Builderu** — Požiadajte Site Builder, aby formulár automaticky pridal na konkrétnu stránku:

   > "Pridaj kontaktný formulár na stránku Kontakt."

3. **Použite ho v šablone** — Ak ste si s PHP môžete kompromisovať, môžete krátky kód (shortcode) pridať do šablony temy.

## Prispôsobenie kontaktného formulára

Po tom, čo Site Builder vytvorí kontaktný formulár, ho môžete ďalej prispôsobiť:

### Via chat rozhrania

Pýtajte sa Site Buildera, aby upravil formulár:

> "Aktualizujte kontaktný formulár, aby obsahoval pole predmet a urobili pole s 메시ážou povinným."

Site Builder aktualizuje formulár a vráti aktualizovaný krátky kód.

### Via admin rozhrania pluginu formulára

Môžete ho tiež prispôsobiť priamo v nastaveniach svojho pluginu formulára:

1. Prejdite do **Contact Form 7** (alebo vášho nainštalovaného pluginu formulára) v WordPress admin.
2. Nájdite formulár vytvorený Site Builderom.
3. Upravte pole formulára, pravidlá validácie a e-mailové upozornenia podľa potreby.

## Plugin formulárov a kompatibilita

Site Builder automaticky detekuje, ktorý plugin formulára je nainštalovaný na vašej sieti, a používa ho na vytvorenie kontaktného formulára. Ak je nainštalované viacero pluginov formulárov, Site Builder ich v nasledovnom poradí prioritizuje:

1. Contact Form 7
2. WPForms
3. Fluent Forms
4. Gravity Forms

Ak žiadny z týchto pluginov nie je nainštalovaný, Site Builder odporúča nainštalovať jeden pred vytvorením kontaktného formulára.

## E-mailové upozornenia

Kontaktné formuláre vytvorené Site Builderom sú štandardne skonfigurované na zaslanie e-mailových upozornení správceniu siete. Môžete prispôsobiť adresú na odoslanie a text upozornenia:

1. Prejdite do admin rozhrania svojho pluginu formulára.
2. Nájdite formulár vytvorený Site Builderom.
3. Upravte nastavenia e-mailového upozornenia.

Pre podrobné pokyny si pozrite dokumentáciu vášho pluginu formulára:

- [E-mail notifikácie Contact Form 7](https://contactform7.com/docs/)
- [E-mail notifikácie WPForms](https://wpforms.com/docs/)
- [E-mail notifikácie Fluent Forms](https://fluentforms.com/docs/)
- [E-mail notifikácie Gravity Forms](https://docs.gravityforms.com/)

## Príklady použitia

### Jednoduchý kontaktný formulár

> "Vytvorte jednoduchý kontaktný formulár s polmi pre meno, e-mail a správu."

### Formulár so viacstupom

> "Vytvorte kontaktný formulár s prvým stupňom pre informácie o kontakte a druhým stupňom pre správu a preferovanú metódu kontaktu."

### Formulár s podmiennou logikou

> "Vytvorte kontaktný formulár, ktorý zobrazuje rôzne polia v závislosti od výberu používateľa z rozbaľovacieho menu."

### Formulár s načítaním súborov

> "Vytvorte kontaktný formulár, ktorý umožňuje používateľom nahrať súbor alebo príponu."

:::note
Vytváranie kontaktných formulárov je možné v Superdav AI Agent verzii 1.10.0 a vyššej. Aby ste mohli túto funkciu použiť, musí byť aktivny agent Site Builder.
:::
