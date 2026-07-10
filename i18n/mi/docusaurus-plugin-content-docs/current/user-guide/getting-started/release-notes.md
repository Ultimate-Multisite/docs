---
title: Ngā Whakawātea
sidebar_position: 9
_i18n_hash: f43456fb08d6572cbc3ddf432a51d7d5
---
# Whakamārama o te Rereke {#release-notes}

## Versi 2.13.0 — Whakawātea i te 2026-06-05 {#version-2130--released-on-2026-06-05}

- Hou Hou: Whakawhanaungatanga (sovereign-tenant support) e whāinga ana ki te mōhaka o ngā aka o te whānau wāhi (customer account), checkout, billing, site, invoice, template switching, me domain mapping. Ko tēnei he tino nui kia taea ai i ngā whānau wāhi te whakahaere i ngā mea e tika ana ki te māmā, ā, hei whakaatu i ngā mea e tika ana ki te wāhi nui (main site) mo ngā mahi e kaha ki te whakahaere.
- Hou Hou: Whakawhanaungatanga (renewal-credential checks) he whāinga ki te whakamārama i ngā korekore o te whakatere (recurring memberships). Ko tēnei e hiahia ana ki te whaiaro i te gateway kia taea ai ia te whero i te auto-renewal (auto-whakawhanaungatanga) i roto i ngā wā e pōtiki ko he tino whakahou o te billing agreement, subscription, heta token vault.
- Hou Hou: Whakawhanaungatanga HMAC-verified loopback publishing he whāinga ki te whakamahi i te whakamārama (pending site creation) kia tika ake ai te whakahaere i te provisioning o te checkout-to-site mo ngā host e pōtiki ko ngā mahi i runga i te background.
- Hou Hou: Whakawhanaungatanga developer extension points he whāinga ki te whakamahi i ngā URL SSO, ngā base domains o te checkout-form, me te whakamaoritanga o record domain automatically.
- Whakamahinga (Fix): He tino tika ai te SSO i roto i ngā domain e whakahou, i ngā wā e pōtiki ko ana broker visits anonymous, logout, me ngā panahau o plugin.
- Whakamahinga (Fix): Ko te whakamaoritanga o site e pōtiki ko he whakaora ai i ngā flag o publish stale (stale publish flags) ā, he whakatika ai i te mea he tino tika ana i te customer ki te screen o site creation.
- Whakamahinga (Fix): Ko ngā record domain e pōtiki ko he whakawhiti i ngā base domains o checkout-form shared, ā, ko ngā mahi background o host-provider e pōtiki ko he whakatika ai i te mea kei te pōtiki ko he tino tika ana i te integration.
- Whakamahinga (Fix): Ngā edge cases o checkout, billing address, password reset, email verification, template switching, tours, me customer dashboard e pōtiki ko he whakawhiti i ngā whakatika o te wāhi e tika ana o ngā customer flows.
- Whakamahinga (Fix): Ko ngā broadcast emails e pōtiki ko he whakahere ai i ngā recipient ki te tino whaiaro, ā, he whakaheke i ngā error fatal o SMTP/plugin i roto i ngā wā e pōtiki ko ngā list o recipient or mail transports.
- Whakamahinga (Fix): Ko ngā edge cases o membership renewals, expiration display, me payment collection e pōtiki ko he whakatika ai i ngā expiration immediate, crashes, or missed required payments.
- Whakawhanaungatanga (Improved): He tino whakamātautanga i te WordPress compatibility i te 7.0, he whakamaoritanga o ngā assets o production Vue mai npm sources, ā, ko Cypress end-to-end coverage e pōtiki ko he whakatika ai i ngā flows o checkout, setup, SSO, me gateway mō te tino whakamātautanga.

## Versja 2.12.0 — Rerehua i 2026-05-15 {#version-2120--released-on-2026-05-15}

