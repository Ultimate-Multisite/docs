---
title: WooCommerce ഇന്റഗ്രേഷൻ മാറ്റപ്പട്ടിക
sidebar_position: 99
_i18n_hash: 54658c4a8d52e85998183f523437d5a3
---
# WooCommerce Integration മാറ്റപ്പട്ടിക {#woocommerce-integration-changelog}

പതിപ്പ് 2.2.0 - 2026-07-01-ന് പുറത്തിറക്കി
* പുതിയത്: Ultimate Multisite നികുതി തുകകൾ ഇപ്പോൾ checkout-ൽ വേർതിരിച്ച WooCommerce fee വരികളായി കാണിക്കും. ഇതിലൂടെ payment-ന് മുമ്പ് നികുതി മൊത്തങ്ങൾ കൂടുതൽ വ്യക്തമായിരിക്കും.
* പുതിയത്: WooCommerce Subscriptions വീണ്ടും ശ്രമിക്കുന്ന കാലയളവിൽ പരാജയപ്പെട്ട renewal suspension വേണമെന്നുള്ള sites-ക്കായി "Suspend Memberships Immediately on Failed Renewals" എന്ന opt-in setting-ഉം `wu_woo_suspend_on_payment_failure` filter-ഉം ചേർത്തു.
* പരിഹാരം: failed അല്ലെങ്കിൽ recovered renewals-ന് ശേഷം Ultimate Multisite memberships-സുമായി sync നഷ്ടപ്പെടാൻ സാധ്യതയുണ്ടായിരുന്ന WooCommerce Subscription statuses പൊരുത്തപ്പെടുത്തി.
* പരിഹാരം: Ultimate Multisite currency list-ൽ ഇല്ലായിരുന്നപ്പോൾ WooCommerce store currency ചേർത്തു.
* പരിഹാരം: subscribers-നെ WooCommerce checkout-ലേക്ക് redirect ചെയ്യുമ്പോൾ customer billing details നിലനിർത്തി.
* മെച്ചപ്പെടുത്തി: Jetpack Autoloader 5-ുമായുള്ള compatibility ചേർത്തു.
* മെച്ചപ്പെടുത്തി: GitHub, marketplace zips എന്നിവയിൽ nested staging directories-ഉം development files-ഉം ഒഴിവാക്കാൻ release package generation ശുദ്ധമാക്കി.

പതിപ്പ് 2.0.6 - 2026-01-16-ന് പുറത്തിറക്കി
* മെച്ചപ്പെടുത്തൽ: addon-ൽ core subscriptions ഉൾപ്പെടുത്തി. ഇനി Woocommerce Subscriptinos extension ആവശ്യമില്ല.

പതിപ്പ് 2.0.5 - 2026-01-09-ന് പുറത്തിറക്കി
* മെച്ചപ്പെടുത്തൽ: glotpress API-യിൽ നിന്ന് translations load ചെയ്യുക.
* പരിഹാരം: ചില page builders-ൽ fatal error.
* പരിഹാരം: customer main site-യിലെ member ആണെങ്കിൽ infinite redirect.

പതിപ്പ് 2.0.4 - 2025-11-14-ന് പുറത്തിറക്കി
* ചേർത്തു: നിരവധി കൂടുതൽ ഭാഷകൾക്കുള്ള translations.
* മാറ്റി: Ultimate Multisite: Woocommerce Integration എന്ന് rename ചെയ്തു.
* ചേർത്തു: Woocommerce 10.2.1-ുമായുള്ള compatibility.
* ചേർത്തു: Woocommerce Subscriptions 7.7.0-ുമായുള്ള compatibility.
* പരിഹാരം: PHP 8.4-ുമായുള്ള compatibility
* പരിഹാരം: WC account page ഇല്ലാത്തപ്പോൾ redirect ചെയ്യൽ.

പതിപ്പ് 2.0.3 - 2025-08-13-ന് പുറത്തിറക്കി
* മാറ്റി: പുതിയ marketplace ഉപയോഗിച്ച് automatic updates പ്രവർത്തനക്ഷമമാക്കി.

പതിപ്പ് 2.0.2 - 2025-07-05-ന് പുറത്തിറക്കി
* മാറ്റി: Multisite Ultimate: Woocommerce Integration എന്ന് rename ചെയ്തു.
* ചേർത്തു: Woocommerce 9.8.1-ുമായുള്ള compatibility.
* ചേർത്തു: Woocommerce Subscriptions 7.3.0-ുമായുള്ള compatibility.
* പരിഹാരം: customer subscription cancel ചെയ്യുന്നത്.
* പരിഹാരം: checkout block ഉപയോഗിക്കുമ്പോൾ fatal error.
* മെച്ചപ്പെടുത്തൽ: ഇപ്പോൾ Woocommerce high performance custom order tables-ുമായി compatible ആണ്.
* പരിഹാരം: WooCommerce checkout-ൽ cancel ചെയ്താലും membership upgrade ആകാൻ സാധ്യതയുണ്ടായിരുന്നു.

