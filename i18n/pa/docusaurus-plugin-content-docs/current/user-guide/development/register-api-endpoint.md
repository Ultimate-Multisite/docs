---
title: API ਐਂਡਪੁਆਇੰਟ ਰਜਿਸਟਰ ਕਰੋ
sidebar_position: 6
_i18n_hash: 33318472a834d15f5533362cddfeca20
---
# Ultimate Multisite Register API ਐਂਡਪੁਆਇੰਟ

ਇਸ ਟਿਊਟੋਰੀਅਲ ਵਿੱਚ, ਤੁਸੀਂ ਸਿੱਖੋਗੇ ਕਿ Ultimate Multisite /register API ਐਂਡਪੁਆਇੰਟ ਦੀ ਵਰਤੋਂ ਕਰਕੇ ਆਪਣੇ ਨੈੱਟਵਰਕ ਵਿੱਚ ਨਵੇਂ ਗਾਹਕ ਲਈ ਪੂਰੀ ਆਨਬੋਰਡਿੰਗ ਪ੍ਰਕਿਰਿਆ ਕਿਵੇਂ ਬਣਾਉਣੀ ਹੈ ਅਤੇ ਇਹ Zapier ਨਾਲ ਕਿਵੇਂ ਕਰਨਾ ਹੈ।

ਇਹ ਐਂਡਪੁਆਇੰਟ POST ਮੈਥਡ ਵਰਤਦਾ ਹੈ ਅਤੇ _**https://yoursite.com/wp-json/wu/v2/register**_ URL ਰਾਹੀਂ ਕਾਲ ਕੀਤਾ ਜਾਂਦਾ ਹੈ। ਇਸ ਕਾਲ ਵਿੱਚ, ਤੁਹਾਡੇ ਨੈੱਟਵਰਕ ਵਿੱਚ 4 ਪ੍ਰਕਿਰਿਆਵਾਂ ਚੱਲਣਗੀਆਂ:

  * ਇੱਕ ਨਵਾਂ WordPress ਯੂਜ਼ਰ ਜਾਂ ਯੂਜ਼ਰ ID ਰਾਹੀਂ ਉਸਦੀ ਪਛਾਣ ਬਣਾਈ ਜਾਵੇਗੀ।

  * Ultimate Multisite ਵਿੱਚ ਇੱਕ ਨਵਾਂ Customer ਜਾਂ customer ID ਰਾਹੀਂ ਉਸਦੀ ਪਛਾਣ ਬਣਾਈ ਜਾਵੇਗੀ।

  * WordPress ਨੈੱਟਵਰਕ ਤੇ ਇੱਕ ਨਵੀਂ ਸਾਈਟ ਬਣਾਈ ਜਾਵੇਗੀ।

  * ਅੰਤ ਵਿੱਚ, Ultimate Multisite ਵਿੱਚ ਇੱਕ ਨਵੀਂ Membership ਬਣਾਈ ਜਾਵੇਗੀ।

ਇਸ ਪ੍ਰਕਿਰਿਆ ਲਈ, ਤੁਹਾਨੂੰ ਆਪਣੇ API credentials ਚਾਹੀਦੇ ਹਨ। ਇਹ ਲੈਣ ਲਈ, ਆਪਣੇ ਨੈੱਟਵਰਕ ਐਡਮਿਨ ਪੈਨਲ ਤੇ ਜਾਓ, **Ultimate Multisite > Settings** > **API & Webhooks** ਤੇ ਜਾਓ, ਅਤੇ API Settings ਸੈਕਸ਼ਨ ਲੱਭੋ।

![Ultimate Multisite ਵਿੱਚ API Settings ਸੈਕਸ਼ਨ](/img/config/settings-api.png)  
**Enable API** ਚੁਣੋ ਅਤੇ ਆਪਣੇ API credentials ਲਵੋ।

ਹੁਣ, ਆਓ ਐਂਡਪੁਆਇੰਟ ਨੂੰ ਸਮਝੀਏ ਅਤੇ ਫਿਰ Zapier ਵਿੱਚ ਇੱਕ ਰਜਿਸਟ੍ਰੇਸ਼ਨ ਐਕਸ਼ਨ ਬਣਾਈਏ।

## ਐਂਡਪੁਆਇੰਟ ਦੇ body parameters

ਆਓ ਦੇਖੀਏ ਕਿ ਐਂਡਪੁਆਇੰਟ ਨੂੰ ਭੇਜਣ ਲਈ ਘੱਟੋ-ਘੱਟ ਕਿਹੜੀ ਜਾਣਕਾਰੀ ਚਾਹੀਦੀ ਹੈ। ਇਸ ਲੇਖ ਦੇ ਅੰਤ ਵਿੱਚ, ਤੁਹਾਨੂੰ ਪੂਰੀ ਕਾਲ ਮਿਲੇਗੀ।

