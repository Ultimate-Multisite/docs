---
title: የጣቢያ ኤክስፖርት
sidebar_position: 11
_i18n_hash: d25255aa1b01df64a9008f91e3dcbeb1
---
# የጣቢያ ኤክስፖርት (Site Export)

የ**Site Export** የአስተዳሚ ገጽ የኔትወርክ አስተዳዳሪዎችን አንድ ጣቢያን፣ ወይም መላውን ኔትወርክ፣ ለዝውውር (migration)፣ ለጥቅም (backup) ወይም ለሌላ አካል ለማስረከብ በሚቻል አርካይቭ (downloadable archive) ውስጥ እንዲያከማቹ የሚያስችል ቦታ ነው።

## አንድ ጣቢያን ኤክስፖርት ማድረግ

ወደ **Ultimate Multisite > Site Export** ይሂዱ እና **Generate new Site Export** ይምረጡ። ሊያወጡት የሚፈልጉትን ንዑስ ጣቢያ (subsite) ይምረጡ፣ ከዚያም አርካይቭው የፋይሎችን ዝውውር (uploads)፣ ፕልጊኖችን (plugins) እና ቴሞችን (themes) የሚያካትት መሆኑን ይምረጡ።

ኤክስፖርቱ ሲጠናቀቅ፣ ከ**Existing Exports** ዝርዝር ውስጥ ያለውን ZIP ፋይል ያውርዱ። የኤክስፖርት ZIP ፋይሎች አሁን ራሳቸውን የሚያስጀምር `index.php` እና `readme.txt` አላቸው። ስለዚህ፣ አርካይቭው ተለየ የኢምፖርተር ፕልጊን ሳይጫኑ በቀጥታ በአዲስ ሆስት ላይ ተጭኖ እንዲጀመር ያስችላል።

## መላውን ኔትወርክ ኤክስፖርት ማድረግ

በኔትወርክ ውስጥ ያሉትን ሁሉንም ንዑስ ጣቢያዎች በአንድ አርካይቭ ውስጥ የሚያስይዝ ከሆነ፣ በSite Export ገጹ ላይ **Network Export** ይጠቀሙ። ይህ በተለይ የሆስት ዝውውር (host migrations)፣ የአደጋ መከላከል ልምምዶች (disaster-recovery drills) ወይም እያንዳንዱ ንዑስ ጣቢያ በአንድነት መጓዝ ያለበት የstaging rebuilds ጊዜ በጣም ጠቃሚ ነው።

የኔትወርክ ኤክስፖርት ከአንድ ጣቢያ ኤክስፖርት በጣም ትልቅ ሊሆን ስለሚችል፣ በዝቅተኛ የትራፊክ ሰዓት ውስጥ ያካሂዱት። እንዲሁም፣ ለፋይሎች ዝውውር (uploads)፣ ፕልጊኖች፣ ቴሞች እና ለሚፈጠሩ ZIP ፋይሎች በቂ ነጻ ቦታ መኖሩን በታለመው ማከማቻ (target storage) ያረጋግጡ።

### የኔትወርክ ማስገቢያ ጥቅሎች (Network Import Bundles)

ከUltimate Multisite 2.12.0 ጀምሮ፣ Site Exporter **የኔትወርክ ማስገቢያ ጥቅሎችን (network import bundles)** መፍጠር ይችላል። እነዚህ ጥቅሎች ለኔትወርክ-አቀፍ የጣቢያ መልሶ ማቋቋም (site restoration) የተዘጋጁ ልዩ አርካይቮች ናቸው። የኔትወርክ ማስገቢያ ጥቅል ወደ አዲስ የኔትወርክ ተከላ (new network installation) በርካታ ጣቢያዎችን ለመመለስ የሚያስፈልጉትን ሁሉንም ፋይሎች እና ሜታዳታ (metadata) ይይዛል።

#### የኔትወርክ ማስገቢያ ጥቅል መፍጠር

1. **Ultimate Multisite > Site Export** ይሂዱ።
2. **Generate new Network Export** ላይ ይጫኑ።
3. እንደ ኤክስፖርት አይነት **Network Import Bundle** ይምረጡ።
4. የፋይሎችን ዝውውር (uploads)፣ ፕልጊኖችን እና ቴሞችን የሚያካትት መሆኑን ይምረጡ።
5. **Generate** ላይ ይጫኑ።
6. የጥቅሉን ZIP ፋይል ከ**Existing Exports** ዝርዝር ውስጥ ያውርዱ።

#### ከኔትወርክ ማስገቢያ ጥቅል መልሶ ማቋቋም

የጣቢያዎችን ከኔትወርክ ማስገቢያ ጥቅል መልሶ ለማቋቋም (restore):

1. Ultimate Multisite በታለመው ሆስት ላይ ይጫኑ።
2. የமல்ቲሳይት (multisite) የማዋቀር መመሪያውን (setup wizard) ይጨርሱ።
3. በአዲሱ ኔትወርክ ላይ **Ultimate Multisite > Site Export** ይሂዱ።
4. **Import Network Bundle** ላይ ይጫኑ።
5. የኔትወርክ ማስገቢያ ጥቅል ZIP ፋይል ይስቀሉ።
6. በስክሪኑ ላይ የሚሰጡትን የማስገቢያ መመሪያዎች ይከተሉ።
7. የማስገቢያው ሂደት ሁሉንም ጣቢያዎች፣ ይዘታቸውን እና ማዋቀራቸውን ይመልሳል።

የኔትወርክ ማስገቢያ ጥቅሎች የሚጠብቁት (preserve) የሚከተሉትን ነው፦
- የጣቢያ ይዘት (ፖስቶች፣ ገጾች፣ የቅጽበታዊ ገጽ እይታ አይነቶች)
- የጣቢያ ቅንብሮች እና አማራጮች
- የተጠቃሚ ሚናዎች እና ፈቃዶች
- ፕልጊኖች እና ቴሞች (በጥቅሉ ውስጥ ከተካተቱ)
- የሚዲያ ፋይሎች (በጥቅሉ ውስጥ ከተካተቱ)
- ልዩ የዳታቤዝ ሰንጠረዦች እና መረጃ

## ራሱን የቻለ ኤክስፖርት ZIP መጫን

ራሱን የቻለ (self-booting) ZIP በአዲስ ሆስት ላይ ለመመለስ (restore):

1. የኤክስፖርት ZIP ይዘቶችን ወደ ታለመው የዌብ ሥር (web root) ይስቀሉ።
2. በብራውዘር ውስጥ የተስቀለውን `index.php` ይክፈቱ።
3. ከጥቅሉ ኤክስፖርት ፓኬጅ የመጣውን በስክሪኑ ላይ ያለውን መጫኛ መመሪያ ይከተሉ።
4. ጊዜያዊ ፋይሎችን ከመሰረዝዎ በፊት በጥቅሉ ውስጥ ያለውን `readme.txt` ለኤክስፖርት ልዩ ማስታወሻዎች ይገምግሙ።

ለተጨማሪ የፕልጊን መጫኛ እና ማስገቢያ ዝርዝሮች፣ [Site Exporter addon documentation](/addons/site-exporter) ይመልከቱ።

በUltimate Multisite 2.9.0 ላይ የተጨመረውን ለአንድ ጣቢያ የሚያገለግል መሳሪያ ለማየት፣ [Export & Import](/user-guide/administration/export-import) ይመልከቱ።
