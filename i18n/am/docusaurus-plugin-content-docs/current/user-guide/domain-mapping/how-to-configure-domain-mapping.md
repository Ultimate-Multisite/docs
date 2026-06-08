---
title: የዶሜን ካርታ አወጣጥ እንዴት ይቻላል
sidebar_position: 6
_i18n_hash: 70b0ea1fd4e24e701978329f52843452
---
# የዶሜን ማዛመድ (Domain Mapping) እንዴት ማዋቀር እንደሚቻል (v2)

_**ጠቃሚ ማሳሰቢያ፡ ይህ ጽሑፍ የሚያመለክተው Ultimate Multisite version 2.xን ነው።**_

የፕሪሚየም ኔትወርክ በጣም ኃይለኛ ባህሪያት አንዱ ለደንበኞቻችን የከፍተኛ ደረጃ ዶሜን (top-level domain) እንዲያያይዙ እድል መስጠት ነው። በመጨረሻም፣ የትኛው ይበልጥ ሙያዊ ይመስላል፦ [_**joesbikeshop.yournetwork.com**_](http://joesbikeshop.yournetwork.com) ወይስ [_**joesbikeshop.com**_](http://joesbikeshop.com)? ለዚህም ነው Ultimate Multisite ያለ የሶስተኛ ወገን plugin ተጠቅሞ ይህንን ባህሪ የያዘው።

## የዶሜን ማዛመድ ምንድነው?

በስሙ እንደሚያመለክተው፣ የዶሜን ማዛመድ (domain mapping) ማለት Ultimate Multisite ለተጠቃሚዎች የራሳቸውን ዶሜን ስም እንዲያስገቡ የሚያስችል እና ያንን ጥያቄ ወደ ተዛማጅ ኔትወርክ ውስጥ ባለው ድረ-ገጽ እንዲያዛምድ የሚያስችል ችሎታ ነው።

### በUltimate Multisite Networkዎ ላይ የዶሜን ማዛመድን እንዴት ማዘጋጀት ይቻላል

የዶሜን ማዛመድ እንዲሰራ ጥቂት ዝግጅት ያስፈልጋል። መልካም ነገር ቢኖር Ultimate Multisite ከባድ ስራውን በራስ-ሰር ስለሚያከናውን፣ እርስዎ በቀላሉ መስፈርቶቹን ማሟላት ይችላሉ።

በUltimate Multisite ሲጫን፣ הwizard (የማስጫው) በራስ-ሰር **sunrise.php** ወደ ተመደበው አቃፊ ውስጥ ይገለብጣል። **ይህ እርምጃ እስኪጠናቀቅ ድረስ הwizard እንዲቀጥል አይፈቅድልዎትም።**

![Ultimate Multisite installation wizard with sunrise.php step](/img/installation/install-wizard.png)

ይህ ማለት Ultimate Multisite installation wizard ኔትወርክዎን ማዘጋጀቱን እንደጨረሰ፣ ወዲያውኑ የራሳቸውን ዶሜን ማዛመድ መጀመር ይችላሉ።

በUltimate Multisite ውስጥ የዶሜን ማዛመድ የግድ አስፈላጊ አይደለም። የWordPress Multisite ተወላጅ የዶሜን ማዛመድ ተግባርን ወይም ሌላ ማንኛውንም የዶሜን ማዛመድ መፍትሄ የመጠቀም አማራጽ አለዎት።

የሌላ የዶሜን ማዛመድ መፍትሄ እንዲተካ የUltimate Multisite የዶሜን ማዛመድን ለማጥፋት ከፈለጉ፣ ይህንን ባህሪ በ**Ultimate Multisite > Settings > Domain Mapping** ስር ማጥፋት ይችላሉ።

![Domain Mapping settings page showing admin redirect, mapping message and DNS options](/img/config/domain-mapping-settings.png)

ከዚህ አማራጭ በታች፣ **Force Admin Redirect** የሚል አማራጭም ማየት ይችላሉ። ይህ አማራጭ ደንበኞችዎ በየራሳቸው የዶሜን ስም እና በsubdomain ላይ ባለው የአስተዳዳሪ (admin) ዳሽቦርድ መዳረሻ ላይ መሆን ይችሉ እንደሆነ ወይም በአንዱ ላይ ብቻ መሆን እንደሚችሉ መቆጣጠር ያስችልዎታል።

**Force redirect to mapped domain** የሚለውን ከመረጡ፣ ደንበኞችዎ በየራሳቸው የዶሜን ስም ላይ ብቻ የአስተዳዳሪ ዳሽቦርድ መዳረሻ ሊኖራቸው ይችላል።

**Force redirect to network domain** የሚለው አማራጭ ግን ተቃራኒውን ያደርጋል - ደንበኞችዎ በየራሳቸው የዶሜን ስም ላይ ቢሞክሩም፣ በsubdomain ላይ ብቻ ዳሽቦርድ መዳረሻ እንዲኖራቸው ያደርጋል።

እና **Allow access to the admin by both mapped domain domain and network domain** የሚለው አማራጭ ደግሞ በsubdomain እና በየራሳቸው የዶሜን ስም ላይ ሁለቱም የአስተዳዳሪ ዳሽቦርድ መዳረሻ እንዲኖራቸው ያደርጋቸዋል።

![Admin Redirect dropdown expanded showing the three redirect options](/img/config/domain-mapping-redirect-options.png)

የራሳቸውን ዶሜን ስም ለማዛመድ ሁለት መንገዶች አሉ። የመጀመሪያው ደግሞ የኔትወርክ አስተዳዳሪ ዳሽቦርድ ላይ እንደ super admin የዶሜን ስም በማዛመድ ሲሆን፣ ሁለተኛው ደግሞ በsubsite አስተዳዳሪ ዳሽቦርድ ስር ባለው የखाት (account) ገጽ ነው።

ነገር ግን በኔትወርክዎ ውስጥ ባለው የsubsite ውስጥ የራሳቸውን ዶሜን ስም ከመዛመድዎ በፊት፣ የዶሜን ስሙ **DNS settings** በትክክል መዋቀሩን ማረጋገጥ ያስፈልግዎታል።

###

### የዶሜን DNS ስሪት በትክክል መዋቀሩን ማረጋገጥ

ማዛመድ እንዲሰራ፣ ለማዛመድ እቅድ ባቀዱት ዶሜን ስም ወደ የኔትወርክዎ IP አድራሻ መ 指ራቱን ማረጋገጥ አለብዎት። ልብ ሊሉት የሚገባው ነገር ቢኖር፣ ሊያዛምዱት የሚፈልጉት የራሱ የዶሜን ስም IP አድራሻ ሳይሆን፣ Ultimate Multisite የተጫነበት የኔትወርክ IP አድራሻ መሆኑን ነው። የአንድ የተወሰነ ዶሜን IP አድራሻ ለመፈለግ፣ ለምሳሌ [Site24x7](https://www.site24x7.com/find-ip-address-of-web-site.html) መሄድ እንመክራለን።

ዶሜኑን በትክክል ለማዛመድ፣ ወደዚያ **IP address** የሚያመለክት **A RECORD** በ**DNS** ውቅረትዎ ላይ መጨመር ያስፈልግዎታል። የDNS አስተዳደር በተለያዩ የዶሜን ሪጅስትራዎች መካከል በጣም ይለያያል፣ ነገር ግን " _Creating A Record on XXXX_ " ብለው ከፈለጉ፣ XXXX የዶሜን ሪጅስትራዎ ከሆነ፣ በበይነመረቡ ላይ ብዙ ትምህርቶች አሉ።

ይህ ነገር እንዲሰራ ችግር ካጋጠመዎት፣ **የዶሜን ሪጅስትራዎን ድጋፍ ያነጋግሩ** እና በዚህ ክፍል ሊረዳዎት ይችላሉ።

ደንበኞችዎ የራሳቸውን ዶሜን ስም እንዲያዛምዱ ዕቅድ ካደረጉ፣ እነሱ በራሳቸው ይህንን ስራ መሥራት አለባቸው። A Record መፍጠር ባይችሉ ወደ የሪጅስትራቸው ድጋፍ ስርዓት ያመሯቸው።

### የዶሜን ስም እንደ Super Admin ማዛመድ

በኔትወርክዎ ላይ እንደ super admin ሲመዘገቡ፣ ወደ **Ultimate Multisite > Domains** በመሄድ የራሳቸውን ዶሜን ስም በቀላሉ ማከል እና ማስተዳደር ይችላሉ።

![Domains list page in Ultimate Multisite](/img/admin/domains-list.png)

በዚህ ገጽ ስር፣ በላይ ባለው **Add Domain** ቁልፍ ላይ ጠቅ በማድረግ፣ የ**custom domain name**፣ የcustom domain name ሊተገበሩበት የሚፈልጉት **subsite** እና እንደ **primary domain** ስም ማዘጋጀት ይፈልጋሉ ወይስ አለማድረግ የሚለውን መወሰን የሚችል የሞዳል መስኮት ይከፈታል። (ማስታወሱ፡ **በአንድ subsite ላይ ብዙ የዶሜን ስም ማዛመድ ይችላሉ**።)

![Add Domain modal with domain name, site picker and primary domain toggle](/img/admin/domain-add-modal.png)

ሁሉም መረጃ ከገቡ በኋላ፣ በታች ባለው **Add Existing Domain** ቁልፍ ላይ መጫን ይችላሉ።

ይህ የcustom domain ስም የDNS መረጃ የማረጋገጥ እና የመቅሰም ሂደትን ይጀምራል። በተጨማሪም፣ ሂደቱ ምን እያደረገ እንደሆነ እንዲከታተሉ በገጹ ግርጌ ላይ መዝገብ (log) ያያሉ። ይህ ሂደት ለማጠናቀቅ ጥቂት ደቂቃዎችን ሊወስድ ይችላል።

ሁሉም ነገር በትክክል ከተዘጋጀ፣ **Stage** ወይም ሁኔታ ከ**Checking DNS** ወደ **Ready** መቀየር አለበት።

![Domain row showing the Checking DNS stage in the domains list](/img/admin/domain-stage-checking.png)

![Domain row showing the Ready stage with the green status indicator](/img/admin/domain-stage-ready.png)

በየዶሜን ስም ላይ ጠቅ ካደረጉ፣ በውስጡ ያሉ አንዳንድ አማራጮችን ማየት ይችላሉ። በፍጥነት እንመልከታቸው፦

![Domain detail page with stage, site, active, primary and SSL toggles](/img/admin/domain-edit.png)

**Stage:** ይህ የዶሜኑ ያለበት ደረጃ ነው። ዶሜኑን ለመጀመሪያ ጊዜ ሲጨምሩ፣ ምናልባት በ**Checking DNS** ደረጃ ላይ ይሆናል። ሂደቱ የDNS መረጃዎችን ይፈትሻል እና ትክክል መሆናቸውን ያረጋግጣል። ከዚያም፣ ዶሜኑ በ**Checking SSL** ደረጃ ላይ ይገባል። Ultimate Multisite ዶሜኑ SSL ካለው ወይስ ባይኖረው ይፈትሻል እና የዶሜኑን ስም እንደ **Ready** ወይም **Ready (without SSL)** ይመድባል።

**Site:** ከዚህ ዶሜን ጋር የተያያዘው subdomain ነው። የተዛመደው ዶሜን የዚህ የተወሰነ ድረ-ገጽ ይዘትን ያሳያል።

**Active:** ዶሜኑን ለማንቃት ወይም ለማጥፋት ይህንን አማራጭ መጫን ወይም ማጥፋት ይችላሉ።

**Is Primary Domain?:** ደንበኞችዎ ለእያንዳንዱ ድረ-ገጽ ከአንድ በላይ የዶሜን ስም ሊኖራቸው ይችላል። ይህንን አማራጭ በመጠቀም ይህ ለተወሰነ ድረ-ገጽ ዋናው ዶሜን መሆኑን መምረጥ ይችላሉ።

**Is Secure?:** Ultimate Multisite ዶሜኑ SSL ሰርተፍኬት ካለው ወይስ ባይኖረው ከመፍቀዱ በፊት ቢፈትሽም፣ ዶሜኑን በSSL ሰርተፍኬት ወይም ያለበት ሁኔታ በእጅ መጫን ይችላሉ። ማስታወሱ፡ ድረ-ገጹ SSL ሰርተፍኬት ባይኖረው እና በSSL ለመጫን ቢሞክሩ፣ ስህተቶችን ሊሰጥዎ ይችላል።

### የዶሜን ስም እንደ Subsite ተጠቃሚ ማዛመድ

የsubsite አስተዳዳሪዎች የራሳቸውን ዶሜን ስም ከsubsite አስተዳዳሪ ዳሽቦርድ ሊያዛምዱ ይችላሉ።

በመጀመሪያ፣ ይህንን አማራጭ በ**Domain mapping** ቅንብሮች ውስጥ ማብራት ያስፈልግዎታል። ከታች ያለውን ስክሪንሾት ይመልከቱ።

![Domain mapping settings allowing subsite users to map domains via Customer DNS Management toggle](/img/config/domain-mapping-customer-dns.png)

ይህንን አማራጭ በ**Ultimate Multisite > Products** ላይ ባለው **Plan** ደረጃ ወይም የምርት አማራጮች ስር ማዘጋጀት ወይም ማዋቀር ይችላሉ።

![Custom Domains section on the product edit page](/img/config/product-custom-domains.png)

ከእነዚህ አማራጮች ውስጥ አንዱ ቢበራ እና የsubsite ተጠቃሚ የራሳቸውን ዶሜን ስም እንዲያዛምድ ከተፈቀደላቸው፣ የsubsite ተጠቃሚ በ**Account** ገጽ ስር **Domains** የሚል ሜታቦክ (metabox) ያያል።

![Domains metabox on the subsite Account page with Add Domain button](/img/account-page/domains-metabox.png)

ተጠቃሚው በ**Add Domain** ቁልፍ ላይ ጠቅ ማድረግ ይችላል እና አንዳንድ መመሪያዎች ባሉበት የሞዳል መስኮት ይከፈታል።

![Add Domain modal showing DNS A-record instructions for subsite users](/img/account-page/domain-add-instructions.png)

ተጠቃሚው ከዚያ **Next Step** ላይ ጠቅ በማድረግ የcustom domain ስም ለመጨመር ይቀጥላል። ዋናው ዶሜን መሆኑን ወይስ አለመሆኑን መምረጥም ይችላል።

![Add Domain form with custom domain name field and primary domain toggle](/img/account-page/domain-add-form.png)

![Add Domain confirmation step that triggers DNS verification](/img/account-page/domain-add-confirm.png)

በ**Add Domain** ላይ ጠቅ ማድረግ የcustom domain ስም የDNS መረጃ የማረጋገጥ እና የመቅሰም ሂደትን ይጀምራል።

### ስለ Domain Syncing

የዶሜን ሲንክ (Domain Syncing) ማለት የዶሜን ማዛመድ እንዲሰራ፣ Ultimate Multisite የcustom domain ስም ወደ የሆስቲንግ አካውንትዎ እንደ ተጨማሪ ዶሜን (add-on domain) የሚያambahkanበት ሂደት ነው።

የሆስቲንግ ሰሪዎ ከUltimate Multisite የዶሜን ማዛመድ ባህሪ ጋር ውህደት (integration) ካለው፣ የዶሜን ሲንክ በራስ-ሰር ይከሰታል። በአሁኑ ጊዜ እነዚህ የሆስቲንግ ሰሪዎች _Runcloud, Closte, WP Engine, Gridpane, WPMU Dev, Cloudways,_ እና _Cpanel_ ናቸው።

ይህንን ውህደት በUltimate Multisite settings ስር ባለው **Integration** ታብ ውስጥ ማብራት ያስፈልግዎታል።

![Integrations tab in Ultimate Multisite settings showing hosting providers](/img/config/integrations-tab.png)

![Hosting provider Configuration links on the Integrations settings tab](/img/config/integrations-providers.png)

_ማስታወሱ፡ የሆስቲንግ ሰሪዎ ከላይ ከተጠቀሱት ሰሪዎች አንዱ ካልሆነ፣**የዶሜን ስሙን በእጅ መመሳሰል (manually sync) ወይም ወደ የሆስቲንግ አካውንትዎ መጨመር ያስፈልግዎታል**።_
