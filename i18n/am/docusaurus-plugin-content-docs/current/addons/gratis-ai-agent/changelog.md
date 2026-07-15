---
title: የለውጥ ታሪክ
sidebar_position: 5
_i18n_hash: 59cb5f1cda2a3e8a789dcd3d67db33db
---
# የለውጥ መዝገብ

## 1.9.0 — የተለቀቀበት ቀን 2026-04-28 {#190--released-on-2026-04-28}

### አዲስ {#new}

- **`create_contact_form` አቅም** — በንቁ የፎርም ፕልጊን (Contact Form 7, WPForms, Fluent Forms, ወይም Gravity Forms) በመጠቀም የእውቂያ ፎርም ይፈጥራል፣ እና በማንኛውም ፖስት ወይም ገጽ ውስጥ ለማስገባት ዝግጁ የሆነ shortcode ይመልሳል።
- **`set_featured_image` አቅም** — ከሚገኝ የမီዲያ ቤተመጽሐፍት attachment ID ወይም የርቀት URL በመጠቀም ለፖስት ወይም ለገጽ ዋና ምስል (featured image) ይመድባል። URL ሲሰጥ ምስሉን በራስ-ሰር ያስገባል።
- **`batch_create_posts` አቅም** — በርካታ ፖስቶችን በአንድ አቅም ጥሪ ውስጥ ይፈጥራል። ከ`create_post` ጋር ተመሳሳይ መለኪያዎች ይደግፋል፣ ለእያንዳንዱ ፖስት ስኬት/ውድቀትን ሪፖርት ያደርጋል፣ እና አማራጭ `stop_on_error` ሁነታ አለው።
- **`page_template` መለኪያ** — ወደ `create_post` እና `update_post` ተጨምሯል። በየሚፈጥሩበት ወይም በሚያዘምኑበት ጊዜ የPHP የገጽ አብነት ፋይል (ለምሳሌ. `page-full-width.php`) ይመድባል። ወደ `update_post` ባዶ ስትራንግ (empty string) በመስጠት ወደ የጉዳዩ (theme) መደበኛ ቅጽ ወደነበረበት እንዲመለስ ያደርጋል።
- **በደንበኛ በኩል የሚሰበሰቡ ስክሪንሾት አቅሞች** — `capture_screenshot`, `compare_screenshots`, እና `review_page_design`። በሰርቨር-ሰኩል headless browser አማካኝነት የነባር ገጾችን ሙሉ ወይም የviewport ስክሪንሾት ይይዛል፣ ሁለት ስክሪንሾቶችን ያነፃፅራል (diff)، እና አቀማመጥ፣ የፊደል አይነት (typography)፣ ቀለም እና ተደራሽነትን የሚሸፍን በAI የተፈጠረ የንድፍ ግምገማ ይሰጣል።
- **አምስት የተገነቡ ወኪሎች (built-in agents)** — የይዘት ጸሐፊ (Content Writer)፣ የጣቢያ ገንቢ (Site Builder)፣ የንድፍ ስቱዲዮ (Design Studio)፣ የፕልጊን አስተዳዳሪ (Plugin Manager)፣ እና የድጋፍ ረዳት (Support Assistant)። እያንዳንዱ ወኪል የተሰጠ ስብስብ የመሳሪያዎች፣ የተበጀ የሲስተም ፕሮምፕት (system prompt) እና የመነሻ ሀሳቦች አሉት። በአዲሱ **Agent Picker** በቻት ሄደር አማካኝነት መቀያየር ይቻላል። [Built-in Agents](../../user-guide/configuration/built-in-agents) ይመልከቱ።
- **የఫీቸር ባንዲራዎች (Feature flags)** — አዲስ **Settings → Feature Flags** ትር በቅንብሮች ውስጥ ተጨምሯል፤ ይህም የመዳረሻ ቁጥጥር መቀያየሪያዎችን (ለአስተዳዳሪዎች ብቻ መገደብ፣ ለኔትወርክ አስተዳዳሪዎች መገደብ፣ ተመዝጋቢ መዳረሻ፣ ለnon-members ማጥፋት) እና የብራንዲንግ አማራጮችን (የታችኛው ክፍል የብራንድ ስም መደበቅ፣ የተበጀ ወኪል ስም፣ የወኪል መምረጥ መደበቅ፣ የጣቢያ አዶን እንደ ቻት አቫታር መጠቀም) ይዟል። [Gratis AI Agent Settings](../../user-guide/administration/gratis-ai-agent-settings) ይመልከቱ።
- **የመጨረሻ ክፍለ ጊዜን መልሶ ማግኘት (Restore last session)** — የቻት ፓነሉ አሁን በገጹ መጫን ጊዜ እና በዊጄት መከፈት ጊዜ በጣም የቅርብ ጊዜውን ውይይት በራስ-ሰር ይከፍታል፣ ስለዚህ በገጽ ሽግግር ጊዜ አውዱ (context) አይጠፋም።
- **የፕልጊን የድርጊት ሊንኮች (Plugin action links)** — ወደ ቅንብሮች (Settings) እና ወደ Abilities Registry የሚወስዱ ፈጣን ሊንኮች አሁን በWordPress **Plugins → Installed Plugins** ስክሪን ላይ፣ ከፕልጊኑ መግለጫ በታች ይታያሉ።

