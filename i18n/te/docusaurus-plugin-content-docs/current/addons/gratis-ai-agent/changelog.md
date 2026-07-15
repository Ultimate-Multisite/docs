---
title: మార్పుల జాబితా
sidebar_position: 5
_i18n_hash: 59cb5f1cda2a3e8a789dcd3d67db33db
---
# Changelog

## 1.9.0 — Released on 2026-04-28 {#190--released-on-2026-04-28}

### New {#new}

- **`create_contact_form` ability** — ఇది యాక్టివ్ ఫారమ్ plugin (Contact Form 7, WPForms, Fluent Forms, లేదా Gravity Forms) ఉపయోగించి ఒక contact form ని సృష్టిస్తుంది మరియు ఏ పోస్ట్ లేదా పేజీలోనైనా ఎంబెడ్ చేయడానికి సిద్ధంగా ఉండే shortcode ని అందిస్తుంది.
- **`set_featured_image` ability** — ఇది ఇప్పటికే ఉన్న Media Library attachment ID నుండి లేదా రిమోట్ URL నుండి ఒక పోస్ట్ లేదా పేజీకి ఫీచర్డ్ ఇమేజ్‌ని కేటాయిస్తుంది; URL ఇవ్వబడితే, ఆ ఇమేజ్‌ని ఆటోమేటిక్‌గా ఇంపోర్ట్ చేస్తుంది.
- **`batch_create_posts` ability** — ఇది ఒకే ability కాల్‌లో బహుళ పోస్ట్‌లను సృష్టిస్తుంది. ఇది `create_post` మాదిరిగానే పారామీటర్స్‌ను సపోర్ట్ చేస్తుంది, ప్రతి పోస్ట్ యొక్క విజయం/విఫలం వివరాలను తెలియజేస్తుంది, మరియు ఐచ్ఛికంగా `stop_on_error` మోడ్‌ను కలిగి ఉంటుంది.
- **`page_template` parameter** — ఇది `create_post` మరియు `update_post` కు జోడించబడింది. ఇది ఒక PHP పేజ్ టెంప్లేట్ ఫైల్‌ని (ఉదా. `page-full-width.php`) సృష్టించేటప్పుడు లేదా అప్‌డేట్ చేసేటప్పుడు కేటాయిస్తుంది. `update_post` కు ఖాళీ స్ట్రింగ్‌ను పంపడం ద్వారా థీమ్ డిఫాల్ట్‌కి తిరిగి వెళ్లవచ్చు.
- **Client-side screenshot abilities** — `capture_screenshot`, `compare_screenshots`, మరియు `review_page_design`. ఇవి సర్వర్-సైడ్ headless browser ద్వారా లైవ్ పేజీల పూర్తి లేదా వ్యూపోర్ట్ స్క్రీన్‌షాట్‌లను తీసుకుంటాయి, రెండు స్క్రీన్‌షాట్‌లను పోల్చి చూస్తాయి, మరియు లేఅవుట్, టైపోగ్రఫీ, రంగు మరియు యాక్సెసిబిలిటీని కవర్ చేస్తూ AI ద్వారా రూపొందించబడిన డిజైన్ రివ్యూని అందిస్తాయి.
- **Five built-in agents** — Content Writer, Site Builder, Design Studio, Plugin Manager, మరియు Support Assistant. ప్రతి ఏజెంట్‌కు ప్రత్యేకమైన టూల్స్ సెట్, అనుకూలీకరించిన సిస్టమ్ ప్రాంప్ట్ మరియు స్టార్టర్ సూచనలు ఉంటాయి. కొత్త **Agent Picker** ద్వారా చాట్ హెడర్‌లో వీటిని మార్చవచ్చు. [Built-in Agents](../../user-guide/configuration/built-in-agents) చూడండి.
- **Feature flags** — యాక్సెస్-కంట్రోల్ టోగుల్స్‌తో కొత్త **Settings → Feature Flags** ట్యాబ్, మరియు బ్రాండింగ్ ఆప్షన్‌లతో (footer attribution ని దాచడం, కస్టమ్ ఏజెంట్ పేరు, ఏజెంట్ పికర్‌ను దాచడం, చాట్ అవతార్‌గా సైట్ ఐకాన్‌ను ఉపయోగించడం) అందుబాటులో ఉంది. [Gratis AI Agent Settings](../../user-guide/administration/gratis-ai-agent-settings) చూడండి.
- **Restore last session** — పేజీ లోడ్ అయినప్పుడు మరియు విడ్జెట్ తెరిచినప్పుడు చాట్ ప్యానెల్ ఇప్పుడు అత్యంత ఇటీవలి సంభాషణను ఆటోమేటిక్‌గా రీలోడ్ చేస్తుంది, కాబట్టి పేజీ నావిగేషన్ల మధ్య సందర్భం (context) ఎప్పటికీ కోల్పోదు.
- **Plugin action links** — WordPress **Plugins → Installed Plugins** స్క్రీన్‌పై, plugin వివరణ కింద, Settings మరియు Abilities Registry కు త్వరిత లింక్‌లు ఇప్పుడు కనిపిస్తాయి.

