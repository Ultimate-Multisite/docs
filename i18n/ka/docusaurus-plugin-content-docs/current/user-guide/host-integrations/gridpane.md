---
title: GridPane ინტეგრაცია
sidebar_position: 13
_i18n_hash: b0a6427285411feb767e828911cdd794
---
# GridPane ინტეგრაცია {#gridpane-integration}

## მიმოხილვა {#overview}
GridPane არის სპეციალიზებული WordPress ჰოსტინგ კონტროლის პანელი, რომელიც შექმნილია სერიოზული WordPress პროფესიონალებისთვის. ეს ინტეგრაცია უზრუნველყოფს დომეინის ავტომატურ სინქრონობას და SSL სერტიფიკატების მართვას Ultimate Multisite-სა და GridPane-ს შორის.

## ფუნქციები {#features}
- დომეინის ავტომატური სინქრონიზაცია
- SSL სერტიფიკატების მართვა
- SUNRISE კონსტანტის ავტომატური კონფიგურაცია

## მოთხოვნები {#requirements}
ქვემოთ მოცემული констанტები უნდა იყოს განსაზღვრული თქვენს `wp-config.php` ფაილში:

```php
define('WU_GRIDPANE', true);
define('WU_GRIDPANE_API_KEY', 'your_api_key');
define('WU_GRIDPANE_SERVER_ID', 'your_server_id');
define('WU_GRIDPANE_APP_ID', 'your_app_id');
```

## დაყენების ინსტრუქციები {#setup-instructions}

### 1. მიიღეთ თქვენი GridPane API საკრედიტები {#1-get-your-gridpane-api-credentials}

1. შეხვიდით თქვენს GridPane დეშბორტში
2. გადადით "Settings" > "API"-ზე
3. გენერირეთ API გასაღები, თუ ჯერ არ გაქვთ
4. დააკოპირეთ თქვენი API გასაღები

### 2. მიიღეთ თქვენი სერვერის და საიტის ID-ები {#2-get-your-server-and-site-ids}

1. თქვენს GridPane დეშბორტში გადადით "Servers"-ზე
2. აირჩიეთ სერვერი, სადაც განთავსებულია თქვენი WordPress multisite
3. აღნიშნეთ Server ID (ნახება URL-ში ან სერვერის დეტალების გვერდზე)
4. გადადით "Sites"-ზე და აირჩიეთ თქვენი WordPress საიტი
5. აღნიშნეთ Site ID (ნახება URL-ში ან საიტის დეტალების გვერდზე)

### 3. დაამატეთ констанტები wp-config.php-ში {#3-add-constants-to-wp-configphp}

დაამატეთ შემდეგი констанტები თქვენს `wp-config.php` ფაილში:

```php
define('WU_GRIDPANE', true);
define('WU_GRIDPANE_API_KEY', 'your_api_key');
define('WU_GRIDPANE_SERVER_ID', 'your_server_id');
define('WU_GRIDPANE_APP_ID', 'your_site_id');
```

### 4. გააქტიურეთ ინტეგრაცია {#4-enable-the-integration}

1. თქვენს WordPress ადმინში გადადით Ultimate Multisite > Settings
2. გადადით "Domain Mapping" ტაბზე
3. დაწევთ ქვემოთ "Host Integrations"-ზე
4. გაააქტიურეთ GridPane ინტეგრაცია
5. დააჭირეთ "Save Changes"-ს

## როგორ მუშაობს {#how-it-works}

როდესაც დომენი სინქრონდება Ultimate Multisite-ში:

1. ინტეგრაცია აგზავნის მოთხოვნას GridPane-ის API-ს, რომ დომენი თქვენს საიტზე დაამატოს
2. GridPane ავტომატურად უზრუნველყოფს SSL სერტიფიკატების მომწოდებას (provisioning)
3. როდესაც დომენის მაცნობა (mapping) იშლება, ინტეგრაცია დომენს GridPane-დან მოიხდის

ინტეგრაცია ასევე ავტომატურად უმკლავდება SUNRISE კონსტანტს თქვენს wp-config.php ფაილში, რომელიც საჭიროა დომენის მაცნობის სწორად დასამუშავებლად.

## SUNRISE კონსტანტის მართვა {#sunrise-constant-management}

GridPane ინტეგრაციის უნიკალური მახასიათებელი ის არის, რომ ის ავტომატურად აბრუნებს SUNRISE-ს wp-config.php ფაილში, რათა თავიდან აიცილოს კონფლიქტი GridPane-ის საკუთარი დომენის მაცნობის სისტემასთან. ეს უზრუნველყოფს, რომ ორივე სისტემა sorunების გარეშე ერთად იმუშაოს.

## პრობლემების მოგვარება (Troubleshooting) {#troubleshooting}

### API-ს კავშირის პრობლემები {#api-connection-issues}
- შეამოწმეთ, სწორია თუ არა თქვენი API key
- გადაამოწმეთ, სწორია თუ არა თქვენი სერვერის და საიტის ID
- დარწმუნდით, რომ თქვენს GridPane ანგარიშს აქვს საჭირო უფლებები

### SSL სერტიფიკატების პრობლემები {#ssl-certificate-issues}
- GridPane შეიძლება დრო დასჭირდეს SSL სერტიფიკატების გამოცემისას
- გადაამოწმეთ, სწორად არის მიმართული თქვენი დომენები თქვენი სერვერის IP მისამართზე
- შეამოწმეთ GridPane-ს SSL პარამეტრები თქვენი საიტისთვის

### დომენის დამატება ვერ მოხდა {#domain-not-added}
- გადაამოწმეთ Ultimate Multisite-ის лоgs (ლოგები) ნებისმიერი შეცდომის შესახებ
- გადაამოწმეთ, რომ დომენი უკვე არ არის დამატებული GridPane-ში
- დარწმუნდით, რომ თქვენი დომენის DNS ჩანაწერები სწორად არის კონფიგურირებული
