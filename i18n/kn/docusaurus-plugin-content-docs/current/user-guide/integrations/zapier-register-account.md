---
title: Zapier ಮೂಲಕ Account ನೋಂದಾಯಿಸಿ
sidebar_position: 1
_i18n_hash: f452b2407a1eee1d88505abe1cff8f9e
---
# ಈವೆಂಟ್: Zapier ಮೂಲಕ Account ನೋಂದಾಯಿಸಿ {#event-register-an-account-via-zapier}

[Ultimate Multisite ಅನ್ನು Zapier ಜೊತೆಗೆ ಸಂಯೋಜಿಸುವುದು](zapier.md) ಲೇಖನದಲ್ಲಿ, triggers ಮತ್ತು events ಆಧರಿಸಿ Ultimate Multisite ಒಳಗೆ ವಿಭಿನ್ನ ಕ್ರಿಯೆಗಳನ್ನು ಮಾಡಲು Zapier ಅನ್ನು ಹೇಗೆ ಬಳಸುವುದು ಎಂದು ನಾವು ಚರ್ಚಿಸಿದ್ದೇವೆ. ಈ ಲೇಖನದಲ್ಲಿ, 3rd party ಅನ್ವಯಿಕೆಗಳನ್ನು ನೀವು ಹೇಗೆ ಸಂಯೋಜಿಸಬಹುದು ಎಂಬುದನ್ನು ತೋರಿಸುತ್ತೇವೆ. ನಾವು Google Sheets ಅನ್ನು ಡೇಟಾದ ಮೂಲವಾಗಿ ಬಳಸುತ್ತೇವೆ ಮತ್ತು Account ನೋಂದಾಯಿಸಲು ಮಾಹಿತಿಯನ್ನು Ultimate Multisite ಗೆ ಕಳುಹಿಸುತ್ತೇವೆ.

Zapier ಸಂಪರ್ಕಿಸುವ ಮೊದಲು, **Ultimate Multisite > Settings > API & Webhooks** ಗೆ ಹೋಗಿ API ಸಕ್ರಿಯವಾಗಿದೆ ಎಂದು ದೃಢಪಡಿಸಿ. Zapier Ultimate Multisite Account credentials ಕೇಳಿದಾಗ, ಈ ಪರದೆಯಿಂದ API Key ಮತ್ತು API Secret ಅನ್ನು ನಕಲಿಸಿ.

![API Key, API Secret, ಮತ್ತು Enable API ಆಯ್ಕೆಗಳೊಂದಿಗೆ API ಮತ್ತು Webhooks settings](/img/admin/settings-api-webhooks.png)

ಮೊದಲು, ನಿಮ್ಮ Google Drive ಅಡಿಯಲ್ಲಿ ನೀವು **Google Sheet** ರಚಿಸಬೇಕು. ನಂತರ ಡೇಟಾವನ್ನು ಸುಲಭವಾಗಿ map ಮಾಡಲು ಪ್ರತಿಯೊಂದು ಕಾಲಮ್ ಅನ್ನು ಸರಿಯಾಗಿ ವ್ಯಾಖ್ಯಾನಿಸಿದ್ದೀರಿ ಎಂದು ಖಚಿತಪಡಿಸಿಕೊಳ್ಳಿ.

Google sheet ರಚಿಸಿದ ನಂತರ, ನಿಮ್ಮ Zapier Account ಗೆ log in ಮಾಡಿ zap ರಚಿಸಲು ಪ್ರಾರಂಭಿಸಬಹುದು.

**"App event"** ಹುಡುಕಾಟ ಕ್ಷೇತ್ರದ ಅಡಿಯಲ್ಲಿ **"Google Sheets"** ಆಯ್ಕೆಮಾಡಿ


ನಂತರ "**Event** " ಕ್ಷೇತ್ರಕ್ಕಾಗಿ "**New spreadsheet row** " ಆಯ್ಕೆಮಾಡಿ ಮತ್ತು "**Continue** " ಒತ್ತಿರಿ

