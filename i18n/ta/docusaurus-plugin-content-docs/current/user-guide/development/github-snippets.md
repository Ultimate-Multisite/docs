---
title: GitHub துண்டுக்குறிப்புகள்
sidebar_position: 3
_i18n_hash: c643f3d76aace8c15fd224b984af6633
---
# எங்கள் GitHub repository-ல் உள்ள Ultimate Multisite snippets-ஐ எவ்வாறு பயன்படுத்துவது

GitHub repository-ல் code snippets உள்ளன, இவை Ultimate Multisite பயனர்களால் அடிக்கடி கோரப்படுகின்றன. sign-up பக்கங்களில் Google Analytics script சேர்ப்பது அல்லது admin dashboard-ல் ஒரு meta box-ஐ மறைப்பது போன்ற சிறிய செயல்பாடுகளை சேர்க்க விரும்புவோருக்கு இவை பயனுள்ளதாக இருக்கும்.

இந்த code-களை எவ்வாறு பயன்படுத்துவது, குறிப்பாக எங்கே வைக்க வேண்டும் என்பதை இந்த கட்டுரை உங்களுக்கு காண்பிக்கும்.

கீழே உள்ள link-ல் snippets-ஐ காணலாம்.

https://github.com/next-press/wp-ultimo-snippets/

code-ஐ சேர்க்க 2 வழிகள் உள்ளன

  1. உங்கள் theme-ன் functions.php file-ல்.

  2. Must-Use Plugins (mu-plugins)

# உங்கள் theme-ன் functions.php file-ல் snippet-ஐ எவ்வாறு சேர்ப்பது

  1. உங்கள் WordPress Network admin dashboard-ல் login செய்து Themes > Theme Editor-க்கு செல்லுங்கள் (கீழே உள்ள screenshot-ஐ பாருங்கள்).

  2. "Edit Themes" பக்கத்தில், உங்கள் திரையின் மேல் வலது பக்கத்தில் உள்ள dropdown field-ல் உங்கள் active theme தேர்ந்தெடுக்கப்பட்டிருப்பதை உறுதி செய்யுங்கள் (கீழே உள்ள screenshot-ல் #3).

  3. file-ஐ load செய்ய "Theme Files" பகுதியின் கீழ் உள்ள functions.php file-ஐ click செய்யுங்கள். கீழே scroll செய்து GitHub repository-ல் இருந்து நீங்கள் பெற்ற Ultimate Multisite snippet-ஐ paste செய்யுங்கள்.

<!-- Screenshot unavailable: WordPress Theme Editor showing functions.php file editing -->

# Must-Use Plugins (mu-plugins) எவ்வாறு உருவாக்குவது

WordPress-ல் "Must-Use Plugins" அல்லது சுருக்கமாக "mu-plugins" என்று அழைக்கப்படும் custom செயல்பாடுகளை load செய்யும் அம்சம் உள்ளது.

இந்த சிறப்பு mu-plugins மற்ற எல்லா regular plugins-க்கும் முன்பாக load ஆகும், மேலும் இவற்றை deactivate செய்ய முடியாது. ஒரு multisite network-ல், இந்த mu-plugins-ல் உள்ள code உங்கள் installation-ல் உள்ள அனைத்து sites-லும் load ஆகும்.

1\. உங்கள் WordPress install-ன் filesystem-ஐ access செய்ய FTP அல்லது SSH பயன்படுத்துங்கள்.

2\. உங்கள் WordPress install-ன் wp-content directory-க்குள், mu-plugins என்ற பெயரில் ஒரு புதிய directory உருவாக்குங்கள்.

<!-- Screenshot unavailable: File manager showing wp-content directory with mu-plugins folder -->

3\. Notepad அல்லது ஏதேனும் code editor பயன்படுத்தி உங்கள் கணினியில் wu-snippet.php என்ற பெயரில் ஒரு புதிய PHP file உருவாக்குங்கள்.

4\. GitHub repository-ல் இருந்து நீங்கள் பெற்ற Ultimate Multisite code snippet-ஐ file-ல் வைத்து save செய்யுங்கள். உங்கள் mu plugin-க்கு label கொடுக்க code snippet-ன் மேலே இந்த code-ஐயும் சேர்க்கலாம்.