- Hou Hou: Whakawhanaungatanga Hostinger (hPanel) mō whaiwhi host supported, me te whakawhanaungatanga domain mapping.
- Hou Hou: Ko Site Exporter e whaiaro ngā network import bundles mō te whakatū i te site paku, hei whakatau i te restoration o te site katoa i te whenua.
- Whakawhanaungatanga (Fix): Iroha email BCC i roto i te whakamahi header mō ngā recipient e hoki mai ana, kia whakatika i te whakapūmau o ngā address o ngā recipient.
- Whakawhanaungatanga (Fix): Ko te parē o te membership expiration noa ei tika ki te whakamaumau i te data i roto i te saving me te wāhi noa.
- Whakawhanaungatanga (Fix): Iroha updates o te membership Stripe, kia whakatika i ngā discounts ki te tika i roto i te clearing discount API e hoki mai ana.
- Whakawhanaungatanga (Fix): Redirect SSO mō ngā sites e whaiwhi domain, kia whakatau i te pango hei whakatau i te loop o redirect nui.
- Whakawhanaungatanga (Fix): Ko te selection o image picker i te setup wizard e tika ana ki te whakamaumau i te data model mō te mea e hoki mai ana.
- Whakawhanaungatanga (Fix): Ko te Site Exporter CLI e whaiaro te selection o te site network default e tika ana.
- Whakamaharatanga (Improved): Whakawātea ko wp-cli bundled i te package plugin, kia whakatau i te kite o te plugin.

## Versja 2.11.0 — Rerehua i 2026-05-11 {#version-2110--released-on-2026-05-11}

- Hou Hou: Ko te site exports e whaiaro ngā `index.php` e self-booting, hei āwhina i te ZIP ki te whakauru i host hou i roto i te whakamahi plugin paku.
- Hou Hou: Ko te network export e tino whaiaro ai ngā administrator mō te whakaputa i ngā subsites katoa i archive paku mai i te Site Export admin page.
- Hou Hou: E tika ana ko te toggle o Site Templates plan e whakatika via fallback chain, kia whakatau i te availability o template mō ngā limits o te plan.
- Hou Hou: Ko te checkout form editor e whaiaro ai i te product e pātata ki te field e tino kitea.
- Hou Hou: Ko te settings tab mō Import/Export e tino whakatika ana i te scope (whakawhanaungatanga) me te whaiwhi tika ki te Site Export tool.

## Versja 2.10.0 — Rerehua i 2026-05-05 {#version-2100--released-on-2026-05-05}

- Houroa: Whakaaro hou mō te PayPal guided setup wizard mō te whakauru manuahi, me te flag OAuth mō te whaiaro whakamārama i te gateway i runga i te pai.
- Houroa: He whakaora mō te panel o te mea waka (customer panel) e whakahouhia ana ki te whakamahi i te card current-template, grid pēri, me te puta mai o te **Reset current template** button.
- Whakaora: Ka ora ai te UI i roto i te whakawhiti template i runga i te pōuri o AJAX (AJAX failure).
- Whakaora: He whakahere whakamarama mō ngā wāhi whānui i te whitiwiri template mō te whaiaro whakatū.
- Whakaora: Ka whakamaoritia ai ngā input o te site override i roto i te whakaawe i tōtahe i tōtahe i te save.
- Whakaora: Ka whakaataki ai te prompt o te ara whānui (billing address) i roto i te wā e pēri te ara.
- Whakaora: He whakahere whakamarama mō ngā notis Deprecation o PHP 8.1 mō te whakawhiti noa ki te string.
- Whakaora: Ka whakatika ai ngā lazy-loaded i te wā e pēri i te init hook kia whakatika ngā wāhi.
- Whakaora: Ka whakaae ai te SSO path i roto i ngā wāhanga whakatū katoa.
- Whakaora: Ka whakatutuku ai ngā titi o te site (site identity options) i runga i te save.

## Version 2.9.0 — Whakawātea i te 2026-04-30 {#version-290--released-on-2026-04-30}

