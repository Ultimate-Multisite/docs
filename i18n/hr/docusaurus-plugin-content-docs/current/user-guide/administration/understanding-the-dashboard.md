---
title: Razumijevanje panela
sidebar_position: 7
_i18n_hash: 4869a2f03eb529c49c821a22eb6b9647
---
# Razumijevanje Ultimate Multisite Dashboarda

Prije što se duboko uđemo u naprednije opcije konfiguracije i operativne aspekte Ultimate Multisite, pogledajmo dashboard.

Kao i mnogi WordPress pluginovi, Ultimate Multisite kreira stavku u navigaciji na razini mreže pod nazivom **Ultimate Multisite** s nizom podmenija ispod nje.

## Widget-i za Mrežni Dashboard

Ultimate Multisite ubacuje nekoliko korisnih widget-a u mrežni dashboard. Ovaj dashboard se nalazi navigiranjem na **Moja Svoj Sajtova → Mrežni Admin → Dashboard**. Widget-i su dizajnirani da pruže jednostavan pristup informacijama i čestim operacijama za administrator mreže.

![Mrežni Dashboard s Ultimate Multisite widget-ovima](/img/admin/network-dashboard-full.png)

### Prvi Koraci

![Widget Prvi Koraci](/img/admin/network-dashboard-first-steps.png)

Ovaj widget se pojavljuje na novoj instalaciji Ultimate Multisite i podsjeća administrator mreže da završi dodatne zadatke, kao što je konfiguriranje načina plaćanja i kreiranje testnog računa.

### Sažetak

![Widget Sažetak](/img/admin/network-dashboard-summary.png)

Widget Sažetak izvještava o broju prijava i njihovom prihodu za dan. MRR (Monthly Recurring Revenue, mjesečni ponavljajući prihod) označava projektirani ukupan prihod svih korisnika s plaćene članarine koja generira prihode.

### Aktivni Tok

![Widget Aktivni Tok](/img/admin/network-dashboard-activity-stream.png)

Ovaj widget izvještava o događajima unutar Ultimate Multisite. Događaji uključuju prijave, otkazivanja, kreiranje i brisanje sajtova te druge aktivnosti.

Za više detaljnih opisa, molimo vas da se obratite sekciji Događaji u dokumentaciji.

### Sada

![Widget Sada](/img/admin/network-dashboard-right-now.png)

Ovaj korisnički widget prikazuje kratki pregled korisnika i stranica u mreži. Brze skraće na vrhu omogućuju klikom na jednu akciju kreiranje novih stranica ili korisnika.

### Vijesti i Diskusije

![Widget za vijesti i diskusije](/img/admin/network-dashboard-news.png)

Ovaj widget dohvaća i prikazuje najnovije vijesti Ultimate Multisite. Pratite ovaj widget kako biste dobili informacije o ažuriranjima, kritičnim greškama i sigurnosnim popravcima.

## Ultimate Multisite Dashboard

Dok je dashboard na razini mreže predstavljanje sveobuhvatnih informacija o mreži, Ultimate Multisite dashboard (koji se nalazi na vrhu Ultimate Multisite menija) prikazuje informacije o usluzi.

![Ultimate Multisite Dashboard](/img/admin/um-dashboard-top.png)

### Rast mjesečne ponovljive prihode (Monthly Recurring Revenue - MRR)

Grafikon MRR prikazuje mjesečni raspored prihoda tijekom 12-mjesečnog kalendarskog razdoblja.

![Grafikon rasta MRR](/img/admin/um-dashboard-mrr.png)

Nova prihodi se pra slave u plavoj boji, dok se otkazivanja prikazuju u crvenoj.

### Podrška rasponom datuma

Ovisno o broju kupaca i aktivnosti, statistike mogu postati preopterećuju. Podrška rasponom datuma koja je ugrađena u dashboard omogućuje administratoru mreže da se fokusira samo na informacije i vremenski period koji su mu potrebni.

![Odabir raspona datuma i statistika](/img/admin/um-dashboard-date-range.png)

Raspon datuma određuje razdoblje informacija koje prikazuju widgeti odmah ispod, uključujući prihode, nove članstva, prijave po zemlji, prijave putem forme i najposećenije stranice.

![Statistički widgetovi na dashboardu](/img/admin/um-dashboard-stats.png)

:::tip
Da bi **Most Visatene Stranice** widget radio, omogućite brojanje posjeta u **Ultimate Multisite → Postavke → Stranice → Omogućite ograničenje i brojanje posjeta**.
:::
