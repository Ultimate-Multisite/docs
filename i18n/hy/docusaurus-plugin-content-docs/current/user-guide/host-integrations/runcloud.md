---
title: RunCloud ինտեգրում
sidebar_position: 13
_i18n_hash: 05a61d871e286ae6c87bc7653377dee4
---
# RunCloud Ինտեգրում

## Ընդհանուր տեսքը (Overview)
RunCloud-ը ամպային սերվերների կառավարման հարթակ է, որը թույլ է տալիս ձեր վեբ այլապատիկները (web applications) հեշտությամբ տեղադրել և կառավարել։ Այս ինտեգրումը թույլ է տալիս ավտոմատ դոմենի սինխրոնիզացիա և SSL վկայագրերի կառավարում Ultimate Multisite-ի և RunCloud-ի միջև։

## Առանձնահատկություններ (Features)
- Ավտոմատ դոմենի սինխրոնիզացիա
- SSL վկայագրերի կառավարում
- Կապերը ջնջելիս դոմենի հեռացում

## Պահանջներ (Requirements)
Հետևյալ հաստատուն արժեքները պետք է սահմանվեն ձեր `wp-config.php` ֆայլում.

```php
define('WU_RUNCLOUD_API_KEY', 'your_api_key');
define('WU_RUNCLOUD_API_SECRET', 'your_api_secret');
define('WU_RUNCLOUD_SERVER_ID', 'your_server_id');
define('WU_RUNCLOUD_APP_ID', 'your_app_id');
```

## Կài đặtի ցուցումներ (Setup Instructions)

### 1. Ստացեք RunCloud API ինտերֆեյսը (Get Your RunCloud API Credentials)

1. Մուտք գործեք ձեր RunCloud դաշտարկը (dashboard)։
2. Գնացեք «User Profile»-ի (օգտատիրոջ պրոֆիլ) և սեղմեք ձեր պրոֆիլի պատկերին (աջ վերև անկյունում)։
3. Ընտրեք «API»-ը մենյուից։
4. Եթե դեռ չունեք, սեղմեք «Generate API Key»-ի վրա։
5. Պահպանեք ձեր API Key-ը և API Secret-ը։

### 2. Ստացեք ձեր Server ID-ն և App ID-ն (Get Your Server and App IDs)

1. RunCloud դաշտարկում գնացեք «Servers»-ի (Սերվերներ)։
2. Ընտրեք այն սերվերը, որտեղ տեղադրված է ձեր WordPress multisite-ը։
3. Server ID-ն երևում է URL-ում. `https://manage.runcloud.io/servers/{SERVER_ID}`:
4. Գնացեք «Web Applications» և ընտրեք ձեր WordPress-ի կայքը։
5. App ID-ն երևում է URL-ում. `https://manage.runcloud.io/servers/{SERVER_ID}/apps/{APP_ID}`:

### 3. Ավելացրեք հաստատուն արժեքները wp-config.php-ին (Add Constants to wp-config.php)

Այս հետևյալ հաստատուն արժեքները սովորում են ձեր `wp-config.php` ֆայլի մեջ.

```php
define('WU_RUNCLOUD_API_KEY', 'your_api_key');
define('WU_RUNCLOUD_API_SECRET', 'your_api_secret');
define('WU_RUNCLOUD_SERVER_ID', 'your_server_id');
define('WU_RUNCLOUD_APP_ID', 'your_app_id');
```

### 4. Թողեք ինտեգրումը ակտիվ (Enable the Integration)

1. WordPress ადმინში, გადადით Ultimate Multisite > Settings-ში
2. "Domain Mapping" ტაბაში გადადით
3. დაწევთ ქვემოთ "Host Integrations"-ზე
4. ჩართეთ RunCloud ინტეგრაცია
5. დააჭირეთ "Save Changes"-ს

## როგორ მუშაობს ეს

როდესაც დომენი Ultimate Multisite-ში იმაპირიზდება:

1. ინტეგრაცია აგზავნის მოთხოვნას RunCloud-ის API-ს, რომ დომენი თქვენს აპლიკაციაში დაამატოს
2. თუ დომენი წარმატებით დაემატება, ინტეგრაცია ასევე გადაიტანს SSL სერტიფიკატებს
3. როდესაც დომენის მაპირება მოიხსნება, ინტეგრაცია დომენს RunCloud-დან წაშლის

ქვ드시ნების (subdomain) დაყენებისთვის, ინტეგრაცია ავტომატურად გააკეთებს ქვ드시ნების შექმნის პროცესს RunCloud-ში თქვენს ქსელში ახალი საიტების დამატებისას.

## პრობლემების მოგვარება

### API-ის კავშირის პრობლემები
- გადაამოწმეთ, სწორია თუ არა თქვენი API საკრედენციალები
- შეამოწმეთ, სწორია თუ არა თქვენი სერვერის და აპლიკაციის ID-ები
- დარწმუნდით, რომ თქვენს RunCloud ანგარიშს აქვს საჭირო უფლებები

### SSL სერტიფიკატების პრობლემები
- RunCloud-ს შეიძლება დასჭირდეს დრო SSL სერტიფიკატების გამოცემისათვის
- გადაამოწმეთ, სწორად მიუთითებს თუ არა თქვენი დომენები თქვენი სერვერის IP მისამართზე
- შეამოწმეთ RunCloud-ის SSL პარამეტრები თქვენი აპლიკაციისთვის

### დომენი არ დაემატა
- გადაამოწმეთ Ultimate Multisite-ის лоgs (ლოგები) შეცდომის შეტყობინებების მიხედვით
- გადაამოწმეთ, რომ დომენი უკვე არ არის დამატებული RunCloud-ში
- დარწმუნდით, რომ თქვენს RunCloud პლანსს აქვს მხარდაჭერა მრავალი დომენისათვის
