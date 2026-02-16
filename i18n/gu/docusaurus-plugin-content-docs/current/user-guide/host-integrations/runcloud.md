---
title: RunCloud એકીકરણ
sidebar_position: 13
_i18n_hash: 05a61d871e286ae6c87bc7653377dee4
---
# RunCloud Integration

## Overview
RunCloud એ cloud-based server management platform છે જે તમને તમારા પોતાના cloud servers પર web applications સરળતાથી deploy અને manage કરવાની મંજૂરી આપે છે. આ integration Ultimate Multisite અને RunCloud વચ્ચે automatic domain syncing અને SSL certificate management enable કરે છે.

## Features
- Automatic domain syncing
- SSL certificate management
- Mappings delete થાય ત્યારે domain removal

## Requirements
તમારી `wp-config.php` file માં નીચેના constants define કરવા જરૂરી છે:

```php
define('WU_RUNCLOUD_API_KEY', 'your_api_key');
define('WU_RUNCLOUD_API_SECRET', 'your_api_secret');
define('WU_RUNCLOUD_SERVER_ID', 'your_server_id');
define('WU_RUNCLOUD_APP_ID', 'your_app_id');
```

## Setup Instructions

### 1. તમારા RunCloud API Credentials મેળવો

1. તમારા RunCloud dashboard માં log in કરો
2. "User Profile" પર જાઓ (ઉપર-જમણા ખૂણામાં તમારી profile picture પર click કરો)
3. Menu માંથી "API" select કરો
4. જો તમારી પાસે પહેલેથી ન હોય તો "Generate API Key" પર click કરો
5. તમારી API Key અને API Secret copy કરો

### 2. તમારા Server અને App IDs મેળવો

1. તમારા RunCloud dashboard માં, "Servers" પર જાઓ
2. જે server પર તમારી WordPress multisite hosted છે તે select કરો
3. Server ID URL માં દેખાય છે: `https://manage.runcloud.io/servers/{SERVER_ID}`
4. "Web Applications" પર જાઓ અને તમારી WordPress application select કરો
5. App ID URL માં દેખાય છે: `https://manage.runcloud.io/servers/{SERVER_ID}/apps/{APP_ID}`

### 3. wp-config.php માં Constants ઉમેરો

તમારી `wp-config.php` file માં નીચેના constants ઉમેરો:

```php
define('WU_RUNCLOUD_API_KEY', 'your_api_key');
define('WU_RUNCLOUD_API_SECRET', 'your_api_secret');
define('WU_RUNCLOUD_SERVER_ID', 'your_server_id');
define('WU_RUNCLOUD_APP_ID', 'your_app_id');
```

### 4. Integration Enable કરો

1. તમારા WordPress admin માં, Ultimate Multisite > Settings પર જાઓ
2. "Domain Mapping" tab પર navigate કરો
3. "Host Integrations" સુધી scroll down કરો
4. RunCloud integration enable કરો
5. "Save Changes" પર click કરો

## આ કેવી રીતે કામ કરે છે

જ્યારે Ultimate Multisite માં domain map થાય છે:

1. Integration તમારી application માં domain ઉમેરવા માટે RunCloud ના API ને request મોકલે છે
2. જો domain successfully ઉમેરાઈ જાય, તો integration SSL certificates પણ redeploy કરશે
3. જ્યારે domain mapping remove થાય, ત્યારે integration RunCloud માંથી domain remove કરશે

Subdomain installations માટે, જ્યારે તમારા network માં નવી sites ઉમેરાય ત્યારે integration automatically RunCloud માં subdomains create કરવાનું handle કરશે.

## Troubleshooting

### API Connection Issues
- ખાતરી કરો કે તમારા API credentials સાચા છે
- ચકાસો કે તમારા server અને app IDs સાચા છે
- ખાતરી કરો કે તમારા RunCloud account પાસે જરૂરી permissions છે

### SSL Certificate Issues
- RunCloud ને SSL certificates issue કરવામાં થોડો સમય લાગી શકે છે
- ખાતરી કરો કે તમારા domains તમારા server ના IP address તરફ યોગ્ય રીતે point થઈ રહ્યા છે
- તમારી application માટે RunCloud SSL settings ચકાસો

### Domain Not Added
- કોઈ error messages માટે Ultimate Multisite logs ચકાસો
- ખાતરી કરો કે domain પહેલેથી RunCloud માં ઉમેરાયેલ નથી
- ખાતરી કરો કે તમારો RunCloud plan multiple domains ને support કરે છે
