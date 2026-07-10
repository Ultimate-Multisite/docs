---
title: റിലീസ് കുറിപ്പുകൾ
sidebar_position: 9
_i18n_hash: f43456fb08d6572cbc3ddf432a51d7d5
---
# റിലീസ് കുറിപ്പുകൾ {#release-notes}

## പതിപ്പ് 2.13.0 — 2026-06-05-ന് റിലീസ് ചെയ്തത് {#version-2130--released-on-2026-06-05}

- പുതിയത്: ഉപഭോക്തൃ Account, checkout, billing, സൈറ്റ്, invoice, template മാറ്റൽ, domain mapping പ്രവാഹങ്ങൾക്കായി sovereign-tenant പിന്തുണ ചേർത്തു. ഇതിലൂടെ tenant നെറ്റ്‌വർക്കുകൾക്ക് നിയന്ത്രിത പ്രവർത്തനങ്ങൾക്കായി ഉപഭോക്താക്കളെ പ്രധാന സൈറ്റിലേക്ക് തിരികെ നയിക്കാം.
- പുതിയത്: recurring membership-കൾക്കായി renewal-credential പരിശോധനകൾ ചേർത്തു. സംരക്ഷിച്ച billing agreement, subscription, അല്ലെങ്കിൽ vault token ഇല്ലെങ്കിൽ gateway-കൾക്ക് auto-renewal പ്രവർത്തനരഹിതമാക്കാം.
- പുതിയത്: pending സൈറ്റ് സൃഷ്ടിക്കായി HMAC-verified loopback publishing ചേർത്തു. background job-കൾ വൈകുന്ന host-ുകളിൽ checkout-to-site provisioning കൂടുതൽ വിശ്വസനീയമാക്കുന്നു.
- പുതിയത്: SSO URL-കൾ, checkout-form base domain-കൾ, സ്വയമേവയുള്ള domain-record സൃഷ്ടിക്കൽ എന്നിവയ്ക്കായി developer extension point-ുകൾ ചേർത്തു.
- പരിഹാരം: mapped domain-കൾ, anonymous broker സന്ദർശനങ്ങൾ, logout, cross-plugin dependency conflict-ുകൾ എന്നിവയിൽ SSO കൂടുതൽ വിശ്വസനീയമാണ്.
- പരിഹാരം: pending സൈറ്റ് സൃഷ്ടിക്കൽ ഇപ്പോൾ പഴകിയ publish flag-ുകളിൽ നിന്ന് വീണ്ടെടുക്കുന്നു; ഉപഭോക്താക്കൾ site-creation screen-ിൽ കുടുങ്ങുന്നത് ഒഴിവാക്കുന്നു.
- പരിഹാരം: shared checkout-form base domain-കൾക്കായി domain record-ുകൾ ഇനി സൃഷ്ടിക്കില്ല; integration സജീവമല്ലെങ്കിൽ ഉപയോഗിക്കാത്ത host-provider background job-കൾ ഒഴിവാക്കുന്നു.
- പരിഹാരം: Checkout, billing address, password reset, email verification, template മാറ്റൽ, tour-കൾ, customer dashboard edge case-ുകൾ എന്നിവ ഇനി സാധാരണ ഉപഭോക്തൃ പ്രവാഹങ്ങളെ തടയില്ല.
- പരിഹാരം: recipient list-ുകളോ mail transport-ുകളോ പരാജയപ്പെടുമ്പോൾ SMTP/plugin fatal error-ുകൾ ഒഴിവാക്കുന്നതിനൊപ്പം broadcast email-ുകൾ ഇപ്പോൾ സ്വീകരിക്കുന്നവരെ സ്വകാര്യമായി നിലനിർത്തുന്നു.
- പരിഹാരം: Membership renewal-ുകൾ, expiration display, payment collection edge case-ുകൾ എന്നിവയിൽ ഉടൻ expiration, crash, അല്ലെങ്കിൽ ആവശ്യമായ payment നഷ്ടപ്പെടൽ എന്നിവ ഇനി ഒഴിവാക്കുന്നു.
- മെച്ചപ്പെടുത്തി: WordPress compatibility 7.0 വരെ പരിശോധിച്ചു, production Vue asset-ുകൾ npm source-ുകളിൽ നിന്ന് വീണ്ടും build ചെയ്തു, Cypress end-to-end coverage ഇപ്പോൾ കൂടുതൽ checkout, setup, SSO, gateway പ്രവാഹങ്ങൾ പരീക്ഷിക്കുന്നു.