### Customer

ਇਹ ਜਾਣਕਾਰੀ User ਅਤੇ Ultimate Multisite Customer ਬਣਾਉਣ ਦੀ ਪ੍ਰਕਿਰਿਆ ਲਈ ਜ਼ਰੂਰੀ ਹੈ:

"customer_id" : integer

ਤੁਸੀਂ ਆਪਣੇ ਨੈੱਟਵਰਕ ਵਿੱਚ ਬਣਾਈ customer ID ਭੇਜ ਸਕਦੇ ਹੋ। ਜੇ ਨਹੀਂ ਭੇਜੀ, ਤਾਂ ਹੇਠਾਂ ਦਿੱਤੀ ਜਾਣਕਾਰੀ ਨਵਾਂ customer ਅਤੇ ਨਵਾਂ WordPress ਯੂਜ਼ਰ ਬਣਾਉਣ ਲਈ ਵਰਤੀ ਜਾਵੇਗੀ। ਯੂਜ਼ਰ ID ਵੀ customer ID ਵਾਂਗ ਹੀ ਭੇਜੀ ਜਾ ਸਕਦੀ ਹੈ।

"customer" : { "user_id" : integer "username" : "string", "password" : "string", "email" : "string", },

### **Membership**

ਇਸ ਆਬਜੈਕਟ ਵਿੱਚ ਸਾਨੂੰ ਸਿਰਫ਼ Membership Status ਚਾਹੀਦੀ ਹੈ।

