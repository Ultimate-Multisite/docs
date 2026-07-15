---
title: Changelog ng Support Tickets
sidebar_position: 99
_i18n_hash: 4ef7d3adaed4523e799ec78da9843a3d
---
# Pagbabago sa Support Tickets (Changelog)

### 1.0.4 - 2026-05-05 {#104---2026-05-05}
* Pinaganda: Tinanggal ang vendor/ directory sa Git tracking (kasama na rin sa .gitignore), kaya lumiit ang laki ng repository.
* Pinaganda: Sinubukan hanggang WordPress 7.0.

### 1.0.3 - 2026-05-01 {#103---2026-05-01}
* Inayos: Tinatanggap na ang mga 'null' values sa mga nullable ticket model setters.
* Inayos: Itinatago na ang lahat ng ticket sa global network-wide tables para sa tamang suporta sa multisite.
* Inayos: Tinago ang staff fields at inayos ang blank-page redirect sa customer new-ticket form.
* Inayos: Pinalitan ang mga undefined add_meta() calls ng tamang update_meta() para sa pag-iimbak ng metadata.
* Inayos: Pinalitan ang unregistered capability check ng tamang wu_view_all_support_tickets.
* Inayos: Idinagdag ang mga nawawalang AJAX handlers para sa ticket status, assignment, at quick-edit actions.
* Inayos: Itinama ang pangalan ng method para sa pagtukoy ng tugon ng staff sa mga ticket view.
* Inayos: Pinagsama ang mga duplicate reply handlers at in-align ang mga pangalan ng nonce action.
* Inayos: Idinagdag ang nawawalang frontend view para sa [wu_submit_ticket] shortcode.
* Inayos: Idinagdag ang nawawalang user_id column at inayos ang Support_Ticket::get_user_id() method.
* Inayos: Tinanggal ang extra double-quote sa priority filter option tag.
* Inayos: Idinagdag ang network admin ticket management panel para sa super admins.
* Pinaganda: Pinagsama ang admin CSS sa isang iisang external stylesheet.
* Pinaganda: Tinanggal ang Settings submenu mula sa subsite admin menu.
* Pinaganda: Conditional loading ng frontend assets, tanging sa mga support ticket pages lang.
* Pinaganda: Nilalaktawan ang plugin autoloader kapag ang Bedrock root autoloader ay nag-load na ng dependencies.

### 1.0.2 - 2025-12-11 {#102---2025-12-11}
* Idinagdag: Buong functionality ng pagtingin sa ticket para sa admin at sa frontend.
* Idinagdag: AJAX handler para sa pagpasa ng ticket reply submissions.
* Idinagdag: Suporta para sa ticket reply functionality na may tamang form handling.
* Idinagdag: Tamang pagpapakita ng notice para sa mga ticket submissions at replies sa admin.
* Idinagdag: Awtomatikong pag-uugnay ng ticket sa kasalukuyang user para sa mga self-submission ng customer.
* Idinagdag: Security enhancement para pigilan ang mga customer na baguhin ang pagmamay-ari ng ticket.
* Idinagdag: Mga nawawalang helper functions (wu_format_date, wu_user_can_view_ticket, atbp.).
* Idinagdag: Tamang pag-download at paghawak ng file attachment.
* Idinagdag: Email notification system para sa mga ticket replies at pagbabago ng status.
* Inayos: Ang ticket reply form ay naglalaman na ng kinakailangang ticket ID.
* Inayos: Mga isyu sa pagkakita ng notice sa mga ticket view ng admin.
* Inayos: Syntax errors sa mga support ticket functions.
* Pinaganda: Istruktura ng database na may tamang query at schema classes para sa mga sagot at attachment.
* Pinaganda: Paglipat sa real properties imbes na attributes para sa ticket models.

### 1.0.1 - 2025-09-28 {#101---2025-09-28}
* In-update: Binago ang prefix sa ultimate-multisite para sa pagkakapare-pareho.
* In-update: Standardization ng text domain.
* Inayos: Maliliit na bug fixes at pagpapaganda.

### 1.0.0 - 2025-09-01 {#100---2025-09-01}
* Initial release
* Complete ticket management system
* Multi-level access control
* Threaded conversation system
* File attachment support
* Email notification system
* Admin and customer interfaces
* Statistics and reporting
