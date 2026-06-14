---
title: Forstå dashboardet
sidebar_position: 7
_i18n_hash: 4869a2f03eb529c49c821a22eb6b9647
---
# Forståelse af Ultimate Multisite Dashboardet

Før vi dykker ned i mere avancerede konfigurationsmuligheder og de operationelle aspekter ved Ultimate Multisite, lad os kigge på dashboardet.

Ligesom mange WordPress plugins opretter Ultimate Multisite en menuindgang på netværksniveau med titlen **Ultimate Multisite** og flere undermenu-indgange nedenunder.

## Network Dashboard Widgets

Ultimate Multisite tilføjer et par nyttige widgets til netværksdashboardet. Dette dashboard finder du ved at navigere til **Mine Sites → Network Admin → Dashboard**. Widgets er designet til at give nem adgang til information og almindelige operationer for netværksadministratoren.

![Network Dashboard with Ultimate Multisite widgets](/img/admin/network-dashboard-full.png)

### Første skridt

![First Steps widget](/img/admin/network-dashboard-first-steps.png)

Dette widget vises ved en frisk installation af Ultimate Multisite og minder netværksadministratoren om at gennemføre yderligere opgaver som at konfigurere en betalingsmetode og oprette en testkonto.

### Oversigt

![Summary widget](/img/admin/network-dashboard-summary.png)

Oversigtswidgetet rapporterer om antal registreringer og deres omsætning for dagen. MRR (Monthly Recurring Revenue – månedlig gentagende omsætning) angiver den forventede samlede værdi på tværs af kunder med indtægtsgenererende medlemskaber.

### Aktivitetstrøm

![Activity Stream widget](/img/admin/network-dashboard-activity-stream.png)

Dette widget rapporterer om begivenheder i Ultimate Multisite. Begivenhederne inkluderer registreringer, afmeldinger, oprettelse og sletning af sider samt andre aktiviteter.

Se dokumentationens Events sektion for en mere detaljeret beskrivelse.

### Nu

![Right Now widget](/img/admin/network-dashboard-right-now.png)

Dette utility widget viser en kort oversigt over brugere og sider i netværket. Smarte genveje øverst giver dig mulighed for hurtigt at oprette nye sider eller brugere med ét klik.

### Nyheder og diskussioner

![News and Discussions widget](/img/admin/network-dashboard-news.png)

Dette widget henter og viser de seneste nyheder fra Ultimate Multisite. Hold øje med dette widget for information om opdateringer, kritiske fejl og sikkerhedsrettelser.

## Ultimate Multisite Dashboard

Hvor netværksniveauet dashboard præsenterer et helhedsbillede af netværket, præsenterer Ultimate Multisite dashboardet (som findes i toppen af Ultimate Multisite menuen) information om tjenesten.

![Ultimate Multisite Dashboard](/img/admin/um-dashboard-top.png)

### Månedlig gentagen omsætningsvækst (MRR)

MRR (Monthly Recurring Revenue) diagrammet viser en månedlig opdeling af indtægter over en 12-måneders kalenderperiode.

![MRR Growth chart](/img/admin/um-dashboard-mrr.png)

Ny omsætning spores i blå farve, mens annulleringer vises i rød.

### Understøttelse af datointerval

Afhængigt af antallet af kunder og aktivitet kan statistikker blive overvældende. Datointervalunderstøttelsen indbygget i dashboardet giver netværksadministrator mulighed for kun at fokusere på den information og tidsperiode, der er nødvendig.

![Date range selector and stats](/img/admin/um-dashboard-date-range.png)

Datointervallet styrer perioden for de oplysninger, der vises af widgeterne nedenfor, herunder omsætning, nye medlemskaber, tilmelding efter land, tilmelding efter formular og de mest besøgte sider.

![Dashboard statistics widgets](/img/admin/um-dashboard-stats.png)

:::tip
For at få **Mest Besøgte Sider** widget'en til at virke, skal du aktivere besøgsoptælling under **Ultimate Multisite → Indstillinger → Sider → Aktiver begrænsning og optælling af besøg**.
:::
