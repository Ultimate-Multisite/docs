---
title: ServerPilot ინტეგრაცია
sidebar_position: 16
_i18n_hash: fdbdebe91bc1687b519dc0986de244d3
---
# ServerPilot ინტეგრაცია

## მიმოხილვა {#overview}
ServerPilot არის ღრუბლოვანი სერვისი, რომელიც საშუალებას გაძლევთ WordPress-ს და სხვა PHP ვებსაიტებს განათავსოთ DigitalOcean-ის, Amazon-ის, Google-ის ან ნებისმიერი სხვა სერვერის上で. ეს ინტეგრაცია უზრუნველყოფს დომეინების ავტომატურ სინქრონიზაციას და SSL სერტიფიკატების მართვას Ultimate Multisite-სა და ServerPilot-ს შორის.

## ფუნქციები {#features}
- დომეინის ავტომატური სინქრონიზაცია
- Let's Encrypt-ით SSL სერტიფიკატების მართვა
- SSL-ის ავტომატური განახლება

## მოთხოვნები {#requirements}
ქვემოთ მოცემული კონსტანტები უნდა იყოს განსაზღვრული თქვენს `wp-config.php` ფაილში:

```php
define('WU_SERVER_PILOT_CLIENT_ID', 'your_client_id');
define('WU_SERVER_PILOT_API_KEY', 'your_api_key');
define('WU_SERVER_PILOT_APP_ID', 'your_app_id');
```

## დაყენების ინსტრუქციები {#setup-instructions}

### 1. მიიღეთ თქვენი ServerPilot API საკრედენტები {#1-get-your-serverpilot-api-credentials}

1. შეხვიდით თქვენს ServerPilot-ის პანელში (dashboard)
2. გადადით "Account" > "API"-ზე
3. შექმენით ახალი API გასაღები, თუ ჯერ არ გაქვთ
4. დააკოპირეთ Client ID და API Key

### 2. მიიღეთ თქვენი App ID {#2-get-your-app-id}

1. ServerPilot-ის პანელში გადადით "Apps"-ზე
2. აირჩიეთ ის აპლიკაცია, სადაც თქვენი WordPress multisite არის განთავსებული
3. App ID-ს შეგიძლიათ ნახოთ URL-ში: `https://manage.serverpilot.io/apps/{APP_ID}`

### 3. დაამატეთ კონსტანტები wp-config.php-ში {#3-add-constants-to-wp-configphp}

დაამატეთ შემდეგი კონსტანტები თქვენს `wp-config.php` ფაილში:

```php
define('WU_SERVER_PILOT_CLIENT_ID', 'your_client_id');
define('WU_SERVER_PILOT_API_KEY', 'your_api_key');
define('WU_SERVER_PILOT_APP_ID', 'your_app_id');
```

### 4. გააქტიურეთ ინტეგრაცია {#4-enable-the-integration}

1. თქვენს WordPress ადმინში გადადით Ultimate Multisite > Settings-ზე
2. გადადით "Domain Mapping" ტაბულზე
3. დაწევთ ქვემოთ "Host Integrations"-ზე
4. გაააქტიურეთ ServerPilot ინტეგრაცია
5. დააწკაპუნეთ "Save Changes"-ზე

## როგორ მუშაობს {#how-it-works}

### დომეინის სინქრონიზაცია {#domain-syncing}

როდესაც დომენი არის დამატებული Ultimate Multisite-ში:

1. ინტეგრაცია იღებს დომეინების ამჟამინდელ სიას ServerPilot-იდან
2. ის ახალ დომე인을 სიაში დამატებს (თუ შესაძლებელია, ასევე www ვერსიასთან ერთად)
3. ის განახლებულ სიას API-ის საშუალებით აგზავნის ServerPilot-ს
4. ServerPilot განაახლებს თქვენი აპლიკაციის დომეინების სიას

### SSL სერტიფიკატის მართვა {#ssl-certificate-management}

დომეინების სინქრონიზაციის შემდეგ:

1. ინტეგრაცია ავტომატურად ამოქმედებს AutoSSL-ს თქვენი აპლიკაციისთვის
2. ServerPilot ახორციელებს SSL სერტიფიკატის გამოცემასა და ინსტალაციას Let's Encrypt-ის გამოყენებით
3. ServerPilot ასევე ახორციელებს SSL სერტიფიკატების ავტომატურ განახლებას

## SSL სერტიფიკატის ვერიფიკაცია (შეამოწმება) {#ssl-certificate-verification}

ინტეგრაცია დაყენებულია ServerPilot-ისთვის SSL სერტიფიკატის ვერიფიკაციის ცნებების რაოდენობის გაზრდისთვის, რადგან ServerPilot-ს შეიძლება დასჭირდეს დრო SSL სერტიფიკატის გამოცემისა და ინსტალაციისთვის. ნაგულისხმევად, ის ცდილობს 5-ჯერ ვერიფიციას, მაგრამ ამის შეცვლა შესაძლებელია ფილტრების გამოყენებით.

## პრობლემების მოგვარება (Troubleshooting) {#troubleshooting}

### API-ის კავშირის პრობლემები {#api-connection-issues}
- გადაამოწმეთ, სწორია თუ არა თქვენი Client ID და API Key
- შეამოწმეთ, სწორია თუ არა თქვენი App ID
- დარწმუნდით, რომ თქვენს ServerPilot ანგარიშს აქვს საჭირო უფლებები

### SSL სერტიფიკატის პრობლემები {#ssl-certificate-issues}
- ServerPilot მოითხოვს, რომ დომეინებს ჰქონდეთ ვალიდური DNS ჩანაწერები თქვენს სერვერთან მიმართულებით SSL სერტიფიკატების გამოცემის წინ
- თუ SSL სერტიფიკატები არ იქმნება, შეამოწმეთ, სწორად არის თუ არა თქვენი დომეინები მიმართული თქვენი სერვერის IP მისამართისკენ
- ServerPilot-ს შეიძლება დასჭირდეს დრო SSL სერტიფიკატების გამოცემისა და ინსტალაციისთვის (ჩვეულებრივ 5-15 წუთი)

### დომეინის დამატება ვერ მოხდა {#domain-not-added}
- გადაამოწმეთ Ultimate Multisite-ის лоgs (ლოგები) შეცდომის შეტყობინებების მიხედვით
- დაადასტურეთ, რომ დომენი უკვე არ არის დამატებული ServerPilot-ში
- დარწმუნდით, რომ თქვენი ServerPilot პლანი მხარს უჭერს იმ დომეინების რაოდენობას, რომელთა დამატებასაც ახორციელებთ

### დომეინის აღება (Domain Removal) {#domain-removal}
- ამჟამად, ServerPilot API არ გთავაზობთ ინდივიდუალური დომეინების წაშლის საშუალებას.
- Ultimate Multisite-ში დომეინის മാპინგის (mapping) მოხსნისას, ინტეგრაცია ServerPilot-ის დომეინების სია განაახლებს და წაშლილი დომენი გამორიცხავს.
