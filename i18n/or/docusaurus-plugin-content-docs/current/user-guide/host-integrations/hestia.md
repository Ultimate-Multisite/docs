---
title: ହେଷ୍ଟିଆ କଣ୍ଟ୍ରୋଲ୍ ପ୍ୟାନେଲ୍ ଇଣ୍ଟିଗ୍ରେସନ୍
sidebar_position: 7
_i18n_hash: 252519613f4d84d44875a5b2090e4bd6
---
# Hestia Control Panel ସହିତ ଏକୀକରଣ (Integration)

ଏହି ଗାଇଡ୍‌ରେ ଆପଣଙ୍କ ନେଟୱାର୍କରେ ମ୍ୟାପ୍ କରାଯାଇଥିବା ଡୋମେନ୍‌ଗୁଡ଼ିକୁ ହେସ୍ଟିଆରେ ଅଟୋମେଟିକ୍ ଭାବରେ 'Web Domain Aliases' ଭାବରେ ଯୋଡ଼ିବା (ଏବଂ ବାହାର କରିବା) ପାଇଁ Ultimate Multisite Hestia ଏକୀକରଣ କିପରି ସେଟିଂ କରିବେ, ତାହା ବୁଝାଉଛି।

- Hestia CLI ରେ ମୂଳ ସୂଚନା: `/ v-add-web-domain-alias / v-delete-web-domain-alias`
- ଅଫିସିଆଲ REST API ଦସ୍ତୁତି: https://hestiacp.com/docs/server-administration/rest-api.html

## ଏହା କ'ଣ କରେ (What It Does)
- ଯେତେବେଳେ Ultimate Multisite ରେ ଏକ ଡୋମେନ୍ ମ୍ୟାପ୍ କରାଯାଏ, ସେତେବେଳେ ଏହି ଏକୀକରଣଟି Hestia API କୁ ନିମ୍ନଲିଖିତ କାର୍ଯ୍ୟ କରିବା ପାଇଁ କଲ୍ କରେ:
  - `v-add-web-domain-alias <USER> <DOMAIN> <ALIAS> [RESTART]`
- ଯେତେବେଳେ ଏକ ଡୋମେନ୍ ମ୍ୟାପିଂ ବାହାର କରାଯାଏ, ସେତେବେଳେ ଏହା ଏହି କାର୍ଯ୍ୟ କରିଥାଏ:
  - `v-delete-web-domain-alias <USER> <DOMAIN> <ALIAS> [RESTART]`
- ଡୋମେନ୍ ମ୍ୟାପିଂ ସେଟିଙ୍ଗରେ ଆପଣଙ୍କର “Auto-create www subdomain” ସେଟିଂ ଅନୁଯାୟୀ, `www.` ଅଲାଇସ୍ ଯୋଡ଼ିବା କିମ୍ବା ବାହାର କରିବାକୁ ଅପ୍ସନା ଦିଏ।

## ଆବଶ୍ୟକତା (Prerequisites)
- ଏକ ଅସ୍ଥିତ Hestia Web Domain ଯାହା ଆପଣଙ୍କର WordPress ଇନଷ୍ଟଲରେ ପୂର୍ବରୁ ପଏଣ୍ଟ କରୁଛି। ଏହି ଏକୀକରଣଟି ଏହି ମୂଳ ଡୋମେନ୍‌କୁ ଅଲାଇସ୍ ସହିତ ଜଡ଼ିତ କରିବ।
- Hestia API ପ୍ରବେଶ ସମ୍ପୂର୍ଣ୍ଣ ହୋଇଥିବା ଆବଶ୍ୟକ। ଆପଣ ପାସୱାର୍ଡ ବା ଏକ API ହ୍ୟାଶ/ଟୋକେନ୍ ମାଧ୍ୟମରେ ଅଥେଣ୍ଟିଫିକେଟ (authenticate) କରିପାରିବେ।

