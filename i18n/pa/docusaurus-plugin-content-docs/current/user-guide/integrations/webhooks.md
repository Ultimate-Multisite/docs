---
title: Webhooks
sidebar_position: 15
_i18n_hash: f8456622538d07af8f5aa36c1ec19249
---
# Webhooks (v2) ਉੱਤੇ ਪਹਿਲੀ ਝਲਕ {#a-first-look-on-webhooks-v2}

_**ਧਿਆਨ ਦਿਓ: ਨੋਟ ਕਰੋ ਕਿ ਇਹ ਵਿਸ਼ੇਸ਼ਤਾ ਜਾਂ ਲੇਖ ਉੱਚ ਪੱਧਰ ਦੇ ਵਰਤੋਂਕਾਰਾਂ ਲਈ ਹੈ।**_

ਇੱਕ **webhook** ਕਿਸੇ ਐਪ ਜਾਂ Ultimate Multisite ਵਰਗੇ software ਲਈ ਹੋਰ application ਨੂੰ ਰੀਅਲ-ਟਾਈਮ ਜਾਣਕਾਰੀ ਪ੍ਰਦਾਨ ਕਰਨ ਦਾ ਇੱਕ ਤਰੀਕਾ ਹੈ। webhook ਡਾਟਾ ਜਾਂ payloads ਨੂੰ ਘਟਨਾ ਹੋਣ ਦੇ ਨਾਲ ਹੀ ਹੋਰ application ਤੱਕ ਪਹੁੰਚਾਉਂਦਾ ਹੈ, ਜਿਸਦਾ ਅਰਥ ਹੈ ਕਿ ਤੁਸੀਂ **ਤੁਰੰਤ ਡਾਟਾ ਪ੍ਰਾਪਤ ਕਰਦੇ ਹੋ।**

ਇਹ ਤਦ ਮਦਦਗਾਰ ਹੈ ਜੇ ਤੁਹਾਨੂੰ ਹਰ ਵਾਰ ਕੋਈ event trigger ਹੋਣ 'ਤੇ Ultimate Multisite ਤੋਂ ਕਿਸੇ ਹੋਰ CRM ਜਾਂ system ਵੱਲ ਕੁਝ ਖਾਸ ਡਾਟਾ integrate ਜਾਂ pass ਕਰਨ ਦੀ ਲੋੜ ਹੋਵੇ। ਉਦਾਹਰਨ ਲਈ, ਹਰ ਵਾਰ ਨਵਾਂ ਵਰਤੋਂਕਾਰ Account ਬਣਨ 'ਤੇ ਤੁਹਾਨੂੰ ਵਰਤੋਂਕਾਰ ਦਾ ਨਾਮ ਅਤੇ ਈਮੇਲ ਪਤਾ mailing list ਨੂੰ ਭੇਜਣਾ ਹੋਵੇ।

## webhook ਕਿਵੇਂ ਬਣਾਇਆ ਜਾਵੇ {#how-to-create-a-webhook}

webhook ਬਣਾਉਣ ਲਈ, ਆਪਣੇ network admin dashboard 'ਤੇ ਜਾਓ। **Ultimate Multisite > Webhooks > Add New Webhook** 'ਤੇ ਕਲਿੱਕ ਕਰੋ।

![Add New Webhook ਬਟਨ ਵਾਲਾ ਖਾਲੀ Webhooks ਸੂਚੀ ਪੰਨਾ](/img/admin/webhooks-list-empty.png)

ਫਿਰ ਤੁਸੀਂ webhook configuration ਨੂੰ edit ਕਰ ਸਕਦੇ ਹੋ:

![Name, Event, ਅਤੇ URL fields ਵਾਲਾ Add New Webhook ਫਾਰਮ](/img/admin/webhook-add-modal.png)

ਨਵਾਂ webhook ਬਣਾਉਂਦੇ ਸਮੇਂ ਤੁਹਾਡੇ ਤੋਂ **Name, URL,** ਅਤੇ **Event** ਵਰਗੀ ਜਾਣਕਾਰੀ ਪੁੱਛੀ ਜਾਵੇਗੀ। ਤੁਸੀਂ ਆਪਣੇ webhook ਲਈ ਆਪਣੀ ਪਸੰਦ ਦਾ ਕੋਈ ਵੀ ਨਾਮ ਵਰਤ ਸਕਦੇ ਹੋ। ਸਭ ਤੋਂ ਮਹੱਤਵਪੂਰਨ fields URL ਅਤੇ Event ਹਨ।

