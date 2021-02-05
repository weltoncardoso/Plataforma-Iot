import React from 'react';
import {Switch, Route} from 'react-router-dom';


import Home from '../components/Pages/Home';
import Tabela from '../components/Pages/Table';
import Indicador from '../components/Pages/Indicator';
import Graph from '../components/Pages/Graph';
import Mapa from '../components/Pages/Map';
import Cadastro from '../components/Pages/Cadastro';

export default function Router(){
    return(
        
        <Switch>
            <Route path="/" exact component={Home}/>
            <Route path="/tabela" component={Tabela}/>
            <Route path="/indicator" component={Indicador}/>
            <Route path="/map" component={Mapa}/>
            <Route path="/graph" component={Graph}/>
            <Route path="/cadastro" component={Cadastro}/>
        </Switch>
    );
}