---
title: Integracija sa Cloudflareom
sidebar_position: 16
_i18n_hash: 36ac9de19b1dc53fefd407fb8d21b563
---
# Integracja z Cloudflare {#cloudflare-integration}

## Przegląd {#overview}
Cloudflare to wiodący dostawca sieci CDN (Content Delivery Network) i usług bezpieczeństwa, który pomaga chronić i przyspieszać strony internetowe. Ta integracja umożliwia automatyczne zarządzanie domenami między Ultimate Multisite a Cloudflare, szczególnie przy instalacjach multisite na poddomenach.

## Funkcje {#features}
- Automatyczne tworzenie poddomen w Cloudflare
- Wsparcie dla poddomen proxyowanych
- Zarządzanie rekordami DNS
- Ulepszone wyświetlanie rekordów DNS w panelu administracyjnym Ultimate Multisite

## Wymagania {#requirements}
Poniższe stałe muszą być zdefiniowane w pliku `wp-config.php`:

```php
define('WU_CLOUDFLARE_API_KEY', 'twoja_api_key');
define('WU_CLOUDFLARE_ZONE_ID', 'twoj_zone_id');
```

## Instrukcje Konfiguracji {#setup-instructions}

### 1. Uzyskaj swój Klucz API Cloudflare {#1-get-your-cloudflare-api-key}

1. Zaloguj się do swojego panelu Cloudflare
2. Przejdź do "Moje profile" (kliknij na swój e-mail w prawym górnym rogu)
3. Wybierz "API Tokens" z menu
4. Utwórz nowy token API z następującymi uprawnieniami:
   - Zone.Zone: Czytanie (Read)
   - Zone.DNS: Edycja (Edit)
5. Skopiuj swój klucz API

### 2. Uzyskaj swój ID Strefy (Zone ID) {#2-get-your-zone-id}

1. W panelu Cloudflare wybierz domenę, którą chcesz użyć
2. ID Strefy jest widoczne w zakładce "Overview" (Przegląd), w prawym pasku bocznym pod nagłówkiem "API"
3. Skopiuj ID Strefy

### 3. Dodaj stałe do wp-config.php {#3-add-constants-to-wp-configphp}

Dodaj następujące stałe do pliku `wp-config.php`:

```php
define('WU_CLOUDFLARE_API_KEY', 'twoj_api_token');
define('WU_CLOUDFLARE_ZONE_ID', 'twoj_zone_id');
```

### 4. Włącz integrację {#4-enable-the-integration}

1. W panelu administracyjnym WordPress przejdź do Ultimate Multisite > Settings (Ustawienia)
2. Przejdź do zakładki "Domain Mapping" (Mapowanie domen)
3. Przewiń w dół do sekcji "Host Integrations" (Integracje hostów)
4. Włącz integrację Cloudflare
5. Kliknij "Save Changes" (Zapisz zmiany)

## Jak to działa {#how-it-works}

### Zarządzanie poddomenami {#subdomain-management}

Gdy tworzysz nową stronę w instalacji multisite na poddomenach:

1. Integracija šalje zahtev API-ju Cloudflare-a da doda CNAME zapis za poddomen.
2. Poddomen je po defaultu podešen da se proksira preko Cloudflare-a (ovo se može promeniti pomoću filtera).
3. Kada se sajt obriše, integracija će ukloniti poddomen iz Cloudflare-a.

### Prikaz DNS zapisa {#dns-record-display}

Integracija poboljšava prikaz DNS zapisa u admin panelu Ultimate Multisite tako što:

1. Direktno dohvaća DNS zapise iz Cloudflare-a
2. Prikazuje da li su zapisi proksirani ili ne
3. Prikazuje dodatne informacije o DNS zapisima

## Cloudflare Custom Hostnames (Prilagođeni hostnaji Cloudflare-a) {#cloudflare-custom-hostnames}

**Cloudflare Custom Hostnames** (ranije zvan "Cloudflare for SaaS") je funkcija Cloudflare-a koja omogućava vašim kupcima da koriste sopstvene domene sa SSL-om na vašoj multisite mreži. Ovo je preporučeni pristup za multisite instalacije mapirane na domen koje koriste Cloudflare-a, jer Cloudflare automatski upravlja izdanjem i obnavljivanjem SSL sertifikata za svaki prilagođeni domen.

### Kako se razlikuje od standardne integracije Cloudflare-a {#how-it-differs-from-the-standard-cloudflare-integration}

| | Standardna integracija | Cloudflare Custom Hostnames |
|---|---|---|
| **Svrha** | Automatsko kreiranje DNS zapisa za poddomene | Omogućava prilagođene (mapirane) domene sa SSL-om koji upravlja Cloudflare-om |
| **Najbolje za** | Multisite na poddomenima | Multisite mapirane na domen |
| **SSL** | Upravljano odvojeno | Upravljano automatski od strane Cloudflare-a |

### Podešavanje Cloudflare Custom Hostnames {#setting-up-cloudflare-custom-hostnames}

1. U Cloudflare dashboardu, otvorite zonu za vaš glavni domen.
2. Idite na **SSL/TLS > Custom Hostnames**.
3. Dodajte fallback origin koji pokazuje na IP adresu ili ime hosta vašeg servera.
4. Za svaki korisnički domen mapiran u Ultimate Multisite, dodajte unos Custom Hostname u Cloudflare. Ovaj korak možete automatizovati koristeći Cloudflare API.
5. Cloudflare automatski izdaje i obnavlja TLS sertifikate za svaki custom hostname čim se DNS korisnika usmeri na vašu mrežu.

Za kompletnu referencu API-ja, pogledajte [Cloudflare Custom Hostnames dokumentaciju](https://developers.cloudflare.com/cloudflare-for-platforms/cloudflare-for-saas/domain-support/).

:::note Ažuriranje terminologije
Od verzije Ultimate Multisite v2.6.1, ova funkcija se naziva **Cloudflare Custom Hostnames** u svim podešavanjima i etiketama dodatka. Prethodna verzija koristila je naziv "Cloudflare for SaaS", koji je ime osnovnog Cloudflare proizvoda.
:::

## Važne napomene {#important-notes}

Od nedavnih ažuriranja Cloudflare-a, wildcard proxying je sada dostupan za sve korisnike. To znači da standardna integracija DNS-a Cloudflare-a manje je bitna za instalacije multisite poddomenova nego što je bilo ranije, jer možete jednostavno postaviti wildcard DNS zapis u Cloudflare-u.

## Rešavanje problema (Troubleshooting) {#troubleshooting}

### Problemi sa konekcijom API-ja {#api-connection-issues}
- Proverite da li je vaš API token ispravan i ima potrebna dozvolama
- Proverite da li je vaš Zone ID ispravan
- Osigurajte da vaš Cloudflare nalog ima potrebne dozvole

### Poddomen nije dodan {#subdomain-not-added}
- Proverite Ultimate Multisite logove na bilo kakve poruke o greškama
- Proverite da li poddomen već postoji u Cloudflare-u
- Osigurajte da vaš Cloudflare plan podržava broj DNS zapisa koje kreirate

### Problemi sa proxyingom {#proxying-issues}

- Ako ne želite da se poddomeni (subdomains) proxyuju, možete koristiti filter `wu_cloudflare_should_proxy`.
- Neke funkcije možda neće raditi ispravno kada su proxyuju (npr. određene WordPress admin funkcije).
- Razmislite o korišćenju Cloudflare Page Rules-a da se zaobiđe keširanje za admin stranice.
