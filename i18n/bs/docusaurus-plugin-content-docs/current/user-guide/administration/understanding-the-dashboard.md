---
title: Razumijevanje Kontrolne table
sidebar_position: 7
_i18n_hash: 4869a2f03eb529c49c821a22eb6b9647
---
# Razumijevanje Ultimate Multisite Dashboarda

Prije nego što se upustimo u naprednije opcije konfiguracije i operativne aspekte Ultimate Multisitea, pogledajmo dashboard.

Kao i mnogi WordPress pluginovi, Ultimate Multisite kreira unos menija na nivou mreže pod nazivom **Ultimate Multisite** sa nizom podmenija ispod.

## Widgeti Network Dashboarda

Ultimate Multisite dodaje nekoliko korisnih widgeta na dashboard na nivou mreže. Ovaj dashboard se nalazi navigacijom na **My Sites → Network Admin → Dashboard**. Widgeti su dizajnirani da pružaju jednostavan pristup informacijama i uobičajenim operacijama za administratora mreže.

![Network Dashboard with Ultimate Multisite widgets](/img/admin/network-dashboard-full.png)

### Prvi koraci

![First Steps widget](/img/admin/network-dashboard-first-steps.png)

Ovaj widget se pojavljuje prilikom prvog instaliranja Ultimate Multisitea i podsjeća administratora mreže da završi dodatne zadatke, kao što su konfigurisanje metode plaćanja i kreiranje test naloga.

### Sažetak

![Summary widget](/img/admin/network-dashboard-summary.png)

Widget Sažetak izvještava o broju registracija i njihovim prihodima za dan. MRR (Monthly Recurring Revenue) ukazuje na predviđeni ukupan iznos za sve korisnike koji imaju pretplate koje generišu prihod.

### Aktivni tok

![Activity Stream widget](/img/admin/network-dashboard-activity-stream.png)

Ovaj widget izvještava o događajima širom Ultimate Multisitea. Događaji uključuju registracije, otkazivanje, kreiranje i brisanje sajtova, te druge aktivnosti.

Molimo vas da pogledate sekciju Događaji u dokumentaciji za detaljniji opis.

### Trenutno

![Right Now widget](/img/admin/network-dashboard-right-now.png)

Ovaj utilitarni widget prikazuje kratak sažetak korisnika i sajtova u mreži. Praktični prečice na vrhu omogućavaju pristup jednim klikom za kreiranje novih sajtova ili korisnika.

### Vijesti i diskusije

![News and Discussions widget](/img/admin/network-dashboard-news.png)

Ovaj widget dohvaća i prikazuje najnovije vijesti Ultimate Multisitea. Pratite ovaj widget radi informacija o ažuriranjima, kritičnim greškama i sigurnosnim popravkama.

## Ultimate Multisite Dashboard

Dok dashboard na nivou mreže prikazuje sveobuhvatne informacije o mreži, Ultimate Multisite dashboard (nalazi se na najvišem nivou Ultimate Multisite menija) prikazuje informacije o samoj usluzi.

![Ultimate Multisite Dashboard](/img/admin/um-dashboard-top.png)

### Rast mjesečnog ponavljajućeg prihoda

Grafikon MRR (Monthly Recurring Revenue) prikazuje mjesečni pregled prihoda tokom 12-mjesečnog kalendarskog perioda.

![MRR Growth chart](/img/admin/um-dashboard-mrr.png)

Novi prihodi su praćeni plavom bojom, dok su otkazivanja prikazana crvenom bojom.

### Podrška rasponu datuma

Zavisno od broja korisnika i aktivnosti, statistike mogu postati previše opterećujuće. Podrška rasponu datuma ugrađena u dashboard omogućava administratoru mreže da se fokusira samo na potrebne informacije i vremenski period.

![Date range selector and stats](/img/admin/um-dashboard-date-range.png)

Raspon datuma određuje period informacija koje prikazuju widgeti direktno ispod, uključujući prihode, nove članstva, registracije po zemlji, registracije po obrascu i najposjećivanije sajtove.

![Dashboard statistics widgets](/img/admin/um-dashboard-stats.png)

:::tip
Da bi widget **Najposjećivaniji sajtovi** radio, omogućite brojanje posjeta na **Ultimate Multisite → Settings → Sites → Enable Visits Limitation and Counting**.
:::
