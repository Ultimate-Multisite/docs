---
title: Integrasyon ng Multi-Tenancy
sidebar_position: 6
_i18n_hash: 3cf63ea3f0dba9dcf2a8fc74478aedbb
---
# Integrasyon ng Multi-Tenancy

Ultimate Multisite: Binabago ng Multi-Tenancy 1.2.0 ang ilang punto ng integrasyon para sa mga nagsasariling tenant, beripikasyon ng migrasyon, at awtomasyon ng lifecycle ng tenant.

## Daloy ng bootstrap ng tenant {#tenant-bootstrap-flow}

Dapat sundin ng mga integrasyong lumilikha o nagbabago ng mga tenant ang ganitong pagkakasunod-sunod:

1. Tukuyin ang rekord sa registry ng tenant at ang modelo ng isolation.
2. Likhain o beripikahin ang writer ng database ng tenant.
3. I-bootstrap ang schema ng tenant.
4. Maglaan ng mga user ng tenant.
5. Irehistro ang routing ng tenant at mga path ng filesystem.
6. Patakbuhin ang beripikasyon ng migrasyon bago ilantad ang tenant.

Huwag ipagpalagay na maaaring gamitin muli ng isang nagsasariling tenant ang koneksyon sa database ng network. Gamitin ang registry ng tenant at mga abstraction ng writer na ibinibigay ng addon.

## SSO at REST hooks {#sso-and-rest-hooks}

Ang stateless na autologin ng tenant ay gumagamit ng mga panandaliang token na may purpose claim, proteksyon sa JTI replay, cap sa pag-expire, at origin pinning. Ang mga integrasyong nagdaragdag ng mga button sa pag-login o mga link sa remote management ay dapat bumuo ng mga pagbisita sa tenant sa pamamagitan ng sinusuportahang daloy ng SSO sa halip na direktang gumawa ng mga URL sa pag-login ng tenant.

Available ang mga audit event ng API sa panig ng network at mga pang-araw-araw na buod para sa mga gateway ng nagsasariling tenant. Gamitin ang mga log na iyon kapag nagde-debug ng mga panlabas na sistemang tumatawag sa mga endpoint ng lifecycle ng tenant.

## Mga URL ng aksyon ng nagsasariling kustomer {#sovereign-customer-action-urls}

Iniruruta ng Ultimate Multisite v2.13.0 ang mga aksyon ng kustomer ng nagsasariling tenant pabalik sa pangunahing sityo para sa mga daloy ng account, pag-checkout, billing, invoice, sityo, pagpapalit ng template, at domain-mapping. Ang mga integrasyong nagre-render ng mga link sa pamamahala sa panig ng tenant ay dapat ituro ang mga aksyong iyon sa panel ng kustomer sa pangunahing sityo at magsama ng napatunayang return target kapag dapat makabalik ang user sa tenant matapos kumpletuhin ang aksyon.

Gamitin ang core na SSO wrapper para sa mga cross-domain na link sa pamamahala:

```php
$url = wu_with_sso($main_site_customer_url);
```

Nananatiling nafi-filter ang nabuong URL sa pamamagitan ng `wu_sso_url`, na tumatanggap ng SSO URL, kasalukuyang user, target na ID ng sityo, at konteksto ng redirect. Maaaring gamitin ng mga add-on ang filter na iyon upang magdagdag ng kontekstong partikular sa provider o palitan ang broker URL habang pinapanatili ang pagpapatunay ng token ng Ultimate Multisite.

Huwag doblehin ang estado ng membership, invoice, billing-address, template, o domain-management sa loob ng nagsasariling tenant. Ituring ang dashboard ng tenant bilang launcher at ang panel ng kustomer sa pangunahing sityo bilang system of record para sa mga pinamamahalaang aksyon.

## Beripikasyon ng migrasyon {#migration-verification}

Matapos baguhin ng isang migrasyon o integrasyon ng lifecycle ang data ng tenant, patakbuhin ang mga verification gate:

- `wp tenant verify-no-legacy --site=<site-id>` kinukumpirma na hindi na umaasa ang tenant sa mga legacy na path sa panig ng network.
- `wp tenant verify-sovereign-push --site=<site-id>` kinukumpirma na maaaring iproseso at i-drain ng mga nagsasariling push job.

Dapat ituring ng mga integrasyon ang nabigong beripikasyon bilang blocker sa deployment at iwasang markahan ang isang tenant bilang live hanggang malutas ang kabiguan.

## Pagbura ng tenant {#tenant-deletion}

Dapat tawagin ng mga daloy ng pagbura ang teardown path ng addon upang malinis ang mga credential ng database ng tenant. Maaaring alisin ng mga panlabas na integrasyon ang mga resource ng provider matapos magtagumpay ang teardown, ngunit hindi dapat burahin ang mga database o folder ng host habang tumatakbo pa ang beripikasyon o mga async push job.

## Deprecated na database router {#deprecated-database-router}

Ang legacy na `Database_Router` ay napalitan ng deprecation stub. Dapat tukuyin ng mga bagong integrasyon ang mga tenant sa pamamagitan ng kasalukuyang site router at mga API ng registry ng tenant sa halip na umasa sa lumang router class.
