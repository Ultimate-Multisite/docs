---
title: Zapier ਰਾਹੀਂ ਖਾਤਾ ਰਜਿਸਟਰ ਕਰੋ
sidebar_position: 1
_i18n_hash: e769e5eddf428f2eac478f5b8cd4592d
---
# ਇਵੈਂਟ: Zapier ਰਾਹੀਂ ਖਾਤਾ ਰਜਿਸਟਰ ਕਰੋ

[Ultimate Multisite ਨੂੰ Zapier ਨਾਲ ਜੋੜਨਾ](zapier.md) ਲੇਖ ਵਿੱਚ, ਅਸੀਂ ਦੱਸਿਆ ਸੀ ਕਿ triggers ਅਤੇ events ਦੇ ਆਧਾਰ 'ਤੇ Ultimate Multisite ਵਿੱਚ ਵੱਖ-ਵੱਖ ਕੰਮ ਕਰਨ ਲਈ Zapier ਦੀ ਵਰਤੋਂ ਕਿਵੇਂ ਕਰਨੀ ਹੈ। ਇਸ ਲੇਖ ਵਿੱਚ, ਅਸੀਂ ਦਿਖਾਵਾਂਗੇ ਕਿ ਤੁਸੀਂ 3rd party ਐਪਲੀਕੇਸ਼ਨਾਂ ਨੂੰ ਕਿਵੇਂ ਜੋੜ ਸਕਦੇ ਹੋ। ਅਸੀਂ Google Sheets ਨੂੰ ਡਾਟਾ ਦੇ ਸਰੋਤ ਵਜੋਂ ਵਰਤਾਂਗੇ ਅਤੇ ਖਾਤਾ ਰਜਿਸਟਰ ਕਰਨ ਲਈ ਜਾਣਕਾਰੀ Ultimate Multisite ਨੂੰ ਭੇਜਾਂਗੇ।

ਸਭ ਤੋਂ ਪਹਿਲਾਂ, ਤੁਹਾਨੂੰ ਆਪਣੇ Google Drive ਵਿੱਚ ਇੱਕ **Google Sheet** ਬਣਾਉਣੀ ਪਵੇਗੀ। ਇਹ ਯਕੀਨੀ ਬਣਾਓ ਕਿ ਤੁਸੀਂ ਹਰ column ਨੂੰ ਸਹੀ ਢੰਗ ਨਾਲ ਪਰਿਭਾਸ਼ਿਤ ਕਰੋ ਤਾਂ ਜੋ ਬਾਅਦ ਵਿੱਚ ਡਾਟਾ ਮੈਪ ਕਰਨਾ ਆਸਾਨ ਹੋਵੇ।

![ਗਾਹਕ ਡਾਟਾ ਲਈ columns ਵਾਲੀ Google Sheet](/img/admin/webhooks-list.png)Google Sheet ਬਣਾਉਣ ਤੋਂ ਬਾਅਦ, ਤੁਸੀਂ ਆਪਣੇ Zapier ਖਾਤੇ ਵਿੱਚ ਲੌਗਇਨ ਕਰ ਸਕਦੇ ਹੋ ਅਤੇ zap ਬਣਾਉਣਾ ਸ਼ੁਰੂ ਕਰ ਸਕਦੇ ਹੋ।

![zap ਬਣਾਉਣ ਲਈ Zapier dashboard](/img/admin/webhooks-list.png)**"App event"** ਲਈ ਖੋਜ ਖੇਤਰ ਵਿੱਚ **"Google Sheets"** ਚੁਣੋ

![App event ਵਜੋਂ Google Sheets ਚੁਣਨਾ](/img/admin/webhooks-list.png)

ਫਿਰ "**Event**" ਖੇਤਰ ਲਈ "**New spreadsheet row**" ਚੁਣੋ ਅਤੇ "**Continue**" 'ਤੇ ਕਲਿੱਕ ਕਰੋ

![Zapier ਵਿੱਚ New spreadsheet row event ਚੁਣਨਾ](/img/admin/webhooks-list.png)ਅਗਲੇ ਕਦਮ ਵਿੱਚ ਤੁਹਾਨੂੰ ਉਹ **Google Account** ਚੁਣਨਾ ਹੋਵੇਗਾ ਜਿੱਥੇ **Google Sheet** ਸੇਵ ਹੈ। ਇਹ ਯਕੀਨੀ ਬਣਾਓ ਕਿ ਸਹੀ Google ਖਾਤਾ ਚੁਣਿਆ ਗਿਆ ਹੈ।

![Google Sheet ਲਈ Google Account ਚੁਣਨਾ](/img/admin/webhooks-list.png)

