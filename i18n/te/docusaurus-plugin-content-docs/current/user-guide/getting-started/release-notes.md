---
title: విడుదల గమనికలు
sidebar_position: 9
_i18n_hash: f43456fb08d6572cbc3ddf432a51d7d5
---
# విడుదల గమనికలు

## వెర్షన్ 2.13.0 — 2026-06-05న విడుదలైంది {#version-2130--released-on-2026-06-05}

- కొత్తది: కస్టమర్ Account, checkout, billing, సైట్, ఇన్వాయిస్, టెంప్లేట్ మార్పు, డొమైన్ మ్యాపింగ్ ప్రవాహాలకు sovereign-tenant మద్దతు జోడించబడింది. దీని ద్వారా tenant నెట్‌వర్క్‌లు నిర్వహిత చర్యల కోసం కస్టమర్లను ప్రధాన సైట్‌కు తిరిగి పంపగలవు.
- కొత్తది: పునరావృత membershipల కోసం renewal-credential తనిఖీలు జోడించబడ్డాయి. సేవ్ చేసిన billing ఒప్పందం, subscription, లేదా vault token లేకపోతే gateways ఆటో-renewalను నిలిపివేయగలవు.
- కొత్తది: పెండింగ్ సైట్ సృష్టి కోసం HMAC-ధృవీకరిత loopback publishing జోడించబడింది. background jobs ఆలస్యమయ్యే హోస్ట్‌లలో checkout-to-site provisioning మరింత నమ్మదగినదిగా ఉంటుంది.
- కొత్తది: SSO URLలు, checkout-form base domains, ఆటోమేటిక్ domain-record సృష్టి కోసం developer extension points జోడించబడ్డాయి.
- పరిష్కారం: mapped domains, anonymous broker visits, logout, మరియు cross-plugin dependency conflictsలో SSO ఇప్పుడు మరింత నమ్మదగినది.
- పరిష్కారం: పెండింగ్ సైట్ సృష్టి ఇప్పుడు పాత publish flags నుంచి పునరుద్ధరించుకుని, కస్టమర్లు సైట్-సృష్టి స్క్రీన్‌లో ఇరుక్కుపోకుండా చేస్తుంది.
- పరిష్కారం: shared checkout-form base domains కోసం domain records ఇక సృష్టించబడవు. integration క్రియాశీలంగా లేనప్పుడు ఉపయోగించని host-provider background jobs దాటవేయబడతాయి.
- పరిష్కారం: Checkout, billing address, password reset, email verification, template switching, tours, మరియు customer dashboard అంచు పరిస్థితులు ఇక సాధారణ కస్టమర్ ప్రవాహాలను అడ్డుకోవు.
- పరిష్కారం: recipient lists లేదా mail transports విఫలమైనప్పుడు SMTP/plugin fatal errorsను నివారిస్తూ broadcast emails ఇప్పుడు గ్రహీతలను ప్రైవేట్‌గా ఉంచుతాయి.
- పరిష్కారం: Membership renewals, expiration display, మరియు payment collection అంచు పరిస్థితులు ఇప్పుడు తక్షణ expirationలు, crashes, లేదా తప్పిపోయిన అవసరమైన చెల్లింపులను నివారిస్తాయి.
- మెరుగుపరచబడింది: WordPress అనుకూలత 7.0 వరకు పరీక్షించబడింది, production Vue assets npm sources నుంచి మళ్లీ నిర్మించబడ్డాయి, మరియు Cypress end-to-end coverage ఇప్పుడు మరిన్ని checkout, setup, SSO, మరియు gateway ప్రవాహాలను పరీక్షిస్తుంది.

## వెర్షన్ 2.12.0 — 2026-05-15న విడుదలైంది {#version-2120--released-on-2026-05-15}

- కొత్తది: domain mapping integrationతో మద్దతు ఉన్న host providerగా Hostinger (hPanel) జోడించబడింది
- కొత్తది: నెట్‌వర్క్ అంతటా సులభమైన సైట్ పునరుద్ధరణ కోసం Site Exporter ఇప్పుడు network import bundlesను నిర్వహిస్తుంది
- పరిష్కారం: గ్రహీత చిరునామాలు బయటపడకుండా ఉండేందుకు BCC broadcast emails ఇప్పుడు undisclosed-recipients headerను ఉపయోగిస్తాయి
- పరిష్కారం: తేదీ కాని విలువతో సేవ్ చేసినప్పుడు Membership expiration date ఇక దెబ్బతినదు
- పరిష్కారం: Stripe membership updates ఇప్పుడు deprecated deleteDiscount APIను పిలవకుండా discountsను సరిగ్గా clear చేస్తాయి
- పరిష్కారం: domain-mapped sitesలో SSO redirects ఇప్పుడు అంతులేని redirect loopsను నివారించేందుకు పరిమితం చేయబడ్డాయి
- పరిష్కారం: Setup wizard image picker selection ఇప్పుడు underlying data modelను సరిగ్గా update చేస్తుంది
- పరిష్కారం: Site Exporter CLI ఇప్పుడు సరైన default network site selectionను కాపాడుతుంది
- మెరుగుపరచబడింది: plugin package నుంచి bundled wp-cli తీసివేయబడింది, దాంతో plugin పరిమాణం తగ్గింది

