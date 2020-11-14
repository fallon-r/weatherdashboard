import React, {useEffect, useState} from 'react'
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';


const DrawerContents = () => {

   
        const update = JSON.parse(localStorage.getItem('SearchHist'))
 


    return (
        <>
          <List component="nav" aria-label="Search History">
                {update.map((searchHistory, index) => (
            <ListItem button key={index}>

                    <ListItemText primary={searchHistory} />
            </ListItem>
                ))}
       
      </List>  
        </>
    )
}

export default DrawerContents
