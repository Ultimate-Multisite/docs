---
title: Razumevanje dashboard-a
sidebar_position: 7
_i18n_hash: 4869a2f03eb529c49c821a22eb6b9647
---
# Razumevanje Ultimate Multisite Dashboard-a

Pre nego što se duboko uđemo u naprednije opcije konfiguracije i operativne aspekte Ultimate Multisite, pogledajmo dashboard.

Kao i mnogi WordPress pluginovi, Ultimate Multisite kreira stavku menija na nivou mreže pod nazivom **Ultimate Multisite** sa nizom podmenija ispod nje.

## Widget-i za Mrežno Dashboard {#network-dashboard-widgets}

Ultimate Multisite ubacuje nekoliko korisnih widget-a u dashboard na nivou mreže. Ovaj dashboard se nalazi navigacijom do **My Sites → Network Admin → Dashboard**. Widget-i su dizajnirani da pruže lak pristup informacijama i zajedničkim operacijama za administrator mreže.

![Network Dashboard with Ultimate Multisite widgets](/img/admin/network-dashboard-full.png)

### Prvi Koraci {#first-steps}

![First Steps widget](/img/admin/network-dashboard-first-steps.png)

Ovaj widget se pojavljuje na novoj instalaciji Ultimate Multisite i podseća administrator mreže da završi dodatne zadatke kao što su konfigurisanje načina plaćanja i kreiranje testnog naloga.

### Sažetak {#summary}

![Summary widget](/img/admin/network-dashboard-summary.png)

Widget sažetka prikazuje broj prijava i njihovu dohodak za dan. MRR (Monthly Recurring Revenue, mesečni ponavljajući prihod) pokazuje predviđeni ukupan iznos kod kupaca sa plaćajućim članstvom.

### Tok aktivnosti {#activity-stream}

![Activity Stream widget](/img/admin/network-dashboard-activity-stream.png)

Ovaj widget prikazuje događaje unutar Ultimate Multisite. Događaji uključuju prijave, otkazivanja, kreiranje sajtova, brisanje i druge aktivnosti.

Za više detaljnih opisa molimo vas da se obratite sekciji Events u dokumentaciji.

### Sada {#right-now}

![Right Now widget](/img/admin/network-dashboard-right-now.png)

Ovaj utilitarni widget prikazuje kratak sažetak korisnika i sajtova u mreži. Brze šorte na vrhu omogućavaju jednoklik pristup kreiranju novih sajtova ili korisnika.

### Vestine i Diskusije {#news-and-discussions}

![Widget za vesti i diskusije](/img/admin/network-dashboard-news.png)

Ovaj widget dohvaća i prikazuje najnovije vesti Ultimate Multisite. Pratite ovaj widget za informacije o ažuriranjima, kritičnim greškama i sigurnosnim popravkama.

## Ultimate Multisite Dashboard {#ultimate-multisite-dashboard}

Dok je dashboard na nivou mreže predstavljanje holističkih informacija o mreži, Ultimate Multisite dashboard (koji se nalazi na vrhu menija Ultimate Multisite) prikazuje informacije o servisu.

![Ultimate Multisite Dashboard](/img/admin/um-dashboard-top.png)

### Rast mesečne ponovne prihode (MRR) {#monthly-recurring-revenue-growth}

Grafikon MRR (Monthly Recurring Revenue) prikazuje mesečni raspored prihoda tokom 12-mesečnog kalendarskog perioda.

![Grafikon rasta MRR](/img/admin/um-dashboard-mrr.png)

Nova prihodna sredstva se prati u plavoj boji, dok se otkazivanja prikazuju u crvenoj.

### Podrška opsegom datuma {#date-range-support}

Zavisno od broja kupaca i aktivnosti, statistike mogu postati previše. Podrška opsegom datuma koja je ugrađena u dashboard omogućava administratoru mreže da se fokusira samo na informacije i vremenski period koji su mu potrebni.

![Odabir opsega datuma i statistika](/img/admin/um-dashboard-date-range.png)

Opseg datuma određuje period informacija koje prikazuju widgeti odmah ispod, uključujući prihode, nove članstva, prijave po zemlji, prijave putem forme i najposećenije sajtove.

![Statistički widgetovi na dashboardu](/img/admin/um-dashboard-stats.png)

:::tip
Da bi **Most Visatog Sajtova** widget radio, omogućite brojanje poseta u **Ultimate Multisite → Settings → Sites → Enable Visits Limitation and Counting**.
:::
