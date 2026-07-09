---
title: কৰ ব্যৱস্থাপনা
sidebar_position: 4
_i18n_hash: 8b94c58406519f9c55fe837c6addfc12
---
# কৰ ব্যৱস্থাপনা

Ultimate Multisite-ৰ আমাৰ মূল plugin-ত কৰ সংগ্ৰহৰ এটা module অন্তৰ্ভুক্ত আছে, সেয়েহে আপোনাৰ plan, package আৰু সেৱাসমূহত sales tax সংগ্ৰহ কৰিব লাগিলে, কোনো অতিৰিক্ত সংযোজন install নকৰাকৈ আপুনি সহজে তেনে কৰিব পাৰে।

ইউৰোপত অৱস্থিত কোম্পানীসমূহৰ বাবে, আমি এটা **সংযোজন** আগবঢ়াওঁ যিয়ে **VAT সমৰ্থন** compliance ভালদৰে সহায় কৰিবলৈ সঁজুলি আৰু বৈশিষ্ট্য যোগ কৰে।

Ultimate Multisite-এ আপোনাৰ হৈ চৰকাৰলৈ কৰ file বা remit নকৰে; আমি কেৱল transaction-ৰ সময়ত উপযুক্ত কৰ সংগ্ৰহ কৰাত সহায় কৰোঁ। **আপুনি তথাপিও নিজে কৰ remit কৰিব লাগিব।**

## কৰ সংগ্ৰহ সক্ষম কৰা

কৰ সংগ্ৰহ default-ভাৱে সক্ষম নহয়। ইয়াক সক্ষম কৰিবলৈ, আপুনি **Ultimate Multisite > Settings > Taxes**-লৈ গৈ Enable Taxes setting সক্ষম কৰিবলৈ toggle কৰিব লাগিব।

![কৰ settings পৃষ্ঠাৰ ওপৰত Enable Taxes toggle](/img/config/settings-taxes-enable.png)

কৰ settings পৃষ্ঠাৰ সম্পূৰ্ণ দৃশ্য ইয়াত দিয়া হৈছে:

![কৰ settings সম্পূৰ্ণ পৃষ্ঠা](/img/config/settings-taxes-full.png)

আপুনি ব্যক্তিগত product-ৰ কৰ settings-সমূহো চাব পাৰে:

![product-ৰ বাবে কৰ settings](/img/config/settings-taxes.png)

### কৰ বাদ দিয়া বনাম কৰ অন্তৰ্ভুক্ত

default-ভাৱে, আপোনাৰ সকলো product price-ত কৰ বাদ দিয়া থাকে, অৰ্থাৎ কৰসমূহ product-ৰ price-ত **অন্তৰ্ভুক্ত নহয়**। যদি আমি নিৰ্ধাৰণ কৰোঁ যে কোনো customer-এ এটা নিৰ্দিষ্ট purchase-ত কৰ দিব লাগে, তেন্তে আমি subtotal-ৰ **ওপৰত** কৰ যোগ কৰিম।

যদি আপুনি কৰসমূহ আপোনাৰ product-ৰ price-ত অন্তৰ্ভুক্ত থাকক বুলি পছন্দ কৰে, তেন্তে **Inclusive Tax** setting সক্ষম কৰি তেনে কৰিব পাৰে।

![Enable Taxes setting-ৰ তলৰ Inclusive Tax toggle row](/img/config/settings-taxes-inclusive.png)

আপুনি কৰা পৰিৱর্তনসমূহ **save** কৰিবলৈ নাপাহৰিব।

###

## কৰ-হাৰ সৃষ্টি কৰা

Tax Collection সক্ষম কৰাৰ পিছত, আপুনি আমাৰ tax rates editor ব্যৱহাৰ কৰি নিৰ্দিষ্ট location-ৰ বাবে tax rate সৃষ্টি কৰিব লাগিব।

Tax settings পৃষ্ঠাৰ sidebar-ত থকা **Manage Tax Rates** button-ত click কৰি আপুনি editor access কৰিব পাৰে।

![settings পৃষ্ঠাৰ Tax Rates panel-ত Manage Tax Rates link](/img/config/settings-taxes-manage-rates.png)

tax rates editor পৃষ্ঠাত, আপুনি **Add new Row** button-ত click কৰি নতুন Tax Rates যোগ কৰিব পাৰে।

![ওপৰত Add new Row button থকা tax rates editor table](/img/config/tax-rates-editor.png)

আপুনি প্ৰতি tax rate-ক এটা **title** দিব লাগিব (invoice-ত ব্যৱহৃত)। তাৰ পিছত আপুনি এই কৰ charge কৰা হ'ব লগা **country** (আৱশ্যক), **state,** আৰু **city** (দুয়োটাই ঐচ্ছিক) বাছনি কৰিব পাৰে। শেষত, **শতাংশত tax rate** যোগ কৰক।

### কৰ Category

আপুনি বিভিন্ন ধৰণৰ product-ৰ বাবে বিভিন্ন tax rate যোগ কৰিবলৈ একাধিক Tax Category-ও সৃষ্টি কৰিব পাৰে।

**Add new Tax Category** কৰিবলৈ click কৰক, তাৰ পিছত আপোনাৰ category-ৰ নাম লিখক আৰু **Create** টিপক।

![tax rates editor-ৰ ওপৰত Add new Tax Category button](/img/config/tax-categories-add.png)

![category সৃষ্টি modal-ত Tax Category Name input field](/img/config/tax-categories-create-modal.png)

