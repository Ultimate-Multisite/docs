---
title: Integrasyon sa Multi-Tenancy
sidebar_position: 6
_i18n_hash: 3cf63ea3f0dba9dcf2a8fc74478aedbb
---
# Integrasyon sa Multi-Tenancy

Ultimate Multisite: Multi-Tenancy 1.2.0 nag-usab sa daghang punto sa integrasyon alang sa mga soberanong tenant, beripikasyon sa migrasyon, ug awtomasyon sa lifecycle sa tenant.

## Agos sa bootstrap sa tenant {#tenant-bootstrap-flow}

Ang mga integrasyon nga naghimo o nag-usab sa mga tenant kinahanglan mosunod niini nga han-ay:

1. Sulbara ang rekord sa rehistro sa tenant ug ang modelo sa isolation.
2. Himoa o beripikaha ang tig-sulat sa database sa tenant.
3. I-bootstrap ang schema sa tenant.
4. I-provision ang mga tiggamit sa tenant.
5. Irehistro ang routing sa tenant ug mga path sa filesystem.
6. Padagana ang beripikasyon sa migrasyon sa dili pa ipakita ang tenant.

Ayaw pagdahom nga ang usa ka soberanong tenant makagamit pag-usab sa koneksyon sa network database. Gamita ang rehistro sa tenant ug mga abstraction sa tig-sulat nga gihatag sa addon.

## SSO ug REST hooks {#sso-and-rest-hooks}

Ang stateless nga autologin sa tenant naggamit og mubo-og-kinabuhi nga mga token nga adunay purpose claim, proteksyon batok sa JTI replay, limitasyon sa expiry, ug origin pinning. Ang mga integrasyon nga nagdugang og mga login button o mga link sa hilit nga pagdumala kinahanglan maghimo og mga pagbisita sa tenant pinaagi sa suportadong SSO flow imbis nga direktang magtukod og tenant login URLs.

Ang network-side nga mga API audit event ug adlaw-adlaw nga mga summary anaa alang sa mga soberanong tenant gateway. Gamita kadtong mga log kung mag-debug sa gawasnong mga sistema nga motawag sa mga endpoint sa lifecycle sa tenant.

## Mga URL sa aksyon sa soberanong customer {#sovereign-customer-action-urls}

Ultimate Multisite v2.13.0 nag-route sa mga aksyon sa customer sa soberanong tenant balik ngadto sa main site alang sa account, checkout, billing, invoice, site, template-switching, ug domain-mapping flows. Ang mga integrasyon nga nag-render og mga link sa pagdumala sa kilid sa tenant kinahanglan motudlo niadtong mga aksyon ngadto sa customer panel sa main-site ug maglakip og validated nga return target kung ang tiggamit kinahanglan makabalik sa tenant human mahuman ang aksyon.

Gamita ang core SSO wrapper alang sa mga link sa cross-domain nga pagdumala:

```php
$url = wu_with_sso($main_site_customer_url);
```

Ang namugna nga URL magpabiling ma-filter pinaagi sa `wu_sso_url`, nga modawat sa SSO URL, kasamtangang tiggamit, target site ID, ug redirect context. Ang mga add-on makagamit niana nga filter aron idugang ang provider-specific nga context o ilisan ang broker URL samtang gipreserbar ang token validation sa Ultimate Multisite.

Ayaw pagdoble sa membership, invoice, billing-address, template, o domain-management nga estado sulod sa soberanong tenant. Isipa ang dashboard sa tenant isip launcher ug ang customer panel sa main-site isip system of record alang sa mga gidumalang aksyon.

## Beripikasyon sa migrasyon {#migration-verification}

Human ang usa ka migrasyon o lifecycle nga integrasyon mousab sa datos sa tenant, padagana ang mga gate sa beripikasyon:

- `wp tenant verify-no-legacy --site=<site-id>` mokumpirma nga ang tenant dili na mosalig sa karaang network-side nga mga path.
- `wp tenant verify-sovereign-push --site=<site-id>` mokumpirma nga ang soberanong mga push job makaproseso ug makahurot.

Ang mga integrasyon kinahanglan motagad sa napakyas nga beripikasyon isip deployment blocker ug likayan ang pagmarka sa tenant nga live hangtod masulbad ang kapakyasan.

## Pagtangtang sa tenant {#tenant-deletion}

Ang mga flow sa pagtangtang kinahanglan motawag sa teardown path sa addon aron malimpyohan ang mga kredensyal sa database sa tenant. Ang gawasnong mga integrasyon mahimong motangtang sa mga resource sa provider human molampos ang teardown, apan dili kinahanglan magtangtang sa mga host database o folder samtang nagdagan pa ang beripikasyon o async nga mga push job.

## Deprecated nga database router {#deprecated-database-router}

Ang karaang `Database_Router` gipulihan na sa usa ka deprecation stub. Ang bag-ong mga integrasyon kinahanglan mosulbad sa mga tenant pinaagi sa kasamtangang site router ug tenant registry APIs imbis nga mosalig sa daang router class.
