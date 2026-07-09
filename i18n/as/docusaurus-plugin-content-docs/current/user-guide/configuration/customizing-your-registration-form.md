---
title: আপোনাৰ পঞ্জীয়ন প্ৰপত্ৰ অনুকূলিত কৰা
sidebar_position: 17
_i18n_hash: 3dada0e900a1f46d950e1815ae8f5085
---
# আপোনাৰ পঞ্জীয়ন ফৰ্ম কাষ্টমাইজ কৰা

WordPress প্লেটফৰ্মত নিৰ্মিত আন সকলো SaaS-ৰ পৰা আপোনাৰ নেটৱৰ্কক অনন্য দেখুৱাবলৈ, Ultimate Multisite-এ আমাৰ **Checkout Forms** বৈশিষ্ট্যৰ সৈতে আপোনাৰ পঞ্জীয়ন আৰু লগইন পৃষ্ঠাসমূহ কাষ্টমাইজ কৰিবলৈ দিয়ে।

যদিও নতুন গ্ৰাহকক ৰূপান্তৰ কৰিবলৈ চেষ্টা কৰাৰ সময়ত বিভিন্ন পদ্ধতিৰ সৈতে পৰীক্ষা-নিৰীক্ষা কৰাৰ বাবে এইবোৰ সহজ আৰু নমনীয় উপায়, এইবোৰ মুখ্যত ব্যক্তিগতকৃত পঞ্জীয়ন ফৰ্ম সৃষ্টি কৰিবলৈ ব্যৱহাৰ কৰা হয়। এই প্ৰবন্ধৰ লক্ষ্য হৈছে আপুনি ইয়াক কেনেকৈ কৰিব পাৰে দেখুৱোৱা।

## লগইন আৰু পঞ্জীয়ন পৃষ্ঠাসমূহ:

Ultimate Multisite ইনষ্টল কৰাৰ লগে লগে, ই আপোনাৰ মুখ্য ছাইটত স্বয়ংক্ৰিয়ভাৱে কাষ্টম লগইন আৰু পঞ্জীয়ন পৃষ্ঠা সৃষ্টি কৰে। আপুনি যিকোনো সময়তে আপোনাৰ **Ultimate Multisite > Settings > Login & Registration** পৃষ্ঠাৰ অন্তৰ্গত গৈ এই ডিফল্ট পৃষ্ঠাসমূহ সলনি কৰিব পাৰে।

![লগইন আৰু পঞ্জীয়ন ছেটিংছ পৃষ্ঠা](/img/config/settings-general.png)

ইয়াত লগইন আৰু পঞ্জীয়ন ছেটিংছ পৃষ্ঠাৰ সম্পূৰ্ণ দৃশ্য দিয়া হৈছে:

![লগইন আৰু পঞ্জীয়ন ছেটিংছ সম্পূৰ্ণ পৃষ্ঠা](/img/config/settings-login-registration-full.png)

