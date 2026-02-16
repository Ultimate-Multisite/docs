---
title: Integrare Closte
sidebar_position: 7
_i18n_hash: 8f07c74ab2f7df614f502e0cc089c3e0
---
# Integrarea cu Closte

## Prezentare generală
Closte este o platformă de hosting WordPress administrat, construită pe infrastructura Google Cloud. Această integrare permite sincronizarea automată a domeniilor și gestionarea certificatelor SSL între Ultimate Multisite și Closte.

## Funcționalități
- Sincronizare automată a domeniilor
- Gestionarea certificatelor SSL
- Suport pentru domenii wildcard
- Nu necesită configurare dacă rulezi pe Closte

## Cerințe
Următoarea constantă trebuie definită în fișierul tău `wp-config.php` dacă folosești Closte:

```php
define('CLOSTE_CLIENT_API_KEY', 'your_api_key');
```

Această constantă este de obicei deja definită dacă ai găzduirea pe Closte.

## Instrucțiuni de configurare

### 1. Verifică cheia API Closte

Dacă ai găzduirea pe Closte, constanta `CLOSTE_CLIENT_API_KEY` ar trebui să fie deja definită în fișierul tău `wp-config.php`. Poți verifica acest lucru deschizând fișierul `wp-config.php`.

### 2. Activează integrarea

1. În panoul de administrare WordPress, mergi la Ultimate Multisite > Settings
2. Navighează la tab-ul „Domain Mapping"
3. Derulează în jos până la „Host Integrations"
4. Activează integrarea Closte
5. Apasă „Save Changes"

## Cum funcționează

Când un domeniu este mapat în Ultimate Multisite:

1. Integrarea trimite o cerere către API-ul Closte pentru a adăuga domeniul la aplicația ta
2. Closte gestionează automat emiterea certificatului SSL
3. Când un domeniu mapat este eliminat, integrarea va șterge domeniul din Closte

Integrarea funcționează și cu setarea intervalului de verificare DNS din Ultimate Multisite, permițându-ți să configurezi cât de frecvent verifică sistemul propagarea DNS și emiterea certificatului SSL.

## Crearea înregistrării de domeniu

Această integrare se asigură că atunci când un site este creat sau duplicat, se creează automat o înregistrare de domeniu. Acest lucru este deosebit de important pentru integrarea cu Closte, deoarece crearea înregistrării de domeniu declanșează API-ul Closte pentru a crea domeniul și certificatul SSL.

## Depanare

### Probleme de conexiune la API
- Verifică dacă cheia API Closte este corectă
- Asigură-te că contul tău Closte are permisiunile necesare

### Probleme cu certificatul SSL
- Closte poate avea nevoie de ceva timp pentru a emite certificatele SSL (de obicei 5-10 minute)
- Verifică dacă domeniile tale sunt direcționate corect către adresa IP a serverului Closte
- Verifică înregistrările DNS ale domeniului tău pentru a te asigura că sunt configurate corect

### Domeniul nu a fost adăugat
- Verifică jurnalele Ultimate Multisite pentru eventuale mesaje de eroare
- Verifică dacă domeniul nu este deja adăugat în Closte
- Asigură-te că înregistrările DNS ale domeniului tău sunt configurate corect

### Intervalul de verificare DNS
- Dacă emiterea certificatelor SSL durează prea mult, poți ajusta intervalul de verificare DNS în setările Domain Mapping
- Intervalul implicit este de 300 de secunde (5 minute), dar îl poți seta la minimum 10 secunde pentru verificări mai rapide în timpul testării
