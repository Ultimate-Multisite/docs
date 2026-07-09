---
title: Integrasyon ng Maramihang Nangungupahan
sidebar_position: 6
_i18n_hash: 3cf63ea3f0dba9dcf2a8fc74478aedbb
---
# Integrasyon ng Multi-Tenancy

Ultimate Multisite: Binabago ng Multi-Tenancy 1.2.0 ang ilang touchpoint ng integrasyon para sa mga soberanong tenant, beripikasyon ng migrasyon, at awtomasyon ng lifecycle ng tenant.

## Daloy ng bootstrap ng tenant

Dapat sundin ng mga integrasyong lumilikha o nagbabago ng mga tenant ang ganitong pagkakasunod-sunod:

1. Tukuyin ang tala ng registry ng tenant at modelo ng isolation.
2. Likhain o beripikahin ang writer ng database ng tenant.
3. I-bootstrap ang schema ng tenant.
4. I-provision ang mga user ng tenant.
5. Irehistro ang routing ng tenant at mga path ng filesystem.
6. Patakbuhin ang beripikasyon ng migrasyon bago ilantad ang tenant.

Huwag ipagpalagay na maaaring muling gamitin ng isang soberanong tenant ang koneksyon sa database ng network. Gamitin ang registry ng tenant at mga abstraction ng writer na ibinibigay ng addon.

## SSO at REST hooks

Gumagamit ang stateless na autologin ng tenant ng mga panandaliang token na may purpose claim, proteksyon laban sa replay ng JTI, cap sa expiry, at origin pinning. Dapat bumuo ang mga integrasyong nagdaragdag ng mga button sa login o mga link sa malayuang pamamahala ng mga pagbisita sa tenant sa pamamagitan ng suportadong daloy ng SSO sa halip na direktang gumawa ng mga URL sa login ng tenant.

Available ang mga audit event ng API sa panig ng network at araw-araw na buod para sa mga gateway ng soberanong tenant. Gamitin ang mga log na iyon kapag nagde-debug ng mga panlabas na sistemang tumatawag sa mga endpoint ng lifecycle ng tenant.

## Mga URL ng aksyon ng soberanong customer

Iniruruta ng Ultimate Multisite v2.13.0 ang mga aksyon ng customer ng soberanong tenant pabalik sa pangunahing sityo para sa mga daloy ng account, checkout, billing, invoice, sityo, pagpapalit ng template, at domain mapping. Dapat ituro ng mga integrasyong nagre-render ng mga link sa pamamahala sa panig ng tenant ang mga aksyong iyon sa panel ng customer sa pangunahing sityo at magsama ng napatunayang return target kapag dapat makapag-navigate pabalik ang user sa tenant pagkatapos makumpleto ang aksyon.

Gamitin ang core SSO wrapper para sa mga cross-domain na link sa pamamahala:

```php
$url = wu_with_sso($main_site_customer_url);
```

Nananatiling maaaring i-filter ang nabuong URL sa pamamagitan ng `wu_sso_url`, na tumatanggap ng SSO URL, kasalukuyang user, ID ng target na sityo, at redirect context. Maaaring gamitin ng mga add-on ang filter na iyon upang magdagdag ng context na partikular sa provider o palitan ang broker URL habang pinananatili ang pagpapatunay ng token ng Ultimate Multisite.

Huwag duplikahin ang estado ng membership, invoice, billing address, template, o pamamahala ng domain sa loob ng soberanong tenant. Ituring ang dashboard ng tenant bilang launcher at ang panel ng customer sa pangunahing sityo bilang system of record para sa mga pinamamahalaang aksyon.

## Beripikasyon ng migrasyon

Pagkatapos baguhin ng isang migrasyon o integrasyon ng lifecycle ang data ng tenant, patakbuhin ang mga gate ng beripikasyon:

- `wp tenant verify-no-legacy --site=<site-id>` kinukumpirma na hindi na umaasa ang tenant sa mga legacy na path sa panig ng network.
- `wp tenant verify-sovereign-push --site=<site-id>` kinukumpirma na kayang iproseso at i-drain ng mga soberanong push job.

Dapat ituring ng mga integrasyon ang nabigong beripikasyon bilang blocker sa deployment at iwasang markahan na live ang tenant hanggang maresolba ang pagkabigo.

## Pagbura ng tenant

Dapat tawagin ng mga daloy ng pagbura ang teardown path ng addon upang malinis ang mga kredensyal ng database ng tenant. Maaaring alisin ng mga panlabas na integrasyon ang mga resource ng provider pagkatapos magtagumpay ang teardown, ngunit hindi dapat burahin ang mga database o folder ng host habang tumatakbo pa ang beripikasyon o mga async push job.

## Hindi na ginagamit na database router

Pinalitan na ng deprecation stub ang legacy na `Database_Router`. Dapat tukuyin ng mga bagong integrasyon ang mga tenant sa pamamagitan ng kasalukuyang API ng router ng sityo at registry ng tenant sa halip na umasa sa lumang router class.
