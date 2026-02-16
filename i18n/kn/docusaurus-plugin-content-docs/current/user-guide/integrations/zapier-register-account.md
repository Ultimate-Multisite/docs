---
title: Zapier ಮೂಲಕ ಖಾತೆಯನ್ನು ನೋಂದಾಯಿಸಿ
sidebar_position: 1
_i18n_hash: e769e5eddf428f2eac478f5b8cd4592d
---
# ಈವೆಂಟ್: Zapier ಮೂಲಕ ಖಾತೆ ನೋಂದಣಿ

[Zapier ಜೊತೆ Ultimate Multisite ಅನ್ನು ಸಂಯೋಜಿಸುವುದು](zapier.md) ಎಂಬ ಲೇಖನದಲ್ಲಿ, ಟ್ರಿಗ್ಗರ್‌ಗಳು ಮತ್ತು ಈವೆಂಟ್‌ಗಳ ಆಧಾರದ ಮೇಲೆ Ultimate Multisite ನಲ್ಲಿ ವಿವಿಧ ಕ್ರಿಯೆಗಳನ್ನು ನಿರ್ವಹಿಸಲು Zapier ಅನ್ನು ಹೇಗೆ ಬಳಸುವುದು ಎಂದು ನಾವು ಚರ್ಚಿಸಿದ್ದೇವೆ. ಈ ಲೇಖನದಲ್ಲಿ, ಮೂರನೇ ವ್ಯಕ್ತಿಯ ಅಪ್ಲಿಕೇಶನ್‌ಗಳನ್ನು ಹೇಗೆ ಸಂಯೋಜಿಸಬಹುದು ಎಂದು ತೋರಿಸುತ್ತೇವೆ. ನಾವು Google Sheets ಅನ್ನು ಡೇಟಾದ ಮೂಲವಾಗಿ ಬಳಸಿ, ಖಾತೆ ನೋಂದಣಿ ಮಾಡಲು ಆ ಮಾಹಿತಿಯನ್ನು Ultimate Multisite ಗೆ ಕಳುಹಿಸುತ್ತೇವೆ.

ಮೊದಲು, ನಿಮ್ಮ Google Drive ನಲ್ಲಿ **Google Sheet** ಒಂದನ್ನು ರಚಿಸಬೇಕು. ಪ್ರತಿ ಕಾಲಮ್ ಅನ್ನು ಸರಿಯಾಗಿ ವ್ಯಾಖ್ಯಾನಿಸಿ, ಆಗ ನಂತರ ಡೇಟಾವನ್ನು ಮ್ಯಾಪ್ ಮಾಡುವುದು ಸುಲಭವಾಗುತ್ತದೆ.

![ಗ್ರಾಹಕ ಡೇಟಾಗಾಗಿ ಕಾಲಮ್‌ಗಳಿರುವ Google Sheet](/img/admin/webhooks-list.png)Google Sheet ರಚಿಸಿದ ನಂತರ, ನಿಮ್ಮ Zapier ಖಾತೆಗೆ ಲಾಗಿನ್ ಆಗಿ zap ರಚಿಸಲು ಪ್ರಾರಂಭಿಸಬಹುದು.

![Zap ರಚಿಸಲು Zapier ಡ್ಯಾಶ್‌ಬೋರ್ಡ್](/img/admin/webhooks-list.png)**"App event"** ಗಾಗಿ ಹುಡುಕಾಟ ಕ್ಷೇತ್ರದಲ್ಲಿ **"Google Sheets"** ಆಯ್ಕೆ ಮಾಡಿ

![App event ಆಗಿ Google Sheets ಆಯ್ಕೆ ಮಾಡುವುದು](/img/admin/webhooks-list.png)

ನಂತರ "**Event**" ಕ್ಷೇತ್ರಕ್ಕೆ "**New spreadsheet row**" ಆಯ್ಕೆ ಮಾಡಿ "**Continue**" ಒತ್ತಿ

![Zapier ನಲ್ಲಿ New spreadsheet row event ಆಯ್ಕೆ ಮಾಡುವುದು](/img/admin/webhooks-list.png)ಮುಂದಿನ ಹಂತದಲ್ಲಿ **Google Sheet** ಉಳಿಸಿರುವ **Google Account** ಆಯ್ಕೆ ಮಾಡಲು ಕೇಳಲಾಗುತ್ತದೆ. ಸರಿಯಾದ google account ಆಯ್ಕೆಯಾಗಿದೆ ಎಂದು ಖಚಿತಪಡಿಸಿಕೊಳ್ಳಿ.

![Google Sheet ಗಾಗಿ Google Account ಆಯ್ಕೆ ಮಾಡುವುದು](/img/admin/webhooks-list.png)

