---
title: Integrare Cloudflare
sidebar_position: 16
_i18n_hash: 41bd975db7c89a129f5f880b439a8f2f
---
# Integrarea cu Cloudflare

## Prezentare generală
Cloudflare este un furnizor de top pentru rețele de distribuție a conținutului (CDN) și securitate, care ajută la protejarea și accelerarea site-urilor web. Această integrare permite gestionarea automată a domeniilor între Ultimate Multisite și Cloudflare, în special pentru instalările multisite bazate pe subdomenii.

## Funcționalități
- Creare automată a subdomeniilor în Cloudflare
- Suport pentru subdomenii cu proxy
- Gestionarea înregistrărilor DNS
- Afișare îmbunătățită a înregistrărilor DNS în panoul de administrare Ultimate Multisite

## Cerințe
Următoarele constante trebuie definite în fișierul `wp-config.php`:

```php
define('WU_CLOUDFLARE_API_KEY', 'your_api_key');
define('WU_CLOUDFLARE_ZONE_ID', 'your_zone_id');
```

## Instrucțiuni de configurare

### 1. Obține cheia API Cloudflare

1. Autentifică-te în panoul de control Cloudflare
2. Accesează „My Profile" (dă clic pe adresa ta de email în colțul din dreapta sus)
3. Selectează „API Tokens" din meniu
4. Creează un token API nou cu următoarele permisiuni:
   - Zone.Zone: Read
   - Zone.DNS: Edit
5. Copiază tokenul API

### 2. Obține Zone ID-ul

1. În panoul de control Cloudflare, selectează domeniul pe care vrei să-l folosești
2. Zone ID-ul este vizibil în tab-ul „Overview", în bara laterală din dreapta, sub „API"
3. Copiază Zone ID-ul

### 3. Adaugă constantele în wp-config.php

Adaugă următoarele constante în fișierul `wp-config.php`:

```php
define('WU_CLOUDFLARE_API_KEY', 'your_api_token');
define('WU_CLOUDFLARE_ZONE_ID', 'your_zone_id');
```

### 4. Activează integrarea

1. În panoul de administrare WordPress, accesează Ultimate Multisite > Settings
2. Navighează la tab-ul „Domain Mapping"
3. Derulează în jos până la „Host Integrations"
4. Activează integrarea Cloudflare
5. Dă clic pe „Save Changes"

## Cum funcționează

### Gestionarea subdomeniilor

Când se creează un site nou într-o instalare multisite cu subdomenii:

1. Integrarea trimite o cerere către API-ul Cloudflare pentru a adăuga o înregistrare CNAME pentru subdomeniu
2. Subdomeniul este configurat implicit să treacă prin proxy-ul Cloudflare (acest lucru poate fi modificat cu filtre)
3. Când un site este șters, integrarea va elimina subdomeniul din Cloudflare

### Afișarea înregistrărilor DNS

Integrarea îmbunătățește afișarea înregistrărilor DNS în panoul de administrare Ultimate Multisite prin:

1. Preluarea înregistrărilor DNS direct din Cloudflare
2. Afișarea informației dacă înregistrările folosesc sau nu proxy
3. Prezentarea de informații suplimentare despre înregistrările DNS

## Note importante

Conform actualizărilor recente ale Cloudflare, proxy-ul pentru wildcard este acum disponibil pentru toți clienții. Acest lucru înseamnă că integrarea Cloudflare este mai puțin critică pentru instalările multisite cu subdomenii decât era înainte, deoarece poți configura pur și simplu o înregistrare DNS wildcard în Cloudflare.

## Depanare

### Probleme de conexiune la API
- Verifică dacă tokenul API este corect și are permisiunile necesare
- Asigură-te că Zone ID-ul este corect
- Verifică dacă contul tău Cloudflare are permisiunile necesare

### Subdomeniul nu a fost adăugat
- Verifică jurnalele Ultimate Multisite pentru eventuale mesaje de eroare
- Asigură-te că subdomeniul nu este deja adăugat în Cloudflare
- Verifică dacă planul tău Cloudflare permite numărul de înregistrări DNS pe care le creezi

### Probleme cu proxy-ul
- Dacă nu vrei ca subdomeniile să treacă prin proxy, poți folosi filtrul `wu_cloudflare_should_proxy`
- Unele funcționalități pot să nu funcționeze corect când trec prin proxy (de exemplu, anumite funcții din panoul de administrare WordPress)
- Ia în considerare utilizarea Page Rules din Cloudflare pentru a ocoli cache-ul pentru paginile de administrare
