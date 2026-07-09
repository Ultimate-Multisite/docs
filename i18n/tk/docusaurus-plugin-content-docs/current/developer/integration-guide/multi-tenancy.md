---
title: Köp kärendeçili integrasiýasy
sidebar_position: 6
_i18n_hash: 3cf63ea3f0dba9dcf2a8fc74478aedbb
---
# Multi-Tenancy integrasiýasy

Ultimate Multisite: Multi-Tenancy 1.2.0 özbaşdak tenantlar, migrasiýa barlagy we tenant ýaşaýyş sikliniň awtomatlaşdyrylmagy üçin birnäçe integrasiýa nokadyny üýtgedýär.

## Tenant bootstrap akymy

Tenantlary döredýän ýa-da üýtgedýän integrasiýalar şu tertibe eýermelidir:

1. Tenant sanaw ýazgysyny we izolýasiýa modelini kesgitläň.
2. Tenant maglumat binýadynyň ýazýan ulanyjysyny dörediň ýa-da barlaň.
3. Tenant shemasyny bootstrap ediň.
4. Tenant ulanyjylaryny üpjün ediň.
5. Tenant marşrutlaşdyrmasyny we faýl ulgamy ýollaryny bellige alyň.
6. Tenanty elýeterli etmezden öň migrasiýa barlagyny işlediň.

Özbaşdak tenantyň tor maglumat binýady birikmesini gaýtadan ulanyp biljekdigini çaklamaň. Addon tarapyndan üpjün edilýän tenant sanawyny we ýazýan ulanyjy abstraksiýalaryny ulanyň.

## SSO we REST hooklar

Ýagdaýsyz tenant awtomatik giriş, maksat talaby, JTI gaýtadan ulanma goragy, möhlet çägi we gelip çykyş berkitmesi bolan gysga möhletli tokenleri ulanýar. Giriş düwmelerini ýa-da uzakdan dolandyryş baglanyşyklaryny goşýan integrasiýalar tenant giriş URL-lerini göni düzmegiň deregine goldanýan SSO akymy arkaly tenant saparlaryny döretmelidir.

Tor tarapyndaky API audit wakalary we gündelik jemlemeler özbaşdak tenant gatewayleri üçin elýeterlidir. Tenant ýaşaýyş sikli endpointlerine jaň edýän daşarky ulgamlary sazlanda şol loglary ulanyň.

## Özbaşdak müşderi amal URL-leri

Ultimate Multisite v2.13.0 özbaşdak-tenant müşderi amallaryny Account, checkout, hasaplaşyk, hasap-faktura, saýt, şablon-çalşyrmak we domen-kartalaşdyrmak akymlary üçin esasy saýta yzyna ugrukdyrýar. Tenant tarapyndaky dolandyryş baglanyşyklaryny görkezýän integrasiýalar şol amallary esasy saýtdaky müşderi paneline gönükdirmeli we ulanyjy amaly tamamlandan soň tenanty yzyna dolanyp bilmeli bolsa, tassyklanan gaýdyp barmak nyşanyny goşmalydyr.

Domenara dolandyryş baglanyşyklary üçin esasy SSO wrapperini ulanyň:

```php
$url = wu_with_sso($main_site_customer_url);
```

Döredilen URL `wu_sso_url` arkaly filterlenip galýar; ol SSO URL-ni, häzirki ulanyjyny, nyşan saýt ID-sini we ugrukdyrma kontekstini alýar. Addonlar şol filteri üpjün edijä mahsus konteksti goşmak ýa-da Ultimate Multisite-yň token barlagyny saklap, broker URL-ni çalyşmak üçin ulanyp biler.

Agzalyk, hasap-faktura, hasaplaşyk-salgysy, şablon ýa-da domen-dolandyryş ýagdaýyny özbaşdak tenantyň içinde gaýtalamaň. Tenant Dashboard-yny işe goýberiji hökmünde, esasy saýtdaky müşderi panelini bolsa dolandyrylýan amallar üçin esasy ýazgy ulgamy hökmünde kabul ediň.

## Migrasiýa barlagy

Migrasiýadan soň ýa-da ýaşaýyş sikli integrasiýasy tenant maglumatlaryny üýtgedenden soň, barlag derwezelerini işlediň:

- `wp tenant verify-no-legacy --site=<site-id>` tenantyň mundan beýläk köne tor tarapyndaky ýollara bagly däldigini tassyklaýar.
- `wp tenant verify-sovereign-push --site=<site-id>` özbaşdak push işleriniň işlenip we boşadylyp bilinýändigini tassyklaýar.

Integrasiýalar şowsuz barlagy ýaýratma päsgelçiligi hökmünde kabul etmeli we şowsuzlyk çözülýänçä tenanty live diýip bellemezlikden gaça durmaly.

## Tenanty pozmak

Pozmak akymlary tenant maglumat binýady şahsyýet maglumatlarynyň arassalanmagy üçin addon teardown ýoluna jaň etmelidir. Daşarky integrasiýalar teardown üstünlikli bolandan soň üpjün ediji resurslaryny aýryp biler, ýöne barlag ýa-da async push işleri heniz işleýärkä host maglumat binýatlaryny ýa-da bukjalary pozmaly däldir.

## Könelen maglumat binýady routeri

Köne `Database_Router` deprecation stub bilen çalşyryldy. Täze integrasiýalar köne router class-a bagly bolmagyň deregine tenantlary häzirki saýt routeri we tenant sanawy API-leri arkaly kesgitlemelidir.
