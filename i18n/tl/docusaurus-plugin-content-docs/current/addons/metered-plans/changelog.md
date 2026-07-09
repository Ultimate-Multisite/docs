---
title: Talaan ng Pagbabago ng Mga Planong May Sukatan
sidebar_position: 99
_i18n_hash: ee036a85eb635b4b503c94798251e839
---
# Changelog ng Metered Plans

Bersyon 1.1.0 - Inilabas noong 2026-05-05
- Bago: Pagsingil sa AI token para sa multisite subsites — subaybayan at singilin ang paggamit ng AI token sa mga site ng customer na may nako-configure na mga rate kada token
- Bago: Muling binuo ang pagpapatupad ng connector gamit ang dinamikong pagtuklas ng limitasyon at write-through, na tinitiyak ang real-time na katumpakan sa lahat ng connector
- Ayos: Ang mga upgrade ng database table ay tama na ngayong nakaayon sa mga depinisyon ng BerlinDB schema, na pumipigil sa mga pagkabigo ng upgrade sa mga bagong install
- Ayos: Ang mga database upgrade callback ay na-convert sa tamang format, na nilulutas ang mga tahimik na pagkabigo ng upgrade
- Ayos: Tinatanggap na ngayon ang mga fractional value sa input field ng AI Usage Overage Markup
- Ayos: Nalutas ang mga fatal error at mga isyu sa double-initialization sa pag-load ng plugin
- Pinahusay: Nagdagdag ng check-env npm script upang ang mga developer environment ay mag-self-configure sa unang pagtakbo

### 1.0.3
* Na-update sa Plugin Update Checker v5
* Nagdagdag ng mga modernong WordPress plugin header
* Pinahusay ang compatibility sa pinakabagong mga bersyon ng WordPress
* Pinahusay ang performance ng pagsubaybay sa paggamit

### 1.0.2
* Mga pag-aayos ng bug at pagpapahusay ng performance
* Pinahusay na pag-uulat ng paggamit

### 1.0.0
* Paunang release
* Pangunahing metered billing functionality
* Pagsubaybay sa paggamit at pagkalkula ng overage
* Awtomatikong pagbuo ng invoice
