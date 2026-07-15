---
title: Hestia Control Panel ინტეგრაცია
sidebar_position: 7
_i18n_hash: 252519613f4d84d44875a5b2090e4bd6
---
# Hestia Control Panel ინტეგრაცია

ეს გზამი აგიხსნით, როგორ დავაყენოთ Ultimate Multisite Hestia ინტეგრაცია, რომ თქვენს ქსელში მაცნობილი დომეინები ავტომატურად დაემატოს (და მოიხსნას) როგორც Web Domain Aliases Hestia-ში.

- Hestia CLI-ის მითითებები: v-add-web-domain-alias / v-delete-web-domain-alias
- ოფიციალური REST API დოკუმენტაცია: https://hestiacp.com/docs/server-administration/rest-api.html

## რა აკეთებს ეს {#what-it-does}
- როდესაც Ultimate Multisite-ში დომენი დაუკავშირდება (map), ინტეგრაცია Hestia API-ს აგზავნის შემდეგ ბრძანებას:
  - `v-add-web-domain-alias <USER> <DOMAIN> <ALIAS> [RESTART]`
- როდესაც დომენის დაუკავშირებას მოხდება, ის ასრულებს:
  - `v-delete-web-domain-alias <USER> <DOMAIN> <ALIAS> [RESTART]`
- შესაძლებელია opcionalურად `www.` ალიას დამატება/მოხსნა იმის მიხედვით, თუ როგორ დაყენებულია თქვენი "Auto-create www subdomain" პარამეტრი Domain Mapping-ის პარამეტრებში.

## წინაპირობები {#prerequisites}
- არსებული Hestia Web Domain, რომელიც უკვე მიუთითებს თქვენს WordPress ინსტალაციაზე. ინტეგრაცია აკავშირებს ალიას ამ ძირითად დომენთან.
- Hestia API-ის წვდომა ჩართული უნდა იყოს. შეგიძლიათ ავтенტიცირება პაროლის ან API hash/token-ით.

API-ის წვდომისა და ავтенტიზაციის დეტალებისთვის იხილეთ Hestia-ს REST API დოკუმენტაცია:
https://hestiacp.com/docs/server-administration/rest-api.html

## კონფიგურაცია (Wizard → Integrations → Hestia) {#configuration-wizard--integrations--hestia}
მიუთითეთ შემდეგი მნიშვნელობები:

`WU_HESTIA_API_URL` (საჭიროა)
  - ძირითადი API终პოინტი, როგორც წესი `https://your-hestia-host:8083/api/`.

`WU_HESTIA_API_USER` (საჭიროა)
  - Hestia მომხმარებელი, რომელიც გამოიყენება API ბრძანებებისთვის (ხშირად არის `admin`).

`WU_HESTIA_API_PASSWORD` ან `WU_HESTIA_API_HASH` (ቢያንስ ერთი)
  - აირჩიეთ ერთ-ერთი ავтенტიზაციის მეთოდი: პაროლი ან API ჰეშ/ტოკენი.

`WU_HESTIA_ACCOUNT` (საჭიროა)
  - Web Domain-ის (მფლობელის) ანგარიში Hestia-ში; ეს არის პირველი არგუმენტი CLI-სთვის.

`WU_HESTIA_WEB_DOMAIN` (საჭიროა)
  - არსებული Hestia Web Domain, რომელიც თქვენს WordPress-ს აწვდის (ალეიას აქ დაემატება).

`WU_HESTIA_RESTART` (არ არის სავალდებულო; ნაგულისხმევი `yes`)
  - შეცვლილი ალეიების შემდეგ სერვისების გადატვირთვა/დატვირთვა.

თქვენ შეგიძლიათ ეს კონსტანტები ჩასვათ `wp-config.php`-ში, ან დაადგინოთ ისინი ხელით.

## დაყენების შემოწმება {#verifying-setup}
- ვიზორდის „Testing“ (ტესტირების) ნაბიჯზე, პლაგინი API-ის საშუალებით იძახებს `v-list-web-domains <WU_HESTIA_ACCOUNT> json`-ს. წარმატებული პასუხი ადასტურებს კავშირს და ავთენტიფიკაციას.
- დომეინის მაცნობის შემდეგ, შეამოწმეთ Hestia-ში: Web > ძირითადი დომენი > Aliases (ალეიები). თქვენ უნდა დაინახოთ ახალი ალეისი.

## შენიშვნები და რჩევები {#notes--tips}
- დარწმუნდით, რომ `WU_HESTIA_WEB_DOMAIN` უკვე არსებობს და მფლობელობაშია `WU_HESTIA_ACCOUNT`-ის მიერ.
- თუ SSL საჭიროა, სერტიფიკატების მართვა ხდება Hestia-ში. ამ ეტაპზე ეს ინტეგრაცია მხოლოდ ალეიებს უჭერს მხარს.
- პლაგინი ასევე შეიძლება დაამატოს/ამოიღოს `www.<domain>`, რაც დამოკიდებულია თქვენს Domain Mapping „www subdomain“ პარამეტრებზე.

## API-ის მაგალითი (cURL) {#example-api-call-curl}
ქვემოთ მოცემულია კონცეპტუალური მაგალითი (შეასწორეთ თქვენი გარემოსთვის). ზუსტი პარამეტრებისთვის მიმართეთ ოფიციალურ დოკუმენტაციას.

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

წაშლისთვის გამოიყენეთ `cmd=v-delete-web-domain-alias` და იგივე არგუმენტები.

## პრობლემების მოხსნა (Troubleshooting) {#troubleshooting}
- API-დან HTTP შეცდომა: გადაამოწმეთ, ხელმისაწვდომია თუ არა `WU_HESTIA_API_URL` და აქვს თუ არა მას `/api`.
- ავთენტიფიკაციის შეცდომები: დაადასტურეთ `WU_HESTIA_API_USER` და ან `WU_HESTIA_API_PASSWORD` ან `WU_HESTIA_API_HASH`.
- ჟურნალებში "Missing account/base domain" (გამოტოვებული ან ბაზის დომენი): დარწმუნდით, რომ Hestia-ში დაყენებულია და ვალიდურია `WU_HESTIA_ACCOUNT` და `WU_HESTIA_WEB_DOMAIN`.

## მითითებები {#references}
- Hestia REST API: https://hestiacp.com/docs/server-administration/rest-api.html
- Hestia CLI Reference (Aliases): https://hestiacp.com/docs/reference/cli.html#v-add-web-domain-alias
