---
title: Diarin'ny fanovana amin'ny Tikety fanohanana
sidebar_position: 99
_i18n_hash: 4ef7d3adaed4523e799ec78da9843a3d
---
# Tantaran'ny fanovana Support Tickets {#support-tickets-changelog}

### 1.0.4 - 2026-05-05 {#104---2026-05-05}
* Nohatsaraina: Nesorina tamin'ny fanarahan'ny Git ny lahatahiry vendor/ (efa voarakotry ny .gitignore), ka nampihena ny haben'ny repository
* Nohatsaraina: Notsapaina hatramin'ny WordPress 7.0

### 1.0.3 - 2026-05-01 {#103---2026-05-01}
* Fanamboarana: Manaiky sanda null ao amin'ireo nullable ticket model setters
* Fanamboarana: Tehirizo ao amin'ny tabilao global manerana ny tambajotra ny ticket rehetra ho an'ny fanohanana multisite mety
* Fanamboarana: Afeno ny staff fields ary amboary ny redirect pejy banga amin'ny customer new-ticket form
* Fanamboarana: Soloina amin'ny update_meta() marina ho an'ny fitehirizana metadata ireo antso add_meta() tsy voafaritra
* Fanamboarana: Soloina amin'ny wu_view_all_support_tickets marina ny fanamarinana capability tsy voasoratra anarana
* Fanamboarana: Ampio AJAX handlers tsy ampy ho an'ny satan'ny ticket, assignment, ary quick-edit actions
* Fanamboarana: Ahitsy ny anaran'ny method ho an'ny fitiliana valintenin'ny staff ao amin'ny ticket views
* Fanamboarana: Atambaro ireo reply handlers mitovy ary ampifanaraho ny anaran'ny nonce action
* Fanamboarana: Ampio frontend view tsy ampy ho an'ny shortcode [wu_submit_ticket]
* Fanamboarana: Ampio tsanganana user_id tsy ampy ary amboary ny method Support_Ticket::get_user_id()
* Fanamboarana: Esory ny marika teny indroa fanampiny ao amin'ny tag safidy priority filter
* Fanamboarana: Ampio panel fitantanana ticket an'ny network admin ho an'ny super admins
* Nohatsaraina: Atambaro ho stylesheet ivelany tokana ny CSS an'ny admin
* Nohatsaraina: Esory ao amin'ny subsite admin menu ny submenu Settings
* Nohatsaraina: Ampidiro araka ny fepetra ny frontend assets raha amin'ny pejin'ny support ticket ihany
* Nohatsaraina: Dingano ny plugin autoloader rehefa efa nampiditra dependencies ny autoloader an'ny Bedrock root

### 1.0.2 - 2025-12-11 {#102---2025-12-11}
* Nampiana: Fiasa feno hijerena ticket ho an'ny admin sy frontend
* Nampiana: AJAX handler ho an'ny fandefasana reply amin'ny ticket
* Nampiana: Fanohanana ny fiasa reply amin'ny ticket miaraka amin'ny fitantanana form mety
* Nampiana: Fampisehoana notice mety ho an'ny fandefasana ticket sy reply ao amin'ny admin
* Nampiana: Fampifandraisana ticket mandeha ho azy amin'ny mpampiasa ankehitriny ho an'ny self-submissions an'ny customer
* Nampiana: Fanatsarana fiarovana hisorohana ny customers tsy hanova ny tompon'ny ticket
* Nampiana: Helper functions tsy ampy (wu_format_date, wu_user_can_view_ticket, sns.)
* Nampiana: Fisintonana sy fitantanana file attachment mety
* Nampiana: Rafitra email notification ho an'ny ticket replies sy fanovana status
* Namboarina: Ahitana ID ticket ilaina izao ny form ticket reply
* Namboarina: Olana amin'ny fahitana notice ao amin'ny admin ticket views
* Namboarina: Syntax errors ao amin'ny support ticket functions
* Nohatsaraina: Firafitry ny database miaraka amin'ny query sy schema classes mety ho an'ny responses sy attachments
* Nohatsaraina: Fifindrana amin'ny properties tena izy fa tsy attributes ho an'ny ticket models

### 1.0.1 - 2025-09-28 {#101---2025-09-28}
* Nohavaozina: Novana anarana ho ultimate-multisite ny prefix mba hifanaraka
* Nohavaozina: Fanamafisana fenitra text domain
* Namboarina: Fanamboarana bug madinika sy fanatsarana

### 1.0.0 - 2025-09-01 {#100---2025-09-01}
* Famoahana voalohany
* Rafitra fitantanana ticket feno
* Fanaraha-maso fidirana ambaratonga maro
* Rafitra resaka misy thread
* Fanohanana file attachment
* Rafitra email notification
* Interfaces ho an'ny admin sy customer
* Antontan'isa sy tatitra
