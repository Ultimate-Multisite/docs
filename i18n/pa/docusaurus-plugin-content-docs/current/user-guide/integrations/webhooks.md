---
title: ਵੈੱਬਹੁੱਕਸ
sidebar_position: 15
_i18n_hash: b4ccc66ecddbe88bc85f562e32e5dca8
---
# Webhooks (v2) ਬਾਰੇ ਪਹਿਲੀ ਝਲਕ

_**ਧਿਆਨ ਦਿਓ: ਇਹ ਫੀਚਰ ਜਾਂ ਲੇਖ ਤਜਰਬੇਕਾਰ ਯੂਜ਼ਰਾਂ ਲਈ ਹੈ।**_

**Webhook** ਇੱਕ ਤਰੀਕਾ ਹੈ ਜਿਸ ਰਾਹੀਂ Ultimate Multisite ਵਰਗੀ ਕੋਈ ਐਪ ਜਾਂ ਸਾਫਟਵੇਅਰ ਦੂਜੀਆਂ ਐਪਲੀਕੇਸ਼ਨਾਂ ਨੂੰ ਰੀਅਲ-ਟਾਈਮ ਜਾਣਕਾਰੀ ਦੇ ਸਕਦੀ ਹੈ। Webhook ਡਾਟਾ ਜਾਂ payloads ਨੂੰ ਤੁਰੰਤ ਦੂਜੀਆਂ ਐਪਲੀਕੇਸ਼ਨਾਂ ਤੱਕ ਪਹੁੰਚਾਉਂਦਾ ਹੈ, ਮਤਲਬ ਤੁਹਾਨੂੰ **ਡਾਟਾ ਫੌਰਨ ਮਿਲ ਜਾਂਦਾ ਹੈ।**

ਇਹ ਉਦੋਂ ਕੰਮ ਆਉਂਦਾ ਹੈ ਜਦੋਂ ਤੁਹਾਨੂੰ Ultimate Multisite ਤੋਂ ਕੋਈ ਖਾਸ ਡਾਟਾ ਕਿਸੇ ਹੋਰ CRM ਜਾਂ ਸਿਸਟਮ ਨਾਲ ਜੋੜਨਾ ਜਾਂ ਭੇਜਣਾ ਹੋਵੇ ਜਦੋਂ ਵੀ ਕੋਈ event ਹੁੰਦੀ ਹੈ। ਮਿਸਾਲ ਲਈ, ਤੁਸੀਂ ਚਾਹੁੰਦੇ ਹੋ ਕਿ ਹਰ ਵਾਰ ਜਦੋਂ ਕੋਈ ਨਵਾਂ ਯੂਜ਼ਰ ਅਕਾਊਂਟ ਬਣੇ ਤਾਂ ਉਸਦਾ ਨਾਂ ਅਤੇ ਈਮੇਲ ਐਡਰੈੱਸ ਕਿਸੇ ਮੇਲਿੰਗ ਲਿਸਟ ਵਿੱਚ ਭੇਜਿਆ ਜਾਵੇ।

## Webhook ਕਿਵੇਂ ਬਣਾਈਏ

Webhook ਬਣਾਉਣ ਲਈ, ਆਪਣੇ network admin dashboard ਵਿੱਚ ਜਾਓ। **Ultimate Multisite > Webhooks > Add New Webhook** ਤੇ ਕਲਿੱਕ ਕਰੋ।

![Webhooks ਲਿਸਟ ਪੇਜ ਜਿਸ ਵਿੱਚ Add New Webhook ਬਟਨ ਹੈ](/img/admin/webhooks-list.png)

ਨਵੀਂ webhook ਬਣਾਉਂਦੇ ਸਮੇਂ ਤੁਹਾਡੇ ਤੋਂ **Name, URL,** ਅਤੇ **Event** ਵਰਗੀ ਜਾਣਕਾਰੀ ਮੰਗੀ ਜਾਵੇਗੀ। ਤੁਸੀਂ ਆਪਣੀ webhook ਲਈ ਕੋਈ ਵੀ ਨਾਂ ਵਰਤ ਸਕਦੇ ਹੋ। ਸਭ ਤੋਂ ਜ਼ਰੂਰੀ ਫੀਲਡਾਂ URL ਅਤੇ Event ਹਨ।

![ਨਵੀਂ webhook ਫਾਰਮ ਜਿਸ ਵਿੱਚ Name, URL, ਅਤੇ Event ਫੀਲਡਾਂ ਹਨ](/img/admin/webhooks-list.png)

URL ਉਹ **endpoint ਜਾਂ ਮੰਜ਼ਿਲ** ਹੈ ਜਿੱਥੇ Ultimate Multisite **payload ਜਾਂ ਡਾਟਾ** ਭੇਜੇਗੀ। ਇਹ ਉਹ ਐਪਲੀਕੇਸ਼ਨ ਹੈ ਜੋ ਡਾਟਾ ਪ੍ਰਾਪਤ ਕਰੇਗੀ।

