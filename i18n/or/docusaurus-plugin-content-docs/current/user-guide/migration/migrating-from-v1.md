---
title: V1 ଠାରୁ ମିଗ୍ରେଟ କରିବା
sidebar_position: 17
_i18n_hash: 1deefaf09206b741c89be6666fe2143c
---
# V1 ଠାରୁ ମିଗ୍ରେଟ କରିବା

## Ultimate Multisite ନିଜର ମୂଳ 1.x ର ରିଲିଜ୍ସରୁ 2.x ରିଲିଜ୍ସ ସକୁ ବଦଳାଇଛି।

Ultimate Multisite version 2.0 ଏବଂ ଉପରେ ଆମେଜ୍ଟ ହୋଇଥିବା କୋଡ୍‌ବେସ୍ (codebase) ର ଏକ ସମ୍ପୂର୍ଣ୍ଣ ପୁନଃଲେଖା, ଯାହାର ଅର୍ଥ ହେଉଛି ପୁରୁଣା version 1.x ଏବଂ ନୂଆ version 2.x ମଧ୍ୟରେ ବହୁତ କିଛି ସାଧାରଣ ଭାଗ ସାହାଯ୍ୟ କରିପାରିବନି। ଏଥିପାଇଁ, 1.x ରୁ 2.x କୁ ଅପଗ୍ରେଡ୍ (upgrade) କରୁଥିବା ସମୟରେ, ଆପଣଙ୍କର data ନୂଆ version ବୁଝିପାରିବାର ପ୍ରକାରରେ ମିଗ୍ରେଟ କରିବାକୁ ପଡ଼ିବ।

ଶୁଭକାମନା ଭାବରେ, Ultimate Multisite 2.0+ ର କୋର୍ (core) ଭିତରେ ଏକ **migrator** ଆସିଛି ଯାହା ପୁରୁଣା versionର data ଖୋଜିବା ଏବଂ ଏହାକୁ ନୂଆ formatରେ ପରିବର୍ତ୍ତନ କରିପାରେ। ଏହି ମିଗ୍ରେସନ୍ 2.0+ ର **Setup Wizard** ସମୟରେ ହୁଏ।

ଏହି ଲେକ୍ସନ୍‌ରେ ଆମେ ଜାଣିବା ଯେ migrator କିପରି କାମ କରେ, ବିଫଳତା (failure) ପରିସ୍ଥିତିରେ କ'ଣ କରିବ, ଏବଂ ଏହି ପ୍ରକ୍ରିୟାରେ ସୃଷ୍ଟି ହୋଇପାରୁଥିବା ସମସ୍ୟାଗୁଡ଼ିକର ତ୍ରୁଟିଶୁଟିଂ (troubleshoot) କିପରି କରିବ।

_**ଗୁରୁତ୍ୱପୂର୍ଣ୍ଣ: version 1.x ରୁ version 2.0 କୁ ଅପଗ୍ରେଡ୍ କରିବା ଆରମ୍ଭ କରିବା ପୂର୍ବରୁ ଦୟାକରି ଆପଣଙ୍କ ସାଇଟ୍ database ର ଏକ backup ନେଇଛନ୍ତି କି, ଯାହାକୁ ନିଶ୍ଚିତ କରିନେବେ।**_

## ପ୍ରଥମ ପଦକ୍ଷେପଗୁଡ଼ିକ

ପ୍ରଥମ ପଦକ୍ଷେପ ହେଉଛି plugin .zip file ଟିକୁ download କରିବା ଏବଂ ଆପଣଙ୍କ network admin dashboard ରେ version 2.0 install କରିବା।

ଯେତେବେଳେ ଆପଣ [install and activate version 2.0](../getting-started/installing-ultimate-multisite.md) କରନ୍ତି, ସିଷ୍ଟମ୍ ଆପଣଙ୍କ Multisite ଟି ପୁରୁଣା versionରେ ଚଲ୍ ବୋଲି ଅତୀତରେ ଚିହ୍ନଟ କରିବ ଏବଂ plugin page ର ଉପରେ ଏହି ମେସେଜଟି ଦେଖିପାରିବେ।

_**ମନେରଖନ୍ତୁ:** ଯଦି ଆପଣଙ୍କ Multisite ରେ Ultimate Multisite 1.x install ଅଛି, ତେବେ ଆପଣ ନୂଆ download କରିଥିବା version ଟିକୁ plugin ସହିତ ବଦଳାଇବାର ବିକଳ୍ପ ପାଇବେ। ଦୟାକରି, **Replace current with uploaded** ଉପରେ କ୍ଲିକ୍ କରିବାକୁ ଚେଷ୍ଟା କରନ୍ତୁ।_

<!-- Screenshot unavailable: Plugin page showing option to replace v1 with uploaded v2 version -->

