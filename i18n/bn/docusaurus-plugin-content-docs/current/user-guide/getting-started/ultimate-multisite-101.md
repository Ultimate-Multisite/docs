---
title: Ultimate Multisite ১০১
sidebar_position: 10
_i18n_hash: 031ea0b6a4b8709559485159811f6b31
---
# Ultimate Multisite ১০১

Ultimate Multisite হলো একটি WordPress Multisite প্লাগইন যা আপনাকে গ্রাহকদের জন্য WaaS বা Websites as a Service অফার করতে সক্ষম করে। Ultimate Multisite কীভাবে আপনার ব্যবসা এবং গ্রাহকদের সাহায্য করতে পারে সেটা জানার আগে, আমাদের কিছু মৌলিক বিষয় বুঝে নিতে হবে।

## WordPress Multisite

আমাদের বেশিরভাগই সাধারণ WordPress ইনস্টলেশনের সাথে পরিচিত। আপনি হয়তো হোস্টিং প্রোভাইডারের কন্ট্রোল প্যানেল থেকে এটি তৈরি করেন অথবা, সাহসীদের জন্য, নতুন একটি ওয়েব সার্ভার ও ডাটাবেস সেট আপ করে, কোর ফাইলগুলো ডাউনলোড করে ইনস্টলেশন প্রক্রিয়া শুরু করেন।

এটি সারা বিশ্বে লক্ষ লক্ষ WordPress সাইটের জন্য কাজ করে, কিন্তু একটি এজেন্সি বা হোস্টিং প্রোভাইডারের দৃষ্টিকোণ থেকে আসুন একটু সংখ্যার দিকে তাকাই।

একটি WordPress সাইট বা এমনকি একটি অটোমেটেড কন্ট্রোল প্যানেলের মাধ্যমে শতাধিক সাইট তৈরি করা খুবই সহজ, কিন্তু এই সাইটগুলো পরিচালনার ক্ষেত্রে সমস্যা দেখা দিতে শুরু করে। পরিচালনা না করলে আপনি ম্যালওয়্যারের সহজ শিকার হয়ে যাবেন। আবার পরিচালনা করতে গেলে প্রচুর শ্রম ও সম্পদ ব্যয় করতে হয় এবং যদিও WordPress সাইট পরিচালনা ও প্রশাসনকে সহজ করতে বাহ্যিক টুল এবং প্লাগইন রয়েছে, তবুও গ্রাহকদের হাতে প্রশাসনিক অ্যাক্সেস থাকায় এই প্রচেষ্টাগুলো সহজেই ব্যর্থ হতে পারে।

WordPress-এর কোরে 'Multisite' নামে একটি ফিচার আছে যা ২০১০ সালে WordPress 3.0 লঞ্চের সময় থেকে শুরু হয়েছিল। তারপর থেকে নতুন ফিচার যোগ এবং নিরাপত্তা জোরদার করতে এটি বেশ কয়েকটি আপডেট পেয়েছে।

সহজ ভাষায়, WordPress multisite-কে এভাবে ভাবুন: একটি বিশ্ববিদ্যালয় WordPress-এর একটি মাত্র ইনস্টলেশন রাখে কিন্তু প্রতিটি বিভাগ তাদের নিজস্ব WordPress সাইট পরিচালনা করে।

এই বিবৃতিটি ভেঙে বুঝতে আসুন কিছু মৌলিক পরিভাষা দেখি যা শুধু Ultimate Multisite-এর ডকুমেন্টেশনেই নয়, সমগ্র WordPress কমিউনিটিতে ব্যবহৃত হয়।

### নেটওয়ার্ক

WordPress-এ, একটি multisite network হলো যেখানে একাধিক সাবসাইট একটি একক dashboard থেকে পরিচালনা করা যায়। যদিও হোস্টিং প্রোভাইডার অনুযায়ী multisite network তৈরি করার পদ্ধতি ভিন্ন হয়, শেষ ফলাফল সাধারণত wp-config.php ফাইলে কিছু অতিরিক্ত নির্দেশনা যোগ করা যা WordPress-কে জানায় যে এটি এই নির্দিষ্ট মোডে কাজ করছে।

একটি multisite network এবং একটি স্বতন্ত্র WordPress ইনস্টলেশনের মধ্যে বেশ কিছু সুস্পষ্ট পার্থক্য রয়েছে যা আমরা সংক্ষেপে আলোচনা করব।

#### Subdomain বনাম Subdirectory

প্রথমেই আপনাকে একটি গুরুত্বপূর্ণ সিদ্ধান্ত নিতে হবে যে multisite ইনস্টলেশন _subdirectory_ নাকি _subdomain_ দিয়ে কাজ করবে। Ultimate Multisite উভয় পছন্দের সাথেই সমানভাবে ভালো কাজ করে কিন্তু দুটি কনফিগারেশনের মধ্যে কিছু স্থাপত্যগত পার্থক্য রয়েছে।

_Subdirectory_ কনফিগারেশনে, নেটওয়ার্ক সাইটগুলো মূল ডোমেইন নামের উপর ভিত্তি করে একটি path পায়। উদাহরণস্বরূপ 'site1' নামের একটি নেটওয়ার্ক সাইটের সম্পূর্ণ URL হবে https://domain.com/site1। _Subdomain_ কনফিগারেশনে, নেটওয়ার্ক সাইটটি মূল ডোমেইন নাম থেকে উদ্ভূত নিজস্ব _subdomain_ পাবে। তাই 'site1' নামের সাইটের সম্পূর্ণ URL হবে https://site1.domain.com/।

যদিও উভয় বিকল্পই সম্পূর্ণ বৈধ, _subdomain_ ব্যবহার বেশ কিছু সুবিধা দেয় তবে এর স্থাপত্যে আরও চিন্তা ও পরিকল্পনা প্রয়োজন।

