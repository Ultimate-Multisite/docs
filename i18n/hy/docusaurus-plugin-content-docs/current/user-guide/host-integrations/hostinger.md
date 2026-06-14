---
title: Hostinger (hPanel) ինտեգրում
sidebar_position: 7
_i18n_hash: db876ad40b78d2075e03ba70fe7f541f
---
# Hostinger (hPanel) Ինտեգրում

## Ընդհանուր տեսքը

Hostinger-ը հայտնի վեբ հոස්թինգի պրովայդեր է՝ ժամանակակից վերահսկող պանելով՝ hPanel։ Ultimate Multisite Hostinger-ի ինտեգրումը թույլ է տալիս ավտոմատ դոմենային սինխրոնիզացիա Ultimate Multisite-ի և Hostinger-ի hPanel-ի միջև, ինչը հնարավորություն է տալիս ձեր WordPress admin-ից անմիջապես կառավարել դոմենների քարտեզագրումները և ենթադոմենները։

## Առանձնահատկություններ

- Ինչպես hPanel-ում ավտոմատ հավելվածային (addon) դոմեններ ստեղծել
- Ինչպես hPanel-ում ավտոմատ ենթադոմեններ ստեղծել (ենթադոմենների մուլտիսայտ կառուցումների համար)
- Երբ քարտեզագրումները ջնջվում դոմենի հեռացում
- Համակարգված ինտեգրում hPanel-ի դոմենային կառավարման API-ի հետ

## Առ պահեր

Hostinger-ի ինտեգրումը օգտագործելու համար ձեզ անհրաժեշտ է.

1. Hostinger հաշիվ՝ hPanel-ի մուտքով
2. API տոկեն Hostinger-ից
3. Հետևյալ հաստատունները (constants) սահմանել ձեր `wp-config.php` ֆայլում.

```php
define('WU_HOSTINGER_API_TOKEN', 'your_hostinger_api_token');
define('WU_HOSTINGER_ACCOUNT_ID', 'your_hostinger_account_id');
```

Ընդհանուր առմամբ, դուք կարող եք նաև սահմանել.

```php
define('WU_HOSTINGER_API_URL', 'https://api.hostinger.com/v1'); // Սխալ API ծայրակետ (endpoint)
```

## Կài đặtի ցուցումներ

### 1. Ստեղծեք ձեր Hostinger API տոկենը

1. Մուտք գործեք ձեր Hostinger հաշվին և մուտքագրեք hPanel-ը։
2. Գնացեք **Account Settings** → **API Tokens** (Հաշվի կարգավորումներ → API տոկեններ)
3. Սեղմեք **Create New Token** (Ստեղծել նոր տոկեն)
4. Տրամադրեք ձեր տոկենին բացատրական անուն (օրինակ՝ "Ultimate Multisite")։
5. Ընտրեք անհրաժեշտ թույլտվությունները.
   - Domain management (Դոմենի կառավարում)
   - Subdomain management (Ենթադոմենի կառավարում)
6. Պահպանեք ստացված տոկենը և պահպանեք այն անվտանգ։

### 2. Գտեք ձեր հաշվի ID-ն

1. hPanel-ում գնացեք **Account Settings** → **Account Information** (Հաշվի կարգավորումներ → Հաշվի տեղեկություններ)
2. Ձեր Account ID-ն կցուցադրվի այս էջում։
3. Պատճենեք և պահպանեք այս ID-ն հաջորդ քայլի համար։

### 3. Ավելացրեք հաստատունները wp-config.php-ին

Ավելացրեք հետևյալ հաստատունները ձեր `wp-config.php` ֆայլում.

```php
define('WU_HOSTINGER_API_TOKEN', 'your_hostinger_api_token');
define('WU_HOSTINGER_ACCOUNT_ID', 'your_hostinger_account_id');
```

Եթե ձեր Hostinger հաշիվը օգտագործում է այլ API ծայրակետ (endpoint), դուք կարող եք այն անհատականացնել.

```php
define('WU_HOSTINGER_API_URL', 'https://api.hostinger.com/v1');
```

### 4. Միացրեք ինտեգրումը (Enable the Integration)

