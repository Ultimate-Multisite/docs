---
title: Closte-ରେ ସୂର୍ଯ୍ୟୋଦୟ ନିର୍ଦ୍ଦିଷ୍ଟ କରିବା
sidebar_position: 16
_i18n_hash: ce55527b126282d167eec4e3a8f824ea
---
# Closte-ରେ Sunrise constant ကို true କରିବା

କିଛି હોଷ୍ଟ ପ୍ରୋବାଇଡର୍ସ ସୁରକ୍ଷା କାରଣରୁ wp-config.php ଫାଇଲ୍‌କୁ ବନ୍ଦ ରଖନ୍ତି। এর মানে ହେଉଛି Ultimate Multisite ଆପଣଙ୍କ ଡୋମେନ୍ ମ୍ୟପିଂ ଏବଂ ଅନ୍ୟାନ୍ୟ ଫିଚର୍ସ କାର୍ଯ୍ୟ କରିବା ପାଇଁ ଆବଶ୍ୟକ ପ୍ରାଣୀ (constants) ଯୋଗ କରିବା ପାଇଁ ସେହି ଫାଇଲ୍‌କୁ ଆତ୍ମେଳିତ ଭାବରେ ଏଡିଟ କରିପାରିବ ନାହିଁ। Closte ଏଥିରୁ ଗୋଟିଏ ଅପରାଧକ।

అయితే, Closte ଦ୍ୱାରା secure ଉପରେ wp-config.php ରେ constant ଯୋଗ କରିବା ପାଇଁ ଏକ ମାଧ୍ୟମ ପ୍ରଦାନ କରାଯାଇଛି। ଆପଣଙ୍କୁ କେବଳ ନିମ୍ନଲିଖିତ ପଦକ୍ଷେପଗୁଡ଼ିକ ଅନୁସରଣ କରିବାକୁ ପଡ଼ିବ:

## Closte dashboard ରେ {#on-the-closte-dashboard}

ପ୍ରଥମେ, [ଆପଣଙ୍କ Closte ଆକାଉଣ୍ଟରେ ଲଗଇନ୍ କରନ୍ତୁ](https://app.closte.com/), Sites ମେନୁ আইটেମ୍‌ ଉପରେ କ୍ଲିକ୍ କରନ୍ତୁ, ତା'ପରେ ଆପଣ ବର୍ତ୍ତମାନ ଯେଉଁ ସାଇଟ୍ ଉପରେ କାମ କରୁଛନ୍ତି ତା'ର Dashboard ଲିଙ୍କ୍ ଉପରେ କ୍ଲିକ୍ କରନ୍ତୁ:

<!-- Screenshot unavailable: Closte dashboard showing Sites menu and Dashboard link -->

ଆପଣଙ୍କ ସ୍କ୍ରିନ୍‌ର ବାମ ପାର୍ଶ୍ୱରେ ନୂଆ ମେନୁ ଆଇଟମ୍ଗୁଡ଼ିକ ଦେଖିବେ। ସେହି ମେନୁ ବ୍ୟବହାର କରି **Settings** ପେଜ୍‌କୁ ଯାନ୍ତୁ:

<!-- Screenshot unavailable: Closte left sidebar menu showing Settings option -->

ତା'ପରେ, **Settings** ରେ, WP-Config ଟ୍ୟାବ୍ଟି ଖୋଜନ୍ତୁ, ଏବଂ ସେହି ଟ୍ୟାବ୍‌ର "Additional wp-config.php content" କ୍ଷେତ୍ରଟିକୁ ଦେଖନ୍ତୁ:

<!-- Screenshot unavailable: Closte Settings page with WP-Config tab showing Additional wp-config.php content field -->

Ultimate Multisite ଇନଷ୍ଟଲ୍ କରିବାର ପ୍ରକ୍ରିୟା ସନ୍ଦର୍ଭରେ, ଆପଣ ଏହି କ୍ଷେତ୍ରରେ sunrise constantଟି ଯୋଗ କରିବାକୁ ପଡ଼ିବ। ବହୁତ ସରଳ ଭାବରେ, ଏକ ନୂଆ ଲାଇନ୍ ଯୋଗ କରନ୍ତୁ ଏବଂ ନିମ୍ନଲିଖିତ ଲାଇନ୍ଟି ପେଷ୍ଟ କରନ୍ତୁ। ଏହାପରେ, **Save All** ବଟନ୍‌କୁ କ୍ଲିକ୍ କରନ୍ତୁ।

define('SUNRISE', true);

ଏତିକି, ଆପଣ ସମସ୍ତ ପ୍ରସ୍ତୁତ। Ultimate Multisite ଇନଷ୍ଟଲ୍ ବିଜାର୍ଡ୍‌କୁ ଫେରିଯାଆନ୍ତୁ ଏବଂ ପ୍ରକ୍ରିୟା ଜାରି ରଖିବା ପାଇଁ ପେଜ୍‌ଟି রিফ্রେష్ କରନ୍ତୁ।
