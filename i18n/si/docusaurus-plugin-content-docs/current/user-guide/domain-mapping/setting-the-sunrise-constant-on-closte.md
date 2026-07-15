---
title: Closte හි Sunrise Constant සැකසීම
sidebar_position: 16
_i18n_hash: ce55527b126282d167eec4e3a8f824ea
---
# Closte-ում Sunrise constant එක true ලෙස සැකසීම

සමහර හොස්ට් සපයන්නන් ආරක්ෂාව සඳහා wp-config.php ගොනුව අගුළු දමයි. මෙයින් අදහස් කරන්නේ Ultimate Multisite වලට ડોමේන් මැපින් සහ වෙනත් විශේෂාංග ක්‍රියාත්මක කිරීමට අවශ්‍ය constant එක ඇතුළත් කිරීමට ගොනුව ස්වයංක්‍රීයව සංස්කරණය කිරීමට නොහැකි වීමයි. Closte එවැනි හොස්ටින් සපයන්නියකි.

කෙසේ වෙතත්, Closte මගින් ආරක්ෂිත ආකාරයකට wp-config.php වල constant එකතු කිරීමට ක්‍රමයක් ලබා දෙයි. ඔබට පහත පියවර අනුගමනය කිරීමට අවශ්‍ය වේ:

## Closte Dashboard එකේදී {#on-the-closte-dashboard}

මුලින්ම, [ඔබේ Closte ගිණුමට ලොග් වන්න](https://app.closte.com/), Sites මෙනුව ක්ලික් කරන්න, ඉන්පසු ඔබ දැනට වැඩ කරන වෙබ් අඩවියේ Dashboard link එක ක්ලික් කරන්න:

<!-- Screenshot unavailable: Closte dashboard showing Sites menu and Dashboard link -->

තිරයේ වම් පැත්තේ නව මෙනු අයිතම කිහිපයක් ඔබට පෙන්වනු ඇත. එම මෙනුව භාවිතයෙන් **Settings** පිටුවට යන්න:

<!-- Screenshot unavailable: Closte left sidebar menu showing Settings option -->

ඉන්පසු, **Settings** එකේදී WP-Config tab එක සොයාගෙන, එම ටැබ් එකේ ඇති "Additional wp-config.php content" ක්ෂේත්‍රය (field) සොයා ගන්න:

<!-- Screenshot unavailable: Closte Settings page with WP-Config tab showing Additional wp-config.php content field -->

Ultimate Multisite ස්ථාපනය කිරීමේ සන්දර්භය තුළ, ඔබට එම ක්ෂේත්‍රයට sunrise constant එක එක් කිරීමට අවශ්‍ය වනු ඇත. නව පේළියක් එකතු කර පහත පේළිය අලවන්න. ඉන්පසු **Save All** බොත්තම ක්ලික් කරන්න.

define('SUNRISE', true);

ඒකයි, දැන් ඔබට සියල්ල සූදානම්. Ultimate Multisite ස්ථාපන මඟ (wizard) වෙත නැවත යන්න සහ ක්‍රියාවලිය දිගටම කරගෙන යාමට පිටුව නැවත රフレෂ් (refresh) කරන්න.
