---
title: የጣቢያ ዝርዝር ክህሎት
sidebar_position: 18
_i18n_hash: 7470e8d04c1f380b3dca6ba5559b34f5
---
# የጣቢያ ዝርዝር መግለጫ ክህሎት (Site Specification Skill)

**የጣቢያ ዝርዝር መግለጫ ክህሎት** የጣቢያዎን ግቦች፣ ተመልካቾች እና የምርት ስም ማንነት ለመያዝ የሚያስችል መዋቅራዊ አካሄድ ነው። ይህ መረጃ በ**site_brief** ማህደረ ትውስታዎ ውስጥ ይቀመጣል፤ ይህ ደግሞ አግነዋሚዎች (agents) በየجلسቶቹ ውስጥ ወጥነት ያለው እና ሁኔታን የሚያገናዝ የድጋፍ አገልግሎት ለመስጠት የሚያ้างብሩበት ነው።

## የጣቢያ ዝርዝር መግለጫ ምንድን ነው?

የጣቢያ ዝርዝር መግለጫ ማለት የሚከተሉትን መመዝገብ ሂደት ነው፦

- **የጣቢያ ዓላማ (Site purpose)**: ጣቢያዎ ምን እንደሚያደርግ እና ለምን እንደተቋቋመ
- **የታለመ ተመልካች (Target audience)**: ጣቢያዎ ማን እንደሚጎበኘው እና ምን እንደሚያስፈልጋቸው
- **የምርት ስም ማንነት (Brand identity)**: የእርስዎ ቀለሞች፣ ድምጽ እና የእይታ ዘይቤ
- **የንግድ ግቦች (Business goals)**: ለጣቢያዎ ስኬት ምን መምሰል እንዳለበት
- **የይዘት አወቃቀር (Content structure)**: ጣቢያዎ እንዴት እንደተደራጀ

ይህ ዝርዝር መግለጫ የእርስዎ **site_brief** ይሆናል፤ ይህም አግነዋሚዎች የጣቢያዎን ሁኔታ ለመረዳት የሚጠቀሙበት ዘላቂ ማህደረ ትውስታ ነው።

## የጣቢያ ዝርዝር መግለጫን ለምን መጠቀም አለብኝ?

### በየجلسቶቹ ውስጥ ወጥነት (Consistency Across Sessions)

site_brief ከሌለ፣ አዲስ ስራ ስጀምሩ የጣቢያዎን ዓላማ በየጊዜው እንደገና ማስረዳት ይኖርብዎታል። site_brief ሲኖር ግን፣ አግነዋሚዎች ወዲያውኑ ይረዳሉ፦

- የጣቢያዎ ግቦች እና ተመልካቾች
- የእርስዎ የምርት ስም ቀለሞች እና ድምጽ
- የይዘት አወቃቀርዎ
- የንግድ ዓላማዎችዎ

### የተሻሉ ምክሮች (Better Recommendations)

አግነዋሚዎች የsite_briefዎን በመጠቀም የሚከተሉትን ያደርጋሉ፦

- ከየጣቢያዎ ዓላማ ጋር የተጣጣሙ ባህሪያትን ይጠቁማሉ
- ከግቦችዎ ጋር የሚሄዱ የይዘት አወቃቀሮችን ይመክራሉ
- ከምርት ስምዎ ጋር የሚጣጣሙ ዲዛይኖችን ያቀርባሉ
- የማይጣጣሙ ባህሪያትን ከመጠቆም ይቆጠባሉ

### ፈጣን መማር (Faster Onboarding)

አዳዲስ አግነዋሚዎች (ወይም በአዲስ ክፍለ ጊዜ ውስጥ ያሉ አግነዋሚዎች) የሚያብራሩ ጥያቄዎችን ከመጠየቅ ይልቅ የsite_briefዎን በማንበብ በፍጥነት ይማራሉ።

## የጣቢያ ዝርዝር መግለጫን መጀመር (Initiating Site Specification)

### በTheme Builder Onboarding ወቅት

የጣቢያ ዝርዝር መግለጫ ክህሎት በ**Theme Builder onboarding flow** ወቅት በራስ-ሰር ይጀምራል። Setup Assistant agent ጥያቄዎችን ይጠይቃል እና የsite_briefዎን ይገነባል።

### በእጅ መጀመር (Manual Initiation)

በማንኛውም ጊዜ የጣቢያ ዝርዝር መግለጫን መጀመር ይችላሉ፦

