---
title: 'Isifundo 7: Ukwenza kube okwakho'
sidebar_position: 8
_i18n_hash: 90013fc79a9cbb15283ce89b688002b1
---
# Isifundo 7: Ukwenza Kube Okwakho {#lesson-7-making-it-yours}

Amakhasimende akho akufanele nanini azizwe sengathi asebenzisa "isandiso esithile se-WordPress." Kufanele azizwe sengathi asebenzisa i-FitSite -- inkundla eyakhelwe imboni yawo. Lesi sifundo sihlanganisa ukufaka uphawu, ukwenza i-white-label, nokwenza inkundla izwakale njengomkhiqizo.

## Lapho Sigcine Khona {#where-we-left-off}

I-FitSite inenqubo yokukhokha esebenzayo ethatha abanikazi bezitudiyo zokuzivocavoca kusukela ekukhetheni uhlelo iye kusayithi elibukhoma. Manje senza lonke ulwazi lomsebenzisi luzwakale njengomkhiqizo ohlangene, onophawu.

## Isizinda Senkundla Yakho {#your-platform-domain}

Isisekelo sophawu lwakho yisizinda sakho. Ku-FitSite:

- **Isizinda esiyinhloko**: `fitsite.com` (isayithi lakho lokumaketha kanye nomsuka wenethiwekhi)
- **Amasayithi amakhasimende**: `studioname.fitsite.com` (ama-subdomain)
- **Izizinda zangokwezifiso**: Amakhasimende asezinhlelweni ze-Growth ne-Pro angakwazi ukuxhumanisa isizinda sawo

### Ukusetha Isizinda Sakho {#setting-up-your-domain}

1. Bhalisa isizinda senkundla yakho
2. Siqondise kumhlinzeki wakho wokusingatha
3. Lungiselela i-wildcard DNS (`*.fitsite.com`) yama-subdomain amakhasimende
4. Qinisekisa ukuthi i-wildcard SSL iyasebenza

Bheka [Indlela Yokulungiselela Ukuxhumanisa Izizinda](/user-guide/domain-mapping/how-to-configure-domain-mapping) ukuze uthole imiyalelo enemininingwane.

## Ukwenza I-White-Label Ulwazi Lwe-Admin {#white-labeling-the-admin-experience}

Lapho umnikazi westudiyo sokuzivocavoca engena ku-dashboard yesayithi lakhe, kufanele abone uphawu lwakho, hhayi uphawu lwe-WordPress noma lwe-Ultimate Multisite.

### Ikhasi Lokungena Ngokwezifiso {#custom-login-page}

Yenza ngokwezifiso ikhasi lokungena le-WordPress ukuze libonise:

- Ilogo yakho ye-FitSite
- Izithombe zangemuva ezifanele ezokuzivocavoca
- Imibala yophawu lwakho

### Ukufaka Uphawu Ku-Dashboard {#dashboard-branding}

Sebenzisa i-addon ye-[Admin Page Creator](/addons/admin-page-creator) noma i-CSS yangokwezifiso ukuze:

- Ushintshe ilogo ye-WordPress ngelogo yakho ye-FitSite
- Wenze ngokwezifiso uhlelo lwemibala ye-admin ukuze luhambisane nophawu lwakho
- Wengeze i-widget ye-dashboard yangokwezifiso enezixhumanisi ezisheshayo eziqondene nokuzivocavoca nezinsiza zosizo

### Amakhasi E-Admin Angokwezifiso {#custom-admin-pages}

Cabanga ngokudala amakhasi e-admin angokwezifiso aveza izenzo ezibaluleke kakhulu kubanikazi bezitudiyo zokuzivocavoca:

- "Hlela Uhlelo Lwakho Lamakilasi"
- "Buyekeza Amaphrofayela Abaqeqeshi"
- "Buka Isayithi Lakho"

Lokhu kunciphisa isikhathi sokufunda ngokubeka izenzo ezihlobene nomkhakha phambili naphakathi, esikhundleni sokuzifihla kumenyu ejwayelekile ye-WordPress.

## Ukufaka Uphawu Ezokuxhumana Zakho {#branding-your-communications}

Yonke i-imeyili, i-invoyisi, nesaziso kufanele kuqinise uphawu lwakho.

### Ama-imeyili Esistimu {#system-emails}

Iya ku-**Ultimate Multisite > Settings > Emails** bese wenza ngokwezifiso wonke ama-imeyili esistimu:

- **Igama lomthumeli**: FitSite
- **I-imeyili yomthumeli**: hello@fitsite.com
- **Izifanekiso ze-imeyili**: Sebenzisa imibala yophawu lwakho nelogo
- **Ulimi**: Oluqondene nokuzivocavoca kuyo yonke indawo

Ama-imeyili abalulekile okufanele uwenze ngokwezifiso:

| I-imeyili | Inguqulo Ejwayelekile | Inguqulo Ye-FitSite |
|-------|----------------|-----------------|
| Ukwamukela | "Isayithi lakho elisha selilungile" | "Iwebhusayithi yesitudiyo sakho sokuzivocavoca isibukhoma" |
| Irisidi yenkokhelo | "Inkokhelo yamukelwe" | "Inkokhelo yokubhalisa ye-FitSite iqinisekisiwe" |
| Ukuphela kwesivivinyo | "Isivivinyo sakho sizophela maduze" | "Isivivinyo sakho se-FitSite siphela ezinsukwini ezi-3 -- gcina iwebhusayithi yesitudiyo sakho ibukhoma" |

### Ama-invoyisi {#invoices}

Yenza ngokwezifiso izifanekiso zama-invoyisi nge:

- Ilogo yakho ye-FitSite nemibala yophawu
- Imininingwane yebhizinisi lakho
- Amagama emikhiqizo aqondene nokuzivocavoca (hhayi ama-ID ezinhlelo ajwayelekile)

## Isayithi Elibhekene Nekhasimende {#the-customer-facing-site}

Isizinda sakho esiyinhloko (`fitsite.com`) sidinga isayithi lokumaketha elithengisa inkundla. Lokhu kuhlukile ku-admin yenethiwekhi ye-Ultimate Multisite -- kungubuso bomphakathi bebhizinisi lakho.

Amakhasi abalulekile:

- **Ikhasi lasekhaya**: Isithembiso senani esicacile samabhizinisi okuzivocavoca
- **Izici**: Lokho i-FitSite ekwenzayo, ngamagama ezokuzivocavoca
- **Amanani**: Izinhlelo zakho ezintathu ezinokuqhathanisa izici okuqondene nomkhakha
- **Izibonelo**: Bonisa amasayithi akhiwe kule nkundla
- **Bhalisa**: Izixhumanisi eziya efomini lakho lokukhokha

:::tip Isayithi Lakho Lokumaketha Lingaba Isayithi Lenethiwekhi
Dala isayithi lakho lokumaketha njengesayithi ngaphakathi kwenethiwekhi yakho. Lokhu kukuvumela ukuthi ulilawule kusuka ku-dashboard efanayo futhi kubonise amandla enkundla yakho uqobo.
:::

## Isizinda Sangokwezifiso Samakhasimende {#custom-domain-for-customers}

Kumakhasimende asezinhlelweni ezifaka izizinda zangokwezifiso, bhala inqubo ngokucacile:

1. Ikhasimende libhalisa noma lidlulisela isizinda salo kumbhalisi
2. Ikhasimende libuyekeza i-DNS ukuze liqondise enkundleni yakho (nikeza amarekhodi aqondile)
3. Ultimate Multisite iphatha ukuxhumanisa isizinda ne-SSL

Dala i-athikili yosizo noma okufakiwe kusizindalwazi solwazi okukhethekile kule nqubo, okubhalelwe abanikazi bezitudiyo zokuzivocavoca abangewona ochwepheshe bezobuchwepheshe.

## Inethiwekhi Ye-FitSite Kuze Kube Manje {#the-fitsite-network-so-far}

```
Inethiwekhi Ye-FitSite
├── WordPress Multisite (imodi ye-subdomain)
├── Ultimate Multisite (ilungiselelwe + ifakwe uphawu)
├── Isizinda Senkundla (fitsite.com + wildcard SSL)
├── Izifanekiso Zesayithi (Studio Essential, Gym Pro, Fitness Chain)
├── Imikhiqizo (Starter, Growth, Pro + Order Bumps)
├── Inqubo Yokukhokha (eqondene nomkhakha, ihloliwe)
├── Ukufaka Uphawu
│   ├── Ikhasi lokungena langokwezifiso
│   ├── I-dashboard ye-admin enophawu
│   ├── Ama-imeyili esistimu aqondene nomkhakha
│   ├── Ama-invoyisi anophawu
│   └── Isayithi lokumaketha ku-fitsite.com
└── Ilungele inqubo yokwamukelwa (isifundo esilandelayo)
```

## Esikwakhe Kulesi Sifundo {#what-we-built-this-lesson}

- **Isizinda senkundla ne-DNS** kulungiselelwe ulwazi olunophawu
- **I-admin eyenziwe i-white-label** enophawu lwe-FitSite kuyo yonke indawo
- **Ezokuxhumana ezenziwe ngokwezifiso** -- ama-imeyili, ama-invoyisi, nezaziso konke kuhambisana nophawu
- **Isayithi lokumaketha** elithengisa i-FitSite kubanikazi bezitudiyo zokuzivocavoca
- **Imibhalo yesizinda sangokwezifiso** yamakhasimende afuna isizinda sawo

---

**Okulandelayo:** [Isifundo 8: Ukwamukelwa Kwekhasimende](lesson-8-onboarding) -- siklama ulwazi oluguqula ukubhalisa okusha kube ikhasimende elisebenzayo, elijabule.