## പതിപ്പ് 2.12.0 — 2026-05-15-ന് റിലീസ് ചെയ്തത് {#version-2120--released-on-2026-05-15}

- പുതിയത്: domain mapping integration ഉള്ള പിന്തുണയുള്ള host provider ആയി Hostinger (hPanel) ചേർത്തു
- പുതിയത്: network മുഴുവൻ സൈറ്റ് പുനഃസ്ഥാപനം ലളിതമാക്കാൻ Site Exporter ഇപ്പോൾ network import bundle-ുകൾ കൈകാര്യം ചെയ്യുന്നു
- പരിഹാരം: recipient address-ുകൾ പുറത്താകുന്നത് തടയാൻ BCC broadcast email-ുകൾ ഇപ്പോൾ undisclosed-recipients header ഉപയോഗിക്കുന്നു
- പരിഹാരം: date അല്ലാത്ത മൂല്യം നൽകി save ചെയ്യുമ്പോൾ membership expiration date ഇനി കേടാകില്ല
- പരിഹാരം: deprecated deleteDiscount API വിളിക്കാതെ Stripe membership update-ുകൾ ഇപ്പോൾ discount-ുകൾ ശരിയായി clear ചെയ്യുന്നു
- പരിഹാരം: domain-mapped സൈറ്റുകളിലെ SSO redirect-ുകൾക്ക് ഇപ്പോൾ പരിധിയുണ്ട്; infinite redirect loop-ുകൾ തടയുന്നു
- പരിഹാരം: Setup wizard image picker selection ഇപ്പോൾ underlying data model ശരിയായി update ചെയ്യുന്നു
- പരിഹാരം: Site Exporter CLI ഇപ്പോൾ ശരിയായ default network site selection നിലനിർത്തുന്നു
- മെച്ചപ്പെടുത്തി: plugin package-ിൽ നിന്ന് bundled wp-cli നീക്കി; plugin വലുപ്പം കുറഞ്ഞു

## പതിപ്പ് 2.11.0 — 2026-05-11-ന് റിലീസ് ചെയ്തത് {#version-2110--released-on-2026-05-11}

- പുതിയത്: സൈറ്റ് export-ുകൾ ഇപ്പോൾ self-booting `index.php` bundle ചെയ്യുന്നു. അതിനാൽ വേറെ plugin install ഇല്ലാതെ പുതിയ host-ിൽ ZIP install ചെയ്യാം.
- പുതിയത്: Site Export admin page-ിൽ നിന്ന് ഒറ്റ archive-ിൽ എല്ലാ subsite-ുകളും export ചെയ്യാൻ network export administrator-മാർക്ക് അനുവദിക്കുന്നു.
- പുതിയത്: Allow Site Templates plan toggle ഇപ്പോൾ fallback chain വഴി enforce ചെയ്യുന്നു; plan limit-ുകൾക്കായി template ലഭ്യത ശരിയായി നിയന്ത്രിക്കുന്നു.
- പുതിയത്: ആവശ്യമായ field configure ചെയ്യാതെ product ചേർത്താൽ checkout form editor മുന്നറിയിപ്പ് നൽകുന്നു.
- പുതിയത്: Import/Export settings tab ഇപ്പോൾ അതിന്റെ scope വ്യക്തമായി വിവരിക്കുകയും Site Export tool-ിലേക്ക് നേരിട്ട് link ചെയ്യുകയും ചെയ്യുന്നു.