DNS-এর দিক থেকে _subdirectory_ ব্যবহার তুলনামূলক সহজ। যেহেতু নেটওয়ার্ক সাইটগুলো কেবল প্যারেন্ট path-এর চিলড্রেন, মূল ডোমেইন নামের জন্য শুধুমাত্র একটি DNS এন্ট্রি থাকলেই চলে। _Subdomain_-এর ক্ষেত্রে চ্যালেঞ্জ একটু জটিল - প্রতিটি নেটওয়ার্ক সাইটের জন্য আলাদা CNAME এন্ট্রি অথবা DNS রেকর্ডে একটি wildcard (*) এন্ট্রি প্রয়োজন।

আরেকটি বিবেচ্য বিষয় হলো SSL এবং SSL সার্টিফিকেট ইস্যু ও ব্যবহার। _Subdirectory_ কনফিগারেশনে একটি একক ডোমেইন সার্টিফিকেট ব্যবহার করা যায় কারণ নেটওয়ার্ক সাইটগুলো কেবল মূল ডোমেইন নামের path। তাই domain.com-এর জন্য একটি সার্টিফিকেট https://domain.com/site1, https://domain.com/site2 এবং আরও অনেকের জন্য পর্যাপ্তভাবে SSL প্রদান করবে।

_Subdomain_ কনফিগারেশনে wildcard SSL সার্টিফিকেট ব্যবহার সবচেয়ে সাধারণ বিকল্পগুলোর একটি। এই ধরনের SSL সার্টিফিকেট একটি ডোমেইন এবং এর _subdomain_-গুলোর জন্য এনক্রিপশন প্রদান করে। তাই একটি wildcard SSL সার্টিফিকেট https://site1.domain.com, https://site2.domain.com এবং https://domain.com নিজেই - সবার জন্য এনক্রিপশন দেবে।

যদিও অন্যান্য বিকল্প আছে, সেগুলো প্রায়ই সীমিত এবং উপযুক্ততার বিষয়ে অতিরিক্ত কনফিগারেশন ও বিবেচনা প্রয়োজন।

#### Plugins এবং Themes

WordPress যা দেয় তা কেড়েও নেয়, অন্তত গ্রাহকের দৃষ্টিকোণ থেকে। একটি স্বতন্ত্র WordPress ইনস্টলেশনে সাইট অ্যাডমিনিস্ট্রেটর যদি একটি খারাপ plugin ইনস্টল করেন বা তাদের ইনস্টলেশন আপডেট রাখতে ব্যর্থ হন, একমাত্র শিকার তারা নিজেই। তবে, একটি multisite ইনস্টলেশনে সাইট অ্যাডমিনিস্ট্রেটর একটি খারাপ plugin ইনস্টল করলে নেটওয়ার্কে থাকা প্রতিটি সাইট এর শিকার হয়।

এই কারণে multisite হিসেবে কনফিগার করা হলে WordPress সাইট অ্যাডমিনিস্ট্রেটরদের থেকে plugin এবং theme ইনস্টল করার ক্ষমতা সরিয়ে নেয় এবং পরিবর্তে এই ক্ষমতা নতুন তৈরি network administrator বা 'super admin' রোলে স্থানান্তর করে। এই বিশেষ সুবিধাপ্রাপ্ত রোল তখন সিদ্ধান্ত নিতে পারে নেটওয়ার্ক সাইটের অ্যাডমিনিস্ট্রেটরদের তাদের dashboard-এ plugins মেনু দেখতে বা অ্যাক্সেস করতে দেওয়া হবে কিনা এবং যদি দেওয়া হয়, সেই অনুমতি plugin _activate_ বা _deactivate_ করা পর্যন্ত প্রসারিত হবে কিনা।

এই পরিমাণে network administrator নেটওয়ার্কে plugins এবং themes ইনস্টল করার জন্য দায়ী এবং নেটওয়ার্ক সাইটগুলোকে এই plugins ও themes ব্যবহারের অনুমতি দেন। সাইট অ্যাডমিনিস্ট্রেটররা plugins ও themes ইনস্টল করতে পারেন না বা তাদের সাইটে বরাদ্দ না করা plugins ও themes অ্যাক্সেস করতে পারেন না।

#### Users এবং Administrators

একটি WordPress Multisite-এ, সমস্ত নেটওয়ার্ক সাইট একই ডাটাবেস শেয়ার করে এবং তাই একই users, roles এবং capabilities শেয়ার করে। এটি ভাবার সবচেয়ে সহজ উপায় হলো সমস্ত users নেটওয়ার্কের সদস্য, কোনো নির্দিষ্ট সাইটের নয়।

এই বোঝাপড়ার সাথে, users তৈরি করার অনুমতি দেওয়া অবাঞ্ছিত হতে পারে এবং এই কারণে WordPress Multisite সাইট অ্যাডমিনিস্ট্রেটরদের থেকে এই ক্ষমতা সরিয়ে নেয় এবং network administrator-এ স্থানান্তর করে। পরিবর্তে network administrator সাইট অ্যাডমিনিস্ট্রেটরকে তাদের নিজের সাইটের জন্য user অ্যাকাউন্ট তৈরির প্রয়োজনীয় সুবিধা দিতে পারেন।

<!-- Screenshot unavailable: WordPress Multisite network user management interface -->

উপরের বিবৃতি পুনরায় বলতে গেলে, যদিও user অ্যাকাউন্টগুলো সাইটের সাথে সম্পর্কিত মনে হয়, বাস্তবে সেগুলো নেটওয়ার্কে বরাদ্দ এবং তাই নেটওয়ার্ক জুড়ে অনন্য হতে হবে। এই কারণে কিছু username রেজিস্টার করার জন্য অনুপলব্ধ হতে পারে।

