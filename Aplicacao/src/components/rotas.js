import React from 'react';
import {Switch, Route} from 'react-router-dom';


import Home from '../components/Pages/Home';
import Tabela from '../components/Pages/Table';

export default function Router(){
    return(
        <Switch>
            <Route path="/" exact component={Home}/>
            <Route path="/tabela" component={Tabela}/>

        </Switch>
    );
}