import React from 'react';
import { List } from 'semantic-ui-react'


const DownloadableForms = (props) => {
  console.log(props);
  return (
    <List>
    {
      props.formsToDisplay.map(form => 
        <List.Item>{form.name}</List.Item>
      )
    }
    </List>
  )
};

export default DownloadableForms;
