---
title: ট্যাক্স সামলवणी
sidebar_position: 4
_i18n_hash: a331943b7d5764cc5f2277c08595b235
---
# কৰ কৰ ব্যৱস্থা (Tax Handling)

Ultimate Multisite-ত আমাৰ মূল plugin-ৰ ভিতৰত এটা tax collection module আছে। গতিকে, যদি আপুনি আপোনাৰ plans, packages, আৰু services ওপৰত sales tax সংগ্ৰহ কৰিব বিচাৰে, তেন্তে আপুনি কোনো add-on install নকৰাকৈও ই সহজে কৰিব পাৰে।

ইউৰোপত অৱস্থিত কোম্পানীসমূহৰ বাবে, আমি এটা **add-on** আগবঢ়াওঁ যিয়ে **VAT** (Value Added Tax) অনুপালন কৰাত সহায় কৰিবলৈ টুল আৰু বৈশিষ্ট্য যোগ কৰে।

Ultimate Multisite আপোনাৰ হৈ চৰকাৰক tax ফাইল কৰে বা remit কৰে না; আমি কেৱল লেনদেনৰ সময়ত উপযুক্ত tax সংগ্ৰহ কৰাত আপোনাক সহায় কৰোঁ। **আপুনি এতিয়াও নিজৰ হাতত tax remit কৰিব লাগিব।**

## কৰ সংগ্ৰহ সক্ষম কৰা (Enabling Tax Collection)

Tax collection ডিফল্টভাৱে সক্ষম নহয়। ই সক্ষম কৰিবলৈ, আপুনি **Ultimate Multisite > Settings > Taxes** লৈ গৈ 'Enable Taxes' ছেটিংটো টগল কৰি সক্ষম কৰিব লাগিব।

![Enable Taxes toggle at the top of the Tax settings page](/img/config/settings-taxes-enable.png)

ইয়াত tax settings পৃষ্ঠাৰ এটা সম্পূৰ্ণ দৃশ্য দিয়া হ'ল:

![Tax settings full page](/img/config/settings-taxes-full.png)

আপুনি ব্যক্তিগত products-ৰ বাবেও tax settings দেখা পাৰে:

![Tax settings for products](/img/config/settings-taxes.png)

### কৰ বাদ দিয়া বনাম কৰ সামৰি লোৱা (Tax excluded vs. Tax included)

ডিফল্টভাৱে, আপোনাৰ সকলো product মূল্য tax excluded হয়, যাৰ অৰ্থ হ'ল যে taxবোৰ product-ৰ মূল্যত **সামৰি লোৱা নহয়**। যদি আমি নিৰ্ণয় কৰোঁ যে কোনো ग्राहकই এটা নিৰ্দিষ্ট ক্ৰয়ৰ ওপৰত tax দিব লাগিব, তেন্তে আমি subtotal-ৰ ওপৰত tax যোগ কৰিম।

যদি আপুনি taxবোৰ product-ৰ মূল্যত সামৰি ল'ব বিচাৰে, তেন্তে আপুনি **Inclusive Tax** ছেটিংটো সক্ষম কৰি সেয়া কৰিব পাৰে।

![Inclusive Tax toggle row below the Enable Taxes setting](/img/config/settings-taxes-inclusive.png)

আপুনি কৰা পৰিৱৰ্তনবোৰ **save** কৰিবলৈ পাহৰিব নালাগে।

###

## tax হাৰ সৃষ্টি কৰা (Creating Tax Rates)

আপুনি Tax Collection সক্ষম কৰাৰ পিছত, আপুনি আমাৰ tax rates editor ব্যৱহাৰ কৰি নিৰ্দিষ্ট স্থানসমূহৰ বাবে tax rate সৃষ্টি কৰিব লাগিব।

আপুনি Tax settings পৃষ্ঠাৰ sidebar-ত থকা **Manage Tax Rates** বাটনটো ক্লিক কৰি editor লৈ যাব পাৰে।

![Manage Tax Rates link in the Tax Rates panel on the settings page](/img/config/settings-taxes-manage-rates.png)

tax rates editor পৃষ্ঠাখনত, আপুনি **Add new Row** বাটনটো ক্লিক কৰি নতুন Tax Rates যোগ কৰিব পাৰে।

![Tax rates editor table with Add new Row button at the top](/img/config/tax-rates-editor.png)

আপুনি প্ৰতিটো tax rate-লৈ এটা **title** (invoice-ত ব্যৱহৃত) দিব লাগিব। তাৰ পিছত আপুনি **country** (প্ৰয়োজনীয়), **state,** আৰু **city** (দুয়োটাই ঐচ্ছিক) বাছি ল'ব পাৰে য'ত এই tax টকা লোৱা হ'ব। শেষত, **percent-ত tax rate** যোগ কৰক।

### tax বিভাগ (Tax Categories)

আপুনি বিভিন্ন ধৰণৰ products-ৰ বাবে বিভিন্ন tax rate যোগ কৰিবলৈ একাধিক Tax Categoriesো সৃষ্টি কৰিব পাৰে।

**Add new Tax Category** ক্লিক কৰক, তাৰ পিছত আপোনাৰ category-ৰ নাম লিখক আৰু **Create** টো টোকা কৰক।

![Add new Tax Category button at the top of the tax rates editor](/img/config/tax-categories-add.png)

![Tax Category Name input field in the create category modal](/img/config/tax-categories-create-modal.png)

category সমূহৰ মাজেৰে যাবলৈ, **Switch** ক্লিক কৰক আৰু সেই category-টো বাছি লওক য'ত আপুনি নতুন tax যোগ কৰিব বিচাৰে।

