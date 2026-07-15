---
title: Integracija s Cloudflareom
sidebar_position: 16
_i18n_hash: 36ac9de19b1dc53fefd407fb8d21b563
---
# Integracja z Cloudflare

## Przegląd {#overview}
Cloudflare to wiodący dostawca sieci CDN (Content Delivery Network) i usług bezpieczeństwa, który pomaga chronić i przyspieszać strony internetowe. Ta integracja umożliwia automatyczne zarządzanie domenami między Ultimate Multisite a Cloudflare, szczególnie przy instalacjach multisite na poddomenach.

## Funkcje {#features}
- Automatyczne tworzenie poddomen w Cloudflare
- Wsparcie dla poddomen proxyowanych
- Zarządzanie rekordami DNS
- Rozszerzone wyświetlanie rekordów DNS w panelu administracyjnym Ultimate Multisite

## Wymagania {#requirements}
Poniższe stałe muszą być zdefiniowane w pliku `wp-config.php`:

```php
define('WU_CLOUDFLARE_API_KEY', 'twoja_api_key');
define('WU_CLOUDFLARE_ZONE_ID', 'twoj_zone_id');
```

## Instrukcje konfiguracji {#setup-instructions}

### 1. Uzyskaj swój klucz API Cloudflare {#1-get-your-cloudflare-api-key}

1. Zaloguj się do swojego panelu Cloudflare
2. Przejdź do "Moje konto" (kliknij na swój e-mail w prawym górnym rogu)
3. Wybierz "API Tokens" z menu
4. Utwórz nowy token API z następującymi uprawnieniami:
   - Zone.Zone: Czytaj (Read)
   - Zone.DNS: Edytuj (Edit)
5. Skopiuj swój klucz API

### 2. Uzyskaj swój ID strefy (Zone ID) {#2-get-your-zone-id}

1. W panelu Cloudflare wybierz domenę, którą chcesz użyć
2. ID strefy jest widoczne w zakładce "Przegląd" (Overview), w prawym pasku bocznym pod sekcją "API"
3. Skopiuj ID strefy

### 3. Dodaj stałe do wp-config.php {#3-add-constants-to-wp-configphp}

Dodaj następujące stałe do pliku `wp-config.php`:

```php
define('WU_CLOUDFLARE_API_KEY', 'twoj_api_token');
define('WU_CLOUDFLARE_ZONE_ID', 'twoj_zone_id');
```

### 4. Włącz integrację {#4-enable-the-integration}

1. W panelu administracyjnym WordPress przejdź do Ultimate Multisite > Ustawienia (Settings)
2. Przejdź do zakładki "Domain Mapping"
3. Przewiń w dół do sekcji "Host Integrations"
4. Włącz integrację Cloudflare
5. Kliknij "Save Changes"

## Jak to działa {#how-it-works}

### Zarządzanie poddomenami {#subdomain-management}

Gdy tworzysz nową stronę w instalacji multisite na poddomenach:

1. Integracija šalje zahtjev API-ju Cloudflare-a kako bi dodala CNAME zapis za poddomen.
2. Poddomen je po defaultu konfiguriran da se proksira putem Cloudflare-a (ovo se može promijeniti pomoću filtera).
3. Kada se stranica obriše, integracija će ukloniti poddomen iz Cloudflare-a.

### Prikaz DNS zapisa {#dns-record-display}

Integracija poboljšava prikaz DNS zapisa u admin paneli Ultimate Multisite tako što:

1. Direktno dohvaća DNS zapise iz Cloudflare-a
2. Prikazuje je li zapis proksiran ili ne
3. Prikazuje dodatne informacije o DNS zapisima

## Cloudflare Custom Hostnames (Prilagođeni hostnaji Cloudflare-a) {#cloudflare-custom-hostnames}

**Cloudflare Custom Hostnames** (ranije zvan "Cloudflare for SaaS") je značajka Cloudflare-a koja omogućuje vašim kupcima da koriste vlastita domena s SSL-om na vašoj multisite mreži. To je preporučeni pristup za instalacije multisite mapirane na domen koje koriste Cloudflare, jer Cloudflare automatski upravlja izdavanjem i obnavljivanjem SSL certifikata za svaki prilagođeni domen.

### Kako se razlikuje od standardne integracije Cloudflare-a {#how-it-differs-from-the-standard-cloudflare-integration}

| | Standardna integracija | Cloudflare Custom Hostnames |
|---|---|---|
| **Svrha** | Automatsko kreiranje DNS zapisa za poddomene | Omogućava prilagođene (mapirane) domene s SSL-om upravljanim od strane Cloudflare-a |
| **Najbolje za** | Multisite na poddomenima | Multisite mapirane na domen |
| **SSL** | Upravlja se zasebno | Automatski upravlja od strane Cloudflare-a |

### Postavljanje Cloudflare Custom Hostnames {#setting-up-cloudflare-custom-hostnames}

1. U svom Cloudflare dashboardu, otvorite zonu za vaš glavni domen.
2. Idite na **SSL/TLS > Custom Hostnames**.
3. Dodajte fallback origin koji pokazuje na IP ili hostname vašeg servera.
4. Za svaki klijentski domen mapiran u Ultimate Multisite, dodajte unos Custom Hostname u Cloudflare. Ovaj korak možete automatizirati koristeći Cloudflare API.
5. Cloudflare automatski izdaje i obnavlja TLS certifikate za svaki custom hostname čim se DNS klijenta usmjeruje na vašu mrežu.

Za kompletnu referencu API-ja, pogledajte [Cloudflare Custom Hostnames documentation](https://developers.cloudflare.com/cloudflare-for-platforms/cloudflare-for-saas/domain-support/).

:::note Ažuriranje terminologije
Od verzije Ultimate Multisite v2.6.1, ova značajka se naziva **Cloudflare Custom Hostnames** u svim podešavanjima i etiketama dodatka. Ranije verzije su koristile naziv "Cloudflare for SaaS", što je ime osnovnog Cloudflare proizvoda.
:::

## Važne napomene {#important-notes}

Od novijih ažuriranja Cloudflare-a, wildcard proxying je sada dostupan za sve klijente. To znači da standardna integracija DNS-a Cloudflare-a manje je ključna za instalacije multisite poddomenima nego što je bilo prije, jer možete jednostavno postaviti wildcard DNS zapis u Cloudflare-u.

## Rješavanje problema {#troubleshooting}

### Problemi s povezivanjem API-ja {#api-connection-issues}
- Provjerite da li je vaš API token ispravan i ima potrebne dozvole
- Provjerite da li je vaš Zone ID ispravan
- Osigurajte da vaš Cloudflare račun ima potrebne dozvole

### Poddomen nije dodan {#subdomain-not-added}
- Provjerite Ultimate Multisite logove na bilo kakve poruke o greškama
- Provjerite da li poddomen već postoji u Cloudflare-u
- Osigurajte da je vaš Cloudflare plan kompatibilan s brojem DNS zapisa koje kreirate

### Problemi s proxyjanjem {#proxying-issues}
- Ako ne želite da se poddomeni proxyju, možete koristiti filter `wu_cloudflare_should_proxy`.
- Neke značajke možda neće raditi ispravno kada su proxyane (npr. određene WordPress administrativne funkcije).
- Razmislite o korištenju Cloudflare Page Rules-a kako biste zaobišli keširanje za admin stranice.
