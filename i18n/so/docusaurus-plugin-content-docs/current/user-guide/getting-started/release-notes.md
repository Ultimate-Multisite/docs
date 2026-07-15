---
title: Warqaddii soo saarista
sidebar_position: 9
_i18n_hash: f43456fb08d6572cbc3ddf432a51d7d5
---
# Warbixinta Waxyaabaha La Soo Bixiyay (Release Notes)

## Nooca 2.13.0 — La soo bixiyay 2026-06-05 {#version-2130--released-on-2026-06-05}

- Cusbo cusub-tenant (sovereign-tenant) oo la soo daray dukumentiga macaamiisha, checkout-ka, bixinta lacagta, meesha website-ka, invoice-ka, isbeddelka template-yada iyo xiriirka domain-ka si shabakadaha tenant-ka ay u tilmaamaan macaamiisha inay dib ugu laabaadaan website-ka muhiimka ah si loo maamulo hawlaha.
- Cusbo daro: Waxaa la soo daray hubinta xogta cusboonaysiinta (renewal-credential checks) ee xaafadaha socda (recurring memberships), si gateway-yada ay uga hor iskeedeen dib u bilaabidda auto-renewal marka aan la helo heshiis bixinti oo la kaydiyay, subscription ama vault token.
- Cusbo daro: Waxaa la soo daray daabacaadda loopback-ka lagu xaqiijiyo HMAC (HMAC-verified loopback publishing) ee website-yada weli la samaysan si loo fududeeyo habka diyaarinaya meesha checkout-ka oo u noqonaya mid aad u kalsooni badan marka hawlaha horumarka ah ay ka dib u dhacaan.
- Cusbo daro: Waxaa la soo daray fursadaha developer-ka (developer extension points) ee URL-yada SSO, domain-ka aasaasiga checkout-form-ka, iyo abuurista lacagta domain-ka si toos ah.
- Saxiix: SSO-gu wuxuu noqonayaa mid aad u kalsooni badan oo ay ku shaqeeyaan domain-yada la xiriira (mapped domains), booqashada broker-ka aan la aqoonin, dib u socodka (logout), iyo isku dhacdooyinka plugin-yada.
- Saxiix: Abuurista website-ka weli la samaysan waxay hadda ka soo kordhaysaa xogta hore oo ah daabacaadda (stale publish flags) waxayna ka horjoogsataa in macaamiisha ay ku dhacaanagta abuurista website-ka.
- Saxiix: Xiriirada domain-ka ma aha kuwa la abuuro checkout-form base domains-ka wadaagga ah, waxaana laga iska dhaafaa hawlaha horumarka ah ee host-provider-ka haddii aanu jirin isku xidid (integration) shaqaynaya.
- Saxiix: Xaaladaha adag ee checkout-ka, bixinta cagta, dib u bilaabidda sirta, xaqiijinta email-ka, isbeddelka template-yada, tours-ka iyo dashboard-ka macaamiisha ma horjuujinayaan hawlaha caadiga ah ee macaamiisha.
- Saxiix: Email-yada soo diraya ayaa hadda ilaalinaya macmiilayaasha si ay u noqdaan kuwa gaarka ah (private) iyagoo ka fogaaya khaladaadka SMTP/plugin-ka oo ah dhibaatooyin waaweyn marka liiska macaamiisha ama qaadista email-ka uu ku guuldareysto.
- Saxiix: Dib u bilaabidda xaafadaha, muujinta dhamaadka (expiration display), iyo xaaladaha adag ee ka soo horjeeda helitaanka lacagta hadda waxay ka fogaadaan dib u bilaabidda degdega ah, burburka nidaamka (crashes) ama la maqnaqa lacagta loo baahan yahay.
- Horumar: La hubiyay in WordPress uu shaqeeyo ilaa 7.0, waxyaabaha Vue ee production-ka waxaa dib loo dhiga micneoyinka npm-ka, iyo Cypress end-to-end coverage-ku wuxuu hadda si ballaaran u fulinaya hababka checkout, setup, SSO, iyo gateway-yada.

## Qaabka 2.12.0 — Waxaa la soo saaray 2026-05-15 {#version-2120--released-on-2026-05-15}