### Improved {#improved}

- **Image source retry** — డౌన్‌లోడ్ విఫలమైనప్పుడు, ఏజెంట్ ఇప్పుడు కాన్ఫిగర్ చేయబడిన అన్ని ఉచిత ఇమేజ్ సోర్స్‌లను మళ్లీ ప్రయత్నించి, ఆ తర్వాత AI-generated ఇమేజ్‌ని ఉపయోగిస్తుంది.
- **Model info panel** — ఇది చాట్ హెడర్‌లో ఎల్లప్పుడూ కనిపిస్తుంది; మొదటి సందేశం తర్వాత దాచబడదు.
- **Auto-scroll behaviour** — వినియోగదారు చదవడానికి పైకి స్క్రోల్ చేసినప్పుడు ఆటో-స్క్రోల్ పాజ్ అవుతుంది; ఒక ఫ్లోటింగ్ **Scroll to bottom** బటన్ కనిపిస్తుంది మరియు వినియోగదారు తాజా సందేశానికి చేరుకున్నప్పుడు ఆటోమేటిక్‌గా మాయమవుతుంది.
- **Agent Picker UI** — ఇది ఫారమ్-టేబుల్ ఓవర్‌లేగా తిరిగి రూపొందించబడింది, ప్రతి ఏజెంట్‌కు ఐకాన్‌లతో, తద్వారా ఏజెంట్లను త్వరగా గుర్తించడం మరియు మార్చడం సులభం అవుతుంది.
- **Lazy-loaded JS chunks** — చాట్ విడ్జెట్ యొక్క ప్రారంభ JavaScript bundle ఇప్పుడు lazy-loaded chunks లో విభజించబడింది, తద్వారా ప్రారంభ bundle పరిమాణం 75–90% తగ్గుతుంది.
- **Chat widget redesign** — యూనిఫైడ్ AI ఐకాన్ అనేది మునుపటి కస్టమ్ అవతార్ స్థానంలో వచ్చింది; ఇది built-in agent system తో స్థిరంగా ఉంటుంది.
- **URL linkification** — సిస్టమ్ సందేశాలు మరియు ఎర్రర్ సందేశ బుడగలలో కనిపించే URL లు ఇప్పుడు క్లిక్ చేయదగిన లింక్‌లుగా రెండర్ చేయబడతాయి.

### Fixed {#fixed}

