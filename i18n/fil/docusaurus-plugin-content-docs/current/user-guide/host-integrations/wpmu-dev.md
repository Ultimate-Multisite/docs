---
title: Integrasyon ng WPMU DEV
sidebar_position: 4
_i18n_hash: 01cdaa5cf8aece1ca5c269d943e8a9e9
---
# Integrasyon sa WPMU DEV

## Pangkalahatang-tanaw
Ang WPMU DEV ay isang komprehensibong WordPress platform na nag-aalok ng hosting, mga plugin, at mga serbisyo para sa mga WordPress site. Ang integrasyon na ito ay nagbibigay-daan sa awtomatikong pag-sync ng domain at pamamahala ng SSL certificate sa pagitan ng Ultimate Multisite at WPMU DEV hosting.

## Mga Tampok
- Awtomatikong pag-sync ng domain
- Pamamahala ng SSL certificate
- Pinalawak na mga pagtatangka sa pag-verify ng SSL certificate

## Mga Kinakailangan
Awtomatikong nakikilala ng integrasyon kung naka-host ka sa WPMU DEV at ginagamit nito ang built-in na API. Hindi na kailangan ng karagdagang configuration kung naka-host ka sa WPMU DEV.

Sinusuri ng integrasyon kung naroroon ang `WPMUDEV_HOSTING_SITE_ID` constant, na awtomatikong naka-define kapag naka-host sa WPMU DEV.

## Mga Tagubilin sa Pag-setup

### 1. I-verify ang WPMU DEV Hosting

Kung naka-host ka sa WPMU DEV, dapat ay naka-define na ang mga kinakailangang constant. I-verify na:

1. Naka-define ang `WPMUDEV_HOSTING_SITE_ID` constant sa iyong environment
2. Mayroon kang aktibong WPMU DEV membership na may API access

### 2. I-enable ang Integrasyon

1. Sa iyong WordPress admin, pumunta sa Ultimate Multisite > Settings
2. Mag-navigate sa "Domain Mapping" tab
3. Mag-scroll pababa sa "Host Integrations"
4. I-enable ang WPMU DEV integration
5. I-click ang "Save Changes"

## Paano Ito Gumagana

### Pag-sync ng Domain

Kapag may domain na na-map sa Ultimate Multisite:

1. Ginagamit ng integrasyon ang WPMU DEV API para idagdag ang domain sa iyong hosting account
2. Awtomatiko rin nitong idinaragdag ang www version ng domain
3. Ang WPMU DEV ang humahawak sa domain configuration at pag-issue ng SSL certificate

### Pamamahala ng SSL Certificate

Ang integrasyon ay naka-configure para dagdagan ang bilang ng mga pagtatangka sa pag-verify ng SSL certificate para sa WPMU DEV hosting, dahil maaaring magtagal bago ma-issue at ma-install ang mga SSL certificate. Bilang default, susubukan nito nang hanggang 10 beses para sa pag-verify ng SSL certificate, kumpara sa karaniwang 5 na pagtatangka.

## Mahahalagang Paalala

### Pag-alis ng Domain

Sa kasalukuyan, hindi nagbibigay ang WPMU DEV API ng paraan para mag-alis ng mga domain. Kapag inalis ang domain mapping sa Ultimate Multisite, mananatili ang domain sa iyong WPMU DEV hosting account. Kailangan mo itong manu-manong alisin mula sa WPMU DEV hosting dashboard kung kinakailangan.

### API Authentication

Ginagamit ng integrasyon ang WPMU DEV API key na naka-store sa iyong WordPress database bilang `wpmudev_apikey` option. Awtomatiko itong naka-set up kapag ikinonekta mo ang iyong site sa WPMU DEV.

## Pag-troubleshoot

### Mga Isyu sa Koneksyon ng API
- I-verify na maayos na nakakonekta ang iyong site sa WPMU DEV
- Suriin na naka-set ang `wpmudev_apikey` option sa iyong WordPress database
- Tiyaking aktibo ang iyong WPMU DEV membership

### Mga Isyu sa SSL Certificate
- Maaaring magtagal ang WPMU DEV sa pag-issue ng mga SSL certificate (karaniwang 5-15 minuto)
- Naka-configure ang integrasyon na mag-check nang hanggang 10 beses para sa mga SSL certificate
- Kung hindi pa rin nai-issue ang mga SSL certificate pagkatapos ng maraming pagtatangka, makipag-ugnayan sa WPMU DEV support

### Hindi Naidagdag ang Domain
- Suriin ang mga log ng Ultimate Multisite para sa anumang mga error message
- I-verify na hindi pa naidagdag ang domain sa WPMU DEV
- Tiyaking sinusuportahan ng iyong WPMU DEV hosting plan ang bilang ng mga domain na idinaragdag mo
