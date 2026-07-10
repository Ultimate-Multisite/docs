---
title: WebLLMን የሚመለከት ፍጹም የAI ማገናኛ የለውጥ መዝገብ
sidebar_position: 99
_i18n_hash: da117fc30b104eada947892d417a2899
---
# Ultimate AI Connector for WebLLM የለውጥ መዝገብ {#ultimate-ai-connector-for-webllm-changelog}

## Version 1.1.0 — በ2026-04-09 የወጣ {#version-110--released-on-2026-04-09}

* አዲስ፡ የአስተዳዳሪ ባር ሁኔታ አመልካች ያለው የሚንሳፈፍ የውይይት መተግበሪያ (Floating chat widget) — ማንኛውም የተመዘገበ ተጠቃሚ በቀጥታ ከፊት ለፊት (front end) የብራውዘሩን LLM እንዲጠይቅ (prompt) አቅሟል።
* አዲስ፡ SharedWorker ሩንታይም — የMLC ሞተር አሁን በSharedWorker ውስጥ ስለሚሰራ፣ ብዙ ታቦች በአንድ GPU ክፍለ ጊዜ ላይ ይጋራሉ እንጂ እርስ በርስ አይጋጩም።
* አዲስ፡ apiFetch middleware መቆራኛ (interceptor) — የWordPress REST ጥያቄዎች የAI Client SDKን ስርዓተ-ጥለት (pattern) የሚያሟሉ ከሆነ፣ ወደ አካባቢያዊው WebLLM broker በግልጽ ይላካሉ፤ የሉፕባክ HTTP ጉዞ አያስፈልግም።
* አዲስ፡ በኮነክተር ፓነል ውስጥ የውይይት መተግበሪያውን ለማብራት/ማጥፋት እና የራስ-ጥያቄ (auto-prompt) ባህሪውን ለማስዋቀር የሴቲንግስ UI ተጨምሯል።
* ማስተካከያ፡ የሞዴል ክብደት (model weight) ዝውውሮች በነባሪው Cache API መንገድ የሚቋረጡ የHuggingFace xet CDN መላላኪያ መሻቀቶች (redirects) ምክንያት እንዳይጠፉ IndexedDB cache backend እንዲሆን ተገድቧል።
* ማስተካከያ፡ ለembedding ሞዴሎች የcontext_window KV-cache መተካት ተቋርጧል (እነሱ ዲኮደር ስለሌላቸው እና ይህ መተካት የሩንታይም ስህተት ስለፈጠረ)።
* ማስተካከያ፡ የworker ታብ ከመጫኑ በፊት፣ ቀዝቃዛ መጀመሪያ ሊሆን የሚችል ሞዴል (cold-start candidate model) በ/webllm/v1/models ላይ እንዲገለጽ ተደርጓል፤ ይህም SDK ተጠቃሚዎች ሞዴሉን ወዲያውኑ እንዲያዩ ያስችላል።
* ማስተካከያ፡ የAI Experiments ባህሪው ሞዴል ሲዘጋጅ የብራውዘሩን ሞተር እንዲጠቀም፣ WebLLM በwpai_preferred_text_models ማጣሪያ (filter) ውስጥ እንዲገባ ተደርጓል።
* የተሻሻለ፡ በከመጀመሪያው እስከ መጨረሻው (end-to-end) ምርመራ ወቅት የcache-busting፣ የይዘት መደበኛነት (content normalisation) እና የሃርድዌር-ማጣቀቂያ (hardware-reference) ማስተካከያዎች ተስተውለዋል።

## Version 1.0.0 — የመጀመሪያ ስሪት {#version-100--initial-release}