1. WordPress-ի ადմինի մուտքից գնացեք **Ultimate Multisite > Settings**-ին։
2. Գնացեք **Domain Mapping** տաբին։
3. Կանգնեք ներքև և գտեք **Host Integrations**-ը։
4. Թողարկեք (Enable) **Hostinger (hPanel)** ինտեգրումը։
5. Սեղմեք **Save Changes**-ի վրա։

## Ինչպես է աշխատում

### Addon Domains (Լրացուցիչ Դոմեններ)

Երբ Ultimate Multisite-ում դուք մ్యాպում եք Դոմեն, հետևյալը տեղի է ունենում.

1. Ինտեգրումը Hostinger-ի API-ին ուղարկում է հարցում՝ դոմենը որպես լրացուցիչ դոմեն (addon domain) ավելացնելու համար։
2. Դոմենը կարգավորվում է, որ այն կշարունակի ձեր արմատական թղթապանակին (root directory) ուղղվել։
3. Երբ դոմենային մ్యాպումը հեռացվում է, ինտեգրումը ավտոմատ կերպով հեռացնում է լրացուցիչ դոմենը hPanel-ից։

### Subdomains (Սաբդոմեններ)

Սաբդոմենային մուլտիմալիտների տեղադրումների համար, երբ ստեղծվում է նոր կայք.

1. Ինտեգրումը վերցնում է ամբողջ դոմենից սաբդոմենի մասը։
2. Այն Hostinger-ի API-ին ուղարկում է հարցում՝ սաբդոմենը ավելացնելու համար։
3. Սաբդոմենը կարգավորվում է, որ այն կշարունակի ձեր արմատական թղթապանակին (root directory) ուղղվել։

## Կարևոր նշումներ

- Ինտեգրումը օգտագործում է Hostinger-ի REST API՝ հաշվի հետ շփվելու համար։
- Ձեր API տոկենը պետք է ունենա անհրաժեշտ թույլտվություն դոմենի և սաբդոմենների կառավարման համար։
- Ինտեգրումը չի մշակում DNS-ի կոնֆիգուրացիան. դոմենները պետք է արդեն ուղղված լինեն ձեր Hostinger հաշվին։
- API հարցումները տեղի են ունենում անվտանգ HTTPS միջոցով։
- Պահպանեք ձեր API տոկենը անվտանգ և երբեք չուղարկեք այն հանրությանը։

## Խնդիրների լուծում (Troubleshooting)

### API Connection Issues (API միացման խնդիրներ)

* Ստուգեք, որ ձեր API token-ը ճիշտ է և չի ժամ պարտված։
* Ստուգեք, որ ձեր Account ID-ն ճիշտ է։
* Համոզվեք, որ ձեր API token-ը ունի անհրաժեշտ թույլտվությունները տիրույթի կառավարման համար։
* Ստուգեք, որ Hostinger հաշիվը ակտիվ է և լիարժեք վիճակում է։

### Տիրույթ չի ավելացվել (Domain Not Added)

* Ստուգեք Ultimate Multisite-ի logs-ը՝ որևէ սխալ հաղորդագրություն կան։
* Հաստատեք, որ տիրույթը դեռ չի ավելացվել ձեր Hostinger հաշվին։
* Համոզվեք, որ Hostinger հաշիվը չի հասել իր լիմիտին՝ ավելացված տիրույթների համար (addon domains)։
* Հաստատեք, որ տիրույթը ճիշտ է ուղղված ձեր Hostinger nameservers-ին։

### SSL Գրանցման Խնդիրներ (SSL Certificate Issues)

* Ինտեգրացիան չի մշակում SSL վկայականների տրամադրումը։
* Hostinger-ը սովորաբար անվճան SSL վկայականներ է տրամադրում AutoSSL-ի միջոցով։
* Դուք կարող եք SSL վկայականները ուղղակի կառավարել hPanel-ում **SSL/TLS** բաժնում։
* Կամ այլընտրանքային լուծում՝ օգտագործեք Let's Encrypt-ը Hostinger-ի AutoSSL հնարավորությամբ։

## Աջակցություն (Support)

Hostinger-ի հետ համատեղելիության վերաբերյալ լրացուցիչ օգնության համար, խնդրում ենք դիմել հետևյալ կապերի՝

* [Hostinger API Documentation](https://support.hostinger.com/en/articles/4286-api-documentation)
* [Ultimate Multisite Documentation](/docs)
* [Ultimate Multisite Support](https://ultimatemultisite.com/support)
