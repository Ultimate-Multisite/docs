---
title: Cloudflare integracija
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

## Instrukcje konfiguracji {#setup-instructions}

### 1. Uzyskaj swój klucz API Cloudflare {#1-get-your-cloudflare-api-key}

1. Zaloguj się do swojego panelu Cloudflare.
2. Przejdź do sekcji "My Profile" (kliknij na swój e-mail w prawym górnym rogu).
3. Wybierz "API Tokens" z menu.
4. Utwórz nowy token API z następującymi uprawnieniami:
   - Zone.Zone: Czytaj (Read)
   - Zone.DNS: Edytuj (Edit)
5. Skopiuj swój klucz API.

### 2. Uzyskaj swój ID strefy (Zone ID) {#2-get-your-zone-id}

1. W panelu Cloudflare wybierz domenę, którą chcesz użyć.
2. ID strefy jest widoczne w zakładce "Overview" (Przegląd), w prawym pasku bocznym pod nagłówkiem "API".
3. Skopiuj ID strefy.

### 3. Dodaj stałe do wp-config.php {#3-add-constants-to-wp-configphp}

Dodaj następujące stałe do pliku `wp-config.php`:

```php
define('WU_CLOUDFLARE_API_KEY', 'twoj_api_token');
define('WU_CLOUDFLARE_ZONE_ID', 'twoj_zone_id');
```

### 4. Włącz integrację {#4-enable-the-integration}

1. W panelu administracyjnym WordPress przejdź do Ultimate Multisite > Settings (Ustawienia).
2. Przejdź do zakładki "Domain Mapping" (Mapowanie domen).
3. Przewiń w dół do sekcji "Host Integrations" (Integracje hostów).
4. Włącz integrację Cloudflare.
5. Kliknij "Save Changes" (Zapisz zmiany).

## Jak to działa {#how-it-works}

### Zarządzanie poddomenami {#subdomain-management}

Gdy tworzysz nową stronę w instalacji multisite na poddomenach:

1. Integracija siunčia prašymą Cloudflare API, kad pridėtų CNAME įrašą subdomėniui.
2. Subdomėnis nustatytas būti automatiškai proxytas per Cloudflare (štai galima pakeisti filtryje).
3. Kai svetainė yra ištrinta, integracija pašalina subdomėnį nuo Cloudflare.

### DNS įrašo skaičiavimas {#dns-record-display}

Integracija pagerina DNS įrašo skaičiavimo vaizdą adminėje Ultimate Multisite per:

1. Tiekiant DNS įrašus tiesiogiai iš Cloudflare
2. Rodykite, ar įrašai yra proxyti ar ne
3. Rodydami papildomą informaciją apie DNS įrašus

## Cloudflare kustomos hostnames (Cloudflare Custom Hostnames) {#cloudflare-custom-hostnames}

**Cloudflare Custom Hostnames** (anžirgant „Cloudflare for SaaS“) yra Cloudflare funkcija, leidžianti jūsų klientams naudoti savo domenus su SSL per jūsų multisite tinklą. Tai rekomenduojamas būdas domeno mapluotų multisite įrenginių naudojant Cloudflare, nes Cloudflare automatiškai valdo SSL sertifikatų išdavimą ir atnaujinimą kiekvienam kustomo domenui.

### Kaip tai skiriasi standartinei Cloudflare integracijai {#how-it-differs-from-the-standard-cloudflare-integration}

| | Standartinė integracija | Cloudflare Custom Hostnames |
|---|---|---|
| **Forma** | Automatiškai sukuria DNS įrašus subdomėniams | Leidos naudoti kustomus (mapluotus) domenus su Cloudflare valdymo SSL |
| **Geriausia** | Subdomėniai multisite | Domenas mapluoti multisite |
| **SSL** | Valdomas atskirai | Automatiškai valdomas per Cloudflare |

### Kaip nustatyti Cloudflare Custom Hostnames {#setting-up-cloudflare-custom-hostnames}

1. Vuoje savo Cloudflare dashboarde ir atidarykite sąraštį (zone) jūsų pagrindinei domenui.
2. Eikite į **SSL/TLS > Custom Hostnames**.
3. Pridėkite fallback originą, kuris tiks prie jūsų serverio IP adresų ar hostname.
4. Kiekvienam klientui domenui, nurodytam Ultimate Multisite, pridėkite Custom Hostname įrašą Cloudflare. Šį žingsnis galite automatizuoti naudojant Cloudflare API.
5. Cloudflare automatiškai išduodama ir atnaujina TLS sertifikatus kiekvienam custom hostname, kai klientų DNS pateikiami jūsų tinklo adresai.

Viso API referencijos parduodame [Cloudflare Custom Hostnames dokumentacijoje](https://developers.cloudflare.com/cloudflare-for-platforms/cloudflare-for-saas/domain-support/).

:::note Terminologijos atnaujinimas
Ultimate Multisite v2.6.1 versijo nuo šios laiko ši funkcija vadinasi **Cloudflare Custom Hostnames** visose pluginų nustatyjimo ir etiketų nurodytuose. Anksčiau naudojamai buvo "Cloudflare for SaaS", kuris yra pagrindinio Cloudflare produkto pavadinimas.
:::

## Svarbiausios pastabos {#important-notes}

Šiuo metu, pagal Cloudflare naujausius atnaujinimus, wildcard proxying (wildcard proxy) dabar yra įvedamas visoms klientams. Tai reiškia, kad standartinė Cloudflare DNS integracija nėra tiek kritiškai svarbiama subdomain multisite instalacijose, kaip buvo anksčiau, nes galite tiesiog nustatyti wildcard DNS įrašą Cloudflare.

## Problemos iššaukimas (Troubleshooting) {#troubleshooting}

### API ryšio problemas {#api-connection-issues}
- Patikrinkite, ar jūsų API tokenas yra teisingas ir turi reikiamų įsipareigojimų.
- Patikrinkite, ar jūsų Zone ID yra teisingas.
- Užtikrinkite, kad jūsų Cloudflare paskyra turi reikiamų įsipareigojimų.

### Subdomeno nepridėtas {#subdomain-not-added}
- Patikrinkite Ultimate Multisite logus (logs) už kokių nors klaidos pranešimų.
- Patikrinkite, ar subdomain jau nėra pridėta Cloudflare.
- Užtikrinkite, kad jūsų Cloudflare planas palaiko DNS įrašų skaičių, kuriuos turite kurti.

### Proxyjei problemi {#proxying-issues}

- Je norite, kad subdomėnia nebus proxyti, galite naudoti filtru `wu_cloudflare_should_proxy`.
- Kai kurie funkcijas gali ne veikti tinkamai, jei jį proxyti (pvz., saugiai įrenginių admin funkcijos).
- Priešdarykite laikyti Cloudflare Page Rules, kad bypasserėte kešimą admin puslapis.
