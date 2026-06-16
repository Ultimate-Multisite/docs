---
title: የኡልቲమేት መልቲሳይት መጫኛ
sidebar_position: 12
_i18n_hash: dda8f0d2b67bc421c0a484c76c8eae6d
---
# የመጨረሻው ማልቲሳይት መጫን

:::ማስታወሻ
ይህ ትምህርት፣ የዎርድፕረስ ማልቲሳይት አስቀድሞ ተጭኖ እና ተዋቅሮ እንዲኖር ይጠብቃል፡፡ እንዴት እንደሚሰራ ለመማር፣ በ WP Beginner ላይ ያለውን [እዚህ ትምህርት](https://www.wpbeginner.com/glossary/multisite/) ይመለከቱ።
:::

## የመተግበሪያው መጫን

የመጨረሻው ማልቲሳይት በ[WordPress.org](https://wordpress.org/plugins/ultimate-multisite/) ላይ ለነጻ ይገኛል።

ከ **Network Admin Dashboard**፣ ወደ **Plugins → Add New Plugin** ይሂዱ።

![Network Admin Add New Plugin ገጽ](/img/installation/add-new-plugin.png)

**"የመጨረሻው ማልቲሳይት"** (ለ ትክክለኛ ግጥሚያ በሁለት ምልክቶች) በመጠቀም ይፈልጉ፣ እና የመጀመሪያው ውጤት ሆኖ ይታያል። **Install Now** ላይ ጠቅ ያድርጉ።

![የ "የመጨረሻው ማልቲሳይት" የሚለው ፍለጋ ውጤት](/img/installation/search-ultimate-multisite.png)

ከተጫኑ በኋላ፣ በመላው የእርስዎ መረብ ላይ ለመተግበሩ **Network Activate** ላይ ጠቅ ያድርጉ።

![የተጫነ የመተግበሪያ እና Network Activate ቁልፍ ያለው ገጽ](/img/installation/plugin-installed.png)

ከተመሰረተ በኋላ፣ በራስዎ ወደ የSetup Wizard ይመራሉ።

![የተመሰረተ የመተግበሪያ እና ወደ wizard የተመለሰው ገጽ](/img/installation/plugin-activated.png)

## Setup Wizard

የSetup Wizard፣ የመጨረሻውን ማልቲሳይት ለመዋቅር በመոտ 10 ደቂቃዎች ውስጥ ይመራዎታል።

### እንኳን ደህና መጡ

ለመጀመር **Get Started** ላይ ጠቅ ያድርጉ።

![የSetup Wizard እንኳን ደህና መጣ ገጽ](/img/installation/wizard-welcome.png)

### ቅድመ-መጫኛ ፍተሻዎች

ይህ ደረጃ፣ የእርስዎ ስርዓት እና የዎርድፕረስ መጫኛ የመጨረሻውን ማልቲሳይት መስፈርቶች ያሟላሉ ለማረጋገጥ ይፈትሻል። ሁሉም ነገር ጥሩ ከታየ፣ **Go to the Next Step** ላይ ጠቅ ያድርጉ።

![የስርዓት መስፈርቶችን የሚያሳዩ ቅድመ-መጫኛ ፍተሻዎች](/img/installation/wizard-pre-install-checks.png)

:::ማስታወሻ Network Activate ቁልፍ (v2.6.1+)
የመጨረሻው ማልቲሳይት ተጭኖ፣ ነገር ግን **በእርግጥም በሙሉ መረብ ላይ አልተሰራም** - ለምሳሌ፣ ከኔትዎርክ የመተግበሪያዎች ገጽ ውስጥ **Activate** (ለአንድ ጣቢያ) ይልቅ **Network Activate** ጠቅ ካደረጉ - ቅድመ-መጫኛ ፍተሻው ይህን ያገኛል እና **Network Activate** ቁልፍ ያሳያል።

**Network Activate** ላይ ጠቅ በማድረግ፣ የመተግበሪያውን በመላው የእርስዎ ማልቲሳይት መረብ ላይ በራስዎ ይተግባዋል። አንዴ ከተሰበረ በኋላ፣ wizard ወደ መጫኛ ደረጃ ይቀጥላል። ለመተግበሩ እንዲስተካከል ከwizard ውጪ መሄድ አያስፈልግም።
:::

### መጫኛ

የመጫኛው፣ አስፈላጊዎቹን የዳታቤስ ጠረጴዛዎች ይፈጥራል እና የመጨረሻው ማልቲሳይት ለመሰራት የሚያስፈልገውን `sunrise.php` ፋይል ይጭናል። ለመቀጠል **Install** ላይ ጠቅ ያድርጉ።

![የዳታቤስ ጠረጴዛዎችን እና sunrise.php የሚያሳዩ መጫኛ ደረጃ](/img/installation/wizard-installation.png)

### የእርስዎ ኩባንያ

የኩባንያዎን መረጃ ይሙሉ እና የነባር ምንዛሬዎን ያስቀምጡ። ይህ መረጃ በመላው WaaS መድረክዎ ውስጥ ጥቅም ላይ ይውላል። ከጨረሱ በኋላ **Continue** ላይ ጠቅ ያድርጉ።

![የ "እርስዎ ኩባንያ" ውቅር ደረጃ](/img/installation/wizard-your-company.png)

### ነባር ይዘት

ይህ ደረጃ፣ አስቀድሞ የተዘጋጁ አብነቶችን፣ ምርቶች እና ሌሎች መጀመሪያ ይዘቶችን እንዲጭኑ ያስችልዎታል። ይህ የመጨረሻውን ማልቲሳይት ባህሪያትን ለመረዳት ጥሩ መንገድ ነው። የነባሩን ይዘት ለማከል **Install** ላይ ጠቅ ያድርጉ ወይም ከፈለጉ ይህንን ደረጃ ይዝገቡ።

![የነባር ይዘት መጫኛ ደረጃ](/img/installation/wizard-default-content.png)

### የሚመከሩ የመተግበሪያዎች

አማራጭ፣ የሚመከሩ ተጨማሪ የመተግበሪያዎችን ይጭኑ። ለማከል **Install** ላይ ጠቅ ያድርጉ ወይም ለመቀጠል ይዝገቡ።

![የሚመከሩ የመተግበሪያዎች ደረጃ](/img/installation/wizard-recommended-plugins.png)

### ዝግጁ!

አሁን ጨርሷል። የመጨረሻው ማልቲሳይት መጫኛዎ ተጠናቋል። ከ **Network Admin Dashboard**፣ የእርስዎን Website as a Service መድረክ መገንባት ጀምረዋል።

![የተጠናቀረ Setup - ዝግጁ ገጽ](/img/installation/wizard-ready.png)

![በ Network Admin Dashboard ላይ የመጨረሻው ማልቲሳይት የተሰበረ](/img/installation/network-dashboard.png)

ሂደን እና ይደሰቱ!
