---
title: Integrasyon sa WPMU DEV
sidebar_position: 4
_i18n_hash: 01cdaa5cf8aece1ca5c269d943e8a9e9
---
# Integrasyon sa WPMU DEV

## Panan-aw (Overview)
Ang WPMU DEV kay usa ka kompleto nga WordPress platform nga naghatag og hosting, plugins, ug mga serbisyo para sa mga WordPress site. Kini nga integrasyon nagtugot sa awtomatikong pag-sync sa domain ug pagdumala sa SSL certificate tali sa Ultimate Multisite ug sa hosting sa WPMU DEV.

## Mga Tampo (Features)
- Awtomatikong pag-sync sa domain
- Pagdumala sa SSL certificate
- Dugang mga pagsulay sa pag-verify sa SSL certificate

## Kinahanglanon (Requirements)
Ang integrasyon awtomatikong makadiskubre kung nag-host ka sa WPMU DEV ug mogamit sa built-in API. Walay dugang setup nga kinahanglan kon nag-host ka sa WPMU DEV.

Ang integrasyon mag-check kung naa ba ang `WPMUDEV_HOSTING_SITE_ID` constant, nga awtomatikong gi-define kung nag-host ka sa WPMU DEV.

## Mga Instruksyon sa Setup (Setup Instructions)

### 1. I-verify ang WPMU DEV Hosting

Kon nag-host ka sa WPMU DEV, ang mga kinahanglanon nga constants dapat na ma-define. Siguraduha nga:

1. Ang `WPMUDEV_HOSTING_SITE_ID` constant ma-define sa imong environment
2. Aduna kay aktibo nga membership sa WPMU DEV nga adunay API access

### 2. I-enable ang Integrasyon

1. Sa imong WordPress admin, adto sa Ultimate Multisite > Settings
2. Mag-navigate sa "Domain Mapping" tab
3. Mag-scroll pababa ngadto sa "Host Integrations"
4. I-enable ang WPMU DEV integration
5. I-click ang "Save Changes"

## Unsaon Kini Paglihok (How It Works)

### Domain Syncing

Kon ma-mapa (mapped) ang usa ka domain sa Ultimate Multisite:

1. Ang integrasyon mogamit sa WPMU DEV API aron iapil ang domain sa imong hosting account
2. Awtomatikong idugang usab niini ang www version sa domain
3. Ang WPMU DEV maoy magdumala sa configuration sa domain ug pag-issue sa SSL certificate

### Pagdumala sa SSL Certificate

Ang integration gi-configure aron mapataas ang gidaghanon sa mga pag-attempt sa SSL certificate verification para sa WPMU DEV hosting, kay basin magkinahanglan og gamay nga panahon para ma-issue ug ma-install ang mga SSL certificate. Sa default, kini mosulay hangtod 10 ka beses alang sa SSL certificate verification, ikompara sa standard nga 5 ka attempts.

## Importante nga Mga Nota

### Pag-alis sa Domain (Domain Removal)

Karon, wala pa gihatag sa WPMU DEV API ang pamaagi aron ma-remove ang mga domain. Kung alisi ninyo ang domain mapping sa Ultimate Multisite, magpabilin gihapon ang domain sa inyong WPMU DEV hosting account. Kinahanglan ninyong i-manually kining alisi gikan sa WPMU DEV hosting dashboard kung kinahanglan ninyo.

### API Authentication

Ang integration naggamit sa WPMU DEV API key nga gitago sa inyong WordPress database isip `wpmudev_apikey` option. Kini awtomatikong gi-set up kung konektado ninyo ang inyong site ngadto sa WPMU DEV.

## Pag-troubleshoot (Troubleshooting)

### Mga Isyu sa Koneksyon sa API
- Siguraduhon nga maayo ang koneksyon sa inyong site ngadto sa WPMU DEV
- Siguraduhon nga ang option nga `wpmudev_apikey` gitakda sa inyong WordPress database
- Siguraduhon nga aktibo ang inyong membership sa WPMU DEV

### Mga Isyu sa SSL Certificate
- Ang WPMU DEV basin magkinahanglan og gamay nga panahon aron ma-issue ang mga SSL certificate (kasagaran 5-15 minutos)
- Ang integration gi-configure aron mag-check hangtod 10 ka beses alang sa mga SSL certificates
- Kung wala pa gipahimo ang SSL certificates human sa daghang pag-attempt, kontaka ang WPMU DEV support

### Domain Wala Gitabang (Domain Not Added)
- Siguroha nga tan-awon ninyo ang Ultimate Multisite logs para sa bisan unsang error messages
- Siguraduhon nga wala pa kini gidala sa WPMU DEV
- Siguraduhon nga ang inyong WPMU DEV hosting plan nagasuporta sa gidaghanon sa mga domain nga inyong gidala
