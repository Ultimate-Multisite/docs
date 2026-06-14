---
title: Integrasyon ng WPMU DEV
sidebar_position: 4
_i18n_hash: 01cdaa5cf8aece1ca5c269d943e8a9e9
---
# Integrasyon ng WPMU DEV

## Pangkalahatang-ideya
Ang WPMU DEV ay isang kumpletong platform sa WordPress na nag-aalok ng hosting, mga plugin, at serbisyo para sa mga WordPress site. Ang integrasyong ito ay nagbibigay-daan para sa awtomatikong pag-sync ng domain at pamamahala ng SSL certificate sa pagitan ng Ultimate Multisite at WPMU DEV hosting.

## Mga Katangian
- Awtomatikong pag-sync ng domain
- Pamamahala ng SSL certificate
- Mas malawak na mga pagtatangka sa pagveripika ng SSL certificate

## Mga Kinakailangan
Awtomatikong nakikita ng integrasyon kung nagho-host ka sa WPMU DEV at gumagamit ito ng built-in API. Walang karagdagang configuration ang kailangan kung nagho-host ka sa WPMU DEV.

Sinusuri ng integrasyon kung mayroon kang `WPMUDEV_HOSTING_SITE_ID` constant, na awtomatikong tinutukoy kapag nagho-host sa WPMU DEV.

## Mga Panuto sa Pag-set Up

### 1. Beripikahin ang WPMU DEV Hosting

Kung nagho-host ka sa WPMU DEV, dapat ay nakadefine na ang mga kinakailangang constant. Beripikahin kung:

1. Ang `WPMUDEV_HOSTING_SITE_ID` constant ay naka-define sa iyong environment
2. Mayroon kang aktibong membership ng WPMU DEV na may API access

### 2. I-enable ang Integrasyon

1. Sa iyong WordPress admin, pumunta sa Ultimate Multisite > Settings
2. Mag-navigate sa tab na "Domain Mapping"
3. Mag-scroll pababa sa "Host Integrations"
4. I-enable ang WPMU DEV integration
5. I-click ang "Save Changes"

## Paano Ito Gumagana

### Domain Syncing

Kapag may domain na naka-map sa Ultimate Multisite:

1. Gagamitin ng integrasyon ang WPMU DEV API para idagdag ang domain sa iyong hosting account
2. Awtomatikong idadagdag din nito ang www version ng domain
3. Ang WPMU DEV ang bahalang mag-configure ng domain at magbigay ng SSL certificate

### Pamamahala ng SSL Certificate

Ang integrasyon ay naka-configure para dagdagan ang bilang ng mga pagsubok sa SSL certificate verification para sa WPMU DEV hosting, dahil maaaring tumagal ito nang konti bago ma-issue at ma-install ang mga SSL certificate. Sa default setting, susubukan nito hanggang 10 beses para sa SSL certificate verification, kumpara sa standard na 5 attempts.

## Mahalagang Paalala

### Pag-alis ng Domain (Domain Removal)

Sa kasalukuyan, hindi nagbibigay ang WPMU DEV API ng paraan para tanggalin ang mga domain. Kapag tinanggal mo ang domain mapping sa Ultimate Multisite, mananatili pa rin ang domain sa iyong WPMU DEV hosting account. Kailangan mo itong manu-manong tanggalin mula sa WPMU DEV hosting dashboard kung kinakailangan.

### API Authentication

Gumagamit ang integrasyon ng WPMU DEV API key na naka-store sa iyong WordPress database bilang `wpmudev_apikey` option. Ito ay awtomatikong naka-set kapag iniugnay mo ang iyong site sa WPMU DEV.

## Pag-troubleshoot (Troubleshooting)

### Mga Isyu sa Koneksyon ng API
- Siguraduhin na tama ang koneksyon ng iyong site sa WPMU DEV
- Tingnan kung naka-set ang `wpmudev_apikey` option sa iyong WordPress database
- Tiyakin na aktibo ang iyong membership sa WPMU DEV

### Mga Isyu sa SSL Certificate
- Maaaring tumagal ng ilang oras ang WPMU DEV para ma-issue ang mga SSL certificate (karaniwan ay 5-15 minuto)
- Ang integrasyon ay naka-configure na mag-check hanggang 10 beses para sa mga SSL certificate
- Kung hindi pa rin ina-issue ang mga SSL certificate pagkatapos ng maraming pagsubok, makipag-ugnayan ka sa WPMU DEV support

### Hindi Naisang Domain (Domain Not Added)
- Tingnan ang Ultimate Multisite logs para sa anumang error messages
- I-verify kung hindi pa naidado-dagdag ang domain sa WPMU DEV
- Siguraduhin na ang iyong WPMU DEV hosting plan ay sumusuporta sa bilang ng mga domain na idadagdag mo