ଆଗା ପୃଷ୍ଠାରେ ଆପଣ ଜାଣିପାରିବ କେଉଁ ପୁରୁଣା add-ons (legacy add-ons) install ଅଛି ଏବଂ ସେମାନଙ୍କ ସହିତ version 1.x ର ସମ୍ପର୍କ କ'ଣ। ଏଥିରେ ନିର୍ଦ୍ଦେଶ ଦିଆଯାଇଥିବ ଯେ ଆପଣ ବ୍ୟବହାର କରୁଥିବା version 2.0 ସହିତ ଅନୁଯାୟୀ କ'ଣ ସମ୍ପୂର୍ଣ୍ଣ ଭାବରେ ଅନୁଯାୟୀ, ନା ମIGRATION ପରେ ଆପଣଙ୍କୁ add-on ର upgraded version install କରିବାକୁ ପଡ଼ିବ।

<!-- Screenshot unavailable: Message on the top of the plugins page about updating to v2.0, with list of add-ons that need updating -->

ଯେତେବେଳେ ଆପଣ ଆଗକୁ ବଢ଼ିବାକୁ ପ୍ରସ୍ତୁତ ହୋଇଯିବେ, ଆପଣ **Visit the Installer to finish the upgrade** ଲେଖାଥିବା ବଟନ୍‌ଟିକୁ କ୍ଲିକ୍ କରିପାରିବେ।

<!-- Screenshot unavailable: Button saying Visit the Installer to finish the upgrade -->

ତା'ପରେ ଏହା ଆପଣଙ୍କୁ installation wizard page-এ ନେଇଯିବ ଯେଉଁଠି କିଛି ସ୍ୱାଗତ ବାର୍ତ୍ତା ଦେଖାଯାଇଥିବ। ଆପଣ କେବଳ **Get Started** ଉପରେ କ୍ଲିକ୍ କରିବାକୁ ପଡ଼ିବ ଆଗକୁ ଅଗ୍ରଗତି କରିବା ପାଇଁ।

<!-- Screenshot unavailable: Setup Wizard welcoming page with Get Started button -->

**Get Started** ଉପରେ କ୍ଲିକ୍ କରିବା ପରେ, ଏହା ଆପଣଙ୍କୁ Pre-install Checks\_କୁ ରିଡିରେକ୍ଟ କରିବ। ଏଥିରେ ଆପଣଙ୍କର System Information ଏବଂ WordPress installation ଦେଖାଯିବ ଏବଂ ଜଣାଇ ଦିଆଯିବ ଯେ ଏହା **Ultimate Multisite** ର ଆବଶ୍ୟକତା ପୂରଣ କରୁଛି କି ନାହିଁ।

<!-- Screenshot unavailable: Pre-install Checks page showing system requirements confirmation -->

ପରବର୍ତ୍ତୀ ପଦକ୍ଷେପ ହେଉଛି ଆପଣଙ୍କ Ultimate Multisite license key ଲେଖିବା ଏବଂ plugin ကို activate କରିବା। ଏହା ସୁନିଶ୍ଚିତ କରିବ ଯେ add-ons ବା ଅନ୍ୟସବୁ features ମଧ୍ୟ ଆପଣଙ୍କ site ରେ ಲଭିତ ରହିବ।

<!-- Screenshot unavailable: License activation page with license key input and Agree and Activate button -->

ଆପଣ କీଟି ଦେଇଥିଲେ, **Agree & Activate** ଉପରେ କ୍ଲିକ୍ କରନ୍ତୁ।

license activation ପରେ, ଆପଣ ନିମ୍ନ ପୃଷ୍ଠାରେ **Install** ଉପରେ କ୍ଲିକ୍ କରି ମୂଳ installation ଆରମ୍ଭ କରିପାରିବେ। ଏହା version 2.0 କାର୍ଯ୍ୟ କରିବା ପାଇଁ ଆବଶ୍ୟକ file ଏବଂ database များကို ଆଧାରିତ ଭାବରେ ସୃଷ୍ଟି କରିଦେବ।

## ଏବେ, ମାଇଗ୍ରେସନ୍ (Migration)

ମାଇଗ୍ରେଟରରେ ଏକ ସୁରକ୍ଷା ବୈଶିଷ୍ଟ୍ୟ ରହିଛି ଯେ, ଏହା ଆପଣଙ୍କର ସମସ୍ତ ଅଲ୍ଟିମେଟ ମల్టీସାଇଟ୍‌କୁ ଯାଞ୍ଚ କରିବ ଯେ ସମସ୍ତ ଡାଟା ବିନା କୌଣସି ସମସ୍ୟାରେ ମାଇଗ୍ରେସନ୍ ହୋଇପାରିବ। ପ୍ରକ୍ରିୟା ଆରମ୍ଭ କରିବା ପାଇଁ **Run Check** ବଟନ୍‌ଟି ଉପରେ କ୍ଲିକ୍ କରନ୍ତୁ।

