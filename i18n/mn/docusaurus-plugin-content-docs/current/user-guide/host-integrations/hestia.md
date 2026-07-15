---
title: Hestia Удирдлагын тавцан нэгтгэл
sidebar_position: 7
_i18n_hash: 252519613f4d84d44875a5b2090e4bd6
---
# Hestia Control Panel-и Интеграци

Энэхүү зааврыг таны Ultimate Multisite Hestia интеграцийг тохируулах, ингэснээр таны сүлжээнд байгаа доменүүд нь Hestia-д Web Domain Alias болгон автоматаар нэмэгдэх (багаар) болохыг тайлбарлаж байна.

- Hestia CLI дурсгал: `v-add-web-domain-alias` / `v-delete-web-domain-alias`
- Албан ёсны REST API дурсгал: https://hestiacp.com/docs/server-administration/rest-api.html

## Яаж ажилладаг вэ {#what-it-does}
- Ultimate Multisite-д домен нь тохируулагдсаны дараа, интеграци Hestia API-г дуудан дараах үйлдлийг гүйцэтгэнэ:
  - `v-add-web-domain-alias <USER> <DOMAIN> <ALIAS> [RESTART]`
- Домен тохируулалт арилхад, дараах үйлдлийг гүйцэтгэнэ:
  - `v-delete-web-domain-alias <USER> <DOMAIN> <ALIAS> [RESTART]`
- Домен Тохируулгын (Domain Mapping settings) "Auto-create www subdomain" тохиргооноос хамаарч `www.` алиасыг сонголттай нэмэх/арилгах боломжтой.

## Хэрэгтэй зүйлс {#prerequisites}
- Таны WordPress-ийн талбарт аль хэдийн заасан байгаа Hestia Web Domain байх ёстой. Интеграци нь энэ үндсэн домен дээр алиасыг холбоно.
- Hestia API-ийг ашиглах боломжтой байх ёстой. Та нууц үг эсвэл API hash/token ашиглан баталгаажуулж болно.

API-ийн хандалт, баталгаажуулалтын талаар Hestia-ийн REST API дурслыг үзнэ үү:
https://hestiacp.com/docs/server-administration/rest-api.html

## Тохиргоо (Wizard → Integrations → Hestia) {#configuration-wizard--integrations--hestia}
Дараах утгуудыг өгнө:

`WU_HESTIA_API_URL` (заавал шаардлагатай)
  - Үндсэн API endpoint, ихэвчлэн `https://your-hestia-host:8083/api/`-тэй тэнцэнэ.

`WU_HESTIA_API_USER` (заавал шаардлагатай)
  - API командыг ашиглах Hestia хэрэглэгч (ихэвчлэн `admin`).

`WU_HESTIA_API_PASSWORD` эсвэл `WU_HESTIA_API_HASH` (нэг нь заавал байх ёстой)
  - Нэг аутентификацийн аргыг сонгоно: нууц үг эсвэл API hash/token.

`WU_HESTIA_ACCOUNT` (заавал шаардлагатай)
  - Hestia дээрх Web Domain-ийн хэрэглэгч (өмчлөгч); энэ нь CLI-ийн анхны аргумент юм.

`WU_HESTIA_WEB_DOMAIN` (заавал шаардлагатай)
  - Таны WordPress-ийг үйлчилж буй одоо байгаа Hestia Web Domain (alias-ууд энд холбогдоно).

`WU_HESTIA_RESTART` (опционол; анхны утга `yes`)
  - Alias өөрчлсөн дараа үйлчилгээг дахин ачаалах/reload хийхийг тодорхойлно.

Та эдгээр тогтмол утгуудыг `wp-config.php`-д оруулж болно, эсвэл гараар тодорхойлох боломжтой.

## Тохиргоог шалгах {#verifying-setup}
- Wizard-ийн "Testing" алхамд, плагин API-аар `<WU_HESTIA_ACCOUNT>`-ыг ашиглан `v-list-web-domains <WU_HESTIA_ACCOUNT> json`-ийг дуудна. Амжилттай хариулт нь холболт ба аутентификацийн зөв байдлыг баталгаажуулна.
- Domain-ыг тохируулсны дараа Hestia дээр шалгах: Web > үндсэн domain > Aliases. Шинэ alias нэмэгдсэн эсэхийг харах ёстой.

## Тэмдэглэл ба зөвлөгөө {#notes--tips}
- `WU_HESTIA_WEB_DOMAIN` аль хэдийн байгаа бөгөөд `WU_HESTIA_ACCOUNT`-ын өмч байсныг шалгана уу.
- SSL шаардлагатай бол сертификатуудыг Hestia дээр удирдах хэрэгтэй. Одоогоор энэ интеграци нь зөвхөн alias-ийг зохицуулдаг.
- Таны Domain Mapping "www subdomain" тохиргооноос хамааруулан плагин `www.<domain>`-ыг нэмж эсвэл арилгах боломжтой.

## API дуудлын жишээ (cURL) {#example-api-call-curl}
Доор концептуал жишээ өгсөн (танай орчинд тохируулна уу). Нарийвчилсан параметрүүдийг албан ёсны dokumentцаас үзнэ үү.

POST https://your-hestia-host:8083/api/
Content-Type: application/x-www-form-urlencoded

cmd=v-add-web-domain-alias
&user=admin
&password=YOUR_API_PASSWORD  (эсвэл &hash=YOUR_API_HASH)
&arg1=admin                  (WU_HESTIA_ACCOUNT)
&arg2=network.example.com    (WU_HESTIA_WEB_DOMAIN)
&arg3=customer-domain.com    (нэмэх алиас)
&arg4=yes                    (WU_HESTIA_RESTART)
&returncode=yes

Устгах (delete) үйлдлийн хувьд `cmd=v-delete-web-domain-alias` болон ижил аргуудыг ашиглана.

## Асуудал шийдэх {#troubleshooting}
- API-аас HTTP алдаа гарвал: `WU_HESTIA_API_URL`-ийг хүртээх боломжтой эсэхийг, мөн `/api` -ээр дуудагдаж байгаа эсэхийг шалгана.
- Аутентификацийн алдаа: `WU_HESTIA_API_USER` болон `WU_HESTIA_API_PASSWORD` (эсвэл `WU_HESTIA_API_HASH`) -ийг баталгаажуулаарай.
- Логт "Missing account/base domain" гэсэн алдаа гарвал: Hestia дотор `WU_HESTIA_ACCOUNT` болон `WU_HESTIA_WEB_DOMAIN`-ийн утгууд тохирollтой, зөв тохируулсан эсэхийг шалгана уу.

## Эх сурвалжууд {#references}
- Hestia REST API: https://hestiacp.com/docs/server-administration/rest-api.html
- Hestia CLI Референс (Aliases): https://hestiacp.com/docs/reference/cli.html#v-add-web-domain-alias
