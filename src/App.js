import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
// Switch avvolge Route e gli permette piu precisione: il primo Route che combacia lo fa andare e il resto nn lo guarda neanche
// così si evitano possibili errori con Route
// Route ha tre parametri exact path e component
// Route passa al component (solo a lui e non ad eventuali figli!) tre proprietà: history, location, match
// potrei passare la prop che mi serve, x esempio history, ai figli e loro ancora piu giu se serve ma è
// brutto pattern da seguire perche ai figli di mezzo nn serve a nulla questa prop
// si puo usare withRouter che è un higher order component che arriva da react-router-dom
// prende un component in entrata e te ne ritorna uno modificato
// in questo caso lo uso x avvolgere il MenuItem component x fargli arrivare la prop history

// dentro match, fra le altre cose, c'è oggetto params che contiene i parametri che arrivano dall'url

// proprietà history: ci sono due modi x navigare tra i componenti, uno è dinamicamente con Link  (<Link to="/topics">Topics</Link>)
// ma ha problema che non stiamo cambiando pagina davvero, come farmemo normalmente, ma stiamo facendo si che solo una parte del dom
// che vogliamo noi venga vista via js
// altra maniera è una la prop history  <button onClick={() => props.history.push('/topics')}>Vai</button>

// altra prop location ci dice dove siamo in questo momento; pathname è la prop importante
import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component';

import './App.css';

class App extends Component {
  render() { 
    return (  
      <div>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/shop" component={ShopPage} />
        </Switch>
      </div>
    );
  }
}
 
export default App;