API ପ୍ରବେଶ ସମ୍ପୂର୍ଣ୍ଣ କରିବା ଏବଂ ଅଥେଣ୍ଟିଫିକେସନ ବିଷୟରେ Hestia ର REST API ଦସ୍ତୁତିକୁ ଦେଖନ୍ତୁ:
https://hestiacp.com/docs/server-administration/rest-api.html

## ସେଟିଂ (Configuration) (Wizard → Integrations → Hestia)
ପ୍ରବେଶ କରନ୍ତୁ ନିମ୍ନଲିଖିତ ମୂଲ୍ୟଗୁଡ଼ିକ:

- `WU_HESTIA_API_URL` (ଅତ୍ୟାବଶ୍ୟକ)
  - ଏହା ଆପିର ମୂଳ ଇଣ୍ଟେରେଫେସ୍, ଯାହା ସାଧାରଣତଃ `https://your-hestia-host:8083/api/` ହୋଇଥାଏ।
- `WU_HESTIA_API_USER` (ଅତ୍ୟାବଶ୍ୟକ)
  - API କମାଣ୍ଡ ପାଇଁ ବ୍ୟବହୃତ Hestia ୟୁଜର୍ (ଅନେକ ସମୟ `admin`)।
- `WU_HESTIA_API_PASSWORD` କିମ୍ବା `WU_HESTIA_API_HASH` (ଗୋଟିଏ ଅତିଶୀର୍ଷ)
  - ଯାହା ମଧ୍ୟରେ ଗୋଟିଏ ଇନ୍ଧାର୍ଥ ପ୍ରମାଣିକତା ପଦ୍ଧତି ବାଛନ୍ତୁ: ପାସୱାର୍ଡ କିମ୍ବା API ହ୍ୟାସ/ଟୋକେନ୍।
- `WU_HESTIA_ACCOUNT` (ଅତ୍ୟାବଶ୍ୟକ)
  - Hestia ରେ Web Domain ର ଆକର୍ଷିକା (ମଲିକ)। ଏହା CLI ପାଇଁ ପ୍ରଥମ ଆରଗୁମେଣ୍ଟ।
- `WU_HESTIA_WEB_DOMAIN` (ଅତ୍ୟାବଶ୍ୟକ)
  - ସେହି ଅସ୍ଥିତ Hestia Web Domain ଯାହା ଉପରେ ଆପଣଙ୍କର WordPress ଚଲାଇଛି (ଏଠାରେ ଅଲିଆସ ବାନ୍ଧି ଦିଆଯିବ)।
- `WU_HESTIA_RESTART` (ବିକଳ୍ପୀୟ; ଡିଫାଉଟ୍ `yes`)
  - ଅଲିଆସ ପରିବର୍ତ୍ତନ ପରେ ସେଭିସ୍ ବାରମ୍ବାର ଆରମ୍ଭ କରିବା/ରିଲୋଡ କରିବା କି ନାହିଁ।

ଆପଣ ଏହି କన్‌ଷ୍ଟାଣ୍ଟଗୁଡ଼ିକୁ `wp-config.php` ରେ ପ୍ରవేశపెట్టିପାରିବେ, କିମ୍ବା ସେଗୁଡ଼ିକ ମାନୁଷର୍ବର ଭାବରେ ନିଜେ ବ୍ୟାଖ୍ୟା କରିପାରିବେ।

## ସେଟଅପ ଯାଞ୍ଚ କରିବା
- wizard ର “Testing” ସ୍ତରରେ, ప్ଲଗିନ୍ API ମାଧ୍ୟମରେ `v-list-web-domains <WU_HESTIA_ACCOUNT> json` କୁ କଲ୍ କରେ। ଏକ ସଫଳ ପ୍ରତିକ୍ରିୟା ଯୋଗାଯୋଗ ଏବଂ ଅଥେନ୍ଟିକ୍ସକୁ ଦର୍ଶାଇଦିଏ।
- ଏକ ଡୋମେନ୍ ମ୍ୟାପ୍ କରିବା ପରେ, Hestia ରେ ଯାଞ୍ଚ କରନ୍ତୁ: Web > ମୂଳ ଡୋମେନ୍ > Aliases। ଆପଣ ନୂଆ ଅଲିଆସ ଯୋଗାଯାଇଥିବାର ଦେଖିବେ।