**Login & Registration** পৃষ্ঠাত আপুনি কাষ্টমাইজ কৰিব পৰা প্ৰতিটো বিকল্প চাওঁ আহক:

  * **Enable registration:** এই বিকল্পই আপোনাৰ নেটৱৰ্কত পঞ্জীয়ন সক্ষম বা নিষ্ক্ৰিয় কৰিব। যদি ইয়াক বন্ধ কৰা হয়, আপোনাৰ গ্ৰাহকসকলে পঞ্জীয়ন কৰিব নোৱাৰিব আৰু আপোনাৰ প্ৰডাক্টসমূহত সাবস্ক্ৰাইব কৰিব নোৱাৰিব।

  * **Enable email verification:** যদি এই বিকল্প অন কৰা হয়, বিনামূলীয়া প্লেন বা ট্ৰায়েল সময়সীমাসহ পেইড প্লেনত সাবস্ক্ৰাইব কৰা গ্ৰাহকসকলে এটা যাচাইকৰণ ইমেইল লাভ কৰিব আৰু তেওঁলোকৰ ৱেবছাইট সৃষ্টি হ’বলৈ যাচাইকৰণ লিংকত ক্লিক কৰিব লাগিব।

  * **Default registration page:** এইটো পঞ্জীয়নৰ বাবে ডিফল্ট পৃষ্ঠা। এই পৃষ্ঠাটো আপোনাৰ ৱেবছাইটত প্ৰকাশিত হ’ব লাগিব আৰু ইয়াত এটা পঞ্জীয়ন ফৰ্ম (checkout form বুলিও জনা যায়) থাকিব লাগিব - য’ত আপোনাৰ ক্লায়েন্টসকলে আপোনাৰ প্ৰডাক্টসমূহত সাবস্ক্ৰাইব কৰিব। আপুনি যিমান বিচাৰে সিমান পঞ্জীয়ন পৃষ্ঠা আৰু checkout forms সৃষ্টি কৰিব পাৰে, কেৱল পঞ্জীয়ন পৃষ্ঠাত checkout form shortcode ৰাখিবলৈ মনত ৰাখিব, নহ’লে ই দেখা নাযাব।

  * **Use custom login page:** এই বিকল্পই আপোনাক ডিফল্ট wp-login.php পৃষ্ঠাৰ বাহিৰে এটা কাষ্টমাইজ কৰা লগইন পৃষ্ঠা ব্যৱহাৰ কৰিবলৈ দিয়ে। যদি এই বিকল্প অন কৰা হয়, আপুনি **Default login page** বিকল্পত (ঠিক তলত) লগইনৰ বাবে কোনটো পৃষ্ঠা ব্যৱহাৰ কৰা হ’ব নিৰ্বাচন কৰিব পাৰে।

  * **Obfuscate the original login url (wp-login.php)** : যদি আপুনি মূল লগইন URL লুকুৱাব বিচাৰে, আপুনি এই বিকল্প অন কৰিব পাৰে। brute-force আক্ৰমণ প্ৰতিহত কৰিবলৈ এইটো উপযোগী। যদি এই বিকল্প সক্ষম কৰা হয়, কোনো ব্যৱহাৰকাৰীয়ে মূল wp-login.php লিংকত প্ৰৱেশ কৰিবলৈ চেষ্টা কৰিলে Ultimate Multisite-এ 404 ত্ৰুটি দেখুৱাব

  * **Force synchronous site publication:** কোনো গ্ৰাহকে নেটৱৰ্কত কোনো প্ৰডাক্টত সাবস্ক্ৰাইব কৰাৰ পিছত, নতুন pending ছাইটটো এটা প্ৰকৃত নেটৱৰ্ক ছাইটলৈ ৰূপান্তৰ কৰিব লাগে। প্ৰকাশন প্ৰক্ৰিয়াটো Job Queue-ৰ জৰিয়তে, asynchronously ঘটে। signup-ৰ একেটা request-তে প্ৰকাশন ঘটিবলৈ বাধ্য কৰিবলৈ এই বিকল্প সক্ষম কৰক।

এতিয়া, লগইন আৰু পঞ্জীয়ন প্ৰক্ৰিয়াৰ সৈতে এতিয়াও সম্পৰ্কিত আন বিকল্পসমূহ চাওঁ আহক। সেইবোৰ একেটা Login & registration পৃষ্ঠাৰ **Other options**-ৰ ঠিক তলত আছে:

  * **Default role:** signup প্ৰক্ৰিয়াৰ পিছত আপোনাৰ গ্ৰাহকসকলে তেওঁলোকৰ ৱেবছাইটত লাভ কৰা ভূমিকা এইটো।

  * **Enable Jumper:** admin area-ত Jumper shortcut সক্ষম কৰে। Jumper-এ প্ৰশাসকসকলক প্ৰতিটো মেনু ব্ৰাউজ নকৰাকৈ Ultimate Multisite স্ক্ৰীন, নেটৱৰ্ক objects, আৰু অন্যান্য সমৰ্থিত গন্তব্যস্থানলৈ দ্ৰুতভাৱে যাবলৈ দিয়ে। যদি আপুনি admin interface-ৰ পৰা সেই দ্ৰুত navigation tool লুকুৱাব বিচাৰে, ইয়াক বন্ধ কৰক।

  * **Add users to the main site as well:** এই বিকল্প সক্ষম কৰিলে signup প্ৰক্ৰিয়াৰ পিছত ব্যৱহাৰকাৰীক আপোনাৰ নেটৱৰ্কৰ মুখ্য ছাইটতো যোগ কৰা হ’ব। যদি আপুনি এই বিকল্প সক্ষম কৰে, আপোনাৰ ৱেবছাইটত এই ব্যৱহাৰকাৰীসকলৰ **default role** ছেট কৰাৰ এটা বিকল্পও ঠিক তলত দেখা যাব।

  * **Enable multiple accounts:** একেটা ইমেইল ঠিকনাৰে ব্যৱহাৰকাৰীসকলক আপোনাৰ নেটৱৰ্কৰ বিভিন্ন ছাইটত Account থাকিবলৈ অনুমতি দিয়ক। যদি এই বিকল্প বন্ধ থাকে, আপোনাৰ গ্ৰাহকসকলে একেটা ইমেইল ঠিকনাৰে আপোনাৰ নেটৱৰ্কত চলি থকা আন ৱেবছাইটত Account সৃষ্টি কৰিব নোৱাৰিব।