```
"Let's define my site specification"
```

ወይም

```
"Help me create a site brief"
```

## የጣቢያ ዝርዝር መግለጫው ሂደት (The Site Specification Process)

### ደረጃ 1: የጣቢያ ዓላማ (Site Purpose)

አግነዋሚው ይጠይቃል፦

```
የጣቢያዎ ዋና ዓላማ ምንድነው?
- የኢ-ኮሜርስ መደብር (E-commerce store)
- ብሎግ ወይም የይዘት ጣቢያ (Blog or content site)
- የፖርትፎሊዮ ወይም የማሳያ ቦታ (Portfolio or showcase)
- SaaS መተግበሪያ (SaaS application)
- ማህበረሰብ ወይም መድረክ (Community or forum)
- ሌላ: [ይገልጹ]
```

የምድብ መምረጥ ወይም የራስዎን ዓላማ መግለጽ ይችላሉ።

### ደረጃ 2: የታለመ ተመልካች (Target Audience)

```
ዋና ተመልካችዎ ማን ነው?
- ሸማቾች / አጠቃላይ ህዝብ (Consumers / general public)
- የንግድ ባለሙያዎች (Business professionals)
- ገንቢዎች / ቴክኒካዊ ተጠቃሚዎች (Developers / technical users)
- ተማሪዎች / አስተማሪዎች (Students / educators)
- ሌላ: [ይገልጹ]

ዋና ፍላጎቶቻቸው ምንድናቸው?
```

### ደረጃ 3: የምርት ስም ማንነት (Brand Identity)

```
የምርት ስምዎ ቀለሞች ምን ምን ናቸው?
- ዋና ቀለም (Primary color): [color picker or hex code]
- ሁለተኛ ቀለም (Secondary color): [color picker or hex code]
- አጽንዖት ቀለም (Accent color): [አማራጭ]

የምርት ስምዎን እንዴት ይገልጹታል?
- ሙያዊ / የኮርፖሬት (Professional / corporate)
- ፈጠራ / ጥበባዊ (Creative / artistic)
- ተጫዋት / ዘና ያለ (Playful / casual)
- አነስተኛ / ዘመናዊ (Minimal / modern)
- ሞቅ ያለ / ወዳጃዊ (Warm / friendly)
```

### ደረጃ 4: የንግድ ግቦች (Business Goals)

```
ለጣቢያዎ ስኬት ምን መምሰል አለበት?
- የሊድ መፍጠር (Generate leads)
- ምርቶችን መሸጥ (Sell products)
- ማህበረሰብ መገንባት (Build community)
- እውቀትን መጋራት (Share knowledge)
- ስልጣን መመሥረት (Establish authority)
- ሌላ: [ይገልጹ]

ዋናው መለኪያዎ ምንድነው?
- ገቢ (Revenue)
- የተጠቃሚ ተሳትፎ (User engagement)
- የይዘት ተደራሽነት (Content reach)
- የለውጥ መጠን (Conversions)
- ሌላ
```

### ደረጃ 5: የይዘት አወቃቀር (Content Structure)

```
ይዘትዎ እንዴት ተደራጅቷል?
- ጠፍጣፋ (Flat) (ሁሉም ይዘት በአንድ ደረጃ)
- ተዋረድ ያለው (Hierarchical) (ምድቦች እና ንዑስ ምድቦች)
- በጊዜ ቅደም ተከተል (Chronological) (የብሎግ ዘይቤ)
- ምርት ላይ የተመሠረተ (Product-based) (ካታሎግ)
- ሌላ: [ይገልጹ]

ምን ዓይነት የይዘት አይነቶችን ይጠቀማሉ?
- የብሎግ ልጥፎች (Blog posts)
- የምርት ገጾች (Product pages)
- የጉዳይ ጥናቶች (Case studies)
- ሰነዶች (Documentation)
- ቪዲዮዎች (Videos)
- ሌላ
```

## የsite_brief ማህደረ ትውስታዎ (Your site_brief Memory)

የጣቢያ ዝርዝር መግለጫን ከጨረሱ በኋላ፣ መረጃዎ በagent ማህደረ ትውስታዎ ውስጥ እንደ **site_brief** ይቀመጣል። ይህ መዋቅራዊ መዝገብ የሚከተሉትን ይይዛል፦

