---
title: Changelog ng Metered Plans
sidebar_position: 99
_i18n_hash: ee036a85eb635b4b503c94798251e839
---
# History ng Pagbabago ng Metered Plans

Version 1.1.0 - Inilabas noong 2026-05-05
- New: Pagbabayad batay sa AI token para sa multisite subsites — subaybayan at singilin ang paggamit ng AI token sa iba't ibang site ng customer na may configurable per-token rates
- New: Binago ang pagpapatupad ng Connector gamit ang dynamic limit discovery at write-through, na nagtitiyak ng real-time accuracy sa lahat ng connectors
- Fix: Ang pag-upgrade ng database table ay tama nang naka-align sa mga kahulugan ng BerlinDB schema, kaya maiiwasan ang pagkabigo ng upgrade sa mga bagong install
- Fix: Ang mga database upgrade callback ay ginawang tamang format, na nagresolba sa mga tahimik (silent) na pagkabigo ng upgrade
- Fix: Tinatanggap na ngayon ang fractional values sa input field ng AI Usage Overage Markup
- Fix: Inayos ang mga fatal errors at double-initialization issues sa paglo-load ng plugin
- Improved: Nagdagdag ng check-env npm script para ang developer environments ay mag-self-configure sa unang pagtakbo

### 1.0.3
* In-update sa Plugin Update Checker v5
* Nagdagdag ng modern WordPress plugin headers
* Pinabuti ang compatibility sa pinakabagong bersyon ng WordPress
* Pinalakas ang performance ng usage tracking

### 1.0.2
* Mga pag-aayos ng bug at pagpapabuti ng performance
* Pinahusay ang usage reporting

### 1.0.0
* Initial release
* Core metered billing functionality
* Usage tracking at overage calculation
* Automatic invoice generation
