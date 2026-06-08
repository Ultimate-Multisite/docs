---
title: Hostinger (hPanel) Integration
sidebar_position: 7
_i18n_hash: db876ad40b78d2075e03ba70fe7f541f
---
# Hostinger (hPanel) Integration

## Overview

Hostinger എന്നത് hPanel എന്ന് പേരുള്ള ഒരു ആധുനിക കൺട്രോൾ പാനലുള്ള ഒരു പ്രശസ്തമായ വെബ് ഹോസ്റ്റിംഗ് പ്രൊവൈഡർ ആണ്. Ultimate Multisite Hostinger integration ഉപയോഗിക്കുന്നതിലൂടെ, Ultimate Multisite-ഉം Hostinger-ൻ്റെ hPanel-ഉം തമ്മിൽ ഓട്ടോമാറ്റിക് ഡൊമെയ്ൻ സിങ്കിംഗ് സാധ്യമാവുന്നു. ഇത് നിങ്ങളുടെ WordPress admin-ൽ നിന്ന് തന്നെ ഡൊമെയ്ൻ മാപ്പിംഗുകളും സബ്ഡൊമെയ്‌നുകളും ഓട്ടോമാറ്റിക്കായി കൈകാര്യം ചെയ്യാൻ നിങ്ങളെ സഹായിക്കുന്നു.

## Features

- hPanel-ൽ ഓട്ടോമാറ്റിക് ആഡ്‌ഓൺ ഡൊമെയ്ൻ ക്രിയേഷൻ
- hPanel-ൽ ഓട്ടോമാറ്റിക് സബ്ഡൊമെയ്ൻ ക്രിയേഷൻ (സബ്ഡൊമെയ്ൻ മൾട്ടിസൈറ്റ് ഇൻസ്റ്റാളേഷനുകൾക്ക്)
- മാപ്പിംഗുകൾ ഡിലീറ്റ് ചെയ്യുമ്പോൾ ഡൊമെയ്ൻ റിമൂവൽ
- hPanel-ൻ്റെ ഡൊമെയ്ൻ മാനേജ്‌മെൻ്റ് API യുമായി തടസ്സമില്ലാത്ത സംയോജനം

## Requirements

Hostinger integration ഉപയോഗിക്കാൻ, നിങ്ങൾക്ക് ഇവ ആവശ്യമാണ്:

1. hPanel ആക്സസ് ഉള്ള ഒരു Hostinger അക്കൗണ്ട്
2. Hostinger-ൽ നിന്നുള്ള ഒരു API ടോക്കൺ
3. നിങ്ങളുടെ `wp-config.php` ഫയലിൽ നിർവചിച്ചിട്ടുള്ള താഴെ പറയുന്ന കോൺസ്റ്റൻ്റുകൾ:

```php
define('WU_HOSTINGER_API_TOKEN', 'your_hostinger_api_token');
define('WU_HOSTINGER_ACCOUNT_ID', 'your_hostinger_account_id');
```

ഓപ്ഷണലായി, നിങ്ങൾക്ക് ഇത് കൂടി നിർവചിക്കാവുന്നതാണ്:

```php
define('WU_HOSTINGER_API_URL', 'https://api.hostinger.com/v1'); // Default API endpoint
```

## Setup Instructions

### 1. Generate Your Hostinger API Token

1. നിങ്ങളുടെ Hostinger അക്കൗണ്ടിൽ ലോഗിൻ ചെയ്ത് hPanel ആക്സസ് ചെയ്യുക.
2. **Account Settings** → **API Tokens** എന്നതിലേക്ക് പോകുക.
3. **Create New Token** ക്ലിക്ക് ചെയ്യുക.
4. നിങ്ങളുടെ ടോക്കണിന് ഒരു വിവരണാത്മകമായ പേര് നൽകുക (ഉദാഹരണത്തിന്, "Ultimate Multisite").
5. ആവശ്യമായ പെർമിഷനുകൾ തിരഞ്ഞെടുക്കുക:
   - Domain management
   - Subdomain management
6. ജനറേറ്റ് ചെയ്ത ടോക്കൺ കോപ്പി ചെയ്ത് സുരക്ഷിതമായി സൂക്ഷിക്കുക.

