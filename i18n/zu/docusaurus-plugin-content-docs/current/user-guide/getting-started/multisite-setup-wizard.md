---
title: Isilekeleli Sokusetha Amasayithi Amaningi
sidebar_position: 3
_i18n_hash: fd09dc94f24b0b37245b847380feea3f
---
# Iwizadi Yokusetha i-Multisite {#multisite-setup-wizard}

Ultimate Multisite ifaka iwizadi eyakhelwe ngaphakathi eguqula ngokuzenzakalelayo ukufakwa okujwayelekile kwe-WordPress kube yinethiwekhi ye-WordPress Multisite. Lokhu kususa isidingo sokuhlela ngesandla `wp-config.php` noma ukusebenzisa imiyalo yedathabheyisi.

:::tip
Uma ukufakwa kwakho kwe-WordPress sekuvele kusebenza njengenethiwekhi ye-Multisite, ungaseqa ngokuphelele lesi sinyathelo. Iwizadi ivela kuphela lapho i-Multisite ingakavunyelwa.
:::

## Iwizadi Ivela Nini? {#when-does-the-wizard-appear}

Uma uvula i-Ultimate Multisite ekufakweni okujwayelekile kwe-WordPress (okungeyona i-Multisite), i-plugin ithola ukuthi i-Multisite ayikavunyelwa futhi ikuqondise ngokuzenzakalelayo ku-Iwizadi Yokusetha i-Multisite esikhundleni sewizadi yokusetha evamile.

Ungakwazi futhi ukuyifinyelela ngqo ku-**WP Admin > Ultimate Multisite > Multisite Setup**.

## Okudingekayo Ngaphambi Kokuqala {#prerequisites}

Ngaphambi kokusebenzisa iwizadi, qiniseka ukuthi:

- Unokufinyelela **komlawuli** ekufakweni kwakho kwe-WordPress
- Ifayela leseva yakho elithi `wp-config.php` **liyabhaleka** yiseva yewebhu
- Une-**backup yakamuva** yamafayela akho nedathabheyisi

:::warning
Iwizadi ishintsha ifayela lakho elithi `wp-config.php` futhi idala amathebula amasha edathabheyisi. Njalo dala i-backup ngaphambi kokuqhubeka.
:::

## Isinyathelo 1: Ukwamukelwa {#step-1-welcome}

Isikrini sokuqala sichaza ukuthi iyini i-WordPress Multisite nokuthi iwizadi izokwenzani:

- Vumela isici se-Multisite ekucushweni kwakho kwe-WordPress
- Dala amathebula edathabheyisi enethiwekhi adingekayo
- Engeza ama-constant e-multisite adingekayo ku-`wp-config.php`
- Vula i-Ultimate Multisite ezingeni lenethiwekhi kuyo yonke inethiwekhi

![Iwizadi Yokusetha i-Multisite - Isinyathelo sokwamukelwa](/img/installation/multisite-wizard/wizard-welcome.png)

Chofoza **Qhubeka** ukuze uqhubeke.

## Isinyathelo 2: Ukucushwa Kwenethiwekhi {#step-2-network-configuration}

Lesi sinyathelo sikucela ukuthi ucushwe izilungiselelo zenethiwekhi yakho.

### Isakhiwo Sesayithi {#site-structure}

Khetha ukuthi amasayithi enethiwekhi yakho azohlelwa kanjani:

- **Ama-sub-domain** (Kunconyiwe) — Amasayithi athola i-subdomain yawo, isb. `site1.yourdomain.com`
- **Ama-sub-directory** — Amasayithi adalwa njengezindlela, isb. `yourdomain.com/site1`

:::note
Uma ukhetha ama-sub-domain, kuzodingeka ucushwe i-**wildcard DNS** kanye nesitifiketi se-**wildcard SSL certificate** sesizinda sakho. Iningi labasingathi be-WordPress abaphethwe likwenza lokhu ngokuzenzakalelayo. Bheka [Ultimate Multisite 101](./ultimate-multisite-101) ukuze uthole ukuqhathanisa okunemininingwane.
:::

### Isihloko Senethiwekhi {#network-title}

Faka igama lenethiwekhi yakho. Lokhu ngokuzenzakalelayo kuba isihloko sesayithi lakho samanje esinamathiselwe elithi "Network". Ungakushintsha lokhu kamuva kuzilungiselelo zenethiwekhi.

### I-imeyili Yomlawuli Wenethiwekhi {#network-admin-email}

Ikheli le-imeyili elisetshenziselwa izaziso zokuphathwa kwenethiwekhi. Lokhu ngokuzenzakalelayo kuba ikheli le-imeyili lomsebenzisi wamanje.

![Iwizadi Yokusetha i-Multisite - Ukucushwa Kwenethiwekhi](/img/installation/multisite-wizard/wizard-network-configuration.png)

Ngemva kokugcwalisa izinkambu, chofoza **Qhubeka** ukuze uqhubeke.

## Isinyathelo 3: Ukufakwa {#step-3-installation}

Chofoza inkinobho ethi **Install** ukuze uqale. Iwizadi yenza izinyathelo ezinhlanu ezizenzakalelayo ngokulandelana, ngasinye sibonisa inqubekela-phambili yaso ngesikhathi sangempela:

![Iwizadi Yokusetha i-Multisite - Ukufakwa kusalindile](/img/installation/multisite-wizard/wizard-installation-pending.png)

