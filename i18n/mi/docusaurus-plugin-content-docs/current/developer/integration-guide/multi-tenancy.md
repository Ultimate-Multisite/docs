---
title: Tuituitanga Kairēti-maha
sidebar_position: 6
_i18n_hash: 3cf63ea3f0dba9dcf2a8fc74478aedbb
---
# Whakaurunga Kairēti-maha

Ultimate Multisite: Ka huri te Kairēti-maha 1.2.0 i ētahi wāhi whakapā whakaurunga mō ngā kairēti motuhake, te manatoko hekenga, me te aunoatanga huringa-oranga kairēti.

## Rere tīmatanga kairēti {#tenant-bootstrap-flow}

Me whai ngā whakaurunga e waihanga ana, e whakarerekē ana rānei i ngā kairēti i tēnei raupapa:

1. Whakatauria te pūkete rēhita kairēti me te tauira wehe.
2. Waihangatia, manatoko rānei i te kaituhi pātengi raraunga kairēti.
3. Tīmataria te aronuinga kairēti.
4. Whakaratohia ngā kaiwhakamahi kairēti.
5. Rēhitatia te ararere kairēti me ngā ara pūnaha kōnae.
6. Whakahaerehia te manatoko hekenga i mua i te whakaatu i te kairēti.

Kaua e whakapae ka taea e tētahi kairēti motuhake te whakamahi anō i te hononga pātengi raraunga whatunga. Whakamahia te rēhita kairēti me ngā waitara kaituhi e whakaratohia ana e te tāpiri.

## Ngā matau SSO me REST {#sso-and-rest-hooks}

Ka whakamahi te takiuru-aunoa kairēti kāore he tūāhua i ngā token wā-poto me tētahi kerēme kaupapa, te ārai tāruarua JTI, tētahi taupoki paunga, me te titi pūtake. Me whakaputa ngā whakaurunga e tāpiri ana i ngā pātene takiuru, i ngā hononga whakahaere mamao rānei i ngā toronga kairēti mā te rere SSO e tautokona ana, kaua mā te hanga tika i ngā URL takiuru kairēti.

Kei te wātea ngā takahanga arotake API taha-whatunga me ngā whakarāpopototanga ia rā mō ngā kūwaha kairēti motuhake. Whakamahia aua rangitaki ina patuiro ana i ngā pūnaha o waho e karanga ana i ngā endpoint huringa-oranga kairēti.

## Ngā URL mahi kiritaki motuhake {#sovereign-customer-action-urls}

Ka ararere a Ultimate Multisite v2.13.0 i ngā mahi kiritaki kairēti-motuhake ki te pae matua mō ngā rere pūkete, utu-whakamutunga, nama-utu, nama, pae, whakawhiti-tātauira, me te mahere-rohe. Me tohu ngā whakaurunga e whakaatu ana i ngā hononga whakahaere taha-kairēti i aua mahi ki te pae kiritaki o te pae-matua, ā, me whakauru tētahi ūnga hoki kua whakamanahia ina tika kia āhei te kaiwhakamahi ki te hoki ki te kairēti i muri i te whakaoti i te mahi.

Whakamahia te wrapper SSO matua mō ngā hononga whakahaere whakawhiti-rohe:

```php
$url = wu_with_sso($main_site_customer_url);
```

Ka noho tātarihia tonu te URL kua hangaia mā `wu_sso_url`, e whiwhi ana i te URL SSO, te kaiwhakamahi onāianei, te ID pae ūnga, me te horopaki anga anō. Ka taea e ngā tāpiri te whakamahi i taua tātari hei āpiti i te horopaki motuhake-ki-te-kaiwhakarato, hei whakakapi rānei i te URL kaiwawao, i te wā e pupuri ana i te manatoko token a Ultimate Multisite.

Kaua e tārua i te āhua mematanga, nama, wāhitau-nama-utu, tātauira, whakahaere-rohe rānei ki roto i te kairēti motuhake. Me tiro te paewhiri kairēti hei kaiwhakarewa, ā, ko te pae kiritaki o te pae-matua hei pūnaha pūkete mō ngā mahi kua whakahaeretia.

## Manatoko hekenga {#migration-verification}

I muri i tētahi hekenga, i tētahi whakaurunga huringa-oranga rānei e huri ana i ngā raraunga kairēti, whakahaerehia ngā kūwaha manatoko:

- `wp tenant verify-no-legacy --site=<site-id>` ka whakaū kua kore te kairēti e whakawhirinaki ki ngā ara tawhito taha-whatunga.
- `wp tenant verify-sovereign-push --site=<site-id>` ka whakaū ka taea e ngā mahi pana motuhake te tukatuka me te whakawātea.

Me tiro ngā whakaurunga ki te manatoko i rahua hei ārai tuku, ā, me karo i te tohu i tētahi kairēti hei ora kia oti rā anō te whakatau i te hapa.

## Mukunga kairēti {#tenant-deletion}

Me karanga ngā rere mukunga i te ara wetewete a te tāpiri kia whakapaingia ngā taunakitanga pātengi raraunga kairēti. Ka taea e ngā whakaurunga o waho te tango i ngā rauemi kaiwhakarato i muri i te angitu o te wetewete, engari kaua e muku i ngā pātengi raraunga hautū, i ngā kōpaki rānei i te wā e rere tonu ana te manatoko, ngā mahi pana tukutahi-kore rānei.

## Ararere pātengi raraunga kua whakakāhoretia {#deprecated-database-router}

Kua whakakapia te `Database_Router` tawhito ki tētahi stub whakakāhore. Me whakatau ngā whakaurunga hou i ngā kairēti mā ngā API ararere pae onāianei me te rēhita kairēti, kaua mā te whakawhirinaki ki te akomanga ararere tawhito.
