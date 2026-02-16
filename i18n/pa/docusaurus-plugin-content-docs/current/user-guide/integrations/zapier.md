---
title: Zapier ਇੰਟੀਗ੍ਰੇਸ਼ਨ
sidebar_position: 12
_i18n_hash: 4e43dfd722f07de3048b552c8f7b962f
---
# Ultimate Multisite ਨੂੰ Zapier ਨਾਲ ਜੋੜਨਾ

ਇੱਕ ਲੇਖ ਵਿੱਚ, ਅਸੀਂ [Webhooks](webhooks.md) ਬਾਰੇ ਗੱਲ ਕੀਤੀ ਸੀ ਅਤੇ ਦੱਸਿਆ ਸੀ ਕਿ ਇਹਨਾਂ ਨੂੰ ਹੋਰ ਐਪਲੀਕੇਸ਼ਨਾਂ ਨਾਲ ਜੋੜਨ ਲਈ ਕਿਵੇਂ ਵਰਤਿਆ ਜਾ ਸਕਦਾ ਹੈ।

Webhooks ਵਰਤਣਾ ਥੋੜਾ ਔਖਾ ਹੈ ਕਿਉਂਕਿ ਇਸ ਲਈ ਕੋਡਿੰਗ ਅਤੇ payloads ਨੂੰ ਸਮਝਣ ਦੀ ਡੂੰਘੀ ਜਾਣਕਾਰੀ ਚਾਹੀਦੀ ਹੈ। **Zapier** ਇਸ ਮੁਸ਼ਕਲ ਤੋਂ ਬਚਣ ਦਾ ਇੱਕ ਸੌਖਾ ਤਰੀਕਾ ਹੈ।

Zapier 5000 ਤੋਂ ਵੱਧ ਐਪਸ ਨਾਲ ਜੁੜਦਾ ਹੈ, ਜਿਸ ਨਾਲ ਵੱਖ-ਵੱਖ ਐਪਲੀਕੇਸ਼ਨਾਂ ਵਿਚਕਾਰ ਗੱਲਬਾਤ ਬਹੁਤ ਆਸਾਨ ਹੋ ਜਾਂਦੀ ਹੈ।

ਤੁਸੀਂ **Triggers** ਬਣਾ ਸਕਦੇ ਹੋ ਜੋ ਤੁਹਾਡੇ ਨੈੱਟਵਰਕ ਉੱਤੇ ਕੁਝ ਹੋਣ 'ਤੇ ਚਾਲੂ ਹੋ ਜਾਣਗੇ (ਜਿਵੇਂ ਕਿ ਕੋਈ ਖਾਤਾ ਬਣਦਾ ਹੈ ਤੇ account_create event ਚੱਲਦਾ ਹੈ) ਜਾਂ ਬਾਹਰੀ ਘਟਨਾਵਾਂ ਦੇ ਜਵਾਬ ਵਿੱਚ ਆਪਣੇ ਨੈੱਟਵਰਕ ਉੱਤੇ **Actions** ਚਲਾ ਸਕਦੇ ਹੋ (ਜਿਵੇਂ ਕਿ ਤੁਹਾਡੇ Ultimate Multisite ਨੈੱਟਵਰਕ ਵਿੱਚ ਨਵੀਂ ਖਾਤਾ ਮੈਂਬਰਸ਼ਿਪ ਬਣਾਉਣਾ)।

