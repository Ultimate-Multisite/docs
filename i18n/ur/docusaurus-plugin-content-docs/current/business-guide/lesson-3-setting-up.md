---
title: 'سبق 3: اپنا نیٹ ورک سیٹ اپ کرنا'
sidebar_position: 4
_i18n_hash: 4bffe2f3ba68d1a58bfc32d6b0a3c5c7
---
# Lesson 3: Setting Up Your Network

اب وقت ہے تعمیر کرنے کا۔ اس سبق میں آپ Ultimate Multisite انسٹال کریں گے اور FitSite نیٹ ورک کی بنیاد کو ترتیب دیں گے۔ یہاں لیا گیا ہر فیصلہ فٹنس کے شعبے (fitness niche) کو ذہن میں رکھ کر کیا گیا ہے۔

## Where We Left Off

ہم نے فٹنس اسٹوڈیوز کو اپنا شعبہ (niche) منتخب کیا اور اس موقع کی تصدیق کی ہے۔ اب ہم اس خیال کو ایک کام کرنے والے پلیٹ فارم میں بدلیں گے۔

## Choosing Your Hosting

آپ کا ہوسٹنگ کا انتخاب ایک سنگل ویب سائٹ کے مقابلے میں ایک مخصوص شعبے (niche platform) کے لیے زیادہ اہم ہے۔ آپ صرف ایک سائٹ کو ہوسٹ نہیں کر رہے ہیں — آپ ایک ایسا نیٹ ورک ہوسٹ کر رہے ہیں جو درجنوں یا سینکڑوں سائٹس تک بڑھ سکتا ہے۔

### What to Look For

- **WordPress Multisite support**: تمام ہوسٹ Multisite کو اچھے طریقے سے نہیں سنبھالتے
- **Wildcard SSL**: subdomain پر مبنی نیٹ ورکس کے لیے ضروری
- **Scalable resources**: آپ کو بغیر کسی منتقلی (migrating) کے بڑھنے کی جگہ چاہیے۔
- **Ultimate Multisite integration**: آٹومیٹڈ ڈومین میپنگ اور SSL سے بہت زیادہ آپریشنل محنت بچ جاتی ہے۔

### Recommended Approach

[Compatible Providers](/user-guide/host-integrations/closte) لسٹ میں سے ایک ہوسٹ کا انتخاب کریں۔ ان کو Ultimate Multisite کے ساتھ ٹیسٹ کیا گیا ہے اور یہ ڈومین میپنگ اور SSL آٹومیشن کے لیے وہ انٹیگریشنز فراہم کرتے ہیں جن کی آپ کو ضرورت ہے۔

FitSite کے لیے، ہم ایک subdomain کنفیگریشن استعمال کریں گے۔ اس کا مطلب ہے کہ کسٹمر سائٹس شروع میں `studioname.fitsite.com` کے طور پر نظر آئیں گی، اس سے پہلے کہ وہ اختیاری طور پر اپنا ڈومین میپ کریں۔

## Installing WordPress Multisite

اگر آپ کے پاس پہلے سے WordPress Multisite انسٹالیشن نہیں ہے:

1. اپنے ہوسٹنگ فراہم کنندہ پر WordPress انسٹال کریں۔
2. [How to Install WordPress Multisite](/user-guide/getting-started/how-to-install-wordpress-multisite) گائیڈ پر عمل کریں۔
3. جب پوچھا جائے تو **subdomain** کنفیگریشن کا انتخاب کریں۔

:::tip Why Subdomains?
Subdomains ہر کسٹمر سائٹ کو اس کا اپنا منفرد پتہ (`studio.fitsite.com`) دیتے ہیں، نہ کہ کوئی راستہ (`fitsite.com/studio`)۔ یہ آپ کے کسٹمرز کے لیے زیادہ پروفیشنل ہے اور پرما لنک کے تصادم (permalink conflicts) سے بچاتا ہے۔ تفصیلی موازنہ کے لیے [Ultimate Multisite 101](/user-guide/getting-started/ultimate-multisite-101) دیکھیں۔
:::

## Installing Ultimate Multisite

[Installing Ultimate Multisite](/user-guide/getting-started/installing-ultimate-multisite) گائیڈ پر عمل کریں تاکہ:

