---
title: Isolàidhean Multi-tenancy
sidebar_position: 12
_i18n_hash: 5aaf1504c3022f94b9aec9faaa4eda22
---
# Isolàidhean Multi-Tenancy {#multi-tenancy-isolation}

Ultimate Multisite: Multi-Tenancy 1.2.0 a tha a' gabhail e-beatha (per-subsite) agus isgidil (filesystem) idirich airson teann-dèidh (sovereign tenants). Tha seo a' cur seachdaidh dathan teann-dèidh air a' sgeulach, mar a tha an tòstáil (provisioning), an tasan (billing), agus an t-sgrùdadh (administration) de dhinn.

## Stratégia isgidil {#isolation-strategy}

Usgais isgidil sovereign airson earrachda a tha ag iarraidh seachdaidhean dathan a tha a' cruile, stòr isgidil air a tha a' sgeulach, no cur beann (host boundary) a tha a' sgeulach.

Tha chùl teann-dèidh sovereign de roc:

- Seachdaidhean dathan (database) a tha a' cruile air an host a tha a' sgeulach, neu stràichte (prefix strategy).
- Roc isgidil (filesystem root) a tha a' cruile.
- Earrachd teann-dèidh (tenant registry entry) a tha a' cur mheasg an site gu sin air a database, atharrach (root path), ainm host (hostname), agus model isgidil.
- Seachdaidhean de chàrachadh (migration verification result) a tha a' cruile a' gach teann-dèidh a tha a' bheachd gu sin air a bhith 'live'.

## Bheadaireachd host database {#database-host-binding}

Air an t-am 1.2.0, tha am fhaighinn (binding) host a tha a' sgeulach airson isgalladh sovereign a' leadhnaidh. Tha cur beann a tha a' sgeulach mar `localhost` air a chlàradh, agus tha sin a' cur seachdaidhean (normalize) gu bheil Bedrock, FrankenPHP, agus WordPress a tha a' bheachd a' gabhail agus a' dèanamh cinnteach de chàrachadh air an t-string host a tha MySQL a' faighinn.

Nuair a tha thuair an teann-dèidh sovereign:

1. Set an host database gu am fhaighinn a tha ag iarraidh an runtime (runtime) a tharann.
2. Usgais `localhost` airson isgalladh socket air an t-am a tha a' bheachd cur beann leàrdach (local connections).
3. Usgais `127.0.0.1` neu ainm host seisa (service hostname) gu sin dìreach nuair a tha an server database a' gabhail brèidhean air an host sin.
4. Rann seachdaidhean de chàrachadh (migration verification) an cur beann a' dèanamh air an fhaighinn host a' tharann.

Tha seachdaidhean de chàrachadh a' cur faighnean (grant failures), is eadar a' cruile brèidhean DB teann-dèidh agus an fhaighinn host a tha a' sgeulach. Tha cur brèidhe air `user@localhost` a' tòiseachadh gu sin a' tòiseachadh air `user@127.0.0.1` neu `user@%`.

## Roc isgidil (Filesystem root) {#filesystem-root}

Rinn a chùlchna (tenant root) deug a' chluasach (restarts) agus deploiements. A' ghnìthich an amhach mòr (temporary mount paths). Para installaí a' chluasach mar Bedrock, dìng an tòiseachadh gu cunntas an amhach mòr a' tòiseachadh air an WordPress web root a tha a' sgaidh an chluasach, cha bhith e dìreach air an amhach project.

## Ordraidh de dhìochainn (Provisioning order) {#provisioning-order}

Para chluasach ùra sovereign, usa an ordraidh seo aig an tòiseachadh:

1. Creach an curtas de dhìochainn chluasach (tenant registry entry).
2. Creach an dbhach agus an dbhach user.
3. Tòiseichileadh an scema chluasach (bootstrap the tenant schema).
4. Tòiseichileadh luchdair chluasach (provision tenant users).
5. Seachain na stiùiriche amhach chluasach (configure tenant filesystem paths).
6. Tòiseichileadh a' chluasachadh (run migration verification).
7. Ath-ghinneall an stiùiridh (switch routing or DNS) an sin air a tha a' tòiseichileadh.

Tha an ordraidh seo a' ghnìth an tòiseachadh gu robh na chluasach dìreach a fháil air a' chluasach gu bheil an dbhach writer, luchdair, agus an amhach mòr ready.

## Fhlughainnean de chluasach sovereign (Sovereign customer management flows) {#sovereign-customer-management-flows}

Ultimate Multisite v2.13.0 a' chluasach na h-aithreacha de chluasach ar an site mòr gu robh mode sovereign a' tòiseachadh. Is e cheann chluasach a' faighinn air a' sgaidh WordPress dìreach mar install chluasach, ach tha na h-aithreacha de chluasach a tha ag iarraidh amhriachtan neach-beulach (network billing), a' chluasach, no seòl-chluasach (shared account data) a' faighinn air an site mòr gu robh a' chluasach a' tòiseachadh a' chluasach a' chluasach a' chluasach.

Tha an fhluthainnean de chluasach mòr a' tòiseachadh air:

- Ath-ghinneall agus amharraichean plan (Checkout and plan changes).
- A' chluasach faighinn agus amharraichean profail chluasach (Account overview and customer profile actions).
- Ath-ghinneall amhriachtan a' chluasach agus seachainneam de chluasach (Billing address updates and payment-management screens).
- Seachainneam an foirge (Invoice and payment-history views).
- Amharraichean smachd site mar ath-ghinn an site no ath-ghinn site.
- Ath-chluasachadh stiùiriche amhach agus ath-ghinn amhach mòr (Template switching).
- Ath-ghinneall domain agus ath-ghinn domain buneach (Domain mapping and primary-domain changes).

Nuair a tha an tòiseach a th'ann a' chùrsain a dhèanamh de dhutha seo a' chùrsain a' chùrsain a dhèanamh de dhutha seo a' chùrsain a' chùrsain a dhèanamh de dhutha seo a' chùrsain a' chùrsain a dhèanamh de dhutha seo a' chùrsain a' chùrsain a dhèanamh de dhutha seo a' chùrsain a' chùrsain a dhèanamh de dhutha seo a' chùrsain a' chùrsain a dhèanamh de dhutha seo a' chùrsain a' chùrsain a dhèanamh de dhutha seo a' chùrsain a' chùrsain a dhèanamh de dhutha seo a' chùrsain a' chùrsain a dhèanamh de dhutha seo a' chùrsain a' chùrsain a dhèanamh de dhutha seo a' chùrsain a' chùrsain a dhèanamh de dhutha seo a' chùrsain a' chùrsain a dhèanamh de dhutha seo a' chùrsain a' chùrsain a dhèanamh de dhutha seo a' chùrsain a' chùrsain a dhèanamh de dhutha seo a' chùrsain a' chùrsain a dhèanamh de dhutha seo a' chùrsain a' chùrsain a dhèanamh de dhutha seo a' chùrsain a' chùrsain a dhèanamh de dhutha seo a' chùrsain a' chùrsain a dhèanamh de dhutha seo a' chùrsain a' chùrsain a dhèanamh de dhutha seo a' chùrsain a' chùrsain a dhèanamh de dhutha seo a' chùrsain a' chùrsain a dhèanamh de dhutha seo a' chùrsain a' chùrsain a dhèanamh de dhutha seo a' chùrsain a' chùrsain a dhèanamh de dhutha seo a' chùrsain a' chùrsain a dhèanamh de dhutha seo a' chùrsain a' chùrsain a dhèanamh de dhutha seo a' chùrsain a' chùrsain a dhèanamh de dhutha seo a' chùrsain a' chùrsain a dhèanamh de dhutha seo a' chùrsain a' chùrsain a dhèanamh de dhutha seo a' chùrsain a' chùrsain a dhèanamh de dhutha seo a' chùrsain a' chùrsain a dhèanamh de dhutha seo a' chùrsain a' chùrsain a dhèanamh de dhutha seo a' chùrsain a' chùrsain a dhèanamh de dhutha seo a' chùrsain a' chùrsain a dhèanamh de dhutha seo a' chùrsain a' chùrsain a dhèanamh de dhutha seo a' chùrsain a' chùrsain a dhèanamh de dhutha seo a' chùrsain a' chùrsain a dhèanamh de dhutha seo a' chùrsain a' chùrsain a dhèanamh de dhutha seo a' chùrsain a' chùrsain a dhèanamh de dhutha seo a' chùrsain a' chùrsain a dhèanamh de dhutha seo a' chùrsain a' chùrsain a dhèanamh de dhutha seo a' chùrsain a' chùrsain a dhèanamh de dhutha seo a' chùrsain a' chùrsain a dhèanamh de dhutha seo a' chùrsain a' chùrsain a dhèanamh de dhutha seo a' chùrsain a' chùrsain a dhèanamh de dhutha seo a' chùrsain a' chùrsain a dhèanamh de dhutha seo a' chùrsain a' chùrsain a dhèanamh de dhutha seo a' chùrsain a' chùrsain a dhèanamh de dhutha seo a' chùrsain a' chùrsain a dhèanamh de dhutha seo a' chùrsain a' chùrsain a dhèanamh de dhutha seo a' chùrsain a' chùrsain a dhèanamh de dhutha seo a' chùrsain a' chùrsain a dhèanamh de dhutha seo a' chùrsain a' chùrsain a dhèanamh de dhutha seo a' chùrsain a' chùrsain a dhèanamh de dhutha seo a' chùrsain a' chùrsain a dhèanamh de dhutha seo a' chùrsain a' chùrsain a dhèanamh de dhutha seo a' chùrsain a' chùrsain a dhèanamh de dhutha seo a' chùrsain a' chùrsain a dhèanamh de dhutha seo a' chùrsain a' chùrsain a dhèanamh de dhutha seo a' chùrsain a' chùrsain a dhèanamh de dhutha seo a' chùrsain a' chùrsain a dhèanamh de dhutha seo a' chùrsain a' chùrsain a dhèanamh de dhutha seo a' chùrsain a' chùrsain a dhèanamh de dhutha seo a' chùrsain a' chùrsain a dhèanamh de dhutha seo a' chùrsain a' chùrsain a dhèanamh de dhutha seo a' chùrsain a' chùrsain a dhèanamh de dhutha seo a' chùrsain a' chùrsain a dhèanamh de dhutha seo a' chùrsain a' chùrsain a dhèanamh de dhutha seo a' chùrsain a' chùrsain a dhèanamh de dhutha seo a' chùrsain