"membership" { "status" : "string", // "pending", "active", "trialing", "expired", "on-hold", "canceled" ਵਿੱਚੋਂ ਇੱਕ },

### **Products**

Products ਤੁਹਾਡੇ ਨੈੱਟਵਰਕ ਵਿੱਚੋਂ 1 ਜਾਂ ਵੱਧ product ID ਵਾਲੀ array ਵਜੋਂ ਦਿੱਤੇ ਜਾਂਦੇ ਹਨ। ਧਿਆਨ ਰੱਖੋ, ਇਹ ਐਂਡਪੁਆਇੰਟ products ਨਹੀਂ ਬਣਾਉਂਦਾ। Product ਬਣਾਉਣ ਵਾਲੇ ਐਂਡਪੁਆਇੰਟ ਨੂੰ ਚੰਗੀ ਤਰ੍ਹਾਂ ਸਮਝਣ ਲਈ Ultimate Multisite ਦੀ ਡਾਕੂਮੈਂਟੇਸ਼ਨ ਦੇਖੋ।

**"products" : [1,2],**

### Payment

Membership ਵਾਂਗ, ਸਾਨੂੰ ਸਿਰਫ਼ status ਚਾਹੀਦੀ ਹੈ।

**"payment" { "status" : "string", // "pending", "completed", "refunded", "partially-refunded", "partially-paid", "failed", "canceled" ਵਿੱਚੋਂ ਇੱਕ },**

### Site

ਅਤੇ body ਨੂੰ ਪੂਰਾ ਕਰਨ ਲਈ ਸਾਨੂੰ ਸਾਈਟ ਦੀ URL ਅਤੇ Title ਚਾਹੀਦੀ ਹੈ, ਦੋਵੇਂ Site ਆਬਜੈਕਟ ਵਿੱਚ।

**"site" : { "site_url" : "string", "site_title" : "string" }**

ਰਜਿਸਟਰ ਐਂਡਪੁਆਇੰਟ ਦਾ return ਨਵੀਂ ਬਣਾਈ membership ਦੀ ਜਾਣਕਾਰੀ ਵਾਲੀ array ਹੋਵੇਗਾ।

## Zapier ਵਿੱਚ ਐਕਸ਼ਨ ਬਣਾਉਣਾ

ਇਸ ਨਵੇਂ ਅਤੇ ਵਧੀਆ ਅਕਾਊਂਟ ਬਣਾਉਣ ਵਾਲੇ ਐਂਡਪੁਆਇੰਟ ਦੇ ਨਾਲ ਤੁਹਾਨੂੰ Zapier ਵਿੱਚ ਇੱਕ ਨਵਾਂ ਐਕਸ਼ਨ ਵੀ ਮਿਲੇਗਾ।

ਕੀ ਤੁਸੀਂ ਜਾਣਦੇ ਹੋ ਕਿ Zapier ਦੇ ਨਵੇਂ ਵਰਜ਼ਨ ਦੀਆਂ ਸਾਰੀਆਂ ਸੁਵਿਧਾਵਾਂ ਕਿਵੇਂ ਵਰਤਣੀਆਂ ਹਨ? ਇੱਥੇ ਹੋਰ ਜਾਣੋ। (link?)

### ਐਕਸ਼ਨ ਬਣਾਉਣਾ

Zapier ਨਾਲ ਰਜਿਸਟ੍ਰੇਸ਼ਨ ਐਂਡਪੁਆਇੰਟ ਕਿਵੇਂ ਵਰਤਣਾ ਹੈ, ਇਹ ਚੰਗੀ ਤਰ੍ਹਾਂ ਸਮਝਾਉਣ ਲਈ, ਆਓ Google Forms ਨਾਲ ਇੱਕ ਇੰਟੀਗ੍ਰੇਸ਼ਨ ਬਣਾਈਏ। ਜਦੋਂ ਵੀ ਇਹ ਫਾਰਮ ਭਰਿਆ ਜਾਵੇਗਾ ਅਤੇ ਜਾਣਕਾਰੀ ਫਾਰਮ ਦੀ ਜਵਾਬ ਸ਼ੀਟ ਵਿੱਚ ਸੇਵ ਹੋਵੇਗੀ, Ultimate Multisite ਨੈੱਟਵਰਕ ਵਿੱਚ ਇੱਕ ਨਵੀਂ membership ਬਣ ਜਾਵੇਗੀ।

Google Forms ਵਿੱਚ, ਨੈੱਟਵਰਕ ਵਿੱਚ ਨਵੀਂ membership ਬਣਾਉਣ ਲਈ ਘੱਟੋ-ਘੱਟ ਜ਼ਰੂਰੀ ਫੀਲਡਾਂ ਵਾਲਾ ਫਾਰਮ ਬਣਾਓ।

<!-- Screenshot unavailable: Google Forms form with fields for creating a new membership -->

ਹੁਣ Zapier ਵਿੱਚ, ਇੱਕ ਨਵਾਂ Zap ਬਣਾਓ ਅਤੇ ਬਣਾਏ ਗਏ Google ਫਾਰਮ ਨੂੰ ਉਸ ਸਪ੍ਰੈੱਡਸ਼ੀਟ ਰਾਹੀਂ ਕਨੈਕਟ ਕਰੋ ਜਿੱਥੇ ਡਾਟਾ ਸੇਵ ਹੁੰਦਾ ਹੈ।

<!-- Screenshot unavailable: Zapier trigger configuration connecting to Google Forms spreadsheet -->

ਹੋ ਗਿਆ! Google Forms ਫਾਰਮ Zapier ਨਾਲ ਕਨੈਕਟ ਹੋ ਗਿਆ ਹੈ ਅਤੇ ਨੈੱਟਵਰਕ ਨਾਲ ਇੰਟੀਗ੍ਰੇਟ ਕਰਨ ਲਈ ਤਿਆਰ ਹੈ। ਹੁਣ ਉਸ Action ਤੇ ਚੱਲੀਏ ਜੋ Google Forms ਦੇ ਹਰ ਵਾਰ ਭਰੇ ਜਾਣ ਤੇ ਟ੍ਰਿਗਰ ਹੋਵੇਗਾ।

ਨਵੀਂ Ultimate Multisite app ਲੱਭੋ ਅਤੇ ਇਸਨੂੰ ਚੁਣੋ। ਇਸ ਤਰ੍ਹਾਂ ਦੇ Zap ਲਈ Register ਆਪਸ਼ਨ ਚੁਣੋ।

<!-- Screenshot unavailable: Zapier action selection showing Ultimate Multisite app with Register option -->

ਇਸ ਪਹਿਲੇ ਕਦਮ ਤੋਂ ਬਾਅਦ, ਉਹ ਅਕਾਊਂਟ ਚੁਣੋ ਜੋ ਇਸ Zap ਨਾਲ ਕਨੈਕਟ ਹੋਵੇਗਾ।<!-- Screenshot unavailable: Zapier account connection step for Ultimate Multisite -->

ਇਹ ਪੂਰੀ ਪ੍ਰਕਿਰਿਆ ਦਾ ਸਭ ਤੋਂ ਸੰਵੇਦਨਸ਼ੀਲ ਹਿੱਸਾ ਹੈ। ਸਾਨੂੰ Google Forms ਤੋਂ ਆਏ ਫੀਲਡਾਂ ਨੂੰ ਰਜਿਸਟਰ ਐਂਡਪੁਆਇੰਟ ਲਈ ਘੱਟੋ-ਘੱਟ ਜ਼ਰੂਰੀ ਫੀਲਡਾਂ ਨਾਲ ਮਿਲਾਉਣਾ ਹੈ, ਜਿਵੇਂ ਇਸ ਲੇਖ ਦੇ ਪਿਛਲੇ ਹਿੱਸੇ ਵਿੱਚ ਦੱਸਿਆ ਗਿਆ ਹੈ।

ਇਸ ਉਦਾਹਰਨ ਵਿੱਚ, ਸਾਨੂੰ ਸਿਰਫ਼ username, email, password, ਨਾਮ ਅਤੇ ਵੈੱਬਸਾਈਟ ਦੀ URL ਸੈੱਟ ਕਰਨੀ ਹੈ। ਬਾਕੀ ਪਹਿਲਾਂ ਤੋਂ ਹੀ ਤੈਅ ਕੀਤਾ ਗਿਆ ਹੈ ਤਾਂ ਜੋ ਇਸ Google Forms ਤੋਂ ਬਣੀਆਂ ਸਾਰੀਆਂ memberships ਇੱਕੋ product ਅਤੇ status ਪੈਟਰਨ ਦੀ ਪਾਲਣਾ ਕਰਨ।

<!-- Screenshot unavailable: Zapier field mapping between Google Forms and Ultimate Multisite register endpoint -->

ਜਾਣਕਾਰੀ ਸੈੱਟ ਕਰਨ ਤੋਂ ਬਾਅਦ, ਆਖਰੀ ਟੈਸਟ ਤੇ ਜਾਓ। ਆਖਰੀ ਸਕ੍ਰੀਨ ਤੇ ਤੁਸੀਂ ਉਹ ਸਾਰੇ ਫੀਲਡ ਦੇਖ ਸਕਦੇ ਹੋ ਜੋ ਐਂਡਪੁਆਇੰਟ ਨੂੰ ਭੇਜੇ ਜਾਣਗੇ, ਉਨ੍ਹਾਂ ਦੀ ਜਾਣਕਾਰੀ ਅਤੇ ਉਹ ਫੀਲਡ ਜੋ ਖਾਲੀ ਭੇਜੇ ਜਾਣਗੇ।<!-- Screenshot unavailable: Zapier test screen showing all fields to be sent to the register endpoint -->

ਆਪਣੇ ਨਵੇਂ Zap ਨੂੰ ਟੈਸਟ ਕਰੋ ਅਤੇ ਇਹ ਸਫ਼ਲਤਾਪੂਰਵਕ ਪੂਰਾ ਹੋ ਜਾਣਾ ਚਾਹੀਦਾ ਹੈ। ਜੇ ਕੋਈ ਗਲਤੀ ਆਵੇ, ਤਾਂ ਸਾਰੇ ਫੀਲਡ ਚੈੱਕ ਕਰੋ ਅਤੇ ਦੇਖੋ ਕਿ ਉਹ ਸਹੀ ਤਰੀਕੇ ਨਾਲ ਭੇਜੇ ਜਾ ਰਹੇ ਹਨ ਜਾਂ ਨਹੀਂ। ਕਿਉਂਕਿ ਬਹੁਤ ਸਾਰੀ ਜਾਣਕਾਰੀ ਹੈ, ਕੁਝ ਚੀਜ਼ਾਂ ਧਿਆਨੋਂ ਬਾਹਰ ਹੋ ਸਕਦੀਆਂ ਹਨ।

### ਪੂਰੇ ਐਂਡਪੁਆਇੰਟ parameters

ਇੱਥੇ ਪੂਰੀ ਕਾਲ ਅਤੇ ਸਾਰੇ ਫੀਲਡਾਂ ਦੀਆਂ ਸੰਭਾਵਨਾਵਾਂ ਹਨ ਜੋ ਭੇਜੀਆਂ ਜਾ ਸਕਦੀਆਂ ਹਨ।

"customer_id" : integer, "customer" : { "user_id" : integer "username" : "string", "password" : "string", "email" : "string", }, "membership" : { "status" : "string", // "pending", "active", "trialing", "expired", "on-hold", "cancelled" ਵਿੱਚੋਂ ਇੱਕ "date_expiration" : "string", "date_trial_end" : "string", "date_activated" : "string", "date_renewed" : "string", "date_cancellation" : "string", "date_payment_plan_completed": "string", }, "products" : [1,2], "duration" : "string", "duration_unit" : "string", "discount_code" : "string", "auto_renew" : "boolean", "country" : "string", "currency" : "string", "payment" { "status" : "string", // "pending", "completed", "refunded", "partially-refunded", "partially-paid", "failed", "cancelled" ਵਿੱਚੋਂ ਇੱਕ }, "payment_method" : { "gateway" : "string", "gateway_customer_id" : "string", "gateway_subscription_id" : "string", "gateway_payment_id" : "string", }, "site" : { "site_url" : "string", "site_title" : "string", "publish" : "boolean", "template_id" : "string", }