- **Ability discoverability** — అన్ని abilities విశ్వసనీయంగా ఏజెంట్ యొక్క టూల్ లిస్ట్‌లో కనిపించేలా వివరణలు, సిస్టమ్ ప్రాంప్ట్ రిఫరెన్స్‌లు మరియు నేమ్‌స్పేస్ అలైన్‌మెంట్‌ను సరిదిద్దబడింది.
- **Providers cache** — multisite నెట్‌వర్క్‌లలో పాత-provider సమస్యలను నివారించడానికి, ప్రొవైడర్‌లను ఇప్పుడు వెర్షన్ కౌంటర్‌ ద్వారా సైట్-వైడ్‌గా కాష్ చేస్తారు.
- **`ability_invalid_output`** — 12 ability హ్యాండ్లర్‌లలో పరిష్కరించబడింది; అన్ని సరిగ్గా స్ట్రక్చర్ చేయబడిన JSON ప్రతిస్పందనలను అందిస్తాయి.
- **`pending_client_tool_calls` pipeline** — క్లయింట్-సైడ్ టూల్ కాల్స్ సరిగ్గా పూర్తయ్యేలా మరియు ఫలితాలను మోడల్‌కు తిరిగి పంపేలా ఎండ్-టు-ఎండ్ వైర్ చేయబడింది.
- **History drawer** — తిరిగి మార్చలేని మార్పులు (non-revertable changes) రివర్ట్ జాబితా నుండి మినహాయించబడ్డాయి; **View full history** లింక్ ఇప్పుడు సరిగ్గా పనిచేస్తుంది.
- **Changes/revert system** — ఐదు వేర్వేరు బగ్‌లు పరిష్కరించబడి, కొత్త అడ్మిన్ ఇంటర్‌ఫేస్‌లో ఏకీకృతం చేయబడ్డాయి.
- **Save Settings toast** — **Save Settings** పై క్లిక్ చేసిన తర్వాత స్నాక్‌బార్ నోటిఫికేషన్ ఇప్పుడు విశ్వసనీయంగా కనిపిస్తుంది.
- **Trash context menu** — **Delete Permanently** ఆప్షన్ జోడించబడింది, తద్వారా ఐటమ్స్‌ను ట్రాష్ వ్యూలో ఉంచకుండా హార్డ్-డిలీట్ చేయవచ్చు.
- **Edit & resend** — ఎడిట్ ఐకాన్‌పై క్లిక్ చేయడం ఇప్పుడు థ్రెడ్‌లోని అన్ని సందేశాలకు కాకుండా, క్లిక్ చేయబడిన సందేశానికి మాత్రమే ఎడిట్ మోడ్‌లోకి ప్రవేశిస్తుంది.
- **Chat layout height** — ప్లగిన్-ఇంజెక్షన్ కంటెంట్ (అడ్మిన్ నోటిస్‌లు, బ్యానర్‌లు) పేజీ పైన కనిపించినప్పుడు చాట్ ప్యానెల్ దాని ఎత్తును సర్దుబాటు చేస్తుంది, తద్వారా ఇన్‌పుట్ ఏరియా స్క్రీన్ నుండి పడిపోకుండా ఉంటుంది.

---

## 1.4.0 — Released on 2026-04-09 {#140--released-on-2026-04-09}

### New {#new-1}

