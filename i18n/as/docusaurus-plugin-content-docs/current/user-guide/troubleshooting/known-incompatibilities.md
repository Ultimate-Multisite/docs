---
title: জানা থকা বেমানপৰীৰ্থকতা
sidebar_position: 15
_i18n_hash: 93136dc6fe62867e55f770e7b74473e8
---
# আন প্লাগইনৰ সৈতে জনা incompatibilities {#known-incompatibilities-with-other-plugins}

Ultimate Multisite install আৰু activate কৰাৰ পিছত, আন প্লাগইনৰ সৈতে থকা কিছুমান অসঙ্গতিৰ বাবে আপুনি সমস্যাৰ সন্মুখীন হ'ব পাৰে।

আমি প্ৰতিটো নতুন release লৈ এই তালিকাখন কমাৰ বাবে সক্ৰিয়ভাৱে কাম কৰি আছো, কিন্তু যদি কোনো প্লাগইন ইয়াত তালিকাভুক্ত কৰা হৈছে, তেন্তে এটা সম্পূৰ্ণ কাৰ্য্যক্ষম Ultimate Multisite Network বজাই ৰাখিবলৈ আপুনি ইয়াক deactivate কৰিব লাগিব।

তলত এই প্লাগইনসমূহৰ তালিকা আৰু এই ক্ষেত্ৰত আপুনি কি কৰিব লাগে, তাৰ কথা দিয়া হ'ল:

**কিছু WPMU DEV প্লাগইন** WPMU DEV ত _বেছিদিন ধৰি_ মেইনটেইন নোহোৱা কিছুমান প্লাগইন Ultimate Multisite ৰ registration flow लाई শেষ ধাপত (user-এ account সৃষ্টি কৰিব নোৱাৰা) ৰখিবলৈ বাধ্য কৰে। এই সমস্যা সৃষ্টি কৰা প্লাগইনসমূহৰ তালিকা তলত দিয়া হ'ল:

  * Signup Language: _Ultimate Multisite-ৰ এটা add-on আছে যিয়ে একে ধৰণৰ কাৰ্য্যক্ষমতা দিয়ে, যাৰ নাম হৈছে Ultimate Multisite: Language Switcher._

  * Set Blog Description on Blog Creation: _এইটো Ultimate Multisite-ৰ ভিতৰতহে আছে, গতিকে আন কোনো প্লাগইনৰ প্ৰয়োজন নাই._

  * New Blog Templates: _এইটো Ultimate Multisite-ৰ ভিতৰতহে আছে, গতিকে আন কোনো প্লাগইনৰ প্ৰয়োজন নাই._

  * Set Password on Multisite Blog Creation: _এইটো Ultimate Multisite-ৰ ভিতৰতহে আছে, গতিকে আন কোনো প্লাগইনৰ প্ৰয়োজন নাই._

  * Signup TOS: _এইটো Ultimate Multisite-ৰ ভিতৰতহে আছে, গতিকে আন কোনো প্লাগইনৰ প্ৰয়োজন নাই._

  * Anti-Splog: যদিও ই কম শক্তিশালী, তথাপিও এইটো _Ultimate Multisite-ৰ ভিতৰতহে আছে._

**নোট** : WPMU Dev ৰ বাকী সকলো প্লাগইন Ultimate Multisite ৰ সৈতে সাধাৰণভাৱে ব্যৱহাৰ কৰিব পাৰি। উদাহৰণস্বৰূপে _Smush_ , _Forminator_ , _Defender,_ আদি।