## ଟିପ୍ସ ଓ ନୋଟ୍ସ
- ନିଶ୍ଚିତ କରନ୍ତୁ ଯେ `WU_HESTIA_WEB_DOMAIN` ଆପଣଙ୍କର ଅଛି ଏବଂ ଏହା `WU_HESTIA_ACCOUNT` ଦ୍ୱାରା ମଲିକ।
- ଯଦି SSL ଆବଶ୍ୟକ, ତେବେ Hestia ରେ ସର୍ଟିଫିକେଟ୍ ବ୍ୟାହାର କରନ୍ତୁ। ଏହି ଅନ୍ତରାଳରେ ଏହା କେବଳ ଅଲିଆସଗୁଡ଼ିକୁ ମାନି ରଖେ।
- ଆପଣଙ୍କ ଡୋମେନ୍ ମ୍ୟାପିଂ “www subdomain” ସେଟିଙ୍ଗ୍ ଅନୁଯାୟୀ, ପ୍ଲଗିନ୍ `www.<domain>` ଯୋଗ କରିବା କିମ୍ବା ବାହାର କରିପାରେ।

## ଉଦାହରଣ API କଲ୍ (cURL)
ତଳେ ଏକ ସୂଚନାତ୍ମକ ଉଦାହରଣ ଦିଆଯାଇଛି (ଆପଣଙ୍କ ପରିବେଶ ଅନୁଯାୟୀ ଠିକ୍ କରିବାକୁ ଭୁଲନ୍ତୁ)। ସଠିକ୍ ପାରାମିଟର୍ସ ପାଇଁ ଆଇନଗତ ବିବਰତ୍ତାକୁ ଦେଖନ୍ତୁ।

```
POST https://your-hestia-host:8083/api/
Content-Type: application/x-www-form-urlencoded

cmd=v-add-web-domain-alias
&user=admin
&password=YOUR_API_PASSWORD  (or &hash=YOUR_API_HASH)
&arg1=admin                  (WU_HESTIA_ACCOUNT)
&arg2=network.example.com    (WU_HESTIA_WEB_DOMAIN)
&arg3=customer-domain.com    (alias to add)
&arg4=yes                    (WU_HESTIA_RESTART)
&returncode=yes
```

ଡିଲ୍ଟ (delete) କରିବା ପାଇଁ, `cmd=v-delete-web-domain-alias` ଏବଂ ସେହି ସମାନ ଆରଗୁମେଣ୍ଟ୍ ବ୍ୟବହାର କରନ୍ତୁ।

## ସମସ୍ୟା ଠିକ୍ କରିବା (Troubleshooting)
- API ର HTTP error: ଯାଞ୍ଚ କରନ୍ତୁ ଯେ `WU_HESTIA_API_URL` ପରି `/api` ଅଛି ଏବଂ ତାହା ପହଞ୍ଚିପାରୁଛି।
- ଅଧିକାର ପ୍ରମାଣ (Auth) ସମସ୍ୟା: ନିଶ୍ଚିତ କରନ୍ତୁ ଯେ `WU_HESTIA_API_USER` ଏବଂ ବା `WU_HESTIA_API_PASSWORD` କିମ୍ବା `WU_HESTIA_API_HASH` ମଧ୍ୟରୁ ଗୋଟିଏ ସଠିକ୍ ଅଛି।
- ଲଗ୍‌ରେ “Missing account/base domain”: ନିଶ୍ଚିତ କରନ୍ତୁ ଯେ Hestia ରେ `WU_HESTIA_ACCOUNT` ଏବଂ `WU_HESTIA_WEB_DOMAIN` ସେଟ ହୋଇ ଅଛି ଏବଂ ସଠିକ୍ ଅଛି।

## ସୂଚନା (References)
- Hestia REST API: https://hestiacp.com/docs/server-administration/rest-api.html
- Hestia CLI Reference (Aliases): https://hestiacp.com/docs/reference/cli.html#v-add-web-domain-alias
