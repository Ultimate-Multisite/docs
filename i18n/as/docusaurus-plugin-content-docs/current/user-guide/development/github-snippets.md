---
title: GitHub Snippets
sidebar_position: 3
_i18n_hash: c643f3d76aace8c15fd224b984af6633
---
# আমাৰ GitHub repository-ত Ultimate Multisite snippets ব্যৱহাৰ কৰিবলৈ কেনেকৈ {#how-to-use-ultimate-multisite-snippets-on-our-github-repository}

Ultimate Multisite ব্যৱহাৰকাৰীসকলে যি সৰু ফাংচনালিটি যোগ কৰিব বিচাৰে, যেনে - sign-up page-ত Google Analytics script যোগ কৰা বা admin dashboard-ৰ পৰা এটা meta box লুকুৱাই থোৱা, তাৰ বাবে GitHub repository-ত কিছুমান code snippets উপলব্ধ আছে।

এই article-টোৱে আপোনাক কোৱা snippets কেনেকৈ ব্যৱহাৰ কৰিব লাগে বা অধিক স্পষ্টকৈ ক'ব যে এই code-বোৰ ক'ত স্থান দিব লাগে।

আপুনি তলৰ link ত snippets সমূহ বিচাৰি পাব পাৰিব।

https://github.com/next-press/wp-ultimo-snippets/

আপোনাৰ code যোগ কৰাৰ ২ টা উপায় আছে:

  ১. আপোনাৰ theme-ৰ functions.php ফাইলত।

  ২. Must-Use Plugins (mu-plugins)

# আপোনাৰ theme-ৰ functions.php ফাইলত snippet যোগ কৰাৰ পদ্ধতি। {#how-to-add-the-snippet-on-your-themes-functionsphp-file}

  ১. আপোনাৰ WordPress Network admin dashboard-লগ ইন কৰক আৰু Themes >Theme Editor লৈ যাওক (তলৰ screenshot চাওক)।

  ২. "Edit Themes" page-ত, নিশ্চিত কৰক যে আপুনি আপোনাৰ active theme-টো dropdown field-ত select কৰিছে, যিটো আপোনাৰ screen-ৰ ওপৰ কাষৰ ফালে আছে (#3 তলৰ screenshot-ত)।

  ৩. "Theme Files" section-ৰ তলত থকা functions.php ফাইলটো ক্লিক কৰি ফাইলটো load কৰক। তললৈ scroll কৰক আৰু GitHub repository-ৰ পৰা পোৱা Ultimate Multisite snippet টো paste কৰক।

<!-- Screenshot unavailable: WordPress Theme Editor showing functions.php file editing -->

# Must-Use Plugins (mu-plugins) কেনেকৈ সৃষ্টি কৰিব {#how-to-create-must-use-plugins-mu-plugins}

WordPress-ৰ এটা বৈশিষ্ট্য আছে যিয়ে "Must-Use Plugins" বা সংক্ষেপে "mu-plugins" বুলি কোৱা এটা custom ফাংচনালিটি load কৰিবলৈ দিয়ে।

এই বিশেষ mu-plugins সমূহ সকলো অন্যান্য regular plugin-তকৈ আগতে load হয়, আৰু ইয়াক deactivate কৰিব নোৱাৰি। এটা multisite network-ত, এই mu-plugins-ৰ code টো আপোনাৰ installation-ৰ সকলো site-ত load হ'ব।

১. আপোনাৰ WordPress install-ৰ filesystem access কৰিবলৈ FTP বা SSH ব্যৱহাৰ কৰক।

২. আপোনাৰ WordPress install-ৰ wp-content directory-ৰ ভিতৰত, mu-plugins নামৰ এটা নতুন directory সৃষ্টি কৰক।

<!-- Screenshot unavailable: File manager showing wp-content directory with mu-plugins folder -->

৩. Notepad বা যিকোনো code editor ব্যৱহাৰ কৰি আপোনাৰ কম্পিউটাৰত wu-snippet.php নামৰ এটা নতুন PHP ফাইল সৃষ্টি কৰক।

৪. GitHub repository-ৰ পৰা পোৱা Ultimate Multisite code snippet টো ফাইলটোত স্থান দিয়ক আৰু save কৰক। আপুনি এই code snippet-ৰ ওপৰত এই code টো যোগ কৰিও mu plugin-টো label কৰিব পাৰে।