![URL field ਅਤੇ payload preview ਦਿਖਾਉਂਦਾ webhook edit interface](/img/admin/webhook-url-field.png)

URL ਉਹ **endpoint ਜਾਂ destination** ਹੈ ਜਿਸ 'ਤੇ Ultimate Multisite **payload ਜਾਂ ਡਾਟਾ** ਭੇਜੇਗਾ। ਇਹ ਉਹ application ਹੈ ਜੋ ਡਾਟਾ ਪ੍ਰਾਪਤ ਕਰੇਗੀ।

Zapier ਸਭ ਤੋਂ ਆਮ solution ਹੈ ਜੋ ਵਰਤੋਂਕਾਰ 3rd party application ਨਾਲ integration ਆਸਾਨ ਬਣਾਉਣ ਲਈ ਵਰਤਦਾ ਹੈ। Zapier ਵਰਗੇ platform ਤੋਂ ਬਿਨਾਂ, ਤੁਹਾਨੂੰ ਡਾਟਾ catch ਕਰਕੇ process ਕਰਨ ਲਈ manually ਇੱਕ custom function ਬਣਾਉਣ ਦੀ ਲੋੜ ਪਵੇਗੀ। **Zapier ਨਾਲ Ultimate Multisite webhook ਕਿਵੇਂ ਵਰਤਣਾ ਹੈ** ਬਾਰੇ ਇਹ ਲੇਖ ਵੇਖੋ।

