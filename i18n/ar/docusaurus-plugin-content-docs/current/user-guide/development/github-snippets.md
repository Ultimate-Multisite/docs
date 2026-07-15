---
title: مقتطفات GitHub
sidebar_position: 3
_i18n_hash: c643f3d76aace8c15fd224b984af6633
---
# كيفية استخدام مقتطفات Ultimate Multisite في مستودع GitHub الخاص بنا

هناك مقتطفات كود متاحة في مستودع GitHub يُطلبها غالبًا من قبل مستخدمي Ultimate Multisite الذين يرغبون في إضافة وظائف صغيرة مثل إضافة نص Google Analytics على صفحات التسجيل أو إخفاء صندوق ميتا من لوحة تحكم المسؤول.

سيوضح لك هذا المقال كيفية استخدام أو بدقة أكثر، أين توضع هذه الأكواد.

يمكنك العثور على المقتطفات على الرابط أدناه.

https://github.com/next-press/wp-ultimo-snippets/

هناك طريقتان لإضافة الكود

  1. في ملف functions.php الخاص بالقالب الخاص بك.
  2. ملحقات Must-Use (mu-plugins)

# كيفية إضافة المقتطف في ملف functions.php الخاص بالقالب الخاص بك.

  1. سجّل الدخول إلى لوحة تحكم شبكة WordPress الخاصة بك واذهب إلى Themes > Theme Editor (انظر لقطة الشاشة أدناه).
  2. في صفحة "Edit Themes"، تأكد من أن القالب النشط لديك مختار في حقل القائمة المنسدلة الموجود في الجانب العلوي الأيمن من الشاشة (#3 في لقطة الشاشة أدناه).
  3. انقر على ملف functions.php تحت قسم "Theme Files" لتحميل الملف. مرّر لأسفل إلى الأسفل والصق مقتطف Ultimate Multisite الذي حصلت عليه من مستودع GitHub.

<!-- Screenshot unavailable: WordPress Theme Editor showing functions.php file editing -->

# كيفية إنشاء ملحقات Must-Use (mu-plugins)

يحتوي WordPress على ميزة تسمح لك بتحميل وظائف مخصصة تُسمى "ملحقات Must-Use"، أو "mu-plugins" اختصارًا.  
يتم تحميل هذه الملحقات الخاصة mu-plugins قبل جميع الملحقات العادية، ولا يمكن إلغاء تفعيلها. في شبكة متعددة المواقع، سيتم تحميل الكود في هذه الملحقات mu-plugins على جميع المواقع في التثبيت الخاص بك.

1\. استخدم FTP أو SSH للوصول إلى نظام الملفات في تثبيت WordPress الخاص بك.  
2\. داخل دليل wp-content في تثبيت WordPress الخاص بك، أنشئ دليلًا جديدًا باسم: mu-plugins.  

<!-- Screenshot unavailable: File manager showing wp-content directory with mu-plugins folder -->

3\. أنشئ ملف PHP جديد على جهازك باسم wu-snippet.php باستخدام Notepad أو أي محرر كود.  
4\. ضع مقتطف كود Ultimate Multisite الذي حصلت عليه من مستودع GitHub في الملف واحفظه. يمكنك أيضًا إضافة هذا الكود أعلى المقتطف لتسمية ملحق mu الخاص بك.