## వెర్షన్ 2.11.0 — 2026-05-11న విడుదలైంది {#version-2110--released-on-2026-05-11}

- కొత్తది: సైట్ exports ఇప్పుడు self-booting `index.php`ను bundle చేస్తాయి. కాబట్టి ZIPను వేరే plugin install లేకుండా కొత్త hostపై install చేయవచ్చు.
- కొత్తది: Network export ద్వారా administrators Site Export admin page నుంచి అన్ని subsitesను ఒకే archiveలో export చేయగలరు.
- కొత్తది: Allow Site Templates plan toggle ఇప్పుడు fallback chain ద్వారా అమలు చేయబడుతుంది, plan limits కోసం template availabilityను సరిగ్గా పరిమితం చేస్తుంది.
- కొత్తది: అవసరమైన field configure చేయకుండా product జోడించినప్పుడు Checkout form editor హెచ్చరిస్తుంది.
- కొత్తది: Import/Export settings tab ఇప్పుడు తన పరిధిని స్పష్టంగా వివరిస్తుంది మరియు Site Export toolకు నేరుగా link చేస్తుంది.

## వెర్షన్ 2.10.0 — 2026-05-05న విడుదలైంది {#version-2100--released-on-2026-05-05}

- కొత్తది: నిరాఘాటమైన gateway configuration కోసం OAuth flag gateతో manual credential entryకి PayPal guided setup wizard.
- కొత్తది: current-template card, persistent grid, మరియు **ప్రస్తుత templateను reset చేయి** buttonతో Template switch customer panel మళ్లీ రూపకల్పన చేయబడింది.
- పరిష్కారం: AJAX failure జరిగినప్పుడు Template switching ఇక UIను నిలిపివేయదు.
- పరిష్కారం: అనధికార access నుంచి Template switching permission states సురక్షితం చేయబడ్డాయి.
- పరిష్కారం: Site override inputs సేవ్ చేసే ముందు validate చేయబడ్డాయి.
- పరిష్కారం: address ఖాళీగా ఉన్నప్పుడు Billing address prompt ఇప్పుడు చూపబడుతుంది.
- పరిష్కారం: PHP 8.1 null-to-string deprecation notices పరిష్కరించబడ్డాయి.
- పరిష్కారం: timing issuesను నివారించేందుకు init hookకు ముందు Currents lazy-loaded చేయబడ్డాయి.
- పరిష్కారం: అన్ని login flowsలో filtered SSO path గౌరవించబడింది.
- పరిష్కారం: ఖాళీ site identity options సేవ్ సమయంలో కాపాడబడ్డాయి.

## వెర్షన్ 2.9.0 — 2026-04-30న విడుదలైంది {#version-290--released-on-2026-04-30}

- కొత్తది: **Tools > Export & Import** కింద single-site export మరియు import జోడించబడ్డాయి.
- పరిష్కారం: Export ZIP files ఇప్పుడు authenticated download endpoint ద్వారా అందించబడతాయి.
- పరిష్కారం: pending export/import queriesలో SQL injection ప్రమాదం మరియు query సమస్యలు సరిచేయబడ్డాయి.
- పరిష్కారం: admin కస్టమర్ emailను manually verify చేసినప్పుడు pending site publish కాకపోవడం పరిష్కరించబడింది.
- పరిష్కారం: membership లేకపోయినప్పుడు orphaned pending_site records శుభ్రం చేయబడ్డాయి.
- పరిష్కారం: Settings nav padding మరియు search anchor navigation సరిచేయబడ్డాయి.
- పరిష్కారం: All Sites viewలో pending sites ఇప్పుడు ముందుగా చూపబడతాయి.
- పరిష్కారం: 403 errorsను నివారించేందుకు Screenshot provider (mShots) User-Agent header జోడించబడింది.
- పరిష్కారం: Import cron schedule circular dependency పరిష్కరించబడింది.
- పరిష్కారం: user settings keysలో Tour IDs underscoresకి normalise చేయబడ్డాయి.
- మెరుగుపరచబడింది: మెరుగైన అనుకూలత కోసం Alchemy/Zippyకు బదులుగా ZipArchive ఇప్పుడు ఉపయోగించబడుతుంది.