যদিও এন্টারপ্রাইজ সিস্টেমে এটি অপরিচিত ধারণা নয়, এই একক উৎসের user রেজিস্ট্রেশন এবং authentication প্রায়ই স্বতন্ত্র WordPress ইনস্টলেশনের সাথে পরিচিত লোকদের জন্য বুঝতে কঠিন যেখানে user প্রশাসন তুলনামূলক সহজ।

#### Media

WordPress Multisite-এ নেটওয়ার্ক সাইটগুলো যেখানে একটি ডাটাবেস শেয়ার করে, সেখানে মিডিয়া ফাইলের জন্য তারা ফাইলসিস্টেমে আলাদা path বজায় রাখে।

স্ট্যান্ডার্ড WordPress লোকেশন (wp-content/uploads) থাকে; তবে, নেটওয়ার্ক সাইটের অনন্য ID প্রতিফলিত করতে এর path পরিবর্তিত হয়। ফলে একটি নেটওয়ার্ক সাইটের মিডিয়া ফাইলগুলো wp-contents/uploads/site/[id] হিসেবে দেখা যায়।

#### Permalinks

আমরা আগে উল্লেখ করেছিলাম যে _subdirectory_ কনফিগারেশনের তুলনায় _subdomain_-এর স্পষ্ট সুবিধা রয়েছে এবং এটি সেই বিষয়: paths।

_Subdirectory_ কনফিগারেশনে, মূল সাইট (নেটওয়ার্ক প্রতিষ্ঠিত হওয়ার সময় তৈরি প্রথম সাইট) এবং নেটওয়ার্ক সাবসাইটগুলোকে ডোমেইন নাম থেকে একই path শেয়ার করতে হয়। এতে প্রচুর সংঘর্ষের সম্ভাবনা থাকে।

Posts-এর জন্য, নেটওয়ার্ক সাইটগুলোর সাথে সংঘর্ষ এড়াতে মূল সাইটে একটি বাধ্যতামূলক /blog/ path যোগ করা হয়। এর মানে 'Post name'-এর মতো সুন্দর permalinks domain.name/blog/post-name/ হিসেবে উপস্থাপিত হবে

<!-- Screenshot unavailable: WordPress permalink settings showing /blog/ path in subdirectory configuration -->

_Subdomain_ কনফিগারেশনে এই পদক্ষেপের প্রয়োজন নেই কারণ প্রতিটি নেটওয়ার্ক সাইট সম্পূর্ণ ডোমেইন পৃথকীকরণের সুবিধা পায় এবং তাই একটি একক path-এর উপর নির্ভর করতে হয় না। তারা বরং তাদের _subdomain_-এর উপর ভিত্তি করে নিজস্ব স্বতন্ত্র paths বজায় রাখে।

<!-- Screenshot unavailable: WordPress permalink settings for subdomain configuration -->

#### Static Pages

_Subdirectory_ কনফিগারেশনে নামকরণের সংঘর্ষের সম্ভাবনা static pages-এও প্রসারিত হয় কারণ মূল সাইট এবং নেটওয়ার্ক সাইটগুলো একই path শেয়ার করে।

এটি প্রতিরোধ করতে, WordPress কিছু সাইটের নাম blacklist করার একটি উপায় প্রদান করে যাতে সেগুলো প্রথম সাইটের নামের সাথে সংঘর্ষ না করে। সাধারণত network administrator মূল সাইটের pages-এর root paths এখানে লিখে দেন।

<!-- Screenshot unavailable: WordPress network settings showing banned site names to prevent conflicts -->

_Subdomain_ কনফিগারেশনে নামকরণের সংঘর্ষের সম্ভাবনা _subdomain_ দ্বারা হ্রাস পায় কারণ এটি নেটওয়ার্ক সাইটের জন্য অনন্য এবং মূল সাইটের সাথে কোনোভাবেই সম্পর্কিত নয়।

### Registration

WordPress Multisite-এর network settings-এ বেশ কিছু নতুন user registration অপশন পাওয়া যায়, যা নতুন এবং বিদ্যমান users-দের সাইট তৈরি করতে দেয়।

<!-- Screenshot unavailable: WordPress Multisite network settings showing registration options -->

স্বতন্ত্র WordPress ইনস্টলেশনের বিপরীতে, নেটওয়ার্ক সাইটগুলো user registration অনুমোদন বা সেই registration-গুলোকে roles-এ বরাদ্দ করার পরিচিত অপশনগুলো বজায় রাখে না।

<!-- Screenshot unavailable: WordPress standalone site user registration settings showing limited options -->

User অ্যাকাউন্ট তৈরি হলে সেগুলো নেটওয়ার্ক লেভেলে তৈরি হয়। তাই কোনো একটি নির্দিষ্ট সাইটের অন্তর্গত না হয়ে তারা নেটওয়ার্কের অন্তর্গত হয়। এর কিছু স্পষ্ট সুবিধা এবং অসুবিধা আছে।

উদাহরণস্বরূপ, ধরুন আপনার WordPress Multisite সংবাদ এবং তথ্যের ব্যবসায় আছে। আপনি multisite প্রতিষ্ঠা করবেন এবং তারপর ফিনান্স, টেকনোলজি, বিনোদন এবং অন্যান্য আগ্রহের ক্ষেত্রগুলোর জন্য নেটওয়ার্ক সাইট তৈরি করবেন, সাথে plugins ও themes-এর উপর সামগ্রিক নিয়ন্ত্রণ বজায় রাখবেন। প্রতিটি নেটওয়ার্ক সাইট তখন custom post types বা সাধারণ post categories-এর চেয়ে তাদের নেটওয়ার্ক সাইটের চেহারা, অনুভূতি এবং user experience-এর উপর অনেক বেশি নিয়ন্ত্রণ পাবে।

