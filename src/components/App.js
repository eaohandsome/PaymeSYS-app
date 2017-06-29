import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { Route, Redirect, withRouter, Switch } from 'react-router-dom'
import Async from 'react-code-splitting'

import SidebarLeft from './sidebar'
import Header from './Header'
import SettingProfile from './SettingProfile/SettingProfile'
import Postbox from './PostBox'
import simpleRQ from './SimpleRQ'
import Dashboard from './Dashboard'
import Login from './Auth/Login'
import IPDs from './SubmitPlan/IPD/IPD'
import Signup from './Auth/Signup'
import welcomePage from './welcome'

import 'semantic-ui-css/semantic.min.css'
import '../styles/main.scss'

import ViewAllPlan from './ViewAllPlan'

const App = ({ isAuthenticated }) => (
  <div>
    <Header />
    {isAuthenticated
      ? <Switch>
          <Route path="/postbox" component={Postbox} />
          <Route path="/login" component={Login} />
          <Route path="/simplerequirement" component={simpleRQ} />
          <Route path="/signup" component={Signup} />
          <Route path="/dashboard" component={Dashboard} />
          <Route path="/settingprofile" component={SettingProfile} />
          <Route path="/ipd" component={IPDs} />
        </Switch>
      : <Switch>
          <Route path="/ipd" component={IPDs} />
          <Route path="/login" component={Login} />
          <Route path="/postbox" component={Postbox} />
          <Route path="/signup" component={Signup} />
          <Route path="/dashboard" component={Dashboard} />
          <Route path="/welcomePage" component={welcomePage} />
          <Redirect to={{ pathname: '/login' }} />
        </Switch>}
  </div>
)

App.propTypes = {
  isAuthenticated: PropTypes.bool.isRequired,
}

const mapStateToProps = state => ({
  isAuthenticated: state.authReducer.token != null,
})

const Container = connect(mapStateToProps)(App)
export default withRouter(Container)