আৰু এইখিনিয়েই হৈছে লগইন আৰু পঞ্জীয়নৰ সৈতে সম্পৰ্কিত সকলো বিকল্প যিবোৰ আপুনি কাষ্টমাইজ কৰিব পাৰে! সম্পাদনা শেষ কৰাৰ পিছত আপোনাৰ ছেটিংছ সংৰক্ষণ কৰিবলৈ নাপাহৰিব।

## একাধিক পঞ্জীয়ন ফৰ্ম ব্যৱহাৰ কৰা:

Ultimate Multisite 2.0-এ এটা checkout form editor আগবঢ়ায় যিয়ে আপোনাক বিভিন্ন field, অফাৰত থকা প্ৰডাক্ট আদি সহ যিমান বিচাৰে সিমান ফৰ্ম সৃষ্টি কৰিবলৈ দিয়ে।

লগইন আৰু পঞ্জীয়ন দুয়োটা পৃষ্ঠাই shortcode-ৰ সৈতে embed কৰা আছে: লগইন পৃষ্ঠাত **[wu_login_form]** আৰু পঞ্জীয়ন পৃষ্ঠাৰ বাবে**[wu_checkout]**। আপুনি checkout forms নিৰ্মাণ বা সৃষ্টি কৰি পঞ্জীয়ন পৃষ্ঠাটো আৰু অধিক কাষ্টমাইজ কৰিব পাৰে।

এই বৈশিষ্ট্যত প্ৰৱেশ কৰিবলৈ, বাওঁফালৰ side-bar-ত থকা **Checkout Forms** মেনুলৈ যাওক।

![sidebar-ত Checkout Forms মেনু](/img/config/checkout-forms-list.png)

এই পৃষ্ঠাত, আপোনাৰ থকা সকলো checkout forms আপুনি চাব পাৰে।

যদি আপুনি নতুন এটা সৃষ্টি কৰিব বিচাৰে, পৃষ্ঠাৰ ওপৰত থকা **Add Checkout Form**-ত মাত্ৰ ক্লিক কৰক।

আপুনি আপোনাৰ আৰম্ভণি বিন্দু হিচাপে এই তিনিটা বিকল্পৰ এটা নিৰ্বাচন কৰিব পাৰে: single step, multi-step বা blank। তাৰ পিছত, **Go to the Editor**-ত ক্লিক কৰক।

![single step, multi-step, বা blank বিকল্পসহ Add Checkout Form](/img/config/checkout-forms-list.png)

বিকল্পভাৱে, ইয়াৰ নামৰ তলত থকা বিকল্পসমূহত ক্লিক কৰি আপুনি ইতিমধ্যে থকা ফৰ্মসমূহ সম্পাদনা বা duplicate কৰিব পাৰে। তাত, আপুনি ফৰ্মৰ shortcode কপি কৰাৰ বা ফৰ্ম মচি পেলোৱাৰ বিকল্পসমূহো পাব।