"**Set up trigger**" ಅಡಿಯಲ್ಲಿ, ಡೇಟಾ ಬರುವ google spreadsheet ಮತ್ತು worksheet ಅನ್ನು ಆಯ್ಕೆ ಮಾಡಿ ನಿರ್ದಿಷ್ಟಪಡಿಸಬೇಕು. ಅವುಗಳನ್ನು ಭರ್ತಿ ಮಾಡಿ "**Continue**" ಒತ್ತಿ

![Spreadsheet ಮತ್ತು worksheet ಆಯ್ಕೆಯೊಂದಿಗೆ trigger ಸೆಟಪ್](/img/admin/webhooks-list.png)ಮುಂದಿನದು ನಿಮ್ಮ google sheet ಸರಿಯಾಗಿ ಸಂಪರ್ಕಗೊಂಡಿದೆಯೇ ಎಂದು ಖಚಿತಪಡಿಸಲು "**test your trigger**" ಆಗಿದೆ.

![Zapier ನಲ್ಲಿ Test your trigger ಹಂತ](/img/admin/webhooks-list.png)ನಿಮ್ಮ ಪರೀಕ್ಷೆ ಯಶಸ್ವಿಯಾದರೆ, ನಿಮ್ಮ spreadsheet ನಿಂದ ಕೆಲವು ಮೌಲ್ಯಗಳನ್ನು ತೋರಿಸುವ ಫಲಿತಾಂಶ ಕಾಣಿಸುತ್ತದೆ. ಮುಂದುವರಿಯಲು "**Continue**" ಕ್ಲಿಕ್ ಮಾಡಿ.

![Spreadsheet ಮೌಲ್ಯಗಳನ್ನು ತೋರಿಸುವ ಯಶಸ್ವಿ trigger ಪರೀಕ್ಷೆ](/img/admin/webhooks-list.png)ಮುಂದಿನ ಹಂತವೆಂದರೆ Ultimate Multisite ನಲ್ಲಿ ಖಾತೆ ರಚಿಸುವ ಅಥವಾ ನೋಂದಾಯಿಸುವ ಎರಡನೇ action ಸೆಟಪ್ ಮಾಡುವುದು. ಹುಡುಕಾಟ ಕ್ಷೇತ್ರದಲ್ಲಿ "**Ultimate Multisite(2.0.2)**" ಆಯ್ಕೆ ಮಾಡಿ

![Action app ಆಗಿ Ultimate Multisite ಆಯ್ಕೆ ಮಾಡುವುದು](/img/admin/webhooks-list.png)

"**Event**" ಕ್ಷೇತ್ರದ ಅಡಿಯಲ್ಲಿ, "**Register an Account in Ultimate Multisite**" ಆಯ್ಕೆ ಮಾಡಿ ನಂತರ "**Continue**" ಬಟನ್ ಕ್ಲಿಕ್ ಮಾಡಿ.

![Ultimate Multisite ನಲ್ಲಿ ಖಾತೆ ನೋಂದಾಯಿಸುವ action event](/img/admin/webhooks-list.png)"**Set up an action**" ಅಡಿಯಲ್ಲಿ, ಗ್ರಾಹಕ ಡೇಟಾ, ಸದಸ್ಯತ್ವಗಳು, ಉತ್ಪನ್ನಗಳು ಇತ್ಯಾದಿಗಳಿಗೆ ವಿವಿಧ ಕ್ಷೇತ್ರಗಳು ಲಭ್ಯವಿರುತ್ತವೆ. ನಿಮ್ಮ google sheet ನಲ್ಲಿರುವ ಮೌಲ್ಯಗಳನ್ನು ಮ್ಯಾಪ್ ಮಾಡಿ, ಕೆಳಗಿನ ಸ್ಕ್ರೀನ್‌ಶಾಟ್‌ನಲ್ಲಿ ತೋರಿಸಿದಂತೆ ಅವು ಭರ್ತಿಯಾಗಬೇಕಾದ ಸರಿಯಾದ ಕ್ಷೇತ್ರಕ್ಕೆ ನಿಯೋಜಿಸಬಹುದು.

![Google Sheet ಮೌಲ್ಯಗಳನ್ನು Ultimate Multisite ಕ್ಷೇತ್ರಗಳಿಗೆ ಮ್ಯಾಪಿಂಗ್ ಮಾಡುವುದು](/img/admin/webhooks-list.png)

ಮೌಲ್ಯಗಳನ್ನು ಮ್ಯಾಪ್ ಮಾಡಿದ ನಂತರ, action ಅನ್ನು ಪರೀಕ್ಷಿಸಬಹುದು.

![Register account Zapier action ಪರೀಕ್ಷಿಸುವುದು](/img/admin/webhooks-list.png)
