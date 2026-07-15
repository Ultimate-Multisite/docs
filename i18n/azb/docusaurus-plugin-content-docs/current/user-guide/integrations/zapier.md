---
title: Zapier ایله بیرلشدیرمه
sidebar_position: 12
_i18n_hash: 7f23136e0e69417e244a9930f9620e95
---
# Ultimate Multisite ایله Zapier اینتگراسیونی

مقاله‌لرین بیرین‌ده [Webhooks](webhooks.md) حاققیندا دانیشدیق و اونلارین 3rd party اویقولامالارلا اینتگراسیوندا نئجه ایشله‌نه بیله‌جه‌یینی آچیقلادیق.

webhooks ایشلتمک بیر آز قاریشیقدیر، چونکو کود یازما و payload توتماق اوچون ایریلی بیلیک ایسته‌ییر. **Zapier** ایشلتمک بو چتینلیگی آشماق اوچون بیر یولدور.

Zapier 5000+ دن چوخ اویقولاما ایله اینتگراسیون داردیر و بو، آیری اویقولامالار آراسیندا اؤتوشمه‌نی آسانلاشدیرار.

شبکه‌نیزده حادثه‌لر اولاندا ایشله‌یه‌ن **Triggers** یارادا بیلرسینیز (مثلاً بیر Account یارادیلیر و account_create حادثه‌سینی ایشله‌دیر) یا خارجی حادثه‌لره جواب اولاراق شبکه‌نیزده **Actions** یارادا بیلرسینیز (مثلاً Ultimate Multisite شبکه‌نیزده یئنی Account عضولیغی یارادین).

بو، **Ultimate Multisite Zapier's triggers** و actions [REST API](https://developer.ultimatemultisite.com/api/docs/) ایله گوج آلیر دیه ممکن‌دیر.

## نئجه باشلامالی {#how-to-start}