പതിപ്പ് 2.0.1 - 2023-08-09-ന് പുറത്തിറക്കി

* ചേർത്തു: Woocommerce 7.9.0-ുമായുള്ള compatibility.
* ചേർത്തു: Woocommerce Subscriptions 5.3.0-ുമായുള്ള compatibility.
* ചേർത്തു: membership updates-നുള്ള support.
* ചേർത്തു: Woocommerce-ൽ trials, setup fees എന്നിവയെക്കുറിച്ചുള്ള notices.
* ചേർത്തു: meta value ഉപയോഗിച്ച് Ultimate Multisite Woocommerce products തിരിച്ചറിയൽ.
* ചേർത്തു: Ultimate Multisite-ുമായി ബന്ധപ്പെട്ട എല്ലാ Woocommerce products അടയാളപ്പെടുത്താൻ one-time fix ചേർത്തു.
* ചേർത്തു: Ultimate Multisite സൃഷ്ടിച്ച products Woocommerce list-ൽ നിന്ന് നീക്കി.
* മെച്ചപ്പെടുത്തൽ: cart-ിൽ പ്രയോഗിക്കാൻ non-recurring Woocommerce discount സൃഷ്ടിച്ചു.
* മെച്ചപ്പെടുത്തൽ: recurring discount Woocommerce product-ലേക്ക് പുനഃസ്ഥാപിച്ചു.
* മെച്ചപ്പെടുത്തൽ: Woocommerce product-ൽ recurring discount label ചേർത്തു.
* മെച്ചപ്പെടുത്തൽ: checkout-ൽ product type ഉറപ്പാക്കി.
* പരിഹാരം: downgrade process സമയത്ത് membership status നിലനിർത്തി.
* പരിഹാരം: cancellation process സമയത്തെ errors ഒഴിവാക്കാൻ subscription നിലവിലുണ്ടോ എന്ന് പരിശോധിച്ചു.
* പരിഹാരം: Woocommerce subscriptions-ൽ ഉപയോഗിക്കാൻ start subscription date ചേർത്തു.
* ആന്തരികം: പുതിയ PHP 8.1 build process നടപ്പാക്കി.

പതിപ്പ് 2.0.0 - പൂർണ്ണമായ rewrite.

* ചേർത്തു: gateway മാറ്റുമ്പോഴോ membership cancel ചെയ്യുമ്പോഴോ woo subscription നീക്കം ചെയ്യാനുള്ള cancellation method process ചെയ്യുക;
* ചേർത്തു: memberships downgrade ചെയ്യാനും upgrade ചെയ്യാനും handler;
* മെച്ചപ്പെടുത്തൽ: account update അനുവദിക്കാൻ subsites-ിലെ customer update form-ൽ woocommerce dependencies load ചെയ്യുക;
* മെച്ചപ്പെടുത്തൽ: Woocommerce cart ഇല്ലെങ്കിൽ ശരിയായി load ചെയ്യുക;
* മെച്ചപ്പെടുത്തൽ: checkout process ചെയ്യുമ്പോൾ main site tables-ൽ തന്നെയാണെന്ന് ഉറപ്പാക്കുക;
* മെച്ചപ്പെടുത്തൽ: Ultimo renewal order Woocommerce subscription order value അടിസ്ഥാനമാക്കുക, last payment അടിസ്ഥാനമാക്കാതെ;
* പരിഹാരം: WU Membership button link;
* പരിഹാരം: Woocommerce subscriptions renewal paid ആയപ്പോൾ Ultimo order paid ആയി set ചെയ്യുക;
* Build: MPB builder ആയി ചേർക്കുക;

പതിപ്പ് 2.0.0-beta-5 - 2022-01-21-ന് പുറത്തിറക്കി

* ആന്തരികം: hooks, filters generator ചേർത്തു;
* ആന്തരികം: developer quality of life-ക്കായി Ultimate Multisite stubs ചേർത്തു;
* പരിഹരിച്ചു: ആവശ്യമില്ലാത്തപ്പോൾ multiple products സൃഷ്ടിക്കുന്നത് തടയുക;

പതിപ്പ് 2.0.0-beta.4 - 2021-09-23

* പരിഹാരം: WooCommerce main site മാത്രം അല്ലാതെ network active ആയിരിക്കണം എന്ന് ആവശ്യപ്പെടൽ;
* മെച്ചപ്പെടുത്തൽ: add-on mu-plugin ആയി ഉപയോഗിക്കാൻ അനുവദിക്കുന്ന filter ചേർത്തു;