- Houroa: He whakawhiti export me import mō te single-site e whānui ana i **Tools > Export & Import**.
- Whakaora: Ka puta ai ngā ZIP files o te export i roto i te endpoint o te download e whakatū ana i te whaiaro.
- Whakaora: He whakahere whakamarama mō te rāwura SQL injection me ngā wāhi o te query i ngā queries pending export/import.
- Whakaora: Ka tautoko ai te site pending i te whakaaturia i roto i te All Sites view i roto i te wā e whakatū ana te admin email o te customer manuahi.
- Whakaora: Ka whakatika ai ngā records pending_site orphans i roto i te wā e pēri te membership.
- Whakaora: Ka whakatika ai ngā padding o te nav settings me te navigation anchor search.
- Whakaora: Ka whakaataki ai ngā sites pending i runga i te All Sites view i roto i te wā e whakatū ana te admin email o te customer manuahi.
- Whakaora: He header User-Agent mō te screenshot provider (mShots) ki te whakamamaoritia i ngā 403 errors.
- Whakaora: Ka whakatika ai te circular dependency o te import cron schedule.
- Whakaora: Ka whakatika ai ngā Tour IDs i runga i underscores i ngā user settings keys.
- Whakamaharatanga: Ka whakamahia ai te ZipArchive i roto i te wā e pēri i Alchemy/Zippy mō pai ake te compatibility.

## Version 2.8.0 — Whakawātea i te 2026-04-29 {#version-280--released-on-2026-04-29}

- Hou Hou: Whakawhanaungaho (Jumper) toggle whakahouwha i te UI o Aopito Option.
- Hou Hou: Whakawhanaungaho (Status) whakawhanaunga ki te whānui o te whānui o te checkout forms list table.
- Hou Hou: Whakawhanaunga sunrise file loader mō mga extension sunrise o MU-plugin manawa.
- Whakamahinga: Whakawhanaunga i te whakarite whakamahi error-reporting mai te settings page.
- Whakamahinga: Card wāhi whai whakaaro (Thank-you page) — te pēpi i te whānui me te style o ngā link tika.
- Whakamahinga: Whakawhanaunga i te provider screenshot mai thum.io ki WordPress.com mShots.
- Whakamahinga: Whakawhanaunga i te Registration me Default Role hei whakatō whakamua (defaults) tika i te install hou.
- Whakamahinga: `get_site_url()` ka whakahouwha anō i te whakatū o te domain e hoki ana i te port.
- Whakamahinga: Ka whakawhanaunga anō ngā file media i te whakatō tika i te setting `copy_media` i te empty.
- Whakamahinga: Ka whakahouwha anō te Object cache i runga i te write o sitemeta i te network-activate.
- Whakamahinga: Ka whai whakamua (auto-promote) te custom domain ki te primary i te DNS verification mō mga domain e hoki ana i te 3-part.
- Whakamahinga: Ka whakatika te cancellation o membership pending i roto i te cleanup o payment e expired.
- Whakamahinga: Ka whakahouwha anō te password strength checker i arahi i te prompt login inline e whakatū.
- Whakamahinga: Ka whawhai (stop) te infinite page reload i runga i te thank-you page i roto i te site e hoki ana.
- Whakamahinga: Ka whakahouwha anō te WP core registration option i runga i te plugin activation me settings save.
- Whakamahinga: Ka whai whakamua (Null expiration guard) i roto i `calculate_expiration` mō PHP 8.4 compatibility.
- Whakamahinga: Ka whakawhanaunga anō ngā duplicate signups i roto i te customer e heke ana i te membership active.
- Whakamahinga: Ka whai whakamua (Null check) ki `date_expiration` i te checkout.
- Whakamahinga: Ka whakatika te site provisioning — mga pēpi, mga inference o membership, me te promotion domain.
- Whakamahinga: Ka whakahouwha anō te status label pre-install ki NOT Activated i roto i te check e p failed.
- Whakamahinga: Ka whai whakamua (Checkout domain) ki te email verification URLs.
- Whakamahinga: Auto-login i runga i te checkout i roto i te wā he no password field.
- Whakamahinga: Ka whakahouwha anō ngā free memberships — e whakatō ana hei lifetime.

- Whakawhanaungatanga: He whakahoki ki te wāhi o te site (site publish) i roto i te whakamaoritanga o email verification, ko te mea he whakatū i te site i roto i te wā e whakamārama ai te mea e pēnei.
- Whakawhanaungatanga: He whakahoki ki te base path o te SES v2 API endpoint me te route o te identity.
- Whakawhanaungatanga: He whakahoki ki te hook `wu_inline_login_error` i roto i te pre-submit catch block.
