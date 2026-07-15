---
title: Pagrindinio skelbimų supratimas
sidebar_position: 7
_i18n_hash: 4869a2f03eb529c49c821a22eb6b9647
---
# Ultimate Multisite Dashboard-o suprantandymas

Mažai požiūrėkime į dashboardą, prieš šiek tiek derinant daugiau naujų konfigūracijos jūsų Ultimate Multisite ir jos veikimo aspektų.

Kaip ir daugeliui WordPress pluginams, Ultimate Multisite sukuria meniu įrašą lygio tinklo (network-level menu entry) pavadinimu **Ultimate Multisite**, kurį apima kelias submeniu įrašus.

## Tinklo dashboardo widgetai {#network-dashboard-widgets}

Ultimate Multisite įdiegia kelis naudingus widgetus į tinklo lygio dashboardą. Šį dashboardą galima rasti eiti į **My Sites → Network Admin → Dashboard**. Widgetai skirti suteikti lengvų prieigos informacijai ir bendrim veiksmams tinklo administratorui.

![Network Dashboard with Ultimate Multisite widgets](/img/admin/network-dashboard-full.png)

### Pirmoji veikla {#first-steps}

![First Steps widget](/img/admin/network-dashboard-first-steps.png)

Šis widget pasirodys naujame Ultimate Multisite įdiegimo ir primins tinklo administratorui atlikti papildomus užduotis, pavyzdžiui konfigūruoti mokėjimo metodą ir sukurti testinį paskyrą.

### Apibendrinimas {#summary}

![Summary widget](/img/admin/network-dashboard-summary.png)

Apibendrinimo widgetas praneša apie registracijų skaičių ir jų pasiektos pajamos diena. MRR (Monthly Recurring Revenue) rodo projektuotą visą sumą klientų, turinčių pajamų memberships.

### Aktyvumo sąraštas {#activity-stream}

![Activity Stream widget](/img/admin/network-dashboard-activity-stream.png)

Šis widget praneša apie įvykius tinklo Ultimate Multisite. Įvykiai apima registracijas, atšaukimus, naujų vietų kūrimus, ištrinkimus ir kitas veiksmus.

Daugiau informacijos rasite dokumentacijos „Events“ (Įvykiai) sekcijoje.

### Šiuo metu {#right-now}

![Right Now widget](/img/admin/network-dashboard-right-now.png)

Šis užitamas widget rodo trumpą apibendrinimą apie vartotojus ir svetainius tinklu. Viršuje esantys patogūs trumpai yra leidžia vienu kliku sukurti naujus svetainius ar vartotojus.

### Naujienos ir diskusijos {#news-and-discussions}

![News and Discussions widget](/img/admin/network-dashboard-news.png)

Šis widget pasieka ir rodo naujausią Ultimate Multisite naujienas. Prieš šiučiu žiūrėkite į šį widgetui, kad gautumėte informacijos apie atnaujinimus, kritinius bugus ir saugumo korektūras.

## Ultimate Multisite Dashboard {#ultimate-multisite-dashboard}

Tai, kur tinklo lygio dashboard pateikia visaprobų informaciją apie tinklą, Ultimate Multisite dashboard (eskiant viršutinėje Ultimate Multisite meniu) pateikia informaciją apie paslaugą.

![Ultimate Multisite Dashboard](/img/admin/um-dashboard-top.png)

### Mėnesio atliekimo pajamos augimas (Monthly Recurring Revenue Growth) {#monthly-recurring-revenue-growth}

MRR (Mėnesio atliekimo pajamos) diagrama rodo mėnesio bazę pajamų per 12 mėnesių kalendarinį laikotarpį.

![MRR Growth chart](/img/admin/um-dashboard-mrr.png)

Naujas įsigijimas yra matomas mėlyname, o atšaukimai – spalva raudona.

### Data intervalų palaikymas {#date-range-support}

Nuo pirkėjų skaičiaus ir veiklos statistikos gali tapti perlabdama. Dashboardas įtrauktas data intervalų palaikymas leidžia tinklo administratorui susikraižti dėmesį tik reikalingoms informacijai ir laikotarpiui.

![Date range selector and stats](/img/admin/um-dashboard-date-range.png)

Data intervalas nurodo rodomo informacijos laikotarpį, įskaitant pajamos, naujus bazos nuskaitavimus, registracijas pagal šalį, registracijas pagal formą ir labiausiai apžiūžiamus svetainius.

![Dashboard statistics widgets](/img/admin/um-dashboard-stats.png)

:::tip
Kad **Labiausiai apžiūžiami svetainiai** widget veiktų, paleiskite apsilankymo skaičiavimo (visit counting) nustatymą: **Ultimate Multisite → Settings → Sites → Enable Visits Limitation and Counting**.
:::
