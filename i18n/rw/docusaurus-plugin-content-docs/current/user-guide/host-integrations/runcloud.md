---
title: Urugero rw'Umuco wa RunCloud
sidebar_position: 13
_i18n_hash: 05a61d871e286ae6c87bc7653377dee4
---
# Urugendo n'Umuco (RunCloud Integration)

## Urugero (Overview)
RunCloud ni platform y'uko gukoresha uburyo bwo gutera no gukoresha web applications ku server zawe mu cloud. Iyi gukoresha gishobora guhindura domain (domain syncing) n'ubwumvikane bw'SSL certificate management hagati ya Ultimate Multisite na RunCloud.

## Icyiciro (Features)
- Urugero rwo gutera domain (Automatic domain syncing)
- Ubwumvikane bwo SSL certificate management
- Gutera domain iyo uburyo bwo gukoresha mappings (Domain removal when mappings are deleted)

## Amakuru (Requirements)
Icyemezo cy'ibyo byiza (constants) bifite mu file yawe `wp-config.php`:

```php
define('WU_RUNCLOUD_API_KEY', 'your_api_key');
define('WU_RUNCLOUD_API_SECRET', 'your_api_secret');
define('WU_RUNCLOUD_SERVER_ID', 'your_server_id');
define('WU_RUNCLOUD_APP_ID', 'your_app_id');
```

## Inama yo gukora (Setup Instructions)

### 1. Gukoresha API Credentials za RunCloud

1. Gukoresha (Log in) ku dashboard yawe ya RunCloud
2. Gukoresha "User Profile" (gukoresha ishyura yawe mu kigwaro cy'umutwe mu kigwaro cy'urwo rurimi)
3. Gukoresha "API" ku menu
4. Gukoresha "Generate API Key" iyo ntawe ufite (if you don't already have one)
5. Gukoresha API Key na API Secret yawe

### 2. Gukoresha Server ID n'App ID zawe

1. Mu dashboard yawe ya RunCloud, gukoresha "Servers"
2. Gukoresha server aho WordPress multisite yawe yitwa (hosted)
3. Umuco wa Server ID ukenewe mu URL: `https://manage.runcloud.io/servers/{SERVER_ID}`
4. Gukoresha "Web Applications" na gukoresha application yawe ya WordPress
5. App ID ukenewe mu URL: `https://manage.runcloud.io/servers/{SERVER_ID}/apps/{APP_ID}`

### 3. Gutera constants ku wp-config.php

Gusubira ibyo byiza (constants) byo mu file yawe `wp-config.php`:

```php
define('WU_RUNCLOUD_API_KEY', 'your_api_key');
define('WU_RUNCLOUD_API_SECRET', 'your_api_secret');
define('WU_RUNCLOUD_SERVER_ID', 'your_server_id');
define('WU_RUNCLOUD_APP_ID', 'your_app_id');
```

### 4. Gutera Urugero (Enable the Integration)

1. Muze mu admin ya WordPress, gukora Ultimate Multisite > Settings
2. Gukoresha "Domain Mapping" tab
3. Gushyera ku "Host Integrations"
4. Kora RunCloud integration
5. Kora "Save Changes"

## Uburyo Bwo Kwibikorwa

Icyiza cyo domain yashyirwaho mu Ultimate Multisite:

1. Integration ituma umusanzu ku API ya RunCloud kugira ngo yishime domain yawe mu application yawe
2. Niba domain yashyirwaho neza, integration izakora SSL certificates zikoreshwa cyane
3. Iyo uburyo bwo gukoresha domain byihagarwa, integration itabaza domain y'ibyo RunCloud

Kugira ngo ubone subdomains, integration izakora uko subdomains zizera mu RunCloud ibyo nshya yawe yakoresheje ku network yawe.

## Gukemura Ibibazo (Troubleshooting)

### Ibibazo Byo Kumenya API Connection
- Shobora gushyira umwujiza w'API wako ni wiza cyangwa hari ikibazo
- Shobora gushyira umusanzu w'server yawe n'app IDs zikoreshwa mu buryo bwiza
- Shobora kwerekana ko account yawe ya RunCloud ifite uburyo bwo gukora ibyo byose

### Ibibazo Byo SSL Certificate
- RunCloud yashobora guteka igihe kire cyane kugira ngo ite SSL certificates
- Shobora kwerekana ko domain zikoreshwa zizera neza IP address yawe ya server
- Shobora gushyira umusanzu w'SSL mu RunCloud ku application yawe

### Domain Yashya Yashirwaho
- Shobora kumenya logs za Ultimate Multisite kugira ngo ubonde ibindi byo bikoreshwa
- Shobora kwerekana ko domain yashyirwaho neza mu RunCloud
- Shobora gushyira umusanzu w'RunCloud ukoresheje subdomains zikoreshwa
