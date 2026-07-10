---
title: Iwizadi Yokuseta i-Multisite
sidebar_position: 3
_i18n_hash: fd09dc94f24b0b37245b847380feea3f
---
# Umncedisi Wokumisela i-Multisite {#multisite-setup-wizard}

Ultimate Multisite iquka umncedisi owakhelweyo oguqula ngokuzenzekelayo ufakelo oluqhelekileyo lwe-WordPress lube yinethiwekhi ye-WordPress Multisite. Oku kuphelisa imfuneko yokuhlela ngesandla `wp-config.php` okanye ukuqhuba imiyalelo yedatabase.

:::tip
Ukuba ufakelo lwakho lwe-WordPress sele luqhuba njengenethiwekhi ye-Multisite, ungatsiba eli nyathelo ngokupheleleyo. Umncedisi uvela kuphela xa i-Multisite ingekavulwa.
:::

## Uvela Nini Umncedisi? {#when-does-the-wizard-appear}

Xa uvula Ultimate Multisite kufakelo oluqhelekileyo (olungeyo-Multisite) lwe-WordPress, iplugin iyabona ukuba i-Multisite ayivulwanga kwaye ikuthumele ngokuzenzekelayo kuMncedisi Wokumisela i-Multisite endaweni yomncedisi wokumisela oqhelekileyo.

Unokuyifikelela ngqo ku-**WP Admin > Ultimate Multisite > Multisite Setup**.

## Izinto Ezifunekayo Kwangaphambili {#prerequisites}

Phambi kokusebenzisa umncedisi, qinisekisa ukuba:

- Unayo **administrator access** kufakelo lwakho lwe-WordPress
- Ifayile ye-`wp-config.php` yeseva yakho **iyabhaleka** yiseva yewebhu
- Unayo **i-backup yakutshanje** yeefayile zakho nedatabase

:::warning
Umncedisi ulungisa ifayile yakho ye-`wp-config.php` kwaye udala iitafile ezintsha zedatabase. Soloko udala i-backup ngaphambi kokuqhubeka.
:::

## Inyathelo 1: Wamkelekile {#step-1-welcome}

Isikrini sokuqala sichaza ukuba yintoni i-WordPress Multisite kwaye umncedisi uza kwenza ntoni:

- Vula inqaku le-Multisite kuqwalaselo lwakho lwe-WordPress
- Dala iitafile zedatabase zenethiwekhi ezifunekayo
- Yongeza ii-constants ze-multisite ezifunekayo ku-`wp-config.php`
- Vula Ultimate Multisite kwinqanaba lenethiwekhi kuyo yonke inethiwekhi

![Umncedisi Wokumisela i-Multisite - Inyathelo lokwamkela](/img/installation/multisite-wizard/wizard-welcome.png)

Cofa **Qhubeka** ukuze uqhubeke.

## Inyathelo 2: Uqwalaselo Lwenethiwekhi {#step-2-network-configuration}

Eli nyathelo likucela ukuba uqwalasele useto lwenethiwekhi yakho.

### Ubume Besiza {#site-structure}

Khetha indlela iziza zenethiwekhi yakho eziya kuhlelwa ngayo:

- **Sub-domains** (Kuyacetyiswa) — Iziza zifumana i-subdomain yazo, umz. `site1.yourdomain.com`
- **Sub-directories** — Iziza zidalwa njengeendlela, umz. `yourdomain.com/site1`

:::note
Ukuba ukhetha ii-sub-domains, kuya kufuneka uqwalasele **wildcard DNS** kunye ne-**wildcard SSL certificate** yedomain yakho. Uninzi lwezibuki ze-WordPress ezilawulwayo zikuphatha oku ngokuzenzekelayo. Bona [Ultimate Multisite 101](./ultimate-multisite-101) ukuze ufumane uthelekiso oluneenkcukacha.
:::

### Isihloko Senethiwekhi {#network-title}

Faka igama lenethiwekhi yakho. Oku kusetwa ngokuzenzekelayo kwisihloko sesiza sakho sangoku kudityaniswe u-"Network". Ungakutshintsha oku kamva kuseto lwenethiwekhi.

### I-imeyile yoMlawuli Wenethiwekhi {#network-admin-email}

Idilesi ye-imeyile esetyenziselwa izaziso zolawulo lwenethiwekhi. Oku kusetwa ngokuzenzekelayo kwidilesi ye-imeyile yomsebenzisi wangoku.

![Umncedisi Wokumisela i-Multisite - Uqwalaselo Lwenethiwekhi](/img/installation/multisite-wizard/wizard-network-configuration.png)

Emva kokugcwalisa amasimi, cofa **Qhubeka** ukuze uqhubeke.

## Inyathelo 3: Ufakelo {#step-3-installation}

Cofa iqhosha elithi **Faka** ukuze uqale. Umncedisi wenza amanyathelo amahlanu azenzekelayo ngokulandelelana, ngalinye libonisa inkqubela yalo ngexesha lokwenyani:

![Umncedisi Wokumisela i-Multisite - Ufakelo lusamile](/img/installation/multisite-wizard/wizard-installation-pending.png)