## వెర్షన్ 2.8.0 — 2026-04-29 {#version-280--released-on-2026-04-29}

- కొత్తది: Other Options సెట్టింగ్‌ల UIకి Jumper toggle ప్రారంభించే ఎంపిక జోడించబడింది.
- కొత్తది: Checkout ఫారమ్‌ల జాబితా పట్టికకు స్థితి కాలమ్ జోడించబడింది.
- కొత్తది: అనుకూల MU-plugin sunrise పొడిగింపుల కోసం Addon sunrise ఫైల్ లోడర్.
- మెరుగుదల: సెట్టింగ్‌ల పేజీ నుండి లోపాల నివేదిక opt-in సెట్టింగ్ తొలగించబడింది.
- పరిష్కారం: ధన్యవాదాల పేజీ సైట్ కార్డ్ — చిత్రం ఇప్పుడు పరిమితం చేయబడింది, లింకులు సరిగ్గా శైలీకరించబడ్డాయి.
- పరిష్కారం: Screenshot provider thum.io నుండి WordPress.com mShots‌కు మార్చబడింది.
- పరిష్కారం: Enable Registration మరియు Default Role ఇప్పుడు కొత్త ఇన్‌స్టాల్‌లో సరైన డిఫాల్ట్‌లకు సెట్ అవుతాయి.
- పరిష్కారం: డొమైన్‌లో పోర్ట్ ఉన్నప్పుడు `get_site_url()` ఇకపై ఖాళీగా ఇవ్వదు.
- పరిష్కారం: `copy_media` సెట్టింగ్ ఖాళీగా ఉన్నప్పుడు క్లోన్ మీడియా ఫైళ్లు ఇప్పుడు సరిగ్గా కాపీ అవుతాయి.
- పరిష్కారం: network-activate sitemeta రైట్ తర్వాత Object cache సరిగ్గా invalidated అవుతుంది.
- పరిష్కారం: 3-భాగాల డొమైన్‌ల కోసం DNS ధృవీకరణపై అనుకూల డొమైన్ స్వయంగా ప్రాథమికంగా ప్రమోట్ అవుతుంది.
- పరిష్కారం: గడువు ముగిసిన చెల్లింపు శుభ్రం చేసినప్పుడు పెండింగ్ membership రద్దవుతుంది.
- పరిష్కారం: inline login prompt మూసిన తర్వాత పాస్‌వర్డ్ బలం తనిఖీ చేసే సాధనం మళ్లీ బైండ్ అవుతుంది.
- పరిష్కారం: సైట్ ఇప్పటికే సృష్టించబడినప్పుడు ధన్యవాదాల పేజీలో అనంత పేజీ రీలోడ్ ఆపబడింది.
- పరిష్కారం: plugin activation మరియు సెట్టింగ్‌ల సేవ్‌పై WP core registration ఎంపిక సమకాలీకరించబడింది.
- పరిష్కారం: PHP 8.4 అనుకూలత కోసం `calculate_expiration`లో null expiration guard జోడించబడింది.
- పరిష్కారం: కస్టమర్‌కు ఇప్పటికే క్రియాశీల membership ఉన్నప్పుడు duplicate signups నిరోధించబడతాయి.
- పరిష్కారం: Checkoutలో `date_expiration` కోసం null check జోడించబడింది.
- పరిష్కారం: సైట్ provision చేయడం బలపరచబడింది — పరిమితులు, membership ఊహించడం, డొమైన్ ప్రమోషన్.
- పరిష్కారం: తనిఖీ విఫలమైనప్పుడు pre-install check status label NOT Activatedగా సరిచేయబడింది.
- పరిష్కారం: ఇమెయిల్ ధృవీకరణ URLల కోసం Checkout డొమైన్ ఉపయోగించబడింది.
- పరిష్కారం: పాస్‌వర్డ్ ఫీల్డ్ లేనప్పుడు Checkout తర్వాత auto-login.
- పరిష్కారం: ఉచిత membershipల గడువు ఇక ముగియదు — జీవితకాలంగా పరిగణించబడతాయి.
- పరిష్కారం: కస్టమర్ ఇమెయిల్ ధృవీకరించే వరకు Email verification gate సైట్ ప్రచురణను నిలిపి ఉంచుతుంది.
- పరిష్కారం: SES v2 API endpoint base path మరియు identity route సరిచేయబడ్డాయి.
- పరిష్కారం: `wu_inline_login_error` hook pre-submit catch blockలో విడుదల చేయబడింది.
