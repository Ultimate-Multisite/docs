---
title: ਐਕਸਪੋਰਟ ਅਤੇ ਇੰਪੋਰਟ
sidebar_position: 12
_i18n_hash: 6536f9ebee269a8553a57733e4cb03fc
---
# Export & Import

Ultimate Multisite 2.9.0 ਇੱਕ single-site **Export & Import** ਟੂਲ ਜੋ **Tools > Export & Import** ਹੇਠਾਂ ਜੋੜਦਾ ਹੈ। ਇਸਦੀ ਵਰਤੋਂ ਉਦੋਂ ਕਰੋ ਜਦੋਂ ਤੁਹਾਨੂੰ ਇੱਕ WordPress ਸਾਈਟ ਨੂੰ ZIP ਫਾਈਲ ਵਜੋਂ ਪੈਕ ਕਰਨਾ, ਉਸ ZIP ਨੂੰ ਰੀਸਟੋਰ ਕਰਨਾ, ਜਾਂ ਇੱਕ ਸਾਈਟ ਨੂੰ compatible Ultimate Multisite ਅਤੇ single-site WordPress installation ਵਿਚਕਾਰ ਮੇਵ ਕਰਨ ਦੀ ਲੋੜ ਹੋਵੇ।

## Required permissions

ਤੁਹਾਨੂੰ ਇੱਕ ਅਡਮਿਨਰੇਟਰ ਵਜੋਂ ਸਾਈਨ ਇਨ ਕਰਨਾ ਪਵੇਗਾ ਜਿਸ ਕੋਲ ਉਸ ਸਾਈਟ ਦੇ **Tools** ਮੀਨੂ ਤੱਕ ਪਹੁੰਚ ਹੋਵੇ ਜਿਸਨੂੰ export ਜਾਂ import ਕੀਤਾ ਜਾ ਰਿਹਾ ਹੈ। ਜੇਕਰ ਤੁਸੀਂ ਇੱਕ multisite network 'ਤੇ ਹੋ, ਤਾਂ network-level Ultimate Multisite ਟੂਲਸ ਤੋਂ subsites ਨੂੰ export ਜਾਂ import ਕਰਦੇ ਸਮੇਂ network administrator account ਦੀ ਵਰਤੋਂ ਕਰੋ।

Export ZIP ਡਾਊਨਲੋਡ ਇੱਕ authenticated download endpoint ਰਾਹੀਂ ਸਰਵ ਕੀਤੇ ਜਾਂਦੇ ਹਨ, ਇਸ ਲਈ ਜਦੋਂ ਤੱਕ ਡਾਊਨਲੋਡ ਪੂਰਾ ਨਾ ਹੋ ਜਾਵੇ ਤੱਕ ਐਡਮਿਨ ਸੈਸ਼ਨ ਨੂੰ ਐਕਟਿਵ ਰੱਖੋ ਅਤੇ ਤਿਆਰ ਹੋਏ download URLs ਨੂੰ ਜਨਤਕ ਤੌਰ 'ਤੇ ਸਾਂਝਾ ਨਾ ਕਰੋ।

## Exporting a site to a ZIP

1. ਜਿਸ ਸਾਈਟ ਨੂੰ ਤੁਸੀਂ copy ਕਰਨਾ ਚਾਹੁੰਦੇ ਹੋ, ਉਸ ਦੇ WordPress admin ਵਿੱਚ, **Tools > Export & Import** 'ਤੇ ਜਾਓ।
2. export area ਖੋਲ੍ਹੋ ਅਤੇ ਉਹ ਸਾਈਟ ਚੁਣੋ ਜਿਸਨੂੰ ਤੁਸੀਂ package ਕਰਨਾ ਚਾਹੁੰਦੇ ਹੋ।
3. ਜੇਕਰ ਉਹ ਵਿਕਲਪ ਉਪਲਬਧ ਹਨ, ਤਾਂ uploads, plugins, ਅਤੇ themes ਵਰਗਾ ঐচ্ছਿਕ content ਸ਼ਾਮਲ ਕਰਨ ਲਈ ਚੁਣੋ।
4. export ਸ਼ੁਰੂ ਕਰੋ ਅਤੇ ਪ੍ਰਕਿਰਿਆ ਦੇ ਪੂਰਾ ਹੋਣ ਦਾ ਇੰਤਜ਼ਾਰ ਕਰੋ। ਵੱਡੀਆਂ ਸਾਈਟਾਂ ਨੂੰ ZIP ਤਿਆਰ ਹੋਣ ਤੋਂ ਪਹਿਲਾਂ background ਵਿੱਚ ਪੂਰਾ ਹੋਣ ਦੀ ਲੋੜ ਹੋ ਸਕਦੀ ਹੈ।
5. exports list ਤੋਂ ਪੂਰਾ ਹੋਇਆ ZIP ਡਾਊਨਲੋਡ ਕਰੋ।