![edit, duplicate, আৰু delete সহ Checkout form hover actions](/img/config/checkout-form-hover-actions.png)

যদি আপুনি single step বা multi-step নিৰ্বাচন কৰে, checkout formটো কাম কৰিবলৈ প্ৰয়োজনীয় মূল steps-ৰে আগতেই pre-populated হৈ থাকিব। তাৰ পিছত, যদি আপুনি বিচাৰে, আপুনি ইয়াত অতিৰিক্ত steps যোগ কৰিব পাৰে।

### Checkout Form সম্পাদনা কৰা:

আগতে উল্লেখ কৰাৰ দৰে, আপুনি বিভিন্ন উদ্দেশ্যৰ বাবে checkout forms সৃষ্টি কৰিব পাৰে। এই উদাহৰণত আমি এটা পঞ্জীয়ন ফৰ্মত কাম কৰিম।

checkout form editor-লৈ যোৱাৰ পিছত, আপোনাৰ ফৰ্মক এটা নাম দিয়ক (যিটো কেৱল আভ্যন্তৰীণ reference-ৰ বাবে ব্যৱহাৰ কৰা হ’ব) আৰু এটা slug দিয়ক (উদাহৰণস্বৰূপে, shortcakes সৃষ্টি কৰিবলৈ ব্যৱহৃত)।

![নাম আৰু slug ক্ষেত্ৰৰ সৈতে checkout form সম্পাদক](/img/config/checkout-form-name-slug.png)

Form-সমূহ পদক্ষেপ আৰু ক্ষেত্ৰৰে গঠিত। আপুনি **নতুন Checkout পদক্ষেপ যোগ কৰক**-ত ক্লিক কৰি এটা নতুন পদক্ষেপ যোগ কৰিব পাৰে।

![নতুন Checkout পদক্ষেপ যোগ কৰক বুটাম](/img/config/checkout-form-add-step.png)

modal window-ৰ প্ৰথম tab-ত, আপোনাৰ form-ৰ পদক্ষেপৰ বিষয়বস্তু পূৰণ কৰক। ইয়াক এটা ID, এটা নাম আৰু এটা বিৱৰণ দিয়ক। এই বস্তুবোৰ বেছিভাগে আভ্যন্তৰীণভাৱে ব্যৱহৃত হয়।

![ID, নাম, আৰু বিৱৰণৰ সৈতে Checkout পদক্ষেপ বিষয়বস্তু tab](/img/config/checkout-form-step-content.png)

তাৰ পিছত, পদক্ষেপটোৰ দৃশ্যমানতা নিৰ্ধাৰণ কৰক। আপুনি **সদায় দেখুৱাওক** , **কেৱল logged in ব্যৱহাৰকাৰীৰ বাবে দেখুৱাওক** বা **কেৱল অতিথিৰ বাবে দেখুৱাওক**-ৰ মাজত বাছনি কৰিব পাৰে।

![Checkout পদক্ষেপ দৃশ্যমানতা বিকল্পসমূহ](/img/config/checkout-form-step-visibility.png)

শেষত, পদক্ষেপৰ style configure কৰক। এইবোৰ ঐচ্ছিক ক্ষেত্ৰ।

![Checkout পদক্ষেপ style configuration](/img/config/checkout-form-step-style.png)

এতিয়া, আমাৰ প্ৰথম পদক্ষেপত ক্ষেত্ৰ যোগ কৰাৰ সময়। কেৱল **নতুন ক্ষেত্ৰ যোগ কৰক**-ত ক্লিক কৰক আৰু আপুনি বিচৰা section-ৰ প্ৰকাৰ বাছনি কৰক।

![নতুন ক্ষেত্ৰ যোগ কৰক বুটাম](/img/config/checkout-form-add-field-button.png)![ক্ষেত্ৰৰ প্ৰকাৰ নিৰ্বাচন dropdown](/img/config/checkout-form-field-type-dropdown.png)

প্ৰতিটো ক্ষেত্ৰত পূৰণ কৰিবলগীয়া ভিন্ন parameter থাকে। এই প্ৰথম প্ৰৱেশৰ বাবে, আমি **ব্যৱহাৰকাৰীনাম** ক্ষেত্ৰ বাছনি কৰিম।

