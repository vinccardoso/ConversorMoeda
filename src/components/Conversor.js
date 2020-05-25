import React, {Component} from 'react';
import './Conversor.css'


export default class Conversor extends Component{

    constructor(props){
        super(props);

        this.state = {
            moedaA_valor:"",
            moedaB_valor:0,
            moedaA:"",
            moedaB:"",
        }

        this.converter = this.converter.bind(this);
        this.handleChangeA = this.handleChangeA.bind(this);
        this.handleChangeB = this.handleChangeB.bind(this);
    }

    handleChangeA(event) {
        this.setState({
            moedaA: event.target.value,        
        });       
    }

    handleChangeB(event) {
        this.setState({
            moedaB: event.target.value,
        });        
    }

    converter(){
        let de_para = `${this.state.moedaA},${this.state.moedaB}`;


        let url = `https://api.exchangeratesapi.io/latest?symbols=${de_para}`
    
        fetch(url)
        .then(res=>{
                return res.json()
        })
        .then(json=>{
            let cotacao;
            let moedaB_valor;

            if(json.rates[this.state.moedaA] < json.rates[this.state.moedaB]){
                cotacao = json.rates[this.state.moedaB];
                moedaB_valor = (this.state.moedaA_valor * cotacao).toFixed(2);
            }else{
                cotacao = json.rates[this.state.moedaA];
                moedaB_valor = (this.state.moedaA_valor / cotacao).toFixed(2);
            }
            
            this.setState({moedaB_valor})
        })
    }


    render(){
        return(
            <div className="conversor">
                {/* <h2>{this.props.moedaA} para {this.props.moedaB}</h2> */}
                <h2>Cotação de moedas</h2>
                <h4>
                    <select value={this.state.value} onChange={this.handleChangeA}>
                        <option></option>
                        <option value='AUD'>AUD</option>
                        <option value='BGN'>BGN</option>
                        <option value='BRL'>BRL</option>
                        <option value='CAD'>CAD</option>
                        <option value='CHF'>CHF</option>
                        <option value='CNY'>CNY</option>
                        <option value='CZK'>CZK</option>
                        <option value='DKK'>DKK</option>
                        <option value='GBP'>GBP</option>
                        <option value='HKD'>HKD</option>
                        <option value='HRK'>HRK</option>
                        <option value='HUF'>HUF</option>
                        <option value='IDR'>IDR</option>
                        <option value='ILS'>ILS</option>
                        <option value='INR'>INR</option>
                        <option value='ISK'>ISK</option>
                        <option value='JPY'>JPY</option>
                        <option value='KRW'>KRW</option>
                        <option value='MXN'>MXN</option>
                        <option value='MYR'>MYR</option>
                        <option value='NOK'>NOK</option>
                        <option value='NZD'>NZD</option>
                        <option value='PHP'>PHP</option>
                        <option value='PLN'>PLN</option>
                        <option value='RON'>RON</option>
                        <option value='RUB'>RUB</option>
                        <option value='SEK'>SEK</option>
                        <option value='SGD'>SGD</option>
                        <option value='THB'>THB</option>
                        <option value='TRY'>TRY</option>
                        <option value='USD'>USD</option>
                        <option value='ZAR'>ZAR</option>
                    </select>
                    para
                    <select value={this.state.value} onChange={this.handleChangeB}>
                        <option></option>
                        <option value='AUD'>AUD</option>
                        <option value='BGN'>BGN</option>
                        <option value='BRL'>BRL</option>
                        <option value='CAD'>CAD</option>
                        <option value='CHF'>CHF</option>
                        <option value='CNY'>CNY</option>
                        <option value='CZK'>CZK</option>
                        <option value='DKK'>DKK</option>
                        <option value='GBP'>GBP</option>
                        <option value='HKD'>HKD</option>
                        <option value='HRK'>HRK</option>
                        <option value='HUF'>HUF</option>
                        <option value='IDR'>IDR</option>
                        <option value='ILS'>ILS</option>
                        <option value='INR'>INR</option>
                        <option value='ISK'>ISK</option>
                        <option value='JPY'>JPY</option>
                        <option value='KRW'>KRW</option>
                        <option value='MXN'>MXN</option>
                        <option value='MYR'>MYR</option>
                        <option value='NOK'>NOK</option>
                        <option value='NZD'>NZD</option>
                        <option value='PHP'>PHP</option>
                        <option value='PLN'>PLN</option>
                        <option value='RON'>RON</option>
                        <option value='RUB'>RUB</option>
                        <option value='SEK'>SEK</option>
                        <option value='SGD'>SGD</option>
                        <option value='THB'>THB</option>
                        <option value='TRY'>TRY</option>
                        <option value='USD'>USD</option>
                        <option value='ZAR'>ZAR</option>
                    </select>
                </h4>
                <input type="text" onChange={(event=>{this.setState({moedaA_valor:event.target.value})})}></input>
                <input type="button" value="Converter" onClick={this.converter}></input>
                <h2>{this.state.moedaB_valor} {this.state.moedaB}</h2>
            </div>
        );
    }
}