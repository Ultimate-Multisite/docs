---
title: କ୍ଲୋଷ୍ଟ୍ ଇଣ୍ଟିଗ୍ରେସନ୍
sidebar_position: 7
_i18n_hash: 8f07c74ab2f7df614f502e0cc089c3e0
---
# Closte Integration

## Overview
Closte ହେଉଛି Google Cloud infrastructure ଉପରେ ନିର୍ମିତ ଏକ ମ୍ୟାନେଜଡ୍ WordPress hosting platform। ଏହି integration କାରଣ Ultimate Multisite ଏବଂ Closte ମଧ୍ୟରେ automatic domain syncing ଏବଂ SSL certificate management ସୁବିଧା ପ୍ରଦାନ କରିଥାଏ।

## Features
- Automatic domain syncing (automatic ଡୋमेन ସିଙ୍କିଂ)
- SSL certificate management (SSL ସର୍ଟିଫିକେଟ୍ ପରିଚାଳନା)
- Wildcard domain support (Wildcard ଡୋमेन ସମର୍ଥନ)
- Closte ଉପରେ ଚଲାଇଲେ କୌଣସି configuration ଆବଶ୍ୟକ ନୁହେଁ

## Requirements
ଯଦି ଆପଣ Closte ବ୍ୟବହାର କରୁଛନ୍ତି, ତେବେ ଆପଣଙ୍କ `wp-config.php` ଫାଇల్‌ରେ ନିମ୍ନଲିଖିତ constantଟି నిర్వచନ କରିବାକୁ ପଡ଼ିବ:

```php
define('CLOSTE_CLIENT_API_KEY', 'your_api_key');
```

Closte ଉପରେ hosting କରୁଥିଲେ, ଏହି constantଟି ସାଧାରଣତଃ ପ୍ରଦର୍ଶିତ ହୋଇଥାଏ।

## Setup Instructions

### 1. ଆପଣଙ୍କ Closte API Key ଯାଞ୍ଚ କରନ୍ତୁ

ଯଦି ଆପଣ Closte ଉପରେ hosting କରୁଛନ୍ତି, ତେବେ `CLOSTE_CLIENT_API_KEY` constantଟି ଆପଣଙ୍କ `wp-config.php` ଫାଇల్‌ରେ ସର୍ବଜଣା ହୋଇଥାଏ। ଆପଣ ଏହା ଯାଞ୍ଚ କରିବା ପାଇଁ ଆପଣଙ୍କ `wp-config.php` ଫାଇଲଟିକୁ ଦେଖିପାରିବେ।

### 2. Integration କୁ ଅନ୍ୟ କରନ୍ତୁ (Enable)

1. ଆପଣଙ୍କ WordPress admin ମେନୁରେ, Ultimate Multisite > Settings ରେ ଯାଆନ୍ତୁ
2. "Domain Mapping" tab-କୁ ନିର୍ଦ୍ଦେଶ କରନ୍ତୁ
3. "Host Integrations" ଉପରେ ସ୍କ୍ରୋଲ୍ କରି "Closte integration" କୁ ଅନ୍ୟ କରନ୍ତୁ (Enable)
4. "Save Changes" ଉପରେ କ୍ଲିକ୍ କରନ୍ତୁ

## How It Works

Ultimate Multisite ରେ ଏକ domain ମ୍ୟାପ୍ କରାଯାଇଥିଲେ:

1. Integrationଟି ଆପଣଙ୍କ application-କୁ domain ଯୋଗ କରିବା ପାଇଁ Closte ର API କୁ ଏକ request ପଠାଇଥାଏ
2. Closte automatic SSL certificate provision କରିଦିଏ
3. ଯେତେବେଳେ ଏକ domain mapping ହଟାଯାଏ, integrationଟି Closte ଠାରୁ ସେହି domainକୁ ਹଟାଯିବା

Ultimate Multisite ର DNS check interval setting ସହିତ ମଧ୍ୟ integration କାର୍ଯ୍ୟ କରେ, ଯାହା ଆପଣ system କେବେ DNS propagation ଏବଂ SSL certificate issuance ପାଇଁ ଯାଞ୍ଚ କରିବେ ତାହା configure କରିବାକୁ ଅନୁମତି ଦିଏ।

## Domain Record Creation

