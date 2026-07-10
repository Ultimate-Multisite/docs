---
title: GitHub Snippets
sidebar_position: 3
_i18n_hash: c643f3d76aace8c15fd224b984af6633
---
# ଆମର GitHub repository ରେ Ultimate Multisite snippets ବ୍ୟବହାର କରିବା କିପରି {#how-to-use-ultimate-multisite-snippets-on-our-github-repository}

Ultimate Multisite ବ୍ୟବହାରକାରୀମାନେ ଯେଉଁ ସାଧାରଣ କାର୍ଯ୍ୟଗୁଡ଼ିକ ଯୋଡିବାକୁ ଚାହାନ୍ତି, ଯେପରି sign-up ପୃଷ୍ଠାରେ Google Analytics script ଯୋଡିବା ବା ଡାଷ୍ଟର୍ବୋର୍ଡର meta box ଲୁଚାଇବା ଆଦି, ସେଥିପାଇଁ GitHub repository ରେ କୋଡ୍ snippets ମିଳିଥାଏ।

ଏହି ଆଇକ୍ରିଲେ ଆମକୁ ଏହି କୋଡ୍ଗୁଡ଼ିକ ବ୍ୟବହାର କରିବା କିମ୍ବା ଅଧିକ ନିର୍ଦ୍ଦିଷ୍ଟ ଭାବେ ସେଗୁଡ଼ିକୁ କେଉଁଠି ରଖିବା ବିଷୟରେ ଦେଖାଇବ।

snippet ଗୁଡ଼ିକୁ ଆପଣ ନିମ୍ନଲିଙ୍କ ଲିଙ୍କରେ ପାଇପାରିବେ।

https://github.com/next-press/wp-ultimo-snippets/

କୋଡ୍ ଯୋଡିବା ପାଇଁ ଆପଣଙ୍କର ୨ଟି ଉପାୟ ଅଛି:

  1. ଆପଣଙ୍କ থିମ୍‌ର functions.php ଫାଇଲରେ।

  2. Must-Use Plugins (mu-plugins)

# ଆପଣଙ୍କ థିମ୍‌ର functions.php ଫାଇଲରେ snippet କିପରି ଯୋଡିବା {#how-to-add-the-snippet-on-your-themes-functionsphp-file}

  1. ଆପଣଙ୍କ WordPress Network admin dashboard ରେ ଲଗଇନ୍ କରନ୍ତୁ ଏବଂ Themes > Theme Editor ରେ ଯାଆନ୍ତୁ (নিচের স্ক্রিনশট ଦେଖନ୍ତୁ)।

  2. "Edit Themes" ପୃଷ୍ଠାରେ, ନିଶ୍ଚିତ କରନ୍ତୁ ଯେ ଆପଣଙ୍କର ସକ୍ରିୟ themeଟି screen ର ଉପର ଡାହାଣ ପାର୍ଶ୍ୱରେ ଥିବା dropdown field ରେ selected ଅଛି (#3 ରେ ଦର୍ଶାଯାଇଛି)।

  3. "Theme Files" విభాగ under functions.php ଫାଇଲକୁ କ୍ଲିକ୍ କରି ଫାଇଲଟି ਲੋଡ୍ କରନ୍ତୁ। ବାହାରକୁ ସ୍କ୍ରୋଲ୍ କରି ମୁଠାତରେ GitHub repository ରୁ ଆପଣଙ୍କ ପାଖରେ ଥିବା Ultimate Multisite snippet ଟି पेस्ट କରନ୍ତୁ।

<!-- Screenshot unavailable: WordPress Theme Editor showing functions.php file editing -->

# Must-Use Plugins (mu-plugins) କିପରି ସୃଷ୍ଟି କରିବା {#how-to-create-must-use-plugins-mu-plugins}

WordPress ରେ ଏକ ଅବଶୀଦତା ଅଛି ଯାହା ଆପଣଙ୍କୁ "Must-Use Plugins" ବା ସଂକ୍ଷେପରେ "mu-plugins" ନାମରେ କଷ୍ଟମ୍ functionality ਲੋଡ୍ କରିବାକୁ ଅନୁମତି ଦିଏ।

ଏହି ବିଶେଷ mu-plugins ଗୁଡ଼ିକ ଅନ୍ୟ ସମସ୍ତ ସାଧାରଣ plugin ଠାରୁ ପୂର୍ବରୁ ਲੋଡ୍ ହୁଏ, ଏବଂ ଆପଣଙ୍କୁ ଏହାକୁ Deactivate କରିବା ସମ୍ଭବ ନୁହେଁ। ଏକ multisite network ରେ, ଏହି mu-plugins ର କୋଡ୍ ଆପଣଙ୍କ ଇନଷ୍ଟଲେସନ୍ ମଧ୍ୟରେ ଥିବା ସମସ୍ତ sit-ରେ ਲੋଡ୍ ହେବ।

1. FTP ବା SSH ବ୍ୟବହାର କରି ଆପଣଙ୍କ WordPress install ର filesytemକୁ ઍକ୍ସେସ୍ କରନ୍ତୁ।

2. ଆପଣଙ୍କ WordPress ଇନଷ୍ଟାଲ୍‌ର `wp-content` ଡିରେକ୍ଟୋରୀ ଭିତରେ `mu-plugins` ନାମକ ଏକ ନୂଆ ଡିରେକ୍ଟୋରୀ ତିଆରି କରନ୍ତୁ।

<!-- ସ୍କ୍ରିନ୍‌ଶଟ୍ ଅପଲଏବଲ: ଫାଇଲ ମ୍ୟାନେଜର୍ ଯେଉଁଥିରେ `wp-content` ଡିରେକ୍ଟୋରୀ ଏବଂ `mu-plugins` ఫోల్ଡର ଦେଖାଯାଉଛି -->

3. ଆପଣଙ୍କ କମ୍ପ୍ୟୁଟରରେ Notepad ବା କୌଣସି କୋଡ୍ ଏଡିଟର୍ (code editor) ବ୍ୟବହାର କରି `wu-snippet.php` ନାମକ ଏକ ନୂଆ PHP ଫାଇଲ ତିଆରି କରନ୍ତୁ।

4. Ultimate Multisite ରୁ ଆପଣ ଯେଉଁ GitHub repository ରୁ କୋଡ୍ ସ Snippet, ତାହାକୁ ସେହି ଫାଇల్‌ରେ ପକାଇ సేవ్ କରନ୍ତୁ। ଆପଣ ଏହି କୋଡ୍‌ଟି ଉପରେ ମଧ୍ୟ ଅନ୍ୟ କୌଣସି କୋଡ୍ ଯୋଡ଼ିପାରିବେ, ଯାହାଦ୍ୱାରା ଆପଣଙ୍କ `mu` plugin ନାମ ଦେଇପାରିବେ।