![ব্যৱহাৰকাৰীনাম ক্ষেত্ৰ configuration](/img/config/checkout-form-username-content.png)![ব্যৱহাৰকাৰীনাম ক্ষেত্ৰ parameter-সমূহ](/img/config/checkout-form-username-visibility.png)![ব্যৱহাৰকাৰীনাম ক্ষেত্ৰৰ অতিৰিক্ত settings](/img/config/checkout-form-username-style.png)

আপোনাৰ প্ৰয়োজন অনুসৰি আপুনি যিমান পদক্ষেপ আৰু ক্ষেত্ৰ লাগে সিমান যোগ কৰিব পাৰে। আপোনাৰ গ্ৰাহকসকলে এটা বাছনি কৰিবলৈ আপোনাৰ পণ্যসমূহ দেখুৱাবলৈ, মূল্য নিৰ্ধাৰণ তালিকা ক্ষেত্ৰ ব্যৱহাৰ কৰক। যদি আপুনি আপোনাৰ client-সকলক এটা template বাছনি কৰিবলৈ দিব বিচাৰে, Template Selection ক্ষেত্ৰ যোগ কৰক। আৰু এনেকৈয়ে।

![template selection ক্ষেত্ৰৰ সৈতে Checkout form সম্পাদক](/img/config/checkout-form-with-template-field.png)

_**টোকা:** যদি আপুনি আপোনাৰ checkout form সৃষ্টি কৰাৰ পিছত এটা পণ্য সৃষ্টি কৰে, তেন্তে আপুনি পণ্যটো মূল্য নিৰ্ধাৰণ তালিকা section-ত যোগ কৰিব লাগিব। যদি আপুনি ইয়াক যোগ নকৰে, পণ্যটো registration page-ত আপোনাৰ গ্ৰাহকসকলৰ বাবে দেখা নাযাব।_

_**টোকা ২:** ব্যৱহাৰকাৰীনাম, email, password, site title, site URL, order summary, payment, আৰু submit button checkout form সৃষ্টি কৰিবলৈ বাধ্যতামূলক ক্ষেত্ৰ।_

আপুনি আপোনাৰ checkout form-ত কাম কৰি থাকোঁতে, আপোনাৰ client-সকলে form-টো কেনেকৈ দেখিব সেয়া চাবলৈ আপুনি সদায় Preview button ব্যৱহাৰ কৰিব পাৰে। আপুনি বিদ্যমান ব্যৱহাৰকাৰী বা visitor হিচাপে view কৰাৰ মাজতো সলনি কৰিব পাৰে।

![checkout form সম্পাদকত Preview button](/img/config/checkout-form-preview-button.png)![visitor বা বিদ্যমান ব্যৱহাৰকাৰী হিচাপে Checkout form preview](/img/config/checkout-form-preview-modal.png)

শেষত, **উন্নত বিকল্পসমূহ**-ত আপুনি **Thank You** page-ৰ বাবে message configure কৰিব পাৰে, conversion track কৰিবলৈ snippets যোগ কৰিব পাৰে, আপোনাৰ checkout form-ত custom CSS যোগ কৰিব পাৰে বা ইয়াক নিৰ্দিষ্ট দেশলৈ সীমাবদ্ধ কৰিব পাৰে।

![Thank You page, conversion tracking, আৰু custom CSS-ৰ সৈতে উন্নত বিকল্পসমূহ](/img/config/checkout-form-advanced.png)

আপুনি সোঁফালৰ column-ত এই option toggle কৰি আপোনাৰ checkout form manually enable বা disable কৰিব পাৰে, বা form-টো স্থায়ীভাৱে delete কৰিব পাৰে।

![Checkout form-ৰ বাবে active toggle আৰু delete option](/img/config/checkout-form-active.png)

আপোনাৰ checkout form save কৰিবলৈ নাপাহৰিব!

![Checkout Form save কৰক বুটাম](/img/config/checkout-form-save.png)

