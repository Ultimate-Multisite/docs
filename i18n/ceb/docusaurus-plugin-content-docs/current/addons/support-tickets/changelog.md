---
title: Changelog sa mga Suporta Ticket
sidebar_position: 99
_i18n_hash: 4ef7d3adaed4523e799ec78da9843a3d
---
# Changelog sa mga Support Tickets {#support-tickets-changelog}

### 1.0.4 - 2026-05-05 {#104---2026-05-05}
* Ginhimo nga mas maayo: Gikuha ang vendor/ directory gikan sa Git tracking (gi-cover na sa .gitignore), nagpagaan sa repository size
* Ginhimo nga mas maayo: Gitest hangtod WordPress 7.0

### 1.0.3 - 2026-05-01 {#103---2026-05-01}
* Ayuhon: Gi-accept ang null values sa mga ticket model setters nga nullable
* Ayuhon: Giputos ang tanang tickets sa global network-wide tables para sa maayong multisite support
* Ayuhon: Gitago ang staff fields ug giayo ang blank-page redirect sa customer new-ticket form
* Ayuhon: Gi-replace ang undefined add_meta() calls ngadto sa correct update_meta() para sa pag-store sa metadata
* Ayuhon: Gi-replace ang unregistered capability check ngadto sa correct wu_view_all_support_tickets
* Ayuhon: Gidugang ang mga nawalang AJAX handlers alang sa ticket status, assignment, ug quick-edit actions
* Ayuhon: Giayo ang method name para sa staff response detection sa ticket views
* Ayuhon: Gipagsama ang duplikado nga reply handlers ug gipatama ang nonce action names
* Ayuhon: Gidugang ang nawalang frontend view alang sa [wu_submit_ticket] shortcode
* Ayuhon: Gidugang ang nawalang user_id column ug giayo ang Support_Ticket::get_user_id() method
* Ayuhon: Gikuha ang extra double-quote sa priority filter option tag
* Ayuhon: Gidugang ang network admin ticket management panel para sa super admins
* Ginhimo nga mas maayo: Gipagsama ang admin CSS ngadto sa usa lang ka external stylesheet
* Ginhimo nga mas maayo: Gi-remove ang Settings submenu gikan sa subsite admin menu
* Ginhimo nga mas maayo: Conditionally load ang frontend assets lamang sa mga support ticket pages
* Ginhimo nga mas maayo: Gipakaliw ang plugin autoloader kung ang Bedrock root autoloader na mismo nag-load sa dependencies

### 1.0.2 - 2025-12-11 {#102---2025-12-11}
* Dugang: Full ticket viewing functionality para sa admin ug frontend
* Dugang: AJAX handler para sa pag-submit og reply sa ticket
* Dugang: Suporta para sa functionality sa ticket reply uban ang saktong pagproseso sa form
* Dugang: Saktong pagpakita sa notice para sa mga submission ug replies sa ticket sa admin
* Dugang: Awtomot nga pag-associate sa ticket uban sa kasamtang gamit para sa self-submissions sa customer
* Dugang: Pagsiguro sa seguridad aron dili mapalapas sa mga customer ang pagkabahin sa pagpanag-iya sa ticket
* Dugang: Mga nawong helper functions (wu_format_date, wu_user_can_view_ticket, ug uban pa)
* Dugang: Saktong pag-download ug pagproseso sa file attachment
* Dugang: Email notification system para sa mga reply sa ticket ug mga kausaban sa status
* Gi-fix: Ang form sa ticket reply karon naglakip na sa kinahanglanon nga ticket ID
* Gi-fix: Mga isyu sa visibility sa notice sa admin ticket views
* Gi-fix: Syntax errors sa mga function para sa support ticket
* Gpaayo: Database structure uban ang saktong query ug schema classes para sa mga response ug attachments
* Gpaayo: Migration gikan sa attributes ngadto sa real properties para sa ticket models

### 1.0.1 - 2025-09-28 {#101---2025-09-28}
* Gi-update: Ang prefix gi-rename kay ultimate-multisite para sa pagka-consistent
* Gi-update: Standardisasyon sa text domain
* Gi-fix: Mga gamay nga bug fixes ug mga paayo

### 1.0.0 - 2025-09-01 {#100---2025-09-01}
* Unang release
* Kompletong ticket management system
* Multi-level access control
* Threaded conversation system
* Suporta sa file attachment
* Email notification system
* Admin ug customer interfaces
* Mga statistics ug reporting
