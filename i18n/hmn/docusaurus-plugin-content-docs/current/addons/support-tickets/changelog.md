---
title: Keeb Kwm Hloov Tshiab ntawm Daim Pib Txhawb Nqa
sidebar_position: 99
_i18n_hash: 4ef7d3adaed4523e799ec78da9843a3d
---
# Daim Ntawv Hloov Pauv Support Tickets {#support-tickets-changelog}

### 1.0.4 - 2026-05-05 {#104---2026-05-05}
* Txhim kho: Tshem vendor/ directory tawm ntawm Git tracking (twb muaj nyob hauv .gitignore lawm), pab txo repository loj
* Txhim kho: Kuaj siv tau txog WordPress 7.0

### 1.0.3 - 2026-05-01 {#103---2026-05-01}
* Kho: Txais tau null values hauv nullable ticket model setters
* Kho: Khaws txhua ticket hauv global network-wide tables kom txhawb multisite kom raug
* Kho: Zais staff fields thiab kho blank-page redirect ntawm customer new-ticket form
* Kho: Hloov cov add_meta() calls uas tsis tau txhais nrog update_meta() kom raug rau metadata storage
* Kho: Hloov unregistered capability check nrog wu_view_all_support_tickets kom raug
* Kho: Ntxiv AJAX handlers uas ploj lawm rau ticket status, assignment, thiab quick-edit actions
* Kho: Kho method name rau kev tshawb pom staff response hauv ticket views
* Kho: Muab duplicate reply handlers los ua ke thiab kho nonce action names kom phim
* Kho: Ntxiv frontend view uas ploj lawm rau [wu_submit_ticket] shortcode
* Kho: Ntxiv user_id column uas ploj lawm thiab kho Support_Ticket::get_user_id() method
* Kho: Tshem double-quote ntxiv hauv priority filter option tag
* Kho: Ntxiv network admin ticket management panel rau super admins
* Txhim kho: Muab admin CSS los ua ke rau hauv ib single external stylesheet
* Txhim kho: Tshem Settings submenu tawm ntawm subsite admin menu
* Txhim kho: Load frontend assets raws li xwm txheej tsuas yog ntawm support ticket pages xwb
* Txhim kho: Hla plugin autoloader thaum Bedrock root autoloader twb load dependencies lawm

### 1.0.2 - 2025-12-11 {#102---2025-12-11}
* Ntxiv: Kev saib ticket tag nrho rau admin thiab frontend
* Ntxiv: AJAX handler rau ticket reply submissions
* Ntxiv: Kev txhawb rau ticket reply functionality nrog form handling kom raug
* Ntxiv: Kev tso notice kom raug rau ticket submissions thiab replies hauv admin
* Ntxiv: Kev txuas ticket rau current user cia li ua rau customer self-submissions
* Ntxiv: Kev txhim kho security kom tiv thaiv customers tsis txhob override ticket ownership
* Ntxiv: Helper functions uas ploj lawm (wu_format_date, wu_user_can_view_ticket, thiab lwm yam)
* Ntxiv: Kev download thiab handling file attachment kom raug
* Ntxiv: Email notification system rau ticket replies thiab status changes
* Kho lawm: Ticket reply form tam sim no muaj ticket ID uas tsim nyog
* Kho lawm: Notice visibility issues hauv admin ticket views
* Kho lawm: Syntax errors hauv support ticket functions
* Txhim kho: Database structure nrog query thiab schema classes kom raug rau responses thiab attachments
* Txhim kho: Migration mus rau real properties es tsis yog attributes rau ticket models

### 1.0.1 - 2025-09-28 {#101---2025-09-28}
* Hloov tshiab: Hloov prefix npe mus rau ultimate-multisite kom sib xws
* Hloov tshiab: Text domain standardization
* Kho lawm: Kho tej bug me thiab kev txhim kho

### 1.0.0 - 2025-09-01 {#100---2025-09-01}
* Tso tawm thawj zaug
* Ticket management system tiav
* Kev tswj kev nkag tau ntau theem
* Threaded conversation system
* File attachment support
* Email notification system
* Admin thiab customer interfaces
* Statistics thiab reporting