### 2. Find Your Account ID

1. hPanel-ൽ, **Account Settings** → **Account Information** എന്നതിലേക്ക് പോകുക.
2. നിങ്ങളുടെ അക്കൗണ്ട് ID ഈ പേജിൽ കാണാം.
3. അടുത്ത ഘട്ടത്തിനായി ഈ ID കോപ്പി ചെയ്ത് സേവ് ചെയ്യുക.

### 3. Add Constants to wp-config.php

താഴെ പറയുന്ന കോൺസ്റ്റൻ്റുകൾ നിങ്ങളുടെ `wp-config.php` ഫയലിൽ ചേർക്കുക:

```php
define('WU_HOSTINGER_API_TOKEN', 'your_hostinger_api_token');
define('WU_HOSTINGER_ACCOUNT_ID', 'your_hostinger_account_id');
```

നിങ്ങളുടെ Hostinger അക്കൗണ്ട് വ്യത്യസ്തമായ ഒരു API endpoint ഉപയോഗിക്കുന്നുണ്ടെങ്കിൽ, നിങ്ങൾക്ക് അത് കസ്റ്റമൈസ് ചെയ്യാവുന്നതാണ്:

```php
define('WU_HOSTINGER_API_URL', 'https://api.hostinger.com/v1');
```

### 4. Enable the Integration

1. നിങ്ങളുടെ WordPress admin-ൽ, **Ultimate Multisite > Settings** എന്നതിലേക്ക് പോകുക.
2. **Domain Mapping** ടാബിലേക്ക് പോകുക.
3. **Host Integrations** എന്നതിലേക്ക് സ്ക്രോൾ ചെയ്യുക.
4. **Hostinger (hPanel)** integration ഓൺ ചെയ്യുക.
5. **Save Changes** ക്ലിക്ക് ചെയ്യുക.

## How It Works

### Addon Domains

Ultimate Multisite-ൽ ഒരു ഡൊമെയ്ൻ മാപ്പ് ചെയ്യുമ്പോൾ:

1. ഈ integration, ആ ഡൊമെയ്ൻ ഒരു ആഡ്‌ഓൺ ഡൊമെയ്നായി ചേർക്കുന്നതിനായി Hostinger-ൻ്റെ API-യിലേക്ക് ഒരു request അയയ്ക്കുന്നു.
2. ഡൊമെയ്ൻ നിങ്ങളുടെ റൂട്ട് ഡയറക്‌ടറിയിലേക്ക് പോയിൻ്റ് ചെയ്യാൻ കോൺഫിഗർ ചെയ്യപ്പെടുന്നു.
3. ഒരു ഡൊമെയ്ൻ മാപ്പിംഗ് നീക്കം ചെയ്യുമ്പോൾ, ആഡ്‌ഓൺ ഡൊമെയ്ൻ hPanel-ൽ നിന്ന് ഓട്ടോമാറ്റിക്കായി നീക്കം ചെയ്യപ്പെടുന്നു.

### Subdomains

സബ്ഡൊമെയ്ൻ മൾട്ടിസൈറ്റ് ഇൻസ്റ്റാളേഷനുകൾക്ക്, ഒരു പുതിയ സൈറ്റ് സൃഷ്ടിക്കുമ്പോൾ:

1. ഈ integration, മുഴുവൻ ഡൊമെയ്‌നിലെ സബ്ഡൊമെയ്ൻ ഭാഗം വേർതിരിക്കുന്നു.
2. സബ്ഡൊമെയ്ൻ ചേർക്കുന്നതിനായി Hostinger-ൻ്റെ API-യിലേക്ക് ഒരു request അയയ്ക്കുന്നു.
3. സബ്ഡൊമെയ്ൻ നിങ്ങളുടെ റൂട്ട് ഡയറക്‌ടറിയിലേക്ക് പോയിൻ്റ് ചെയ്യാൻ കോൺഫിഗർ ചെയ്യപ്പെടുന്നു.

## Important Notes

