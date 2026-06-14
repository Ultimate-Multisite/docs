---
title: ମାନୁଆଲ୍ ପେମେଣ୍ଟ୍ ସେଟିଂ କରିବା
sidebar_position: 20
_i18n_hash: cc6364919e001b3e1c8a9de72dab4f76
---
# ମାନୁଆଲ୍ ପେମେଣ୍ଟ ସେଟିଂ କରିବା (v2)

_**ଗୁରୁତ୍ୱପୂର୍ଣ୍ଣ ନୋଟ: ଏହି ଆଇକାଣିକ ବିଷୟବସ୍ତୁ Ultimate Multisite version 2.x-କୁ ସମ୍ବନ୍ଧିତ।**_

ମାନୁଆଲ୍ ପେମେଣ୍ଟ୍ ହେଉଛି ଏକ ଉପାୟ ଯେତେବେଳେ ଆପଣଙ୍କର ବ୍ୟବହାରକାରୀମାନଙ୍କ ପାଇଁ **Stripe** କିମ୍ବା **PayPal** ଉପଲବ୍ଧ ନଥିଲେ, ଆପଣ ଅନ୍ୟ ପେମେଣ୍ଟ ମାଧ୍ୟମ ପ୍ରଦାନ କରିପାରନ୍ତି। ଏହା ବିର ବା ବ୍ୟାଙ୍କ୍ ଟ୍ରାନ୍ସଫର୍ କିମ୍ବା ଆପଣଙ୍କ ବ୍ୟବହାରକାରୀମାନଙ୍କ ପାଇଁ ସ୍ଥାନୀୟ ଭାବରେ ଉପଲବ୍ଧ ଅନ୍ୟ କୌଣସି ପେମେଣ୍ଟ ମାଧ୍ୟମ ହୋଇପାରେ।

## ମାନୁଆଲ୍ ପେମେଣ୍ଟ୍ କିପରି ଏନେବଲ୍ କରିବା

ମାନୁଆଲ୍ ପେମେଣ୍ଟ ସେଟିଂ କରିବା ବହୁତ ସରଳ। ଆପଣ କେବଳ payment gateways ତଳକୁ ଯାଇ ଏହାକୁ ଅନ୍/ଅଫ (toggle) କରିଦିଅନ୍ତୁ ଏବଂ ବ୍ୟବହାରକାରୀଙ୍କୁ ପେମେଣ୍ଟ କିପରି କରିବାକୁ ହେବ ସେ ବିଷୟରେ ବିସ୍ତୃତ ନିର୍ଦ୍ଦେଶ ଦିଅନ୍ତୁ।

ପ୍ରଥମେ, **Ultimate Multisite > Settings > Payments** ରେ ଯାଆନ୍ତୁ। **Payment Gateways** ତଳକୁ ଆସି **Manual** ଉପରେ ଅନ୍ (on) କରନ୍ତୁ। ଆପଣ ଦେଖିବେ ଯେ ଏହା ପରେ ଆପଣଙ୍କ ପାଇଁ ଏକ **Payment Instructions** ବକ୍ସ ଖୋଲିବ।

ଏହି ବକ୍ସରେ ଆପଣଙ୍କ ଗ୍ରାହକମାନଙ୍କୁ ପେମେଣ୍ଟ କରିବା ପାଇଁ ଆବଶ୍ୟକ ସୂଚନା ଯୋଗ କରନ୍ତୁ। ଏଥିରେ ଆପଣଙ୍କ ବ୍ୟାଙ୍କ ଆକାଉଣ୍ଟ ବିବରଣୀ ଏବଂ ଆପଣଙ୍କ ଇମେଲ୍ ଦିଆଯାଇପାରିବ, ଯାହାଦ୍ୱାରା ଗ୍ରାହକ ଆପଣଙ୍କୁ ପେମେଣ୍ଟ କନଫର୍ମେସନ୍ ପଠାଇପାରିବ।

![Manual payment gateway toggle with Payment Instructions text area](/img/config/manual-gateway-expanded.png)

ଏଠାରେ ମାନୁଆଲ୍ ଗେଟୱେୟର ସେଟିଂ ଇଣ୍ଟରଫେସ୍ ଦେଖାଯାଇଛି:

![Manual gateway settings](/img/config/manual-gateway-settings.png)

ସେଟିଂ କରିବା ପରେ, କେବଳ **Save Settings** ଉପରେ କ୍ଲିକ୍ କରନ୍ତୁ ଏବଂ ସମସ୍ତ ପ୍ରକ୍ରିୟା ସମ୍ପୂର୍ଣ୍ଣ। ଯେତେବେଳେ ବ୍ୟବହାରକାରୀମାନେ ଆପଣଙ୍କ ନେଟୱାର୍କରେ ଯୋଗ ଦେବେ, ସେମାନେ ଏକ ମେସେଜ୍ ଦେଖିବେ ଯେ ସେମାନେ କ୍ରୟ ପୂରଣ କରିବା ପାଇଁ ଆପଣଙ୍କୁ ନିର୍ଦ୍ଦେଶ ମିଳିବ।

![Registration confirmation message telling the user they will receive payment instructions](/img/frontend/registration-manual-notice.png)

ଏବଂ ସେମାନେ ଆପଣଙ୍କ **Thank You** ପୃଷ୍ଠାରେ ମଧ୍ୟ ଆପଣଙ୍କ ପେମେଣ୍ଟ ନିର୍ଦ୍ଦେଶ ସହିତ ଏକ ମେସେଜ୍ ପାଇବେ।

<!-- Screenshot unavailable: Thank You page showing payment instructions after checkout -->

## ମାନୁଆଲ୍ ପେମେଣ୍ଟ୍ କୁ ପ୍ରମାଣ କରିବା

ମାନୁଆଲ୍ ପେମେଣ୍ଟ୍ (Manual Payment) କୁ ସ୍ଥିର କରିବା ପାଇଁ, ବାମဘက်ରେ ଥିବା **Payments** ମେନୁକୁ ଯାଆନ୍ତୁ। ଏଠାରେ ଆପଣ ଆପଣଙ୍କ ନେଟୱାର୍କର ସମସ୍ତ ପେମେଣ୍ଟ୍ ଏବଂ ସେଗୁଡ଼ିକର ବିଭିନ୍ନ ବିବରଣୀ, ଯେପରିକି ତା'ର **status** ଦେଖିପାରିବେ। ମାନୁଆଲ୍ ପେମେଣ୍ଟ୍ ଆପଣ ନିଜେ ବଦଳାଇବା ପର୍ଯ୍ୟନ୍ତ ସବୁବେଳେ **Pending** statusରେ ରହିବ।

![Payments list showing pending manual payment](/img/admin/payments-list.png)

**reference code** ଉପରେ କ୍ଲିକ୍ କରି ପେମେଣ୍ଟ୍ ପେଜକୁ ପ୍ରବେଶ କରନ୍ତୁ। ଏହି ପୃଷ୍ଠାରେ ଆପଣଙ୍କ ପେମେଣ୍ଟ୍ ସମ୍ବନ୍ଧୀୟ ସମସ୍ତ ବିବରଣୀ, ଯେପରିକି reference ID, ଉତ୍ପାଦ (products), ଟିମ୍‌ଷ୍ଟାମ୍ପ୍ ଏବଂ ଅନ୍ୟାନ୍ୟ ଜିନିଷ ଦେଖିପାରିବେ।

![Payment details page showing reference code, products, and totals](/img/admin/payment-edit.png)

ତଳକୁ ଥିବା ଡାଉଲ୍ଟ କଲମ୍ (right column)ରେ, ଆପଣ ପେମେଣ୍ଟ୍‌ର status ବଦଳାଇପାରିବେ। ଏହାକୁ **Completed** କରିବା ଏବଂ **Activate Membership** ଅପ୍ସନ୍‌ଟିକୁ অন/ଅଫ୍ କରିବା ଦ୍ୱାରା ଆପଣଙ୍କ ଗ୍ରାହକଙ୍କ ସାଇଟ୍ ଖୋଲିଯିବ ଏବଂ ତାଙ୍କର ମେମ୍ବେରିଶିପ୍ (membership) ସକ୍ରିୟ ହୋଇଯିବ।

![Payment edit page with Status set to Completed and Activate Membership toggle](/img/admin/payment-activate-membership.png)