ZIP ਨੂੰ ਇੱਕ ਸੁਰੱਖਿਅਤ ਜਗ੍ਹਾ 'ਤੇ ਰੱਖੋ। ਇਸ ਵਿੱਚ ਸਾਈਟ ਦਾ content, ਸੈਟਿੰਗਾਂ, ਮੀਡੀਆ ਫਾਈਲਾਂ, ਅਤੇ ਚੁਣੇ ਗਏ code assets ਹੋ ਸਕਦੇ ਹਨ।

## What the export includes

ਇੱਕ export ZIP ਵਿੱਚ ਇਹ ਸ਼ਾਮਲ ਹੋ ਸਕਦਾ ਹੈ:

- ਚੁਣੇ ਗਏ ਸਾਈਟ ਦਾ database content ਅਤੇ configuration।
- uploads ਸ਼ਾਮਲ ਹੋਣ 'ਤੇ upload ਕੀਤੇ ਗਏ media files।
- ਜਦੋਂ ਉਹ ਵਿਕਲਪ ਚੁਣੇ ਜਾਂਦੇ ਹਨ, ਤਾਂ plugins ਅਤੇ themes।
- Import metadata ਜੋ Export & Import ਟੂਲ ਨੂੰ target installation 'ਤੇ ਸਾਈਟ ਨੂੰ rebuild ਕਰਨ ਲਈ ਵਰਤਿਆ ਜਾਂਦਾ ਹੈ।

exact ZIP size media ਦੀ ਮਾਤਰਾ, ਚੁਣੇ ਗਏ plugins ਅਤੇ themes, ਅਤੇ ਸਾਈਟ ਦੇ database tables ਦੇ size 'ਤੇ ਨਿਰਭਰ ਕਰਦਾ ਹੈ।

## Importing a site from a ZIP

1. destination WordPress site 'ਤੇ **Tools > Export & Import** 'ਤੇ ਜਾਓ।
2. import area ਖੋਲ੍ਹੋ ਅਤੇ Export & Import ਟੂਲ ਦੁਆਰਾ ਬਣਾਇਆ ਗਿਆ ZIP upload ਕਰੋ।
3. ਜੇ ਸਾਈਟ ਨੂੰ ਇੱਕ ਨਵੇਂ ਪਤੇ ਦੀ ਵਰਤੋਂ ਕਰਨੀ ਹੈ ਤਾਂ ਇੱਕ replacement URL ਭਰੋ, ਜਾਂ original URL ਰੱਖਣ ਲਈ field ਨੂੰ ਖਾਲੀ ਛੱਡ ਦਿਓ।
4. ਇਹ ਚੁਣੋ ਕਿ import ਪੂਰਾ ਹੋਣ ਤੋਂ ਬਾਅਦ upload ਕੀਤੇ ZIP ਨੂੰ delete ਕਰਨਾ ਹੈ ਜਾਂ ਨਹੀਂ।
5. **Begin Import** 'ਤੇ ਕਲਿੱਕ ਕਰੋ।
6. ਜਦੋਂ ਤੱਕ ਇਹ ਪੂਰਾ ਨਹੀਂ ਹੋ ਜਾਂਦਾ, ਉਦੋਂ ਤੱਕ pending import ਦੀ ਨਿਗਰਾਨੀ ਕਰੋ। **Cancel Import** ਦੀ ਵਰਤੋਂ ਸਿਰਫ਼ ਉਦੋਂ ਕਰੋ ਜਦੋਂ ਤੁਹਾਨੂੰ ਪ੍ਰਕਿਰਿਆ ਨੂੰ ਪੂਰਾ ਹੋਣ ਤੋਂ ਪਹਿਲਾਂ ਰੋਕਣ ਦੀ ਲੋੜ ਹੋਵੇ।
7. normal traffic ਜਾਂ customer access ਦੀ ਇਜਾਜ਼ਤ ਦੇਣ ਤੋਂ ਪਹਿਲਾਂ import ਕੀਤੀ ਸਾਈਟ ਦੀ ਸਮੀਖਿਆ ਕਰੋ।

