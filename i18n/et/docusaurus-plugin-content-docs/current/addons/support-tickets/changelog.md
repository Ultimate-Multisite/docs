---
title: Tugipiletite muudatuste logi
sidebar_position: 99
_i18n_hash: 4ef7d3adaed4523e799ec78da9843a3d
---
# Support Tickets muudatuste logi

### 1.0.4 - 2026-05-05 {#104---2026-05-05}
* Täiustatud: eemaldati vendor/ kataloog Git jälgimisest (juba kaetud .gitignore poolt), vähendades repositooriumi suurust
* Täiustatud: testitud kuni WordPress 7.0-ni

### 1.0.3 - 2026-05-01 {#103---2026-05-01}
* Parandus: lubatud null-väärtused nullable pileti mudeli setterites
* Parandus: salvestatakse kõik piletid globaalsetesse kogu võrgu tabelitesse korrektse multisite toe jaoks
* Parandus: peidetud personali väljad ja parandatud tühja lehe ümbersuunamine kliendi uue pileti vormil
* Parandus: asendatud määratlemata add_meta() väljakutsed korrektse update_meta() kasutusega metaandmete salvestamiseks
* Parandus: asendatud registreerimata võimekuse kontroll korrektse wu_view_all_support_tickets kontrolliga
* Parandus: lisatud puuduvad AJAX käitlejad pileti oleku, määramise ja kiirmuutmise toimingute jaoks
* Parandus: parandatud meetodi nimi personali vastuse tuvastamiseks piletivaadetes
* Parandus: ühendatud dubleeritud vastusekäitlejad ja ühtlustatud nonce toimingute nimed
* Parandus: lisatud puuduv frontend-vaade [wu_submit_ticket] shortcode jaoks
* Parandus: lisatud puuduv user_id veerg ja parandatud Support_Ticket::get_user_id() meetod
* Parandus: eemaldatud üleliigne topeltjutumärk prioriteedifiltri valiku sildis
* Parandus: lisatud võrguadministraatori piletihalduse paneel superadminidele
* Täiustatud: ühendatud admin CSS üheks väliseks stiilileheks
* Täiustatud: eemaldatud Settings alammenüü alamsaidi admin-menüüst
* Täiustatud: frontend-varasid laaditakse tingimuslikult ainult Support Tickets lehtedel
* Täiustatud: plugin autoloader jäetakse vahele, kui Bedrocki juure autoloader on sõltuvused juba laadinud

### 1.0.2 - 2025-12-11 {#102---2025-12-11}
* Lisatud: täielik pileti vaatamise funktsionaalsus adminile ja frontendile
* Lisatud: AJAX käitleja pileti vastuste esitamiseks
* Lisatud: tugi pileti vastamise funktsionaalsusele korrektse vormikäsitlusega
* Lisatud: korrektne teadete kuvamine piletite esitamisel ja vastuste puhul adminis
* Lisatud: automaatne pileti seostamine praeguse kasutajaga klientide iseseisvate esituste puhul
* Lisatud: turvatäiustus, mis takistab klientidel pileti omandiõigust üle kirjutamast
* Lisatud: puuduvad abifunktsioonid (wu_format_date, wu_user_can_view_ticket jne)
* Lisatud: korrektne failimanuste allalaadimine ja käsitlemine
* Lisatud: e-posti teavitussüsteem pileti vastuste ja olekumuudatuste jaoks
* Parandatud: pileti vastuse vorm sisaldab nüüd vajalikku pileti ID-d
* Parandatud: teadete nähtavuse probleemid admini piletivaadetes
* Parandatud: süntaksivead Support Tickets funktsioonides
* Täiustatud: andmebaasi struktuur korrektsete päringu- ja skeemiklassidega vastuste ja manuste jaoks
* Täiustatud: pileti mudelites mindi atribuutide asemel üle päris omadustele

### 1.0.1 - 2025-09-28 {#101---2025-09-28}
* Uuendatud: prefiks nimetati järjepidevuse huvides ümber ultimate-multisite-ks
* Uuendatud: tekstidomeeni standardimine
* Parandatud: väiksemad veaparandused ja täiustused

### 1.0.0 - 2025-09-01 {#100---2025-09-01}
* Esmane väljalase
* Täielik piletihalduse süsteem
* Mitmetasemeline juurdepääsukontroll
* Lõimedega vestlussüsteem
* Failimanuste tugi
* E-posti teavitussüsteem
* Admini ja kliendi liidesed
* Statistika ja aruandlus
