---
title: কর ব্যবস্থাপনা
sidebar_position: 4
_i18n_hash: 8b94c58406519f9c55fe837c6addfc12
---
# কর পরিচালনা {#tax-handling}

Ultimate Multisite-এর core plugin-এ কর সংগ্রহের মডিউল তৈরি করা আছে। তাই আপনার plan, package এবং service-এ sales tax সংগ্রহ করতে হলে কোনো add-on ইনস্টল না করেই সহজে তা করতে পারবেন।

ইউরোপে অবস্থিত কোম্পানিগুলোর জন্য, আমরা একটি **add-on** দিই যা **VAT** compliance আরও ভালোভাবে support করার জন্য tool ও feature যোগ করে।

Ultimate Multisite আপনার পক্ষ থেকে সরকারের কাছে কর ফাইল বা জমা দেয় না; আমরা শুধু transaction-এর সময় উপযুক্ত কর সংগ্রহ করতে সাহায্য করি। **কর আপনাকেই জমা দিতে হবে।**

## কর সংগ্রহ চালু করা {#enabling-tax-collection}

কর সংগ্রহ ডিফল্টভাবে চালু থাকে না। এটি চালু করতে, আপনাকে **Ultimate Multisite > সেটিংস > কর**-এ গিয়ে Enable Taxes সেটিং চালু করতে হবে।

![কর সেটিংস পেজের উপরে Enable Taxes টগল](/img/config/settings-taxes-enable.png)

কর সেটিংস পেজের পূর্ণ দৃশ্য এখানে:

![কর সেটিংসের পূর্ণ পেজ](/img/config/settings-taxes-full.png)

আপনি আলাদা product-এর কর সেটিংসও দেখতে পারেন:

![product-এর জন্য কর সেটিংস](/img/config/settings-taxes.png)

### কর বাদে বনাম করসহ {#tax-excluded-vs-tax-included}

ডিফল্টভাবে, আপনার সব product-এর price কর বাদে থাকে। অর্থাৎ product-এর price-এ কর **অন্তর্ভুক্ত নয়**। যদি আমরা নির্ধারণ করি যে কোনো purchase-এ customer-এর কর দেওয়া উচিত, তাহলে subtotal-এর **উপর** কর যোগ করা হবে।

আপনি যদি product-এর price-এ কর অন্তর্ভুক্ত রাখতে চান, তাহলে **Inclusive Tax** সেটিং চালু করে তা করতে পারেন।

![Enable Taxes সেটিংসের নিচে Inclusive Tax টগল সারি](/img/config/settings-taxes-inclusive.png)

আপনার করা পরিবর্তনগুলো **save** করতে ভুলবেন না।

###

## করহার তৈরি করা {#creating-tax-rates}

Tax Collection চালু করার পরে, আমাদের tax rates editor ব্যবহার করে নির্দিষ্ট location-এর জন্য করহার তৈরি করতে হবে।

Tax settings page-এর sidebar-এ **Manage Tax Rates** button-এ click করে editor-এ যেতে পারবেন।

![settings page-এর Tax Rates panel-এ Manage Tax Rates link](/img/config/settings-taxes-manage-rates.png)

tax rates editor page-এ, **Add new Row** button-এ click করে নতুন Tax Rates যোগ করতে পারেন।

![উপরে Add new Row button সহ tax rates editor table](/img/config/tax-rates-editor.png)

প্রতিটি করহারকে একটি **title** দিতে হবে (invoice-এ ব্যবহৃত হবে)। এরপর এই কর যেখানে charged হবে সেই **country** (প্রয়োজনীয়), **state,** এবং **city** (দুটিই ঐচ্ছিক) বেছে নিতে পারেন। শেষে **tax rate in percents** যোগ করুন।

### কর বিভাগ {#tax-categories}

বিভিন্ন ধরনের product-এর জন্য ভিন্ন করহার যোগ করতে আপনি একাধিক Tax Categories-ও তৈরি করতে পারেন।

**Add new Tax Category**-তে click করুন, তারপর আপনার category-র নাম লিখে **Create** চাপুন।

![tax rates editor-এর উপরে Add new Tax Category button](/img/config/tax-categories-add.png)

