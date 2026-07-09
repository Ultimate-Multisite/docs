---
title: ಕಂಡುಹಾಕುವುದು ಮತ್ತು ಆಮದು ಮಾಡಿಕೊಳ್ಳುವುದು
sidebar_position: 12
_i18n_hash: 6536f9ebee269a8553a57733e4cb03fc
---
# Export & Import {#export--import}

Ultimate Multisite 2.9.0, **Tools > Export & Import** ಅಡಿಯಲ್ಲಿ ಒಂದು single-site **Export & Import** ಟೂಲ್ ಅನ್ನು ಸೇರಿಸಿದೆ. ನೀವು ಒಂದು WordPress site ಅನ್ನು ZIP ಫೈಲ್ ಆಗಿ ಪ್ಯಾಕ್ ಮಾಡಲು, ಆ ZIP ಅನ್ನು restore ಮಾಡಲು, ಅಥವಾ ಒಂದು site ಅನ್ನು ಹೊಂದಾಣಿಕೆಯ Ultimate Multisite ಮತ್ತು single-site WordPress installation ನಡುವೆ ಸ್ಥಳಾಂತರಿಸಲು ಇದನ್ನು ಬಳಸಿ.

## ಅಗತ್ಯ ಅನುಮತಿಗಳು (Required permissions) {#required-permissions}

ನೀವು ಯಾವ site ಅನ್ನು export ಅಥವಾ import ಮಾಡುತ್ತಿದ್ದೀರೋ ಆ site ಯ WordPress **Tools** ಮೆನುವನ್ನು அணுகಬಲ್ಲ ಆಡಳಿತಾಧಿಕಾರಿ (administrator) ಆಗಿ ಲಾಗಿನ್ ಆಗಿರಬೇಕು. ಒಂದು multisite network ನಲ್ಲಿ, network-level Ultimate Multisite ಟೂಲ್‌ಗಳಿಂದ subsite ಗಳನ್ನು export ಅಥವಾ import ಮಾಡುವಾಗ network administrator account ಅನ್ನು ಬಳಸಿ.

Export ZIP ಡೌನ್‌ಲೋಡ್‌ಗಳನ್ನು authenticated download endpoint ಮೂಲಕ ನೀಡಲಾಗುತ್ತದೆ, ಆದ್ದರಿಂದ ಡೌನ್‌ಲೋಡ್ ಮುಗಿಯುವವರೆಗೆ ನೀವು admin session ಅನ್ನು ಸಕ್ರಿಯವಾಗಿ ಇಟ್ಟುಕೊಳ್ಳಬೇಕು ಮತ್ತು ರಚಿಸಲಾದ ಡೌನ್‌ಲೋಡ್ URL ಗಳನ್ನು ಸಾರ್ವಜನಿಕವಾಗಿ ಹಂಚಿಕೊಳ್ಳಬೇಡಿ.

## site ಅನ್ನು ZIP ಆಗಿ export ಮಾಡುವುದು {#exporting-a-site-to-a-zip}

1. ನೀವು ಕಾಪಿ ಮಾಡಲು ಬಯಸುವ site ಯ WordPress admin ನಲ್ಲಿ, **Tools > Export & Import** ಗೆ ಹೋಗಿ.
2. export ಪ್ರದೇಶವನ್ನು ತೆರೆದು, ನೀವು ಪ್ಯಾಕ್ ಮಾಡಲು ಬಯಸುವ site ಅನ್ನು ಆರಿಸಿ.
3. ಲಭ್ಯವಿದ್ದರೆ, ಅಪ್‌ಲೋಡ್‌ಗಳು (uploads), plugins, ಮತ್ತು themes ನಂತಹ ಐಚ್ಛಿಕ ವಿಷಯವನ್ನು ಸೇರಿಸಲು ಆರಿಸಿ.
4. export ಅನ್ನು ಪ್ರಾರಂಭಿಸಿ ಮತ್ತು ಪ್ರಕ್ರಿಯೆ ಮುಗಿಯುವವರೆಗೆ ಕಾಯಿರಿ. ದೊಡ್ಡ site ಗಳಿಗೆ ZIP ಸಿದ್ಧವಾಗುವ ಮೊದಲು ಹಿನ್ನೆಲೆಯಲ್ಲಿ ಮುಗಿಯಬೇಕಾಗಬಹುದು.
5. exports listed ನಿಂದ ಮುಗಿದ ZIP ಅನ್ನು ಡೌನ್‌ಲೋಡ್ ಮಾಡಿ.