এই পরিমাণে যখন একজন user লগ ইন করেন তারা নেটওয়ার্কে লগ ইন করেন এবং শেষ পর্যন্ত প্রতিটি নেটওয়ার্ক সাইটেও লগ ইন হন যা একটি নির্বিঘ্ন অভিজ্ঞতা প্রদান করে। আপনার সংবাদ সাইট যদি subscription ভিত্তিক হয় এটি আদর্শ সমাধান এবং ফলাফল হবে।

তবে, যদি multisite-এর উদ্দেশ্য হয় বিচ্ছিন্ন নেটওয়ার্ক সাইট অফার করা যাদের একে অপরের সাথে কোনো সম্পর্ক নেই, তাহলে user roles পরিচালনা করতে প্রায় সবসময়ই বাহ্যিক বা অতিরিক্ত plugins প্রয়োজন হয়।

### Domain এবং SSL

আসুন এমন একটি WordPress Multisite ইনস্টলেশনের কথা বলি যা প্রায়ই আমাদের নজর এড়িয়ে যায় - WordPress.com। এটি এখন পর্যন্ত সবচেয়ে বিস্তৃত WordPress multisite-এর উদাহরণ এবং একটি উদ্দেশ্য পূরণে কাস্টমাইজ ও মোল্ড করার এর ব্যাপক ক্ষমতা প্রদর্শন করে।

আজকের আধুনিক ইন্টারনেটে SSL-এর ব্যবহার প্রায় বাধ্যতামূলক এবং WordPress multisite-এর network administrators শীঘ্রই এই চ্যালেঞ্জগুলোর মুখোমুখি হন।

_Subdomain_ কনফিগারেশনে সাইটগুলো root domain name-এর উপর ভিত্তি করে তৈরি হয়। তাই 'site1' নামের সাইট 'site1.domain.com' হিসেবে তৈরি হবে। একটি wildcard SSL certificate ব্যবহার করে, একজন network administrator সফলভাবে এই চ্যালেঞ্জ মোকাবেলা করতে পারেন এবং নেটওয়ার্কের জন্য SSL encryption ক্ষমতা প্রদান করতে পারেন।

WordPress Multisite-এ একটি domain mapping ফাংশন আছে যা নেটওয়ার্ক সাইটগুলোকে custom domain names বা নেটওয়ার্কের root domain থেকে ভিন্ন domain names-এর সাথে যুক্ত করতে দেয়।

Network administrators-দের জন্য এটি domain name কনফিগারেশন এবং SSL certificates ইস্যু ও রক্ষণাবেক্ষণ উভয় ক্ষেত্রেই অতিরিক্ত জটিলতার স্তর তৈরি করে।