| Isinyathelo | Incazelo |
|------|-------------|
| **Vumela i-Multisite** | Engeza i-constant ethi `WP_ALLOW_MULTISITE` ku-`wp-config.php` |
| **Dala Inethiwekhi** | Dala amathebula edathabheyisi e-multisite (`wp_site`, `wp_sitemeta`, `wp_blogs`, njll.) futhi uwagcwalise ngokucushwa kwenethiwekhi yakho |
| **Buyekeza Ukucushwa** | Engeza ama-constant okugcina e-multisite ku-`wp-config.php` (`MULTISITE`, `SUBDOMAIN_INSTALL`, `DOMAIN_CURRENT_SITE`, njll.) |
| **Lungisa Ama-cookie** | Qinisekisa ukuthi i-URL yesayithi ilungile kumethadatha yenethiwekhi ukuze kuvinjelwe izinkinga zokuqinisekisa ngemva kokuvulwa |
| **Vula i-Plugin Ezingeni Lenethiwekhi** | Ivula i-Ultimate Multisite ezingeni lenethiwekhi ukuze isebenze kuyo yonke inethiwekhi |

Isinyathelo ngasinye sibonisa esinye salezi zimo:

- **Kusalindile** — Kulindwe ukucutshungulwa
- **Kuyafakwa...** — Kuyasebenza okwamanje
- **Impumelelo!** — Kuqedwe ngempumelelo
- **Umlayezo wephutha** — Kube nephutha (umlayezo uzochaza inkinga)

Uma zonke izinyathelo seziqedwe ngempumelelo, uzobona isimo esiluhlaza esithi "Impumelelo!" entweni ngayinye:

![Iwizadi Yokusetha i-Multisite - Ukufakwa kuqediwe](/img/installation/multisite-wizard/wizard-installation-complete.png)

Iwizadi izobe isiqhubekela ngokuzenzakalelayo esikrinini sokuqeda.

## Isinyathelo 4: Kuqediwe {#step-4-complete}

Uma ukufakwa sekuqediwe, uzobona umlayezo wempumelelo oqinisekisa ukuthi i-WordPress Multisite isivunyelwe.

![Iwizadi Yokusetha i-Multisite - Ukusetha Kuqediwe](/img/installation/multisite-wizard/wizard-complete.png)

Manje ungaqhubeka newizadi yokusetha ye-Ultimate Multisite ukuze ucushwe inkundla yakho ye-WaaS (imininingwane yenkampani, okuqukethwe okuzenzakalelayo, amasango okukhokha, njll.).

:::note
Ngemva kokuthi ukufakwa kwe-multisite kuqediwe, isiphequluli sakho sizoqondiswa kabusha ngomlawuli wenethiwekhi osanda kuvunyelwa. Kungase kudingeke ungene ngemvume futhi njengoba ama-cookie okuqinisekisa ebuyekezwa ukuze avumelane nendawo ye-multisite.
:::

## Enye Indlela Yokusetha Mathupha {#manual-setup-fallback}

Uma iwizadi ingakwazi ukubhala efayeleni lakho elithi `wp-config.php` (ngenxa yezimvume zefayela noma imikhawulo yeseva), izobonisa ikhodi eqondile okudingeka uyengeze mathupha:

1. **Ama-constant e-wp-config.php** okudingeka engezwe ngenhla komugqa othi `/* That's all, stop editing! */`
2. **Imithetho yokubhala kabusha ye-.htaccess** efanele isakhiwo sesayithi osikhethile (i-subdomain noma i-subdirectory)

Ngemva kokwenza izinguquko mathupha, vuselela ikhasi futhi iwizadi izothola ukuthi i-multisite isiyasebenza manje.

## Ukuxazulula Izinkinga {#troubleshooting}

### Iwizadi ithi i-wp-config.php ayibhaleki {#the-wizard-says-wp-configphp-is-not-writable}

Inqubo yeseva yakho yewebhu idinga imvume yokubhala efayeleni elithi `wp-config.php`. Ungakwazi ukwenza okukodwa kwalokhu:

- Shintsha okwesikhashana izimvume zefayela zibe `644` noma `666`
- Sebenzisa imiyalelo yendlela yokusetha mathupha enikezwe iwizadi
- Cela usizo kumhlinzeki wakho wokusingatha

### Amasayithi awafinyeleleki ngemva kokusetha (ama-subdomain) {#sites-are-not-accessible-after-setup-subdomains}

Uma ukhethe isakhiwo se-subdomain, kudingeka ucushwe i-**wildcard DNS** yesizinda sakho. Engeza irekhodi le-DNS:

```
Uhlobo: A (noma CNAME)
Umsingathi: *
Inani: [i-IP yeseva yakho]
```

Buza kumhlinzeki wakho wokusingatha uma ungaqinisekile ukuthi ungakulungisa kanjani lokhu.

### Izinkinga zokuqinisekisa ngemva kokusetha {#authentication-issues-after-setup}

Uma ukhishiwe ekungeneni noma uhlangabezana namaphutha ama-cookie ngemva kokusethwa kwamasayithi amaningi:

1. Sula ama-cookie esiphequluli sakho ale sayithi
2. Ngena futhi ku-`yourdomain.com/wp-login.php`
3. Uma inkinga iqhubeka, hlola ukuthi i-`wp-config.php` yakho ayinayo i-`COOKIE_DOMAIN` esethwe ku-`false` — lokhu kuyinkinga eyaziwayo ekufakweni kwe-multisite kwe-subdomain

### Isinyathelo sehlulekile ngesikhathi sokufaka {#a-step-failed-during-installation}

Uma esinye sezinyathelo zokufaka sibonisa iphutha:

1. Qaphela umyalezo wephutha obonisiwe
2. Buyela emuva esinyathelweni sokulungiselela bese uzama futhi
3. Uma iphutha liqhubeka, hlola i-PHP error log yeseva yakho ukuze uthole imininingwane eyengeziwe
4. Izinyathelo eseziphothuliwe zizokweqiwa ekusebenzeni okulandelayo (isifaki siyi-idempotent)