പതിപ്പ് 2.0.0-beta.3 - 2021-05-28

* പരിഹാരം: Dashboard access control അത്യധികം കടുപ്പമായിരുന്നു;
* മെച്ചപ്പെടുത്തൽ: Ultimate Multisite top-menu-വിലേക്ക് WooCommerce help links ചേർത്തു;

പതിപ്പ് 2.0.0-beta.2 - 2021-05-04

* മെച്ചപ്പെടുത്തൽ: WCS renewal order creation സമയത്ത് Ultimo-യിൽ pending payments സൃഷ്ടിക്കുന്നു;
* മെച്ചപ്പെടുത്തൽ: Ultimate Multisite customer data ഉപയോഗിച്ച് billing fields മുൻകൂട്ടി പൂരിപ്പിക്കുന്നു;
* മെച്ചപ്പെടുത്തൽ: gateways-ക്കായി billing fields തിരികെ ചേർക്കുന്നു;

പതിപ്പ് 2.0.0-beta.1 - 2021-05-04

* പ്രാരംഭ beta release

-- പഴയ പതിപ്പുകൾ --

പതിപ്പ് 1.2.6 - 26/03/2020

* പരിഹരിച്ചു: WooCommerce Subscriptions-ന്റെ പുതിയ versions-ുമായുള്ള ചെറിയ incompatibility;

പതിപ്പ് 1.2.5 - 26/08/2019

* പരിഹരിച്ചു: previous release-യിലെ error;

പതിപ്പ് 1.2.4 - 22/08/2019

* മെച്ചപ്പെടുത്തി: integration കഴിഞ്ഞ ഉടനെ WooCommerce checkout screen-ലേക്ക് redirect ചെയ്യാനുള്ള option ചേർത്തു;

പതിപ്പ് 1.2.3 - 26/05/2019

* പരിഹരിച്ചു: ചില edge cases-ൽ WooCommerce-നുള്ള payment email അപ്രത്യക്ഷമായി;

പതിപ്പ് 1.2.2 - 27/02/2019

* ചേർത്തു: WooCommerce Subscription integration-ൽ setup fees-നുള്ള support;

പതിപ്പ് 1.2.1 - 17/11/2018

* പരിഹരിച്ചു: Ultimate Multisite version 1.9.0-ുമായുള്ള compatibility issues;

പതിപ്പ് 1.2.0 - 10/09/2018

* മെച്ചപ്പെടുത്തി: add-ons-ക്കുള്ള പുതിയ updates URL;
* ചേർത്തു: WooCommerce Subscription-ന് beta support;

പതിപ്പ് 1.1.2 - 11/02/2018

* പരിഹരിച്ചു: WooCommerce endpoints-ലുള്ള changes-നോട് പ്രതികരിക്കാൻ Pay link dynamically generate ചെയ്യുന്നത്;
* മെച്ചപ്പെടുത്തി: payment_completed called ആകുമ്പോൾ, renewal hooks ആവശ്യമായപ്പോൾ run ചെയ്യുമെന്ന് ഉറപ്പാക്കാൻ, orders-ന് completed status ഞങ്ങൾ ഇപ്പോൾ force ചെയ്യുന്നു;

Version 1.1.1 - 24/01/2018

* പരിഹരിച്ചു: WooCommerce പ്രധാന സൈറ്റിൽ ഇപ്പോൾ മാത്രമാണ് സജീവമാക്കിയതോ എന്നും ഇനി ഇത് പരിശോധിക്കും;
* പരിഹരിച്ചു: നികുതികൾ ഉൾപ്പെടുത്തി ഓർഡർ സൃഷ്ടിക്കാൻ അനുവദിക്കുന്നതിനായി ഓവർലോഡിംഗുകൾ ഉൾപ്പെടുത്തി;

Version 1.1.0 - 04/11/2017

* പരിഹരിച്ചു: ഇന്റഗ്രേഷൻ ബട്ടണിന്റെ ലേബൽ ഇനി ക്രമീകരണങ്ങളെ പ്രതിഫലിപ്പിക്കുന്ന തരത്തിൽ യഥാർത്ഥത്തിൽ മാറും. Ultimate Multisite 1.5.0 ആവശ്യമാണ്;
* പരിഹരിച്ചു: WooCommerce നെറ്റ്‌വർക്കിൽ സജീവമല്ലാതെ പ്രധാന സൈറ്റിൽ മാത്രം സജീവമാക്കിയാലും WooCommerce Integration ഇപ്പോൾ പ്രവർത്തിക്കും;

1.0.0 - പ്രാരംഭ റിലീസ്