ایلک، Zapier اویقولاما لیستین‌ده Ultimate Multisite آختارین. آلترناتیو اولاراق، [بو لینک](https://zapier.com/apps/wp-ultimo/integrations) اوستونه کلیک ائده بیلرسینیز.

Dashboard-ینیزه گئدین و یئنی Zap قورماق اوچون سول یان چوبوقدا **+** **Create Zap** دؤیمه‌سینی باسین.

![Create Zap دؤیمه‌سی اولان Zapier داشبوردي](/img/admin/webhooks-list.png)

Zap یاراتما صفحه‌سینه یؤنله‌ندیریله‌جه‌کسینیز.

آختاریش قۇتوسونا "wp ultimo" یازین. **Beta** وئرسییا سئچیمینی سئچمک اوچون کلیک ائدین.

![Zapier اویقولاما لیستین‌ده WP Ultimo آختاریشی](/img/admin/webhooks-list.png)

اویقولامامیزی سئچدیکدن سونرا، موجود حادثه‌نی سئچین: **New Ultimate Multisite Event**.

![New Ultimate Multisite Event تریگرینی سئچمک](/img/admin/webhooks-list.png)

ایندی Zapier-ه **شبکه‌نیزه** گئریش ایجازه‌سی وئرمه‌لی‌یک. **Sign in** اوستونه کلیک ائدنده **API credentials** ایسته‌یه‌ن یئنی پنجره آچیلاجاق.

![API credentials اوچون Zapier Sign in ایسته‌یی](/img/admin/webhooks-list.png)

شبکه ادمین پنلینیزه گئدین و **Ultimate Multisite > Settings** > **API & Webhooks** یولونا کئچین، سونرا API Settings بؤلمه‌سینی تاپین.

بو باغلانتی‌نین ایشله‌مه‌سی اوچون لازیم اولدوغونا گؤره **Enable API** سئچیمینی سئچین.

![API Settings و Enable API سئچیم‌لری اولان API و Webhooks تنظیم‌لری](/img/admin/settings-api-webhooks.png)

API Key و API Secret ساحه‌لرین‌ده **Copy to Clipboard** آیکونوندان ایشلدین و او قییمت‌لری اینتگراسیون صفحه‌سینه یاپیشدیرین.

URL ساحه‌سینه، پروتکول (HTTP یا HTTPS) دا داخیل اولماقلا، شبکه‌نیزین تام URL-ینی یازین.

![API Key، Secret و URL ساحه‌لری اولان Zapier اینتگراسیون صفحه‌سی](/img/admin/webhooks-list.png)

سونراکی مرحله‌یه کئچمک اوچون **Yes, Continue** دؤیمه‌سینه کلیک ائدین. هر شئ دوزگون ایشله‌سه، یئنی باغلانمیش Account-ینیز گؤرونه‌جک! یئنی trigger یاراتماق اوچون **Continue** اوستونه کلیک ائدین.

## یئنی Trigger نئجه یارادیمالی {#how-to-create-a-new-trigger}

ایندی Account-ینیز باغلاناندا موجود حادثه‌لری گؤره بیلرسینیز. بو درسلیک اوچون **payment_received** حادثه‌سینی سئچک.

![Zapier trigger-ینده payment_received حادثه‌سینی سئچمک](/img/admin/webhooks-list.png)

حادثه سئچیلندن و **continue** اوستونه کلیک ائدندن سونرا، بیر **تست مرحله‌سی** گؤرونه‌جک.

![trigger اوچون Zapier تست مرحله‌سی](/img/admin/webhooks-list.png)

بو مرحله‌ده Zapier تست ائده‌جک کی Zap-ینیز **او حادثه‌یه مخصوص payload-و گتیره بیلیرمی**. آینی نوع‌دان گله‌جک حادثه‌لرده، بو آینی قۇرۇلۇشدا معلومات گؤندریله‌جک.

![payload ایله Zapier trigger تستی اوغورلا بیتدی](/img/admin/webhooks-list.png)

درسلیگیمیزده تست **اوغورلا بیتدی** و payload اؤرنک معلوماتینی قایتاردی. بو اؤرنک معلومات actions یارادارکن بیزه یول گؤستره‌جک. Trigger-ینیز ایندی یارادیلیب و باشقا اویقولامالارا باغلانماغا حاضیردیر.

## Actions نئجه یارادیمالی {#how-to-create-actions}

Actions باشقا triggers-دن گله‌ن معلوماتدان ایشلدیر و شبکه‌نیزده یئنی گیردیلر یارادیر.

**action یاراتما مرحله‌سینده** Ultimate Multisite **Beta** و **Create Items on Ultimate Multisite** سئچیمینی سئچه‌جه‌کسینیز.

![Create Items on Ultimate Multisite ایله action یاراتماق](/img/admin/webhooks-list.png)

سونراکی مرحله‌ده یا **نئجه باشلامالی** بؤلومونده ائتدیگیمیز کیمی authentication یاراداجاقسینیز، یا دا یارادیلمیش authentication سئچه‌جه‌کسینیز. بو درسلیکده قاباقجادان یارادیلان آینی authentication-ی سئچه‌جه‌ییک.

![Zapier action اوچون authentication سئچمک](/img/admin/webhooks-list.png)

### Action-ی قورماق {#setting-up-the-action}

بو **action-ین اصلی مرحله‌سیدیر** و بورادا ایشلر بیر آز فرقلی‌دیر. سئچه‌جه‌ینیز ایلک معلومات **Item**-دیر. Item شبکه‌نیزین **معلومات مودلی**‌دیر، مثل **Customers, Payments, Sites, Emails** و باشقالاری.

![Zapier action اوچون Item نوعونو سئچمک](/img/admin/webhooks-list.png)

بیر item سئچنده، فورم سئچیلمیش item اوچون **لازیمی و اختیاری ساحه‌لری گتیرمک اوچون یئنی‌دن دوزه‌له‌جک**.

مثلاً، **Customer** item-ینی سئچنده، فورم ساحه‌لری شبکه‌ده یئنی Customer یاراتماق اوچون دولدورولماسی لازیم اولان هر شئی گتیره‌جک.

![Zapier action قورولوشوندا Customer item ساحه‌لری](/img/admin/webhooks-list.png)

**required** کیمی ایشاره‌لنمیش بوتون ساحه‌لری دولدوردوقدان و continue اوستونه کلیک ائتدیکدن سونرا، سون صفحه دولدورولموش ساحه‌لری و بوش قالان ساحه‌لری گؤستره‌جک.

![دولدورولموش و دولدورولمامیش ساحه‌لری گؤستره‌ن Zapier action تستی](/img/admin/webhooks-list.png)

تستینیز بیتیب اوغورلو اولاندا، action-ینیز قورولموش اولور. همین‌طور action تستی ایله item-ین یارادیلیب-یارادیلمادیغینی شبکه‌نیزده یوخلاماق دا اؤنملیدیر.
