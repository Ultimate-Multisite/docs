---
title: Site Exporter மாற்றப் பட்டியல்
sidebar_position: 99
_i18n_hash: 6ce7f1a3c455b0afe71a841b7b82319a
---
# Site Exporter Changelog {#site-exporter-changelog}

Version: 1.0.6 - Released on 2026-05-11
* புதியது: Site exports இப்போது ஒரு self-booting index.php-ஐ இணைத்து வழங்குகிறது. இதனால் ZIP கோப்பை தனிப்பட்ட plugin நிறுவல் இல்லாமல் புதிய host-ல் நிறுவ முடியும்.
* புதியது: Network export மூலம், Site Export admin page-ல் இருந்து அனைத்து subsites-உம் ஒரே archive-ல் export செய்ய முடியும்.

Version: 1.0.5 - Released on 2026-05-05
* சரிசெய்தல்: get_config போன்ற mock செய்யப்படாத methods-களை கையாள WP_CLI polyfill stub-ல் __callStatic சேர்க்கப்பட்டுள்ளது. இதனால் test bootstrap தோல்விகள் தடுக்கப்படும்.

Version: 1.0.4 - Released on 2025-11-25

* Ultimate Multisite 2.4 உடன் இணக்கத்தன்மையை சரிசெய்தல்.

Version: 1.0.2 - Released on 2025-09-28

* prefix-ஐ ultimate-multisite என்று பெயர் மாற்றம் செய்தல்; text domain-ஐ புதுப்பித்தல்; version அதிகரிப்பு.

### Version 1.0.1 - Released on 2023-08-09 {#version-101---released-on-2023-08-09}

* மேம்படுத்தப்பட்டது: இப்போது importer file-ன் சரியான file path கிடைப்பதை உறுதி செய்கிறது.
* சரிசெய்தல்: import செய்யும் போது ஏற்படும் பிழைகளைத் தடுக்க object cache முடக்கப்பட்டது.
* சரிசெய்தல்: importer plugin download link வேலை செய்யவில்லை என்ற சிக்கல் சரிசெய்யப்பட்டது.

### Version 1.0.0 - Released on 2022-12-23 {#version-100---released-on-2022-12-23}

* சரிசெய்தல்: Export form popup ஏற்றப்படவில்லை;
* சரிசெய்தல்: export page-ல் Javascript file-கள் ஏற்றப்படவில்லை;
* உள்: புதிய build process;

### Version 1.0.0-beta.4 - Released on 2022-01-13 {#version-100-beta4---released-on-2022-01-13}

* உள்: hooks மற்றும் filters generator சேர்க்கப்பட்டது;
* உள்: developer-களின் வசதிக்காக WP Ultimo stubs சேர்க்கப்பட்டது;
