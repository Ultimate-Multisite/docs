---
title: אינסטאַלירן Ultimate Multisite
sidebar_position: 12
_i18n_hash: dda8f0d2b67bc421c0a484c76c8eae6d
---
# אינסטאַלירן Ultimate Multisite

:::note
דער טוטאָריאַל נעמט אָן אַז איר האָט שוין WordPress Multisite אינסטאַלירט און קאָנפֿיגורירט. כּדי זיך צו לערנען ווי אַזוי, קוקט אָן [דעם טוטאָריאַל](https://www.wpbeginner.com/glossary/multisite/) פֿון WP Beginner.
:::

## אינסטאַלירן דעם Plugin {#installing-the-plugin}

Ultimate Multisite איז בנימצא אומזיסט אויף [WordPress.org](https://wordpress.org/plugins/ultimate-multisite/).

פֿון אייער **Network Admin Dashboard**, גייט צו **Plugins → Add New Plugin**.

![Network Admin Add New Plugin בלאַט](/img/installation/add-new-plugin.png)

זוכט נאָך **"Ultimate Multisite"** (מיט ציטיר־צייכנס פֿאַר אַן פּינקטלעכן צופּאַס) און עס וועט זיך באַווײַזן ווי דער ערשטער רעזולטאַט. גיט אַ קליק אויף **Install Now**.

![זוך־רעזולטאַטן וואָס ווײַזן Ultimate Multisite](/img/installation/search-ultimate-multisite.png)

ווען עס איז אינסטאַלירט, גיט אַ קליק אויף **Network Activate** כּדי צו אַקטיווירן דעם plugin איבער אייער גאַנצן נעץ־ווערק.

![Plugin אינסטאַלירט מיט Network Activate קנעפּל](/img/installation/plugin-installed.png)

נאָך דער אַקטיווירונג, וועט איר אויטאָמאַטיש ווערן ווײַטערגעפֿירט צום Setup Wizard.

![Plugin אַקטיווירט און ווײַטערגעפֿירט צום וויזערד](/img/installation/plugin-activated.png)

## Setup Wizard {#setup-wizard}

דער Setup Wizard וועט אייך דורכפֿירן דורך קאָנפֿיגורירן Ultimate Multisite אין בערך 10 מינוט.

### ברוכים הבאים {#welcome}

גיט אַ קליק אויף **Get Started** כּדי אָנהייבן.

![Setup Wizard באַגריסונג־עקראן](/img/installation/wizard-welcome.png)

### פֿאַר־אינסטאַלירונג קאָנטראָלן {#pre-install-checks}

דער שריט קאָנטראָלירט אייער סיסטעם־אינפֿאָרמאַציע און WordPress אינסטאַלירונג כּדי זיכער מאַכן אַז זי דערפֿילט די פֿאָדערונגען פֿון Ultimate Multisite. אויב אַלץ זעט אויס גוט, גיט אַ קליק אויף **Go to the Next Step**.

![פֿאַר־אינסטאַלירונג קאָנטראָלן וואָס ווײַזן סיסטעם־פֿאָדערונגען](/img/installation/wizard-pre-install-checks.png)

:::note Network Activate קנעפּל (v2.6.1+)
אויב Ultimate Multisite איז אינסטאַלירט געוואָרן אָבער **נאָך נישט נעץ־אַקטיווירט** — למשל, אויב איר האָט געקליקט **Activate** (איין־זײַטל) אַנשטאָט **Network Activate** פֿון דעם נעץ־plugins עקראן — וועט דער פֿאַר־אינסטאַלירונג קאָנטראָלן־שריט דאָס דערקענען און ווײַזן אַ **Network Activate** קנעפּל.

קליקן **Network Activate** אַקטיווירט אויטאָמאַטיש דעם plugin איבער אייער גאַנצן multisite נעץ־ווערק. אַמאָל אַקטיווירט, גייט דער וויזערד ווײַטער נאָרמאַל צום אינסטאַלירונג־שריט. איר דאַרפֿט נישט פֿאַרלאָזן דעם וויזערד כּדי צו פֿאַרריכטן דעם אַקטיווירונג־צושטאַנד.
:::

### אינסטאַלירונג {#installation}

דער אינסטאַלירער וועט שאַפֿן די נויטיקע דאַטאַבאַזע־טאַבעלעס און אינסטאַלירן די `sunrise.php` טעקע וואָס Ultimate Multisite דאַרף כּדי צו פֿונקציאָנירן. גיט אַ קליק אויף **Install** כּדי ווײַטערצוגיין.

![אינסטאַלירונג־שריט וואָס ווײַזט דאַטאַבאַזע־טאַבעלעס און sunrise.php](/img/installation/wizard-installation.png)

### אייער פֿירמע {#your-company}

פֿילט אַרײַן אייער פֿירמע־אינפֿאָרמאַציע און שטעלט אײַן אייער פֿעליקייט־וואַלוטע. די אינפֿאָרמאַציע וועט גענוצט ווערן איבער אייער WaaS פּלאַטפֿאָרמע. גיט אַ קליק אויף **Continue** ווען איר זײַט פֿאַרטיק.

![אייער פֿירמע קאָנפֿיגוראַציע־שריט](/img/installation/wizard-your-company.png)

### פֿעליקייט־אינהאַלט {#default-content}

דער שריט לאָזט אייך אינסטאַלירן פֿאָרויס־דעפֿינירטע שאַבלאָנען, פּראָדוקטן, און אַנדער אָנהייב־אינהאַלט. דאָס איז אַ גרויסער אופֿן זיך באַקענען מיט די פֿעיִקייטן פֿון Ultimate Multisite. גיט אַ קליק אויף **Install** כּדי צוצולייגן דעם פֿעליקייט־אינהאַלט, אָדער איבערהיפּט דעם שריט אויב איר ווילט בעסער אָנהייבן פֿון גאָרנישט.

![פֿעליקייט־אינהאַלט אינסטאַלירונג־שריט](/img/installation/wizard-default-content.png)

### רעקאָמענדירטע Plugins {#recommended-plugins}

אויב איר ווילט, אינסטאַלירט רעקאָמענדירטע באַגלייטער־plugins. גיט אַ קליק אויף **Install** כּדי זיי צוצולייגן, אָדער איבערהיפּט כּדי ווײַטערצוגיין.

![רעקאָמענדירטע plugins שריט](/img/installation/wizard-recommended-plugins.png)

### גרייט! {#ready}

דאָס איז עס! אייער Ultimate Multisite אינסטאַלירונג איז פֿאַרענדיקט. איר קענט איצט אָנהייבן בויען אייער Website as a Service פּלאַטפֿאָרמע פֿון דעם **Network Admin Dashboard**.

![Setup פֿאַרענדיקט - גרייט עקראן](/img/installation/wizard-ready.png)

![Network Admin Dashboard מיט Ultimate Multisite אַקטיוו](/img/installation/network-dashboard.png)

גייט ווײַטער און האָט אַ ביסל פֿאַרגעניגן!