ZIP ಅನ್ನು ಸುರಕ್ಷಿತ ಸ್ಥಳದಲ್ಲಿ ಇಟ್ಟುಕೊಳ್ಳಿ. ಇದು site ವಿಷಯ, ಸೆಟ್ಟಿಂಗ್‌ಗಳು, media ಫೈಲ್‌ಗಳು ಮತ್ತು ಆಯ್ಕೆ ಮಾಡಿದ ಕೋಡ್ ಆಸ್ets ಅನ್ನು ಒಳಗೊಂಡಿರಬಹುದು.

## export ನಲ್ಲಿ ಏನಿದೆ (What the export includes) {#what-the-export-includes}

export ZIP ನಲ್ಲಿ ಈ ಕೆಳಗಿನವುಗಳನ್ನು ಸೇರಿಸಬಹುದು:

- ಆಯ್ಕೆ ಮಾಡಿದ site ನ database ವಿಷಯ ಮತ್ತು configuration.
- uploads ಅನ್ನು ಸೇರಿಸಿದರೆ ಅಪ್‌ಲೋಡ್ ಮಾಡಿದ media ಫೈಲ್‌ಗಳು.
- ಆ ಆಯ್ಕೆಗಳನ್ನು ಆರಿಸಿದರೆ plugins ಮತ್ತು themes.
- લક્ષ્ય installation ನಲ್ಲಿ site ಅನ್ನು ಮರುನಿರ್ಮಿಸಲು Export & Import ಟೂಲ್ ಬಳಸುವ import metadata.

ನಿಖರವಾದ ZIP ಗಾತ್ರವು media ಯ ಪ್ರಮಾಣ, ಆಯ್ಕೆ ಮಾಡಿದ plugins ಮತ್ತು themes, ಮತ್ತು site ನ database tables ನ ಗಾತ್ರವನ್ನು ಅವಲಂಬಿಸಿರುತ್ತದೆ.

## ZIP ನಿಂದ site ಅನ್ನು import ಮಾಡುವುದು {#importing-a-site-from-a-zip}

1. ಗಮ್ಯಸ್ಥಾನ (destination) WordPress site ನಲ್ಲಿ **Tools > Export & Import** ಗೆ ಹೋಗಿ.
2. import ಪ್ರದೇಶವನ್ನು ತೆರೆದು, Export & Import ಟೂಲ್ ರಚಿಸಿದ ZIP ಅನ್ನು ಅಪ್‌ಲೋಡ್ ಮಾಡಿ.
3. site ನ ಹೊಸ ವಿಳಾಸವನ್ನು ಬಳಸಬೇಕಿದ್ದರೆ replacement URL ಅನ್ನು ನಮೂದಿಸಿ, ಅಥವಾ ಮೂಲ URL ಅನ್ನು ಉಳಿಸಲು ಫೀಲ್ಡ್ ಅನ್ನು ಖಾಲಿ ಬಿಡಿ.
4. import ಮುಗಿದ ನಂತರ ಅಪ್‌ಲೋಡ್ ಮಾಡಿದ ZIP ಅನ್ನು ಅಳಿಸಬೇಕೇ ಎಂದು ಆರಿಸಿ.
5. **Begin Import** ಕ್ಲಿಕ್ ಮಾಡಿ.
6. ಇದು ಮುಗಿಯುವವರೆಗೆ ಬಾಕಿ ಇರುವ import ಅನ್ನು ಗಮನಿಸಿ. ಪ್ರಕ್ರಿಯೆಯನ್ನು ಮುಗಿಸುವ ಮೊದಲು ನಿಲ್ಲಿಸಬೇಕಾದರೆ ಮಾತ್ರ **Cancel Import** ಬಳಸಿ.
7. ಸಾಮಾನ್ಯ ಟ್ರಾಫಿಕ್ ಅಥವಾ ಗ್ರಾಹಕರ ಪ್ರವೇಶವನ್ನು ಅನುಮತಿಸುವ ಮೊದಲು import ಮಾಡಿದ site ಅನ್ನು ಪರಿಶೀಲಿಸಿ.

