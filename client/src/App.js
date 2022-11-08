import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  useHistory,
  Route
} from 'react-router-dom'

import Layout from './comps/Layout';
import { Homepage } from './pages/Homepage';
import Test from './pages/test';
import { SingleNews } from './pages/SingleNews';
import { News } from './pages/News';
import SearchQuery from './pages/SearchQuery';
import PageNotFound from './pages/PageNotFound';
import Register from './pages/Register';
import Login from './pages/Login';
import PrivateRoutes from './comps/auth/PrivateRoutes';
import Logout from './pages/Logout';
import {Dashboard} from './pages/dashboard/dashboard/DashboardComponent' 



import AuthContext, { AuthProvider } from './context/AuthContext';




import { useState } from 'react';
// import { ColorModeContext, useMode } from './pages/auth/theme';
import { CssBaseline, ThemeProvider, Grid } from "@mui/material";
import Feed from './pages/interface/Feed';
import { useContext } from 'react';

import { Rightbar } from './pages/interface/RightBar';


function App() {
  // const [theme, colorMode] = useMode();
  const [isSidebar, setIsSidebar] = useState(true);
  const history = useHistory()

  const { user } = useContext(AuthContext)
  console.log(user)


  return (


    <AuthProvider>
      {/* <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}> */}
      <CssBaseline />

      {user === null
        ?
        <Grid container spacing={1} className="App" style={{ color: 'black', marginBottom: 10 }}>
          <Grid item sm={1} xs={1} lg={2} md={1} >
          </Grid>
          <Grid item sm={8} xs={10} md={8}  >
            <Router>
              <Layout>

                <Switch>
                  <Route exact path='/test' >
                    <Test />
                  </Route>
                  {/* For The General Masses i.e People without Authentication */}
                  <Route exact path='/' >
                    <Homepage />
                  </Route>
                  <Route exact path='/news' >
                    <News />
                  </Route>

                  <Route exact path='/news/:newsId' >
                    <SingleNews />
                  </Route>

                  <Route exact path='/search/:searchQuery' >
                    <SearchQuery />
                  </Route>


                  {/* Auths */}
                  <Route exact path='/register' >
                    <Register />
                  </Route>

                  <Route exact path='/login' >
                    <Login />
                  </Route>
                  <Route exact path='/logout' >
                    <Logout />
                  </Route>

                  <Route exact path='*' >
                    <center><h2>Page Not Found</h2></center>
                    <PageNotFound />
                  </Route>


                  {/* Private Routes */}
                  {/* <PrivateRoutes>
                    <Route exact path='/dashboard' >
                      <Dashboard />
                    </Route>
                  </PrivateRoutes> */}




                </Switch>

              </Layout>
            </Router>
          </Grid>
          <Grid item sm={3} md={2} >
            <Rightbar />
          </Grid>
        </Grid>
        :
        // When the User is Authenticated
        <Grid container spacing={1} className="App" style={{ color: 'black', marginBottom: 10 }}>
          <Grid item sm={1} xs={1} lg={2} md={1} >
          </Grid>
          <Grid item sm={8} xs={10} md={8} >
            <Router>
              <Layout>

                <Switch>
                  <Route exact path='/test' >
                    <Test />
                  </Route>
                  {/* For The General Masses i.e People without Authentication */}
                  <Route exact path='/' >
                    <Homepage />
                  </Route>
                  <Route exact path='/news' >
                    <News />
                  </Route>

                  <Route exact path='/news/:newsId' >
                    <SingleNews />
                  </Route>
                  <Route exact path='/search/:searchQuery' >
                    <SearchQuery />
                  </Route>


                  {/* Auths */}
                  <Route exact path='/logout' >
                    <Logout />
                  </Route>



                  {/* Private Routes */}
                  <PrivateRoutes>
                    <Route exact path='/dashboard' >
                      <Dashboard />
                    </Route>
                  </PrivateRoutes>



                  <Route exact path='*' >
                    <center><h2>Page Not Found</h2></center>
                    <PageNotFound />
                  </Route>
                </Switch>

              </Layout>
            </Router>
          </Grid>
          <Grid item sm={3} md={2} >
            <Rightbar />
          </Grid>
        </Grid>
      }


      {/* </ThemeProvider>
    </ColorModeContext.Provider> */}
    </AuthProvider>

  );
}

export default App;