1. پلاگ ان کو نیٹ ورک کی سطح پر اپ لوڈ اور ایکٹیویٹ کیا جا سکے۔
2. [Setup Wizard](/user-guide/getting-started/multisite-setup-wizard) چلایا جا سکے۔

سیٹ اپ ویزرڈ کے دوران، FitSite niche کو ذہن میں رکھیں:

- **Currency**: اس کرنسی پر سیٹ کریں جو آپ کے فٹنس اسٹوڈیو کے کسٹمر استعمال کرتے ہیں۔
- **Company name**: "FitSite" (یا آپ کا منتخب کردہ برانڈ نام)۔
- **Company logo**: اپنا برانڈ لوگو اپ لوڈ کریں — یہ انوائسز اور ای میلز پر نظر آئے گا۔

## Configuring for the Fitness Niche

Ultimate Multisite انسٹال کرنے کے بعد، یہ niche-specific کنفیگریشن کے انتخاب کریں:

### General Settings

**Ultimate Multisite > Settings** پر جائیں اور یہ کنفیگر کریں:

- **Site name**: FitSite
- **Default role**: Administrator — فٹنس اسٹوڈیو کے مالکان کو اپنی سائٹ کی مواد پر مکمل کنٹرول کی ضرورت ہوتی ہے۔
- **Registration**: صارف کی رجسٹریشن کو فعال کریں تاکہ اسٹوڈیو کے مالکان خود سائن اپ کر سکیں۔

### Email Configuration

آپ کے سسٹم ای میلز کو آپ کے niche کی زبان بولنی چاہیے۔ **Ultimate Multisite > Settings > Emails** پر جائیں اور کسٹمائز کریں:

- عام "your new site" زبان کو فٹنس سے متعلق پیغام رسانی سے بدلیں۔
- مثال کے طور پر استقبال کا موضوع (Example welcome subject): "آپ کی فٹنس اسٹوڈیو کی ویب سائٹ تیار ہے"
- مثال کے طور پر استقبال کا متن (Example welcome body): ان کے اسٹوڈیو، کلاسز، اور ان کی فٹنس سائٹ کے ساتھ آغاز کرنے کا حوالہ دیں۔

ہم اسے Lesson 8 (Customer Onboarding) میں مزید بہتر کریں گے، لیکن ابھی سے ٹون سیٹ کرنے سے یہ یقینی ہوتا ہے کہ ابتدائی ٹیسٹ سائن اپ بھی niche-specific محسوس ہوں۔

### Domain Configuration

اگر آپ کوئی compatible hosting provider استعمال کر رہے ہیں، تو اب ڈومین میپنگ کنفیگر کریں:

1. **Ultimate Multisite > Settings > Domain Mapping** پر جائیں۔
2. اپنے مخصوص ہوسٹ کے لیے انٹیگریشن گائیڈ پر عمل کریں۔
3. ٹیسٹ کریں کہ نئی سب سائٹس کو خودکار طور پر SSL ملتا ہے۔

یہ یقینی بناتا ہے کہ جب ہم اگلے سبق میں ٹیمپلیٹس اور ٹیسٹ سائٹس بنانا شروع کریں، تو ہر چیز end to end کام کرے۔

## The FitSite Network So Far

اس سبق کے آخر میں، یہ وہ چیزیں ہیں جو آپ کے پاس ہیں:

```
FitSite Network
├── WordPress Multisite (subdomain mode)
├── Ultimate Multisite (installed and configured)
├── Hosting with wildcard SSL
├── Domain mapping configured
├── Niche-specific email templates (initial)
└── Ready for site templates (next lesson)
```

## What We Built This Lesson

- **A working WordPress Multisite** installation in subdomain mode
- **Ultimate Multisite installed** and configured with FitSite branding
- **Hosting and SSL** set up for a growing network
- **Domain mapping** configured for your hosting provider
- **Niche-specific email tone** established from day one

---

**Next:** [Lesson 4: Building Niche Templates](lesson-4-templates) — ہم سائٹ ٹیمپلیٹس بنائیں گے جو فٹنس اسٹوڈیو کے مالکان واقعی استعمال کرنا چاہیں گے۔
