---
title: Urugendo rw'Ultimate Multisite
sidebar_position: 4
_i18n_hash: 01cdaa5cf8aece1ca5c269d943e8a9e9
---
# Integration na WPMU DEV {#wpmu-dev-integration}

## Umuhuku (Overview) {#overview}
WPMU DEV ni platformi ya WordPress y'umutwe nshya itanga hosting, plugins, no services ku za WordPress sites. Iyi integration irashobora gukora uburyo bw'ubwumvikane bwo gukoresha domain syncing no gukemura SSL certificate management hagati ya Ultimate Multisite na hosting ya WPMU DEV.

## Icyiciro (Features) {#features}
- Domain syncing y'umutwe nshya
- Gukemura SSL certificate management
- Uburyo bw'ubwumvikane bwo gukora SSL certificate verification

## Amakuru (Requirements) {#requirements}
Iyi integration irashobora kumenya uburyo w'ubwumvikane ushaka hosting ku WPMU DEV kandi itanga API y'umutwe nshya. Nta ko hari uburyo bwo gukoresha cyangwa gukorera cyane (configuration) niba ushaka hosting ku WPMU DEV.

Iyi integration irashobora kumenya ko `WPMUDEV_HOSTING_SITE_ID` yari yari yari yari yari yari yari yari yari yari yari yari yari yari yari yari yari yari yari yari yari yari yari yari yari yari yari yari yari yari yari yari yari yari yari yari yari yari yari yari yari yari yari yari yari yari yari yari yari yari yari yari yari yari yari yari yari yari yari yari yari yari yari yari yari yari yari yari yari yari yari yari yari yari yari yari yari yari yari yari yari yari yari yari yari yari yari yari yari yari yari yari yari yari yari yari yari yari yari yari yari yari yari yari yari yari yari yari yari yari yari yari yari yari yari yari yari yari yari yari yari yari yari yari yari yari yari yari yari yari yari yari yari yari yari yari yari yari yari yari yari yari yari yari yari yari yari yari yari yari yari yari yari yari yari yari yari yari yari yari yari yari yari yari yari yari yari yari yari yari yari yari yari yari yari yari yari yari yari yari yari yari yari yari yari yari yari yari yari yari yari yari yari yari yari yari yari yari yari yari yari yari yari yari yari yari yari yari yari yari yari yari yari yari yari yari yari yari yari yari yari yari yari yari yari yari yari yari yari yari yari yari yari yari yari yari yari yari yari yari yari yari yari yari yari yari yari yari yari yari yari yari yari yari yari yari yari yari yari yari yari yari yari yari yari yari yari yari yari yari yari yari yari yari yari yari yari yari yari yari yari yari yari yari yari yari yari yari yari yari yari yari yari yari yari yari yari yari yari yari yari yari yari yari yari yari yari yari yari yari yari yari yari yari yari yari yari yari yari yari yari yari yari yari yari yari yari yari yari yari yari yari yari yari yari yari yari yari yari yari yari yari yari yari yari yari yari yari yari yari yari yari yari yari yari yari yari yari yari yari yari yari yari yari yari yari yari yari yari yari yari yari yari yari yari yari yari yari yari yari yari yari yari yari yari yari yari yari yari yari yari yari yari yari yari yari yari yari yari yari yari yari yari yari yari yari yari yari yari yari yari yari yari yari yari yari yari yari yari yari yari yari yari yari yari yari yari yari yari yari yari yari yari yari yari yari yari yari yari yari yari yari yari yari yari yari yari yari yari yari yari yari yari yari yari yari yari yari yari yari yari yari yari yari yari yari yari yari yari yari yari yari yari y

Iyi, uburyo kuza ko uburyo bwa gukoresha (integration) nishobora gutangira ubushobozi bw'SSL certificate verification cyane kuri WPMU DEV hosting. Ibi bikorwa kuko bituma igihe kinini cyane kugira ngo SSL certificates zikoreshwa kandi zikoresheje. Mu gihe cyo, bishobora gukora uburyo bwo kubona SSL certificate 10 (cyangwa ibyo byiza) mu gihe cyose, ariko mu gihe cyo, byari yari kigira uburyo bwa standard 5.

## Inama Zikomeye {#setup-instructions}

### Gukoresha Domain {#1-verify-wpmu-dev-hosting}
Ubu gihe, WPMU DEV API itagira uburyo bwo gukora domain (domain) gukoreshwa. Iyo uburyo bwo gukoresha domain (domain mapping) bishoborwa mu Ultimate Multisite, domain izera mu gihe cyose ku account yawe ya hosting kuri WPMU DEV. Ukenya ko ushobora gukora uburyo bwo kubyara mu dashboard ya hosting ya WPMU DEV niba hari ikindi.

### Gutangira API (API Authentication) {#2-enable-the-integration}
Iyi integration ituma gukoresha API key ya WPMU DEV yifashishijwe mu database ya WordPress kanini nk'option `wpmudev_apikey`. Ibi bikorwa cyangwa bitangirwa mu gihe uyo utuma site yawe gutandukanya na WPMU DEV.

## Gukora Icyo (Troubleshooting) {#how-it-works}

### Icyiciro Cy'API Connection {#domain-syncing}
- Shobora gushyira umwanya ko site yawe yari yifashishijwe neza kuri WPMU DEV.
- Shobora gushyira umwanya ko option `wpmudev_apikey` yari yifashishijwe mu database ya WordPress.
- Shobora gushyira umwanya ko membership yawe kuri WPMU DEV ikoreshwa.

### Icyiciro Cy'SSL Certificate Issues {#ssl-certificate-management}
- WPMU DEV ishobora gutuma igihe kinini cyane kugira ngo yitangire SSL certificates (gusa 5-15 min).
- Iyi integration ituma gukora uburyo bwo kubona SSL certificates mu gihe cyose.
- Niba SSL certificates zikoreshwa mu gihe cyose ntabwo zikoreshwa, shobora gutangira ku support ya WPMU DEV.

### Domain Itagira Icyiciro (Domain Not Added) {#important-notes}
- Shobora gushyira umwanya ko hari uburyo bwa makuru (logs) mu Ultimate Multisite kugira ngo ushije ibindi byiza.
- Shobora gushyira umwanya ko domain itagira cyane kuri WPMU DEV.
- Shobora gushyira umwanya ko hosting plan yawe kuri WPMU DEV ikoresheje uburyo bwo kubona domain ugiye gukora.
