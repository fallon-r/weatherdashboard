import React, {useEffect, useState} from 'react'
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';


const DrawerContents = () => {

   
        const update = JSON.parse(localStorage.getItem('SearchHist'))
 


    return (
        <>
          <List component="nav" aria-label="Search History" >
                {update? update.map((searchHistory, index) => (
            <ListItem button divider outlined key={index} onClick={(e)=>{console.log(searchHistory)}} style={{margin:"auto", padding:"auto", textAlign:"center"}}> 

                    <ListItemText primary={searchHistory} />
            </ListItem>
                )):null}
       
      </List>  
        </>
    )
}

export default DrawerContents
