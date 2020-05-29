import React from 'react'
import Nav from '../components/Nav'
import Articles from '../containers/Articles'
import Article from '../containers/Article'
import Category from '../containers/Category'
import { Switch, Route } from 'react-router-dom'

export default function App() {
    return (
        <div className="App">
            <Nav />
            <Switch>
                <Route path="/" component={Articles} exact />
                <Route path="/article/:id" component={Article} exact />
                <Route path="/category/:id" component={Category} exact />
            </Switch>
        </div>
    )
}