### የተሻሻሉ {#improved}

- **የምስል ምንጭ እንደገና መሞከር (Image source retry)** — ወኪሉ አሁን የነጻ ምስል ምንጮችን ሁሉ ይሞክራል፣ ከዚያም በስረታው (download failure) ላይ AI-የተፈጠረ ምስል ላይ መመለስ ይችላል።
- **የሞዴል መረጃ ፓነል (Model info panel)** — በቻት ሄደር ውስጥ ሁልጊዜ ይታያል፤ ከየመጀመሪያው መልእክት በኋላ አይደበቅም።
- **የራስ-ሰር ማሸጋገር ባህሪ (Auto-scroll behaviour)** — ተጠቃሚው ለማንበብ ወደ ላይ ሲሸጋገር የራስ-ሰር ማሸጋገር ይቆማል፤ ተንሳፋፊ የሆነ **Scroll to bottom** ቁልፍ ይታያል እና ተጠቃሚው ወደ የቅርብ ጊዜው መልእክት ሲደርስ በራስ-ሰር ይጠፋል።
- **የAgent Picker UI** — እንደ ፎርም-ሠንጠረዥ ሽፋን (form-table overlay) እንደገና ተነድፏል፤ ለእያንዳንዱ ወኪል አዶ በመስጠት ወኪሎችን በአንድ እይታ መለየት እና መቀያየር ቀላል አድርጓል።
- **በዘግይቶ የሚጫኑ የJS ክፍሎች (Lazy-loaded JS chunks)** — የቻት ዊጄት የመጀመሪያ የJavaScript ስብስብ (bundle) አሁን ወደ ዘግይቶ የሚጫኑ ክፍሎች ተከፍሏል፣ ይህም የመጀመሪያውን የስብስብ መጠን በ75–90% ይቀንሳል።
- **የቻት ዊጄት እንደገና ዲዛይን (Chat widget redesign)** — አንድ ወጥ AI አዶ ቀደም ያለውን የተበጀ አቫታር ይተካዋል፤ ይህም ከየተገነባው የወኪል ስርዓት ጋር የተጣጣመ ነው።
- **የURL ሊንክ ማድረግ (URL linkification)** — በስርዓት መልእክቶች እና በስህተት መልእክት አረፋዎች ውስጥ የሚታዩ URLዎች አሁን እንደ ተጫን ሊንኮች (clickable links) ይታያሉ።

### የተስተካከሉ {#fixed}

