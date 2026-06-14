---
title: WPMU DEV انٽيغريشن
sidebar_position: 4
_i18n_hash: 01cdaa5cf8aece1ca5c269d943e8a9e9
---
# WPMU DEV Integration

## جائزہ (Overview)
WPMU DEV هڪ جامع WordPress پليٽ فارم آهي جيڪو WordPress سائيٽس لاءِ هاستنگ، پلگينز ۽ سرونيسز پيش ڪري ٿو. هي ان انٽيغريشن سان Ultimate Multisite ۽ WPMU DEV هاستنگ جي وچ ۾ دومين (domain) جو خود بخود سنڪرائس (syncing) ڪرڻ ۽ SSL سرٽيفڪيٽ جي انتظام کي ختم ڪرڻ جي صلاحيت حاصل ٿئي ٿي.

## خصوصيتون (Features)
- خود بخود دومين سنڪرائس (Automatic domain syncing)
- SSL سرٽيفڪيٽ جو انتظام (SSL certificate management)
- وڌيڪ SSL سرٽيفڪيڪيشن جي ڪوشون (Extended SSL certificate verification attempts)

## گهرجيون (Requirements)
هي ان انٽيغريشن خود بخود اهو محسوس ڪري ٿو ته توهان WPMU DEV تي هاستنگ ڪري رهيا آهيو ۽ اندر موجود API جو استعمال ڪري ٿو. جيڪڏهن توهان WPMU DEV تي هاستنگ ڪري رهيا آهيو ته ڪنهن به اضافي ڪيفيڪيشن جي ضرورت نه آهي.

هي ان انٽيغريشن `WPMUDEV_HOSTING_SITE_ID` constant جي موجود هجڻ جو جائزو وٺندو آهي، جيڪو WPMU DEV تي هاستنگ ڪرڻ وقت خود بخود تعريف ٿيندو آهي.

## ترتیب ڏيڻ جا تعليمات (Setup Instructions)

### 1. WPMU DEV هاستنگ کي تصديق ڪريو (Verify WPMU DEV Hosting)

جيڪڏهن توهان WPMU DEV تي هاستنگ ڪري رهيا آهيو، ته ضروري constant پر پہلے سے تعريف ٿين وڃي. هي تصديق ڪريو ته:

1. `WPMUDEV_HOSTING_SITE_ID` constant توهان جي ماحول (environment) ۾ موجود آهي
2. توهان جو WPMU DEV تي API رسائي سان فعال ممبرشپ (membership) موجود آهي

### 2. ان انٽيغريشن کي فعال ڪريو (Enable the Integration)

1. پنهنجي WordPress admin ۾، Ultimate Multisite > Settings تي وڃو
2. "Domain Mapping" ٽاب ڏانهن وڃو
3. "Host Integrations" تائين سکرول ڪريو
4. WPMU DEV انٽيغريشن کي فعال ڪريو
5. "Save Changes" تي ڪلڪ ڪريو

## اهو ڪيئن کام ڪري ٿو (How It Works)

### دومين سنڪرائس (Domain Syncing)

جڏهن Ultimate Multisite ۾ هڪ دومين جو نقشہ (map) ڪيو ويندو آهي:

1. ان انٽيغريشن پنهنجي WPMU DEV API جو استعمال ڪري ٿو ته جيئن دومين کي توهان جي هاستنگ اڪاؤنٽ ۾ شامل ڪجي
2. اهو خود بخود دومين جو www version به شامل ڪري ڇڏيندو آهي
3. دومين جي ترتیب ۽ SSL سرٽيفڪيٽ ڏيڻ جو ڪم WPMU DEV سنڀالندو

### SSL سرٽيفڪيٽ جو انتظام (SSL Certificate Management)

ਇਹ ਇੰਟੀਗ੍ਰੇਸ਼ਨ ਇਸ ਤਰ੍ਹਾਂ ਸੈਟ ਕੀਤਾ ਗਿਆ ਹੈ ਕਿ WPMU DEV ਹੋਸਟਿੰਗ ਲਈ SSL ਸਰਟੀਫਿਕੇਟ ਵੈਰੀਫਿਕੇਸ਼ਨ ਦੀਆਂ ਕੋਸ਼ਿਸ਼ਾਂ ਦੀ ਗਿਣਤੀ ਵਧਾ ਦਿੱਤੀ ਗਈ ਹੈ, ਕਿਉਂਕਿ SSL ਸਰਟੀਫਿਕੇਟ ਜਾਰੀ ਕਰਨ ਅਤੇ ਸਥਾਪਿਤ ਕਰਨ ਵਿੱਚ ਕੁਝ ਸਮਾਂ ਲੱਗ ਸਕਦਾ ਹੈ। ਡਿਫਾਲਟ ਤੌਰ 'ਤੇ, ਇਹ SSL ਸਰਟੀਫਿਕੇਟ ਵੈਰੀਫਿਕੇਸ਼ਨ ਲਈ 5 ਕੋਸ਼ਿਸ਼ਾਂ ਦੇ ਮੁਕਾਬਲੇ 10 ਤੱਕ ਅਜ਼ਮਾਇਆ ਜਾਵੇਗਾ।

## ਮਹੱਤਵਪੂਰਨ ਨੋਟਸ

### ਡੋमेन ਹਟ ਕਰਨਾ (Domain Removal)

