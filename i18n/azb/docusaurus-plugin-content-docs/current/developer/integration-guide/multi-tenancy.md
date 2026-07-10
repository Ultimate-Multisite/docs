---
title: چوخ‌مستاجیرلی ادغامی
sidebar_position: 6
_i18n_hash: 3cf63ea3f0dba9dcf2a8fc74478aedbb
---
# Multi-Tenancy بیرلشمەسی {#multi-tenancy-integration}

Ultimate Multisite: Multi-Tenancy 1.2.0 موستەقیل tenant-لار، کؤچورمه یوخلاماسی، وە tenant یاشام دؤنگوسو اوتوماتلاشدیرماسی اوچون بیر نئچه بیرلشمه نقطه‌سینی دَییشیر.

## Tenant باشلاتما آقیشی {#tenant-bootstrap-flow}

tenant یارادان یا دَییشدیرن بیرلشمه‌لر بو سیرا ائله گئتمه‌لیدیر:

1. tenant رجیستری قئیدینی و ایزولاسیون مودلینی حل ائدین.
2. tenant وئری‌تابانی یازیجیسینی یارادین یا یوخلایین.
3. tenant شِماسینی باشلادین.
4. tenant ایشلدنلرینی حاضیرلایین.
5. tenant یؤنلندیرمه‌سینی و فایل‌سیستم یوللارینی قئید ائدین.
6. tenant گؤستریلمه‌دن قاباق کؤچورمه یوخلاماسینی ایشلدین.

موستەقیل tenant-ین شَبَکه وئری‌تابانی باغلانتیسینی یئنی‌دن ایشلده بیله‌جه‌یینی فرض ائتمَیین. addon طرفیندن وئریلən tenant رجیستریسی و یازیجی abstraction-لارینی ایشلدین.

## SSO و REST hook-لاری {#sso-and-rest-hooks}

حالسیز tenant autologin، مقصد claim-ی، JTI replay قوروماسی، بیتیش سقفی، و origin پین‌لَمه‌سی اولان قیسا عومرلو token-لار ایشلدیر. login دویمه‌لری یا اوزاق‌دان ایداره لینک‌لری آرتیران بیرلشمه‌لر، tenant login URL-لارینی بیر‌باشا قورماق یئرینه دستَکلنن SSO آقیشی ائله tenant گؤروش‌لری یاراتمالیدیر.

شَبَکه طرفی API audit حادثه‌لری و گونلوک خلاصه‌لر موستەقیل tenant gateway-لری اوچون موجوددور. tenant یاشام دؤنگوسو endpoint-لرینی چاغیران باییر سیستم‌لری debug ائدنده بو log-لاری ایشلدین.

## موستەقیل موشتری عمل URL-لری {#sovereign-customer-action-urls}

Ultimate Multisite v2.13.0 موستەقیل-tenant موشتری عمل‌لرینی Account، checkout، billing، invoice، سایت، قالب دَییشدیرمه، و domain-mapping آقیش‌لری اوچون اصلی سایتا یؤنلندیریر. tenant طرفی ایداره لینک‌لری گؤستَرن بیرلشمه‌لر بو عمل‌لری اصلی-سایت موشتری پنلینه یؤنلندیرمه‌لی و ایشلدَن عملدی بیتیرَندن سونرا tenant-ا قاییدا بیلسین دئیه یوخلانمیش return هدفی آرتیرمالیدیر.

domain-لار آراسی ایداره لینک‌لری اوچون core SSO wrapper-ینی ایشلدین:

```php
$url = wu_with_sso($main_site_customer_url);
```

یارادیلان URL `wu_sso_url` واسطه‌سیله filter ائدیله بیلر؛ بو filter، SSO URL، ایندی‌کی ایشلدَن، هدف site ID-سی، و redirect باغلامینی آلیر. Add-on-لار بو filter-دن provider-ه مخصوص باغلام آرتیرماق یا Ultimate Multisite-ین token یوخلاماسینی ساخلاماقلا broker URL-نی دَییشدیرمک اوچون ایشلده بیلر.

membership، invoice، billing-address، template، یا domain-management وضعیتینی موستەقیل tenant ایچینده کپی ائتمَیین. tenant Dashboard-ونو باشلادیجی، اصلی-سایت موشتری پنلینی ایسه ایداره اولونان عمل‌لر اوچون قئید سیستمی کیمی گؤرون.

## کؤچورمه یوخلاماسی {#migration-verification}

کؤچورمه یا یاشام دؤنگوسو بیرلشمه‌سی tenant وئری‌لرینی دَییشدیرَندن سونرا یوخلاما قاپیلارینی ایشلدین:

- `wp tenant verify-no-legacy --site=<site-id>` tenant-ین آرتیق کؤهنه شَبَکه طرفی یوللارا باغلی اولمادیغینی تصدیق ائدیر.
- `wp tenant verify-sovereign-push --site=<site-id>` موستەقیل push ایش‌لرینین ایمال ائدیب بوشالدا بیلدیگینی تصدیق ائدیر.

بیرلشمه‌لر اوغورسوز یوخلامانی deployment مانعەسی کیمی گؤرمه‌لی و خطا حل اولانا قدر tenant-ی live کیمی علامت‌لَمَکدن چکینمه‌لیدیر.

## Tenant سیلینمه‌سی {#tenant-deletion}

سیلینمه آقیش‌لری addon teardown یولونو چاغیرمالیدیر کی، tenant وئری‌تابانی کیملیک بیلگی‌لری تمیزلنسین. دیش بیرلشمه‌لر teardown اوغورلا بیتَندن سونرا provider قایناقلارینی سیله بیلر، اما یوخلاما یا async push ایش‌لری هله ایشلرکن host وئری‌تابانلارینی یا قاووقلارینی سیلممه‌لیدیر.

## کؤهنلمیش وئری‌تابانی router-ی {#deprecated-database-router}

کؤهنه `Database_Router` deprecation stub ایله عوض اولونوب. یئنی بیرلشمه‌لر کؤهنه router class-ینا باغلی قالماق یئرینه ایندی‌کی سایت router-ی و tenant رجیستری API-لری واسطه‌سیله tenant-لاری حل ائتمه‌لیدیر.
