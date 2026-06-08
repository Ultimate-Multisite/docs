---
title: የለውጥ ታሪክ
sidebar_position: 5
_i18n_hash: d18a5d0a6c766913ed5d348b54dd6acc
---
# የለውጥ መዝገብ

## 1.16.0 — የተለቀቀበት ቀን 2026-05-20

### አዲስ

- **የሎጎ SVG የመፍጠር አቅም** — Theme Builder አሁን የnamespace-safe sanitisation ባለው የባለቤትነት ሎጎ SVGዎችን መፍጠር እና ማስገባት ይችላል።
- **በdiscovery interview ውስጥ ፎቶ መጫን** — Theme Builder discovery interview አሁን ይበልጥ የበለጸገ የንድፍ አውድ ለመስጠት የፎቶ መጫን ደረጃን አካቷል።
- **የፓሌት ንፅፅርን የማረጋገጥ አቅም** — ወደ theme ከመተግበሩ በፊት የቀለም ጥንዶች WCAG መሟላትን ለማረጋገጥ ይፈትሹ።
- **የሆስፒታሊቲ ምናሌዎች** — Theme Builder አሁን ለሆስፒታሊቲ ንግዶች የተዋቀሩ የምግብ እና የመጠጥ ምናሌ ገጾችን መፍጠር ይችላል።
- **በዴስክቶፕ እና በሞባይል ቅድመ እይታ ማሳየት** — የንድፍ አቅጣጫን በሚመርጡበት ጊዜ ዲዛይኑን በዴስክቶፕ እና በሞባይል መሳሪያዎች ላይ ቅድመ እይታዎን ይመልከቱ።
- **የnavigation label መለኪያ** — Create Menu አቅም አሁን ከየገጹ ርዕስ (page title) የተለየ `navigation_label` ይደግፋል።
- **የ Tier 1 መሣሪያ መገኘት** — sd-ai-agent/site-scrape አሁን በTheme Builder ውስጥ በነባሪነት የሚገኝ Tier 1 መሣሪያ ነው።

### ተስተካክሏል

- **የAI Client ካሽ** — አሁን በtransients የሚደገፍ በመሆኑ፣ ረጅም ጊዜ የሚቆዩ የagent ስራዎች ላይ መረጃ እንዳይጠፋ ይከላከላል።
- **የplugin ረድፍ የድርጊት ሊንኮች** — ግልጽነት እንዲጨምር ተስተካክለው እና ስያሜያቸው ተቀይረዋል።

## 1.10.0 — የተለቀቀበት ቀን 2026-05-05

### አዲስ

- **የTavily ኢንተርኔት ፍለጋ** — ከBrave Search ጎን ለጎን ይበልጥ የበለጸጉ የኢንተርኔት ፍለጋ ውጤቶችን ለማግኘት Tavilyን እንደ የፍለጋ አቅራቢ ይጨምራል።
- **በጉዳይ (Theme) ላይ የተመሰረቱ መሠረታዊ ችሎታዎች** — Block Themes, Classic Themes, Kadence Blocks, እና Kadence Theme skill guides አሁን ከplugin ጋር ይመጣሉ።
- **የsite builder የእውቂያ ቅጽ አቅም** — የእውቂያ ቅጽን በቀጥታ ከቻት በይነገጽ (chat interface) በማንኛውም ገጽ ላይ ይጨምሩ።

### የተሻሻለ

- **የWooCommerce ማዋሃድ እንደገና መዋቀር** — አሁን የተሻለ አስተማማኝነት እና ተኳሃኝነት ለማግኘት ተወላጅ (native) WooCommerce APIsን ይጠቀማል።
- **የአቅራቢዎች ዝርዝር በራስ-ሰር መታደስ** — ማንኛውም plugin ሲበ성화 ወይም ሲሰረዝ።

### ተስተካክሏል

- **navigate-to አቅም** — በአንዳንድ የአስተዳደር ገጾች ላይ ያለውን የጽንፈኛ (infinite) ዳግም መጫን ዑደት (reload loop) ተስተካክሏል።
- **list-posts አቅም** — አሁን የcategory እና የtag ስሞችን ወደ slugs በትክክል ይፈታል (resolves)።
- **WP-CLI ትዕዛዞች** — ቀደም ባለው ማዋቀር ምክንያት የጠፉ namespace aliases ተመልሰዋል።
- **የዝግጅት አውቶሜሽን** — አውቶሜሽን ሰንጠረዦች ገና ባልተፈጠሩባቸው ድረ-ገጾች ላይ ያለውን ሁኔታ በሰላም ይይዛል።
- **memory-save አቅም** — አሁን በsystem instruction builder ውስጥ ትክክለኛውን namespace prefix ይጠቀማል።
- **የScalar መሣሪያ ውጤቶች** — አሁን ወደ AI ሲመለሱ በትክክል ተጠቅልለው (wrapped) ይመጣሉ።
- **የአጠቃቀም ስታቲስቲክስ** — ከድሮ version ሲሻሻል የድሮውን የability key format በትክክል ይይዛል።
