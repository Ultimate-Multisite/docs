---
title: Hostinger (hPanel) ინტეგრაცია
sidebar_position: 7
_i18n_hash: ce631be523b8bbe2bf3156a106abfa3d
---
# ინტეგრაცია Hostinger (hPanel)

## მიმოხილვა {#overview}

Hostinger არის პოპულარული ვებ-ჰოსტინგის პროვაიდერი, რომელსაც აქვს თანამედროვე კონტროლის პანელი - hPanel. Ultimate Multisite Hostinger ინტეგრაცია საშუალებას გაძლევთ ავტომატურად სინქრონიზოთ დომეინები Ultimate Multisite-სა და Hostinger-ის hPanel-ს შორის, რაც საშუალებას გაძლევთ ავტომატურად მართოთ დომეინის დაქვემდებარების და ქვედომეინების მიწოდება პირდაპირ თქვენი WordPress ადმინიდან.

## ფუნქციები {#features}

- ავტომატური add-on დომეინის შექმნა hPanel-ში
- ავტომატური ქვედომეინის შექმნა hPanel-ში (ქვედომეინების მულტი-საიტის ინსტალაციებისთვის)
- დომეინის აღება, როდესაც დაქვემდებარებები იშლება
- უპრობლემო ინტეგრაცია hPanel-ის დომეინის მართვის API-თან

## მოთხოვნები {#requirements}

Hostinger ინტეგრაციის გამოყენებისთვის გჭირდებათ:

1. Hostinger ანგარიში, რომელსაც აქვს hPanel-ზე წვდომა
2. API ტოკენი Hostinger-ისგან
3. შემდეგი კონსტანტების განსაზღვრა თქვენს `wp-config.php` ფაილში:

```php
define('WU_HOSTINGER_API_TOKEN', 'your_hostinger_api_token');
define('WU_HOSTINGER_ACCOUNT_ID', 'your_hostinger_account_id');
```

არასდროს არ დაგჭირდებათ განსაზღვრული:

```php
define('WU_HOSTINGER_API_URL', 'https://api.hostinger.com/v1'); // ნაგულისხმევი API终პოინტი
```

## დაყენების ინსტრუქციები {#setup-instructions}

### 1. შექმენით თქვენი Hostinger API ტოკენი {#1-generate-your-hostinger-api-token}

1. შეხვიდით თქვენს Hostinger ანგარიშში და მიიღეთ доступ hPanel-თან
2. გადადით **Account Settings** → **API Tokens**-ზე
3. დააჭირეთ **Create New Token**-ს
4. მიანიჭეთ ტოკენს აღწერით სახელი (მაგალითად, "Ultimate Multisite")
5. აირჩიეთ საჭირო უფლებები:
   - Domain management (დომეინის მართვა)
   - Subdomain management (ქვედომეინის მართვა)
6. დააკოპირეთ გენერირებული ტოკენი და უსაფრთხოდ შეინახეთ

### 2. იპოვეთ თქვენი ანგარიშის ID {#2-find-your-account-id}

1. hPanel-ში გადადით **Account Settings** → **Account Information**-ზე
2. თქვენი Account ID გამოჩნდება ამ გვერდზე
3. დააკოპირეთ და შეინახეთ ეს ID შემდეგ ეტაპისთვის

### 3. დაამატეთ კონსტანტები wp-config.php-ში {#3-add-constants-to-wp-configphp}

დაამატეთ შემდეგი კონსტანტები თქვენს `wp-config.php` ფაილში:

```php
define('WU_HOSTINGER_API_TOKEN', 'your_hostinger_api_token');
define('WU_HOSTINGER_ACCOUNT_ID', 'your_hostinger_account_id');
```

თუ თქვენს Hostinger ანგარიშს სხვა API终პოინტი აქვს, შეგიძლიათ ეს დააკონტურიროთ:

```php
define('WU_HOSTINGER_API_URL', 'https://api.hostinger.com/v1');
```

### 4. ინტეგრაციის ჩართვა {#4-enable-the-integration}

1. თქვენი WordPress ადმინში გადადით **Ultimate Multisite > Settings**-ზე
2. გადადით **Domain Mapping** ტაბულზე
3. დაწევთ ქვემოთ **Host Integrations**-ზე
4. ჩართეთ **Hostinger (hPanel)** ინტეგრაცია
5. დააჭირეთ **Save Changes**-ს