ଏହି ଇଣ୍ଟିଗ୍ରେସନ୍ ସୁନିଶ୍ଚିତ କରେ ଯେ ଯେତେବେଳେ ଏକ ୱେବସାଇଟ୍ ସୃଷ୍ଟି କରାଯାଏ ବା ଦୁଇଟିକୁ ପ୍ରତିଫଳିତ (duplicate) କରାଯାଏ, ସେତେବେଳେ ଏକ ଡୋमेन ରେକର୍ଡ ଆଧାରରେ ଆତ୍ମେ ଯୋଗୁଁ ତିଆରି ହୋଇଯାଏ। Closte ଇଣ୍ଟିଗ୍ରେସନ୍ ପାଇଁ ଏହା ବିଶେଷ ଭାବରେ ଗୁରୁତ୍ୱପୂର୍ଣ୍ଣ, କାରଣ ଡୋमेन ରେକର୍ଡ ସୃଷ୍ଟି କରିବା ଦ୍ୱାରା Closte API କୁ ଡୋमेन ଏବଂ SSL ସର୍ଟିକେଟ୍ ପ୍ରସ୍ତୁତ କରିବାକୁ ଆସିଥାଏ।

## ସମସ୍ୟା ସମାଧାନ (Troubleshooting)

### API କନେକ୍ସନ୍ ସମସ୍ୟା
- ଯାଞ୍ଚ କରନ୍ତୁ ଯେ ଆପଣଙ୍କ Closte API key ଠିକ୍ ଅଛି କି ନାହିଁ
- ନିଶ୍ଚିତ କରନ୍ତୁ ଯେ ଆପଣଙ୍କ Closte ଆକାଉଣ୍ଟରେ ଆବଶ୍ୟକ ଅନୁମତି (permissions) ରହିଛି

### SSL ସର୍ଟିକେଟ୍ ସମସ୍ୟା
- Closte ଡୋमेन ପାଇଁ SSL ସର୍ଟିକେଟ୍ ଜାରି କରିବାକୁ କିଛି ସମୟ ନେଇପାରେ (ଆବଶ୍ୟକତଃ ୫-୧୦ ମିନିଟ୍)
- ଯାଞ୍ଚ କରନ୍ତୁ ଯେ ଆପଣଙ୍କ ଡୋमेनଗୁଡ଼ିକ ଆପଣଙ୍କ Closte ସର୍ଭରର IP ଅଡ୍ରେସକୁ ଠିକ୍ ଭାବରେ ପଏଣ୍ଟ କରୁଛନ୍ତି କି ନାହିଁ
- ଆପଣଙ୍କ ଡୋमेन ପାଇଁ DNS ରେକର୍ଡଗୁଡ଼ିକ ଯାଞ୍ଚ କରନ୍ତୁ ଯେ ସେଗୁଡ଼ିକ ଠିକ୍ ଭାବରେ ସେଟିଂ ହୋଇଛି

### ଡୋमेन ଯୋଗାଯୋଗ ନଥିବା
- Ultimate Multisite ଲଗ୍‌ଗ୍ସ (logs) ମଧ୍ୟରେ କୌଣସି ତ୍ରୁଟି ବାର୍ତ୍ତା (error messages) ଅଛି କି ସେ ବିଶ୍ଳେଷଣ କରନ୍ତୁ
- ଯାଞ୍ଚ କରନ୍ତୁ ଯେ ଡୋमेनଟି Closte ରେ ପୂର୍ବରୁ ଯୋଗାଯୋଗ ହୋଇନାହିଁ
- ନିଶ୍ଚିତ କରନ୍ତୁ ଯେ ଆପଣଙ୍କ ଡୋमेनର DNS ରେକର୍ଡଗୁଡ଼ିକଠାରେ ସଠିକ୍ ସେଟିଂ ଅଛି

### DNS ଚେକ୍ ବର୍ତ୍ତମାନ (DNS Check Interval)
- ଯଦି SSL ସର୍ଟିକେଟ୍ ଜାରି କରିବାକୁ ଅଧିକ ସମୟ ଲାଗୁଛି, ତେବେ ଆପଣ Domain Mapping ସେଟିଙ୍ଗରେ DNS ଚେକ୍ ବର୍ତ୍ତମାନର ଅନ୍ତରାଳ (interval) ପରିବର୍ତ୍ତନ କରିପାରିବେ
- ଡିଫାଉଟ୍ ଅନ୍ତରାଳ ହେଉଛି ୩୦୦ ସେକେଣ୍ଡ (୫ ମିନିଟ୍), କିନ୍ତୁ ପରୀକ୍ଷଣ ସମୟରେ ଦ୍ରୁତ ଚେକ୍ କରିବା ପାଇଁ ଏହାକୁ ୧୦ ସେକେଣ୍ଡ ପର୍ଯ୍ୟନ୍ତ ରଖିପାରିବେ
