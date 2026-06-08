---
title: Ultimate Multisiteን መጫን
sidebar_position: 12
_i18n_hash: dda8f0d2b67bc421c0a484c76c8eae6d
---
# Ultimate Multisite መጫን

:::note
ይህ መመሪያ የ WordPress Multisite ቀድሞውንም ተጭኖና ተዋቅሮ መሆኑን ያስባል። እንዴት እንደሚሰራ ለማወቅ፣ በWP Beginner የቀረበውን [ይህንን መመሪያ](https://www.wpbeginner.com/glossary/multisite/) ይመልከቱ።
:::

## ፕልጊኑን መጫን

Ultimate Multisite በ[WordPress.org](https://wordpress.org/plugins/ultimate-multisite/) ላይ በነጻ ይገኛል።

ከ**Network Admin Dashboard**ዎ፣ ወደ **Plugins → Add New Plugin** ይሂዱ።

![Network Admin Add New Plugin page](/img/installation/add-new-plugin.png)

**"Ultimate Multisite"** (ትክክለኛ ፍለጋ ለማድረግ በቅንፍ ውስጥ) ይፈልጉና እንደ የመጀመሪያው ውጤት ይታያል። **Install Now** የሚለውን ይጫኑ።

![Search results showing Ultimate Multisite](/img/installation/search-ultimate-multisite.png)

በተጫነበት ጊዜ፣ ፕልጊኑን በጠቅላላው ኔትወርክዎ ለማንቃት **Network Activate** የሚለውን ይጫኑ።

![Plugin installed with Network Activate button](/img/installation/plugin-installed.png)

ከማንቃት በኋላ፣ በSetup Wizard በራስ-ሰር ወደሚመራዎት ቦታ ይተላለፋሉ።

![Plugin activated and redirected to wizard](/img/installation/plugin-activated.png)

## Setup Wizard

Setup Wizard የ Ultimate Multisiteን እንዴት ማዋቀር እንደሚቻል በግምት በ10 ደቂቃ ውስጥ ይመራዎታል።

### እንኳን በደህና መጡ (Welcome)

ለመጀመር **Get Started** የሚለውን ይጫኑ።

![Setup Wizard welcome screen](/img/installation/wizard-welcome.png)

### ከማስቀመጥ በፊት የሚደረጉ ፍተሻዎች (Pre-install Checks)

ይህ ደረጃ ሲስተም መረጃዎን እና የ WordPress ጭነትዎን ይፈትሻል፣ Ultimate Multisite የሚያስፈልጉትን መስፈርቶች የሚያሟላ መሆኑን ለማረጋገጥ። ሁሉም ነገር ጥሩ ከሆነ፣ **Go to the Next Step** የሚለውን ይጫኑ።

![Pre-install checks showing system requirements](/img/installation/wizard-pre-install-checks.png)

:::note Network Activate button (v2.6.1+)
Ultimate Multisite ተጭኖ ነገር ግን **በኔትወርክ አልተንቀሳቀሰም** ከሆነ — ለምሳሌ፣ ከኔትወርክ ፕልጊን ስክሪን ላይ **Network Activate** ከመጫን ይልቅ **Activate** (በአንድ ድረ-ገጽ) ከጫኑ — የPre-install Checks ደረጃ ይህንን ይገነዘባል እና **Network Activate** የሚል አዝራር ያሳያል።

**Network Activate** መጫን ፕልጊኑን በጠቅላላው Multisite ኔትወርክዎ በራስ-ሰር ያንቀሳቅሳል። ከተንቀሳቀሰ በኋላ፣ ዊዘርዱ ወደ መጫን ደረጃ በቅደም ተከተል ይቀጥላል። የማንቃት ሁኔታውን ለማስተካከል ዊዘርዱን መተው አያስፈልግዎትም።
:::

### መጫን (Installation)

የመጫኛው (installer) አስፈላጊ የሆኑ የዳታቤዝ ሰንጠረዦችን ይፈጥራል እንዲሁም Ultimate Multisite እንዲሰራ የሚያስፈልገውን `sunrise.php` ፋይል ይጭናል። ለመቀጠል **Install** የሚለውን ይጫኑ።

![Installation step showing database tables and sunrise.php](/img/installation/wizard-installation.png)

### ኩባንያዎ (Your Company)

የኩባንያዎን መረጃ ይሙሉ እና መደበኛ ምንዛሪዎን ያዘጋጁ። ይህ መረጃ በWaaS መድረክዎ በሙሉ ጥቅም ላይ ይውላል። ሲጨርሱ **Continue** የሚለውን ይጫኑ።

![Your Company configuration step](/img/installation/wizard-your-company.png)

### መደበኛ ይዘት (Default Content)

ይህ ደረጃ አስቀድሞ የተዘጋጁ ቴምሌቶችን፣ ምርቶችን እና ሌሎች የመነሻ ይዘቶችን እንድትጭን ያስችልዎታል። ይህ የ Ultimate Multisite ባህሪያትን ለመተዋወቅ ጥሩ መንገድ ነው። መደበኛ ይዘትን ለመጨመር **Install** የሚለውን ይጫኑ፣ ወይም ከባዶ ለመጀመር ከፈለጉ ይህን ደረጃ ዘልቀው ይሂዱ።

![Default content installation step](/img/installation/wizard-default-content.png)

### የሚመከሩ ፕልጊኖች (Recommended Plugins)

በተፈለገው መሰረት የሚመከሩ አጋር ፕልጊኖችን ይጫኑ። ለመጨመር **Install** የሚለውን ይጫኑ ወይም ለመቀጠል ዘልቀው ይሂዱ።

![Recommended plugins step](/img/installation/wizard-recommended-plugins.png)

### ተዘጋጅቷል! (Ready!)

ይኸውልዎ! የ Ultimate Multisite መጫንዎ ተጠናቅቋል። አሁን የ Website as a Service መድረክዎን ከ**Network Admin Dashboard** ጀምሮ መገንባት ይችላሉ።

![Setup complete - Ready screen](/img/installation/wizard-ready.png)

![Network Admin Dashboard with Ultimate Multisite active](/img/installation/network-dashboard.png)

በመዝናናት ይጀምሩ!
