---
title: চেকআউট ফৰ্মসমূহ
sidebar_position: 19
_i18n_hash: b7b1bf89a2997f8916c9f3a3a2cb255b
---
# Checkout Forms

Checkout Forms হৈছে নতুন কাস্টমৰ লগত জড়িত বিভিন্ন পদ্ধতি পৰীক্ষা কৰাৰ বাবে এটা সহজ আৰু নমনীয় উপায়।

Ultimate Multisite 2.0 ত এটা Checkout Form editor আছে, যি আপোনাক বিভিন্ন ফিল্ড, অফাৰ কৰা প্ৰডাক্ট আদিৰ সৈতে যিমানেই ফৰ্ম বনাওঁক, সেয়া কৰিবলৈ অনুমতি দিয়ে।

এই বৈশিষ্ট্যটো ব্যৱহাৰ কৰিবলৈ, বাঁহফালে (left side-bar) থকা Checkout Forms মেনুত যাওক।

![Checkout Forms list](/img/config/checkout-forms-list.png)

এই পৃষ্ঠাখনত আপুনি আপোনাৰ সকলো checkout forms একলগ কৰিব পাৰিব।

এই তালিকা টেবুলত এটা **Status** কলাম আছে, যাৰ জৰিয়তে আপুনি নিশ্চিত হ'ব পাৰিব যে প্ৰতিটো ফৰ্ম কাস্টমৰ বাবে বৰ্তমান উপলব্ধ নে নাই:

| Status | Meaning |
|---|---|
| **Active** | এই ফৰ্মটো য'তকৈওঁৰ shortcode বা registration page প্ৰকাশ কৰা হৈছে, তাত য'তকৈওঁৰ ব্যৱহাৰ কৰিব পাৰি। |
| **Inactive** | ফৰ্মটো সেভ কৰা হৈছে কিন্তু নিষ্ক্ৰিয় কৰা হৈছে। আপুনি পুনৰ ইয়াৰ বাবে অনুমতি নিদিয়ালৈ কাস্টমৰসকলে ইয়াৰ দ্বাৰা checkout সম্পন্ন কৰিব নোৱাৰে। |

বিশেষকৈ যেতিয়া আপুনি draft বা ঋতুভিত্তিক checkout forms সমূহক আপোনাৰ লাইভ forms লগত ৰাখে, তেতিয়া কোনো public registration flow সম্পাদনা কৰাৰ আগতে status কলামটো ব্যৱহাৰ কৰক।

যদি আপুনি এটা নতুন ফৰ্ম বনাওঁক, তেন্তে পৃষ্ঠাখনৰ ওপৰত থকা Add Checkout Form টো ক্লিক কৰক।

আপুনি এই তিনিটা বিকল্পৰ ভিতৰৰ পৰা এটা নিৰ্বাচন কৰিব পাৰে: single step, multi-step বা blank। তাৰ পিছত, Editor-লৈ যোৱাৰ বাবে ক্লিক কৰক।

যেতিয়া আপুনি **single step** বা **multi-step** ক নিজৰ আৰম্ভণি স্থান হিচাপে বাছি লয়, তেতিয়া ফৰ্ম টেমপ্লেটটোত ডিফল্টভাৱে এটা **Template Selection** ফিল্ড অন্তৰ্ভুক্ত হৈ পৰে। এই ফিল্ডটোৱে আপোনাৰ কাস্টমৰসকলক registration প্ৰক্ৰিয়াত এটা site template বাছি ল'বলৈ দিয়ে। আপুনি ইয়াক স্থানত ৰাখিব পাৰে, ইয়াক আঁতৰাব পাৰে, বা editor-ৰ আন কোনো ফিল্ডৰ দৰেই ইয়াক স্থান সলনি কৰিব পাৰে।

![Checkout Form editor](/img/config/checkout-form-editor.png)

বিকল্পভাৱে, আপুনি তলত দিয়া বিকল্পসমূহক ক্লিক কৰি আপোনাৰ ইতিমধ্যে থকা ফৰ্মসমূহ সম্পাদনা বা duplicat কৰিব পাৰে। তাত, আপুনি ফৰ্মটোৰ shortcode কপি কৰাৰ বাবে বা ফৰ্মটো আঁতৰাই পেলাবলৈ বিকল্পো পাব।