**"Set up trigger"** ਦੇ ਅੰਦਰ, ਤੁਹਾਨੂੰ ਉਹ Google spreadsheet ਅਤੇ worksheet ਚੁਣਨੀ ਅਤੇ ਦੱਸਣੀ ਪਵੇਗੀ ਜਿੱਥੋਂ ਡਾਟਾ ਆਵੇਗਾ। ਇਹ ਸਭ ਭਰੋ ਅਤੇ "**Continue**" 'ਤੇ ਕਲਿੱਕ ਕਰੋ

![spreadsheet ਅਤੇ worksheet ਚੁਣ ਕੇ trigger ਸੈੱਟ ਅੱਪ ਕਰਨਾ](/img/admin/webhooks-list.png)ਅਗਲਾ ਕਦਮ ਹੈ "**test your trigger**" ਤਾਂ ਜੋ ਯਕੀਨੀ ਹੋ ਸਕੇ ਕਿ ਤੁਹਾਡੀ Google Sheet ਸਹੀ ਢੰਗ ਨਾਲ ਕਨੈਕਟ ਹੈ।

![Zapier ਵਿੱਚ trigger ਟੈਸਟ ਕਰਨ ਦਾ ਕਦਮ](/img/admin/webhooks-list.png)ਜੇ ਤੁਹਾਡਾ ਟੈਸਟ ਸਫਲ ਹੁੰਦਾ ਹੈ, ਤਾਂ ਤੁਹਾਨੂੰ ਆਪਣੀ spreadsheet ਦੀਆਂ ਕੁਝ ਵੈਲਯੂਜ਼ ਦਿਖਾਉਂਦਾ ਨਤੀਜਾ ਨਜ਼ਰ ਆਵੇਗਾ। ਅੱਗੇ ਵਧਣ ਲਈ "**Continue**" 'ਤੇ ਕਲਿੱਕ ਕਰੋ।

![spreadsheet ਵੈਲਯੂਜ਼ ਦਿਖਾਉਂਦਾ ਸਫਲ trigger ਟੈਸਟ](/img/admin/webhooks-list.png)ਅਗਲਾ ਕਦਮ ਦੂਜੀ action ਸੈੱਟ ਅੱਪ ਕਰਨਾ ਹੈ ਜੋ Ultimate Multisite ਵਿੱਚ ਖਾਤਾ ਬਣਾਏਗੀ ਜਾਂ ਰਜਿਸਟਰ ਕਰੇਗੀ। ਖੋਜ ਖੇਤਰ ਵਿੱਚ "**Ultimate Multisite(2.0.2)**" ਚੁਣੋ

![action app ਵਜੋਂ Ultimate Multisite ਚੁਣਨਾ](/img/admin/webhooks-list.png)

"**Event**" ਖੇਤਰ ਵਿੱਚ, "**Register an Account in Ultimate Multisite**" ਚੁਣੋ ਅਤੇ ਫਿਰ "**Continue**" ਬਟਨ 'ਤੇ ਕਲਿੱਕ ਕਰੋ।

![Register an Account in Ultimate Multisite action event](/img/admin/webhooks-list.png)"**Set up an action**" ਦੇ ਅੰਦਰ, ਤੁਹਾਨੂੰ ਗਾਹਕ ਡਾਟਾ, memberships, products, ਆਦਿ ਲਈ ਵੱਖ-ਵੱਖ ਖੇਤਰ ਦਿਖਾਈ ਦੇਣਗੇ। ਤੁਸੀਂ ਆਪਣੀ Google Sheet ਦੀਆਂ ਵੈਲਯੂਜ਼ ਨੂੰ ਮੈਪ ਕਰ ਸਕਦੇ ਹੋ ਅਤੇ ਉਹਨਾਂ ਨੂੰ ਸਹੀ ਖੇਤਰ ਵਿੱਚ ਪਾ ਸਕਦੇ ਹੋ ਜਿਵੇਂ ਕਿ ਹੇਠਾਂ ਸਕ੍ਰੀਨਸ਼ਾਟ ਵਿੱਚ ਦਿਖਾਇਆ ਗਿਆ ਹੈ।

![Google Sheet ਵੈਲਯੂਜ਼ ਨੂੰ Ultimate Multisite ਖੇਤਰਾਂ ਨਾਲ ਮੈਪ ਕਰਨਾ](/img/admin/webhooks-list.png)

ਵੈਲਯੂਜ਼ ਮੈਪ ਕਰਨ ਤੋਂ ਬਾਅਦ, ਤੁਸੀਂ action ਨੂੰ ਟੈਸਟ ਕਰ ਸਕਦੇ ਹੋ।

![register account Zapier action ਦੀ ਟੈਸਟਿੰਗ](/img/admin/webhooks-list.png)
