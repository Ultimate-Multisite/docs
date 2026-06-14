---
title: Entegrasyon Hostinger (hPanel)
sidebar_position: 7
_i18n_hash: db876ad40b78d2075e03ba70fe7f541f
---
# Entegrasyon Hostinger (hPanel)

## Aperçu

Hostinger se yon sèvis wèb ki popilè ak yon panèl kontwòl modèn ki rele hPanel. Entegrasyon Ultimate Multisite Hostinger la pèmèt senkronizasyon otomatik nan domèn yo ant Ultimate Multisite ak hPanel Hostinger, sa k ap pèmèt ou jere mapaj domèn (domain mappings) ak sous-domèn (subdomains) otomatikman dirèkteman nan admin WordPress ou a.

## Fonctionnalite

- Kreasyon otomatik modèl domèn (addon domain) nan hPanel
- Kreasyon otomatik sous-domèn nan hPanel (pou enstalasyon multisite sous-domèn)
- Retire domèn lè mapaj yo deletee
- Entegrasyon senplis ak API jere domèn hPanel la

## Requis

Pou itilize entegrasyon Hostinger la, ou bezwen:

1. Yon kont Hostinger ki gen aksè nan hPanel
2. Yon token API soti nan Hostinger
3. Konstanta sa yo defann nan fichye `wp-config.php` ou a:

```php
define('WU_HOSTINGER_API_TOKEN', 'token_api_hostinger_ou');
define('WU_HOSTINGER_ACCOUNT_ID', 'id_kont_hostinger_ou');
```

Opsyonèlman, ou ka tou defann sa:

```php
define('WU_HOSTINGER_API_URL', 'https://api.hostinger.com/v1'); // Pwen API de fèt la a
```

## Enstriksyon Konfigirasyon

### 1. Jere Token API Hostinger ou a

1. Log in nan kont Hostinger ou an epi ale nan hPanel
2. Ale nan **Account Settings** → **API Tokens**
3. Klike sou **Create New Token** (Kreye Nouvo Token)
4. Bay non deskriptif pou token ou a (pa egzanp, "Ultimate Multisite")
5. Chwazi pèmisyon ki nesesè yo:
   - Domain management (Jere domèn)
   - Subdomain management (Jere sous-domèn)
6. Kopye token ou a epi konsève l an sekirite

### 2. Jwenn ID Kont ou a

1. Nan hPanel, ale nan **Account Settings** → **Account Information**
2. ID Kont ou a ap parèt sou paj sa a
3. Kopye epi konsève ID sa a pou etap ankò

### 3. Ajoute Konstanta yo nan wp-config.php

Ajoute konstanta sa yo nan fichye `wp-config.php` ou a:

```php
define('WU_HOSTINGER_API_TOKEN', 'token API Hostinger ou');
define('WU_HOSTINGER_ACCOUNT_ID', 'id compte Hostinger ou');
```

Si kont Hostinger ou ou ap itilize yon lòt endpoint API, ou ka personalize li:

```php
define('WU_HOSTINGER_API_URL', 'https://api.hostinger.com/v1');
```

### 4. Kounye Enable Integrasyon an

1. Nan admin WordPress ou a, ale nan **Ultimate Multisite > Settings**
2. Navige nan onglet **Domain Mapping** (Mapeman Domèn)
3. Desann pou **Host Integrations** (Integrasyon Host)
4. Active integrasyon **Hostinger (hPanel)**
5. Klike sou **Save Changes** (Konserve Chanjman yo)

## Kijan Li Travay

### Addon Domains (Domèn Ajoute)

Lè ou map yon domèn nan Ultimate Multisite:

1. Integrasyon an voye yon demann pou API Hostinger la pou ajoute demèn sa a kòm yon addon domain
2. Demèn nan configure pou li pointer nan dirèktwa prensipal ou a (root directory)
3. Lè yon mapaj demèn retire, integrasyon an otomatikman retire addon domain sa a nan hPanel

### Subdomains (Sous-domèn)

Pou enstalasyon multisite sous-domèn, lè yon nou sit ki kreye:

1. Integrasyon an ekstrak pati sous-domèn nan domèn konplè a
2. Li voye yon demann pou API Hostinger la pou ajoute sous-domèn sa a
3. Sous-domèn sa a configure pou li pointer nan dirèktwa prensipal ou a

## Nòt Enpòtan

- Integrasyon an itilize REST API Hostinger pou kominike ak kont ou
- Token API ou a dwe gen pèmisyon nesesè pou jere demèn ak sous-domèn
- Integrasyon an pa jere konfigirasyon DNS; demèn yo dwe deja pointer nan kont Hostinger ou a
- Demann API yo fèt an sekirite sou HTTPS
- Kenbe token API ou a an sekirite epi pa pataje li piblikman

## Resous (Troubleshooting)

### API Connection Issues (Pwoblèm Koneksyon API)

- Verifye ke token API ou a deja, epi li pa expire
- Kontwe ke ID Compte ou a deja
- Asire ke token API ou gen les permision neses pou jere domaine
- Asire ke compte Hostinger ou active e byen

### Domaine Pa Ajoute

- Kontwe nan logs Ultimate Multisite pou okenn mesaj erè
- Verifye ke domaine la pa deja ajoute nan compte Hostinger ou a
- Asire ke compte Hostinger ou pa rive nan limit li pou addon domains
- Konfime ke domaine la ap pointer byen nan nameserver Hostinger ou a

### Problèm Sersèt SSL

- Integrasyon an pa jere emisyon sersèt SSL
- Hostinger souvan bay sersèt SSL gratis atravè AutoSSL
- Ou ka jere sersèt SSL dirèkteman nan hPanel anba **SSL/TLS**
- Oswa, itilize Let's Encrypt ak fonksyon AutoSSL Hostinger la

## Sipòt

Pou plis èd ak integrasyon Hostinger la, tanpri referans:

- [Hostinger API Documentation](https://support.hostinger.com/en/articles/4286-api-documentation)
- [Ultimate Multisite Documentation](/docs)
- [Ultimate Multisite Support](https://ultimatemultisite.com/support)
