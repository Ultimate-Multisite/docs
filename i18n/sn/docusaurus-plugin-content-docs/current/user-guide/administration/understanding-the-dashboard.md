---
title: Kutendera Dashboard
sidebar_position: 7
_i18n_hash: 4869a2f03eb529c49c821a22eb6b9647
---
# Kuona Dashboard ya Ultimate Multisite {#understanding-the-ultimate-multisite-dashboard}

Pasiwe kupata msisimko mkubwa katika chaguzi za ziada za kukazi na vipengele vya utendaji wa Ultimate Multisite, acha tu tuchungue dashboard.

Kama vile plugin nyingi za WordPress, Ultimate Multisite inatengeneza entry ya menyu ya kiwanda (network-level menu entry) inayoitwa **Ultimate Multisite** na idadi ya entries za menyu chini yake.

## Widgets za Dashboard ya Mtandao (Network Dashboard Widgets) {#network-dashboard-widgets}

Ultimate Multisite inachangia widgets kadhaa muhimu kwenye dashboard ya mtandao. Dashboard hii inapatikana kwa kwenda **My Sites → Network Admin → Dashboard**. Widgets hizo zimeundwa kutoa upatikanaji rahisi wa habari na shughuli za kawaida kwa msimamizi wa mtandao (network administrator).

![Network Dashboard with Ultimate Multisite widgets](/img/admin/network-dashboard-full.png)

### Hatua za Kwanza (First Steps) {#first-steps}

![First Steps widget](/img/admin/network-dashboard-first-steps.png)

Widget hii inajitokeza kwenye usakinishaji mpya wa Ultimate Multisite na inakumbusha msimamizi wa mtandao kukamilisha kazi nyingine kama vile kuweka njia ya malipo (configuring a payment method) na kuunda akaunti ya majaribio (creating a test account).

### Muhtasari (Summary) {#summary}

![Summary widget](/img/admin/network-dashboard-summary.png)

Widget ya Muhtasari inatoa taarifa kuhusu idadi ya watu waliosajiliwa na mapato yao kwa siku. MRR (Monthly Recurring Revenue) inaonyesha jumla iliyotarajiwa kwa wateja wenye usajili wa mauzo (revenue-generating memberships).

### Mtiririko wa Shughuli (Activity Stream) {#activity-stream}

![Activity Stream widget](/img/admin/network-dashboard-activity-stream.png)

Widget hii inatoa taarifa kuhusu matukio yote yanayotokea kwenye Ultimate Multisite. Matukio hayajumuishi usajili, kufutwa kwa akaunti (cancellations), kuunda tovuti mpya (site creations), kufuta tovuti, na shughuli nyingine.

Tafadhali zingatia sehemu ya Events katika hati ili kupata maelezo zaidi.

### Sasa (Right Now) {#right-now}

![Right Now widget](/img/admin/network-dashboard-right-now.png)

Iwidget iyi inshoko inochinjika pfungwa dza nguva dzinotsvaga nevanhu uye sites mumapuro. Mazuva anonyanya kune kupfunctiona mupfumo, kunoita kuti uone kuratidza sites dzine kudzokera nevanhu vese.

### News and Discussions {#news-and-discussions}

![News and Discussions widget](/img/admin/network-dashboard-news.png)

Iwidget iyi inotshaga uye inoratidza zvinhu zvinotamba kwemutauro weUltimate Multisite. Ramba unozviona iwidget iyi kuti uone zvinhu zvinotamba, matambudziko ekuti zviri kuitika, nekuendesa zvinhapi zvekuonekwa (security fixes).

## Ultimate Multisite Dashboard {#ultimate-multisite-dashboard}

Pamapuro anonyanya kune maitemu ekunzwisisa pamapuro, Ultimate Multisite dashboard (inowanikidza pakati pemenu yaUltimate Multisite) inoratidza zvinhapi zvinotamba nezvemhodi yezvinhapi.

![Ultimate Multisite Dashboard](/img/admin/um-dashboard-top.png)

### Monthly Recurring Revenue Growth {#monthly-recurring-revenue-growth}

Chart yeMRR (Monthly Recurring Revenue) inoratidza kupfuma kwezviriyo zvenhu pamwe chete pfungwa dzinotsvaga dzinowanikidza kune mweya wekuti munhu anogona kuita.

![MRR Growth chart](/img/admin/um-dashboard-mrr.png)

Zviriyo dzine kuratidza zvinotamba (new revenue) dziri kubva mumweya wekuti zviri kune mabwe, uye zvisina kuratidza (cancellations) dzinoratidzorwa nekuratidza kwakare.

### Date-range Support {#date-range-support}

Kuti zvinhapi zvinotamba zvakawanda nezvinhapi zvakawanda zvevanhu nekugadzirisa, kunzwisisa kwekuita date-range (date-range support) inoshandiswa mupfumo inowanikidza inozovalira administrator wepuro kuti anogone kuona zvinhapi uye pfungwa dzinotsvaga zvinodzidzwa.

![Date range selector and stats](/img/admin/um-dashboard-date-range.png)

Date-range inogona kuita kupfuma pehodi inoratidzorwa newidget dzakachena, zvichisinga pfungwa dzinhu, zviriyo dzine kuratidza zvinotamba (revenue), vanhu vatsvaga nekuita chinhu chinobva, vanhu vatsvaga nechina, uye sites dzine kuonekwa kwakawanda.

![Dashboard statistics widgets](/img/admin/um-dashboard-stats.png)

:::tip
Kuti iwidget ye**Most Visited Sites** inofungire, ndichida kuti uonese visit counting (kuratidza kunjasha) mu**Ultimate Multisite → Settings → Sites → Enable Visits Limitation and Counting**.
:::
