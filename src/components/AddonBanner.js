import React from 'react';

export default function AddonBanner({slug, name}) {
  const purchaseUrl = `https://ultimatemultisite.com/product/${slug}/`;
  const downloadUrl = 'https://ultimatemultisite.com/my-account/downloads/';

  return (
    <div className="addon-banner">
      <strong>Paid Addon</strong>
      <span>
        <a href={purchaseUrl} target="_blank" rel="noopener noreferrer">
          Purchase {name || 'this addon'}
        </a>
        {' | '}
        Install via your site's addon page or{' '}
        <a href={downloadUrl} target="_blank" rel="noopener noreferrer">
          download from your account
        </a>
      </span>
    </div>
  );
}