ਹੁਣ, WPMU DEV API ਵਿੱਚ ਡੋમેਨ ਹਟ ਕਰਨ ਦਾ ਕੋਈ ਤਰੀਕਾ ਨਹੀਂ ਹੈ। ਜਦੋਂ Ultimate Multisite ਵਿੱਚ ਇੱਕ ਡੋमेन ਮੈਪਿੰਗ ਹਟ ਕੀਤੀ ਜਾਂਦੀ ਹੈ, ਤਾਂ ਡੋमेन ਤੁਹਾਡੇ WPMU DEV ਹੋਸਟਿੰਗ ਖਾਤੇ ਵਿੱਚ ਬਾਕੀ ਰਹੇਗਾ। ਜੇ ਲੋੜ ਪਵੇ ਤਾਂ ਤੁਹਾਨੂੰ ਇਸਨੂੰ WPMU DEV ਹੋਸਟਿੰਗ ਡੈਸ਼ਬੋਰਡ ਤੋਂ ਮਨੁੱਖੀ ਤੌਰ 'ਤੇ ਹਟ ਕਰਨਾ ਪਵੇਗਾ।

### API ਪ੍ਰਮਾਣਿਕਤਾ (API Authentication)

ਇੰਟੀਗ੍ਰੇਸ਼ਨ WPMU DEV API key ਦੀ ਵਰਤੋਂ ਕਰਦਾ ਹੈ ਜੋ ਤੁਹਾਡੇ WordPress database ਵਿੱਚ `wpmudev_apikey` ਆਪਸ਼ਨ ਵਜੋਂ ਸਟੋਰ ਕੀਤੀ ਜਾਂਦੀ ਹੈ। ਜਦੋਂ ਤੁਸੀਂ ਆਪਣੀ ਸਾਈਟ ਨੂੰ WPMU DEV ਨਾਲ ਜੋੜਦੇ ਹੋ ਤਾਂ ਇਹ ਆਪਣੇ ਆਪ ਸੈੱਟ ਹੋ ਜਾਂਦਾ ਹੈ।

## ਟ੍ਰਬੂਲਸ਼ੂਟਿੰਗ (Troubleshooting)

### API ਕਨੈਕਸ਼ਨ ਦੇ ਮੁੱਦੇ (API Connection Issues)
- ਚੈੱਕ ਕਰੋ ਕਿ ਤੁਹਾਡੀ ਸਾਈਟ WPMU DEV ਨਾਲ ਸਹੀ ਢੰਗ ਨਾਲ ਜੁੜੀ ਹੋਈ ਹੈ।
- ਚੈੱਕ ਕਰੋ ਕਿ `wpmudev_apikey` ਆਪਸ਼ਨ ਤੁਹਾਡੇ WordPress database ਵਿੱਚ ਸੈੱਟ ਹੈ।
- ਯਕੀਨੀ ਬਣਾਓ ਕਿ ਤੁਹਾਡਾ WPMU DEV ਮੈਂਬਰਸ਼ਿਪ ਸਰਗਰਮ (active) ਹੈ।

### SSL ਸਰਟੀਫਿਕੇਟ ਦੇ ਮੁੱਦੇ (SSL Certificate Issues)
- WPMU DEV ਨੂੰ SSL ਸਰਟੀਫਿਕੇਟ ਜਾਰੀ ਕਰਨ ਵਿੱਚ ਕੁਝ ਸਮਾਂ ਲੱਗ ਸਕਦਾ ਹੈ (ਆਮ ਤੌਰ 'ਤੇ 5-15 ਮਿੰਟ)।
- ਇੰਟੀਗ੍ਰੇਸ਼ਨ SSL ਸਰਟੀਫਿਕੇਟ ਲਈ 10 ਤੱਕ ਚੈੱਕ ਕਰਨ ਲਈ ਸੈੱਟ ਕੀਤਾ ਗਿਆ ਹੈ।
- ਜੇ ਕਈ ਕੋਸ਼ਿਸ਼ਾਂ ਤੋਂ ਬਾਅਦ ਵੀ SSL ਸਰਟੀਫਿਕੇਟ ਜਾਰੀ ਨਹੀਂ ਹੋ ਰਹੇ ਹਨ, ਤਾਂ WPMU DEV ਸਪੋਰਟ ਨਾਲ ਸੰਪਰਕ ਕਰੋ।

### ਡੋमेन ਜੋੜਿਆ ਨਹੀਂ ਗਿਆ (Domain Not Added)
- ਕਿਸੇ ਵੀ ਗਲਤੀ ਦੇ ਸੰਦੇਸ਼ ਲਈ Ultimate Multisite ਲੌਗਸ ਚੈੱਕ ਕਰੋ।
- ਯਕੀਨੀ ਬਣਾਓ ਕਿ ਡੋमेन WPMU DEV ਵਿੱਚ ਪਹਿਲਾਂ ਹੀ ਨਹੀਂ ਜੋੜਿਆ ਹੋਇਆ ਹੈ।
- ਯਕੀਨੀ ਬਣਾਓ ਕਿ ਤੁਹਾਡਾ WPMU DEV ਹੋਸਟਿੰਗ ਪਲਾਨ ਉਨ੍ਹਾਂ ਡੋਮੇਨਾਂ ਦੀ ਗਿਣਤੀ ਦਾ ਸਮਰਥਨ ਕਰਦਾ ਹੈ ਜੋ ਤੁਸੀਂ ਜੋੜ ਰਹੇ ਹੋ।
