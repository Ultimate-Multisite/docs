---
title: Inyandiko y’impinduka z’amatike y’ubufasha
sidebar_position: 99
_i18n_hash: 4ef7d3adaed4523e799ec78da9843a3d
---
# Impinduka za Support Tickets {#support-tickets-changelog}

### 1.0.4 - 2026-05-05 {#104---2026-05-05}
* Byanonosowe: Hakuwemo ububiko vendor/ muri Git tracking (busanzwe buri muri .gitignore), bigabanya ingano ya repository
* Byanonosowe: Byageragejwe kugeza kuri WordPress 7.0

### 1.0.3 - 2026-05-01 {#103---2026-05-01}
* Byakosowe: Kwemera indangagaciro null muri nullable ticket model setters
* Byakosowe: Kubika amatike yose mu mbonerahamwe rusange zikwira network yose kugira ngo multisite ikorwe neza
* Byakosowe: Guhisha staff fields no gukosora redirect y’urupapuro rwera kuri form ya customer new-ticket
* Byakosowe: Gusimbuza umuhamagaro wa add_meta() utasobanuwe na update_meta() ikwiye ku bubiko bwa metadata
* Byakosowe: Gusimbuza igenzura rya capability ritanditswe na wu_view_all_support_tickets ikwiye
* Byakosowe: Kongeramo AJAX handlers zaburaga ku bikorwa bya ticket status, assignment, na quick-edit
* Byakosowe: Gukosora izina rya method ryo gutahura staff response muri ticket views
* Byakosowe: Guhuriza hamwe duplicate reply handlers no guhuza amazina ya nonce action
* Byakosowe: Kongeramo frontend view ibura ya shortcode [wu_submit_ticket]
* Byakosowe: Kongeramo column ya user_id yaburaga no gukosora method Support_Ticket::get_user_id()
* Byakosowe: Gukuraho double-quote y’inyongera muri tag y’ihitamo rya priority filter
* Byakosowe: Kongeramo panel ya network admin ticket management ku ba super admins
* Byanonosowe: Guhuriza admin CSS muri stylesheet imwe yo hanze
* Byanonosowe: Gukuraho submenu ya Settings muri menu ya subsite admin
* Byanonosowe: Gushyira frontend assets gusa kuri pages za support ticket bitewe n’uko bikenewe
* Byanonosowe: Gusimbuka plugin autoloader igihe Bedrock root autoloader yamaze gushyiramo dependencies

### 1.0.2 - 2025-12-11 {#102---2025-12-11}
* Byongeweho: Imikorere yuzuye yo kureba ticket kuri admin na frontend
* Byongeweho: AJAX handler ku kohereza ibisubizo bya ticket
* Byongeweho: Ubufasha bw’imikorere yo gusubiza ticket hamwe no gucunga form bikwiye
* Byongeweho: Kwerekana notices bikwiye ku byoherezwa bya ticket n’ibisubizo muri admin
* Byongeweho: Guhuza ticket mu buryo bwikora n’umukoresha uriho ku byo customer yohereje ubwe
* Byongeweho: Kongera umutekano wo kubuza customers guhindura ownership ya ticket
* Byongeweho: Helper functions zaburaga (wu_format_date, wu_user_can_view_ticket, n’ibindi)
* Byongeweho: Gukuramo no gucunga file attachment mu buryo bukwiye
* Byongeweho: Sisitemu ya email notification ku bisubizo bya ticket n’impinduka za status
* Byakosowe: Form yo gusubiza ticket ubu irimo ticket ID ikenewe
* Byakosowe: Ibibazo by’ukugaragara kwa notices muri admin ticket views
* Byakosowe: Amakosa ya syntax muri support ticket functions
* Byanonosowe: Imiterere ya database hamwe na query na schema classes bikwiye ku bisubizo n’attachments
* Byanonosowe: Kwimukira kuri properties nyazo aho gukoresha attributes kuri ticket models

### 1.0.1 - 2025-09-28 {#101---2025-09-28}
* Byavuguruwe: Prefix yahinduwe ultimate-multisite kugira ngo habeho guhuzagurika
* Byavuguruwe: Gushyira text domain ku murongo umwe
* Byakosowe: Gukosora udukosa duto no kunonosora

### 1.0.0 - 2025-09-01 {#100---2025-09-01}
* Isohora rya mbere
* Sisitemu yuzuye yo gucunga tickets
* Igenzura ry’uburenganzira rifite ibyiciro byinshi
* Sisitemu y’ikiganiro gikurikiranwa
* Ubufasha bwa file attachment
* Sisitemu ya email notification
* Interfaces za admin na customer
* Imibare n’amakuru ya raporo
