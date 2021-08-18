import React, { useState } from "react";
import {Button, Checkbox, Grid, IconButton, InputBase, List, ListItem, ListItemText} from '@material-ui/core';
import { Search} from '@material-ui/icons';
import {Link} from 'react-router-dom';
import {getList} from '../api/todosApi'

const TodosPage = () => {
    const [list, setList] = useState(getList());

    //Set the completed icon in the relevant todo.
    const changeHandler = (task) => {
        setList(
          list.map((item) =>
          {
            if(item.id === task.id)
              return {...item, completed: !task.completed};
            return item;
          }
        ))};
return <Grid>
      <InputBase
        placeholder="Search"
      />
      <IconButton type="submit" >
        <Search/>
      </IconButton>
    <List>
    { list ? list.map(task =>
        {return <ListItem>
            <Checkbox checked={task.completed} onChange={()=>{changeHandler(task)}}/>
            <ListItemText>{task.title}</ListItemText>
        </ListItem>}) : <></>}
    <Button>save</Button>
    <Link to='/'>Back To Home</Link> 
    </List>
    </Grid>
}

export default TodosPage;