আপোনাৰ form-ৰ shortcode পাবলৈ **Shortcode Generate কৰক**-ত ক্লিক কৰক আৰু modal window-ত দেখুওৱা ফলাফল copy কৰক।

![copy কৰিবলৈ shortcode-ৰ সৈতে Generate Shortcode modal](/img/config/checkout-form-editor.png)

_**টোকা:** এই checkout form-টো আপোনাৰ registration page-ত যোগ হ’বলৈ আপুনি এই shortcode আপোনাৰ registration page-ত যোগ কৰিব লাগিব।_

## URL parameter-ৰ জৰিয়তে পণ্য আৰু template আগতীয়াকৈ বাছনি কৰা:

যদি আপুনি আপোনাৰ পণ্যসমূহৰ বাবে customized pricing table সৃষ্টি কৰিব বিচাৰে আৰু আপোনাৰ pricing table বা templates page-ৰ পৰা আপোনাৰ গ্ৰাহকে বাছনি কৰা পণ্য বা template checkout form-ত আগতীয়াকৈ বাছনি কৰিব বিচাৰে, তেন্তে ইয়াৰ বাবে আপুনি URL parameter ব্যৱহাৰ কৰিব পাৰে।

### **plan-ৰ বাবে:**

**Ultimate Multisite > Products > এটা plan বাছনি কৰক**-লৈ যাওক। আপুনি page-ৰ ওপৰত **Shareable Link copy কৰিবলৈ ক্লিক কৰক** বুটাম দেখা উচিত। এইটোৱেই সেই link যিটো আপুনি আপোনাৰ checkout form-ত এই নিৰ্দিষ্ট plan আগতীয়াকৈ বাছনি কৰিবলৈ ব্যৱহাৰ কৰিব পাৰে।

![shareable link বুটামৰ সৈতে পণ্য page](/img/config/products-list.png)

মন কৰক যে এই shareable link কেৱল **Plans**-ৰ বাবে বৈধ। আপুনি package বা service-ৰ বাবে shareable link ব্যৱহাৰ কৰিব নোৱাৰে।

### template-ৰ বাবে:

যদি আপুনি আপোনাৰ checkout form-ত site template আগতীয়াকৈ বাছনি কৰিব বিচাৰে, আপুনি আপোনাৰ registration page URL-ত এই parameter ব্যৱহাৰ কৰিব পাৰে: **?template_id=X**। "X"-টো **site template ID number**-ৰে সলনি কৰিব লাগিব। এই number পাবলৈ, **Ultimate Multisite > Sites**-লৈ যাওক।

আপুনি ব্যৱহাৰ কৰিব বিচৰা site template-ৰ ঠিক তলত **Manage**-ত ক্লিক কৰক। আপুনি SITE ID number দেখিব। এই নিৰ্দিষ্ট site template আপোনাৰ checkout form-ত আগতীয়াকৈ বাছনি কৰিবলৈ কেৱল এই number ব্যৱহাৰ কৰক। ইয়াত আমাৰ ক্ষেত্ৰত, URL parameter হ’ব **?template_id=2**।

![site template ID দেখুওৱা Sites list](/img/config/site-templates-list.png)

ধৰি লওক আমাৰ network website হৈছে [**www.mynetwork.com**](http://www.mynetwork.com) আৰু আমাৰ checkout form থকা registration page-টো **/register** page-ত অৱস্থিত। এই site template আগতীয়াকৈ বাছনি কৰা সম্পূৰ্ণ URL-টো এনেকুৱা দেখা যাব [**www.mynetwork.com/register/?template**](http://www.mynetwork.com/register/?template)**_id=2**।

আৰু যদি আপুনি বিচাৰে, আপুনি আপোনাৰ checkout form-ত পণ্য আৰু template দুয়োটাই আগতীয়াকৈ বাছনি কৰিব পাৰে। আপুনি কৰিবলগীয়া একমাত্ৰ কাম হৈছে plan-ৰ shareable link copy কৰি শেষত template parameter paste কৰা। ই এনেকুৱা দেখা যাব [**www.mynetwork.com/register/premium-plan/?template**](http://www.mynetwork.com/register/premium-plan/?template)**_id=2**।
