---
title: Hestia Kontrol Paneli Integrasi
sidebar_position: 7
_i18n_hash: 252519613f4d84d44875a5b2090e4bd6
---
# Hestia Control Panel Entegrasi

Bu kılavuzda Ultimate Multisite Hestia entegrasionunu nasıl yapılandıracağınızı ve ağınızdaki haritalanmış alan adlarının otomatik olarak Hestia'da Web Domain Aliasları olarak nasıl ekleneceğini (ve kaldırılacağını) açıklarız.

- Hestia CLI referansı: v-add-web-domain-alias / v-delete-web-domain-alias
- Resmi REST API dokümantasyonu: https://hestiacp.com/docs/server-administration/rest-api.html

## Ne İşe Yarar {#what-it-does}
- Ultimate Multisite'ta bir alan adı haritalandığında, entegrasyon Hestia API'sini çağırarak şunları çalıştırır:
  - `v-add-web-domain-alias <KULLANICI> <ALAN_ADI> <ALIAS> [YENİLE]`
- Bir alan adı eşleşmesi kaldırıldığında, şun çalıştırılır:
  - `v-delete-web-domain-alias <KULLANICI> <ALAN_ADI> <ALIAS> [YENİLE]`
- Alan Eşleştirme ayarlarınızdaki "Otomatik www alt alan adı oluştur" (Auto-create www subdomain) ayarına bağlı olarak `www.` alias'ını isteğe bağlı olarak ekler/kaldırır.

## Ön Koşullar {#prerequisites}
- Zaten WordPress kurulumunuza işaret eden mevcut bir Hestia Web Domain'i olmalı. Entegrasyon, bu temel alana aliaslar ekleyecektir.
- Hestia API erişimi etkin olmalı. Kimlik doğrulaması için ya şifre ya da bir API hash/token kullanabilirsiniz.

API erişimini ve kimlik doğrulama ayrıntılarını etkinleştirmek için Hestia'nın REST API dokümantasyonuna bakın:
https://hestiacp.com/docs/server-administration/rest-api.html

## Yapılandırma (Wizard → Integrations → Hestia) {#configuration-wizard--integrations--hestia}
Aşağıdaki değerleri sağlayın:

`WU_HESTIA_API_URL` (talaplynyş) (zərur)
- Bu, əsas API nöqtəsidir, adətən `https://your-hestia-host:8083/api/`.

`WU_HESTIA_API_USER` (zərur)
- API əmrləri üçün istifadə olunan Hestia istifadəçisidir (adətən `admin`).

`WU_HESTIA_API_PASSWORD` və ya `WU_HESTIA_API_HASH` (ən azı biri)
- Bir autentifikasiya üsulunu seçin: şifrə və ya API hash/token.

`WU_HESTIA_ACCOUNT` (zərur)
- Hestia-da Web Domeninin hesabı (sahibi); bu, CLI üçün ilk arqumentdir.

`WU_HESTIA_WEB_DOMAIN` (zərur)
- WordPress-inizi xidmət edən mövcud Hestia Web Domeni (aliaslar buraya əlavə ediləcək).

`WU_HESTIA_RESTART` (isteğe bağlı; default `yes`)
- Alias dəyişiklikləri sonra xidmətləri yenidən başlatmaq/yeniləşdirmək istəyirsinizmi.

Bu sabitləri `wp-config.php`-ə daxil etmək üçün wizarddan istifadə edə bilərsiniz, və ya onları əl ilə təyin edə bilərsiniz.

## Quruluşu Yoxlamaq {#verifying-setup}
- Wizardın "Testing" addımında, plugin API vasitəsilə `v-list-web-domains <WU_HESTIA_ACCOUNT> json` çağırır. Uğurlu cavab əlaqəli və autentifikasiyanı təsdiqləyir.
- Domeni tapdıqdan sonra Hestia-da yoxlayın: Web > əsas domen > Aliaslar. Yeni aliasın əlavə edildiyini görməlisiniz.

## Qeydlər və Məsləhətlər {#notes--tips}
- `WU_HESTIA_WEB_DOMAIN`-in artıq mövcud olduğunu və `WU_HESTIA_ACCOUNT` tərəfindən sahib olduğunu təmin edin.
- SSL lazımdırsa, sertifikatları Hestia-da idarə edin. Bu inteqrasiya hazırda yalnız aliasları idarə edir.
- Domen Xəritələmə ("www subdomain") ayarınıza görə plugin `www.<domain>` əlavə edə və ya çıxara bilər.

## API Çağırışı Nümunəsi (cURL) {#example-api-call-curl}
Aşağıda konseptual bir nümunədir (mühitinizə uyğun dəyişin). Dəqiq parametrlər üçün rəsmi sənədi nəzərdən keçirin.

POST https://your-hestia-host:8083/api/
Content-Type: application/x-www-form-urlencoded

cmd=v-add-web-domain-alias
&user=admin
&password=YOUR_API_PASSWORD  (or &hash=YOUR_API_HASH)
&arg1=admin                  (WU_HESTIA_ACCOUNT)
&arg2=network.example.com    (WU_HESTIA_WEB_DOMAIN)
&arg3=customer-domain.com    (alias to add)
&arg4=yes                    (WU_HESTIA_RESTART)
&returncode=yes

Silmek üçin, `cmd=v-delete-web-domain-alias` komutunu we aynı argamenteri ulan.

## Sorunları Gözləme (Troubleshooting) {#troubleshooting}
- API'den HTTP hatası: `WU_HESTIA_API_URL` adresini ve onu `/api` bilen bir bölegi baradynç barladyk etdirol.
- Auth hataları: `WU_HESTIA_API_USER` we ya `WU_HESTIA_API_PASSWORD` ýa `WU_HESTIA_API_HASH`-yzy hasaplaň.
- Loglarda “Missing account/base domain” (Hasap/esasy domany tapyp almaz) görse: Hestia-da `WU_HESTIA_ACCOUNT` we `WU_HESTIA_WEB_DOMAIN` belli we dogry goýulandygyndan habarsy boluň.

## Goldar {#references}
- Hestia REST API: https://hestiacp.com/docs/server-administration/rest-api.html
- Hestia CLI Goldary (Aliases): https://hestiacp.com/docs/reference/cli.html#v-add-web-domain-alias
