import {Typography,AppBar,Card,CardContent,CardMedia,
  Grid,Toolbar,Container} from '@material-ui/core'
import PeopleAltIcon from '@material-ui/icons/PeopleAlt';
import 'bootstrap/dist/css/bootstrap.css';
import useStyle from './Style'
import { useState } from 'react';
import "./App.css"
function App() {
const [users,setusers]=useState([])
const [loading,setloading]=useState(false)
  const classes=useStyle();
  const getusers=()=>{
    setloading(true)
    setTimeout(async()=>{
      const data=await fetch("https://reqres.in/api/users?page=1")
      const jsonresponse=await data.json();
      console.log(jsonresponse["data"]);
      setusers(jsonresponse.data)
      setloading(false)
     },2000)
  }
  return (
      <>
      <AppBar position="relative">
         <Toolbar className={classes.toolbar}>
         <div style={{display:"flex"}}>
          <PeopleAltIcon className={classes.icon}/>
         <Typography variant="h6">
              User API
          </Typography>
          </div>
          <button onClick={getusers} className="btnn">Get Users</button>
          </Toolbar>
      </AppBar>
      {loading && <div className='loading'><img src="https://cdn.dribbble.com/users/1787505/screenshots/7300251/media/a351d9e0236c03a539181b95faced9e0.gif" alt="loading"/></div>}

{(users.length !==0 && loading===false) && <main>
          <Container className={classes.carrGrid} maxWidth="md">
              <Grid container spacing={4}>
                  {users.length !==0 && users.map((card)=>(
                      <Grid item key={card.id}  xs={12} md={4}>
                      <Card className={classes.card}>
                      <CardMedia
                      className={classes.cardMedia}
                      image={card.avatar}
                      title="Image title"
                      />
                      <CardContent  className={classes.cardContent} >
                          <Typography gutterBottom className={classes.data}>
                              FirstName : {card.first_name}
                          </Typography>
                          <Typography gutterBottom className={classes.data}>
                              LastName : {card.last_name}
                          </Typography>
                          <Typography gutterBottom className={classes.data}>
                              Email : {card.email}
                          </Typography>
                      </CardContent>
                      </Card>
                  </Grid>
                  ))}

              </Grid>
          </Container >
      </main>}
      </>
  )
}

export default App
