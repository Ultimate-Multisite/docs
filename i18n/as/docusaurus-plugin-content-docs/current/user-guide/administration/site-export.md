---
title: সাইট এক্সপোর্ট
sidebar_position: 11
_i18n_hash: d25255aa1b01df64a9008f91e3dcbeb1
---
# Site Export

**Site Export** admin page-টোৱে network administrator ক এটা site, বা সম্পূৰ্ণ network-ক এটা ডাউনলোড কৰিব পৰা archive ত পেকেজ কৰিবলৈ সহায় কৰে। এই archive-টো migration, backup বা আন কাৰ্যালয়লৈ হস্তান্তৰ কৰাৰ বা ব্যৱহৃত হয়।

## এটা site export কৰা {#exporting-one-site}

**Ultimate Multisite > Site Export** मा যাওক আৰু **Generate new Site Export** বাছি লওক। আপুনি যি subsite export কৰিব বিচাৰে, সেয়া বাছি লওক, তাৰ পিছত archive-টোত uploads, plugins, আৰু themes অন্তৰ্ভুক্ত কৰিব নে নাই, সেয়া নিৰ্বাচন কৰক।

Export সম্পন্ন হোৱাৰ পিছত, **Existing Exports** তালিকাৰ পৰা ZIP ফাইলটো ডাউনলোড কৰক। এতিয়া export ZIP-বোৰত এটা self-booting `index.php` আৰু এটা `readme.txt` অন্তৰ্ভুক্ত থাকে। গতিকে, এই archive-টো নতুন host ত upload কৰি, এটা পৃথক importer plugin install নকৰাকৈও আৰম্ভ কৰিব পাৰি।

## সম্পূৰ্ণ network export কৰা {#exporting-the-whole-network}

যদি আপুনি network-ৰ সকলো subsite অন্তৰ্ভুক্ত এটা single archive বিচাৰে, তেন্তে Site Export page-ৰ **Network Export** ব্যৱহাৰ কৰক। এইটো host migration, disaster-recovery drill, বা staging rebuild কৰাৰ আগতে ব্যৱহাৰ কৰিবলগীয়া, য'ত প্ৰতিটো subsite-ক একেলগে যাব লাগিব।

Network export-টো এটা single-site export তকৈ বহুত ডাঙৰ হ'ব পাৰে, সেয়েহে ইয়াক কম traffi-ৰ সময়ত কৰক আৰু নিশ্চিত কৰক যে লক্ষ্যিত storage ত uploads, plugins, themes, আৰু generate কৰা ZIP ফাইলবোৰৰ বাবে যথেষ্ট free space আছে।

### Network Import Bundles {#network-import-bundles}

Ultimate Multisite 2.12.0 ৰ পৰা, Site Exporter-এ **network import bundles** generate কৰিব পাৰে — এইবোৰ বিশেষ archive, যিবোৰ network-wide site restoration কৰাৰ বাবে ডিজাইন কৰা হৈছে। এটা network import bundle ত একাধিক site-ক নতুন network installation ত restore কৰিবলৈ প্ৰয়োজনীয় সকলো ফাইল আৰু metadata থাকে।

#### Network Import Bundle generate কৰা {#generating-a-network-import-bundle}

1. **Ultimate Multisite > Site Export** मा যাওক
2. **Generate new Network Export** ক্লিক কৰক
3. export type হিচাপে **Network Import Bundle** নিৰ্বাচন কৰক
4. uploads, plugins, আৰু themes অন্তৰ্ভুক্ত কৰিব নে নাই, সেয়া বাছি লওক
5. **Generate** ক্লিক কৰক
6. **Existing Exports** তালিকাৰ পৰা bundle ZIP ফাইলটো ডাউনলোড কৰক

#### Network Import Bundle ৰ পৰা restore কৰা {#restoring-from-a-network-import-bundle}

network import bundle ৰ পৰা site restore কৰিবলৈ:

1. আপোনাৰ লক্ষ্যিত host ত Ultimate Multisite install কৰক
2. multisite setup wizard সম্পন্ন কৰক
3. নতুন network ত **Ultimate Multisite > Site Export** मा যাওক
4. **Import Network Bundle** ক্লিক কৰক
5. network import bundle ZIP ফাইলটো upload কৰক
6. স্ক্রিনত দিয়া import নিৰ্দেশাবলী অনুসৰণ কৰক
7. import প্ৰক্ৰিয়াটোৱে সকলো site, তাৰ content, আৰু configuration restore কৰিব।

Network import bundles-এ তলৰ বিষয়বোৰ সংৰক্ষণ কৰে:
- Site content (posts, pages, custom post types)
- Site settings and options
- User roles and permissions
- Plugins and themes (যদি bundle ত অন্তৰ্ভুক্ত থাকে)
- Media uploads (যদি bundle ত অন্তৰ্ভুক্ত থাকে)
- Custom database tables and data

## এটা self-booting export ZIP install কৰা {#installing-a-self-booting-export-zip}

এটা self-booting ZIP ফাইল নতুন host ত restore কৰিবলৈ:

1. export কৰা ZIP ফাইলৰ content-বোৰ লক্ষ্যিত web root ত upload কৰক।
2. browser ত upload কৰা `index.php` খুলক।
3. bundle কৰা export package बाट দিয়া on-screen installer নিৰ্দেশাবলী অনুসৰণ কৰক।
4. সাময়িক ফাইলবোৰ (temporary files) நீকৰণ কৰাৰ আগতে bundle কৰা `readme.txt` পৰীক্ষা কৰক।

addon-specific installation আৰু import details-ৰ বাবে, [Site Exporter addon documentation](/addons/site-exporter) চাওক।

Ultimate Multisite 2.9.0 मा যোগ কৰা single-site tool-ৰ বাবে, [Export & Import](/user-guide/administration/export-import) চাওক।