- ഈ integration നിങ്ങളുടെ അക്കൗണ്ടുമായി ആശയവിനിമയം നടത്താൻ Hostinger-ൻ്റെ REST API ഉപയോഗിക്കുന്നു.
- ഡൊമെയ്ൻ, സബ്ഡൊമെയ്ൻ മാനേജ്‌മെൻ്റിന് ആവശ്യമായ പെർമിഷനുകൾ നിങ്ങളുടെ API ടോക്കണിൽ ഉണ്ടായിരിക്കണം.
- DNS കോൺഫിഗറേഷൻ ഈ integration കൈകാര്യം ചെയ്യുന്നില്ല; ഡൊമെയ്‌നുകൾ ഇതിനകം നിങ്ങളുടെ Hostinger അക്കൗണ്ടിലേക്ക് പോയിൻ്റ് ചെയ്തിരിക്കണം.
- API requests സുരക്ഷിതമായി HTTPS വഴി yapılır.
- നിങ്ങളുടെ API ടോക്കൺ സുരക്ഷിതമായി സൂക്ഷിക്കുക, ഇത് ഒരിക്കലും പൊതുവായി പങ്കുവെക്കരുത്.

## Troubleshooting

### API Connection Issues

- നിങ്ങളുടെ API ടോക്കൺ ശരിയാണോ, കാലഹരണപ്പെട്ടിട്ടില്ലല്ലോ എന്ന് പരിശോധിക്കുക.
- നിങ്ങളുടെ അക്കൗണ്ട് ID ശരിയാണോ എന്ന് ഉറപ്പാക്കുക.
- ഡൊമെയ്ൻ മാനേജ്‌മെൻ്റിന് ആവശ്യമായ പെർമിഷനുകൾ നിങ്ങളുടെ API ടോക്കണിൽ ഉണ്ടോ എന്ന് ഉറപ്പാക്കുക.
- നിങ്ങളുടെ Hostinger അക്കൗണ്ട് സജീവവും നല്ല നിലയിലുള്ളതുമാണോ എന്ന് പരിശോധിക്കുക.

### Domain Not Added

- ഏതെങ്കിലും എറർ മെസ്സേജുകൾ Ultimate Multisite logs-ൽ ഉണ്ടോയെന്ന് പരിശോധിക്കുക.
- ആ ഡൊമെയ്ൻ നിങ്ങളുടെ Hostinger അക്കൗണ്ടിൽ ഇതിനകം ചേർത്തിട്ടില്ലെന്ന് ഉറപ്പാക്കുക.
- നിങ്ങളുടെ Hostinger അക്കൗണ്ടിന് ആഡ്‌ഓൺ ഡൊമെയ്‌നുകളുടെ ലിമിറ്റ് എത്തിയിട്ടില്ലെന്ന് ഉറപ്പാക്കുക.
- ഡൊമെയ്ൻ നിങ്ങളുടെ Hostinger nameservers-ലേക്ക് ശരിയായി പോയിൻ്റ് ചെയ്തിട്ടുണ്ടോ എന്ന് സ്ഥിരീകരിക്കുക.

### SSL Certificate Issues

- SSL സർട്ടിഫിക്കറ്റ് ഇഷ്യൂ ചെയ്യുന്നത് ഈ integration കൈകാര്യം ചെയ്യുന്നില്ല.
- Hostinger സാധാരണയായി AutoSSL വഴി സൗജന്യ SSL സർട്ടിഫിക്കറ്റുകൾ നൽകുന്നു.
- നിങ്ങൾക്ക് hPanel-ൽ **SSL/TLS** എന്നതിൻ കീഴിൽ നേരിട്ട് SSL സർട്ടിഫിക്കറ്റുകൾ കൈകാര്യം ചെയ്യാവുന്നതാണ്.
- അല്ലെങ്കിൽ, Hostinger-ൻ്റെ AutoSSL ഫീച്ചറിനൊപ്പം Let's Encrypt ഉപയോഗിക്കുക.

## Support

Hostinger integration സംബന്ധിച്ച കൂടുതൽ സഹായത്തിനായി, ദയവായി ഇത് കാണുക:

- [Hostinger API Documentation](https://support.hostinger.com/en/articles/4286-api-documentation)
- [Ultimate Multisite Documentation](/docs)
- [Ultimate Multisite Support](https://ultimatemultisite.com/support)