- Cusboonaysi cusub: Waxaan ku daray Hostinger (hPanel) oo ah bixiyaha host-ka la taageero inkasta oo lagu dhexgeliyo isku xirnaanta domain-ka.
- Cusboonaysi cusub: Site Exporter hadda wuxuu maamulaa bundle-ka import-ka shabakadaha (network import bundles) si loo fududeeyo soo celinta site-ka oo dhan ee shabakadda.
- Wax hagaajin: Email-yada BCC broadcast-ka waxay hadda isticmaalaan header aan la sheegin cidda si looga hor istaago in la muujiyo ciqaabada (recipient addresses).
- Wax hagaajin: Taariikhda dhacdooyinka xubbedka (membership expiration date) ma aha mid burburaysan marka la kaydiyo iyadoo la isticmaalayo qiime aan ahayn taariikh.
- Wax hagaajin: Cusboonaysi xubbedka Stripe waxay si sax ah u nadiifisaa rabitaanka (discounts) iyadoo aan la lahayn in la wicdo API-ga la burburay ee deleteDiscount.
- Wax hagaajin: Redirect-ka SSO ee loo sameeyay domain-ka lagu qabto hadda waxaa la xaddiday si looga hor istaago wareegyada redirect-ka aan dhammaad lahayn (infinite redirect loops).
- Wax hagaajin: Doorka doorashada sawirka (image picker selection) ee wizard-ka waxa uu hadda si sax ah u cusboonaysiiyaa qaab-dhismeedka data-ga hoose.
- Wax hagaajin: CLI-ga Site Exporter wuxuu hadda ilaaliyaa doorka doorashada site-ka shabakadda ee caadiga ah (default network site selection).
- Horumar: Waxaan ka saaray wp-cli-ga la isku dhexgeliyay package-ka plugin-ka, taasoo yareysaysa cabbirka plugin-ka.

## Qaabka 2.11.0 — Waxaa la soo saaray 2026-05-11 {#version-2110--released-on-2026-05-11}

- Cusboonaysi cusub: Site exports hadda waxay isku dhexgelinayaan `index.php` oo is-dhisaya (self-booting) si ZIP-ka loogu qaadi karo host cusub iyadoo aan la baahna plugin kale lagu soo saarin.
- Cusboonaysi cusub: Network export-ka waxay u oggolaanaysaa maamulayaasha inay soo saaraan dhammaan subsites-yada (subsites) hal fayl oo archive ah laga soo saaro bogga admin-ka Site Export.
- Cusboonaysi cusub: Waxaan hadda xoojinayna in doorashada qorshaha Template (Site Templates plan toggle) ay si sax ah u fuliso iyadoo la isticmaalayo hab isku xirnaan oo ka dambeeya (fallback chain), taasoo si sax ah u xaddidaya doorka template-ka ee ku xiran xaddidaadda qorshaha.
- Cusboonaysi cusub: Edit-ka foomka Checkout wuxuu diyaar u yahay inuu digniin bixiyo haddii la dariyo wax oo aan la dejin (required field) lagu daray alaabta.
- Cusboonaysi cusub: Tab-ka Dejinta Import/Export-ka wuxuu si cad u sharraxayaa meesha uu ka mid yahay iyo isku xirnaa toos ah qalabka Site Export.

## Qaabka 2.10.0 — Waxaa la soo saaray 2026-05-05 {#version-2100--released-on-2026-05-05}

- Cusbo: Wizard-ka diyaarsan PayPal oo lagu tilmaamo hababka la siiyo macluumaadka gacanta (manual credential entry) iyadoo la isticmaalayo OAuth flag gate si loo fududeeyo hababka gateway-ga.
- Cusbo: Dashboard-ka macaamiisha ee template switch-ka la dib u qaabeeyay, oo lagu qurxiyay card-ka current-template, grid-ka joogtada ah (persistent grid), iyo badhka **Reset current template**.
- Wax hagaag: Template switching-ku ma sii joojiyo UI-ga haddii AJAX-ka uu ku guuldareysto.
- Wax hagaag: Xaaladaha oggolaanshaha template switching-ka waxaa la ilaaliyay si looga hor istaago helitaanka aan loo ogolaan.
- Wax hagaag: Macluumaadka dibadda ee billing (billing address prompt) ayaa hadda muuqda marka bogga aadan bixin lahayn.
- Wax hagaag: Waxaa la xalliyay warar kaalinta PHP 8.1 ee ku saabsan in null-ka loo beddelo string.
- Wax hagaag: Lazy loading-ka ah ee hadda la isticmaalayo waa mid hore (before init hook) si looga hor istaago dhibaatooyinka waqtiga ka dhasha.
- Wax hagaag: Waa la raacaya waddooyinka SSO-ga (SSO path) dhammaan hababka galista.
- Wax hagaag: Doorashada awoodda bogga bannaan (Blank site identity options) waxaa lagu ilaaliyay marka la kaydiyo.

## Version 2.9.0 — La soo saaray 2026-04-30 {#version-290--released-on-2026-04-30}