category-সমূহ browse কৰিবলৈ, **Switch** click কৰক আৰু যিটো category-ত আপুনি নতুন কৰ যোগ কৰিব বিচাৰে সেয়া select কৰক।

![tax category-সমূহৰ মাজত সলনি কৰিবলৈ Switch dropdown button](/img/config/tax-categories-switch.png)

![উপলব্ধ category দেখুওৱা tax category selector dropdown](/img/config/tax-categories-select.png)

আপুনি **Product edit page**-লৈ গৈ তাৰ পিছত Taxes tab-লৈ গৈ কোনো নিৰ্দিষ্ট product-ৰ বাবে tax category set কৰিব পাৰে।

![tax category আৰু taxable toggle থকা product taxes tab](/img/config/product-taxes.png)

সেই একেখন screen-তে, আপুনি **Is Taxable?** toggle off কৰি Ultimate Multisite-ক জনাব পাৰে যে সেই নিৰ্দিষ্ট product-ত কৰ সংগ্ৰহ কৰা উচিত নহয়।

## ইউৰোপীয় VAT সমৰ্থন

আগতে উল্লেখ কৰা অনুসৰি, EU-ত থকা customer-ৰ বাবে আমাৰ এটা সংযোজন উপলব্ধ আছে, যিসকলৰ European VAT regulations-ৰ বাবে অতিৰিক্ত requirement আছে।

আমাৰ VAT সঁজুলিসমূহে দুটা গুৰুত্বপূর্ণ কামত সহায় কৰে:

  * EU VAT rate-সমূহ সহজে load কৰা;

  * VAT Number সংগ্ৰহ আৰু validation - আৰু VAT exempt entity-সমূহৰ বাবে reverse charging (যেনে বৈধ VAT number থকা কোম্পানী);

সেই সংযোজন install কৰিবলৈ, **Ultimate Multisite > Settings**-লৈ যাওক আৰু তাৰ পিছত **Check our Add-ons** sidebar link-ত click কৰক।

![Check our Add-ons link থকা Settings পৃষ্ঠাৰ sidebar](/img/config/settings-taxes-addons-link.png)

আপুনি আমাৰ সংযোজনসমূহৰ পৃষ্ঠালৈ redirected হ'ব। তাত, আপুনি **Ultimate Multisite VAT সংযোজন** search কৰি install কৰিব পাৰে।

<!-- Screenshot উপলব্ধ নহয়: সংযোজনসমূহৰ পৃষ্ঠাত VAT সংযোজন tile -->

<!-- Screenshot উপলব্ধ নহয়: VAT সংযোজন Install Now dialog -->

তাৰ পিছত, **Network Admin > Plugins**-লৈ যাওক আৰু সেই সংযোজন network-wide সক্ৰিয় কৰক।

<!-- Screenshot উপলব্ধ নহয়: Plugins পৃষ্ঠাত VAT সংযোজনৰ বাবে Network Activate action -->

আপুনি যদি **Tax Settings tab**-লৈ উভতি যায়, তেন্তে নতুন option উপলব্ধ দেখা পাব। নতুন VAT সঁজুলিসমূহ সক্ষম কৰিবলৈ **Enable VAT Support** option toggle কৰক। আপোনাৰ settings **save** কৰিবলৈ নাপাহৰিব!

<!-- Screenshot উপলব্ধ নহয়: সংযোজন সক্ৰিয় কৰাৰ পিছত Tax settings-ত Enable VAT Support toggle -->

### VAT Tax Rates আনি লোৱা

আমাৰ integration-এ যোগ কৰা সঁজুলিসমূহৰ এটাৰ জৰিয়তে EU member state-সমূহৰ tax rate load কৰিব পাৰি। EU VAT support সক্ষম কৰাৰ পিছত tax rates editor পৃষ্ঠালৈ গৈ এইটো কৰিব পাৰি।

পৃষ্ঠাৰ তলত, আপুনি VAT আনি লোৱাৰ option-সমূহ দেখিব। rate type এটা select কৰি **Update EU VAT Rates** button-ত click কৰিলে, প্ৰতি EU member state-ৰ tax rate-সমূহ আনি table-ত স্বয়ংক্ৰিয়ভাৱে populate কৰা হ'ব। তাৰ পিছত, আপুনি কেৱল ইয়াক save কৰিব লাগিব।

![tax rates editor-ৰ তলত Update EU VAT Rates button](/img/config/tax-rates-vat-pull.png)

আনি লোৱাৰ পিছত আপুনি value-সমূহ edit-ও কৰিব পাৰে। ইয়াক কৰিবলৈ, প্ৰয়োজনীয় table line-টো সৰলভাৱে edit কৰক আৰু নতুন value-সমূহ save কৰিবলৈ click কৰক।

### VAT Validation

VAT support সক্ষম থাকিলে, Ultimate Multisite-এ checkout form-ত billing address field-ৰ তলত এটা অতিৰিক্ত field যোগ কৰিব। field-টো কেৱল EU-ত অৱস্থিত customer-ৰ বাবে দেখা যাব।

<!-- Screenshot উপলব্ধ নহয়: frontend checkout form-ত billing address-ৰ তলত VAT Number field -->

Ultimate Multisite-এ তাৰ পিছত VAT নম্বৰ বৈধতা পৰীক্ষা কৰিব আৰু যদি সেয়া বৈধ বুলি ঘূৰি আহে, তেন্তে reverse charge mechanism প্ৰয়োগ কৰা হয় আৰু সেই অৰ্ডাৰত কৰৰ হাৰ 0% লৈ নিৰ্ধাৰণ কৰা হয়।