এই পরিমাণে যদিও WordPress Multisite [www.anotherdomain.com](http://www.anotherdomain.com)-কে 'site1'-এ map করার একটি উপায় প্রদান করে, network administrator-কে DNS entries এবং SSL certificates বাস্তবায়নের বাহ্যিক পরিচালনার চ্যালেঞ্জ মোকাবেলা করতে হয়।

## Ultimate Multisite

স্বতন্ত্র WordPress ইনস্টলেশন এবং Multisite ইনস্টলেশনের মধ্যে পার্থক্য বুঝে এখন আসুন দেখি Ultimate Multisite কীভাবে Websites as a Service প্রদানের জন্য চূড়ান্ত অস্ত্রাগার।

### ভূমিকা

Website as a Service (WaaS) তৈরির ক্ষেত্রে Ultimate Multisite আপনার Swiss Army knife। Wix.com, Squarespace, WordPress.com-এর কথা ভাবুন এবং তারপর ভাবুন আপনার নিজস্ব এমন সার্ভিসের মালিক হওয়ার কথা।

অভ্যন্তরে Ultimate Multisite WordPress Multisite ব্যবহার করে কিন্তু এমনভাবে যা শুধু network administrators-রা multisite ইনস্টলেশনের সাথে যে অসংখ্য চ্যালেঞ্জের মুখোমুখি হন সেগুলোর সমাধান করে না, বরং বিভিন্ন ধরনের use cases সমর্থন করতে ক্ষমতা বাড়ায়।

নিম্নলিখিত বিভাগে আমরা কিছু সাধারণ use cases এবং সেগুলো সমর্থন করতে প্রয়োজনীয় বিবেচনাগুলো দেখব।

### Use Cases

#### কেস ১: একটি এজেন্সি

সাধারণত একটি এজেন্সির মূল দক্ষতা ওয়েবসাইট ডিজাইনে থাকে যেখানে হোস্টিং বা মার্কেটিংয়ের মতো বিষয়গুলো অতিরিক্ত সেবা হিসেবে তালিকাভুক্ত থাকে।

এজেন্সিদের জন্য Ultimate Multisite একটি অবিশ্বাস্য মূল্য প্রস্তাব উপস্থাপন করে - একটি একক প্ল্যাটফর্মে একাধিক ওয়েবসাইট হোস্ট ও পরিচালনা করার ক্ষমতায়। আরও বেশি করে সেই এজেন্সিদের জন্য যারা GeneratePress, Astra, OceanWP বা অন্যান্য নির্দিষ্ট themes-এ তাদের ডিজাইন মানসম্মত করে, তারা Ultimate Multisite-এর প্রতিটি নতুন সাইটের জন্য স্বয়ংক্রিয়ভাবে এই themes সক্রিয় করার ক্ষমতা ব্যবহার করতে পারে।

একইভাবে সাধারণ এবং জনপ্রিয় plugins-এর জন্য agency pricing-এর প্রচুর deals থাকায়, Ultimate Multisite-এর ব্যবহার এজেন্সিদের বিদ্যমান বিনিয়োগকে কাজে লাগাতে দেয় একটি সাধারণ প্ল্যাটফর্ম প্রদান করে যেখান থেকে plugins ইনস্টল, রক্ষণাবেক্ষণ এবং ব্যবহার করা যায়।

সম্ভবত একটি কনফিগারেশনের ব্যবহার কাম্য হবে এবং সৌভাগ্যক্রমে Ultimate Multisite অনেক জনপ্রিয় হোস্টিং প্রোভাইডার এবং Cloudflare ও cPanel-এর মতো সার্ভিসের সাথে এর ইন্টিগ্রেশনের মাধ্যমে domain mapping এবং SSL certificates সহজ করে তোলে।

তাই এই প্রোভাইডারগুলোর একটি ব্যবহার করে বা Ultimate Multisite-কে Cloudflare-এর পেছনে রেখে domains এবং SSL certificates-এর পরিচালনার মতো বিষয়গুলো অনেকটাই তুচ্ছ হয়ে যায়।

যে এজেন্সিরা সাইট তৈরিতে কড়া নিয়ন্ত্রণ রাখতে পছন্দ করেন তারা Ultimate Multisite-এর স্ট্রিমলাইনড ইন্টারফেসের মাধ্যমে সহজেই সাইট তৈরি এবং গ্রাহক ও plans-এর সাথে সাইট যুক্ত করতে পারবেন।

![Ultimate Multisite site management interface](/img/admin/sites-list.png)

Plugins এবং themes-এর উপর কঠোর নিয়ন্ত্রণ Ultimate Multisite-এর স্বজ্ঞাত ইন্টারফেসের মাধ্যমে প্রতি-product ভিত্তিতে বজায় রাখা হয় যা plugins এবং themes দৃশ্যমান বা লুকানো করতে এবং একটি নতুন সাইটের জন্য তাদের activation অবস্থা নির্ধারণ করতে দেয়।

![Product plugin limitations interface](/img/config/product-plugins.png)

Themes অনুরূপ কার্যকারিতা প্রদান করে, সাইট তৈরিতে নির্দিষ্ট themes activate বা লুকানোর সুযোগ দেয়।

![Product theme limitations interface](/img/config/product-themes.png)

এজেন্সিরা Ultimate Multisite-এর সাথে মনের শান্তি পাবেন যা তাদের সবচেয়ে ভালো যা করতে দেয় - অসাধারণ ওয়েব সাইট ডিজাইন করা।

#### কেস ২: Niche Provider

একটি পুরনো কথা আছে, "একটি কাজ করো এবং সেটা ভালো করো"। অনেক বিশেষজ্ঞের জন্য এর মানে একটি একক মূল ধারণার চারপাশে একটি পণ্য বা সেবা তৈরি করা।

হয়তো আপনি একজন উৎসাহী গলফার ক্লাবগুলোতে ওয়েবসাইট প্রচার করছেন অথবা আপনি একজন উৎসাহী esports gamer clans-দের ওয়েবসাইট প্রদান করছেন। রেস্তোরাঁয় বুকিং সার্ভিস প্রচার করা কোনো ব্যক্তি হয়তো?

অনেক কারণে আপনি একটি সাধারণ framework এবং platform-এর উপর ভিত্তি করে সেবা প্রদান করতে চাইবেন। এটা হতে পারে যে আপনি প্রয়োজনীয় কার্যকারিতা প্রদানের জন্য bespoke plugins ডিজাইন বা বিনিয়োগ করেছেন অথবা এমন হতে পারে যে industry best practices-এ ডিজাইনে কিছু ধরনের মানসম্মত পদ্ধতি প্রয়োজন।

Ultimate Multisite-এর অভিনব ফিচারগুলোর একটি হলো template sites-এর ব্যবহার। একটি template site হলো যেখানে theme ইনস্টল ও activate করা হয়েছে, প্রয়োজনীয় plugins ইনস্টল ও activate করা হয়েছে এবং নমুনা posts বা pages তৈরি করা হয়েছে। যখন একজন গ্রাহক template-এর উপর ভিত্তি করে একটি নতুন সাইট তৈরি করেন, template-এর contents এবং settings নতুন তৈরি সাইটে কপি হয়ে যায়।

Niche sites এবং services-এর একজন provider-এর জন্য এটি custom plugins এবং design সহ তাৎক্ষণিকভাবে একটি সাইট তৈরি করতে অতুলনীয় সুবিধা প্রদান করে। গ্রাহককে শুধু সার্ভিস সম্পূর্ণ করতে সবচেয়ে ন্যূনতম input দিতে হবে।

প্রয়োজনের উপর নির্ভর করে _subdirectory_ বা _subdomain_ উভয় কনফিগারেশনই উপযুক্ত হতে পারে, যে ক্ষেত্রে architecture-এর পছন্দ হবে _subdirectory_-র জন্য একটি সাধারণ SSL certificate বা _subdomain_-এর জন্য wildcard SSL certificate-এর মধ্যে।

#### কেস ৩: WordPress Web Hosting

WordPress সাইট হোস্ট করার অনেক উপায় আছে কিন্তু এটি খুব কমই একজন গ্রাহককে WordPress-এর pre-installed version সহ web space প্রদানের মতো সহজ। কারণ একটি অর্থবহ সেবা প্রদান করতে অনেক সিদ্ধান্ত এবং বিবেচনা একসাথে আসতে হয়।

Ultimate Multisite WordPress সাইট হোস্টিংয়ের জন্য একটি বিস্তৃত turnkey solution প্রদান করে এই ক্ষেত্রে দক্ষতা প্রদর্শন করে। এই solution-এ অন্তর্ভুক্ত subscription services, payment collection, checkout forms, discount vouchers এবং customer communications প্রদানের মূল প্রক্রিয়াগুলো।

একটি WordPress Multisite সঠিকভাবে ইনস্টল, কনফিগার এবং রক্ষণাবেক্ষণের জন্য প্রয়োজনীয় অনেক কাজ Ultimate Multisite দ্বারা সহজ করা হয়েছে এই পরিমাণে যে network administrators-দের শুধু তাদের সার্ভিস বা niche-এর সাথে সম্পর্কিত বিষয় যেমন product tiers, pricing এবং service offers বিবেচনা করতে হয়।

Ultimate Multisite-এর সাথে integrate করতে ইচ্ছুক developers-দের জন্য, solution-টি একটি বিস্তৃত RESTful API এবং event notification-এর জন্য Webhooks-ও অফার করে।

অসংখ্য external plugins এবং licenses-এর উপর নির্ভরতা ছাড়াই, Ultimate Multisite Wix, Squarespace, WordPress.com এবং অন্যদের তুলনায় feature rich এবং সমতুল্য solution প্রদান করে।

### Architecture বিবেচনা

যদিও এটি একটি বিস্তৃত গাইড নয়, নিম্নলিখিত বিষয়গুলো Ultimate Multisite ইনস্টলেশন সমর্থনের জন্য সঠিক প্রযুক্তি নির্বাচনে নির্দেশিকা হিসেবে কাজ করা উচিত।

#### Shared বনাম Dedicated Hosting

দুর্ভাগ্যবশত সব হোস্টিং প্রোভাইডার সমান নয় এবং কিছু চরম সার্ভার ঘনত্ব অনুশীলন করে। Low-cost providers সাধারণত সার্ভার ঘনত্ব সর্বাধিক করে রাজস্ব তৈরি করে। তাই আপনার Ultimate Multisite ইনস্টলেশন একই সার্ভারে শত শত সাইটের মধ্যে একটি মাত্র হতে পারে।

প্রোভাইডারের পক্ষ থেকে যথাযথ safeguards না থাকলে, shared server-এ থাকা সাইটগুলো 'noisy neighbour' সমস্যার অভিজ্ঞতা পায়। অর্থাৎ, একই সার্ভারে একটি সাইট এত বেশি resources ব্যবহার করছে যে অন্য সাইটগুলোকে বাকি resources-এর জন্য প্রতিযোগিতা করতে হচ্ছে। প্রায়ই এটি slow বা সময়মতো সাড়া না দেওয়া সাইট হিসেবে দেখা যায়।

নিজে একজন web hosting provider হিসেবে এর প্রভাব হবে আপনার গ্রাহকরা poor speeds, low page rank এবং high bounce rates অনুভব করবে যা প্রায়ই customer churn-এ পরিণত হয় কারণ তারা অন্যত্র সেবা খোঁজে।

সংক্ষেপে, সস্তা মানেই ভালো নয়।

Ultimate Multisite অনেক ভালো হোস্টিং প্রোভাইডারের সাথে কাজ করতে পারে বলে জানা যায় এবং domain mapping এবং automatic SSL-এর মতো functions প্রদান করতে তাদের environment-এর সাথে ভালোভাবে integrate করে। এই providers performance-কে মূল্য দেয় এবং shared hosting-এর চেয়ে উচ্চ মানের সেবা প্রদান করে।

Compatible Providers-এর তালিকা এবং প্রতিটির সম্পূর্ণ set-up নির্দেশাবলীর জন্য অনুগ্রহ করে Compatible Providers-এর ডকুমেন্টেশন দেখুন।

#### Performance বিবেচনা

Ultimate Multisite একটি slow application নয়, বরং এটি উল্লেখযোগ্যভাবে দ্রুত। তবে এটি শুধুমাত্র underlying application এবং infrastructure যতটা ভালো ততটাই ভালো perform করে এবং শুধুমাত্র যা অ্যাক্সেস আছে তা leverage করতে পারে।

এটি বিবেচনা করুন: আপনি ১০০টি সাইট সহ একটি Ultimate Multisite ইনস্টলেশনের network administrator। এর মধ্যে কিছু সাইট ভালো করছে এবং প্রতিদিন বেশ কিছু ওয়েবসাইট ভিজিটর আকর্ষণ করছে।

এই scenario এক থেকে পাঁচটি সাইটের ছোট scale-এ ভিন্ন হবে কিন্তু অচিরেই scale-এর সমস্যা স্পষ্ট হয়ে উঠবে।

অযত্নে রাখলে, একক Ultimate Multisite সাইট সমস্ত সাইটের ভিজিটরদের requests পূরণের জন্য দায়ী থাকবে। এই requests dynamic PHP pages বা stylesheets, javascript বা media files-এর মতো static assets-এর জন্য হতে পারে। এক বা একশো সাইট হোক, এই কাজগুলো পুনরাবৃত্তিমূলক, একঘেয়ে এবং অপচয়মূলক হয়ে যায়। প্রতিটি request-এ output যখন একই static information তখন একটি PHP file process করতে CPU power এবং memory ব্যবহার অপ্রয়োজনীয়।

একইভাবে একটি PHP বা HTML page-এর জন্য একটি request পরবর্তীতে scripts, stylesheets এবং image files-এর জন্য একাধিক requests তৈরি করে। সেই requests সরাসরি আপনার Ultimate Multisite server-এ targeted হয়।

এই সমস্যা সার্ভার upgrade করে সহজেই সমাধান করা যায় কিন্তু এটি একটি secondary সমস্যা ঠিক করে না - geographic latencies। শুধুমাত্র একাধিক স্থানে একাধিক সার্ভার এই সমস্যা সঠিকভাবে সমাধান করতে পারে।

এই কারণে বেশিরভাগ network administrators static pages-এর requests পূরণ করতে front-end caching solutions এবং content distribution networks (CDN) ব্যবহার করেন। এই requests পূরণ এবং request সার্ভারে পৌঁছানোর আগে assets serve করা processing resources বাঁচায়, delays দূর করে, অপ্রয়োজনীয় upgrades এড়ায় এবং technology investments সর্বাধিক করে।

Ultimate Multisite একটি sophisticated Cloudflare add-on অন্তর্ভুক্ত করে যা network administrators-দের তাদের installations Cloudflare-এর পেছনে রাখতে এবং শুধু এর caching ক্ষমতাই নয় বরং DNS hosting, SSL certificates এবং security mechanisms-ও ব্যবহার করতে সক্ষম করে।

#### Backups

কেউ ৫০ জনকে backups সম্পর্কে পরামর্শ চাইতে পারেন এবং backup strategies সম্পর্কে ৫০টি ভিন্ন মতামত পেতে পারেন। উত্তর হলো, এটা নির্ভর করে।

যা বিতর্কিত নয় তা হলো backups প্রয়োজন এবং এটি প্রায় অকল্পনীয় যে এগুলো provider দ্বারা পরিচালিত না হয়, বিশেষত যে managed service অফার করে। ফলস্বরূপ গ্রাহকরা এই সেবা প্রদান ও পরিচালনার জন্য network administrator-এর দিকে তাকাবে। Network administrator কার দিকে তাকাবে সেটা সম্পূর্ণ ভিন্ন সমস্যা।

এই বিভাগের উদ্দেশ্যে আসুন একমত হই যে একটি backup হলো backup শুরু হওয়ার সময় system state-এর একটি point-in-time copy। সহজ কথায়, backup-এর সময় system-এর যা অবস্থা সেই অবস্থা ক্যাপচার করা হয় এবং backup-এ সংরক্ষণ করা হয়।

এই বোঝাপড়ার সাথে backups কীভাবে অর্জন করতে হবে এবং আপনার environment-এর জন্য সেরা কী তা মূলত আপনার requirements এবং হোস্টিং প্রোভাইডারের সেই requirements পূরণ করার ক্ষমতার উপর নির্ভর করবে। তবে, সবচেয়ে মতামতপূর্ণ থেকে সবচেয়ে কম মতামতপূর্ণের ক্রমে, নিচের options কিছু নির্দেশনা প্রদান করবে।

#### Snapshots

Snapshots হলো backups-এর silver bullets কারণ এগুলো সহজ, জটিলতামুক্ত (যতক্ষণ না আপনি restore করতে চান) এবং 'just work'। তবে এর জন্য আপনার provider-এর কিছু সাহায্য প্রয়োজন এবং এটি বেশিরভাগ ক্ষেত্রে প্রযোজ্য শুধুমাত্র যদি আপনার একটি VPS (Virtual Private Server) বা অনুরূপ থাকে। আমাদের 'Compatible Providers' ডকুমেন্টেশনে তালিকাভুক্ত বেশ কয়েকটি provider network administrator-এর আর কোনো হস্তক্ষেপ বা বিবেচনা ছাড়াই backups অফার করে।

যেখানে traditional backups files এবং databases target করে, একটি snapshot সম্পূর্ণ disk target করে। এর মানে শুধু সাইটের data snapshot-এ capture হয় না বরং operating system এবং configuration-ও। অনেকের জন্য এটি একটি স্পষ্ট সুবিধা কারণ একটি snapshot থেকে প্রায় তাৎক্ষণিকভাবে একটি নতুন system spawn করা যায় এবং একটি অসুস্থ instance প্রতিস্থাপন করতে operation-এ আনা যায়। একইভাবে, শুধু files retrieve করার recovery process-এ snapshot image-কে একটি existing instance-এ disk হিসেবে attach করতে হয় যাতে files access এবং copy করা যায়।

Snapshots হোস্টিং প্রোভাইডারের সাথে অতিরিক্ত খরচ আকর্ষণ করতে পারে কিন্তু এটি দুর্ঘটনার বিরুদ্ধে একটি insurance policy।

#### External Scripts

WordPress এবং MySQL resources backup করার জন্য external scripts এবং solutions-এর কোনো অভাব নেই বলে মনে হয় এবং এগুলো Ultimate Multisite-এর জন্য ভালো কাজ করবে কারণ এটি একটি WordPress plugin যা WordPress filesystem এবং database ব্যবহার করে। তাই একটি solution যা WordPress সাইট backup করে তা Ultimate Multisite-এর চাহিদা পর্যাপ্তভাবে পূরণ করবে।

আমরা একটি script-কে অন্যটির উপর recommend করতে পারি না কিন্তু আমাদের সাধারণ পরামর্শ হলো results desired কিনা তা নিশ্চিত করতে বেশ কয়েকটি backup এবং restore tests চালান এবং 'be sure to be sure' হতে ক্রমাগত script এবং এর functionality evaluate করুন বিশেষত যেখানে কিছু ধরনের differential backup strategy প্রয়োগ করা হয়।

এটি লক্ষ করা উচিত যে এই scripts চলাকালীন system load বাড়াবে যা বিবেচনায় নেওয়া উচিত।

#### Plugins

WordPress-এ এমন কোনো সমস্যা নেই যা একটি plugin দিয়ে সমাধান করা যায় না এবং যদি external scripts পরিচালনা আপনার পছন্দ না হয় তাহলে সম্ভবত একটি plugin পরবর্তী সেরা বিকল্প।

যদিও plugins options এবং features-এ ভিন্ন হয় তারা বেশিরভাগই একই function perform করে এবং সেটা হলো WordPress files এবং database contents-এর একটি copy তৈরি করা। এরপর functionalities ভিন্ন হয় কারণ কিছু plugins backups Google Drive বা Dropbox-এর মতো external services-এ বা S3, Wasabi বা অন্যদের মতো কিছু ধরনের compatible object storage service-এ ship করতে পারে। আরও comprehensive plugins external storage costs বাঁচাতে differential backups বা শুধুমাত্র পরিবর্তিত data backup করার কোনো strategy প্রদান করে।

আপনার plugin নির্বাচনে এটি multisite aware কিনা verify করার যত্ন নিন। এর operation-এর প্রকৃতির কারণে backup চলাকালীন process সম্পন্ন না হওয়া পর্যন্ত আপনি সার্ভারে temporary load আশা করতে পারেন।

#### Domain এবং SSL

Multisite _subdomain_ mode-এ domain names সম্পর্কে ইতিমধ্যে অনেক আলোচনা হয়েছে। Network administrators-দের জন্য একটি প্রায় সার্বজনীন solution হলো wildcard DNS entries ব্যবহার করা।

![Wildcard DNS entry configuration example](/img/config/settings-domain-mapping.png)

এই ধরনের DNS entry 'site1.domain.com' এবং 'site2.domain.com'-এর মতো _subdomains_ সফলভাবে 1.2.3.4 IP address-এ resolve করবে এবং তাই _subdomain_ mode ব্যবহার করে Ultimate Multisite এবং বৃহত্তর পরিসরে WordPress Multisite সমর্থন করবে।

এটি HTTP-এর জন্য সম্পূর্ণ ভালো কাজ করতে পারে কারণ target host HTTP headers থেকে পড়া হয় কিন্তু আজকাল web খুব কমই এত সহজ যেখানে secure HTTPS transactions প্রায় বাধ্যতামূলক।

সৌভাগ্যবশত SSL certificates-এর জন্য সহজ options আছে। _Subdirectory_ mode-এ একটি regular domain certificate ব্যবহার করা যায়। এগুলো হোস্টিং providers-দের থেকে সহজলভ্য এবং বিনামূল্যে পাওয়া যায় যারা হয়তো বিনামূল্যে LetsEncrypt service বা অন্য উৎস ব্যবহার করে। অন্যথায় আপনি certificate signing request তৈরি করতে সক্ষম হলে এগুলো authorities থেকে commercially available।

_Subdomain_ mode-এর জন্য একটি wildcard SSL certificate wildcard domain-এর সাথে পুরোপুরি pair করবে এবং certificate-কে root domain এবং সমস্ত _subdomains_-এর জন্য অতিরিক্ত configuration ছাড়াই authoritative হতে দেবে।

তবে, এটি লক্ষ করা উচিত যে wildcard SSL certificates Cloudflare-এর মতো services-এর সাথে কাজ নাও করতে পারে যদি না আপনি enterprise plan-এ থাকেন বা entry-কে DNS only-তে সেট করেন যে ক্ষেত্রে সমস্ত caching এবং optimization bypass হয়।

Out-of-the-box Ultimate Multisite WordPress multisites-এর চাহিদার সাথে আমাদের ব্যাপক অভিজ্ঞতা প্রদর্শন করে এই সমস্যার সমাধান প্রদান করে। এই সাধারণ add-on activate করলে Ultimate Multisite আপনার Cloudflare credentials ব্যবহার করে Cloudflare-এ নেটওয়ার্ক সাইটের জন্য স্বয়ংক্রিয়ভাবে DNS entries যোগ করবে এবং তাদের mode 'proxied'-এ সেট করবে। এইভাবে প্রতিটি network subsite, তৈরি হওয়ার সময়, SSL সহ Cloudflare-এর সম্পূর্ণ protection এবং সুবিধা পাবে।

আপনার Ultimate Multisite ইনস্টলেশনের প্রকৃতি এবং উদ্দেশ্যের উপর নির্ভর করে গ্রাহকদের নিজস্ব domains ব্যবহারের প্রয়োজন হতে পারে। এই ক্ষেত্রে network administrator দুটি সমস্যা সমাধানের দায়িত্ব পান। এক, domain name-এর hosting এবং দুই, domain-এর জন্য SSL certificates।

অনেকের জন্য Cloudflare ব্যবহার একটি সহজ option। গ্রাহককে শুধু তাদের domain Cloudflare-এ রাখতে হবে, Ultimate Multisite-এর root domain-এ একটি CNAME point করতে হবে এবং তাদের domain Ultimate Multisite-এ map করতে হবে তাদের custom domain name-এর সুবিধা নিতে শুরু করতে।

এর বাইরে বিকল্প solutions খুঁজতে হবে যে কারণে Ultimate Multisite Compatible Providers-এর একটি তালিকা recommend করে। কারণ DNS এবং SSL setup করার process একটি non-trivial process হতে পারে। তবে, এই providers-এর সাথে Ultimate Multisite-এর integration-এর মাধ্যমে জটিলতা অনেকটাই দূর হয় এবং procedure automated হয়।

#### Plugins

আপনার গ্রাহক বা নেটওয়ার্ক সাইটগুলোতে functionality প্রদান করতে সম্ভবত আপনার অতিরিক্ত plugins প্রয়োজন হবে। সব plugins কি WordPress Multisite এবং Ultimate Multisite-এর সাথে কাজ করে? ঠিক আছে, এটা নির্ভর করে।

যদিও বেশিরভাগ plugins WordPress Multisite-এ installable তাদের activation এবং licensing author থেকে author-এ ভিন্ন হয়।

চ্যালেঞ্জটি হলো কিছু plugins-এ licensing কীভাবে প্রয়োগ করা হয় যেখানে কিছু plugins per-domain ভিত্তিতে licensing প্রয়োজন। এর মানে কিছু plugins-এর জন্য network administrator-কে প্রতিটি নতুন সাইটে প্রতিটি plugin-এর জন্য manually license activate করতে হবে।

তাই plugin author-এর সাথে চেক করা সবচেয়ে ভালো হবে যে তাদের plugin কীভাবে WordPress Multisite-এর সাথে কাজ করবে এবং এটি license করার জন্য কোনো বিশেষ requirements বা procedures প্রয়োজন কিনা।
