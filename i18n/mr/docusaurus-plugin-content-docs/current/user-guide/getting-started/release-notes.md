---
title: प्रकाशन नोंदी
sidebar_position: 9
_i18n_hash: f43456fb08d6572cbc3ddf432a51d7d5
---
# प्रकाशन नोंदी

## आवृत्ती 2.13.0 — 2026-06-05 रोजी प्रकाशित

- नवीन: ग्राहक Account, checkout, billing, साइट, invoice, template switching, आणि domain mapping प्रवाहांसाठी sovereign-tenant समर्थन जोडले, जेणेकरून tenant networks ग्राहकांना व्यवस्थापित कृतींसाठी मुख्य साइटकडे परत पाठवू शकतील.
- नवीन: आवर्ती सदस्यत्वांसाठी renewal-credential तपासण्या जोडल्या, जेणेकरून जतन केलेला billing agreement, subscription, किंवा vault token नसल्यास gateways auto-renewal निष्क्रिय करू शकतील.
- नवीन: प्रलंबित साइट निर्मितीसाठी HMAC-सत्यापित loopback publishing जोडले, ज्यामुळे background jobs उशिरा चालणाऱ्या hosts वर checkout-to-site provisioning अधिक विश्वासार्ह होते.
- नवीन: SSO URLs, checkout-form base domains, आणि automatic domain-record creation साठी developer extension points जोडले.
- दुरुस्ती: mapped domains, anonymous broker visits, logout, आणि cross-plugin dependency conflicts मध्ये SSO अधिक विश्वासार्ह आहे.
- दुरुस्ती: प्रलंबित साइट निर्मिती आता stale publish flags मधून सावरते आणि ग्राहक साइट-निर्मिती स्क्रीनवर अडकून राहणे टाळते.
- दुरुस्ती: shared checkout-form base domains साठी domain records आता तयार केले जात नाहीत, आणि कोणतेही integration सक्रिय नसताना न वापरलेले host-provider background jobs वगळले जातात.
- दुरुस्ती: Checkout, billing address, password reset, email verification, template switching, tours, आणि customer dashboard मधील edge cases आता सामान्य ग्राहक प्रवाहांना अडवत नाहीत.
- दुरुस्ती: Broadcast emails आता प्राप्तकर्ते खाजगी ठेवतात, तसेच recipient lists किंवा mail transports अयशस्वी झाल्यास SMTP/plugin fatal errors टाळतात.
- दुरुस्ती: Membership renewals, expiration display, आणि payment collection मधील edge cases आता तात्काळ expirations, crashes, किंवा चुकलेली आवश्यक payments टाळतात.
- सुधारित: WordPress सुसंगतता 7.0 पर्यंत तपासली आहे, production Vue assets npm sources मधून पुन्हा तयार केले आहेत, आणि Cypress end-to-end coverage आता अधिक checkout, setup, SSO, आणि gateway flows तपासते.

## आवृत्ती 2.12.0 — 2026-05-15 रोजी प्रकाशित

- नवीन: Hostinger (hPanel) domain mapping integration सह समर्थित host provider म्हणून जोडले
- नवीन: Site Exporter आता streamlined network-wide साइट पुनर्संचयनेसाठी network import bundles हाताळतो
- दुरुस्ती: BCC broadcast emails आता प्राप्तकर्त्यांचे पत्ते उघड होऊ नयेत म्हणून undisclosed-recipients header वापरतात
- दुरुस्ती: non-date value सह जतन करताना membership expiration date आता भ्रष्ट होत नाही
- दुरुस्ती: Stripe membership updates आता deprecated deleteDiscount API न कॉल करता discounts योग्यरीत्या साफ करतात
- दुरुस्ती: domain-mapped sites वरील SSO redirects आता अनंत redirect loops टाळण्यासाठी मर्यादित केले आहेत
- दुरुस्ती: Setup wizard image picker selection आता underlying data model योग्यरीत्या अद्ययावत करते
- दुरुस्ती: Site Exporter CLI आता योग्य default network site selection जतन करते
- सुधारित: plugin package मधून bundled wp-cli काढले, ज्यामुळे plugin आकार कमी झाला

## आवृत्ती 2.11.0 — 2026-05-11 रोजी प्रकाशित

- नवीन: साइट exports आता self-booting `index.php` bundle करतात, त्यामुळे ZIP स्वतंत्र plugin install शिवाय fresh host वर install करता येते.
- नवीन: Network export प्रशासकांना Site Export admin page वरून सर्व subsites एकाच archive मध्ये export करू देते.
- नवीन: Allow Site Templates plan toggle आता fallback chain द्वारे लागू केले जाते, ज्यामुळे plan limits साठी template availability योग्यरीत्या प्रतिबंधित होते.
- नवीन: आवश्यक field configured नसताना product जोडल्यास Checkout form editor चेतावणी देतो.
- नवीन: Import/Export settings tab आता त्याची व्याप्ती स्पष्टपणे वर्णन करतो आणि थेट Site Export tool ला link करतो.

## आवृत्ती 2.10.0 — 2026-05-05 रोजी प्रकाशित