ಒಂದು single-site WordPress installation ನಲ್ಲಿ, ZIP ಅನ್ನು import ಮಾಡುವುದು ಪ್ರಸ್ತುತ site ಅನ್ನು import ಮಾಡಿದ site ಯಿಂದ ಬದಲಾಯಿಸುತ್ತದೆ. ನೀವು ಪ್ರಾರಂಭಿಸುವ ಮೊದಲು લક્ષ્ય site ಯ ಸಂಪೂರ್ಣ ಬ್ಯಾಕಪ್ ಮಾಡಿ, ಮತ್ತು ಒಂದೇ ಸಮಯದಲ್ಲಿ ಒಂದೇ site ಗಾಗಿ ಅನೇಕ imports ಪ್ರಾರಂಭಿಸುವುದನ್ನು ತಪ್ಪಿಸಿ.

## ಮಿತಿಗಳು ಮತ್ತು compatibility ಟಿಪ್ಪಣಿಗಳು (Limitations and compatibility notes) {#limitations-and-compatibility-notes}

- ಬಹಳ ದೊಡ್ಡ uploads directories ಅಥವಾ media libraries ದೊಡ್ಡ ZIP ಫೈಲ್‌ಗಳನ್ನು ಉತ್ಪಾದಿಸಬಹುದು. ದೊಡ್ಡ site ಗಳನ್ನು export ಅಥವಾ import ಮಾಡುವ ಮೊದಲು PHP upload limits, execution limits, disk space, memory, ಮತ್ತು server timeout ಸೆಟ್ಟಿಂಗ್‌ಗಳನ್ನು ಖಚಿತಪಡಿಸಿಕೊಳ್ಳಿ.
- ಬಹಳ ದೊಡ್ಡ media libraries ಅನ್ನು ಕಡಿಮೆ ಟ್ರಾಫಿಕ್ ಇರುವ maintenance window ಸಮಯದಲ್ಲಿ ಸ್ಥಳಾಂತರಿಸಬೇಕಾಗಬಹುದು.
- લક્ષ્ય WordPress installation ಹೊಂದಾಣಿಕೆಯ WordPress, PHP, Ultimate Multisite, plugin, ಮತ್ತು theme version ಗಳನ್ನು ಹೊಂದಿರಬೇಕು.
- single-site import ನ લક્ષ્ય site ಅನ್ನು ಬದಲಾಯಿಸುತ್ತದೆ. ಇದು merge tool ಅಲ್ಲ.
- Multisite-to-single-site ಮತ್ತು single-site-to-multisite ಸ್ಥಳಾಂತರಗಳು, લક્ષ્ય environment export ಮಾಡಿದ site ನ plugins, themes, URLs, ಮತ್ತು ಅಗತ್ಯ Ultimate Multisite components ಗಳನ್ನು ಚಲಾಯಿಸಲು ಸಾಧ್ಯವಾದಾಗ ಮಾತ್ರ ಬೆಂಬಲಿತವಾಗಿದೆ.
- ZIP ಅನ್ನು ಖಾಸಗಿಯಾಗಿ ಇಟ್ಟುಕೊಳ್ಳಿ. ಇದು export ಮಾಡಿದ site ನ database ವಿಷಯ, ಅಪ್‌ಲೋಡ್ ಮಾಡಿದ ಫೈಲ್‌ಗಳು ಮತ್ತು configuration ವಿವರಗಳನ್ನು ಒಳಗೊಂಡಿರಬಹುದು.

ಹಳೆಯ network-level export workflows ಗಾಗಿ, [Site Export](/user-guide/administration/site-export) ನೋಡಿ.