## പതിപ്പ് 2.10.0 — 2026-05-05-ന് റിലീസ് ചെയ്തത് {#version-2100--released-on-2026-05-05}

- പുതിയത്: manual credential entry-ക്കായി OAuth flag gate ഉള്ള PayPal guided setup wizard; seamless gateway configuration-ന്.
- പുതിയത്: current-template card, persistent grid, **നിലവിലെ template reset ചെയ്യുക** button എന്നിവയോടെ template switch customer panel പുനർരൂപകൽപ്പന ചെയ്തു.
- പരിഹാരം: AJAX പരാജയത്തിൽ template switching ഇനി UI hang ചെയ്യില്ല.
- പരിഹാരം: അനധികൃത access-ിനെതിരെ template switching permission state-ുകൾ സുരക്ഷിതമാക്കി.
- പരിഹാരം: save ചെയ്യുന്നതിന് മുമ്പ് site override input-ുകൾ validate ചെയ്തു.
- പരിഹാരം: address ശൂന്യമാണെങ്കിൽ billing address prompt ഇപ്പോൾ കാണിക്കുന്നു.
- പരിഹാരം: PHP 8.1 null-to-string deprecation notice-ുകൾ പരിഹരിച്ചു.
- പരിഹാരം: timing issue-കൾ തടയാൻ init hook-ിന് മുമ്പ് Currents lazy-load ചെയ്തു.
- പരിഹാരം: എല്ലാ login flow-കളിലും filtered SSO path മാനിക്കുന്നു.
- പരിഹാരം: ശൂന്യമായ site identity option-ുകൾ save ചെയ്യുമ്പോൾ നിലനിർത്തുന്നു.

## പതിപ്പ് 2.9.0 — 2026-04-30-ന് റിലീസ് ചെയ്തത് {#version-290--released-on-2026-04-30}

- പുതിയത്: single-site export, import എന്നിവ **Tools > Export & Import**-ന്റെ കീഴിൽ ചേർത്തു.
- പരിഹാരം: Export ZIP file-ുകൾ ഇപ്പോൾ authenticated download endpoint വഴി നൽകുന്നു.
- പരിഹാരം: pending export/import query-കളിലെ SQL injection അപകടവും query പ്രശ്നങ്ങളും തിരുത്തി.
- പരിഹാരം: admin ഉപഭോക്തൃ email മാനുവലായി verify ചെയ്യുമ്പോൾ pending site publish ചെയ്യപ്പെടാത്ത പ്രശ്നം പരിഹരിച്ചു.
- പരിഹാരം: membership ഇല്ലാതിരിക്കുമ്പോൾ orphaned pending_site record-ുകൾ clean up ചെയ്തു.
- പരിഹാരം: Settings nav padding, search anchor navigation എന്നിവ തിരുത്തി.
- പരിഹാരം: pending site-ുകൾ ഇപ്പോൾ All Sites view-ിൽ ആദ്യം കാണിക്കുന്നു.
- പരിഹാരം: 403 error-ുകൾ തടയാൻ screenshot provider (mShots) User-Agent header ചേർത്തു.
- പരിഹാരം: Import cron schedule circular dependency പരിഹരിച്ചു.
- പരിഹാരം: user settings key-കളിൽ Tour ID-കൾ underscore-ുകളാക്കി normalise ചെയ്തു.
- മെച്ചപ്പെടുത്തി: കൂടുതൽ compatibility-ക്കായി Alchemy/Zippy-ന് പകരം ZipArchive ഇപ്പോൾ ഉപയോഗിക്കുന്നു.

## പതിപ്പ് 2.8.0 — 2026-04-29 {#version-280--released-on-2026-04-29}

