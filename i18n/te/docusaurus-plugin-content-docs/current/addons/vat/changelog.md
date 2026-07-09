---
title: VAT Changelog
sidebar_position: 99
_i18n_hash: 6a39ef4779b6ed52a08804c75ca25fc9
---
# VAT Changelog {#vat-changelog}

Version 1.0.7 - Released on 2026-02-03

* Fix: German (DE) VAT numbers VIES SOAP service MS_MAX_CONCURRENT_REQ లోపం కారణంగా ధ్రువీకరణ విఫలమవుతున్నాయి. మరింత నమ్మదగిన ధ్రువీకరణ కోసం పాత SOAP API నుండి అధికారిక EU VIES REST API కి మార్చబడింది.
* Fix: VIES service తాత్కాలికంగా అందుబాటులో లేనప్పుడు కూడా VAT numbers ఇప్పుడు అంగీకరించబడతాయి, తప్పుగా తిరస్కరించబడవు. తదుపరి సమీక్ష కోసం ఒక log entry సృష్టించబడుతుంది.
* Fix: VAT/Tax ID ఫీల్డ్ ఇప్పుడు అన్ని దేశాల కోసం కనిపిస్తుంది, కేవలం EU సభ్య దేశాల కోసం మాత్రమే కాదు. Non-EU tax IDs (ఉదా. Swiss CHE numbers) VIES ధ్రువీకరణ లేకుండా ఇన్వాయిస్ ప్రదర్శన కోసం నిల్వ చేయబడతాయి.
* Fix: Greece (GR), Monaco (MC), మరియు Isle of Man (IM) కోసం VAT prefix lookup, తప్పుగా ఉన్న array lookup logic కారణంగా విచ్ఛిన్నమైంది.
* Improvement: Site Exporter addon తో పాటు ఉపయోగించినప్పుడు fatal errors కలిగించే అనవసరమైన wp-cli-bundle dev dependency తొలగించబడింది.
* Improvement: సమగ్రమైన unit test suite (53 tests) జోడించబడింది.

Version 1.0.6 - Released on 2026-01-25

* Fix: దేశీయ B2B లావాదేవీలకు ఇప్పుడు VAT సరిగ్గా వర్తిస్తుంది. EU VAT నియమాల ప్రకారం, కస్టమర్ దేశం కంపెనీ దేశంతో సరిపోలినప్పుడు, రివర్స్ ఛార్జ్ అనేది సరిహద్దుల మధ్య B2B లావాదేవీలకు మాత్రమే వర్తిస్తుంది, దేశీయ లావాదేవీలకు కాదు.

Version 1.0.5 - Released on 2026-01-22

* Fix: Addon లోడ్ కాకపోవడం లేదా సరిగ్గా పని చేయకపోవడం.
* Change: మరింత నమ్మదగిన మరియు చురుకుగా నిర్వహించబడే డేటా కోసం VAT rate data source ను euvatrates.com నుండి ibericode/vat-rates repository కు మార్చబడింది.
* Fix: super_reduced_rates option value లో ఉన్న టైపో (typo) సరిచేయబడింది.
* Improvement: లోపాలను నివారించడానికి country code handling కోసం null checks జోడించబడ్డాయి.
* Change: Traduttore ద్వారా ఆటోమేటిక్ అప్‌డేట్‌ల కోసం బండిల్ చేయబడిన translation files తొలగించబడ్డాయి.

Version: 1.0.3 - Released on 2025-09-28

* prefix ను ultimate-multisite గా మార్చబడింది; text domain నవీకరించబడింది; వెర్షన్ పెంచబడింది.

Version 1.0.0-beta.4 - 2021-09-24

* Added: mu-plugins ఆధారిత సెటప్‌ల కోసం filter wp_ultimo_skip_network_active_check;

Version 1.0.0 - 05/08/2021 - Initial Release