![category তৈরি করার modal-এ Tax Category Name input field](/img/config/tax-categories-create-modal.png)

category browse করতে, **Switch**-এ click করুন এবং যে category-তে নতুন কর যোগ করতে চান সেটি select করুন।

![tax category বদলানোর জন্য Switch dropdown button](/img/config/tax-categories-switch.png)

![উপলভ্য category দেখানো tax category selector dropdown](/img/config/tax-categories-select.png)

নির্দিষ্ট product-এর tax category সেট করতে **Product edit page**-এ গিয়ে তারপর Taxes tab-এ যান।

![tax category এবং taxable toggle সহ Product taxes tab](/img/config/product-taxes.png)

একই screen-এ, **Is Taxable?** toggle বন্ধ করে Ultimate Multisite-কে জানাতে পারেন যে ওই নির্দিষ্ট product-এ কর সংগ্রহ করা উচিত নয়।

## ইউরোপীয় VAT support {#european-vat-support}

আগে বলা হয়েছে, EU-এর customer-দের জন্য আমাদের একটি add-on আছে, কারণ European VAT regulation-এর কারণে তাদের অতিরিক্ত requirement থাকে।

আমাদের VAT tool কয়েকটি গুরুত্বপূর্ণ বিষয়ে সাহায্য করে:

  * EU VAT rate সহজে load করা;

  * VAT Number সংগ্রহ ও validation - এবং VAT exempt entity-র জন্য reverse charging (যেমন বৈধ VAT number থাকা company);

এই add-on ইনস্টল করতে, **Ultimate Multisite > সেটিংস**-এ যান এবং তারপর **আমাদের Add-ons দেখুন** sidebar link-এ click করুন।

![Check our Add-ons link সহ Settings page sidebar](/img/config/settings-taxes-addons-link.png)

আপনাকে আমাদের add-ons page-এ নিয়ে যাওয়া হবে। সেখানে, আপনি **Ultimate Multisite VAT add-on** search করে install করতে পারেন।

<!-- Screenshot unavailable: Add-ons page-এ VAT add-on tile -->

<!-- Screenshot unavailable: VAT add-on Install Now dialog -->

তারপর, **Network Admin > Plugins**-এ গিয়ে add-on-টি network-wide activate করুন।

<!-- Screenshot unavailable: Plugins page-এ VAT add-on-এর Network Activate action -->

আপনি যদি **Tax Settings tab**-এ ফিরে যান, নতুন option দেখতে পাবেন। নতুন VAT tool চালু করতে **Enable VAT Support** option toggle করুন। আপনার settings **save** করতে ভুলবেন না!

<!-- Screenshot unavailable: add-on activation-এর পরে Tax settings-এ Enable VAT Support toggle -->

### VAT করহার আনা {#pulling-on-vat-tax-rates}

আমাদের integration যে tool যোগ করে, তার একটি হলো EU member state-এর করহার load করার ক্ষমতা। EU VAT support চালু করার পর tax rates editor page-এ গিয়ে এটি করা যায়।

page-এর নিচে, আপনি VAT আনার option দেখবেন। একটি rate type select করে **Update EU VAT Rates** button-এ click করলে প্রতিটি EU member state-এর করহার table-এ এনে auto-populate করা হবে। এরপর, আপনাকে শুধু save করতে হবে।

![tax rates editor-এর নিচে Update EU VAT Rates button](/img/config/tax-rates-vat-pull.png)

আনার পর values edit-ও করতে পারেন। এটি করতে, শুধু আপনার প্রয়োজনীয় table line edit করুন এবং নতুন values save করতে click করুন।

### VAT validation {#vat-validation}

VAT support চালু থাকলে, Ultimate Multisite checkout form-এ billing address field-এর নিচে একটি অতিরিক্ত field যোগ করবে। field-টি শুধু EU-তে অবস্থিত customer-দের জন্য দেখা যাবে।

<!-- Screenshot unavailable: frontend checkout form-এ billing address-এর নিচে VAT Number field -->

এরপর Ultimate Multisite VAT Number যাচাই করবে এবং এটি বৈধ হলে, reverse charge প্রক্রিয়া প্রয়োগ করা হবে এবং সেই অর্ডারে করের হার 0% সেট করা হবে।
