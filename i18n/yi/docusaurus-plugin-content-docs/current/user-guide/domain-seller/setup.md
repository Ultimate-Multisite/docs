---
title: איינריכטונג און פּראַוויידער־קאָנפֿיגוראַציע
sidebar_position: 1
_i18n_hash: 854fd649457edceefde0eb8246446ebe
---
# Domain Seller: אײַנשטעלונג און Provider קאָנפֿיגוראַציע {#domain-seller-setup-and-provider-configuration}

דער Domain Seller addon קומט מיט אַ געפֿירטן אײַנשטעלונג־וויזאַרד וואָס פֿירט אײַך דורך יעדן נויטיקן שריט. די זײַט באַהאַנדלט דעם וויזאַרד־פֿלוס און ווי צו קאָנפֿיגורירן אָדער ווידער־קאָנפֿיגורירן providers דערנאָך.

## פֿאָדערונגען {#requirements}

- **Multisite Ultimate** v2.4.12 אָדער העכער, אַקטיווירט איבערן נעצווערק
- **PHP** 7.4+
- API קרעדענציאַלן פֿאַר מינדסטנס איין געשטיצטן רעגיסטראַר

## ערשטער־לויף אײַנשטעלונג־וויזאַרד {#first-run-setup-wizard}

דער אײַנשטעלונג־וויזאַרד ווערט אויטאָמאַטיש געעפֿנט דאָס ערשטע מאָל וואָס איר אַקטיווירט דעם plugin איבערן נעצווערק. ער איז אויך פֿאַראַן אין יעדן צײַט פֿון **Network Admin › Ultimate Multisite › Domain Seller Setup**.

### שריט 1 — אויסקלײַבן אַ provider {#step-1--choose-a-provider}

קלײַבט אויס דעם רעגיסטראַר וואָס איר ווילט פֿאַרבינדן. געשטיצטע אָפּציעס:

| Provider | DNS פֿאַרוואַלטונג | WHOIS פּריוואַטקייט |
|---|---|---|
| OpenSRS | יאָ | יאָ |
| Namecheap | ניין | יאָ (WhoisGuard, פֿרײַ) |
| HostAfrica | יאָ | יאָ (ID שוץ) |
| Openprovider | יאָ | יאָ |
| Hostinger | דורך דער קערן Hostinger domain mapping פֿאַר gehostete דאָמיינס | יאָ |
| GoDaddy | ניין | ניין |
| ResellerClub | יאָ | ניין |
| NameSilo | ניין | ניין |
| Enom | יאָ | ניין |

### שריט 2 — אַרײַנגעבן קרעדענציאַלן {#step-2--enter-credentials}

יעדער provider האָט אַנדערע קרעדענציאַל־פעלדער:

**OpenSRS** — באַניצער־נאָמען און פּריוואַטער שליסל (פֿון דעם OpenSRS Reseller Control Panel)

**Namecheap** — באַניצער־נאָמען און API שליסל (פֿון Account › Tools › API Access)

**HostAfrica** — Domains Reseller API endpoint און קרעדענציאַלן פֿון דעם HostAfrica reseller module. קיין באַזונדערער sandbox endpoint איז איצט נישט דאָקומענטירט; טעסט מיט זיכערע בלויז־לייענען קאָנטראָלן איידער איר פֿירט דורך לעבעדיקע רעגיסטראַציעס.

**Openprovider** — באַניצער־נאָמען און פּאַראָל מיט API צוטריט אַקטיווירט. אָפּציאָנעלער sandbox מאָדוס נוצט דעם Openprovider sandbox API, און אַן אָפּציאָנעלער נאָרמאַלער קונה־handle קען ווערן ווידער־גענוצט פֿאַר רעגיסטראַציעס.

**Hostinger** — דער געטיילטער Hostinger hPanel API token פֿון דער קערן Hostinger אינטעגראַציע. דער זעלבער token טרײַבט קערן domain mapping און Domain Seller רעגיסטראַציע־אָפּעראַציעס.

