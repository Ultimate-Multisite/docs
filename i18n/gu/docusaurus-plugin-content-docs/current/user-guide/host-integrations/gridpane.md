---
title: GridPane એકીકરણ
sidebar_position: 13
_i18n_hash: b0a6427285411feb767e828911cdd794
---
# GridPane Integration

## Overview
GridPane એ ગંભીર WordPress professionals માટે બનાવેલું વિશેષ WordPress hosting control panel છે. આ integration Ultimate Multisite અને GridPane વચ્ચે automatic domain syncing અને SSL certificate management સક્ષમ કરે છે.

## Features
- Automatic domain syncing
- SSL certificate management
- SUNRISE constant નું automatic configuration

## Requirements
તમારી `wp-config.php` file માં નીચેના constants define કરવા જરૂરી છે:

```php
define('WU_GRIDPANE', true);
define('WU_GRIDPANE_API_KEY', 'your_api_key');
define('WU_GRIDPANE_SERVER_ID', 'your_server_id');
define('WU_GRIDPANE_APP_ID', 'your_app_id');
```

## Setup Instructions

### 1. તમારા GridPane API Credentials મેળવો

1. તમારા GridPane dashboard માં login કરો
2. "Settings" > "API" પર જાઓ
3. જો તમારી પાસે API key ન હોય તો generate કરો
4. તમારી API key copy કરો

### 2. તમારા Server અને Site IDs મેળવો

1. તમારા GridPane dashboard માં, "Servers" પર જાઓ
2. જે server પર તમારી WordPress multisite hosted છે તે select કરો
3. Server ID નોંધી લો (URL માં અથવા server details page પર દેખાય છે)
4. "Sites" પર જાઓ અને તમારી WordPress site select કરો
5. Site ID નોંધી લો (URL માં અથવા site details page પર દેખાય છે)

### 3. wp-config.php માં Constants ઉમેરો

તમારી `wp-config.php` file માં નીચેના constants ઉમેરો:

```php
define('WU_GRIDPANE', true);
define('WU_GRIDPANE_API_KEY', 'your_api_key');
define('WU_GRIDPANE_SERVER_ID', 'your_server_id');
define('WU_GRIDPANE_APP_ID', 'your_site_id');
```

### 4. Integration Enable કરો

1. તમારા WordPress admin માં, Ultimate Multisite > Settings પર જાઓ
2. "Domain Mapping" tab પર navigate કરો
3. "Host Integrations" સુધી scroll down કરો
4. GridPane integration enable કરો
5. "Save Changes" પર click કરો

## આ કેવી રીતે કામ કરે છે

જ્યારે Ultimate Multisite માં domain map થાય છે:

1. Integration GridPane ની API ને request મોકલે છે જેથી તમારી site માં domain ઉમેરાય
2. GridPane automatically SSL certificate provisioning handle કરે છે
3. જ્યારે domain mapping remove થાય છે, ત્યારે integration GridPane માંથી domain remove કરી દે છે

આ integration તમારી wp-config.php file માં SUNRISE constant ને પણ automatically handle કરે છે, જે domain mapping યોગ્ય રીતે કામ કરવા માટે જરૂરી છે.

## SUNRISE Constant Management

GridPane integration ની એક unique feature એ છે કે તે GridPane ના પોતાના domain mapping system સાથે conflicts ટાળવા માટે wp-config.php માં SUNRISE constant ને automatically revert કરે છે. આ ensure કરે છે કે બંને systems કોઈ issues વિના સાથે કામ કરી શકે.

## Troubleshooting

### API Connection Issues
- ખાતરી કરો કે તમારી API key સાચી છે
- ચકાસો કે તમારા server અને site IDs સાચા છે
- ખાતરી કરો કે તમારા GridPane account પાસે જરૂરી permissions છે

### SSL Certificate Issues
- GridPane ને SSL certificates issue કરવામાં થોડો સમય લાગી શકે છે
- ચકાસો કે તમારા domains તમારા server ના IP address તરફ યોગ્ય રીતે point થઈ રહ્યા છે
- તમારી site માટે GridPane SSL settings check કરો

### Domain Not Added
- કોઈ error messages માટે Ultimate Multisite logs check કરો
- ચકાસો કે domain પહેલેથી GridPane માં ઉમેરાયેલ નથી
- ખાતરી કરો કે તમારા domain ના DNS records યોગ્ય રીતે configure થયેલા છે
