---
title: Àwọn Àkọsílẹ̀ Ìtújáde
sidebar_position: 9
_i18n_hash: f43456fb08d6572cbc3ddf432a51d7d5
---
# Àkọsílẹ̀ Ìtújáde {#release-notes}

## Ẹya 2.13.0 — Tí a tú jáde ní 2026-06-05 {#version-2130--released-on-2026-06-05}

- Tuntun: A ṣàfikún àtìlẹ́yìn sovereign-tenant fún Account oníbàárà, checkout, billing, site, invoice, yíyí template padà, àti àwọn ìṣàn domain mapping kí àwọn tenant networks lè tọ́ àwọn oníbàárà padà sí site àkọ́kọ́ fún àwọn ìṣe tí a ń ṣàkóso.
- Tuntun: A ṣàfikún àwọn àyẹ̀wò renewal-credential fún àwọn recurring memberships kí gateways lè pa auto-renewal nígbà tí saved billing agreement, subscription, tàbí vault token kò bá sí.
- Tuntun: A ṣàfikún HMAC-verified loopback publishing fún pending site creation láti mú checkout-to-site provisioning gbẹ́kẹ̀lé síi lórí hosts níbi tí background jobs ti ń pẹ́.
- Tuntun: A ṣàfikún àwọn developer extension points fún SSO URLs, checkout-form base domains, àti automatic domain-record creation.
- Àtúnṣe: SSO ti gbẹ́kẹ̀lé síi kọjá mapped domains, anonymous broker visits, logout, àti cross-plugin dependency conflicts.
- Àtúnṣe: Pending site creation ń bọ̀ sípò báyìí láti stale publish flags, ó sì yago fún fífi àwọn oníbàárà dúró lórí site-creation screen.
- Àtúnṣe: A kò tún dá domain records fún shared checkout-form base domains, a sì ń fo unused host-provider background jobs nígbà tí kò sí integration tó n ṣiṣẹ́.
- Àtúnṣe: Checkout, billing address, password reset, email verification, yíyí template padà, tours, àti àwọn customer dashboard edge cases kò tún dí àwọn ìṣàn oníbàárà déédé mọ́.
- Àtúnṣe: Àwọn broadcast emails ń pa recipients mọ́ ní ikọ̀kọ̀ báyìí, nígbà tí wọ́n ń yago fún SMTP/plugin fatal errors nígbà tí recipient lists tàbí mail transports bá kùnà.
- Àtúnṣe: Membership renewals, expiration display, àti àwọn payment collection edge cases ń yago fún immediate expirations, crashes, tàbí required payments tí a pàdánù báyìí.
- Ti dára síi: WordPress compatibility ni a dán wò dé 7.0, production Vue assets ni a tún kọ láti npm sources, àti Cypress end-to-end coverage ń ṣe àyẹ̀wò àwọn checkout, setup, SSO, àti gateway flows púpọ̀ síi báyìí.

## Ẹya 2.12.0 — Tí a tú jáde ní 2026-05-15 {#version-2120--released-on-2026-05-15}

- Tuntun: A ṣàfikún Hostinger (hPanel) gẹ́gẹ́ bí host provider tí a ṣe àtìlẹ́yìn fún pẹ̀lú domain mapping integration
- Tuntun: Site Exporter ń bójú tó network import bundles báyìí fún site restoration tó rọrùn káàkiri network
- Àtúnṣe: BCC broadcast emails ń lo undisclosed-recipients header báyìí láti dènà fífi àwọn recipient addresses hàn
- Àtúnṣe: Membership expiration date kò tún bàjẹ́ nígbà tí a bá fi non-date value pamọ́
- Àtúnṣe: Stripe membership updates ń pa discounts rẹ́ dáadáa báyìí láì pe deprecated deleteDiscount API
- Àtúnṣe: SSO redirects lórí domain-mapped sites ni a ti fi ààlà sí báyìí láti dènà infinite redirect loops
- Àtúnṣe: Setup wizard image picker selection ń ṣe àfikún underlying data model dáadáa báyìí
- Àtúnṣe: Site Exporter CLI ń pa correct default network site selection mọ́ báyìí
- Ti dára síi: A yọ wp-cli tí a kó sínú plugin package, ó dín ìwọ̀n plugin kù

