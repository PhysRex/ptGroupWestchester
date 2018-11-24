import React from 'react';


const DownloadLink = ({ text, contentToDownload, className }) => (
  <a className={className} href={contentToDownload} target='_blank' download>{text}</a>
);


export default DownloadLink;