## როგორ მუშაობს {#how-it-works}

### Addon Domains (დამატებითი დომენები) {#addon-domains}

როდესაც Ultimate Multisite-ში დომე인을 ერგებთ:

1. ინტეგრაცია აგზავნის მოთხოვნას Hostinger-ის API-ს, რომ დომენი დაამატოს როგორც add-on დომენი
2. დომენი კონფიგურირდება იმის მიხედვით, რომ ის მიუთითებდეს თქვენს ძირითად დირექტორიაზე (root directory)
3. როდესაც დომენის ერგვა მოხდება, ინტეგრაცია ავტომატურად წაშლის add-on დომენს hPanel-დან

### Subdomains (ქვედომენები) {#subdomains}

ქვედომენების მრავალდონიანი ინსტალაციებისთვის, როდესაც ახალ საიტს ქმნით:

1. ინტეგრაცია იღებს ქვედომენის ნაწილს სრულ დომეინიდან
2. ის აგზავნის მოთხოვნას Hostinger-ის API-ს, რომ დაამატოს ქვედომენი
3. ქვედომენი კონფიგურირდება იმის მიხედვით, რომ ის მიუთითებდეს თქვენს ძირითად დირექტორიაზე

## მნიშვნელოვანი შენიშვნები {#important-notes}

- ინტეგრაცია იყენებს Hostinger-ის REST API-ს თქვენი ანგარიშთან კომუნიკაციისთვის
- თქვენს API ტოკენს უნდა ჰქონდეს საჭირო უფლებები დომეინებისა და ქვედომენების მართვისთვის
- ინტეგრაცია არ ახორციელებს DNS კონფიგურაციას; დომენები უკვე უნდა იყოს მიმართული თქვენს Hostinger ანგარიშზე
- API მოთხოვნები უსაფრთხოდ ხორციელდება HTTPS-ის საშუალებით
- შეინახეთ თქვენი API ტოკენი და არასდროს გააზიაროთ ის საჯაროდ

## პრობლემების მოგვარება {#troubleshooting}

### API კავშირის პრობლემები {#api-connection-issues}

* შეამოწმეთ, რომ თქვენი API ტოკენი სწორია და არ არის ვადაგასული
* გადაამოწმეთ, რომ თქვენი Account ID სწორია
* დარწმუნდით, რომ თქვენს API ტოკენს აქვს საჭირო უფლებები დომეინის მართვისთვის
* შეამოწმეთ, რომ Hostinger-ის ანგარიში აქტიური და კარგ მდგომარეობაშია

### დომეინის დამატება ვერ მოხერხდა {#domain-not-added}

* Ultimate Multisite-ის лоgs-ებში (ლოგებში) შეამოწმეთ რაიმე შეცდომის შეტყობინებები
* გადაამოწმეთ, რომ დომენი უკვე არ არის დამატებული თქვენს Hostinger ანგარიშში
* დარწმუნდით, რომ თქვენს Hostinger-ის ანგარიშს არ მიუ approach limit add-on დომეინებისთვის
* დაადასტურეთ, რომ დომენი სწორად არის მიმართული თქვენი Hostinger-ის nameservers-ზე

### SSL სერტიფიკატების პრობლემები {#ssl-certificate-issues}

* ინტეგრაცია არ ახორციელებს SSL სერტიფიკატების გამოცემას
* Hostinger-ის საშუალებით ჩვეულებრივ უფასო SSL სერტიფიკატები გთავაზობთ AutoSSL-ის მეშვეობით
* თქვენ შეგიძლიათ SSL სერტიფიკატების მართვა პირდაპირ hPanel-ში **SSL/TLS** განყოფილებაში
* ალტერნატიულად, გამოიყენეთ Let's Encrypt Hostinger-ის AutoSSL ფუნქციით

## მხარდაჭერა {#support}

Hostinger ინტეგრაციასთან დაკავშირებით დამატებითი დახმარებისთვის, გთხოვთ, მიმართოთ:

* [Hostinger API Documentation](https://support.hostinger.com/en/articles/4286-api-documentation)
* [Ultimate Multisite Documentation](/)
* [Ultimate Multisite Support](https://ultimatemultisite.com/support)
