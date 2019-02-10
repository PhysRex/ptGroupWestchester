import React from 'react';
import { List } from 'semantic-ui-react';
import { DownloadLink } from '../../templates';


const DownloadableForms = ({ formsToDisplay }) => {
  return (
    <List>
    {
      formsToDisplay.map(({ pdf, name }) => 
        <List.Item key={name}>
          <DownloadLink contentToDownload={pdf} text={name} />
        </List.Item>
      )
    }
    </List>
  )
};

export default DownloadableForms;
