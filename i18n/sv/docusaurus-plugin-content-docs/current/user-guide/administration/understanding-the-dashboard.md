---
title: Förstå instrumentpanelen
sidebar_position: 7
_i18n_hash: 4869a2f03eb529c49c821a22eb6b9647
---
# Förstå Ultimate Multisite-panelen

Innan vi fördjupar oss i mer avancerade konfigurationsalternativ och de operativa aspekterna av Ultimate Multisite, låt oss ta en titt på panelen.

Precis som många WordPress-tillägg skapar Ultimate Multisite en menypost på nätverksnivå med titeln **Ultimate Multisite** med ett antal undermenyalternativ.

## Widgetar i nätverkspanelen

Ultimate Multisite lägger till några användbara widgetar i panelen på nätverksnivå. Denna panel hittar du genom att navigera till **Mina webbplatser → Nätverksadmin → Panel**. Widgetarna är utformade för att ge enkel åtkomst till information och vanliga åtgärder för nätverksadministratören.

![Nätverkspanelen med Ultimate Multisite-widgetar](/img/admin/network-dashboard-full.png)

### Kom igång

![Kom igång-widget](/img/admin/network-dashboard-first-steps.png)

Denna widget visas vid en ny installation av Ultimate Multisite och påminner nätverksadministratören om att slutföra ytterligare uppgifter som att konfigurera en betalningsmetod och skapa ett testkonto.

### Sammanfattning

![Sammanfattningswidget](/img/admin/network-dashboard-summary.png)

Sammanfattningswidgeten visar antal registreringar och deras intäkter för dagen. MRR (månatliga återkommande intäkter) anger en uppskattad totalsumma för kunder med intäktsgenererande medlemskap.

### Aktivitetsflöde

![Aktivitetsflödeswidget](/img/admin/network-dashboard-activity-stream.png)

Denna widget rapporterar händelser i hela Ultimate Multisite. Händelser inkluderar registreringar, avslut, webbplatsskapande, borttagningar och andra aktiviteter.

Se avsnittet Händelser i dokumentationen för en mer detaljerad beskrivning.

### Just nu

![Just nu-widget](/img/admin/network-dashboard-right-now.png)

Denna praktiska widget visar en kort sammanfattning av användare och webbplatser i nätverket. Smidiga genvägar högst upp ger ettklicksåtkomst för att skapa nya webbplatser eller användare.

### Nyheter och diskussioner

![Nyheter och diskussioner-widget](/img/admin/network-dashboard-news.png)

Denna widget hämtar och visar de senaste nyheterna om Ultimate Multisite. Håll ett öga på denna widget för information om uppdateringar, kritiska buggar och säkerhetskorrigeringar.

## Ultimate Multisite-panelen

Medan panelen på nätverksnivå presenterar övergripande information om nätverket, visar Ultimate Multisite-panelen (som finns på översta nivån i Ultimate Multisite-menyn) information om tjänsten.

![Ultimate Multisite-panelen](/img/admin/um-dashboard-top.png)

### Tillväxt av månatliga återkommande intäkter

MRR-diagrammet (månatliga återkommande intäkter) visar en månadsvis uppdelning av intäkter över en 12-månaders kalenderperiod.

![MRR-tillväxtdiagram](/img/admin/um-dashboard-mrr.png)

Nya intäkter visas i blått medan avslut visas i rött.

### Stöd för datumintervall

Beroende på antalet kunder och aktivitet kan statistiken bli överväldigande. Det inbyggda stödet för datumintervall i panelen gör att nätverksadministratören kan fokusera på endast den information och tidsperiod som behövs.

![Datumintervallväljare och statistik](/img/admin/um-dashboard-date-range.png)

Datumintervallet styr perioden för informationen som visas i widgetarna direkt nedanför, inklusive intäkter, nya medlemskap, registreringar per land, registreringar per formulär och mest besökta webbplatser.

![Widgetar för panelstatistik](/img/admin/um-dashboard-stats.png)

:::tip
För att få widgeten **Mest besökta webbplatser** att fungera, aktivera besöksräkning under **Ultimate Multisite → Inställningar → Webbplatser → Aktivera besöksbegränsning och -räkning**.
:::
