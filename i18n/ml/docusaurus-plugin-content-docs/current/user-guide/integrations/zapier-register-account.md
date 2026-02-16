---
title: Zapier വഴി ഒരു അക്കൗണ്ട് രജിസ്റ്റർ ചെയ്യുക
sidebar_position: 1
_i18n_hash: e769e5eddf428f2eac478f5b8cd4592d
---
# ഇവന്റ്: Zapier വഴി ഒരു അക്കൗണ്ട് രജിസ്റ്റർ ചെയ്യുക

[Zapier-മായി Ultimate Multisite സംയോജിപ്പിക്കുന്നത്](zapier.md) എന്ന ലേഖനത്തിൽ, ട്രിഗറുകളും ഇവന്റുകളും അടിസ്ഥാനമാക്കി Ultimate Multisite-ൽ വിവിധ പ്രവർത്തനങ്ങൾ നടത്താൻ Zapier എങ്ങനെ ഉപയോഗിക്കാമെന്ന് നാം ചർച്ച ചെയ്തു. ഈ ലേഖനത്തിൽ, 3rd party ആപ്ലിക്കേഷനുകൾ എങ്ങനെ സംയോജിപ്പിക്കാമെന്ന് നാം കാണിച്ചുതരും. ഡാറ്റയുടെ ഉറവിടമായി Google Sheets ഉപയോഗിച്ച് ഒരു അക്കൗണ്ട് രജിസ്റ്റർ ചെയ്യാൻ Ultimate Multisite-ലേക്ക് വിവരങ്ങൾ അയയ്ക്കും.

ആദ്യം, നിങ്ങളുടെ Google Drive-ൽ ഒരു **Google Sheet** സൃഷ്ടിക്കേണ്ടതുണ്ട്. പിന്നീട് ഡാറ്റ എളുപ്പത്തിൽ മാപ്പ് ചെയ്യാൻ കഴിയുന്ന വിധത്തിൽ ഓരോ കോളവും ശരിയായി നിർവചിക്കുന്നുവെന്ന് ഉറപ്പാക്കുക.

![ഉപഭോക്തൃ ഡാറ്റയ്ക്കുള്ള കോളങ്ങളുള്ള Google Sheet](/img/admin/webhooks-list.png)Google Sheet സൃഷ്ടിച്ച ശേഷം, നിങ്ങളുടെ Zapier അക്കൗണ്ടിൽ ലോഗിൻ ചെയ്ത് ഒരു zap സൃഷ്ടിക്കാൻ തുടങ്ങാം.

![ഒരു zap സൃഷ്ടിക്കാൻ തുടങ്ങുന്നതിനുള്ള Zapier ഡാഷ്ബോർഡ്](/img/admin/webhooks-list.png)**"App event"** എന്നതിനുള്ള സെർച്ച് ഫീൽഡിൽ **"Google Sheets"** തിരഞ്ഞെടുക്കുക

![App event ആയി Google Sheets തിരഞ്ഞെടുക്കുന്നു](/img/admin/webhooks-list.png)

തുടർന്ന് "**Event**" ഫീൽഡിൽ "**New spreadsheet row**" തിരഞ്ഞെടുത്ത് "**Continue**" ക്ലിക്ക് ചെയ്യുക

![Zapier-ൽ New spreadsheet row ഇവന്റ് തിരഞ്ഞെടുക്കുന്നു](/img/admin/webhooks-list.png)അടുത്ത ഘട്ടത്തിൽ **Google Sheet** സേവ് ചെയ്തിരിക്കുന്ന **Google Account** തിരഞ്ഞെടുക്കാൻ ആവശ്യപ്പെടും. അതിനാൽ ശരിയായ Google അക്കൗണ്ട് വ്യക്തമാക്കിയിട്ടുണ്ടെന്ന് ഉറപ്പാക്കുക.

![Google Sheet-നുള്ള Google Account തിരഞ്ഞെടുക്കുന്നു](/img/admin/webhooks-list.png)

"**Set up trigger**" എന്നതിന് കീഴിൽ, ഡാറ്റ എവിടെ നിന്ന് വരുമെന്ന് നിർണ്ണയിക്കുന്ന Google spreadsheet-ഉം worksheet-ഉം തിരഞ്ഞെടുത്ത് വ്യക്തമാക്കേണ്ടതുണ്ട്. അവ പൂരിപ്പിച്ച് "**Continue**" ക്ലിക്ക് ചെയ്യുക

![Spreadsheet-ഉം worksheet-ഉം തിരഞ്ഞെടുക്കുന്ന Set up trigger](/img/admin/webhooks-list.png)അടുത്തത് നിങ്ങളുടെ Google Sheet ശരിയായി കണക്റ്റ് ചെയ്തിട്ടുണ്ടെന്ന് ഉറപ്പാക്കാൻ "**test your trigger**" ആണ്.

![Zapier-ലെ Test your trigger ഘട്ടം](/img/admin/webhooks-list.png)ടെസ്റ്റ് വിജയകരമാണെങ്കിൽ, നിങ്ങളുടെ spreadsheet-ൽ നിന്നുള്ള ചില മൂല്യങ്ങൾ കാണിക്കുന്ന ഫലം കാണാം. തുടരാൻ "**Continue**" ക്ലിക്ക് ചെയ്യുക.

![Spreadsheet മൂല്യങ്ങൾ കാണിക്കുന്ന വിജയകരമായ trigger ടെസ്റ്റ്](/img/admin/webhooks-list.png)അടുത്ത ഘട്ടം Ultimate Multisite-ൽ ഒരു അക്കൗണ്ട് സൃഷ്ടിക്കുകയോ രജിസ്റ്റർ ചെയ്യുകയോ ചെയ്യുന്ന രണ്ടാമത്തെ action സജ്ജീകരിക്കുക എന്നതാണ്. സെർച്ച് ഫീൽഡിൽ "**Ultimate Multisite(2.0.2)**" തിരഞ്ഞെടുക്കുക

![Action ആപ്പായി Ultimate Multisite തിരഞ്ഞെടുക്കുന്നു](/img/admin/webhooks-list.png)

"**Event**" ഫീൽഡിന് കീഴിൽ, "**Register an Account in Ultimate Multisite**" തിരഞ്ഞെടുത്ത് "**Continue**" ബട്ടൺ ക്ലിക്ക് ചെയ്യുക.

![Register an Account in Ultimate Multisite action event](/img/admin/webhooks-list.png)"**Set up an action**" എന്നതിന് കീഴിൽ, ഉപഭോക്തൃ ഡാറ്റ, memberships, products മുതലായവയ്ക്കുള്ള വിവിധ ഫീൽഡുകൾ കാണാം. താഴെയുള്ള സ്ക്രീൻഷോട്ടിൽ കാണിച്ചിരിക്കുന്നതുപോലെ നിങ്ങളുടെ Google Sheet-ലെ മൂല്യങ്ങൾ മാപ്പ് ചെയ്ത് അവ പോപ്പുലേറ്റ് ചെയ്യേണ്ട ശരിയായ ഫീൽഡിലേക്ക് അസൈൻ ചെയ്യാം.

![Google Sheet മൂല്യങ്ങൾ Ultimate Multisite ഫീൽഡുകളിലേക്ക് മാപ്പ് ചെയ്യുന്നു](/img/admin/webhooks-list.png)

മൂല്യങ്ങൾ മാപ്പ് ചെയ്ത ശേഷം, action ടെസ്റ്റ് ചെയ്യാം.

![Register account Zapier action ടെസ്റ്റ് ചെയ്യുന്നു](/img/admin/webhooks-list.png)