- **የአቅም መገኘት (Ability discoverability)** — ሁሉም አቅሞች በወኪሉ የመሳሪያ ዝርዝር ውስጥ በታማኝነት እንዲታዩ ለማድረግ መግለጫዎች፣ የሲስተም ፕሮምፕት ማጣቀሻዎች እና የnamespace አሰላለፍ ተስተካክለዋል።
- **የአቅራቢዎች ካሽ (Providers cache)** — አቅራቢዎች አሁን በቨርዥን 카운ተር አማካኝነት በጠቅላላው የጣቢያ ደረጃ በካሽ ተቀምጠዋል፣ ይህም በmultisite ኔትወርኮች ላይ የቆየ አቅራቢ (stale-provider) ችግሮችን ይከላከላል።
- **`ability_invalid_output`** — በ12 የቅምተ-አቅም (ability handlers) ውስጥ ተፈቷል፤ ሁሉም በትክክል የተዋቀረ JSON ምላሽ ይመልሳሉ።
- **`pending_client_tool_calls` পাইፕላይን** — በየመጀመሪያው እና በመጨረሻው ደረጃ ተገናኝቷል (wired end-to-end) ስለዚህ የደንበኛ በኩል የሚደረጉ የመሳሪያ ጥሪዎች በትክክል ተጠናቅቀው ወደ ሞዴሉ ውጤቶችን ይመልሳሉ።
- **የታሪክ መሳቢያ (History drawer)** — ሊመለሱ የማይችሉ ለውጦች ከማስመለስ ዝርዝር ተገለልተዋል፤ **View full history** ሊንክ አሁን በትክክል ይሰራል።
- **የለውጥ/ማስመለስ ስርዓት (Changes/revert system)** — አምስት የተለያዩ ስህተቶች ተስተካክለው በአዲሱ የአስተዳዳሪ በይነገጽ ስር ተሰባስበዋል።
- **የቅንብሮችን ማስቀመጥ (Save Settings) toast** — **Save Settings** ከተጫኑ በኋላ የsnackbar ማሳወቂያ አሁን በታማኝነት ይታያል።
- **የቆሻሻ አጽም ምናሌ (Trash context menu)** — ዕቃዎች በቆሻሻ እይታ ውስጥ ሳይቀሩ በከፍተኛ ሁኔታ እንዲሰረዙ (hard-deleted) የሚያስችል **Delete Permanently** አማራጭ ተጨምሯል።
- **ማርትዕ እና እንደገና መላክ (Edit & resend)** — የማርትዕ አዶን መጫን አሁን ለተጫነው መልእክት ብቻ የማርትዕ ሁነታን ያስገባል፣ ለውይይቱ ውስጥ ባሉ ሁሉም መልእክቶች አይደለም።
- **የቻት አቀማመጥ ቁመት (Chat layout height)** — የፕልጊን በሚሰርጽ ይዘት (የአስተዳዳሪ ማሳሰቢያዎች፣ ባነሮች) ከገጹ በላይ ሲታይ የቻት ፓነሉ ቁመት ይላመዳል፣ ይህም የግብዓት ቦታ ከስክሪኑ ውጪ እንዳይገፋ ይከላከላል።

---

## 1.4.0 — የተለቀቀበት ቀን 2026-04-09 {#140--released-on-2026-04-09}

### አዲስ {#new-1}