- नवीन: seamless gateway configuration साठी OAuth flag gate सह manual credential entry साठी PayPal guided setup wizard.
- नवीन: Template switch customer panel वर्तमान-template card, persistent grid, आणि **वर्तमान template रीसेट करा** button सह पुन्हा डिझाइन केले.
- दुरुस्ती: AJAX failure वर Template switching आता UI अडकवत नाही.
- दुरुस्ती: Template switching permission states अनधिकृत प्रवेशापासून सुरक्षित केले.
- दुरुस्ती: Site override inputs जतन करण्यापूर्वी validate केले.
- दुरुस्ती: address रिकामा असताना billing address prompt आता दाखवला जातो.
- दुरुस्ती: PHP 8.1 null-to-string deprecation notices सोडवले.
- दुरुस्ती: timing issues टाळण्यासाठी init hook पूर्वी Currents lazy-loaded केले.
- दुरुस्ती: सर्व login flows मध्ये filtered SSO path पाळला जातो.
- दुरुस्ती: रिकामे site identity options save करताना जतन केले.

## आवृत्ती 2.9.0 — 2026-04-30 रोजी प्रकाशित

- नवीन: Single-site export आणि import **Tools > Export & Import** अंतर्गत जोडले.
- दुरुस्ती: Export ZIP files आता authenticated download endpoint द्वारे दिल्या जातात.
- दुरुस्ती: pending export/import queries मधील SQL injection risk आणि query issues दुरुस्त केले.
- दुरुस्ती: admin ग्राहक email manually verify करताना pending site प्रकाशित होत नाही.
- दुरुस्ती: membership missing असताना orphaned pending_site records साफ केले.
- दुरुस्ती: Settings nav padding आणि search anchor navigation दुरुस्त केले.
- दुरुस्ती: Pending sites आता All Sites view मध्ये प्रथम दाखवल्या जातात.
- दुरुस्ती: 403 errors टाळण्यासाठी Screenshot provider (mShots) User-Agent header जोडला.
- दुरुस्ती: Import cron schedule circular dependency सोडवली.
- दुरुस्ती: user settings keys मध्ये Tour IDs underscores मध्ये normalise केले.
- सुधारित: अधिक चांगल्या compatibility साठी Alchemy/Zippy ऐवजी ZipArchive आता वापरले जाते.

## आवृत्ती 2.8.0 — 2026-04-29

- नवीन: Other Options सेटिंग्ज UI मध्ये Enable Jumper toggle जोडला.
- नवीन: checkout forms यादी table मध्ये Status स्तंभ जोडला.
- नवीन: custom MU-plugin sunrise extensions साठी Addon sunrise file loader.
- सुधारित: settings page वरून error-reporting opt-in setting काढली.
- दुरुस्ती: Thank-you page site card — image आता मर्यादित ठेवली आहे आणि links योग्यरीत्या styled आहेत.
- दुरुस्ती: Screenshot provider thum.io वरून WordPress.com mShots वर बदलला.
- दुरुस्ती: Enable Registration आणि Default Role आता fresh install वर योग्य defaults सेट करतात.
- दुरुस्ती: domain मध्ये port असताना `get_site_url()` आता रिकामे परत करत नाही.
- दुरुस्ती: `copy_media` setting रिकामी असताना Clone media files आता योग्यरीत्या copied होतात.
- दुरुस्ती: network-activate sitemeta write नंतर Object cache योग्यरीत्या invalidated केला जातो.
- दुरुस्ती: 3-part domains साठी DNS verification वर custom domain आपोआप primary म्हणून promoted केला जातो.
- दुरुस्ती: expired payment clean up केल्यावर pending membership cancelled केली जाते.
- दुरुस्ती: inline login prompt dismissed केल्यानंतर password strength checker rebound केला जातो.
- दुरुस्ती: site आधीच तयार असताना thank-you page वर infinite page reload थांबवला.
- दुरुस्ती: plugin activation आणि settings save वर WP core registration option synced केला जातो.
- दुरुस्ती: PHP 8.4 compatibility साठी `calculate_expiration` मध्ये null expiration guard जोडला.
- दुरुस्ती: customer कडे आधीच active membership असल्यास duplicate signups blocked केले जातात.
- दुरुस्ती: checkout मध्ये `date_expiration` साठी null check जोडला.
- दुरुस्ती: Site provisioning मजबूत केले — limitations, membership inference, domain promotion.
- दुरुस्ती: check अयशस्वी झाल्यावर Pre-install check status label NOT Activated असा दुरुस्त केला.
- दुरुस्ती: email verification URLs साठी Checkout domain वापरला.
- दुरुस्ती: password field नसताना checkout नंतर auto-login.
- दुरुस्ती: Free memberships आता expire होत नाहीत — lifetime म्हणून हाताळली जातात.
- दुरुस्ती: customer email verify करेपर्यंत Email verification gate site publish थांबवतो.
- दुरुस्ती: SES v2 API endpoint base path आणि identity route दुरुस्त केले.
- दुरुस्ती: pre-submit catch block मध्ये `wu_inline_login_error` hook emitted केला जातो.
