---
title: Palaikymo užklausų pakeitimų žurnalas
sidebar_position: 99
_i18n_hash: 4ef7d3adaed4523e799ec78da9843a3d
---
# Pagalbos užklausų pakeitimų žurnalas {#support-tickets-changelog}

### 1.0.4 - 2026-05-05 {#104---2026-05-05}
* Patobulinta: Pašalintas vendor/ katalogas iš Git sekimo (jau įtrauktas į .gitignore), sumažinant saugyklos dydį
* Patobulinta: Išbandyta iki WordPress 7.0

### 1.0.3 - 2026-05-01 {#103---2026-05-01}
* Pataisyta: Priimamos null reikšmės nullable užklausos modelio setteriuose
* Pataisyta: Visos užklausos saugomos globaliose viso tinklo lentelėse, kad būtų užtikrintas tinkamas multisite palaikymas
* Pataisyta: Paslėpti personalo laukai ir pataisytas nukreipimas į tuščią puslapį kliento naujos užklausos formoje
* Pataisyta: Neapibrėžti add_meta() iškvietimai pakeisti teisingu update_meta() metaduomenų saugojimui
* Pataisyta: Neregistruotas galimybės patikrinimas pakeistas teisingu wu_view_all_support_tickets
* Pataisyta: Pridėti trūkstami AJAX tvarkytojai užklausos būsenos, priskyrimo ir greitojo redagavimo veiksmams
* Pataisyta: Pataisytas metodo pavadinimas personalo atsakymo aptikimui užklausų rodiniuose
* Pataisyta: Sujungti pasikartojantys atsakymų tvarkytojai ir suderinti nonce veiksmų pavadinimai
* Pataisyta: Pridėtas trūkstamas frontend rodinys [wu_submit_ticket] shortcode
* Pataisyta: Pridėtas trūkstamas user_id stulpelis ir pataisytas Support_Ticket::get_user_id() metodas
* Pataisyta: Pašalinta papildoma dviguba kabutė prioriteto filtro parinkties žymoje
* Pataisyta: Pridėtas tinklo administratoriaus užklausų valdymo skydelis super administratoriams
* Patobulinta: Administratoriaus CSS sujungtas į vieną išorinį stilių failą
* Patobulinta: Pašalintas Settings submeniu iš subsite administratoriaus meniu
* Patobulinta: Frontend ištekliai sąlygiškai įkeliami tik pagalbos užklausų puslapiuose
* Patobulinta: Praleidžiamas plugin autoloader, kai Bedrock šakninis autoloader jau įkėlė priklausomybes

### 1.0.2 - 2025-12-11 {#102---2025-12-11}
* Pridėta: Visa užklausų peržiūros funkcija administratoriui ir frontend
* Pridėta: AJAX tvarkytojas užklausų atsakymų pateikimui
* Pridėta: Užklausų atsakymų funkcijos palaikymas su tinkamu formos apdorojimu
* Pridėta: Tinkamas pranešimų rodymas užklausų pateikimams ir atsakymams administratoriaus dalyje
* Pridėta: Automatinis užklausos susiejimas su dabartiniu naudotoju kliento savarankiškiems pateikimams
* Pridėta: Saugumo patobulinimas, neleidžiantis klientams perrašyti užklausos nuosavybės
* Pridėta: Trūkstamos pagalbinės funkcijos (wu_format_date, wu_user_can_view_ticket ir kt.)
* Pridėta: Tinkamas failų priedų atsisiuntimas ir tvarkymas
* Pridėta: El. pašto pranešimų sistema užklausų atsakymams ir būsenos pakeitimams
* Pataisyta: Užklausos atsakymo forma dabar apima būtiną užklausos ID
* Pataisyta: Pranešimų matomumo problemos administratoriaus užklausų rodiniuose
* Pataisyta: Sintaksės klaidos pagalbos užklausų funkcijose
* Patobulinta: Duomenų bazės struktūra su tinkamomis užklausų ir schemų klasėmis atsakymams ir priedams
* Patobulinta: Užklausų modeliuose pereita prie realių savybių vietoj atributų

### 1.0.1 - 2025-09-28 {#101---2025-09-28}
* Atnaujinta: Prefiksas pervadintas į ultimate-multisite dėl nuoseklumo
* Atnaujinta: Teksto domeno standartizavimas
* Pataisyta: Smulkūs klaidų pataisymai ir patobulinimai

### 1.0.0 - 2025-09-01 {#100---2025-09-01}
* Pradinis leidimas
* Pilna užklausų valdymo sistema
* Kelių lygių prieigos kontrolė
* Gijų pokalbių sistema
* Failų priedų palaikymas
* El. pašto pranešimų sistema
* Administratoriaus ir klientų sąsajos
* Statistika ir ataskaitos
