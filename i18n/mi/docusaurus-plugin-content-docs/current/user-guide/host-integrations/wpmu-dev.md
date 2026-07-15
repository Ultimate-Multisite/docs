---
title: Whakawhanaungatanga WPMU DEV
sidebar_position: 4
_i18n_hash: 01cdaa5cf8aece1ca5c269d943e8a9e9
---
# Whakawhanaungatanga me WPMU DEV Integration

## Overview {#overview}
WPMU DEV heke platforma WordPress mō te whānau, e hune hosting, plugins, me ngā wāhi mō mga site WordPress. Ka taea e tēnei integration te whakawhiti domain automatically me te whakamaoritanga SSL certificate o Ultimate Multisite me te hosting o WPMU DEV.

## Features {#features}
- Whakawhiti domain automatically
- Whakamaoritanga SSL certificate
- Whakamārama whakatika SSL certificate mō te ake

## Requirements {#requirements}
Ka māmā ana i tēnei integration, ka whakaiti i te whakamahi o te configuration e tino nui. Ka māmā ana ki te tautoko i te WPMU DEV i te hosting, ā, ka whakamahi ai i te API e hoki mai. He kore whakaaro e pēnei i te whai whakaaro i te `WPMUDEV_HOSTING_SITE_ID` constant, ko e tino tika ana i roto i te hosting o WPMU DEV.

## Setup Instructions {#setup-instructions}

### 1. Whakawātea Hosting o WPMU DEV {#1-verify-wpmu-dev-hosting}

Ko ngā constants e pēnei i te kaha e hoki mai ana i te `WPMUDEV_HOSTING_SITE_ID` me tino tika ana i roto i te environment, ko e tino tika ana i te tautoko i te WPMU DEV. Whakawātea i tēnei mea:

1. Ko te constant `WPMUDEV_HOSTING_SITE_ID` e tika ana i roto i te environment o koe
2. He membership WPMU DEV active me access API mo koe

### 2. Whakaaaro Integration {#2-enable-the-integration}

1. I roto i admin WordPress, pahi ki Ultimate Multisite > Settings
2. Pahi ki te tab "Domain Mapping"
3. Scroll ki te "Host Integrations"
4. Whakaaaro (Enable) te integration o WPMU DEV
5. Whakawātea "Save Changes"

## How It Works {#how-it-works}

### Domain Syncing {#domain-syncing}

I roto i te wā e whakatika domain i Ultimate Multisite:

1. Ka whakamahi tēnei integration i te WPMU DEV API ki te whāinga te domain ki te account hosting o koe
2. Ka whāinga automatically te version www o te domain
3. Ko WPMU DEV ko e whakahaere ai te configuration o te domain me te whero SSL certificate

### SSL Certificate Management {#ssl-certificate-management}

Kia ora, he whakatika i te whakamahi o te whakataunga (integration) ki te pēnitanga (verification attempts) mō ngā SSL certificate mo WPMU DEV hosting. He tino nui tēnei, engari he taea ana te take ana, he taea ai i te wā e pai ake i te whakamaoritanga me te whakatū o ngā SSL certificates. E hoa, e pēnitanga (verification) ana i te 10 wā, i whakawhanake mai i te 5 wā pēnitanga (attempts) mō te whakamārama SSL certificate ki te kaha ake.

## Ngā Tohutohu Whakamahinga Tūhono (Important Notes) {#important-notes}

### Whakamutunga o Domain (Domain Removal) {#domain-removal}

I tēnei wā, he nui te mea e taea ana i te WPMU DEV API mo te whakatū atu me te whakatū atu o ngā domain. I roto i Ultimate Multisite, ko te domain e pēnitanga (mapping) ana, ka noho i te account mo hosting o WPMU DEV ahau. He tino nui tēnei, engari he taea ana koe te whakamutunga i a ia manu manu (manually remove) i te dashboard o WPMU DEV hosting ki te mea e pōtanga.

### Whakawhanaungatanga API (API Authentication) {#api-authentication}

Ko te whakamahi o te whakataunga (integration) i te key API mo WPMU DEV, ko e pēnitanga ana i te database o WordPress ahau mō option 'wpmudev_apikey'. Ko te whakauru koe i tēnei automatically i roto i te wā koe e whakatō i tō site ki WPMU DEV.

## Whakawātea (Troubleshooting) {#troubleshooting}

### Ngā Pānga Whakamahi API (API Connection Issues) {#api-connection-issues}
- Kia pēnitanga (verify) ana ko he tino tika te whakawhanaungatanga o tō site ki WPMU DEV.
- Kia pēnitanga ana ko he tino tika te whakatō i te option 'wpmudev_apikey' i roto i tō database o WordPress.
- Kia pēnitanga ana ko he tino tika te whakahirahira (active) o tō membership mo WPMU DEV.

### Ngā Pānga SSL Certificate (SSL Certificate Issues) {#ssl-certificate-issues}
- He taea ana ki te WPMU DEV te whakamaoritanga i ngā SSL certificates, he pōtanga (usually 5-15 minutes).
- Ko te whakataunga (integration) e pēnitanga ana i te 10 wā mō te whakamārama SSL certificates.
- He tino nui tēnei, engari ko te SSL certificates ka noho i te whakamaoritanga ki te wae ake i ngā pēnitanga (attempts), he whai whakaaro ki WPMU DEV support.

### Domain Ka Rongotanga Nahi (Domain Not Added) {#domain-not-added}
- Kia pēnitanga ana koe i ngā logs o Ultimate Multisite mō ngā pōtanga (error messages).
- Kia pēnitanga ana ko he tino tika te whakatika i te domain ka noho i WPMU DEV ahau.
- Kia pēnitanga ana ko he tino tika te whai whakaaro ki te plan mo hosting o WPMU DEV mō te whakapā (supports) ngā pōtanga (domains) e koe e pōtanga.
