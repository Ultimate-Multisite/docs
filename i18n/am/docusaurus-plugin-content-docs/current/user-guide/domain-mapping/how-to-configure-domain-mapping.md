---
title: የዶሜይን ማፒንግን እንዴት ማዋቀር እንደሚቻል
sidebar_position: 6
_i18n_hash: 5e3edfad8e0d51fa677f5c6f40a105e4
---
# የዶሜይን ማዛመድን እንዴት ማዋቀር እንደሚቻል (v2) {#how-to-configure-domain-mapping-v2}

_**አስፈላጊ ማስታወሻ፦ ይህ ጽሑፍ የUltimate Multisite ስሪት 2.xን ይመለከታል።**_

የፕሪሚየም ኔትወርክ በጣም ኃይለኛ ባህሪያት አንዱ፣ ለደንበኞቻችን ከፍተኛ-ደረጃ ዶሜይንን ከጣቢያዎቻቸው ጋር የማያያዝ እድል መስጠት ነው። በመጨረሻም፣ የትኛው የበለጠ ሙያዊ ይመስላል፦ [_**joesbikeshop.yournetwork.com**_](http://joesbikeshop.yournetwork.com) ወይስ [_**joesbikeshop.com**_](http://joesbikeshop.com)? ለዚህም ነው Ultimate Multisite ያንን ባህሪ የሶስተኛ-ወገን ፕለጊኖችን መጠቀም ሳያስፈልግ፣ በውስጡ ተካትቶ የሚያቀርበው።

## የዶሜይን ማዛመድ ምንድነው? {#whats-domain-mapping}

ስሙ እንደሚጠቁመው፣ የዶሜይን ማዛመድ ማለት Ultimate Multisite ለብጁ ዶሜይን ጥያቄ ተቀብሎ፣ ያንን ጥያቄ በኔትወርኩ ውስጥ ያ ተያያዥ ዶሜይን ከተያያዘበት ተዛማጅ ጣቢያ ጋር የማዛመድ ችሎታ ነው።

### በUltimate Multisite ኔትወርክዎ ላይ የዶሜይን ማዛመድን እንዴት ማዘጋጀት እንደሚቻል {#how-to-setup-domain-mapping-on-your-ultimate-multisite-network}

የዶሜይን ማዛመድ እንዲሰራ ከእርስዎ በኩል አንዳንድ ማዋቀር ይፈልጋል። እንደ እድል ሆኖ፣ Ultimate Multisite ከባዱን ስራ ለእርስዎ በራስ-ሰር ያከናውናል፣ ስለዚህ መስፈርቶቹን በቀላሉ ማሟላት ይችላሉ።

በUltimate Multisite ጭነት ወቅት፣ ዊዛርዱ **sunrise.php**ን ወደተመደበው አቃፊ በራስ-ሰር ይቀዳና ይጭናል። **ዊዛርዱ ይህ ደረጃ እስኪጠናቀቅ ድረስ እንዲቀጥሉ አይፈቅድልዎትም**።

<!-- Screenshot unavailable: Ultimate Multisite installation wizard with sunrise.php step -->

ይህ ማለት የUltimate Multisite ጭነት ዊዛርድ ኔትወርክዎን ማዘጋጀቱን ከጨረሰ በኋላ፣ ወዲያውኑ ብጁ ዶሜይኑን ማዛመድ መጀመር ይችላሉ።

በUltimate Multisite ውስጥ የዶሜይን ማዛመድ ግዴታዊ እንዳልሆነ ያስተውሉ። የWordPress Multisite ተወላጅ የዶሜይን ማዛመድ ተግባርን ወይም ሌላ ማንኛውንም የዶሜይን ማዛመድ መፍትሄ የመጠቀም አማራጭ አለዎት።

ለሌሎች የዶሜይን ማዛመድ መፍትሄዎች መንገድ ለመስጠት የUltimate Multisite የዶሜይን ማዛመድን ማሰናከል ካስፈለገዎት፣ ይህን ባህሪ በ**Ultimate Multisite > Settings > Domain Mapping** ስር ማሰናከል ይችላሉ።

![የadmin ማዘዋወር፣ የማዛመድ መልዕክት እና የDNS አማራጮችን የሚያሳይ የዶሜይን ማዛመድ ቅንብሮች ገጽ](/img/config/domain-mapping-settings.png)

ከዚህ አማራጭ በታች በቀጥታ፣ **Force Admin Redirect** የሚለውን አማራጭ ደግሞ ማየት ይችላሉ። ይህ አማራጭ ደንበኞችዎ የadmin Dashboard ን በብጁ ዶሜይናቸው እና በንዑስ ዶሜይናቸው ሁለቱም ላይ መድረስ ይችሉ ወይም በአንዱ ብቻ እንዲሆን መቆጣጠር ያስችልዎታል።

**Force redirect to mapped domain** ከመረጡ፣ ደንበኞችዎ የadmin Dashboard ን በብጁ ዶሜይኖቻቸው ላይ ብቻ መድረስ ይችላሉ።

**Force redirect to** **network domain** የሚለው አማራጭ በትክክል ተቃራኒውን ያደርጋል - ደንበኞችዎ በብጁ ዶሜይኖቻቸው ላይ ለመግባት ቢሞክሩም እንኳ፣ Dashboardዎቻቸውን በንዑስ ዶሜይናቸው ላይ ብቻ እንዲደርሱ ይፈቀድላቸዋል።

እና **Allow access to the admin by both mapped domain domain and network domain** የሚለው አማራጭ፣ የadmin Dashboardዎቻቸውን በንዑስ ዶሜይኑ እና በብጁ ዶሜይኑ ሁለቱም ላይ መድረስ ያስችላቸዋል።

![ሦስቱን የማዘዋወር አማራጮች የሚያሳይ የተዘረጋ የAdmin Redirect ተቆልቋይ](/img/config/domain-mapping-redirect-options.png)

ብጁ ዶሜይንን ለማዛመድ ሁለት መንገዶች አሉ። የመጀመሪያው እንደ super admin ከኔትወርክ admin Dashboardዎ የዶሜይን ስሙን በማዛመድ ሲሆን፣ ሁለተኛው በንዑስ ጣቢያ admin Dashboard ውስጥ በAccount ገጽ ስር ነው።

ነገር ግን ብጁ ዶሜይኑን በኔትወርክዎ ውስጥ ካሉ ንዑስ ጣቢያዎች አንዱ ጋር ማዛመድ ከመጀመርዎ በፊት፣ የዶሜይን ስሙ **DNS settings** በትክክል መዋቀራቸውን ማረጋገጥ ያስፈልግዎታል።

###

### የዶሜይኑ DNS settings በትክክል መዋቀራቸውን ማረጋገጥ {#making-sure-the-domain-dns-settings-are-properly-configured}

ማዛመዱ እንዲሰራ፣ ለማዛመድ ያቀዱት ዶሜይን ወደ ኔትወርክዎ IP አድራሻ እየጠቆመ መሆኑን ማረጋገጥ ያስፈልግዎታል። የኔትወርክ IP አድራሻ እንደሚያስፈልግዎት ያስተውሉ - Ultimate Multisite የተጫነበት ዶሜይን IP አድራሻ - ለማዛመድ የሚፈልጉት ብጁ ዶሜይን IP አድራሻ አይደለም። የተወሰነ ዶሜይን IP አድራሻ ለመፈለግ፣ ለምሳሌ ወደ [Site24x7](https://www.site24x7.com/find-ip-address-of-web-site.html) መሄድን እንመክራለን።

ዶሜይኑን በትክክል ለማዛመድ፣ በ**DNS** ውቅርዎ ላይ ወደዚያ **IP አድራሻ** የሚጠቁም **A RECORD** መጨመር ያስፈልግዎታል። የDNS አስተዳደር በተለያዩ የዶሜይን ሬጅስትራሮች መካከል በጣም ይለያያል፣ ነገር ግን XXXX የዶሜይን ሬጅስትራርዎ በሆነበት " _Creating A Record on XXXX_ " ብለው ከፈለጉ፣ ይህን የሚሸፍኑ ብዙ መማሪያዎች በመስመር ላይ አሉ (ምሳ.: " _Creating A Record on_ _GoDaddy_ ")።

ይህን እንዲሰራ ማድረግ ላይ ችግር ካጋጠመዎት፣ **የዶሜይን ሬጅስትራር ድጋፍዎን ያነጋግሩ** እና በዚህ ክፍል ሊረዱዎት ይችላሉ።

ደንበኞችዎ የራሳቸውን ዶሜይኖች እንዲያዛምዱ ለመፍቀድ ካቀዱ፣ በዚህ ክፍል ላይ ስራውን ራሳቸው ማከናወን ይኖርባቸዋል። A Record መፍጠር ካልቻሉ፣ ወደ ሬጅስትራር ድጋፍ ስርዓታቸው ያመልክቷቸው።

### ብጁ ዶሜይን ስምን እንደ Super Admin ማዛመድ {#mapping-custom-domain-name-as-super-admin}

በኔትወርክዎ ላይ እንደ super admin ገብተው ሲሆን፣ በ**Ultimate Multisite > Domains** ስር በመሄድ ብጁ የዶሜይን ስሞችን በቀላሉ መጨመር እና ማስተዳደር ይችላሉ።

![በUltimate Multisite ውስጥ የDomains ዝርዝር ገጽ](/img/admin/domains-list.png)

በዚህ ገጽ ስር፣ ከላይ ያለውን **Add Domain** ቁልፍ መጫን ይችላሉ፣ እና ይህ **ብጁ የዶሜይን ስም**፣ ብጁ የዶሜይን ስሙን ሊተገብሩበት የሚፈልጉትን **ንዑስ ጣቢያ**፣ እና እንደ **ዋና ዶሜይን** ስም ማቀናበር ይፈልጉ እንደሆነ ወይም እንዳልፈለጉ መወሰን የሚችሉበት ሞዳል መስኮት ያመጣል (ወደ **አንድ ንዑስ ጣቢያ በርካታ የዶሜይን ስሞችን ማዛመድ** እንደሚችሉ ያስተውሉ)።

![የዶሜይን ስም፣ የጣቢያ መምረጫ እና ዋና ዶሜይን መቀያየሪያ ያለው Add Domain ሞዳል](/img/admin/domain-add-modal.png)

ሁሉንም መረጃ ካስገቡ በኋላ፣ በታች ያለውን **Add Existing Domain** ቁልፍ መጫን ይችላሉ።

ይህ የብጁ ዶሜይኑን DNS መረጃ የማረጋገጥ እና የማምጣት ሂደት ይጀምራል። እንዲሁም እያለፈበት ያለውን ሂደት እንዲከታተሉ በገጹ ታች ላይ ሎግ ያያሉ። ይህ ሂደት ለመጠናቀቅ ጥቂት ደቂቃዎች ሊወስድ ይችላል።

Ultimate Multisite v2.13.0 እንዲሁም አዲስ ጣቢያ እንደ በጣቢያ-የተለየ ዶሜይን መታየት በሚገባው አስተናጋጅ ላይ ሲፈጠር የውስጥ ዶሜይን መዝገቡን በራስ-ሰር ይፈጥራል። አስተናጋጁ የኔትወርኩ ዋና ዶሜይን ከሆነ፣ ወይም በ**Site URL** መስክ ላይ ከተዋቀሩት የጋራ የcheckout-form መሠረት ዶሜይኖች አንዱ ከሆነ፣ ያ የጋራ መሠረት ዶሜይን ለሚጠቀምበት ማንኛውም ጣቢያ እንዲገኝ የራስ-ሰር የተመደበ-ዶሜይን መዝገብ ይዘለላል።

ደንበኛ በDomain Seller v1.3.0 ወይም ከዚያ በኋላ አዲስ ዶሜይን ሲመዘግብ፣ Ultimate Multisite በነባሪነት የተመዘገበውን ዶሜይን ከደንበኛው የኔትወርክ ጣቢያ ጋር በራስ-ሰር ያመሳስለዋል። አስተዳዳሪዎች እንደ ዋና-ዶሜይን ምልክት፣ የማንቃት ሁኔታ፣ ወይም የSSL አያያዝ ያሉ አማራጮችን ማስተካከል ካልፈለጉ በስተቀር፣ ከተሳካ ምዝገባ በኋላ የተለየ የተመደበ-ዶሜይን መዝገብ ማከል አያስፈልጋቸውም።

ሁሉም ነገር በትክክል ከተዋቀረ **Stage** ወይም ሁኔታው ከ**Checking DNS** ወደ **Ready** መቀየር አለበት።

<!-- Screenshot unavailable: Domain row showing the Checking DNS stage in the domains list -->

<!-- Screenshot unavailable: Domain row showing the Ready stage with the green status indicator -->

በዶሜይን ስም ላይ ከጠቀሱ፣ በውስጡ አንዳንድ አማራጮችን ማየት ይችላሉ። እነሱን በፍጥነት እንመልከት፦

![የዶሜይን ዝርዝር ገጽ ከደረጃ፣ ጣቢያ፣ ንቁ፣ ዋና እና SSL መቀያየሪያዎች ጋር](/img/admin/domain-edit.png)

**Stage:** ይህ ዶሜይኑ ያለበት ደረጃ ነው። ዶሜይኑን መጀመሪያ ሲያክሉ፣ ምናልባት በ**Checking DNS** ደረጃ ላይ ይሆናል። ሂደቱ የDNS ግቤቶችን ይፈትሻል እና ትክክል መሆናቸውን ያረጋግጣል። ከዚያ ዶሜይኑ በ**Checking SSL** ደረጃ ላይ ይቀመጣል። Ultimate Multisite ዶሜይኑ SSL እንዳለው ወይም እንደሌለው ይፈትሻል እና ዶሜይንዎን እንደ **Ready** ወይም **Ready (without SSL)** ይመድባል።

**Site:** ከዚህ ዶሜይን ጋር የተያያዘው ንዑስ ዶሜይን። የተመደበው ዶሜይን የዚህን ተወሰነ ጣቢያ ይዘት ያሳያል።

**Active:** ዶሜይኑን ለማንቃት ወይም ለማሰናከል ይህን አማራጭ ማብራት ወይም ማጥፋት ይችላሉ።

**Is Primary Domain?:** ደንበኞችዎ ለእያንዳንዱ ጣቢያ ከአንድ በላይ የተመደበ ዶሜይን ሊኖራቸው ይችላል። ይህ ለተወሰነው ጣቢያ ዋና ዶሜይን መሆኑን ለመምረጥ ይህን አማራጭ ይጠቀሙ።

**Is Secure?:** Ultimate Multisite ዶሜይኑን ከማንቃቱ በፊት የSSL ሰርቲፊኬት እንዳለው ወይም እንደሌለው ቢፈትሽም፣ ዶሜይኑን ከSSL ሰርቲፊኬት ጋር ወይም ያለ SSL ሰርቲፊኬት በእጅ መጫን መምረጥ ይችላሉ። ድር ጣቢያው የSSL ሰርቲፊኬት ከሌለው እና በSSL እንዲጫን በግድ ለማድረግ ከሞከሩ፣ ስህተቶች ሊሰጥዎ እንደሚችል ያስተውሉ።

### እንደ Subsite ተጠቃሚ ብጁ ዶሜይን ስም መመደብ {#mapping-custom-domain-name-as-subsite-user}

የSubsite አስተዳዳሪዎችም ከsubsite admin dashboard ብጁ ዶሜይን ስሞችን መመደብ ይችላሉ።

መጀመሪያ፣ ይህን አማራጭ በ**Domain mapping** ቅንብሮች ስር እንደሚያነቁ ማረጋገጥ አለብዎት። ከታች ያለውን ስክሪንሾት ይመልከቱ።

<!-- Screenshot unavailable: Domain mapping settings allowing subsite users to map domains via Customer DNS Management toggle -->

ይህን አማራጭ በ**Plan** ደረጃ ወይም በ**Ultimate Multisite > Products** ላይ ባሉ የምርት አማራጮች ስርም ማቀናበር ወይም መዋቀር ይችላሉ።

![በምርት አርትዖት ገጽ ላይ ያለው የብጁ ዶሜይኖች ክፍል](/img/config/product-custom-domains.png)

ከእነዚያ አማራጮች ማንኛውም ሲነቃ እና የsubsite ተጠቃሚ ብጁ ዶሜይን ስሞችን መመደብ ሲፈቀድለት፣ የsubsite ተጠቃሚው በ**Account** ገጽ ስር **Domains** የተባለ ሜታቦክስ ማየት አለበት።

<!-- Screenshot unavailable: Domains metabox on the subsite Account page with Add Domain button -->

ተጠቃሚው የ**Add Domain** አዝራርን መጫን ይችላል እና አንዳንድ መመሪያዎች ያሉት ሞዳል መስኮት ይከፍታል።

<!-- Screenshot unavailable: Add Domain modal showing DNS A-record instructions for subsite users -->

ከዚያ ተጠቃሚው **Next Step** መጫን እና ብጁ ዶሜይን ስሙን ለማከል መቀጠል ይችላል። ይህ ዋና ዶሜይን መሆኑን ወይም አለመሆኑንም መምረጥ ይችላሉ።

<!-- Screenshot unavailable: Add Domain form with custom domain name field and primary domain toggle -->

<!-- Screenshot unavailable: Add Domain confirmation step that triggers DNS verification -->

**Add Domain** ለመጫን መጠቆም የብጁ ዶሜይኑን የDNS መረጃ የማረጋገጥ እና የማምጣት ሂደትን ይጀምራል።

### ስለ ዶሜይን ማመሳሰል {#about-domain-syncing}

ዶሜይን ማመሳሰል Ultimate Multisite ብጁ ዶሜይን ስሙን ወደ የhosting accountዎ እንደ add-on domain **የዶሜይን መመደብ እንዲሰራ** የሚያክልበት ሂደት ነው።

የhosting providerዎ ከUltimate Multisite የዶሜይን መመደብ ባህሪ ጋር ውህደት ካለው፣ ዶሜይን ማመሳሰል በራስ-ሰር ይከሰታል። በአሁኑ ጊዜ፣ እነዚህ የhosting providerዎች _Runcloud, Closte, WP Engine, Gridpane, WPMU Dev, Cloudways,_ እና _Cpanel_ ናቸው።

የhost-provider ውህደት ንቁ ሲሆን፣ Ultimate Multisite አዲስ ለተፈጠሩ ጣቢያዎች የprovider-side DNS ወይም የንዑስ ዶሜይን ፍጠራ ተግባርንም ወረፋ ላይ ሊያስገባ ይችላል። ለዚያ ተግባር የሚያዳምጥ ውህደት ከሌለ፣ የጀርባ ስራው ምንም-ተግባር የሌላቸው የወረፋ ግቤቶችን ለማስወገድ ይዘለላል። ለተመደቡ ዶሜይኖች የDNS እና SSL ፍተሻዎች በመደበኛው የዶሜይን-ደረጃ ሂደት መሄዳቸውን ይቀጥላሉ።

ይህን ውህደት በUltimate Multisite ቅንብሮች ላይ በ**Integration** ትር ስር ማንቃት ያስፈልግዎታል።

![በUltimate Multisite ቅንብሮች ውስጥ hosting providerዎችን የሚያሳየው የውህደቶች ትር](/img/config/integrations-tab.png)

<!-- Screenshot unavailable: Hosting provider Configuration links on the Integrations settings tab -->

_የhosting providerዎ ከላይ ከተጠቀሱት አቅራቢዎች አንዱ ካልሆነ፣ **የዶሜይን ስሙን በእጅ ማመሳሰል ወይም ማከል ያስፈልግዎታል** ወደ hosting accountዎ።_
