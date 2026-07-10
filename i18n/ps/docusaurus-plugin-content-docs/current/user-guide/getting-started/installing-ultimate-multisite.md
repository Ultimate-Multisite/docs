---
title: نصب کولو تهUltimate Multisite
sidebar_position: 12
_i18n_hash: dda8f0d2b67bc421c0a484c76c8eae6d
---
# د Ultimate Multisite نصب کول {#installing-ultimate-multisite}

:::note
دا لارښود فرض کوي چې تاسو دمخه WordPress Multisite نصب او تنظیم کړی دی. که څنګه یې، پدې [لارښود](https://www.wpbeginner.com/glossary/multisite/) کې وګورئ چې WP Beginner یې خپره کړې ده.
:::

## د پلگ ان (Plugin) نصب کول {#installing-the-plugin}

Ultimate Multisite په وړیا توګه په [WordPress.org](https://wordpress.org/plugins/ultimate-multisite/) کې شتون لري.

له خپل **شبکې مدیر ډیش بورډ** څخه، **Plugins → Add New Plugin** ته لاړ شئ.

![د شبکې مدیر "نوی پلگ ان اضافه کړئ" پاڼه](/img/installation/add-new-plugin.png)

د **"Ultimate Multisite"** (د دقیق تطابق لپاره د کوټونو سره) لټون وکړئ او دا به د لومړۍ پایلې په توګه څرګند شي. **Install Now** باندې کلیک وکړئ.

![د "Ultimate Multisite" پلگ ان ښودونکي لټون پایلې](/img/installation/search-ultimate-multisite.png)

کله چې نصب شو، د دې لپاره چې پلگ ان ستاسو په ټولې شبکې کې فعال کړئ، **Network Activate** باندې کلیک وکړئ.

![نصب شوی پلگ ان او "شبکه فعال کړئ" تڼګه](/img/installation/plugin-installed.png)

د فعالولو وروسته، تاسو به په اوتومات ډول د تنظیم کولو جادوګر (Setup Wizard) تهredirect شئ.

![فعال شوی پلگ ان او جادوګر تهredirect شوي پاڼه](/img/installation/plugin-activated.png)

## تنظیم کولو جادوګر {#setup-wizard}

تنظیم کولو جادوګر به تاسو ته په شاوخوا 10 دقیقو کې د Ultimate Multisite تنظیم کولو لپاره لارښود کړي.

### ښه راغلاست {#welcome}

د پیل لپاره **Get Started** باندې کلیک وکړئ.

![تنظیم کولو جادوګر، ښه راغلاست سکرین](/img/installation/wizard-welcome.png)

### دمخه نصب ت checks {#pre-install-checks}
دا مرحله ستاسو د سیسټم معلومات او WordPress نصب چک کوي ترڅو ډاډ ترلاسه کړي چې دا د Ultimate Multisite اړتیاوې پوره کوي. که هر څه ښه وي، **Go to the Next Step** باندې کلیک وکړئ.

![دمخه نصب ت checks، د سیسټم اړتیاوې ښودونکي سکرین](/img/installation/wizard-pre-install-checks.png)

:::note "شبکه فعال کړئ" تڼګه (v2.6.1+)
که Ultimate Multisite نصب شوی و، مګر لاهم **لا تر اوسه په شبکه کې نه وي فعال شوی** - د مثال په توګه، که تاسو د شبکې پلگ انونو سکرین څخه **Activate** (یوازې سایټ) ته کلیک کړی وي، نو دمخه نصب ت checks مرحله به دا کشف کړي او **Network Activate** تڼګه ښکاري.

د **Network Activate** باندې کلیک کول په اوتومات ډول د دې پلگ ان ستاسو په ټولې شبکې کې فعالوي. وروسته له فعالولو، جادوګر په نورمال ډول نصب کولو مرحلې ته دوام ورکوي. تاسو اړتیا نلرئ چې د فعالولو حالت سمولو لپاره جادوګر پریږدئ.
:::

### نصب کول {#installation}

نصب کونکی به اړین ډیټابیس میزونه جوړ کړي او `sunrise.php` فایل نصب کړي چې Ultimate Multisite ته اړتیا لري ترڅو کار وکړي. د دوام لپاره **Install** باندې کلیک وکړئ.

![نصب مرحله، د ډیټابیس میزونو او sunrise.php ښودونکي سکرین](/img/installation/wizard-installation.png)

### ستاسو شرکت {#your-company}

ستاسو د شرکت معلومات ډک کړئ او خپل ډیفالټ اسعارو ټاکلو. دا معلومات به ستاسو په WaaS پلیټ فارم کې وکارول شي. کله چې پای ته ورسید، **Continue** باندې کلیک وکړئ.

!["ستاسو شرکت" تنظیم کولو مرحله](/img/installation/wizard-your-company.png)

### ډیفالټ مینځپانګه {#default-content}

دا مرحله تاسو ته اجازه درکوي چې دمخه ټاکل شوي ټیمپلیټونه، محصولات او نور پیل کونکي مینځپانګې نصب کړئ. دا یو عالي لاره ده ترڅو د Ultimate Multisite ځانګړتیاو سره آشنا شئ. که غواړئ له ابتدا څخه پیل وکړئ، نو دا مرحله پریږدئ.

![ډیفالټ مینځپانګه، نصب کولو مرحله](/img/installation/wizard-default-content.png)

### وړاندیز شوي پلگ انونه {#recommended-plugins}

اختیاري ډول وړاندیز شوي ملګري پلگ انونه نصب کړئ. د دوی اضافه کولو لپاره **Install** باندې کلیک وکړئ یا دوام ته لاړ شئ.

![وړاندیز شوي پلگ انونه، مرحله](/img/installation/wizard-recommended-plugins.png)

### چمتو! {#ready}

دا یې ده! ستاسو Ultimate Multisite نصب پای ته ورسید. تاسو اوس کولی شئ د **Network Admin Dashboard** څخه خپل "د ویب سایټ په توګه خدمت" پلیټ فارم جوړ کړئ.

![تنظیم بشپړ - چمتو سکرین](/img/installation/wizard-ready.png)

![شبکې مدیر ډیش بورډ، Ultimate Multisite فعال شوی](/img/installation/network-dashboard.png)

لاړ شئ او خوند واخلئ!