- **WP-CLI benchmark command** (`wp gratis-ai-agent benchmark`) — CI పైప్‌లైన్‌లు మరియు మోడల్ ఎవాల్యుయేషన్ వర్క్‌ఫ్లోల కోసం కమాండ్ లైన్ నుండి Agent Capabilities v1 benchmark suite ను రన్ చేస్తుంది. ప్రతి ప్రశ్నాపత్రం రన్, ప్రొవైడర్/మోడల్ ఓవర్‌రైడ్‌లు మరియు JSON/CSV అవుట్‌పుట్‌ను సపోర్ట్ చేస్తుంది.
- **Agent Capabilities v1 benchmark suite** — ఇది పూర్తి ability surface ను పరీక్షించే సంక్లిష్టమైన, బహుళ-దశల ప్రాంప్ట్‌ల నిర్మాణాత్మక సెట్, ఇందులో స్కోరింగ్ మరియు టోకెన్/వ్యవధి రిపోర్టింగ్ ఉంటాయి.
- **Custom Post Type abilities** — `register_post_type`, `list_post_types`, `delete_post_type`. రిజిస్ట్రేషన్‌లు ఆప్షన్స్ టేబుల్ ద్వారా రీస్టార్ట్‌ల మధ్య నిలిచి ఉంటాయి.
- **Custom Taxonomy abilities** — `register_taxonomy`, `list_taxonomies`, `delete_taxonomy`. ఇది ఐచ్ఛిక రీరైట్ స్లగ్స్‌తో హైరార్కికల్ మరియు ఫ్లాట్ టాక్సోనమీస్‌ను సపోర్ట్ చేస్తుంది.
- **Design System abilities** — `inject_custom_css`, `add_block_pattern`, `list_block_patterns`, `set_site_logo`, `apply_theme_json_preset`. ఇందులో ఐదు క్యూరేటెడ్ ప్రీసెట్‌లు ఉన్నాయి: `minimal-dark`, `warm-editorial`, `corporate-blue`, `vibrant-startup`, `classic-blog`.
- **Global Styles abilities** — `get_global_styles`, `set_global_styles`, `reset_global_styles`. ఇది WordPress Global Styles API ద్వారా theme.json విలువలను చదువుతుంది మరియు రాస్తుంది.
- **Navigation Menu management ability** — `create_menu`, `update_menu`, `add_menu_item`, `remove_menu_item`, `list_menus`. ఇది Nested menus మరియు theme location assignment ను సపోర్ట్ చేస్తుంది.
- **Options Management ability** — `get_option`, `set_option`, `delete_option`, `list_options`. ఇందులో కీలకమైన WordPress ఆప్షన్‌లను మార్పు నుండి రక్షించే అంతర్నిర్మిత సేఫ్టీ బ్లాక్‌లిస్ట్ ఉంటుంది.
- **Installable Abilities Registry** — `list_available_abilities`, `install_ability`, `recommend_plugin`. WordPress plugins గా పంపిణీ చేయబడిన ability ప్యాక్‌లను కనుగొని, యాక్టివేట్ చేయవచ్చు.
- **Site Builder Orchestration v2** — `create_site_plan`, `execute_site_plan`, `get_plan_progress`, `handle_plan_error`. ఇందులో ప్లగిన్ డిస్కవరీ, స్టెప్ అవుట్‌పుట్ రిఫరెన్సులు, ప్రగతి ట్రాకింగ్ మరియు స్వయంప్రతిపత్త ఎర్రర్ రికవరీతో కూడిన బహుళ-దశల సైట్ బిల్డ్ ప్లాన్‌లు ఉంటాయి.
- **Restaurant website benchmark question** (`q-restaurant-website`) — CPT రిజిస్ట్రేషన్, డిజైన్ సిస్టమ్, నావిగేషన్ మరియు ప్లగిన్ డిస్కవరీని కవర్ చేసే ఎండ్-టు-ఎండ్ టెస్ట్.
- **AI provider connector plugins** స్థానిక అభివృద్ధి సెటప్‌ను వేగవంతం చేయడానికి WordPress Playground blueprints లో జోడించబడ్డాయి.

### Improved {#improved-1}

- README లో AI provider connector డాక్యుమెంటేషన్ మరియు సెటప్ సూచనలతో అప్‌డేట్ చేయబడింది.

### Fixed {#fixed-1}

- `main` బ్రాంచ్‌లో 25 PHPUnit టెస్ట్ ఫెయిల్యూర్స్ పరిష్కరించబడ్డాయి.
- `blueprint.json` లో GitHub releases URL ఫార్మాట్ సరిదిద్దబడింది.
- పాత ID లతో ఘర్షణ పడకుండా టాస్క్ ID రీనెంబరింగ్ చేయబడింది.

---

## 1.3.x {#13x}

_మునుపటి release notes ప్లగిన్ రిపోజిటరీలో నిర్వహించబడ్డాయి._
