---
title: GitHub ਸਨਿੱਪਟਸ
sidebar_position: 3
_i18n_hash: c643f3d76aace8c15fd224b984af6633
---
# ਸਾਡੀ GitHub repository ਤੇ Ultimate Multisite snippets ਨੂੰ ਕਿਵੇਂ ਵਰਤਣਾ ਹੈ

GitHub repository ਵਿੱਚ ਕੋਡ snippets ਉਪਲਬਧ ਹਨ ਜੋ Ultimate Multisite ਵਰਤਣ ਵਾਲੇ ਅਕਸਰ ਮੰਗਦੇ ਹਨ। ਇਹ ਉਨ੍ਹਾਂ ਲੋਕਾਂ ਲਈ ਹਨ ਜੋ ਛੋਟੀਆਂ-ਛੋਟੀਆਂ ਸਹੂਲਤਾਂ ਜੋੜਨਾ ਚਾਹੁੰਦੇ ਹਨ, ਜਿਵੇਂ ਕਿ sign-up ਪੇਜਾਂ ਤੇ Google Analytics script ਜੋੜਨਾ ਜਾਂ admin dashboard ਤੋਂ ਕੋਈ meta box ਲੁਕਾਉਣਾ।

ਇਹ ਲੇਖ ਤੁਹਾਨੂੰ ਦੱਸੇਗਾ ਕਿ ਇਹ ਕੋਡ ਕਿਵੇਂ ਵਰਤਣੇ ਹਨ, ਖਾਸ ਕਰਕੇ ਇਹ ਕੋਡ ਕਿੱਥੇ ਪਾਉਣੇ ਹਨ।

ਤੁਸੀਂ ਹੇਠਾਂ ਦਿੱਤੇ ਲਿੰਕ ਤੇ snippets ਲੱਭ ਸਕਦੇ ਹੋ।

https://github.com/next-press/wp-ultimo-snippets/

ਕੋਡ ਜੋੜਨ ਦੇ 2 ਤਰੀਕੇ ਹਨ

  1. ਆਪਣੀ theme ਦੀ functions.php ਫਾਈਲ ਵਿੱਚ।

  2. Must-Use Plugins (mu-plugins)

# ਆਪਣੀ theme ਦੀ functions.php ਫਾਈਲ ਵਿੱਚ snippet ਕਿਵੇਂ ਜੋੜਨਾ ਹੈ।

  1. ਆਪਣੇ WordPress Network admin dashboard ਵਿੱਚ ਲੌਗਇਨ ਕਰੋ ਅਤੇ Themes > Theme Editor ਤੇ ਜਾਓ (ਹੇਠਾਂ screenshot ਦੇਖੋ)।

  2. "Edit Themes" ਪੇਜ ਤੇ, ਯਕੀਨੀ ਬਣਾਓ ਕਿ ਤੁਹਾਡੀ ਐਕਟਿਵ theme ਸਕਰੀਨ ਦੇ ਉੱਪਰ ਸੱਜੇ ਪਾਸੇ ਵਾਲੇ dropdown ਫੀਲਡ ਵਿੱਚ ਚੁਣੀ ਹੋਈ ਹੈ (ਹੇਠਾਂ screenshot ਵਿੱਚ #3)।

  3. "Theme Files" ਸੈਕਸ਼ਨ ਦੇ ਹੇਠਾਂ functions.php ਫਾਈਲ ਤੇ ਕਲਿੱਕ ਕਰੋ ਤਾਂ ਜੋ ਫਾਈਲ ਲੋਡ ਹੋ ਜਾਵੇ। ਹੇਠਾਂ ਤੱਕ ਸਕ੍ਰੋਲ ਕਰੋ ਅਤੇ GitHub repository ਤੋਂ ਲਿਆ Ultimate Multisite snippet ਪੇਸਟ ਕਰੋ।

<!-- Screenshot unavailable: WordPress Theme Editor showing functions.php file editing -->

# Must-Use Plugins (mu-plugins) ਕਿਵੇਂ ਬਣਾਉਣੇ ਹਨ

WordPress ਵਿੱਚ ਇੱਕ ਫੀਚਰ ਹੈ ਜੋ ਤੁਹਾਨੂੰ ਕਸਟਮ ਫੰਕਸ਼ਨੈਲਿਟੀ ਲੋਡ ਕਰਨ ਦਿੰਦਾ ਹੈ, ਜਿਸ ਨੂੰ "Must-Use Plugins" ਜਾਂ ਛੋਟੇ ਰੂਪ ਵਿੱਚ "mu-plugins" ਕਹਿੰਦੇ ਹਨ।

ਇਹ ਖਾਸ mu-plugins ਬਾਕੀ ਸਾਰੇ ਆਮ plugins ਤੋਂ ਪਹਿਲਾਂ ਲੋਡ ਹੁੰਦੇ ਹਨ, ਅਤੇ ਇਨ੍ਹਾਂ ਨੂੰ ਡੀਐਕਟੀਵੇਟ ਨਹੀਂ ਕੀਤਾ ਜਾ ਸਕਦਾ। Multisite network ਵਿੱਚ, ਇਨ੍ਹਾਂ mu-plugins ਦਾ ਕੋਡ ਤੁਹਾਡੀ installation ਦੀਆਂ ਸਾਰੀਆਂ sites ਤੇ ਲੋਡ ਹੋਵੇਗਾ।

1\. ਆਪਣੀ WordPress install ਦੇ filesystem ਤੱਕ ਪਹੁੰਚਣ ਲਈ FTP ਜਾਂ SSH ਵਰਤੋ।

2\. ਆਪਣੀ WordPress install ਦੀ wp-content ਡਾਇਰੈਕਟਰੀ ਅੰਦਰ, ਇੱਕ ਨਵੀਂ ਡਾਇਰੈਕਟਰੀ ਬਣਾਓ ਜਿਸ ਦਾ ਨਾਮ ਹੋਵੇ: mu-plugins।

<!-- Screenshot unavailable: File manager showing wp-content directory with mu-plugins folder -->

3\. ਆਪਣੇ ਕੰਪਿਊਟਰ ਤੇ Notepad ਜਾਂ ਕਿਸੇ ਵੀ code editor ਦੀ ਵਰਤੋਂ ਕਰਕੇ wu-snippet.php ਨਾਮ ਦੀ ਇੱਕ ਨਵੀਂ PHP ਫਾਈਲ ਬਣਾਓ।

4\. GitHub repository ਤੋਂ ਲਿਆ Ultimate Multisite ਕੋਡ snippet ਫਾਈਲ ਵਿੱਚ ਪਾਓ ਅਤੇ ਸੇਵ ਕਰੋ। ਤੁਸੀਂ ਆਪਣੇ mu plugin ਨੂੰ ਲੇਬਲ ਕਰਨ ਲਈ ਕੋਡ snippet ਦੇ ਉੱਪਰ ਇਹ ਕੋਡ ਵੀ ਜੋੜ ਸਕਦੇ ਹੋ।
