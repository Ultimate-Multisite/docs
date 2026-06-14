---
title: Multi-Tenancy Hostinger
sidebar_position: 8
_i18n_hash: d7facb9c131877c2c834bd2184d9a073
---
# Hostinger Multi-Tenancy

Ultimate Multisite: Multi-Tenancy 1.2.0 waxay ku daraysaa awoodda multi-tenancy (in kasta oo ay la mid tahay in la haysto meel gaar ah) ee Hostinger si in domain-yada loo host-kaado ay uga qayb qaataan hababka bixinta qoyska (tenant provisioning) iyagoo la socda isku-dhafka hore ee Hostinger domain-mapping.

Isticmaal awooddan marka aad maamulayso domain-yada tenant iyo istaraatiirka tenant-ka gaarka ah iyadoo la adeegsanayo Hostinger hPanel.

## Fikradaha samaysiga (Setup notes)

1. Ku habayn isku-dhafka asalka ah ee Hostinger dhexda **Ultimate Multisite > Settings > Host Integrations**.
2. Hubi in token-ka API ee Hostinger uu maamuli karo domain-ka ama subdomain-ka la rabo.
3. Fur (Enable) addon-ka Multi-Tenancy.
4. Habayso istaraatiirka iska-duubidda tenant-ka (tenant isolation strategy) ka hor intaadan soo geliyo tenant-ka.
5. Samayso habka xaqiijinta miigashada (migration verification workflow) ka hor intaadan traffic-ka wax soo saarka ah u dirto tenant-ka.

Awoodda Hostinger waxay isticmaashaa xiriirka la wadaagay ee Hostinger si loo fuliyo hawlaha dhinaca host-ka. DNS-ku weli waa inuu tilmaamaya xisaabta Hostinger-ka saxda ah, iyo xaddidda xisaabta hPanel waxay weli ku salaysan tahay.

## Isbeddellada gaarka ah ee awoodda (Capability-specific changes)

- Tenant-yada sovereign (oo leh xuquuq gaar ah) waxaa la abuuri karaa hawlo domain-ka oo aqoon u leh host-ka.
- Qoraalka database host string-ga isku-machine-ka ayaa loo habaynaya ka hor inta aan la xaqiijiyo inuu shaqeeyo.
- Tenant-yada la maamulayo Hostinger waa inay isticmaalaan qiimaha host DB-ga ee muuqda hPanel-ka haddii WordPress runtime-ku u baahan yahay inuu isbeddel ka sameeyo meel kale (local override).
- Waxyaabaha SSO (Single Sign-On) waxay ku tiirsan tahay in domain-ka tenant-ka uu la xiriiro tenant-ka lagu host-kaaday Hostinger.

## Xallinta dhibaatooyinka tenant-yada Hostinger (Troubleshooting Hostinger tenants)

- Haddii install-ka tenant-ku uu fashilmo, hubi in domain-ka horeba ku la xiriiray xisaabta Hostinger-ka.
- Haddii xaqiijinta database-ka ay fashilto, is barbardhiga username-ka DB-ga tenant-ka, magaca DB-ga, iyo xiriirka host-ka (host binding) hPanel-ka.
- Haddii **Visit (SSO)** uu fashilmo, hubi in DNS-ku iyo SSL-ku ay socdaan domain-ka tenant-ka.
- Haddii la tirtiro (teardown) waxyaabaha host-ka oo ka dib marka la xaqiijiyo backup-yada, siiso database-yada, isticmaalayaasha, ama folders-ka ku jira hPanel.
