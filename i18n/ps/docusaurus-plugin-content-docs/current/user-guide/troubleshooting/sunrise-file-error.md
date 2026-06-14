---
title: د طلوع خورشید فایل غلطي
sidebar_position: 12
_i18n_hash: 53d988d644c244d20f04444350bd5d3c
---
# Sunrise File Install کې خطا

sunrise.php फाइल یو ځانګړی फाइल دی چې WordPress له شروع کیدو (bootstrap) په وخت کې یې खोज्छ. که WordPress بتواند sunrise.php فایل ته وګوري، باید دا د **wp-content فولډر** په داخلي کې وي.

کله چې تاسو Ultimate Multisite فعال کړئ او هغه تنظیم کولو راهغه (setup wizard) printrته ورسئ چې په اسکرینشر کې یې لرې دی، Ultimate Multisite هڅه کوي چې हाम्रो sunrise.php فایل ته د wp-content فولډر ته کپی کړي.

<!-- Screenshot unavailable: Setup wizard page showing sunrise.php installation step -->

زیادهysې وختونو کې، موږ کولی شو فایل بشپړ کپی کړو او همه کار پیل شي. तर، که یو څه په سمه توګه تنظیم نه وي (د فولډر پرمیشنونه، علیک)، ممکن تاسو د هغه حالت سره مخ شئ چې Ultimate Multisite نه بتواني فایل ته کپی کړي.

که تاسو Ultimo دی ورکړل پیغام اخليږئ، به وګورئ چې دا دقیقاً دلته څه پیښ شوي دي: **Sunrise copy failed** (sunrise کپی ناکامه).

<!-- Screenshot unavailable: Error message showing Sunrise copy failed -->

د دې حل لپاره، تاسو کولی شئ sunrise.php فایل ته داخل wp-ultimo plugin فولډر کې کپی کړئ او دا د خپل wp-content فولډر په داخلي کې پیسټ کړئ. وروسته له دې کار، wizard صفحه بیا ریلود کړئ او چیکونه باید کامیاب شي.

<!-- Screenshot unavailable: File manager showing sunrise.php inside wp-ultimo plugin folder --> په هر صورت، دا ممکن تاسو ته ستونزو څخه د ورته وخت لپاره (نه یوازې Ultimate Multisite کې نه، بلکې نورو plugins او themes هم) فولډر پرمیشنونو ته یو عام چک کولو لازمي ګرځي.

WordPressको **Health Check tool** چې WordPress अन्तर्गत हुन्छ (تاسو کولی شئ دا له خپل اصلي سایت **admin panel > Tools > Health Check** کzij ورسئ)، هغه تاسو ته خبر ورکول सक्छ چې آیا د فولډر پرمیشنونه په olyan ارزښتونو تنظیم شوي دي چې د WordPress لپاره مشکل رامنځته کولی شي.

<!-- تصویر دستیاب নয়: ووردپرس صحتی পরীক্ষা ٹول فولڈر پرمیشن کی حیثیت دکھا رہا ہے -->