![Switch dropdown button to change between tax categories](/img/config/tax-categories-switch.png)

![Tax category selector dropdown showing available categories](/img/config/tax-categories-select.png)

আপুনি **Product edit page** লৈ গৈ আৰু তাৰ পিছত Taxes tab-লৈ গৈ এটা নিৰ্দিষ্ট product-ৰ বাবে tax category সেট কৰিব পাৰে।

![Product taxes tab with tax category and taxable toggle](/img/config/product-taxes.png)

সেই একেখন স্ক্রিনত, আপুনি **Is Taxable?** টগলটো অফ কৰি Ultimate Multisite-ক জনালে যে এই নিৰ্দিষ্ট product-ৰ ওপৰত tax সংগ্ৰহ কৰিব নালাগে।

## ইউৰোপীয় VAT সহায় (European VAT Support)

পূৰ্বে উল্লেখ কৰা অনুসৰি, ইউৰোপীয় VAT নিয়মৰ বাবে কিছুমান বিশেষ প্ৰয়োজনীয়তা থকা EU-ৰ ग्राहकসকলৰ বাবে আমি এটা add-on উপলব্ধ কৰি থৈছো।

আমাৰ VAT টুলবোৰে কেইটামান গুৰুত্বপূৰ্ণ কামত সহায় কৰে:

  * EU VAT rate সহজে লোড কৰা;

  * VAT Number সংগ্ৰহ আৰু প্ৰমাণিকীকৰণ - আৰু VAT exempt entity-ৰ বাবে reverse charging (যেনে সঠিক VAT number থকা কোম্পানীসমূহ);

সেই add-on install কৰিবলৈ, **Ultimate Multisite > Settings** লৈ যোৱা আৰু তাৰ পিছত **Check our Add-ons** sidebar link-ত ক্লিক কৰক।

![Settings page sidebar with Check our Add-ons link](/img/config/settings-taxes-addons-link.png)

আপোনাক আমাৰ add-ons পৃষ্ঠালৈ redirecct কৰা হ'ব। তাত, আপুনি **Ultimate Multisite VAT add-on** সন্ধান কৰিব পাৰে আৰু ইয়াক install কৰিব পাৰে।

![VAT add-on tile on the Add-ons page](/img/admin/addons-page-vat.png)

![VAT add-on Install Now dialog](/img/admin/addon-install-vat.png)

তাৰ পিছত, **Network Admin > Plugins** লৈ যোৱা আৰু সেই add-on-টো network-wide activate কৰা।

![Network Activate action for the VAT add-on on the Plugins page](/img/admin/addons-list-vat.png)

যদি আপুনি **Tax Settings tab** লৈ ঘূৰি আহে, তেন্তে আপুনি নতুন বিকল্পসমূহ উপলব্ধ হ'ব। নতুন VAT টুলবোৰ সক্ষম কৰিবলৈ **Enable VAT Support** অপচনটো টগল কৰক। আপোনাৰ ছেটিংবোৰ **save** কৰিবলৈ পাহৰিব নালাগে!

![Enable VAT Support toggle in the Tax settings after add-on activation](/img/config/settings-taxes-vat-toggle.png)

### VAT tax rate লোৱা (Pulling on VAT Tax Rates)

আমাৰ ইন্টিগ্ৰেচনৰ দ্বাৰা যোগ কৰা টুলবোৰৰ এটা হ'ল EU সদস্য ৰাষ্ট্ৰসমূহৰ বাবে tax rate লোড কৰাৰ ক্ষমতা। EU VAT সহায় সক্ষম কৰাৰ পিছত tax rates editor পৃষ্ঠাখনলৈ গৈ ই কৰিব পাৰি।

পৃষ্ঠাখনৰ তলত, আপুনি VAT pulling options দেখিব। এটা rate type বাছি লৈ **Update EU VAT Rates** বাটনটো ক্লিক কৰিলে প্ৰতিটো EU সদস্য ৰাষ্ট্ৰৰ বাবে tax rate লৈ আহি টেবুলটো স্বয়ংক্ৰিয়ভাৱে পূৰণ কৰিব। তাৰ পিছত, আপুনি কেৱল ইয়াক save কৰিব লাগিব।

![Update EU VAT Rates button at the bottom of the tax rates editor](/img/config/tax-rates-vat-pull.png)

লোড কৰাৰ পিছতো আপুনি মানবোৰ সম্পাদনা কৰিব পাৰে। ই কৰিবলৈ, কেৱল আপোনাক প্ৰয়োজন হোৱা টেবুল লাইনটো সম্পাদনা কৰক আৰু নতুন মানবোৰ save কৰিবলৈ ক্লিক কৰক।

### VAT প্ৰমাণিকীকৰণ (VAT Validation)

VAT সহায় সক্ষম কৰা হ'লে, Ultimate Multisite-এ checkout form-ত, billing address field-ৰ তলত এটা অতিৰিক্ত field যোগ কৰিব। এই field টো কেৱল EU-ত অৱস্থিত ग्राहकসকলৰ বাবেহে দেখুৱাব।

![VAT Number field on the frontend checkout form below the billing address](/img/frontend/checkout-vat-field.png)

Ultimate Multisite তাৰ পিছত VAT Number-টো validate কৰিব আৰু যদি ই এটা সঠিক number হিচাপে আহে, তেন্তে reverse charge mechanism প্ৰয়োগ কৰা হয় আৰু সেই order-ত tax rate 0% সেট কৰা হয়।