ਇੱਕ single-site WordPress installation 'ਤੇ, ZIP import ਕਰਨ ਨਾਲ ਮੌਜੂਦਾ ਸਾਈਟ ਨੂੰ import ਕੀਤੀ ਸਾਈਟ ਨਾਲ replace ਕਰ ਦਿੱਤਾ ਜਾਂਦਾ ਹੈ। ਸ਼ੁਰੂ ਕਰਨ ਤੋਂ ਪਹਿਲਾਂ target site ਦਾ ਪੂਰਾ backup ਬਣਾਓ, ਅਤੇ ਇੱਕੋ ਸਮੇਂ ਇੱਕੋ ਸਾਈਟ ਲਈ ਕਈ imports ਸ਼ੁਰੂ ਕਰਨ ਤੋਂ ਬਚੋ।

## Limitations and compatibility notes

- ਬਹੁਤ ਵੱਡੇ uploads directories ਜਾਂ media libraries ਵੱਡੀਆਂ ZIP ਫਾਈਲਾਂ ਪੈਦਾ ਕਰ ਸਕਦੇ ਹਨ। ਵੱਡੀਆਂ ਸਾਈਟਾਂ ਨੂੰ export ਜਾਂ import ਕਰਨ ਤੋਂ ਪਹਿਲਾਂ PHP upload limits, execution limits, disk space, memory, ਅਤੇ server timeout settings ਦੀ ਪੁਸ਼ਟੀ ਕਰੋ।
- ਬਹੁਤ ਵੱਡੀਆਂ media libraries ਨੂੰ ਘੱਟ traffic ਵਾਲੇ maintenance window ਦੌਰਾਨ move ਕਰਨ ਦੀ ਲੋੜ ਪੈ ਸਕਦੀ ਹੈ।
- target WordPress installation ਨੂੰ compatible WordPress, PHP, Ultimate Multisite, plugin, ਅਤੇ theme versions ਚਲਾਉਣੇ ਚਾਹੀਦੇ ਹਨ।
- ਇੱਕ single-site import target site ਨੂੰ replace ਕਰਦਾ ਹੈ। ਇਹ ਕੋਈ merge tool ਨਹੀਂ ਹੈ।
- Multisite-to-single-site ਅਤੇ single-site-to-multisite moves ਸਿਰਫ਼ ਉਦੋਂ ਸਪੋਰਟ ਕੀਤੇ ਜਾਂਦੇ ਹਨ ਜਦੋਂ target environment export ਕੀਤੀ ਸਾਈਟ ਦੇ plugins, themes, URLs, ਅਤੇ ਲੋੜੀਂਦੇ Ultimate Multisite components ਨੂੰ ਚਲਾ ਸਕਦਾ ਹੈ।
- ZIP ਨੂੰ private ਰੱਖੋ। ਇਸ ਵਿੱਚ export ਕੀਤੀ ਸਾਈਟ ਦੇ database content, uploaded files, ਅਤੇ configuration details ਹੋ ਸਕਦੇ ਹਨ।

ਪੁਰਾਣੇ network-level export workflows ਲਈ, [Site Export](/user-guide/administration/site-export) ਦੇਖੋ।