ଏଚେକ୍ ଚଲାଇବା ପରେ, ଆପଣ ଦୁଇଟି ବିଷୟରେ ଜାଣିବେ: ଫଳାଫଳ ହୋଇପାରିବ **ଗ୍ରହଣ କରି** (with an error) ବା **ଗ୍ରହଣ ନକରି** (without an error)।

### ଅର୍ଥ ସହିତ ଭୁଲ୍ (With Error)

ଯଦି ଆପଣଙ୍କ ପାଖରେ କୌଣସି ଭୁଲ୍ ମେସେଜ୍ ଆସେ, ତେବେ ଆପଣ ଆମ ସପୋର୍ଟ ଟିମ୍‌କୁ ଜଣାଇବାକୁ ପଡ଼ିବ ଯେ ସେମାନେ ଭୁଲ୍ଟି ଠିକ୍ କରିବାରେ ଆପଣଙ୍କୁ ସାହାଯ୍ୟ କରିପାରିବେ। ଟିкета (ticket) ତିଆରି କରୁଥିବା ବେଳେ ଦୟାକରି **ଭୁଲ୍ ଲଗ୍ (error log)** ପ୍ରଦାନ କରିବାକୁ ଭୁଲନ୍ତୁ ନାହିଁ। ଆପଣ ଲଗ୍ ଡାଉନଲୋଡ୍ କରିପାରିବେ କିମ୍ବା ଆମ ସପୋର୍ଟ ଟିମ୍‌କୁ ଯୋଗାଯୋଗ କରିବା ପାଇଁ ଦିଆଯାଇଥିବା ଲିଙ୍କ୍‌ରେ କ୍ଲିକ୍ କରିପାରିବେ। ଏହା ଆପଣଙ୍କ ପୃଷ୍ଠାର ଡାହାଣ ପାର୍ଶ୍ୱରେ ଏକ ଉପଯୁକ୍ତ ବିଜ୍ଞାନ (help widget) ଖୋଲିବ, ଯେଉଁଥିରେ ଭୂଲ୍ ଲଗ୍‌ଗୁଡ଼ିକ ପ୍ରଦର୍ଶିତ ହେବ।

_**ଏହି ସମୟରେ, ବ୍ୟବସ୍ଥାଟି ଏକ ଭୁଲ୍ ପାଇଛି, ତେଣୁ ଆପଣ 2.0 সংস্করণে ମାଇଗ୍ରେସନ୍ କରିପାରିବେ ନାହିଁ। ଏହା ପରେ, ଭୁଲ୍ ସଂଶୋଧନ ହେବା ପର୍ଯ୍ୟନ୍ତ ଆପଣଙ୍କ ନେଟୱର୍କ ଚଲାଇବା ପାଇଁ 1.x সংস্করণে ଫେରିପାରିବେ।**_

### ଅର୍ଥ ବିନା ଭୁଲ୍ (Without Error)

ଯଦି ବ୍ୟବସ୍ଥାଟି କୌଣସି ଭୁଲ୍ ମିଳେ ନାହିଁ, ତେବେ ଆପଣ ଏକ ସଫଳତା ମେସେଜ୍ ଦେଖିବେ ଏବଂ ମୋଟରରେ (bottom) ଏକ **Migrate** ବଟନ୍ ଦେଖିବେ ଯାହା ଆପଣଙ୍କୁ ମାଇଗ୍ରେସନ୍ କରିବା ପାଇଁ ଅଗ୍ରଗତି କରିବ। ଏହି ପୃଷ୍ଠାରେ, ଆମେ ଆପଣଙ୍କୁ ଆଗକୁ ବଢ଼ିବା ପୂର୍ବରୁ ଆପଣଙ୍କ ଡାଟାବେସ୍‌ର ଏକ ବ୍ୟାକଅପ୍ (backup) ନେବାକୁ ସ୍ମରଣ କରିବାକୁ କହିବା, ଯାହା ଆମେ ଅତ୍ୟନ୍ତ ପରାମର୍ଶ ଦେଉଛୁ। ଆପଣଙ୍କ ପାଖରେ ଯଦି ବ୍ୟାକଅପ୍ ଥାଏ, ତେବେ **Migrate** ଉପରେ କ୍ଲିକ୍ କରନ୍ତୁ।

ଏତିକିରେ ସାରା!

ଆପଣ ନିଜର ନେଟୱାର୍କରେ ଆପଣଙ୍କ ଲୋଗୋ ଏବଂ ଅନ୍ୟାନ୍ୟ କିଛି ବିଷୟ ଅପଡେଟ୍ କରିବା ପାଇଁ Wizard setup ଚଳାଇପାରନ୍ତି, କିମ୍ବା ଆପଣଙ୍କ Ultimate Multisite version 2.0 ମେନୁ ଏବଂ ଏହାର ନୂଆ ଇଣ୍ଟରଫେସ୍‌ରେ ନିର୍ଭର କରି ନିର୍ଭର କରିପାରିବେ। ଯାହାକୁ ଆପଣ ଭଲ ମଜା କରିପାରିବେ।
