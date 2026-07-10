---
title: Integrare Cloudflare
sidebar_position: 16
_i18n_hash: 36ac9de19b1dc53fefd407fb8d21b563
---
# Integrarea Cloudflare {#cloudflare-integration}

## Prezentare generală {#overview}
Cloudflare este o rețea de livrare a conținutului (CDN) și un furnizor de securitate de top, care ajută la protejarea și accelerarea site-urilor web. Această integrare permite gestionarea automată a domeniilor între Ultimate Multisite și Cloudflare, în special pentru instalările multisite pe subdomenii.

## Funcționalități {#features}
- Crearea automată a subdomeniilor în Cloudflare
- Suport pentru subdomenii proxied
- Gestionarea înregistrărilor DNS
- Afișare îmbunătățită a înregistrărilor DNS în administrarea Ultimate Multisite

## Cerințe {#requirements}
Următoarele constante trebuie definite în fișierul tău `wp-config.php`:

```php
define('WU_CLOUDFLARE_API_KEY', 'your_api_key');
define('WU_CLOUDFLARE_ZONE_ID', 'your_zone_id');
```

## Instrucțiuni de configurare {#setup-instructions}

### 1. Obține cheia ta API Cloudflare {#1-get-your-cloudflare-api-key}

1. Autentifică-te în Cloudflare dashboard
2. Mergi la „Profilul meu” (dă clic pe adresa ta de email din colțul din dreapta sus)
3. Selectează „Tokenuri API” din meniu
4. Creează un nou token API cu următoarele permisiuni:
   - Zone.Zone: Read
   - Zone.DNS: Edit
5. Copiază tokenul tău API

### 2. Obține ID-ul zonei tale {#2-get-your-zone-id}

1. În Cloudflare dashboard, selectează domeniul pe care vrei să îl folosești
2. ID-ul zonei este vizibil în fila „Prezentare generală”, în bara laterală din dreapta, sub „API”
3. Copiază ID-ul zonei

### 3. Adaugă constantele în wp-config.php {#3-add-constants-to-wp-configphp}

Adaugă următoarele constante în fișierul tău `wp-config.php`:

```php
define('WU_CLOUDFLARE_API_KEY', 'your_api_token');
define('WU_CLOUDFLARE_ZONE_ID', 'your_zone_id');
```

### 4. Activează integrarea {#4-enable-the-integration}

1. În administrarea WordPress, mergi la Ultimate Multisite > Setări
2. Navighează la fila „Mapare domenii”
3. Derulează în jos până la „Integrări gazdă”
4. Activează integrarea Cloudflare
5. Dă clic pe „Salvează modificările”

## Cum funcționează {#how-it-works}

### Gestionarea subdomeniilor {#subdomain-management}

Când este creat un site nou într-o instalare multisite pe subdomenii:

1. Integrarea trimite o cerere către API-ul Cloudflare pentru a adăuga o înregistrare CNAME pentru subdomeniu
2. Subdomeniul este configurat implicit să fie proxied prin Cloudflare (acest lucru poate fi schimbat cu filtre)
3. Când un site este șters, integrarea va elimina subdomeniul din Cloudflare

### Afișarea înregistrărilor DNS {#dns-record-display}

Integrarea îmbunătățește afișarea înregistrărilor DNS în administrarea Ultimate Multisite prin:

1. Preluarea înregistrărilor DNS direct din Cloudflare
2. Afișarea faptului dacă înregistrările sunt proxied sau nu
3. Afișarea de informații suplimentare despre înregistrările DNS

## Cloudflare Custom Hostnames {#cloudflare-custom-hostnames}

**Cloudflare Custom Hostnames** (numit anterior „Cloudflare for SaaS”) este o funcționalitate Cloudflare care le permite clienților tăi să își folosească propriile domenii cu SSL în rețeaua ta multisite. Este abordarea recomandată pentru instalările multisite cu domenii mapate care folosesc Cloudflare, deoarece Cloudflare gestionează automat emiterea și reînnoirea certificatului SSL pentru fiecare domeniu personalizat.

### Cum diferă de integrarea standard Cloudflare {#how-it-differs-from-the-standard-cloudflare-integration}

| | Integrare standard | Cloudflare Custom Hostnames |
|---|---|---|
| **Scop** | Creează automat înregistrări DNS pentru subdomenii | Activează domenii personalizate (mapate) cu SSL gestionat de Cloudflare |
| **Cel mai potrivit pentru** | Multisite pe subdomenii | Multisite cu domenii mapate |
| **SSL** | Gestionat separat | Gestionat automat de Cloudflare |

### Configurarea Cloudflare Custom Hostnames {#setting-up-cloudflare-custom-hostnames}

1. În Cloudflare dashboard, deschide zona pentru domeniul tău principal.
2. Mergi la **SSL/TLS > Custom Hostnames**.
3. Adaugă o origine fallback care indică spre IP-ul sau hostname-ul serverului tău.
4. Pentru fiecare domeniu de client mapat în Ultimate Multisite, adaugă o intrare Custom Hostname în Cloudflare. Poți automatiza acest pas folosind API-ul Cloudflare.
5. Cloudflare emite și reînnoiește automat certificate TLS pentru fiecare hostname personalizat după ce DNS-ul clientului este direcționat către rețeaua ta.

Pentru referința API completă, consultă [documentația Cloudflare Custom Hostnames](https://developers.cloudflare.com/cloudflare-for-platforms/cloudflare-for-saas/domain-support/).

:::note Actualizare de terminologie
Începând cu Ultimate Multisite v2.6.1, această funcționalitate este denumită **Cloudflare Custom Hostnames** în toate setările și etichetele pluginului. Versiunile anterioare foloseau numele „Cloudflare for SaaS”, care este numele produsului Cloudflare de bază.
:::

## Note importante {#important-notes}

În urma actualizărilor recente ale Cloudflare, proxying-ul wildcard este acum disponibil pentru toți clienții. Acest lucru înseamnă că integrarea DNS standard Cloudflare este mai puțin critică pentru instalările multisite pe subdomenii decât era înainte, deoarece poți configura pur și simplu o înregistrare DNS wildcard în Cloudflare.

## Depanare {#troubleshooting}

### Probleme de conexiune API {#api-connection-issues}
- Verifică dacă tokenul tău API este corect și are permisiunile necesare
- Verifică dacă ID-ul zonei tale este corect
- Asigură-te că Account-ul tău Cloudflare are permisiunile necesare

### Subdomeniul nu a fost adăugat {#subdomain-not-added}
- Verifică jurnalele Ultimate Multisite pentru orice mesaje de eroare
- Verifică dacă subdomeniul nu este deja adăugat în Cloudflare
- Asigură-te că planul tău Cloudflare acceptă numărul de înregistrări DNS pe care le creezi

### Probleme de proxying {#proxying-issues}
- Dacă nu vrei ca subdomeniile să fie proxied, poți folosi filtrul `wu_cloudflare_should_proxy`
- Este posibil ca unele funcționalități să nu funcționeze corect când sunt proxied (de exemplu, anumite funcții de administrare WordPress)
- Ia în considerare folosirea Cloudflare Page Rules pentru a ocoli cache-ul pentru paginile de administrare