- പുതിയത്: Other Options ക്രമീകരണ UI-ലേക്ക് Enable Jumper ടോഗിൾ ചേർത്തു.
- പുതിയത്: checkout forms പട്ടികയിലേക്ക് Status കോളം ചേർത്തു.
- പുതിയത്: ഇഷ്ടാനുസൃത MU-plugin sunrise വിപുലീകരണങ്ങൾക്കായി Addon sunrise file loader.
- മെച്ചപ്പെടുത്തി: ക്രമീകരണ പേജിൽ നിന്ന് error-reporting opt-in ക്രമീകരണം നീക്കി.
- പരിഹാരം: thank-you page site card — ചിത്രം ഇപ്പോൾ പരിമിതപ്പെടുത്തിയിരിക്കുന്നു, ലിങ്കുകൾ ശരിയായി സ്റ്റൈൽ ചെയ്തിരിക്കുന്നു.
- പരിഹാരം: Screenshot provider thum.io-ൽ നിന്ന് WordPress.com mShots-ലേക്ക് മാറ്റി.
- പരിഹാരം: Enable Registration, Default Role എന്നിവ fresh install-ൽ ഇപ്പോൾ ശരിയായ ഡിഫോൾട്ടുകൾ സജ്ജീകരിക്കുന്നു.
- പരിഹാരം: domain-ിൽ port ഉൾപ്പെട്ടിരിക്കുമ്പോൾ `get_site_url()` ഇനി ശൂന്യം തിരികെ നൽകില്ല.
- പരിഹാരം: `copy_media` ക്രമീകരണം ശൂന്യമായിരിക്കുമ്പോൾ clone media files ഇപ്പോൾ ശരിയായി പകർത്തുന്നു.
- പരിഹാരം: network-activate sitemeta write-ന് ശേഷം object cache ശരിയായി അസാധുവാക്കി.
- പരിഹാരം: 3-part domains-നുള്ള DNS verification-ൽ custom domain primary ആയി സ്വയം ഉയർത്തി.
- പരിഹാരം: കാലഹരണപ്പെട്ട payment വൃത്തിയാക്കുമ്പോൾ pending membership റദ്ദാക്കി.
- പരിഹാരം: inline login prompt നിരസിച്ചതിന് ശേഷം password strength checker വീണ്ടും ബന്ധിപ്പിച്ചു.
- പരിഹാരം: site ഇതിനകം സൃഷ്ടിച്ചിരിക്കുമ്പോൾ thank-you page-ൽ അനന്തമായ page reload നിർത്തി.
- പരിഹാരം: plugin activation-ലും settings save-ലും WP core registration option സിങ്ക് ചെയ്തു.
- പരിഹാരം: PHP 8.4 compatibility-ക്കായി `calculate_expiration`-ൽ null expiration guard ചേർത്തു.
- പരിഹാരം: customer-ന് ഇതിനകം active membership ഉണ്ടെങ്കിൽ duplicate signups തടഞ്ഞു.
- പരിഹാരം: checkout-ൽ `date_expiration`-നായി null check ചേർത്തു.
- പരിഹാരം: site provisioning കൂടുതൽ ശക്തമാക്കി — പരിമിതികൾ, membership inference, domain promotion.
- പരിഹാരം: പരിശോധന പരാജയപ്പെടുമ്പോൾ pre-install check status label NOT Activated ആയി തിരുത്തി.
- പരിഹാരം: email verification URL-കൾക്കായി checkout domain ഉപയോഗിച്ചു.
- പരിഹാരം: password field ഇല്ലാത്തപ്പോൾ checkout-ന് ശേഷം auto-login.
- പരിഹാരം: Free memberships ഇനി കാലഹരണപ്പെടില്ല — lifetime ആയി കണക്കാക്കുന്നു.
- പരിഹാരം: customer email സ്ഥിരീകരിക്കുന്നതുവരെ Email verification gate site publish തടഞ്ഞുനിർത്തുന്നു.
- പരിഹാരം: SES v2 API endpoint base path-ഉം identity route-ഉം തിരുത്തി.
- പരിഹാരം: `wu_inline_login_error` hook pre-submit catch block-ൽ പുറപ്പെടുവിച്ചു.