ਇਸ ਲੇਖ ਵਿੱਚ, ਅਸੀਂ webhook ਕਿਵੇਂ ਕੰਮ ਕਰਦਾ ਹੈ ਇਸਦੀ ਬੁਨਿਆਦੀ ਧਾਰਣਾ ਅਤੇ Ultimate Multisite ਵਿੱਚ ਉਪਲਬਧ events ਨੂੰ ਵੇਖਾਂਗੇ। ਅਸੀਂ [requestbin.com](https://requestbin.com/) ਨਾਮ ਦੀ 3rd party site ਵਰਤਾਂਗੇ। ਇਹ site ਸਾਨੂੰ ਕੋਈ coding ਕੀਤੇ ਬਿਨਾਂ endpoint ਬਣਾਉਣ ਅਤੇ payload catch ਕਰਨ ਦੀ ਆਗਿਆ ਦੇਵੇਗੀ। _**Disclaimer: ਇਹ ਸਿਰਫ਼ ਸਾਨੂੰ ਦਿਖਾਏਗੀ ਕਿ ਡਾਟਾ ਪ੍ਰਾਪਤ ਹੋ ਗਿਆ ਹੈ।**_ payload 'ਤੇ ਕੋਈ processing ਜਾਂ ਕਿਸੇ ਵੀ ਕਿਸਮ ਦੀ action ਨਹੀਂ ਕੀਤੀ ਜਾਵੇਗੀ।

[requestbin.com](https://requestbin.com/) 'ਤੇ ਜਾਓ ਅਤੇ Create Request Bin 'ਤੇ ਕਲਿੱਕ ਕਰੋ।

ਉਹ button ਕਲਿੱਕ ਕਰਨ ਤੋਂ ਬਾਅਦ, ਇਹ ਤੁਹਾਨੂੰ log in ਕਰਨ ਲਈ ਕਹੇਗਾ ਜੇ ਤੁਹਾਡੇ ਕੋਲ ਪਹਿਲਾਂ ਹੀ account ਹੈ ਜਾਂ sign up ਕਰਨ ਲਈ। ਜੇ ਤੁਹਾਡੇ ਕੋਲ ਪਹਿਲਾਂ ਹੀ account ਹੈ ਤਾਂ ਇਹ ਤੁਹਾਨੂੰ ਸਿੱਧਾ ਉਨ੍ਹਾਂ ਦੇ dashboard 'ਤੇ ਲੈ ਜਾਵੇਗਾ। ਉਨ੍ਹਾਂ ਦੇ dashboard 'ਤੇ, ਤੁਸੀਂ ਤੁਰੰਤ ਉਹ endpoint ਜਾਂ URL ਵੇਖੋਗੇ ਜੋ ਤੁਸੀਂ ਆਪਣਾ Ultimate Multisite webhook ਬਣਾਉਣ ਲਈ ਵਰਤ ਸਕਦੇ ਹੋ।

ਅੱਗੇ ਵਧੋ ਅਤੇ URL copy ਕਰੋ ਅਤੇ Ultimate Multisite 'ਤੇ ਵਾਪਸ ਜਾਓ। endpoint ਨੂੰ URL field ਵਿੱਚ ਰੱਖੋ ਅਤੇ dropdown ਤੋਂ ਇੱਕ event ਚੁਣੋ। ਇਸ ਉਦਾਹਰਨ ਵਿੱਚ, ਅਸੀਂ **Payment Received** ਚੁਣਾਂਗੇ।

ਇਹ event ਹਰ ਵਾਰ trigger ਹੁੰਦਾ ਹੈ ਜਦੋਂ ਕੋਈ ਵਰਤੋਂਕਾਰ ਭੁਗਤਾਨ ਕਰਦਾ ਹੈ। ਉਪਲਬਧ ਸਾਰੇ events, ਉਨ੍ਹਾਂ ਦਾ ਵੇਰਵਾ, ਅਤੇ payloads ਪੰਨੇ ਦੇ ਹੇਠਾਂ ਸੂਚੀਬੱਧ ਹਨ। webhook save ਕਰਨ ਲਈ **Add New Webhook** button 'ਤੇ ਕਲਿੱਕ ਕਰੋ।

![Payment Received ਚੁਣਿਆ ਹੋਇਆ ਦਿਖਾਉਂਦਾ webhook event dropdown](/img/admin/webhook-event-picker.png)

ਹੁਣ ਅਸੀਂ endpoint ਨੂੰ test event ਭੇਜ ਸਕਦੇ ਹਾਂ ਤਾਂ ਜੋ ਅਸੀਂ ਦੇਖ ਸਕੀਏ ਕਿ ਸਾਡੇ ਦੁਆਰਾ ਬਣਾਇਆ webhook ਕੰਮ ਕਰ ਰਿਹਾ ਹੈ ਜਾਂ ਨਹੀਂ। ਅਸੀਂ ਇਹ ਕੰਮ ਆਪਣੇ ਬਣਾਏ webhook ਦੇ ਹੇਠਾਂ **Send Test Event** 'ਤੇ ਕਲਿੱਕ ਕਰਕੇ ਕਰ ਸਕਦੇ ਹਾਂ।

![ਇੱਕ configured webhook ਅਤੇ Send Test action ਦਿਖਾਉਂਦੀ Webhooks ਸੂਚੀ](/img/admin/webhooks-list-populated.png)

ਇਹ ਇੱਕ confirmation window ਦਿਖਾਉਂਦਾ ਹੈ ਜਿਸ ਵਿੱਚ ਕਿਹਾ ਜਾਂਦਾ ਹੈ ਕਿ test successful ਸੀ।

![test payload ਭੇਜਣ ਤੋਂ ਬਾਅਦ webhook test event result](/img/admin/webhook-test-result.png)

ਹੁਣ ਜੇ ਅਸੀਂ _Requestbin_ site 'ਤੇ ਵਾਪਸ ਜਾਵਾਂਗੇ ਤਾਂ ਅਸੀਂ ਵੇਖਾਂਗੇ ਕਿ payload ਕੁਝ test data ਸਮੇਤ ਪ੍ਰਾਪਤ ਹੋ ਗਿਆ ਹੈ।

ਇਹ webhook ਅਤੇ endpoints ਕਿਵੇਂ ਕੰਮ ਕਰਦੇ ਹਨ, ਇਸਦਾ ਬੁਨਿਆਦੀ ਸਿਧਾਂਤ ਹੈ। ਜੇ ਤੁਸੀਂ custom endpoint ਬਣਾਉਣਾ ਹੈ, ਤਾਂ ਤੁਹਾਨੂੰ Ultimate Multisite ਤੋਂ ਪ੍ਰਾਪਤ ਕੀਤੇ ਡਾਟਾ ਨੂੰ process ਕਰਨ ਲਈ custom function ਬਣਾਉਣ ਦੀ ਲੋੜ ਪਵੇਗੀ।
