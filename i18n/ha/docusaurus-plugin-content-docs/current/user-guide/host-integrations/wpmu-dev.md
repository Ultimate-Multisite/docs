---
title: Shigarwar WPMU DEV
sidebar_position: 4
_i18n_hash: 01cdaa5cf8aece1ca5c269d943e8a9e9
---
# Shigar WPMU DEV Integration {#wpmu-dev-integration}

## Nazari {#overview}
WPMU DEV wani WordPress platform ce mai girmawa ne dacewa da bayanan hosting, plugins, da ayyuka ga wuraren WordPress. Wannan haɗin yana ba damar samar da shigar domain da SSL certificate a kan Ultimate Multisite da hosting na WPMU DEV.

## Sifofi {#features}
- Shigar domain da aka yi aiki kai (Automatic domain syncing)
- Gudanar da SSL certificate
- Kokari mai yawa don tabbatar da SSL certificate

## Buƙatun {#requirements}
Wannan haɗin yana gano ko kana hosting kan WPMU DEV ne kuma yana amfani da API da ake samar da shi. Ba a buƙatar wajen shigar wani abu na ƙarin idan kana hosting kan WPMU DEV.

Wannan haɗin yana bincike akwai constant ɗin `WPMUDEV_HOSTING_SITE_ID`, wanda aka samar dashi lokacin hosting kan WPMU DEV.

## Shawara na Shigarwa {#setup-instructions}

### 1. Tabbatar da Hosting na WPMU DEV {#1-verify-wpmu-dev-hosting}

Idan kana hosting kan WPMU DEV, dole ne constant-suna da ake bukata sun shafi bayyana. Ka tabbata cewa:

1. Constant `WPMUDEV_HOSTING_SITE_ID` an samar a cikin muhimarka (environment)
2. Kana da shigar WPMU DEV mai aiki tare da samun API access

### 2. Shigar Haɗin {#2-enable-the-integration}

1. A cikin admin na WordPress, ka je Ultimate Multisite > Settings
2. Ka tura zuwa tab ɗin "Domain Mapping" (Saurin Domain)
3. Ka sauka wajen "Host Integrations" (Haɗin Hosting)
4. Ka samar da shigar WPMU DEV
5. Ka danna "Save Changes" (Ajiye Canjin)

## Yadda yake Aiki {#how-it-works}

### Shigar Domain {#domain-syncing}

Lokacin da aka yi mapping na domain a Ultimate Multisite:

1. Haɗin yana amfani da API na WPMU DEV don ƙara domain ɗin zuwa asusun hosting ɗinka
2. Yana kuma ƙara www sashi na domain ɗin kai tsaye
3. WPMU DEV tana gudanar da tsarin domain da samar da SSL certificate

### Gudanar da SSL Certificate {#ssl-certificate-management}

Shigar da shawarar an ƙirƙirar wannan haɗin, don ƙara yawa daga ƙoƙarin tabbatar SSL certificate ga wurin WPMU DEV hosting, saboda na iya ɗaukar lokaci don samar da SSL certificates kuma a sanya su. A matsayin asali, zai gwada zuwa 10 lokacin tabbatar SSL certificate, shi ne ya bambanta da ƙoƙarin asali na 5.

## Shawara Muhimman {#important-notes}

### Cire Domain {#domain-removal}
A yanzu, WPMU DEV API ba shi da hanya don cire domain. Idan aka cire haɗin domain a Ultimate Multisite, domain zai ci gaba a cikin asusun WPMU DEV hosting ɗinka. Zaka buƙaci cire shi ne kai daga dashboard na WPMU DEV hosting idan ya zama dole.

### Tabbatar API {#api-authentication}
Wannan haɗin yana amfani da kunci (API key) na WPMU DEV wadda an ajiye a cikin database ɗinka na WordPress a matsayin option `wpmudev_apikey`. Wannan yana samar ne ta zahiri lokacin da kake haɗa wajen wurin ka da WPMU DEV.

## Magance Matala (Troubleshooting) {#troubleshooting}

### Matalan Haɗin API {#api-connection-issues}
- Ka tabbata cewa wajen ka ya shafi WPMU DEV cikin sauƙi.
- Bincika ko option `wpmudev_apikey` an sanya a database ɗinka na WordPress.
- Ka tabbatar cewa samun ku (membership) na WPMU DEV yana aiki.

### Matalan SSL Certificate {#ssl-certificate-issues}
- WPMU DEV na iya ɗaukar lokaci don samar da SSL certificates (yawanci 5-15 minti).
- An shirya wannan haɗin don gwada zuwa 10 lokacin tabbatar SSL certificates.
- Idan ba a samar da SSL certificates ba bayan ƙoƙarin da yawa, ka tuntuɓi tallafin WPMU DEV.

### Domain Ba Ya Tamba {#domain-not-added}
- Bincika logs na Ultimate Multisite don wata saƙon mutunta (error messages).
- Ka tabbatar cewa domain bai shafi a WPMU DEV ba.
- Ka tabbatar cewa tsarin hosting na WPMU DEV yana dac da yawan domains da kake ƙara.