ಮುಂದಿನ ಹಂತವು **Google Sheet** ಉಳಿಸಲಾಗಿರುವ **Google Account** ಆಯ್ಕೆಮಾಡಲು ಕೇಳುತ್ತದೆ. ಆದ್ದರಿಂದ ಸರಿಯಾದ google account ಸೂಚಿಸಲಾಗಿದೆ ಎಂದು ಖಚಿತಪಡಿಸಿಕೊಳ್ಳಿ.


**"Set up trigger** " ಅಡಿಯಲ್ಲಿ, ಡೇಟಾ ಬರುವ google spreadsheet ಮತ್ತು worksheet ಅನ್ನು ನೀವು ಆಯ್ಕೆಮಾಡಿ ಸೂಚಿಸಬೇಕು. ಅವನ್ನು ತುಂಬಿ "**Continue** " ಒತ್ತಿರಿ

ಮುಂದೆ, ನಿಮ್ಮ google sheet ಸರಿಯಾಗಿ ಸಂಪರ್ಕಗೊಂಡಿದೆ ಎಂದು ಖಚಿತಪಡಿಸಿಕೊಳ್ಳಲು "**test your trigger** " ಮಾಡುವುದು.

ನಿಮ್ಮ test ಯಶಸ್ವಿಯಾದರೆ, ನಿಮ್ಮ spreadsheets ನಿಂದ ಕೆಲವು ಮೌಲ್ಯಗಳನ್ನು ತೋರಿಸುವ ಫಲಿತಾಂಶವನ್ನು ನೀವು ನೋಡಬೇಕು. ಮುಂದುವರಿಯಲು "**Continue** " ಕ್ಲಿಕ್ ಮಾಡಿ.

ಮುಂದಿನ ಹಂತವು Ultimate Multisite ನಲ್ಲಿ Account ರಚಿಸುವ ಅಥವಾ ನೋಂದಾಯಿಸುವ ಎರಡನೇ ಕ್ರಿಯೆಯನ್ನು ಸಿದ್ಧಪಡಿಸುವುದು. ಹುಡುಕಾಟ ಕ್ಷೇತ್ರದಲ್ಲಿ "**Ultimate Multisite(2.0.2)** " ಆಯ್ಕೆಮಾಡಿ


"**Event** " ಕ್ಷೇತ್ರದ ಅಡಿಯಲ್ಲಿ, "**Register an Account in Ultimate Multisite** " ಆಯ್ಕೆಮಾಡಿ, ನಂತರ "**Continue** " ಬಟನ್ ಕ್ಲಿಕ್ ಮಾಡಿ.

"**Set up an action** " ಅಡಿಯಲ್ಲಿ, ಗ್ರಾಹಕರ ಡೇಟಾ, ಸದಸ್ಯತ್ವಗಳು, ಉತ್ಪನ್ನಗಳು ಮುಂತಾದವುಗಳಿಗೆ ಲಭ್ಯವಿರುವ ವಿಭಿನ್ನ ಕ್ಷೇತ್ರಗಳನ್ನು ನೀವು ಕಾಣುತ್ತೀರಿ. ಕೆಳಗಿನ ಸ್ಕ್ರೀನ್‌ಶಾಟ್‌ನಲ್ಲಿ ತೋರಿಸಿರುವಂತೆ, ನಿಮ್ಮ google sheet ಅಡಿಯಲ್ಲಿ ಇರುವ ಮೌಲ್ಯಗಳನ್ನು map ಮಾಡಿ, ಅವು ತುಂಬಬೇಕಾದ ಸರಿಯಾದ ಕ್ಷೇತ್ರಕ್ಕೆ ನಿಯೋಜಿಸಬಹುದು.


ಮೌಲ್ಯಗಳನ್ನು map ಮಾಡಿದ ನಂತರ, ನೀವು ಕ್ರಿಯೆಯನ್ನು test ಮಾಡಬಹುದು.
