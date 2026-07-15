---
title: VAT ପରିବର୍ତ୍ତନ ଲଗ୍
sidebar_position: 99
_i18n_hash: 6a39ef4779b6ed52a08804c75ca25fc9
---
# VAT ପରିବର୍ତ୍ତନ ତାଲିକା

Version 1.0.7 - 2026-02-03 ରେ ମୁକ୍ତିଲାଭ

* ସମାଧାନ: VIES SOAP service ର MS_MAX_CONCURRENT_REQ ତ୍ରୁଟି କାରଣରୁ German (DE) VAT ସଂଖ୍ୟାଗୁଡ଼ିକର ବୈଧତା ଯାଞ୍ଚ ବିଫଳ ହେଉଥିଲା। ଅଧିକ ଭରସାଯୋଗ୍ୟ ବୈଧତା ଯାଞ୍ଚ ପାଇଁ legacy SOAP API ରୁ official EU VIES REST API କୁ ବଦଳାଗଲା।
* ସମାଧାନ: VIES service ସାମୟିକ ଭାବେ ଉପଲବ୍ଧ ନଥିଲେ VAT ସଂଖ୍ୟାଗୁଡ଼ିକୁ ଭୁଲରେ ପ୍ରତ୍ୟାଖ୍ୟାନ କରିବା ପରିବର୍ତ୍ତେ ଏବେ ଗ୍ରହଣ କରାଯାଏ। ପରବର୍ତ୍ତୀ ସମୀକ୍ଷା ପାଇଁ ଏକ ଲଗ୍ ଏଣ୍ଟ୍ରି ସୃଷ୍ଟି କରାଯାଏ।
* ସମାଧାନ: VAT/Tax ID ଫିଲ୍ଡ ଏବେ କେବଳ EU ସଦସ୍ୟଙ୍କ ପାଇଁ ନୁହେଁ, ସମସ୍ତ ଦେଶ ପାଇଁ ଦୃଶ୍ୟମାନ। Non-EU tax IDଗୁଡ଼ିକୁ (ଯଥା Swiss CHE ସଂଖ୍ୟା) VIES ବୈଧତା ଯାଞ୍ଚ ବିନା ଇନଭଏସ୍ ପ୍ରଦର୍ଶନ ପାଇଁ ସଂରକ୍ଷଣ କରାଯାଏ।
* ସମାଧାନ: ଭୁଲ array lookup logic କାରଣରୁ Greece (GR), Monaco (MC), ଏବଂ Isle of Man (IM) ପାଇଁ VAT prefix lookup ଭାଙ୍ଗିଥିଲା।
* ଉନ୍ନତି: Site Exporter addon ସହିତ ବ୍ୟବହାର କଲେ ଘାତକ ତ୍ରୁଟି ସୃଷ୍ଟି କରିପାରୁଥିବା ଅନାବଶ୍ୟକ wp-cli-bundle dev dependency କୁ ହଟାଗଲା।
* ଉନ୍ନତି: ବ୍ୟାପକ unit test suite (୫୩ tests) ଯୋଡ଼ାଗଲା।

Version 1.0.6 - 2026-01-25 ରେ ମୁକ୍ତିଲାଭ

* ସମାଧାନ: ଦେଶୀୟ B2B ଲେନଦେନଗୁଡ଼ିକରେ ଏବେ ସଠିକ୍ ଭାବେ VAT ଲାଗୁ ହେଉଛି। EU VAT ନିୟମ ଅନୁଯାୟୀ, reverse charge କେବଳ cross-border B2B ଲେନଦେନରେ ଲାଗୁ ହୁଏ, ଗ୍ରାହକଙ୍କ ଦେଶ କମ୍ପାନୀର ଦେଶ ସହିତ ମେଳ ଖାଇଲେ ନୁହେଁ।

Version 1.0.5 - 2026-01-22 ରେ ମୁକ୍ତିଲାଭ

* ସମାଧାନ: Addon load ହେଉନଥିଲା କିମ୍ବା ଠିକ୍ ଭାବେ କାମ କରୁନଥିଲା।
* ପରିବର୍ତ୍ତନ: ଅଧିକ ଭରସାଯୋଗ୍ୟ ଏବଂ ସକ୍ରିୟ ଭାବେ ରକ୍ଷାପୋଷଣ ହେଉଥିବା ଡାଟା ପାଇଁ VAT rate data source କୁ euvatrates.com ରୁ ibericode/vat-rates repository କୁ ବଦଳାଗଲା।
* ସମାଧାନ: super_reduced_rates option value ର ଟାଇପୋ ସଠିକ୍ କରାଗଲା।
* ଉନ୍ନତି: ତ୍ରୁଟି ରୋକିବା ପାଇଁ country code handling ରେ null checks ଯୋଡ଼ାଗଲା।
* ପରିବର୍ତ୍ତନ: Traduttore ମାଧ୍ୟମରେ ସ୍ୱୟଂଚାଳିତ ଅପଡେଟ୍ ପକ୍ଷରେ bundled translation files କୁ ହଟାଗଲା।

Version: 1.0.3 - 2025-09-28 ରେ ମୁକ୍ତିଲାଭ

* prefix କୁ ultimate-multisite ଭାବେ ପୁନଃନାମକରଣ; text domain ଅପଡେଟ୍; version bump।

Version 1.0.0-beta.4 - 2021-09-24

* ଯୋଡ଼ାଗଲା: mu-plugins ଆଧାରିତ setups ପାଇଁ filter wp_ultimo_skip_network_active_check;

Version 1.0.0 - 05/08/2021 - ପ୍ରାରମ୍ଭିକ ମୁକ୍ତି