- **WP-CLI የbenchmark ትዕዛዝ** (`wp gratis-ai-agent benchmark`) — ለCI পাইፕላይን እና ለሞዴል ግምገማ የስራ ፍሰቶች (workflows) ከኮማንድ መስመር የAgent Capabilities v1 benchmark suite ያካሂዳል። ለእያንዳንዱ ጥያቄ መሮጥ፣ የአቅራቢ/ሞዴል መተካት (overrides) እና JSON/CSV ውጤት ይደግፋል።
- **የAgent Capabilities v1 benchmark suite** — ሙሉ የአቅም ወለልን (full ability surface) የሚያሰልጥን፣ ውጤት እና የቶከን/የቆይታ ጊዜ ሪፖርት የሚያደርግ የተዋቀረ ስብስብ የብዙ-ደረጃ ፕሮምፕቶች።
- **የተበጀ የፖስት አይነት አቅሞች (Custom Post Type abilities)** — `register_post_type`, `list_post_types`, `delete_post_type`። ምዝገባዎች በoptions table አማካኝነት ከእንደገና መጀመር በኋላ ይቆያሉ።
- **የተበጀ ታክሶኖሚ አቅሞች (Custom Taxonomy abilities)** — `register_taxonomy`, `list_taxonomies`, `delete_taxonomy`። አማራጭ የrewrite slugs ያላቸውን ተዋረኛ (hierarchical) እና ጠፍጣፋ (flat) ታክሶኖሚዎችን ይደግፋል።
- **የንድፍ ስርዓት አቅሞች (Design System abilities)** — `inject_custom_css`, `add_block_pattern`, `list_block_patterns`, `set_site_logo`, `apply_theme_json_preset`። አምስት የተመረጡ ቅንብሮችን ያካትታል፡ `minimal-dark`, `warm-editorial`, `corporate-blue`, `vibrant-startup`, `classic-blog`።
- **የግሎባል ስታይሎች አቅሞች (Global Styles abilities)** — `get_global_styles`, `set_global_styles`, `reset_global_styles`። የWordPress Global Styles API በኩል የtheme.json እሴቶችን ያነባል እና ይጽፋል።
- **የማስመላለሻ ምናሌ አስተዳደር አቅም (Navigation Menu management ability)** — `create_menu`, `update_menu`, `add_menu_item`, `remove_menu_item`, `list_menus`። የተደራረቡ ምናሌዎችን (nested menus) እና የጉዳይ ቦታ መድበልን ይደግፋል።
- **የቅንብሮች አስተዳደር አቅም (Options Management ability)** — `get_option`, `set_option`, `delete_option`, `list_options`። ወሳኝ የሆኑ የWordPress ቅንብሮችን ለውጥ የሚያደርግ የተገነባ የደህንነት ጥልቃ ገብነት ዝርዝር (safety blocklist) አለው።
- **የተጫን አቅሞች መዝገብ (Installable Abilities Registry)** — `list_available_abilities`, `install_ability`, `recommend_plugin`። እንደ WordPress ፕልጊኖች የተከፋፈሉ የአቅም ፓኬጆችን ይቃኛሉ እና ያነቃቃሉ።
- **የጣቢያ ገንቢ አደራጅ v2 (Site Builder Orchestration v2)** — `create_site_plan`, `execute_site_plan`, `get_plan_progress`, `handle_plan_error`። የፕልጊን ግኝት፣ የደረጃ ውጤት ማጣቀሻዎች፣ የሂደት መከታተል እና በራስ-ሰር ስህተት ማገገም ባሉ ብዙ-ደረጃ የጣቢያ ግንባታ ዕቅዶች።
- **የሬስቶራንት ድረ-ገጽ የbenchmark ጥያቄ** (`q-restaurant-website`) — CPT ምዝገባን፣ የንድፍ ስርዓትን፣ ማሰላለሻን እና የፕልጊን ግኝትን የሚሸፍን የend-to-end ፈተና።
- **የAI አቅራቢ ማገናኛ ፕልጊኖች (AI provider connector plugins)** ለፈጣን የአካባቢ ልማት ስብስብ (local development setup) ወደ WordPress Playground blueprints ተጨምረዋል።

### የተሻሻሉ {#improved-1}

- README በAI አቅራቢ ማገናኛ ሰነድ እና የማስጫ ስልጠናዎች ተዘምሯል።

### የተስተካከሉ {#fixed-1}

- በ`main` ቅርንጫፍ ላይ 25 የPHPUnit የፈተና ውድቀቶች ተፈውሰዋል።
- በ`blueprint.json` ውስጥ ያለው የGitHub releases URL ቅርጸት ተስተካክሏል።
- የTask ID ስም መቀየር ሲደረግ አሮጌዎቹ IDዎች እንዳይጋጩ ተስተካክሏል።

---

## 1.3.x {#13x}

_የቀድሞው የለውጥ መዝገብ በፕልጊኑ መዝገብ ውስጥ ተጠብቋል።_
