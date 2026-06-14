---
title: Closte integreerimine
sidebar_position: 7
_i18n_hash: 8f07c74ab2f7df614f502e0cc089c3e0
---
# Closte Integreerimine

## Üldine ülevaade
Closte on juhtomat WordPress-hostingu platvorm, millel loodud Google Cloud infrastruktuuril. See integreerimine võimaldab automaatselt domeenide sünkroonimist ja SSL-sertifikaadide haldamist Ultimate Multisite'i ja Closte vahel.

## Funktsioonid
- Automootne domeenide sünkroonimine
- SSL-sertifikaadide haldamine
- Wildcard-domeenide toetmine
- Mitteilke konfiguratsiooni vajadus, kui hostitakse Closteil

## nõuded
Kui kasutate Closteil, peab teie `wp-config.php` failis dideani konstants definitsioon:

```php
define('CLOSTE_CLIENT_API_KEY', 'your_api_key');
```

See konstants on tavaliselt juba definitsioon, kui hostitakse Closteil.

## Seadistamise juhised

### 1. Kontrollige oma Closte API-käiku

Kui hostitakse Closteil, peaks `CLOSTE_CLIENT_API_KEY` konstants olema juba definitsioon teie `wp-config.php` failis. Seda saate kontrollida oma `wp-config.php` faili abil.

### 2. Lülitage integreerimine sisse

1. WordPressi administraatoris minud Ultimate Multisite > Settings menüüle
2. Minud "Domain Mapping" tabile
3. Scrollige all "Host Integrations" sekkoni juurde
4. Lülitage Closte integreerimine sisse
5. Klõpsake "Save Changes" (Muutuste salvestamine)

## Kuidas see toimib

Kui domeen on Ultimate Multisite'is mappitud:

1 Integreerimine lähevad klõpsuse Closte API-le, et lisada domeeni oma rakendusele
2 Closte haldab SSL-sertifikaadide provisjonimise automaatselt
3 Kui domeenid mappimist eemaldatakse, eemaldab integreerimine domeeni Closteist

Integreerimine toimib ka Ultimate Multisite'i DNS-kontrolli intervalliga seoses, võimaldades teil konfigurida, kui tihti süsteem kontrollib DNS-laikustamist ja SSL-sertifikaadide väljendamist.

## Domeeniregistri loomine

See, see, see. See, see, see.

See, see, see. See, see, see.

## Probleemlust

### API ühenduse probleemid
- Kontrollige, kas teie Closte API võti on õige
- Veenduge, et teie Closte konto on vaja vajalikke lubundu

### SSL sertifikaadidega probleemid
- Closte võib SSL sertifikaadide väljastamise jaoks vett nõuda (üldiselt 5–10 minutit)
- Kontrollige, kas teie domeenid on õigesti seotud teie Closte serveri IP-adressile
- Kontrollige oma domeeni DNS-rekordid, et veenduda, et need on õigesti konfiguritud

### Domeen ei lisatud
- Kontrollige Ultimate Multisite logud vigu sõnumide osas
- Veenduge, et domeen ei ole juba Closte'le lisatud
- Veenduge, et teie domeeni DNS-rekordid on õigesti konfiguritud

### DNS kontrolli intervall
- Kui SSL sertifikaadide väljastamine liiga pikka kestab, saate muuta DNS kontrolli intervalli Domain Mapping seadistustes
- Oletust interval on 300 sekunsti (5 minutit), kuid saate seda asetada nii madal kui 10 sekundile kiirema kontrolli jaoks testimise ajal
