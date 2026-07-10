---
title: የበይነመረብ ፍለጋ
sidebar_position: 26
_i18n_hash: e0c88931760a1b490767e39aad86c70f
---
# የኢንተርኔት ፍለጋ {#internet-search}

Gratis AI Agent v1.5.0 በውይይት ወቅት ከዌብ ላይ ወቅታዊ መረጃዎችን እንዲሰበስብ የሚያስችል **የኢንተርኔት ፍለጋ** ችሎታን ይጨምራል። ይህ ችሎታ የሚንቀሳቀሰው በ[Brave Search API](https://brave.com/search/api/) ወይም በ[Tavily API](https://tavily.com/) ነው።

## እንዴት ይሰራል {#how-it-works}

የኢንተርኔት ፍለጋ ሲበ성화፣ ወኪሉ (assistant) ጥያቄው ወቅታዊ ወይም ከውጭ መረጃ እንደሚያስፈልገው ሲገነዘብ፣ በተዋቀረለት የፍለጋ አቅራቢ (search provider) ላይ በራስ-ሰር ጥያቄ ያቀርባል። ለምሳሌ፣ የቅርብ ጊዜ ዜና፣ የቀጥታ ዋጋ ወይም ከሞዴሉ ስልጠና ከተቋረጠበት ጊዜ ጀምሮ ሊለወጥ የቻለ ሰነድ ሊሆን ይችላል።

ውጤቶቹ በቅጽበት ይሰበሰባሉ እና ወኪሉ ምላሽ ከመስጠቱ በፊት በአውዱ (context) ውስጥ ይገባሉ። ወኪሉ ጥያቄውን ለመመለስ የፍለጋ ውጤቶችን እንደተጠቀመ ያሳያል።

## የኢንተርኔት ፍለጋን ማብቃት {#enabling-internet-search}

የኢንተርኔት ፍለጋ የሚሰራው ከተመረጠው የፍለጋ አቅራቢ API key በመጠቀም ነው። ለማዋቀር የሚከተሉትን ያድርጉ፦

1. **Gratis AI Agent → Settings → Advanced** ላይ ይሂዱ።
2. **Internet Search Provider** የሚለውን ዝቅተኛ ምናሌ (dropdown) አግኝተው **Brave Search** ወይም **Tavily** ውስጥ አንዱን ይምረጡ።
3. API keyዎን በሚመለከተው መስክ ውስጥ ያስገቡ። የመመዝገቢያ ሊንኮች (Sign-up links) በአጠገብ ባሉ መስኮች ይታያሉ።
4. **Save Settings** የሚለውን ይጫኑ።

keyው ከተቀመጠ በኋላ፣ የኢንተርኔት ፍለጋ ችሎታ በራስ-ሰር ለወኪሉ ይገኛል።

## Brave Search {#brave-search}

### የBrave Search API Key ማግኘት {#obtaining-a-brave-search-api-key}

1. [Brave Search API page](https://brave.com/search/api/) ላይ ይጎብኙ።
2. ዕቅድ (plan) ይመዝገቡ። ወርሃዊ ጥያቄ ገደብ ያለው ነጻ ደረጃ (free tier) ይገኛል።
3. API keyዎን ከBrave Search developer dashboard ይቅዱ።
4. keyውን በGratis AI Agent settings ውስጥ ባለው **Brave Search API Key** መስክ ውስጥ ይለጥፉ።

### የአጠቃቀም ገደቦች {#usage-limits}

አጠቃቀም የሚሰበሰበው በBrave Search ባቀረበው ጥያቄዎች (queries) ብዛት ነው። ፍለጋ የሚያስነሳ እያንዳንዱ የAI ምላሽ አንድ ጥያቄ ተደርጎ ይቆጠራል። ያልተጠበቁ ክፍያዎችን ለማስቀየም፣ አጠቃቀምዎን በ[Brave Search developer dashboard](https://brave.com/search/api/) ላይ ይከታተሉ።

## Tavily {#tavily}

Superdav AI Agent v1.10.0 እንደ አማራጭ የኢንተርኔት ፍለጋ አቅራቢ **Tavily**ን ይጨምራል፣ ይህም የበለጸጉ የፍለጋ ውጤቶችን እና የላቀ ምርምር ችሎታዎችን ያቀርባል።

### የTavily API Key ማግኘት {#obtaining-a-tavily-api-key}

1. [Tavily API page](https://tavily.com/) ላይ ይጎብኙ።
2. መለያ (account) ይመዝገቡ። ወርሃዊ ጥያቄ ገደብ ያለው ነጻ ደረጃ (free tier) ይገኛል።
3. API keyዎን ከTavily dashboard ይቅዱ።
4. keyውን በGratis AI Agent settings ውስጥ ባለው **Tavily API Key** መስክ ውስጥ ይለጥፉ።

### የአጠቃቀም ገደቦች {#usage-limits-1}

አጠቃቀም የሚሰበሰበው በTavily ባቀረባቸው የAPI ጥሪዎች (API calls) ብዛት ነው። ፍለጋ የሚያስነሳ እያንዳንዱ የAI ምላሽ አንድ ጥሪ ተደርጎ ይቆጠራል። ያልተጠበቁ ክፍያዎችን ለማስቀየም፣ አጠቃቀምዎን በ[Tavily dashboard](https://tavily.com/) ላይ ይከታተሉ።

## የኢንተርኔት ፍለጋን ማጥፋት {#disabling-internet-search}

የAPI keyን ከaktif search provider field አጥፍተው ያስቀምጡ። የኢንተርኔት ፍለጋ ችሎታ ለወኪሉ አይቀርም።

:::note
የኢንተርኔት ፍለጋ ምላሾችን ጊዜ የሚያባብሰው (latency)፣ ምክንያቱም ወኪሉ መልስ ከመስጠቱ በፊት የፍለጋ ውጤቶችን መጠበቅ ስለሚኖርበት ነው። ለጊዜ ወሳኝ ለሆኑ አጠቃቀሞች፣ የቅጽበታዊ ፍለጋ አስፈላጊ መሆኑን ወይም የወኪሉን ውስጣዊ እውቀት በቂ መሆኑን ግምት ውስጥ ያስገቡ።
:::