**GoDaddy** — API שליסל און סוד (פֿון developer.godaddy.com)

**ResellerClub** — Reseller ID און API שליסל (פֿון דעם ResellerClub control panel)

**NameSilo** — API שליסל (פֿון namesilo.com › Account › API Manager)

**Enom** — Account ID און API token

צייכנט אָן **Sandbox mode** וווּ עס איז פֿאַראַן, כּדי צו טעסטן קעגן דעם provider׳ס טעסט־סבֿיבֿה איידער מען גייט לעבעדיק.

### שריט 3 — טעסטן די פֿאַרבינדונג {#step-3--test-the-connection}

קליקט **Test Connection**. דער וויזאַרד שיקט אַ לייכטן API רוף צו באַשטעטיקן קרעדענציאַלן און פֿאַרבינדלעכקייט. פֿאַרריכט יעדע קרעדענציאַל־פּראָבלעם איידער איר גייט ווײַטער.

### שריט 4 — אימפּאָרטירן TLDs {#step-4--import-tlds}

קליקט **Import TLDs** צו אַרײַנציען אַלע פֿאַראַנענע TLDs און wholesale פּרײַזן פֿון דעם פֿאַרבונדענעם provider. דאָס באַפֿילט די TLD רשימה וואָס ווערט גענוצט דורך domain פּראָדוקטן. דער אימפּאָרט קען נעמען 30–60 סעקונדעס פֿאַר providers מיט גרויסע TLD קאַטאַלאָגן.

TLDs ווערן אויך אויטאָמאַטיש ווידער־סינכראָניזירט איין מאָל אַ טאָג דורך אַ פּלאַנירטער cron אַרבעט.

### שריט 5 — שאַפֿן אַ domain פּראָדוקט {#step-5--create-a-domain-product}

דער וויזאַרד שאַפֿט אַ נאָרמאַלן catch-all domain פּראָדוקט מיט אַ 10% markup. איר קענט רעדאַקטירן דעם פּראָדוקט גלײַך אָדער איבערשפּרינגען און שאַפֿן פּראָדוקטן מאַנועל אונטער **Ultimate Multisite › Products**.

זעט [Domain פּראָדוקטן און פּרײַזן](./domain-products) פֿאַרן פולן פּראָדוקט־קאָנפֿיגוראַציע־וועגווייזער.

---

## ווידער־קאָנפֿיגורירן אַ provider {#reconfiguring-a-provider}

גייט צו **Network Admin › Ultimate Multisite › Settings › Domain Seller** (אָדער קליקט **Settings** אין דער plugin רשימה).

די אײַנשטעלונגען־זײַט אַנטהאַלט:

- **Enable domain selling** — שלט אָן/אויס די גאַנצע פֿונקציע
- **Default provider** — דער provider גענוצט פֿאַר domain זוכונגען און נײַע פּראָדוקטן
- **Max TLDs per search** — וויפֿל TLDs צו קאָנטראָלירן ווען אַ קונה זוכט; העכערע ווערטן ווײַזן מער אָפּציעס אָבער זײַנען פּאַמעלעכער
- **Availability cache duration** — ווי לאַנג צו cache availability און פּרײַז־רעזולטאַטן; נידעריקערע ווערטן זײַנען מער פּינקטלעך אָבער פֿאַרגרעסערן API רופֿן
- **Manage domain products** — שנעלער לינק צו דער Products רשימה
- **Configure providers** — עפֿנט דעם Integration Wizard צו צולייגן אָדער ווידער־קאָנפֿיגורירן providers

### צולייגן אַ צווייטן provider {#adding-a-second-provider}

קליקט **Configure providers** און לאָזט לויפֿן דעם וויזאַרד ווידער פֿאַרן נײַעם רעגיסטראַר. איר קענט האָבן עטלעכע providers קאָנפֿיגורירט Zugleich. טיילט צו יעדן domain פּראָדוקט צו אַ ספּעציפֿישן provider, אָדער לאָזט עס אויפֿן נאָרמאַלן.

