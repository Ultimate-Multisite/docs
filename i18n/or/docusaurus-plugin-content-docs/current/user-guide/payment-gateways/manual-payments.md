---
title: ହସ୍ତଚାଳିତ ଦେୟ ସେଟ୍ ଅପ୍ କରିବା
sidebar_position: 20
_i18n_hash: 98210a45c3d3af7368f60d7593235163
---
# Manual Payments ସେଟ୍‌ଅପ୍ କରିବା (v2) {#setting-up-manual-payments-v2}

_**ଗୁରୁତ୍ୱପୂର୍ଣ୍ଣ ଟିପ୍ପଣୀ: ଏହି ଲେଖା Ultimate Multisite ସଂସ୍କରଣ 2.x ସମ୍ବନ୍ଧରେ।**_

Manual payments ହେଉଛି ଆପଣଙ୍କ users ମାନଙ୍କ ପାଇଁ **Stripe** କିମ୍ବା **PayPal** ଉପଲବ୍ଧ ନଥିଲେ ଅନ୍ୟ payment methods ଦେବାର ଏକ ଉପାୟ। ଏହା wire କିମ୍ବା bank transfer, କିମ୍ବା ଆପଣଙ୍କ users ମାନଙ୍କ ପାଇଁ ସ୍ଥାନୀୟ ଭାବେ ଉପଲବ୍ଧ ଅନ୍ୟ କୌଣସି payment method ହୋଇପାରେ।

## Manual Payments କିପରି ସକ୍ରିୟ କରିବେ {#how-to-enable-manual-payments}

Manual payment ସେଟ୍‌ଅପ୍ କରିବା ବହୁତ ସହଜ। ଆପଣଙ୍କୁ କେବଳ payment gateways ଅଧୀନରେ ଏହାକୁ ସକ୍ରିୟ କରିବାକୁ ପଡ଼ିବ ଏବଂ user କିପରି payment ପଠାଇବେ ସେଥିପାଇଁ ବିସ୍ତୃତ ନିର୍ଦ୍ଦେଶ ଦେବାକୁ ପଡ଼ିବ।

ପ୍ରଥମେ, **Ultimate Multisite > Settings > Payments** କୁ ଯାଆନ୍ତୁ। **Payment Gateways** ତଳେ, **Manual** ଟଗଲ୍‌କୁ ଚାଲୁ କରନ୍ତୁ। ଆପଣଙ୍କ ପାଇଁ **Payment Instructions** ବକ୍ସ ଦେଖାଯିବ।

ଏହି ବକ୍ସରେ ଆପଣଙ୍କ customer payment କରିବା ପାଇଁ ଆବଶ୍ୟକ ସୂଚନା ଯୋଡନ୍ତୁ। ଉଦାହରଣ ସ୍ୱରୂପ, ଏହା ଆପଣଙ୍କ bank account details ଏବଂ ଆପଣଙ୍କ email ହୋଇପାରେ, ଯାହାଦ୍ୱାରା customer ଆପଣଙ୍କୁ payment confirmation ପଠାଇପାରିବେ।

![Payment Instructions ପାଠ୍ୟ କ୍ଷେତ୍ର ସହିତ Manual payment gateway ଟଗଲ୍](/img/config/manual-gateway-expanded.png)

Manual gateway settings ଇଣ୍ଟରଫେସ୍ ଏଠାରେ ଅଛି:

![Manual gateway settings](/img/config/manual-gateway-settings.png)

ଏହାକୁ ସେଟ୍‌ଅପ୍ କରିସାରିଲେ, କେବଳ **Save Settings** ଉପରେ କ୍ଲିକ୍ କରନ୍ତୁ ଏବଂ କାମ ସମ୍ପୂର୍ଣ୍ଣ। Users ଆପଣଙ୍କ network ରେ register କରିବାବେଳେ, purchase ସମ୍ପୂର୍ଣ୍ଣ କରିବା ପାଇଁ ସେମାନେ ଆପଣଙ୍କ instructions ପାଇବେ ବୋଲି ଏକ message ଦେଖିବେ।

![User payment instructions ପାଇବେ ବୋଲି କହୁଥିବା registration confirmation message](/img/frontend/registration-manual-notice.png)

ଏବଂ ସେମାନେ ଆପଣଙ୍କ **Thank You** ପୃଷ୍ଠାରେ ଆପଣଙ୍କ payment instructions ସହିତ ଏକ message ମଧ୍ୟ ପାଇବେ।

<!-- Screenshot unavailable: Thank You page showing payment instructions after checkout -->

## Manual payments ନିଶ୍ଚିତ କରିବା {#confirming-manual-payments}

Manual payment ନିଶ୍ଚିତ କରିବାକୁ, ବାମ ବାର୍‌ରେ ଥିବା **Payments** menu କୁ ଯାଆନ୍ତୁ। ସେଠାରେ ଆପଣ ଆପଣଙ୍କ network ର ସମସ୍ତ payments ଏବଂ ସେଗୁଡ଼ିକର details ଦେଖିପାରିବେ, ସେମାନଙ୍କ **status** ସହିତ। ଆପଣ ନିଜେ ଏହାକୁ ବଦଳାଇନଥିଲେ ପର୍ଯ୍ୟନ୍ତ Manual payment ସଦା **Pending** status ରେ ରହିବ।

![Pending manual payment ଦେଖାଉଥିବା payments list](/img/admin/payments-list.png)

**reference code** ଉପରେ କ୍ଲିକ୍ କରି payment ପୃଷ୍ଠାକୁ ପ୍ରବେଶ କରନ୍ତୁ। ଏହି ପୃଷ୍ଠାରେ pending payment ର ସମସ୍ତ details ରହିଛି, ଯେପରିକି reference ID, products, timestamps ଏବଂ ଅଧିକ।

![Reference code, products, ଏବଂ totals ଦେଖାଉଥିବା payment details ପୃଷ୍ଠା](/img/admin/payment-edit.png)

ଡାହାଣ କଲମରେ, ଆପଣ payment ର status ବଦଳାଇପାରିବେ। ଏହାକୁ **Completed** କୁ ବଦଳାଇବା ଏବଂ **Activate Membership** option ଟଗଲ୍ କରିବା ଆପଣଙ୍କ customer ଙ୍କ site କୁ ସକ୍ରିୟ କରିବ ଏବଂ ସେମାନଙ୍କ membership ସକ୍ରିୟ ହେବ।

![Status Completed କୁ ସେଟ୍ ହୋଇଥିବା ଏବଂ Activate Membership ଟଗଲ୍ ସହିତ payment edit ପୃଷ୍ଠା](/img/admin/payment-activate-membership.png)