| Inyathelo | Inkcazelo |
|------|-------------|
| **Vula i-Multisite** | Yongeza i-constant ye-`WP_ALLOW_MULTISITE` ku-`wp-config.php` |
| **Dala Inethiwekhi** | Idala iitafile zedatabase ze-multisite (`wp_site`, `wp_sitemeta`, `wp_blogs`, njl.) ize izigcwalise ngoqwalaselo lwenethiwekhi yakho |
| **Hlaziya Uqwalaselo** | Yongeza ii-constants zokugqibela ze-multisite ku-`wp-config.php` (`MULTISITE`, `SUBDOMAIN_INSTALL`, `DOMAIN_CURRENT_SITE`, njl.) |
| **Lungisa ii-Cookies** | Iqinisekisa ukuba i-URL yesiza ichanekile kwimetadata yenethiwekhi ukuze kuthintelwe iingxaki zokuqinisekisa emva kokuvula |
| **Vula iPlugin Kwinethiwekhi** | Ivula Ultimate Multisite kwinqanaba lenethiwekhi ukuze isebenze kuyo yonke inethiwekhi |

Inyathelo ngalinye libonisa enye yezi meko:

- **Kusalindile** — Kulindelwe ukuqhubekekiswa
- **Kuyafakwa...** — Kuyasebenza ngoku
- **Impumelelo!** — Kugqitywe ngempumelelo
- **Umyalezo wempazamo** — Kwenzeke impazamo (umyalezo uza kuchaza ingxaki)

Nje ukuba onke amanyathelo agqitywe ngempumelelo, uza kubona imeko eluhlaza ethi "Impumelelo!" kwinto nganye:

![Umncedisi Wokumisela i-Multisite - Ufakelo lugqityiwe](/img/installation/multisite-wizard/wizard-installation-complete.png)

Umncedisi uya kuthi emva koko aqhubeke ngokuzenzekelayo ukuya kwisikrini sokugqiba.

## Inyathelo 4: Kugqityiwe {#step-4-complete}

Nje ukuba ufakelo lugqityiwe, uza kubona umyalezo wempumelelo oqinisekisa ukuba i-WordPress Multisite ivuliwe.

![Umncedisi Wokumisela i-Multisite - Ukumisela Kugqityiwe](/img/installation/multisite-wizard/wizard-complete.png)

Ngoku ungaqhubeka nomncedisi wokumisela we-Ultimate Multisite ukuze uqwalasele iqonga lakho le-WaaS (iinkcukacha zenkampani, umxholo omiselweyo, amasango entlawulo, njl.).

:::note
Emva kokuba ufakelo lwe-multisite lugqityiwe, isikhangeli sakho siya kudluliselwa ngomlawuli wenethiwekhi osanda kuvulwa. Kusenokufuneka ungene kwakhona kuba ii-cookies zokuqinisekisa zihlaziywa ukuze zilungele imeko ye-multisite.
:::

## Enye Indlela Yokumisela Ngesandla {#manual-setup-fallback}

Ukuba umncedisi akakwazi ukubhala kwifayile yakho ye-`wp-config.php` (ngenxa yeemvume zefayile okanye izithintelo zeseva), uya kubonisa ikhowudi kanye ekufuneka uyongeze ngesandla:

1. Ii-**constants ze-wp-config.php** ekufuneka zongezwe ngaphezulu komgca othi `/* That's all, stop editing! */`
2. Imigaqo ye-**.htaccess rewrite** efanelekileyo kubume besiza osikhethileyo (subdomain okanye subdirectory)

Emva kokwenza utshintsho ngesandla, hlaziya iphepha kwaye umncedisi uya kubona ukuba i-multisite ngoku iyasebenza.

## Ukulungisa Iingxaki {#troubleshooting}

### Umncedisi uthi wp-config.php ayibhaleki {#the-wizard-says-wp-configphp-is-not-writable}

Inkqubo yeseva yakho yewebhu idinga imvume yokubhala kwifayile ye-`wp-config.php`. Ungakhetha:

- Ukutshintsha okwethutyana iimvume zefayile zibe ngu-`644` okanye `666`
- Ukusebenzisa imiyalelo yenye indlela yokumisela ngesandla enikezwe ngumncedisi
- Ukucela uncedo kumboneleli wakho wokubuka

### Iziza azifumaneki emva kokumisela (subdomains) {#sites-are-not-accessible-after-setup-subdomains}

Ukuba ukhethe ubume be-subdomain, kufuneka uqwalasele **wildcard DNS** yedomain yakho. Yongeza irekhodi le-DNS:

```
Type: A (or CNAME)
Host: *
Value: [your server IP]
```

Buza kumniki wakho wokusingatha ukuba awuqinisekanga ukuba oku kuqwalaselwa njani.

### Iingxaki zoqinisekiso emva kokuseta {#authentication-issues-after-setup}

Ukuba ukhutshelwe ngaphandle okanye ufumana iimpazamo ze-cookie emva kokuseta i-multisite:

1. Cima ii-cookie zebrawuza yakho zale sayithi
2. Ngena kwakhona ku-`yourdomain.com/wp-login.php`
3. Ukuba ingxaki iyaqhubeka, jonga ukuba i-`wp-config.php` yakho ayinayo i-`COOKIE_DOMAIN` ebekwe ku-`false` — le yingxaki eyaziwayo kufakelo lwe-multisite lwe-subdomain

### Inyathelo lisilele ngexesha lofakelo {#a-step-failed-during-installation}

Ukuba elinye lamanyathelo ofakelo libonisa impazamo:

1. Qaphela umyalezo wempazamo obonisiweyo
2. Buyela kwinyathelo loqwalaselo uze uzame kwakhona
3. Ukuba impazamo iyaqhubeka, jonga ilog yempazamo ye-PHP yeseva yakho ukuze ufumane iinkcukacha ezingakumbi
4. Amanyathelo asele egqityiwe aya kutsitywa kwiindlela zokuqhuba ezilandelayo (umfaki yi-idempotent)