Zapier ਸਭ ਤੋਂ ਆਮ ਹੱਲ ਹੈ ਜੋ ਯੂਜ਼ਰ ਤੀਜੀ ਧਿਰ ਦੀਆਂ ਐਪਲੀਕੇਸ਼ਨਾਂ ਨਾਲ ਜੋੜਨ ਲਈ ਵਰਤਦੇ ਹਨ। Zapier ਵਰਗੇ ਪਲੇਟਫਾਰਮ ਤੋਂ ਬਿਨਾਂ, ਤੁਹਾਨੂੰ ਖੁਦ ਇੱਕ ਕਸਟਮ ਫੰਕਸ਼ਨ ਬਣਾਉਣਾ ਪਵੇਗਾ ਜੋ ਡਾਟਾ ਫੜੇ ਅਤੇ ਉਸ ਨੂੰ ਪ੍ਰੋਸੈੱਸ ਕਰੇ। **Ultimate Multisite webhook ਨੂੰ Zapier ਨਾਲ ਕਿਵੇਂ ਵਰਤਣਾ ਹੈ** ਇਸ ਬਾਰੇ ਇਹ ਲੇਖ ਦੇਖੋ।

ਇਸ ਲੇਖ ਵਿੱਚ, ਅਸੀਂ webhook ਕਿਵੇਂ ਕੰਮ ਕਰਦੀ ਹੈ ਅਤੇ Ultimate Multisite ਵਿੱਚ ਉਪਲਬਧ events ਬਾਰੇ ਮੁੱਢਲੀ ਜਾਣਕਾਰੀ ਲਵਾਂਗੇ। ਅਸੀਂ ਇੱਕ ਤੀਜੀ ਧਿਰ ਦੀ ਸਾਈਟ [requestbin.com](https://requestbin.com/) ਵਰਤਾਂਗੇ। ਇਹ ਸਾਈਟ ਸਾਨੂੰ ਬਿਨਾਂ ਕੋਈ ਕੋਡਿੰਗ ਕੀਤੇ ਇੱਕ endpoint ਬਣਾਉਣ ਅਤੇ payload ਫੜਨ ਦੀ ਸਹੂਲਤ ਦਿੰਦੀ ਹੈ। _**ਸਪੱਸ਼ਟੀਕਰਨ: ਇਹ ਸਿਰਫ਼ ਇਹ ਦਿਖਾਵੇਗੀ ਕਿ ਡਾਟਾ ਮਿਲ ਗਿਆ ਹੈ।**_ Payload ਨੂੰ ਕੋਈ ਪ੍ਰੋਸੈਸਿੰਗ ਜਾਂ ਕੋਈ ਹੋਰ ਕਾਰਵਾਈ ਨਹੀਂ ਹੋਵੇਗੀ।

[requestbin.com](https://requestbin.com/) ਤੇ ਜਾਓ ਅਤੇ Create Request Bin ਤੇ ਕਲਿੱਕ ਕਰੋ।

![RequestBin ਵੈੱਬਸਾਈਟ Create Request Bin ਬਟਨ](/img/admin/webhooks-list.png)

ਉਸ ਬਟਨ ਤੇ ਕਲਿੱਕ ਕਰਨ ਤੋਂ ਬਾਅਦ, ਇਹ ਤੁਹਾਨੂੰ ਲੌਗ ਇਨ ਕਰਨ ਲਈ ਕਹੇਗੀ ਜੇ ਤੁਹਾਡਾ ਪਹਿਲਾਂ ਤੋਂ ਅਕਾਊਂਟ ਹੈ ਜਾਂ ਸਾਈਨ ਅੱਪ ਕਰਨ ਲਈ। ਜੇ ਤੁਹਾਡਾ ਪਹਿਲਾਂ ਤੋਂ ਅਕਾਊਂਟ ਹੈ ਤਾਂ ਇਹ ਤੁਹਾਨੂੰ ਸਿੱਧੇ ਉਨ੍ਹਾਂ ਦੇ dashboard ਤੇ ਲੈ ਜਾਵੇਗੀ। ਉਨ੍ਹਾਂ ਦੇ dashboard ਤੇ, ਤੁਹਾਨੂੰ ਤੁਰੰਤ ਉਹ endpoint ਜਾਂ URL ਦਿਖਾਈ ਦੇਵੇਗਾ ਜੋ ਤੁਸੀਂ ਆਪਣੀ Ultimate Multisite webhook ਬਣਾਉਣ ਵਿੱਚ ਵਰਤ ਸਕਦੇ ਹੋ।

![RequestBin dashboard ਜਿਸ ਵਿੱਚ endpoint URL ਦਿਖਾਇਆ ਗਿਆ ਹੈ](/img/admin/webhooks-list.png)

ਅੱਗੇ ਵਧੋ ਅਤੇ URL ਕਾਪੀ ਕਰੋ ਅਤੇ Ultimate Multisite ਤੇ ਵਾਪਸ ਜਾਓ। Endpoint ਨੂੰ URL ਫੀਲਡ ਵਿੱਚ ਪਾਓ ਅਤੇ dropdown ਵਿੱਚੋਂ ਇੱਕ event ਚੁਣੋ। ਇਸ ਮਿਸਾਲ ਵਿੱਚ, ਅਸੀਂ **Payment Received** ਚੁਣਾਂਗੇ।

ਇਹ event ਉਦੋਂ ਟ੍ਰਿੱਗਰ ਹੁੰਦੀ ਹੈ ਜਦੋਂ ਕੋਈ ਯੂਜ਼ਰ ਭੁਗਤਾਨ ਕਰਦਾ ਹੈ। ਸਾਰੀਆਂ ਉਪਲਬਧ events, ਉਨ੍ਹਾਂ ਦੀਆਂ ਵੇਰਵੇ, ਅਤੇ payloads ਪੇਜ ਦੇ ਹੇਠਾਂ ਸੂਚੀਬੱਧ ਹਨ। Webhook ਸੇਵ ਕਰਨ ਲਈ **Add New Webhook** ਬਟਨ ਤੇ ਕਲਿੱਕ ਕਰੋ।

![Payment Received event ਨਾਲ ਸੈੱਟ ਕੀਤੀ Webhook](/img/admin/webhooks-list.png)

ਹੁਣ ਅਸੀਂ endpoint ਤੇ ਇੱਕ ਟੈਸਟ event ਭੇਜ ਸਕਦੇ ਹਾਂ ਤਾਂ ਜੋ ਦੇਖ ਸਕੀਏ ਕਿ ਸਾਡੀ ਬਣਾਈ webhook ਕੰਮ ਕਰ ਰਹੀ ਹੈ ਜਾਂ ਨਹੀਂ। ਅਸੀਂ ਇਹ ਆਪਣੀ ਬਣਾਈ webhook ਹੇਠਾਂ **Send Test Event** ਤੇ ਕਲਿੱਕ ਕਰਕੇ ਕਰ ਸਕਦੇ ਹਾਂ।

![Webhook ਹੇਠਾਂ Send Test Event ਵਿਕਲਪ](/img/admin/webhooks-list.png)

ਇਹ ਇੱਕ ਪੁਸ਼ਟੀ ਵਿੰਡੋ ਦਿਖਾਉਂਦੀ ਹੈ ਜੋ ਦੱਸਦੀ ਹੈ ਕਿ ਟੈਸਟ ਸਫਲ ਰਿਹਾ।

![Webhook ਟੈਸਟ event ਸਫਲ ਹੋਣ ਦੀ ਪੁਸ਼ਟੀ](/img/admin/webhooks-list.png)

ਹੁਣ ਜੇ ਅਸੀਂ _Requestbin_ ਸਾਈਟ ਤੇ ਵਾਪਸ ਜਾਈਏ ਤਾਂ ਅਸੀਂ ਦੇਖਾਂਗੇ ਕਿ payload ਪ੍ਰਾਪਤ ਹੋ ਗਿਆ ਹੈ ਜਿਸ ਵਿੱਚ ਕੁਝ ਟੈਸਟ ਡਾਟਾ ਹੈ।

![RequestBin ਜਿਸ ਵਿੱਚ ਪ੍ਰਾਪਤ webhook payload ਡਾਟਾ ਦਿਖਾਇਆ ਗਿਆ ਹੈ](/img/admin/webhooks-list.png)

ਇਹ webhook ਅਤੇ endpoints ਕਿਵੇਂ ਕੰਮ ਕਰਦੇ ਹਨ ਦਾ ਮੁੱਢਲਾ ਸਿਧਾਂਤ ਹੈ। ਜੇ ਤੁਸੀਂ ਕੋਈ ਕਸਟਮ endpoint ਬਣਾਉਣਾ ਚਾਹੁੰਦੇ ਹੋ, ਤਾਂ ਤੁਹਾਨੂੰ Ultimate Multisite ਤੋਂ ਮਿਲੇ ਡਾਟਾ ਨੂੰ ਪ੍ਰੋਸੈੱਸ ਕਰਨ ਲਈ ਇੱਕ ਕਸਟਮ ਫੰਕਸ਼ਨ ਬਣਾਉਣਾ ਪਵੇਗਾ।
