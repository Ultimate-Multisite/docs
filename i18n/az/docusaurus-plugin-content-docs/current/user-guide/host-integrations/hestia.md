---
title: Hestia Control Panel İntegrasiyası
sidebar_position: 7
_i18n_hash: 252519613f4d84d44875a5b2090e4bd6
---
# Hestia Control Panel İntegrasiyası

Bu bələdçi, Ultimate Multisite Hestia inteqrasiyasını necə quracağınızı və beləliklə, şəbəkənizdəki xəritələnmiş domenlərin Hestia-da Web Domain Aliasları kimi avtomatik əlavə edilməsini (və silinməsini) izah edir.

- Hestia CLI referansı: v-add-web-domain-alias / v-delete-web-domain-alias
- Rəsmi REST API sənədləri: https://hestiacp.com/docs/server-administration/rest-api.html

## Nə Edir
- Bir domen Ultimate Multisite-da xəritələnəndə, inteqrasiya aşağıdakıları işlətmək üçün Hestia API-ni çağırır:
  - `v-add-web-domain-alias <USER> <DOMAIN> <ALIAS> [RESTART]`
- Domen xəritələnməsi silindikdə, aşağıdakıları işlədir:
  - `v-delete-web-domain-alias <USER> <DOMAIN> <ALIAS> [RESTART]`
- İsteğe bağlı olaraq, Domen Xəritələmə (Domain Mapping) ayarlarınızdakı “Auto-create www subdomain” (www alt domenini avtomatik yarat) ayarınıza bağlı olaraq `www.` aliasını əlavə edir/silir.

## Tələb Olunanlar
- WordPress quraşdırmanıza artıq işarələnmiş mövcud bir Hestia Web Domeni. İnteqrasiya aliasları bu əsas domena əlavə edəcək.
- Hestia API girişinin aktiv olması. Autentifikasiya üçün ya şifrədən ya da API hash/token-dan istifadə edə bilərsiniz.

API girişini və autentifikasiya detallarını aktiv etmək üçün Hestia-nın REST API sənədlərinə baxın:
https://hestiacp.com/docs/server-administration/rest-api.html

## Konfiqurasiya (Sihirbaz → İntegrasiyalar → Hestia)
Aşağıdakı dəyərləri təqdim edin:

- `WU_HESTIA_API_URL` (mütləq)
  - Əsas API son nöqtəsi (endpoint), adətən `https://your-hestia-host:8083/api/`.
- `WU_HESTIA_API_USER` (mütləq)
  - API əmrləri üçün istifadə edilən Hestia istifadəçisi (tez-tez `admin`).
- `WU_HESTIA_API_PASSWORD` və ya `WU_HESTIA_API_HASH` (ən azı biri)
  - Bir autentifikasiya metodu seçin: şifrə və ya API hash/token.
- `WU_HESTIA_ACCOUNT` (mütləq)
  - Hestia-da Web Domeninin (sahib) hesabı; bu, CLI-nin ilk arqumentidir.
- `WU_HESTIA_WEB_DOMAIN` (mütləq)
  - WordPress-inizi xidmət edən mövcud Hestia Web Domeni (aliaslar bura əlavə ediləcək).
- `WU_HESTIA_RESTART` (isteğe bağlı; default `yes`)
  - Alias dəyişikliklərindən sonra xidmətləri yenidən başlatmaq/yükləmək olub-olmaması.

Sihirbazdan bu sabitləri `wp-config.php` faylına yerləşdirməsinə icazə verə bilərsiniz, yaxud onları əl ilə təyin edə bilərsiniz.

## Qurulumu Yoxlamaq
- Sihirbazın “Testing” (Test) addımında, plugin API vasitəsilə `v-list-web-domains <WU_HESTIA_ACCOUNT> json` çağırır. Uğur cavabı bağlantını və autentifikasiyanı təsdiqləyir.
- Bir domen xəritələndirdikdən sonra, Hestia-da yoxlayın: Web > əsas domen > Aliases. Yeni aliasın əlavə edildiyini görməlisiniz.

## Qeydlər və Məsləhətlər
- `WU_HESTIA_WEB_DOMAIN` artıq mövcud olmalı və `WU_HESTIA_ACCOUNT` tərəfindən sahib olmalıdır.
- SSL tələb olunursa, sertifikatları Hestia-da idarə edin. Bu inteqrasiya hazırda yalnız aliasları idarə edir.
- Plugin, Domen Xəritələmə (Domain Mapping) “www subdomain” ayarınıza bağlı olaraq `www.<domen>` əlavə edə və ya silə bilər.

## Nümunə API Çağırışı (cURL)
Aşağıda konseptual bir nümunə verilmişdir (öz mühitinə uyğunlaşdırın). Dəqiq parametrlər üçün rəsmi sənədlərə baxın.

```
POST https://your-hestia-host:8083/api/
Content-Type: application/x-www-form-urlencoded

cmd=v-add-web-domain-alias
&user=admin
&password=YOUR_API_PASSWORD  (və ya &hash=YOUR_API_HASH)
&arg1=admin                  (WU_HESTIA_ACCOUNT)
&arg2=network.example.com    (WU_HESTIA_WEB_DOMAIN)
&arg3=customer-domain.com    (əlavə ediləcək alias)
&arg4=yes                    (WU_HESTIA_RESTART)
&returncode=yes
```

Silmək üçün isə `cmd=v-delete-web-domain-alias` və eyni arqumentlərdən istifadə edin.

## Problemlərin Həlli
- API-dən HTTP xətası: `WU_HESTIA_API_URL` ünvanının çatdırıla biləcəyini və `/api` hissəsini ehtiva etdiyini yoxlayın.
- Autentifikasiya xətaları: `WU_HESTIA_API_USER` və ya `WU_HESTIA_API_PASSWORD` və ya `WU_HESTIA_API_HASH` dəyərlərini təsdiqləyin.
- Loglarda “Missing account/base domain” (Hesab/əsas domen yoxdur): `WU_HESTIA_ACCOUNT` və `WU_HESTIA_WEB_DOMAIN` dəyərlərinin Hestia-da təyin edildiyinə və düzgün olduğuna əmin olun.

## Referanslar
- Hestia REST API: https://hestiacp.com/docs/server-administration/rest-api.html
- Hestia CLI Referansı (Aliaslar): https://hestiacp.com/docs/reference/cli.html#v-add-web-domain-alias