```json
{
  "site_purpose": "የበየእጅ የተሠሩ ጌጣጌጦች የኢ-ኮሜርስ መደብር",
  "target_audience": "በዘላቂ ፋሽን ፍላጎት ባላቸው የ25-45 ዓመት ሴቶች",
  "brand_colors": {
    "primary": "#8B4513",
    "secondary": "#D2B48C",
    "accent": "#2F4F4F"
  },
  "brand_tone": "ሞቅ ያለ፣ የእጅ ጥበብ፣ ዘላቂ",
  "business_goals": ["ሽያጭ መፍጠር", "የብራንድ ታማኝነት መገንባት"],
  "primary_metric": "ገቢ",
  "content_structure": "በብሎግ የታጀበ የምርት ካታሎግ",
  "content_types": ["የምርት ገጾች", "የብሎግ ልጥፎች", "የደንበኛ ታሪኮች"]
}
```

## የsite_briefዎን መመልከት እና ማዘመን (Viewing and Updating Your site_brief)

### የsite_briefዎን መመልከት

አግነዋሚውን ይጠይቁ፦

```
"Show me my site brief"
```

ወይም

```
"What do you know about my site?"
```

አግነዋሚው የተቀመጠውን ዝርዝር መግለጫዎን ያሳያል።

### የsite_briefዎን ማዘመን

ጣቢያዎ ከተሻሻለ፣ እርስዎ ሊያዘምኑት ይችላሉ፦

```
"Update my site brief: we're now targeting B2B customers"
```

ወይም

```
"Refresh my site specification"
```

ይህ የsite_briefዎን ቀደምት መረጃ እንደ መነሻ በመጠቀም የጣቢያ ዝርዝር መግለጫ ክህሎቱን እንደገና ያከናውናል።

## አግነዋሚዎች site_briefን እንዴት ይጠቀማሉ (How Agents Use site_brief)

### የዲዛይን ምክሮች (Design Recommendations)

የዲዛይን ለውጦችን ሲጠይቁ፣ አግነዋሚዎች የsite_briefዎን ያ้างብራሉ፦

```
እርስዎ: "የዋና ገጽዬን እንደገና ዲዛይን አድርገውልኝ"
አግነዋሚ: "በsite briefዎ መሰረት፣ የ25-45 ዓመት ሴቶችን፣ ሞቅ ያለ እና የእጅ ጥበብ ስሜት ባላቸው ተመልካቾች ላይ ያተኮረ ነው። የእጅ የተሠሩ ጌጣጌጦችዎን እና ዘላቂ እሴቶችዎን የሚያጎላ ዲዛይን እፈጥራለሁ።"
```

### የባህሪ ምክሮች (Feature Suggestions)

አግነዋሚዎች ከግቦችዎ ጋር የተጣጣሙ ባህሪያትን ይጠቁማሉ፦

```
እርስዎ: "ምን ዓይነት ባህሪያት ልጨምርባቸው እችላለሁ?"
አግነዋሚ: "በየደንበኛ ታማኝነት ላይ ያተኮረ የኢ-ኮሜርስ መደብር ከሆነ፣ የሚከተሉትን እመክራለሁ፦ የታማኝነት ፕሮግራም፣ የደንበኛ ግምገማዎች፣ የኢሜል ኒውስሌተር እና የምርት ምክሮች።"
```

### የይዘት አወቃቀር (Content Structure)

አግነዋሚዎች በምንደራጅበት መሠረት የይዘት አደረጃጀትን ያቀርባሉ፦

```
እርስዎ: "ብሎግዬን እንዴት ማደራጀት አለብኝ?"
አግነዋሚ: "የምርት ካታሎግ እና ብሎግ ስለሚጠቀሙ፣ ልጥፎችን በምርት ምድብ መሠረት ማደራጀት እና ብዙ ምርቶችን በአንድ ላይ የሚያሳዩ 'የ스타ይሊንግ መመሪያዎችን' መፍጠር እመክራለሁ።"
```

## ምርጥ አሠራሮች (Best Practices)

### የተለዩ ይሁኑ (Be Specific)

ከ "አጠቃላይ ተመልካች" ይልቅ፣ እውነተኛ ተመልካቾችዎን ይግለጹ፦

- ✓ "በዘላቂ ፋሽን ፍላጎት ባላቸው የ25-45 ዓመት ሴቶች"
- ✗ "ሁሉም ሰው"

### በመደበኛነት ያዘምኑ (Update Regularly)

ጣቢያዎ ሲሻሻል፣ የsite_briefዎን ያዘምኑ፦