- Cusbo: In la soo saaro iyo in la soo geliyo hal-bog (Single-site export and import) ayaa la daray diyaarinta **Tools > Export & Import**.
- Wax hagaag: Faylasha ZIP-ka waxaa hadda loo adeegsadaa endpoint-ka soo dejinta oo la xaqiijiyay.
- Wax hagaag: Khatarta SQL injection iyo dhibaatooyinka query-ga ee export/import-ka welwelka ah ayaa la saxay.
- Wax hagaag: Bogga welwelka ah (pending_site) ma la soo saaro marka admin-ku si gacanta u xaqiijiyo email-ka macaamiisha.
- Wax hagaag: Macluumaadka pending_site ee ka tirsan ayaa nadiifiyay haddii awoodda (membership) aan lahayn.
- Wax hagaag: Dhaqdhaqaaqa padding-ga settings iyo waddooyinka search anchor-ka waxaa la saxay.
- Wax hagaag: Bogga welwelka ah (pending sites) ayaa hadda la muujinaya marka hore ee aragtida All Sites.
- Wax hagaag: Header-ka User-Agent-ka qofka soo saaraya screenshot (mShots) waxaa lagu daray si looga hor istaago qaladkii 403.
- Wax hagaag: Isku xirnaanta ciwaanka cron-ka import-ka ayaa la xalliyay dhibaatooyinka isku xirnaanta.
- Wax hagaag: Tour IDs waxaa loo habay (normalised) si ay u noqdaan kuwo underscore ah marka la isticmaalo keys-ka settings-ka macluumaadka.
- Horumar: ZipArchive ayaa hadda loo isticmaalayaa halkii Alchemy/Zippy si loo helo isku-dubbarid oo wanaagsan.

## Version 2.8.0 — La soo saaray 2026-04-29 {#version-280--released-on-2026-04-29}

- Cusbo: Wax-ka Jumper toggle la lagu daray UI-ga Other Options settings.
- Cusbo: Lajibu la Status column la lagu daray labada meelaha checkout forms list table-ka.
- Cusbo: Loader faylka sunrise ee Addon-ka lagu daray si loo hubiyo custom MU-plugin sunrise extensions.
- Horumar: Waxaan ka saarnay dejinta soo celinta warbixin khaladaadka (error-reporting opt-in setting) laga qaaday bogga settings.
- Saxiix: Site card-ka bogga "Thank-you" — sawirka ayaa la xaddiday oo xiriirrada ayaa si sax ah loo qaabeeyay.
- Saxiix: Bixiyaha screenshot-ka (screenshot provider) waxaa la beddelay thum.io-ga oo lagu beddelay WordPress.com mShots.
- Saxiix: Waxaan hubinay in Registration iyo Default Role ay ku siiyaan dejinta saxda marka la cusboonaysiiyo.
- Saxiix: `get_site_url()` ma dib u soo celinayo boos bannaan haddii domain-ka uu ka mid yahay port (port).
- Saxiix: Faylasha media-ga la sameeyay ayaa si sax ah loo nuugay marka dejinta `copy_media` ay doonaysay inay bannaan tahay.
- Saxiix: Object cache-ka waxaa si sax ah looga burburiyay (invalidated) ka dib markii lagu qabto network-activate sitemeta write.
- Saxiix: Domain-ka custom-ka ayaa si toos ah loo qaaday primary marka la hubiyo DNS-ka domain-yada saddexda qaybood ee domain-ka.
- Saxiix: Xogta xubsi (membership) ee weligaa la filayo waxaa laga burburiyay marka lacagta la dhigay ay dhammaatay.
- Saxiix: Hubinta xoogga sirta (Password strength checker) ayaa dib u soo celisay markii la joojiyay talada galista si toos ah (inline login prompt).
- Saxiix: Dib u soo noqoshada bogga "Thank-you" ee infinite page reload-ka waxaa la joojiyay haddii website-ka horey loo abuuro.
- Saxiix: Doorashada registration-ka core-ka WP waxay isku xiraysaa marka lagu fuliyo plugin-ka iyo mark laga badbaado settings-ka.
- Saxiix: Waxaan ku daray hubinta "Null expiration guard" ee `calculate_expiration` si loo fududeeyo la shaqeyso PHP 8.4.
- Saxiix: Waxaa la hor istaagay (blocked) codsiyada isdiiwaangelinta isku dhow marka macmiilka hore uu leeyahay xubsi socda.
- Saxiix: Hubinta bannaan (`Null check`) ayaa lagu daray `date_expiration` ee checkout-ka.
- Saxiix: Waxaa la xoojiyay hababka diyaarinaya website-ka (Site provisioning) — xaddidda, fahamka xubshada, iyo qaadista domain-ka primary-ga.
- Saxiix: Calaamadda "Pre-install check status" waxaa si sax ah loo hagaajiyay inuu yahay NOT Activated marka hubinta ay ku guuldareysato.
- Saxiix: Domain-ka checkout-ka ayaa la isticmaalay URL-yada email verification-ka.
- Saxiix: Auto-login-ka ka dib checkout-ka waxaa lagu fulinaya haddii aan la joogin meel lagu qor sirta (password field).
- Saxiix: Xubshiyada bilaashka ma weligaa dhammaanayaan — waxay loo aragay inay yihiin nolol oo dhan.

- haga: Wajiba imtibas email waxay iska dhaafaysaa habka diyaarinta goobta ilowday ilis-waaqa ilaa macaamiishu email-ka u xaqiifayn.
- haga: Habka base path iyo route-ka aqoonsiga (identity route) ee SES v2 API waxaa la saxay.
- haga: Hook-ga `wu_inline_login_error` ayaa la soo saaray qaybta qabta pre-submit.
