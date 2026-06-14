---
title: Ubwumvikane bw'cPanel
sidebar_position: 5
_i18n_hash: ba79fa3cffb0f29c4eda9bdf59244a2f
---
# Urugererine n'ibereye na cPanel

## Inshuro (Overview)
cPanel ni uyuha mu gihe cyo gishobora gukoreshwa cyane n'ubwumvikane bwo hosting (shared and dedicated hosting). Iyi nshingiro yitwa "integration" (ugushyiramo) ituma uburyo bw'ibanga bya domain (domain syncing) bukurikirana hagati ya Ultimate Multisite na cPanel. Ibi bituma wumva gukora automatikira ubwumvikane bwo domain aliases n'subdomains ku muryango wawe w'cPanel.

## Icyiciro (Features)
- Gukoresha automatikira ubutaka bwo addon domain mu cPanel
- Gukoresha automatikira subdomain mu cPanel (kugira ngo ubwumvikane bwo subdomain multisite yitwa)
- Guhagarika domain iyo uburyo bwo gushyiramo bya mapping byihagarika

## Icyemezo (Requirements)
Icyiciro cy'ibyo byo mu gihe cy'ubwumvikane bwowe (wp-config.php) bifite uburyo bwa kumenya:

```php
define('WU_CPANEL_USERNAME', 'your_cpanel_username');
define('WU_CPANEL_PASSWORD', 'your_cpanel_password');
define('WU_CPANEL_HOST', 'your_cpanel_host');
```

Urugererine, uburyo bwo gushyiramo:

```php
define('WU_CPANEL_PORT', 2083); // Ubutaka bwa mbere ni 2083
define('WU_CPANEL_ROOT_DIR', '/public_html'); // Uburyo bwo kubyara (root directory) ni /public_html
```

## Inshingiro yo gukora (Setup Instructions)

### 1. Gukoresha ubutaka bwawe bwo cPanel

1. Shaka ubutaka bwa username n'password bwo cPanel ku gihe cyo gushyiramo (hosting provider).
2. Shaka uburyo bwo host wa cPanel (gusa, `cpanel.yourdomain.com` cyangwa `yourdomain.com:2083`).

### 2. Gufasha ibyo byo mu wp-config.php

Shyira ibi byo mu file yawe ya `wp-config.php`:

```php
define('WU_CPANEL_USERNAME', 'your_cpanel_username');
define('WU_CPANEL_PASSWORD', 'your_cpanel_password');
define('WU_CPANEL_HOST', 'your_cpanel_host');
```

Urugererine, uburyo bwo gukoresha ubutaka n'uburyo bwo kubyara (root directory):

```php
define('WU_CPANEL_PORT', 2083); // Shobora guhindura iyo cPanel yishyira ubutaka runaka
define('WU_CPANEL_ROOT_DIR', '/public_html'); // Shobora guhindura iyo uburyo bwo kubyara ni runaka runaka
```

### 3. Gukoresha Icyishwe (Enable the Integration)

1. Muze mu admin ya WordPress, twa gukora Ultimate Multisite > Settings
2. Gukora ku "Domain Mapping" tab
3. Gukoresha ku "Host Integrations"
4. Koresha cPanel integration
5. Gukora "Save Changes"

## Uburyo Bwo Gutera

### Addon Domains (Domains Zishobora Kubyara)

Icyiza cyo domain yashoboraga mu Ultimate Multisite:

1. Integration ituma umusanzu ku API ya cPanel kugira ngo yiyerekeze uko domain yashoboraga mu gihe cy'addon domain
2. Domain yishobora gukoreshwa kugira ngo yitoke ku directory yawe (root directory)
3. Iyo uburyo bwo gutera domain mapping bishoborwa, integration ituma addon domain iherereye kuri cPanel

### Subdomains (Subdomains)

Kugira ngo ubushobozi bw'multisite cyangwa subdomains, iyo hari site yashoboraga mu gihe cy'subdomain:

1. Integration ituma igice cy'subdomain ku domain yakiriwe
2. Ituma umusanzu ku API ya cPanel kugira ngo yiyerekeze uko subdomain yishoboraga
3. Subdomain yishobora gukoreshwa kugira ngo yitoke ku directory yawe (root directory)

## Inama Zikomeye

- Integration ituma amakuru no kumenya uburyo bwo gutera cPanel yawe
- Icyemezo cy'addon domains n'subdomains mu cPanel cyaba hari ubwakozi bwiza
- Ubushobozi bwa hosting bishobora gukomeza ko hari imyisobanuro y'addon domains cyangwa subdomains ushobora gukora

- Integration itera uburyo bwo gutera DNS; uza kuba wumva ngo uza gukoresha domain yawe ku IP address ya server yawe

## Gutera Icyemezo (Troubleshooting)

### Icyemezo cy'API Connection Issues
- Gushyira umwanya ko username n'ubwoko bwa cPanel yashobora kuba byiza
- Gushyira umwanya ko host yawe ya cPanel yishoboraga gukoreshwa kandi yashobora gufite uburenganzira
- Kugira ngo uburyo bwo gutera cPanel cyaba hari uburenganzira bwiza

### Domain Itarirwe
- Gushyira umwanya ko hari amakuru mu Ultimate Multisite yashoboraga gukora
- Kumenya ko domain itarirwe kuri cPanel
- Kugira ngo uburyo bwo gutera CPanel cyaba hari uburenganzira bwiza

### Icy Certificate (SSL) Issues

- Umucozi (integration) ntabona uburyo bwo gukoresha cyangwa gukora SSL certificate.
- Uko wumva, ugomba gukoresha amafungura (tools) ya cPanel za SSL/TLS cyangwa ikoresha AutoSSL feature kugira ngo utondeza SSL certificates ku domain zawe.
- Cyangwa, uba mushobora gukoresha umusaruro n'ibindi (service) nk'Let's Encrypt na AutoSSL ya cPanel.