## Ẹya 2.11.0 — Tí a tú jáde ní 2026-05-11 {#version-2110--released-on-2026-05-11}

- Tuntun: Site exports ń kó `index.php` tó ń bẹ̀rẹ̀ fúnra rẹ̀ báyìí kí ZIP lè fi sori host tuntun láìsí separate plugin install.
- Tuntun: Network export jẹ́ kí administrators export gbogbo subsites sínú archive kan láti Site Export admin page.
- Tuntun: Allow Site Templates plan toggle ni a ń fi ipa mú báyìí nípasẹ̀ fallback chain, tí ó ń dín template availability kù dáadáa fún plan limits.
- Tuntun: Checkout form editor ń kilọ̀ nígbà tí a bá ṣàfikún product láì ṣètò required field.
- Tuntun: Import/Export settings tab ń ṣàlàyé scope rẹ̀ kedere báyìí, ó sì sopọ̀ taara sí Site Export tool.

## Ẹya 2.10.0 — Tí a tú jáde ní 2026-05-05 {#version-2100--released-on-2026-05-05}

- Tuntun: PayPal guided setup wizard fún manual credential entry pẹ̀lú OAuth flag gate fún gateway configuration tó rọrùn.
- Tuntun: Template switch customer panel ni a tún ṣe pẹ̀lú current-template card, persistent grid, àti bọtìnì **Reset current template**.
- Àtúnṣe: Template switching kò tún di UI mọ́ lórí AJAX failure.
- Àtúnṣe: Template switching permission states ni a dáàbò bo lòdì sí unauthorized access.
- Àtúnṣe: Site override inputs ni a ṣàyẹ̀wò kí a tó fi pamọ́.
- Àtúnṣe: Billing address prompt ni a ń fi hàn báyìí nígbà tí address bá ṣófo.
- Àtúnṣe: PHP 8.1 null-to-string deprecation notices ni a yanjú.
- Àtúnṣe: Currents ni a lazy-loaded ṣáájú init hook láti dènà timing issues.
- Àtúnṣe: Filtered SSO path ni a bọ̀wọ̀ fún kọjá gbogbo login flows.
- Àtúnṣe: Àwọn blank site identity options ni a pa mọ́ nígbà save.

## Ẹya 2.9.0 — Tí a tú jáde ní 2026-04-30 {#version-290--released-on-2026-04-30}

- Tuntun: Single-site export àti import ni a ṣàfikún lábẹ́ **Tools > Export & Import**.
- Àtúnṣe: Export ZIP files ni a ń pèsè báyìí nípasẹ̀ authenticated download endpoint.
- Àtúnṣe: SQL injection risk àti query issues nínú pending export/import queries ni a túnṣe.
- Àtúnṣe: Pending site kò published nígbà tí admin bá manually verify customer email.
- Àtúnṣe: Orphaned pending_site records ni a nu kúrò nígbà tí membership kò sí.
- Àtúnṣe: Settings nav padding àti search anchor navigation ni a túnṣe.
- Àtúnṣe: Pending sites ni a ń fi hàn kọ́kọ́ báyìí nínú All Sites view.
- Àtúnṣe: Screenshot provider (mShots) User-Agent header ni a ṣàfikún láti dènà 403 errors.
- Àtúnṣe: Import cron schedule circular dependency ni a yanjú.
- Àtúnṣe: Tour IDs ni a normalised sí underscores nínú user settings keys.
- Ti dára síi: ZipArchive ni a ń lo báyìí dípò Alchemy/Zippy fún compatibility tó dára síi.

