---
title: GitHub स्निपेट्स
sidebar_position: 3
_i18n_hash: c643f3d76aace8c15fd224b984af6633
---
# GitHub repository पर Ultimate Multisite snippets का उपयोग कैसे करें

GitHub repository में कुछ code snippets उपलब्ध हैं जो Ultimate Multisite users द्वारा अक्सर मांगे जाते हैं। ये users छोटी-छोटी functionalities जोड़ना चाहते हैं, जैसे sign-up pages पर Google Analytics script लगाना या admin dashboard से किसी meta box को छुपाना।

इस लेख में हम आपको बताएंगे कि इन codes का उपयोग कैसे करें और इन्हें कहाँ रखना है।

आप नीचे दिए गए link पर ये snippets पा सकते हैं।

https://github.com/next-press/wp-ultimo-snippets/

Code जोड़ने के 2 तरीके हैं

  1. अपनी theme की functions.php file में।

  2. Must-Use Plugins (mu-plugins)

# अपनी theme की functions.php file में snippet कैसे जोड़ें

  1. अपने WordPress Network admin dashboard में login करें और Themes > Theme Editor पर जाएं (नीचे screenshot देखें)।

  2. "Edit Themes" page पर, सुनिश्चित करें कि screen के ऊपरी दाहिने कोने में स्थित dropdown field में आपकी active theme चुनी हुई है (नीचे screenshot में #3 देखें)।

  3. "Theme Files" section के अंतर्गत functions.php file पर click करें ताकि file load हो जाए। नीचे scroll करें और GitHub repository से प्राप्त Ultimate Multisite snippet को paste करें।

<!-- Screenshot unavailable: WordPress Theme Editor showing functions.php file editing -->

# Must-Use Plugins (mu-plugins) कैसे बनाएं

WordPress में एक feature है जो आपको custom functionality load करने की सुविधा देता है, इसे "Must-Use Plugins" या संक्षेप में "mu-plugins" कहते हैं।

ये विशेष mu-plugins सभी regular plugins से पहले load होते हैं, और इन्हें deactivate नहीं किया जा सकता। Multisite network में, इन mu-plugins का code आपके installation की सभी sites पर load होगा।

1\. अपने WordPress install के filesystem तक पहुंचने के लिए FTP या SSH का उपयोग करें।

2\. अपने WordPress install की wp-content directory के अंदर, एक नई directory बनाएं जिसका नाम हो: mu-plugins।

<!-- Screenshot unavailable: File manager showing wp-content directory with mu-plugins folder -->

3\. अपने computer पर Notepad या किसी भी code editor का उपयोग करके wu-snippet.php नाम की एक नई PHP file बनाएं।

4\. GitHub repository से प्राप्त Ultimate Multisite code snippet को इस file में paste करें और save करें। आप अपने mu plugin को label करने के लिए code snippet के ऊपर यह code भी जोड़ सकते हैं।
