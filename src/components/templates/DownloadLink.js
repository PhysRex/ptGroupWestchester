import React from 'react';

/**
 * Creates a link which will automatically download content
 * @param {object} options The options to create a link to downloadable content
 * @param {object} text The link display text
 * @param {object} contentToDownload The file location to the downloadable content, for a directory within the `src`
 * @param {object} className Any classNames that the link should have
 * @returns {undefined}
 */
const DownloadLink = ({ text, contentToDownload, className }) => (
  <a
    className={className}
    href={contentToDownload}
    target='_blank'
    download
  >
    {text}
  </a>
);


export default DownloadLink;