### מאַנועל סינכראָניזירן TLDs {#syncing-tlds-manually}

אין דער אײַנשטעלונגען־זײַט, קליקט **Sync TLDs** לעבן יעדן קאָנפֿיגורירטן provider צו אַרײַנציען די לעצטע פּרײַזן. דאָס איז נוצלעך נאָך אַ provider דערהײַנטיקט wholesale פּרײַזן אָדער לייגט צו נײַע TLDs.

---

## לאָגס {#logs}

יעדער provider שרײַבט צו זײַן אייגענעם לאָג־קאַנאַל. לאָגס קען מען זען אונטער **Network Admin › Ultimate Multisite › Logs**:

| לאָג־קאַנאַל | אינהאַלט |
|---|---|
| `domain-seller-registration` | אַלע רעגיסטראַציע־פּרוּוון (הצלחה און דורכפֿאַל) |
| `domain-seller-renewal` | באַנײַונג־אַרבעט רעזולטאַטן |
| `domain-seller-opensrs` | רויע OpenSRS API אַקטיוויטעט |
| `domain-seller-namecheap` | רויע Namecheap API אַקטיוויטעט |
| `domain-seller-hostafrica` | רויע HostAfrica API אַקטיוויטעט |
| `domain-seller-openprovider` | רויע Openprovider API אַקטיוויטעט |
| `domain-seller-hostinger` | רויע Hostinger API אַקטיוויטעט |
| `domain-seller-godaddy` | רויע GoDaddy API אַקטיוויטעט |
| `domain-seller-resellerclub` | רויע ResellerClub API אַקטיוויטעט |
| `domain-seller-namesilo` | רויע NameSilo API אַקטיוויטעט |
| `domain-seller-enom` | רויע Enom API אַקטיוויטעט |

---

## Provider פֿעיִקייט־באַמערקונגען {#provider-capability-notes}

נישט יעדע רעגיסטראַר־API שטעלט אַרויס די זעלבע אָפּעראַציעס. דער addon ווײַזט נישט־געשטיצטע אָפּעראַציעס מיט קלאָרע admin־געווענדטע פֿעלערן אַנשטאָט שטיל דורכצופֿאַלן.

- **HostAfrica** שטיצט דעם ברייטסטן לעבן־ריסעלער אַרבעט־פֿלוס, אַרײַנגערעכנט זוכונג, TLD/פּרײַז־סינק, רעגיסטראַציע, באַנײַונג, אַריבערפֿיר, nameserver־דערהײַנטיקונגען, DNS רעקאָרדס, EPP קאָדן, registrar lock, און ID שוץ.
- **Openprovider** שטיצט ריסעלער־פּרײַזיקע TLD סינק, רעגיסטראַציע, באַנײַונג, אַריבערפֿירן, nameserver־דערהײַנטיקונגען, DNS זאָנעס, EPP קאָדן, registrar lock, און WHOIS פּריוואַטקייט. עס אָטענטיפֿיצירט זיך מיט אַ קורץ־גילטיקן bearer token וואָס דער צולייג דערפֿרישט אויטאָמאַטיש.
- **Hostinger** שטיצט פֿאַראַנענקייט־זוכונג, רעגיסטראַציע, פּאָרטפֿעל־זוכונג, nameserver־דערהײַנטיקונגען, registrar lock, און WHOIS פּריוואַטקייט דורך דעם געטיילטן hPanel API token. Hostinger'ס עפֿנטלעכע Domains API שטעלט נישט צו ריסעלער/גראָסהאַנדל־פּרײַזן, אַרײַנקומענדיקן אַריבערפֿיר, בפֿירושע באַנײַונג, אָדער EPP־קאָד אָפּשאַפֿונג; באַנײַונגען זענען בלויז אויטאָ־באַנײַונג.