- ወደ አዲስ ተመልካች ስትቀይሩ
- አዳዲስ የምርት መስመሮችን ስትጨምሩ
- የምርት ስም ማንነትዎ ሲቀየር
- የንግድ ግቦችዎ ሲለወጡ

### ወጥ የሆኑ ቃላትን ይጠቀሙ (Use Consistent Terminology)

በየجلسቶቹ ውስጥ ተመሳሳይ ቃላትን ይጠቀሙ፦

- ✓ ሁልጊዜ "የዘላቂ ጌጣጌጥ" ይበሉ (በምትኩ "የአካባቢ ጥበቃ ተስማሚ ጌጣጌጥ" እና "አረንጓዴ ምርቶች" አይበሉ)
- ✓ ተመልካቾችዎን በተመሳሳይ መንገድ መጥቀስ።

### ሁኔታን ያካትቱ (Include Context)

አግነዋሚዎች ውሳኔዎትን እንዲረዱ የሚያግዝ ዳራ ይስጡ፦

- "ከዋጋ ይልቅ ጥራትን የሚያደንቁ ባለሙያዎችን እናነጣጠረናል"
- "ተመልካቾቻችን በቴክኖሎጂ የተደገፉ እና ዘመናዊ ዲዛይን የሚጠብቁ ናቸው"
- "እኛ የራሳችንን ገንዘብ የምንጠቀሙ አዲስ ስራ ነን፣ ስለዚህ ወጪ ቆጣቢ መፍትሄዎች ያስፈልጉናል"

## ከTheme Builder Onboarding ጋር ያለው ግንኙነት (Relationship to Theme Builder Onboarding)

የጣቢያ ዝርዝር መግለጫ ክህሎት በ**Theme Builder onboarding flow** ውስጥ ተዋህዷል። Onboarding ሲጨርሱ፣ የሰጡትን መረጃ በመጠቀም የsite_briefዎ በራስ-ሰር ይፈጠራል።

እንዲሁም በፈለጉ ጊዜ የጣቢያ ዝርዝር መግለጫን በነጻነት ማስኬድ ይችላሉ፦

- የመጀመሪያ ዝግጅት ከተደረገ በኋላ ዝርዝር መግለጫዎን ለማጣራት
- ጣቢያዎ ሲሻሻል የsite_briefዎን ለማዘመን
- Theme Builder ከመጀመርዎ በፊት ዝርዝር መግለጫ ለመፍጠር

## ችግር መፍታት (Troubleshooting)

**site_brief አልተጠቀመም**
- አግነዋሚው የማህደረ ትውስታ መዳረሻ እንዳለው ያረጋግጡ
- አግነዋሚውን "my site brief ን አስታውሱልኝ" ብለው ይጠይቁ
- ማህደረ ትውስታ በቅንብሮችዎ ውስጥ መብ开ልን (enabled) መሆኑን ያረጋግጡ

**በአዲስ site_brief ከባዶ መጀመር እፈልጋለሁ**
- አግነዋሚውን ይጠይቁ፦ "Clear my site brief and start fresh"
- ከዚያ የጣቢያ ዝርዝር መግለጫን እንደገና ያሂዱ

**አግነዋሚው ከsite_briefዬ ጋር የማይጣጣሙ ምክሮችን እያቀረበ ነው**
- አግነዋሚውን "review my site brief" ብለው ይጠይቁ
- የsite_briefዎ ጊዜ ያለፈበት ከሆነ ያዘምኑት
- በጥያቄዎችዎ ውስጥ ተጨማሪ ሁኔታን ይስጡ

## ቀጣይ እርምጃዎች (Next Steps)

የጣቢያ ዝርዝር መግለጫዎን ከገለጹ በኋላ፦

1. **Theme Builder ይጠቀሙ**: በsite_briefዎ ላይ ተመስርተው የቅንጥብ ጭብጥ (custom theme) ይፍጠሩ
2. **ዲዛይን ያጥብቁ**: ለዝርዝር ዲዛይን ስራ የDesign System Aesthetics skill ይጠቀሙ
3. **ይዘትን ያቅዱ**: የይዘት አወቃቀር ምክሮችን ለማግኘት አግነዋሚዎችን ይጠይቁ
4. **ባህሪያትን ይገንቡ**: ከየንግድ ግቦችዎ ጋር የተጣጣሙ ባህሪያትን ይጠይቁ
