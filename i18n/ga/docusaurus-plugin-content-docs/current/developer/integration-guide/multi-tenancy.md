---
title: Comhtháthú Ilthionóntachta
sidebar_position: 6
_i18n_hash: 3cf63ea3f0dba9dcf2a8fc74478aedbb
---
# Comhtháthú Il-Tionóntachta {#multi-tenancy-integration}

Ultimate Multisite: Athraíonn Il-Tionóntacht 1.2.0 roinnt pointí teagmhála comhtháthaithe do thionóntaí ceannasacha, fíorú imirce, agus uathoibriú shaolré tionóntaí.

## Sreabhadh tosaithe tionónta {#tenant-bootstrap-flow}

Ba cheart do chomhtháthuithe a chruthaíonn nó a mhodhnaíonn tionóntaí an t-ord seo a leanúint:

1. Réitigh taifead chlárlann an tionónta agus an tsamhail leithlisithe.
2. Cruthaigh nó fíoraigh scríbhneoir bhunachar sonraí an tionónta.
3. Tosaigh scéimre an tionónta.
4. Soláthair úsáideoirí tionónta.
5. Cláraigh ródú an tionónta agus cosáin an chórais comhad.
6. Rith fíorú imirce sula nochtar an tionónta.

Ná glac leis gur féidir le tionónta ceannasach nasc bhunachar sonraí an líonra a athúsáid. Úsáid clárlann an tionónta agus na hastarraingtí scríbhneora a sholáthraíonn an breiseán.

## Crúcaí SSO agus REST {#sso-and-rest-hooks}

Úsáideann uathlogáil isteach tionónta gan stát comharthaí gearrshaolacha le héileamh cuspóra, cosaint athsheinnte JTI, teorainn éaga, agus daingniú tionscnaimh. Ba cheart do chomhtháthuithe a chuireann cnaipí logála isteach nó naisc bhainistíochta cianda leis cuairteanna tionónta a ghiniúint tríd an sreabhadh SSO tacaithe seachas URLanna logála isteach tionónta a thógáil go díreach.

Tá imeachtaí iniúchta API ar thaobh an líonra agus achoimrí laethúla ar fáil do gheataí tionónta ceannasacha. Úsáid na logaí sin agus tú ag dífhabhtú córais sheachtracha a ghlaonn ar chríochphointí shaolré tionónta.

## URLanna gníomhaíochta custaiméara ceannasaigh {#sovereign-customer-action-urls}

Ródaíonn Ultimate Multisite v2.13.0 gníomhaíochtaí custaiméara tionónta cheannasaigh ar ais chuig an bpríomhshuíomh le haghaidh sreafaí Account, seiceáil amach, billeáil, sonrasc, suíomh, athrú teimpléid, agus mapáil fearainn. Ba cheart do chomhtháthuithe a rindreálann naisc bhainistíochta ar thaobh an tionónta na gníomhartha sin a dhíriú ar phainéal custaiméara an phríomhshuímh agus sprioc fillte bhailíochtaithe a áireamh nuair ba cheart go mbeadh an t-úsáideoir in ann nascleanúint a dhéanamh ar ais chuig an tionónta tar éis an gníomh a chríochnú.

Úsáid an timfhillteán SSO lárnach le haghaidh naisc bhainistíochta thrasfhearainn:

```php
$url = wu_with_sso($main_site_customer_url);
```

Fanann an URL ginte in-scagtha trí `wu_sso_url`, a fhaigheann an URL SSO, an t-úsáideoir reatha, ID an spriocshuímh, agus comhthéacs an atreoraithe. Is féidir le breiseáin an scagaire sin a úsáid chun comhthéacs a bhaineann go sonrach leis an soláthraí a chur leis nó chun URL an bhróicéara a athsholáthar agus bailíochtú chomharthaí Ultimate Multisite á chaomhnú.

Ná dúblaigh staid ballraíochta, sonraisc, seoladh billeála, teimpléid, ná bainistíochta fearainn taobh istigh den tionónta ceannasach. Caith le Dashboard an tionónta mar an lainseálaí agus le painéal custaiméara an phríomhshuímh mar chóras taifid do ghníomhartha bainistithe.

## Fíorú imirce {#migration-verification}

Tar éis d’imirce nó do chomhtháthú saolré sonraí tionónta a athrú, rith na geataí fíoraithe:

- `wp tenant verify-no-legacy --site=<site-id>` dearbhaíonn sé nach bhfuil an tionónta ag brath a thuilleadh ar chosáin oidhreachta ar thaobh an líonra.
- `wp tenant verify-sovereign-push --site=<site-id>` dearbhaíonn sé gur féidir le poist bhrú ceannasacha próiseáil agus draenáil.

Ba cheart do chomhtháthuithe caitheamh le fíorú teipthe mar bhacóir imlonnaithe agus gan tionónta a mharcáil beo go dtí go réitítear an teip.

## Scriosadh tionónta {#tenant-deletion}

Ba cheart do shreafaí scriosta cosán díchóimeála an bhreiseáin a ghlaoch ionas go nglanfar dintiúir bhunachar sonraí an tionónta. Féadfaidh comhtháthuithe seachtracha acmhainní soláthraí a bhaint tar éis don díchóimeáil éirí leo, ach níor cheart dóibh bunachair sonraí ná fillteáin óstaigh a scriosadh fad is atá fíorú nó poist bhrú neamhshioncronacha fós ar siúl.

## Ródaire bunachar sonraí dulta i léig {#deprecated-database-router}

Tá an `Database_Router` oidhreachta curtha in ionad le stáb díchoimisiúnaithe. Ba cheart do chomhtháthuithe nua tionóntaí a réiteach trí ródaire reatha an tsuímh agus APIanna chlárlann an tionónta seachas brath ar an seanaicme ródaire.
