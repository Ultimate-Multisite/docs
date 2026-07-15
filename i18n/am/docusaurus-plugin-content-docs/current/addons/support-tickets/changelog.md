---
title: የድጋፍ ትኬቶች የለውጥ ታሪክ
sidebar_position: 99
_i18n_hash: 4ef7d3adaed4523e799ec78da9843a3d
---
# የድጋፍ ትኬቶች የለውጥ መዝገብ

### 1.0.4 - 2026-05-05 {#104---2026-05-05}
* የተሻሻለ፡ `vendor/` ዳይሬክተሪ ከGit ట్రాకిንግ ተወግዷል (በ`.gitignore` ቀድሞ ተሸፍኗል)፣ ይህም የ repository መጠንን ይቀንሳል።
* የተሻሻለ፡ እስከ WordPress 7.0 ድረስ ተፈትኗል።

### 1.0.3 - 2026-05-01 {#103---2026-05-01}
* ተስተካክሏል፡ ባዶ (null) እሴቶችን በnullable ticket model setters ውስጥ መቀበል።
* ተስተካክሏል፡ ሁሉንም ትኬቶች ለትክክለኛ multisite ድጋፍ በግሎባል network-wide tables ውስጥ ማስቀመጥ።
* ተስተካክሏል፡ የሰራተኞች (staff) fields ተደብቀዋል እንዲሁም በcustomer new-ticket form ላይ ባዶ ገጽ ወደ ሌላ ቦታ መላክ (redirect) ችግር ተስተካክሏል።
* ተስተካክሏል፡ ለmetadata ማከማቻ፣ ያልተገለጹ `add_meta()` ጥሪዎች በትክክለኛው `update_meta()` ተተክተዋል።
* ተስተካክሏል፡ ያልተመዘገበ capability ፍተሻ በትክክለኛው `wu_view_all_support_tickets` ተተክቷል።
* ተስተካክሏል፡ ለticket status፣ assignment እና quick-edit actions የጎደሉ AJAX handlers ተጨመዋል።
* ተስተካክሏል፡ በticket views ውስጥ ለሰራተኞች ምላሽ (staff response) የሚለየው ዘዴ ስም ተስተካክሏል።
* ተስተካክሏል፡ የተደጋገሙ የreply handlers ተሰባስበዋል እንዲሁም nonce action ስሞች ተስተካክለዋል።
* ተስተካክሏል፡ ለ`[wu_submit_ticket]` shortcode የጎደለው frontend view ተጨመር።
* ተስተካክሏል፡ የጎደለው `user_id` column ተጨመር እና `Support_Ticket::get_user_id()` ዘዴ ተስተካክሏል።
* ተስተካክሏል፡ በpriority filter option tag ውስጥ ያለ ተጨማሪ የሁለት ጥቅስ ምልክት ተወግዷል።
* ተስተካክሏል፡ ለsuper admins የnetwork admin ticket management panel ተጨመር።
* የተሻሻለ፡ የአስተዳሚ (admin) CSS በአንድ የውጭ stylesheet ውስጥ ተሰባስበዋል።
* የተሻሻለ፡ የSettings submenu ከsubsite admin menu ተወግዷል።
* የተሻሻለ፡ የfrontend assets በድጋፍ ትኬት ገጾች ላይ ብቻ በቅድመ ሁኔታ (conditionally) እንዲጫኑ ተደርጓል።
* የተሻሻለ፡ Bedrock root autoloader ቀድሞ ጥገኝነቶችን (dependencies) ሲጭን፣ የplugin autoloader ስራውን ይዘልቃል።

### 1.0.2 - 2025-12-11 {#102---2025-12-11}
* ተጨመርሏል፡ ለአስተዳሚ (admin) እና ለfrontend ሙሉ የትኬት እይታ ተግባር።
* ተጨመርሏል፡ ለትኬት ምላሽ ማስረከቢያ (reply submissions) AJAX handler።
* ተጨመርሏል፡ ትክክለኛ የform handling ጋር የትኬት ምላሽ ተግባር ድጋፍ።
* ተጨመርሏል፡ በአስተዳሚ (admin) ውስጥ ለትኬት ማስረከቢያዎች እና ምላሾች ትክክለኛ ማሳወቂያ (notice) ማሳየት።
* ተጨመርሏል፡ ለደንበኞች በራሳቸው የሚያስረክሙባቸው ትኬቶች በራስ-ሰር ተያይዘዋል።
* ተጨመርሏል፡ ደንበኞች የትኬት ባለቤትነትን እንዳይቀይሩ የሚያስችል የደህንነት ማሻሻያ።
* ተጨመርሏል፡ የጎደሉ የረዳት ተግባራት (helper functions) (wu_format_date, wu_user_can_view_ticket, ወዘተ)።
* ተጨመርሏል፡ ትክክለኛ የፋይል መያዣ (attachment) ማውረድ እና አያያዝ።
* ተጨመርሏል፡ ለትኬት ምላሾች እና የሁኔታ ለውጦች የኢሜይል ማሳወቂያ ስርዓት።
* ተስተካክሏል፡ የትኬት ምላሽ form አሁን አስፈላጊ የትኬት IDን ይይዛል።
* ተስተካክሏል፡ በአስተዳሚ (admin) የትኬት እይታዎች ውስጥ የማሳወቂያ (notice) መታየት ችግሮች ተስተካክለዋል።
* ተስተካክሏል፡ በድጋፍ ትኬት ተግባራት ውስጥ ያሉ የsyntax ስህተቶች።
* የተሻሻለ፡ ምላሾች እና መያዣዎች (attachments) ትክክለኛ የquery እና የschema classes ባለው የዳታቤዝ መዋቅር።
* የተሻሻለ፡ ለትኬት ሞዴሎች (ticket models) ከattributes ወደ real properties መሸጋገር።

### 1.0.1 - 2025-09-28 {#101---2025-09-28}
* ተዘምኗል፡ ወጥነትን ለመጠበቅ prefix ወደ ultimate-multisite ተቀይሯል።
* ተዘምኗል፡ የጽሑፍ የጎሳ (Text domain) ደረጃውን የጠበቀ አሰራር።
* ተስተካክሏል፡ ትናንሽ የbug ጥገናዎች እና መሻሻሎች።

### 1.0.0 - 2025-09-01 {#100---2025-09-01}
* የመጀመሪያ ስሪት
* ሙሉ የትኬት አስተዳደር ስርዓት
* ባለ ብዙ ደረጃ የመዳረሻ ቁጥጥር (Multi-level access control)
* በክር የተደራጀ ውይይት ስርዓት (Threaded conversation system)
* የፋይል መያዣ ድጋፍ
* የኢሜይል ማሳወቂያ ስርዓት
* የአስተዳሚ (admin) እና የደንበኛ (customer) በይነገጾች
* ስታቲስቲክስ እና ሪፖርት ማድረግ