## Ẹya 2.8.0 — Tí a tú jáde ní 2026-04-29 {#version-280--released-on-2026-04-29}

- Tuntun: Enable Jumper toggle ti fi kun UI eto Other Options.
- Tuntun: A ti fi ọwọn ipo kun tabili atokọ àwọn fọ́ọ̀mù checkout.
- Tuntun: Ẹ̀rọ ìrùsókè fáìlì addon sunrise fún àwọn ìmúgbòrò sunrise MU-plugin àdáni.
- Ti mú dara si: A yọ eto opt-in ìròyìn-àṣìṣe kúrò ní ojúewé eto.
- Àtúnṣe: Káàdì site ojúewé ìdúpẹ́ — àwòrán ti wa ni ihamọ báyìí, àwọn ọna asopọ sì ni ara tó tọ́.
- Àtúnṣe: Olùpèsè screenshot yí padà láti thum.io sí WordPress.com mShots.
- Àtúnṣe: Enable Registration àti Default Role ti ṣètò àwọn aiyipada tó tọ́ báyìí lórí fifi sori tuntun.
- Àtúnṣe: `get_site_url()` kò tún da òfo padà mọ́ nígbà tí domain bá ní port kan.
- Àtúnṣe: Àwọn fáìlì media clone ti daakọ dáadáa báyìí nígbà tí eto `copy_media` ṣofo.
- Àtúnṣe: A ti sọ object cache di aláìlò dáadáa lẹ́yìn ìkọ sitemeta network-activate.
- Àtúnṣe: Custom domain ti gbe soke laifọwọyi sí primary lórí ìfọwọ́sílẹ̀ DNS fún domain oní apá 3.
- Àtúnṣe: A fagilé pending membership nígbà tí a bá nu ìsanwó tó ti pari.
- Àtúnṣe: A tún so olùṣàyẹ̀wò agbára ọ̀rọ̀ aṣínà lẹ́yìn tí a kọ prompt inline login sílẹ̀.
- Àtúnṣe: A dá ìtúnrù ojúewé aláìnípẹkun dúró lórí ojúewé ìdúpẹ́ nígbà tí a ti dá site sílẹ̀ tẹ́lẹ̀.
- Àtúnṣe: A ṣe amuṣiṣẹpọ aṣàyàn ìforúkọsílẹ̀ WP core lórí activation plugin àti ìfipamọ́ eto.
- Àtúnṣe: A fi guard expiration null kun ní `calculate_expiration` fún ibamu PHP 8.4.
- Àtúnṣe: A dina àwọn ìforúkọsílẹ̀ àdáwòkọ nígbà tí customer bá ti ní membership tó n ṣiṣẹ́.
- Àtúnṣe: A fi ìṣàyẹ̀wò null kun fún `date_expiration` ní checkout.
- Àtúnṣe: A mú site provisioning lágbára — àwọn ìdínà, ìtúpalẹ̀ membership, ìgbéga domain.
- Àtúnṣe: A túnṣe aami ipo ìṣàyẹ̀wò ṣáájú-fifi-sori sí NOT Activated nígbà tí ìṣàyẹ̀wò bá kùnà.
- Àtúnṣe: A lo domain checkout fún àwọn URL ìfọwọ́sílẹ̀ email.
- Àtúnṣe: Auto-login lẹ́yìn checkout nígbà tí pápá ọ̀rọ̀ aṣínà kò sí.
- Àtúnṣe: Àwọn membership ọ̀fẹ́ kò ní pari mọ́ — a ka wọn sí ti ìgbà ayé.
- Àtúnṣe: Ẹnu-ọ̀nà ìfọwọ́sílẹ̀ email di ìtẹ̀jáde site mú títí customer yóò fi jẹ́risi email.
- Àtúnṣe: A túnṣe base path endpoint SES v2 API àti ipa-ọ̀nà identity.
- Àtúnṣe: Hook `wu_inline_login_error` jade ní block catch pre-submit.