ਇਹ ਸਭ ਸੰਭਵ ਹੈ ਕਿਉਂਕਿ **Ultimate Multisite Zapier ਦੇ triggers** ਅਤੇ actions [REST API](https://developer.ultimatemultisite.com/api/docs/) 'ਤੇ ਅਧਾਰਤ ਹਨ।

## ਸ਼ੁਰੂਆਤ ਕਿਵੇਂ ਕਰੀਏ

ਪਹਿਲਾਂ, Zapier ਐਪ ਲਿਸਟ ਵਿੱਚ Ultimate Multisite ਲੱਭੋ। ਜਾਂ ਫਿਰ, ਤੁਸੀਂ [ਇਸ ਲਿੰਕ](https://zapier.com/apps/wp-ultimo/integrations) 'ਤੇ ਕਲਿੱਕ ਕਰ ਸਕਦੇ ਹੋ।

ਆਪਣੇ dashboard 'ਤੇ ਜਾਓ ਅਤੇ ਨਵਾਂ Zap ਸੈੱਟ ਕਰਨ ਲਈ ਖੱਬੇ ਸਾਈਡਬਾਰ ਵਿੱਚ **+** **Create Zap** ਬਟਨ ਦਬਾਓ।

![Create Zap ਬਟਨ ਵਾਲਾ Zapier dashboard](/img/admin/webhooks-list.png)

ਤੁਹਾਨੂੰ Zap ਬਣਾਉਣ ਵਾਲੇ ਪੇਜ਼ 'ਤੇ ਲੈ ਜਾਇਆ ਜਾਵੇਗਾ।

ਸਰਚ ਬਾਕਸ ਵਿੱਚ "wp ultimo" ਟਾਈਪ ਕਰੋ। **Beta** ਵਰਜ਼ਨ ਵਾਲਾ ਆਪਸ਼ਨ ਚੁਣਨ ਲਈ ਕਲਿੱਕ ਕਰੋ।

![Zapier ਐਪ ਲਿਸਟ ਵਿੱਚ WP Ultimo ਲੱਭਣਾ](/img/admin/webhooks-list.png)

ਸਾਡੀ ਐਪ ਚੁਣਨ ਤੋਂ ਬਾਅਦ, ਉਪਲਬਧ event ਚੁਣੋ: **New Ultimate Multisite Event**।

![New Ultimate Multisite Event trigger ਚੁਣਨਾ](/img/admin/webhooks-list.png)

ਹੁਣ ਸਾਨੂੰ Zapier ਨੂੰ **ਤੁਹਾਡੇ ਨੈੱਟਵਰਕ** ਤੱਕ ਪਹੁੰਚ ਦੇਣੀ ਪਵੇਗੀ। **Sign in** 'ਤੇ ਕਲਿੱਕ ਕਰਨ ਨਾਲ ਇੱਕ ਨਵੀਂ ਵਿੰਡੋ ਖੁੱਲੇਗੀ ਜੋ **API credentials** ਮੰਗੇਗੀ।

![API credentials ਲਈ Zapier Sign in ਪ੍ਰੌਂਪਟ](/img/admin/webhooks-list.png)

ਆਪਣੇ ਨੈੱਟਵਰਕ admin panel 'ਤੇ ਜਾਓ ਅਤੇ **Ultimate Multisite > Settings** > **API & Webhooks** 'ਤੇ ਜਾ ਕੇ API Settings ਸੈਕਸ਼ਨ ਲੱਭੋ।

**Enable API** ਆਪਸ਼ਨ ਚੁਣੋ ਕਿਉਂਕਿ ਇਹ ਕਨੈਕਸ਼ਨ ਕੰਮ ਕਰਨ ਲਈ ਜ਼ਰੂਰੀ ਹੈ।

![Ultimate Multisite ਵਿੱਚ Enable API ਆਪਸ਼ਨ ਵਾਲੀ API Settings](/img/admin/webhooks-list.png)

API Key ਅਤੇ API Secret ਫੀਲਡਾਂ 'ਤੇ **Copy to Clipboard** ਆਈਕਨ ਵਰਤੋ ਅਤੇ ਉਹ ਵੈਲਿਊਜ਼ ਇੰਟੀਗ੍ਰੇਸ਼ਨ ਸਕ੍ਰੀਨ 'ਤੇ ਪੇਸਟ ਕਰੋ।

URL ਫੀਲਡ ਵਿੱਚ, ਆਪਣੇ ਨੈੱਟਵਰਕ ਦਾ ਪੂਰਾ URL ਪਾਓ, ਪ੍ਰੋਟੋਕੋਲ (HTTP ਜਾਂ HTTPS) ਸਮੇਤ।

![API Key, Secret, ਅਤੇ URL ਫੀਲਡਾਂ ਵਾਲੀ Zapier ਇੰਟੀਗ੍ਰੇਸ਼ਨ ਸਕ੍ਰੀਨ](/img/admin/webhooks-list.png)

ਅਗਲੇ ਕਦਮ 'ਤੇ ਜਾਣ ਲਈ **Yes, Continue** ਬਟਨ ਦਬਾਓ। ਜੇਕਰ ਸਭ ਕੁਝ ਠੀਕ ਰਿਹਾ, ਤਾਂ ਤੁਹਾਨੂੰ ਤੁਹਾਡਾ ਨਵਾਂ ਜੁੜਿਆ ਖਾਤਾ ਦਿਖਾਈ ਦੇਵੇਗਾ! ਨਵਾਂ trigger ਬਣਾਉਣ ਲਈ **Continue** 'ਤੇ ਕਲਿੱਕ ਕਰੋ।

## ਨਵਾਂ Trigger ਕਿਵੇਂ ਬਣਾਈਏ

ਹੁਣ ਜਦੋਂ ਤੁਹਾਡਾ ਖਾਤਾ ਜੁੜ ਗਿਆ ਹੈ, ਤੁਸੀਂ ਉਪਲਬਧ events ਦੇਖ ਸਕਦੇ ਹੋ। ਆਓ ਇਸ ਟਿਊਟੋਰੀਅਲ ਲਈ **payment_received** event ਚੁਣੀਏ।

![Zapier trigger ਵਿੱਚ payment_received event ਚੁਣਨਾ](/img/admin/webhooks-list.png)

Event ਚੁਣਨ ਤੋਂ ਬਾਅਦ ਜਦੋਂ ਤੁਸੀਂ **continue** 'ਤੇ ਕਲਿੱਕ ਕਰੋਗੇ, ਇੱਕ **test step** ਆਵੇਗਾ।

![Trigger ਲਈ Zapier test step](/img/admin/webhooks-list.png)

ਇਸ ਪੜਾਅ 'ਤੇ, Zapier ਟੈਸਟ ਕਰੇਗਾ ਕਿ ਕੀ ਤੁਹਾਡਾ Zap **ਉਸ event ਲਈ ਖਾਸ payload ਲੈ ਸਕਦਾ ਹੈ**। ਭਵਿੱਖ ਵਿੱਚ ਇਸੇ ਤਰ੍ਹਾਂ ਦੇ events ਵਿੱਚ, ਇਸੇ ਢਾਂਚੇ ਵਾਲੀ ਜਾਣਕਾਰੀ ਭੇਜੀ ਜਾਵੇਗੀ।

![payload ਨਾਲ Zapier trigger ਟੈਸਟ ਸਫਲਤਾਪੂਰਵਕ ਪੂਰਾ ਹੋਇਆ](/img/admin/webhooks-list.png)

ਸਾਡੇ ਟਿਊਟੋਰੀਅਲ ਵਿੱਚ ਟੈਸਟ **ਸਫਲਤਾਪੂਰਵਕ ਪੂਰਾ ਹੋਇਆ** ਅਤੇ ਨਮੂਨਾ payload ਜਾਣਕਾਰੀ ਵਾਪਸ ਆਈ। ਇਹ ਨਮੂਨਾ ਜਾਣਕਾਰੀ actions ਬਣਾਉਂਦੇ ਸਮੇਂ ਸਾਡੀ ਮਦਦ ਕਰੇਗੀ। ਤੁਹਾਡਾ trigger ਹੁਣ ਬਣ ਗਿਆ ਹੈ ਅਤੇ ਹੋਰ ਐਪਲੀਕੇਸ਼ਨਾਂ ਨਾਲ ਜੁੜਨ ਲਈ ਤਿਆਰ ਹੈ।

## Actions ਕਿਵੇਂ ਬਣਾਈਏ

Actions ਹੋਰ triggers ਤੋਂ ਮਿਲੀ ਜਾਣਕਾਰੀ ਵਰਤ ਕੇ ਤੁਹਾਡੇ ਨੈੱਟਵਰਕ ਵਿੱਚ ਨਵੀਆਂ ਐਂਟਰੀਆਂ ਬਣਾਉਂਦੇ ਹਨ।

**action ਬਣਾਉਣ ਦੇ ਕਦਮ** ਵਿੱਚ ਤੁਸੀਂ Ultimate Multisite **Beta** ਅਤੇ **Create Items on Ultimate Multisite** ਆਪਸ਼ਨ ਚੁਣੋਗੇ।

![Create Items on Ultimate Multisite ਨਾਲ action ਬਣਾਉਣਾ](/img/admin/webhooks-list.png)

ਅਗਲੇ ਕਦਮ ਵਿੱਚ ਤੁਸੀਂ ਜਾਂ ਤਾਂ ਨਵੀਂ authentication ਬਣਾਓਗੇ, ਜਿਵੇਂ ਅਸੀਂ **ਸ਼ੁਰੂਆਤ ਕਿਵੇਂ ਕਰੀਏ** ਵਿੱਚ ਕੀਤੀ ਸੀ, ਜਾਂ ਪਹਿਲਾਂ ਤੋਂ ਬਣੀ authentication ਚੁਣੋਗੇ। ਇਸ ਟਿਊਟੋਰੀਅਲ ਵਿੱਚ ਅਸੀਂ ਉਹੀ authentication ਚੁਣਾਂਗੇ ਜੋ ਪਹਿਲਾਂ ਬਣਾਈ ਸੀ।

![Zapier action ਲਈ authentication ਚੁਣਨਾ](/img/admin/webhooks-list.png)

### Action ਸੈੱਟ ਅੱਪ ਕਰਨਾ

ਇਹ **action ਦਾ ਮੁੱਖ ਕਦਮ** ਹੈ ਅਤੇ ਇੱਥੇ ਚੀਜ਼ਾਂ ਥੋੜੀਆਂ ਵੱਖਰੀਆਂ ਹਨ। ਪਹਿਲੀ ਜਾਣਕਾਰੀ ਜੋ ਤੁਸੀਂ ਚੁਣੋਗੇ ਉਹ ਹੈ **Item**। Item ਤੁਹਾਡੇ ਨੈੱਟਵਰਕ ਦਾ **ਜਾਣਕਾਰੀ ਮਾਡਲ** ਹੈ ਜਿਵੇਂ ਕਿ **Customers, Payments, Sites, Emails** ਅਤੇ ਹੋਰ।

![Zapier action ਲਈ Item ਕਿਸਮ ਚੁਣਨਾ](/img/admin/webhooks-list.png)

ਜਦੋਂ ਤੁਸੀਂ ਕੋਈ item ਚੁਣਦੇ ਹੋ, ਫਾਰਮ **ਉਸ item ਲਈ ਜ਼ਰੂਰੀ ਅਤੇ ਵਿਕਲਪਿਕ ਫੀਲਡਾਂ ਦਿਖਾਉਣ ਲਈ ਬਦਲ ਜਾਵੇਗਾ**।

ਉਦਾਹਰਨ ਲਈ, ਜਦੋਂ ਤੁਸੀਂ **Customer** item ਚੁਣਦੇ ਹੋ, ਫਾਰਮ ਫੀਲਡਾਂ ਉਹ ਸਭ ਕੁਝ ਦਿਖਾਉਣਗੀਆਂ ਜੋ ਨੈੱਟਵਰਕ ਵਿੱਚ ਨਵਾਂ Customer ਬਣਾਉਣ ਲਈ ਭਰਨਾ ਜ਼ਰੂਰੀ ਹੈ।

![Zapier action ਸੈੱਟਅੱਪ ਵਿੱਚ Customer item ਫੀਲਡਾਂ](/img/admin/webhooks-list.png)

ਸਾਰੀਆਂ **ਜ਼ਰੂਰੀ** ਫੀਲਡਾਂ ਭਰਨ ਅਤੇ continue 'ਤੇ ਕਲਿੱਕ ਕਰਨ ਤੋਂ ਬਾਅਦ, ਆਖਰੀ ਸਕ੍ਰੀਨ ਤੁਹਾਨੂੰ ਭਰੀਆਂ ਹੋਈਆਂ ਅਤੇ ਖਾਲੀ ਛੱਡੀਆਂ ਫੀਲਡਾਂ ਦਿਖਾਵੇਗੀ।

![ਭਰੀਆਂ ਅਤੇ ਖਾਲੀ ਫੀਲਡਾਂ ਦਿਖਾਉਂਦਾ Zapier action ਟੈਸਟ](/img/admin/webhooks-list.png)

ਜਿਵੇਂ ਹੀ ਤੁਹਾਡਾ ਟੈਸਟ ਪੂਰਾ ਹੋ ਜਾਂਦਾ ਹੈ ਅਤੇ ਸਫਲ ਹੁੰਦਾ ਹੈ, ਤੁਹਾਡਾ action ਸੈੱਟ ਹੋ ਗਿਆ ਹੈ। ਆਪਣੇ ਨੈੱਟਵਰਕ 'ਤੇ ਜਾ ਕੇ ਇਹ ਵੀ ਚੈੱਕ ਕਰਨਾ ਜ਼ਰੂਰੀ ਹੈ ਕਿ ਕੀ ਤੁਹਾਡੇ action ਦੇ ਟੈਸਟ ਨਾਲ item ਬਣਿਆ ਹੈ ਜਾਂ ਨਹੀਂ।