![Checkout form hover actions](/img/config/checkout-form-hover-actions.png)

#### Checkout Form Editor Overview

checkout form editor-এ আপোনাৰ registration forms বনাবলৈ এটা বিস্তৃত interface প্ৰদান কৰে। editor-ৰ বিন্যাসৰ এটা এক ঝলক তলত দিয়া হ'ল:

![Checkout Form editor overview](/img/config/checkout-form-editor-overview.png)

### Editing a Checkout Form

আপুনি বিভিন্ন উদ্দেশ্যৰ বাবে checkout forms বনাওঁক পাৰে। এই উদাহৰণত আমি এটা registration form ওপৰত কাম কৰিম।

checkout form editorলৈ যোৱাৰ পিছত, আপোনাৰ ফৰ্মটো এটা নাম (যিটো কেৱল আন্তৰিক প্ৰেৰণাসমূহৰ বাবে ব্যৱহৃত হ'ব) আৰু এটা slug (যিটো shortcakes বনাবলৈ ব্যৱহৃত হয়, উদাহৰণস্বৰূপে) দিয়ক।

![Checkout Form editor](/img/config/checkout-form-editor.png)

forms সমূহ steps আৰু fieldsৰে গঠিত। Add New Checkout Step ক্লিক কৰি আপুনি এটা নতুন step যোগ কৰিব পাৰে।

![Add New Checkout Step](/img/config/checkout-form-add-step.png)

modal window-ৰ প্ৰথম ট্ৰিখনত, আপুনি আপোনাৰ ফৰ্মৰ step-ৰ বিষয়বস্তু ভৰাওক। ইয়াক এটা ID, এটা নাম আৰু এটা description দিয়ক। এই আইটেমবোৰ বেছিভাগেই আন্তৰিকভাৱে ব্যৱহৃত হয়।

![Checkout form step](/img/config/checkout-form-step.png)

পৰৱৰ্তীভাৱে, step-টোৰ visibility সেট কৰক। আপুনি "Always show", "Only show for logged in users" বা "Only show for guests"ৰ মাজত পছন্দ কৰিব পাৰে।

![Checkout form step](/img/config/checkout-form-step.png)

শেষত, step-ৰ style কনফিগাৰ কৰক। এইবোৰ ঐচ্ছিক ফিল্ড।

![Checkout form step](/img/config/checkout-form-step.png)

এতিয়া, আমি আমাৰ প্ৰথম step-লৈ fields যোগ কৰাৰ সময়। Add New Field ক্লিক কৰক আৰু আপুনি কি ধৰণৰ section বিচাৰে সেয়া বাছি লওক।

![Checkout form step with fields](/img/config/checkout-form-step.png)

প্ৰতিটো ফিল্ড ভৰিবলগীয়া বিভিন্ন প‍্যৰামিটাৰৰে গঠিত। এই প্ৰথম প্ৰৱেশৰ বাবে, আমি "Username" ফিল্ডটো বাছি ল'ম।

![Checkout form step](/img/config/checkout-form-step.png)

![Checkout form step](/img/config/checkout-form-step.png)

![Checkout form step](/img/config/checkout-form-step.png)

আপুনি যিমান steps আৰু fields লাগে, সেমান যোগ কৰিব পাৰে। আপোনাৰ কাস্টমৰসকলক বাছি ল'বলৈ আপোনাৰ প্ৰডাক্ট প্ৰদৰ্শন কৰিবলৈ, Pricing Table field ব্যৱহাৰ কৰক। যদি আপুনি আপোনাৰ ক্লায়েন্টক এটা টেমপ্লেট বাছি ল'বলৈ দিব বিচাৰে, তেন্তে Template Selection field যোগ কৰক। আৰু ইয়াৰ দৰে।

![Add New Field dialog](/img/config/checkout-form-add-field-dialog.png)

_**নোট:** username, email, password, site title, site URL, order summary, payment, আৰু submit button হৈছে checkout form বনাবলৈ বাধ্যতামূলক ফিল্ড।_

আপুনি checkout form ওপৰত কাম কৰি থকা সময়ত, আপুনি সদায় Preview বাটনটো ব্যৱহাৰ কৰি কাস্টমৰসকলে ফৰ্মটো কেনেকৈ দেখিব পাৰিব সেয়া চাব পাৰে। আপুনি এটা existing user হিচাপে বা এটা visitor হিচাপেও স্থানান্তৰ কৰিব পাৰে।

![Checkout Form save](/img/config/checkout-form-save.png)

![Checkout Form editor](/img/config/checkout-form-editor.png)

শেষত, Advanced Options ত আপুনি "Thank You" পৃষ্ঠাৰ বাবে message কনফিগাৰ কৰিব পাৰে, conversion ট্র্যাক কৰিবলৈ snippets যোগ কৰিব পাৰে, আপোনাৰ checkout form লৈ custom CSS যোগ কৰিব পাৰে বা ইয়াক কিছুমান দেশৰ বাবে সীমিত কৰিব পাৰে।

![Advanced Options](/img/config/checkout-form-advanced.png)

আপুনিও এই বিকল্পটো টগল কৰি আপোনাৰ checkout form ম্যানুৱেলি enable বা disable কৰিব পাৰে, বা ফৰ্মটো স্থায়ীভাৱে delete কৰিব পাৰে।

![Active toggle](/img/config/checkout-form-active.png)

এটা ফৰ্ম delete কৰিবলৈ, form actions ত থকা delete বিকল্পটো ক্লিক কৰক:

![Checkout form delete option](/img/config/checkout-form-delete.png)

আপোনাৰ checkout form সেভ কৰিবলৈ পাহৰিব নালাগে!

![Save button](/img/config/checkout-form-save.png)

আপোনাৰ ফৰ্মৰ shortcode পাবলৈ Generate Shortcode ক্লিক কৰক আৰু modal window ত দেখুওৱা ফলাফলটো কপি কৰক।

![Save button with shortcode](/img/config/checkout-form-save.png)

### The Pricing Table Field

**Pricing Table** ফিল্ডটোৱে checkout form ওপৰত আপোনাৰ প্ৰডাক্টসমূহ প্ৰদৰ্শন কৰে যাতে কাস্টমৰসকলে এটা plan বাছি ল'ব পাৰে। যেতিয়া আপুনি এই ফিল্ডটো সম্পাদনা কৰে, তেতিয়া আপুনি কেইবাটাও বিকল্প কনফিগাৰ কৰিব পাৰে:

![Pricing Table field settings](/img/config/pricing-table-field-settings.png)

frontend registration form ওপৰত pricing table টো কেনেকৈ দেখায়, সেয়া তলত দিয়া হ'ল:

![Frontend checkout pricing table](/img/config/frontend-checkout-pricing-table.png)

  * **Products**: কোন কোন প্ৰডাক্ট প্ৰদৰ্শন কৰিব আৰু তেওঁলোক কোন ক্ৰমত দেখুৱাব।
  * **Force Different Durations**: ইয়াক enable কৰিলে, বৰ্তমান বাছনি কৰা billing period-ৰ বাবে মিল থকা price variation নাথাকিলেও সকলো প্ৰডাক্ট দেখুৱাই। ইয়াক disable কৰিলে (ডিফল্ট), বাছনি কৰা সময়ৰ বাবে variation নথকা প্ৰডাক্টবোৰ লুকুৱাই থোৱা হয়।
    ![Pricing table force durations option](/img/config/pricing-table-force-durations.png)
  * **Hide when Pre-Selected**: যদি URL-ৰ দ্বাৰা এটা plan ইতিমধ্যে বাছনি কৰা হৈছে (উদাহৰণস্বৰূপে, `/register/premium`), তেন্তে pricing table টো লুকুৱাই থয়।
  * **Pricing Table Template**: pricing table-ৰ বাবে ভিজুৱেল টেমপ্লেট বাছি লওক (Simple List, Legacy, আদি)।

যদি আপুনি ফৰ্মটোৰ checkout flow সম্পন্ন কৰিবলৈ প্ৰয়োজনীয় ফিল্ড অন্তৰ্ভুক্ত হোৱাৰ আগতে Pricing Table ত এটা প্ৰডাক্ট যোগ কৰে, তেন্তে editor-এ এটা warning দেখুৱায়। এই warning ব্যৱহাৰ কৰি লাইভ registration form-ৰ বাবে কোনো ফিল্ড নোহোৱা আছে, সেয়া নিশ্চিত কৰক বা সালসলনি কৰাৰ আগতে যোগ কৰক।

### Adding a Period Selection Toggle

যদি আপুনি আপোনাৰ প্ৰডাক্টসমূহত [Price Variations](creating-your-first-subscription-product#price-variations) কনফিগাৰ কৰিছে (উদাহৰণস্বৰূপে, মাহেকীয়া আৰু বৰ্ষীয় মূল্য), তেন্তে আপুনি checkout form ত এটা **Period Selection** ফিল্ড যোগ কৰিব পাৰে। এই ফিল্ডটোৱে এটা toggle প্ৰদৰ্শন কৰে যি কাস্টমৰসকলক billing period সলনি কৰিবলৈ দিয়ে, আৰু pricing table টো বৰ্তমান সময়ত গতিশীলভাৱে আপডেট হয়।

#### Step 1: Set Up Price Variations on Your Products

Period Selection ফিল্ড যোগ কৰাৰ আগতে, নিশ্চিত কৰক যে আপোনাৰ প্ৰডাক্টসমূহত price variations কনফিগাৰ কৰা আছে। **Ultimate Multisite > Products** লৈ যাওক, এটা প্ৰডাক্ট সম্পাদনা কৰক, আৰু alternate billing periods যোগ কৰিবলৈ **Price Variations** ট্ৰিখনলৈ যাওক (উদাহৰণস্বৰূপে, এটা ছকাণ্ডিঙত মূল্যৰ সৈতে বৰ্ষীয় মূল্য)।

![Price Variations tab on a product](/img/config/product-price-variations-tab.png)

#### Step 2: Add the Period Selection Field to Your Checkout Form

১. **Ultimate Multisite > Checkout Forms** লৈ যাওক আৰু আপোনাৰ checkout form সম্পাদনা কৰক।

২. সেই step-লৈ তললৈ স্ক্ৰল কৰক য'ত আপোনাৰ **Pricing Table** ফিল্ড আছে আৰু **Add new Field** ক্লিক কৰক।

৩. field type selection dialog ত, **Period Select** ক্লিক কৰক।

![Add New Field dialog showing Period Select](/img/config/checkout-form-add-field-dialog.png)

৪. period বিকল্পসমূহ কনফিগাৰ কৰক। প্ৰতিটো বিকল্পৰ বাবে প্ৰয়োজন:
   * **Duration**: সংখ্যাটো (উদাহৰণস্বৰূপে, `1`)
   * **Duration unit**: সময়ৰ ধৰণ (Days, Weeks, Months, বা Years)
   * **Label**: কাস্টমৰসকলে দেখিবলগীয়া পাঠ্য (উদাহৰণস্বৰূপে, "Monthly", "Annual")

৫. অধিক period পছন্দ যোগ কৰিবলৈ **+ Add Option** ক্লিক কৰক। এই বিকল্পবোৰ আপুনি আপোনাৰ প্ৰডাক্টসমূহত কনফিগাৰ কৰা price variations লগত মিল থকাটো হ'ব লাগিব।

![Period Selection field settings](/img/config/period-selection-field-settings.png)

আপুনি ফিল্ড বিকল্পসমূহো পোনপটীয়াকৈ কনফিগাৰ কৰিব পাৰে:

<!-- Screenshot unavailable: Period selection field options -->

৬. এটা **Period Selector Template** বাছি লওক (Clean হৈছে ডিফল্ট, যিটো custom CSS-ৰ বাবে এটা সহজ style-যুক্ত selector প্ৰদৰ্শন কৰে)।

৭. **Save Field** ক্লিক কৰক।

#### Step 3: Position the Field Above the Pricing Table

সবচেয়ে ভাল user experience-ৰ বাবে, নিশ্চিত কৰক যে Period Selection ফিল্ডটো checkout step-ত Pricing Table ফিল্ডৰ **আগে** দেখুৱায়। আপুনি checkout form editor-ত ফিল্ডসমূহক পুনৰ সজ্জিত কৰিবলৈ তেওঁলোকক ট্ৰাগ কৰিব পাৰে। এনেদৰে, কাস্টমৰসকলে প্ৰথমে এটা billing period বাছি লয় আৰু তাৰ পিছত সেই সময়ৰ বাবে মূল্য দেখিব পাৰে।

![Checkout form editor showing field order](/img/config/checkout-form-editor-with-fields.png)

#### How It Works on the Frontend

কনফিগাৰ কৰাৰ পিছত, আপোনাৰ registration page লৈ অহা কাস্টমৰসকলে pricing tableৰ ওপৰত period selector দেখিব। যেতিয়া তেওঁলোকে এটা বেলেগ billing period ক্লিক কৰে:

  * pricing table টো তাৎক্ষণিকভাৱে বাছনি কৰা সময়ৰ বাবে মূল্য দেখুৱাবলৈ আপডেট হয় (page reload কৰাৰ প্ৰয়োজন নহয়)।
  * যদি Pricing Table ফিল্ডত **Force Different Durations** disable কৰা থাকে, তেন্তে বাছনি কৰা সময়ৰ বাবে price variation নথকা প্ৰডাক্টবোৰ লুকুৱাই থোৱা হ'ব।
  * যদি **Force Different Durations** enable কৰা থাকে, তেন্তে সকলো প্ৰডাক্ট দৃশ্যমান থাকে যদিও তেওঁলোকৰ বাবে বাছনি কৰা সময়ৰ বাবে variation নাথাকে (তেওঁলোকে তেওঁলোকৰ ডিফল্ট মূল্য দেখুৱাব)।

#### Pre-selecting a Billing Period via URL

আপুনি URL-ৰ জৰিয়তে এটা প্ৰডাক্ট আৰু billing periodো pre-select কৰিব পাৰে। Ultimate Multisite এই URL pattern সমূহক সমৰ্থন কৰে:

  * `/register/premium` — কেৱল "Premium" প্ৰডাক্টটো pre-select কৰে
  * `/register/premium/12` — প্ৰডাক্টটো আৰু ১২-মাহৰ সময়কাল pre-select কৰে
  * `/register/premium/1/year` — ১-বছৰৰ সময়কাল লৈ প্ৰডাক্টটো pre-select কৰে

### The Template Selection Field

**Template Selection** ফিল্ডটোৱে কাস্টমৰসকলক checkout সময়ত এটা site template বাছি ল'বলৈ দিয়ে। Ultimate Multisite v2.6.1 ত যোগ কৰা **single step** আৰু **multi-step** checkout form template সমূহৰ ডিফল্টভাৱে ইয়াক অন্তৰ্ভুক্ত কৰা হৈছে।

#### Adding the field manually

যদি আপুনি v2.6.1 পূৰ্বে বনা পোৱা ফৰ্মৰ লগত কাম কৰি আছে, বা blank templateৰ পৰা আৰম্ভ কৰিছে:

১. **Ultimate Multisite > Checkout Forms** লৈ যাওক আৰু আপোনাৰ checkout form সম্পাদনা কৰক।
২. site details সংগ্ৰহ কৰা step-ত, **Add new Field** ক্লিক কৰক।
৩. field type dialog ত **Template Selection** বাছি লওক।
৪. ফিল্ডটো কনফিগাৰ কৰক:
   - **Label** — টেমপ্লেট gridৰ ওপৰত কাস্টমৰসকলে দেখিবলগীয়া heading (উদাহৰণস্বৰূপে, "Choose a site template")।
   - **Required** — কাস্টমৰসকলে আগুৱাই যোৱাৰ আগতে এটা টেমপ্লেট বাছি ল'ব লাগিব নে নাই।

#### How it works

যেতিয়া কোনো কাস্টমৰে checkout সময়ত এটা টেমপ্লেট বাছি লয়, Ultimate Multisite ই তেওঁৰ নতুন site provision কৰাৰ সময়ত ইয়াক ব্যৱহাৰ কৰে। দেখুওৱা টেমপ্লেটবোৰ আপোনাৰ **Site Templates** তালিকাৰ পৰা আহে (**Ultimate Multisite > Site Templates**)। কেৱল কাস্টমৰসকলৰ বাবে উপলব্ধ বুলি চিহ্নিত টেমপ্লেটবোৰ ইয়াত দেখুৱায়।

#### Removing the field

যদি আপুনি site template অফাৰ নকৰে, তেন্তে আপোনাৰ ফৰ্মৰ পৰা Template Selection ফিল্ডটো আঁতৰাই পেলাক। কাস্টমৰসকলে তেতিয়া **Ultimate Multisite > Settings > Site Templates** ত কনফিগাৰ কৰা যি কোনো ডিফল্ট টেমপ্লেট লাভ কৰিব।
