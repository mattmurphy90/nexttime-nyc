import React, { Component } from 'react';

export default class Findstop extends Component {

  render() {
    return (
      <div>
      <div id="trainL" className="pickStops">
        <p>{this.props.trainchoice.newTrain} Train:</p>
        <p>What Stop are you leaving from?</p>
        <div className="directionWrap">
          <select id="trainStop" onChange={ () => this.props.callApi(document.getElementById("trainStop").value, this.props.trainchoice.newTrain) }>
            <option value="L01">8 Av</option>
            <option value="L02">6 Av</option>
            <option value="L03">Union Sq - 14 St</option>
            <option value="L05">3 Av</option>
            <option value="L06">1 Av</option>
            <option value="L08">Bedford Av</option>
            <option value="L10">Lorimer St</option>
            <option value="L11">Graham Av</option>
            <option value="L12">Grand St</option>
            <option value="L13">Montrose Av</option>
            <option value="L14">Morgan Av</option>
            <option value="L15">Jefferson St</option>
            <option value="L16">DeKalb Av</option>
            <option value="L17">Myrtle - Wyckoff Avs</option>
            <option value="L19">Halsey St</option>
            <option value="L20">Wilson Av</option>
            <option value="L21">Bushwick Av - Aberdeen St</option>
            <option value="L22">Broadway Jct</option>
            <option value="L24">Atlantic Av</option>
            <option value="L25">Sutter Av</option>
            <option value="L26">Livonia Av</option>
            <option value="L27">New Lots Av</option>
            <option value="L28">E 105 St</option>
            <option value="L29">Canarsie</option>
          </select>
        </div>
      </div>

      <div id="train6" className="pickStops">
        <p>{this.props.trainchoice.newTrain} Train:</p>
        <p>What Stop are you leaving from?</p>
        <div className="directionWrap">
          <select id="trainStop2" onChange={ () => this.props.callApi(document.getElementById("trainStop2").value, this.props.trainchoice.newTrain) }>
            <option>choose a stop</option>
            <option value="601">Pelham Bay Park</option>
            <option value="602">Buhre Avenue</option>
            <option value="603">Middletown Road</option>
            <option value="604">Westchester Square-East Tremont Avenue</option>
            <option value="606">Zerega Avenue</option>
            <option value="607">Castle Hill Avenue</option>
            <option value="608">Parkchester</option>
            <option value="609">Saint Lawrence Avenue</option>
            <option value="610">Morrison-Sound View Avenues</option>
            <option value="611">Elder Avenue</option>
            <option value="612">Whitlock Avenue</option>
            <option value="613">Hunts Point Avenue</option>
            <option value="614">Longwood Avenue</option>
            <option value="615">East 149 Street</option>
            <option value="616">East 143 Street</option>
            <option value="617">Cypress Avenue / East 138 Street</option>
            <option value="618">Brook Avenue / East 138 Street</option>
            <option value="619">3 Avenue-138 Street </option>
            <option value="621">125 Street / Lexington Avenue</option>
            <option value="622">116 Street</option>
            <option value="623">110 Street</option>
            <option value="624">103 Street</option>
            <option value="625">96 Street </option>
            <option value="626">86 Street </option>
            <option value="627">77 Street</option>
            <option value="628">68 Street-Hunter College</option>
            <option value="629">59 Street</option>
            <option value="630">51 Street </option>
            <option value="631">Grand Central-42 Street</option>
            <option value="632">33 Street</option>
            <option value="633">28 Street </option>
            <option value="634">23 Street  </option>
            <option value="635">14 Street-Union Square</option>
            <option value="636">Astor Place</option>
            <option value="637">Bleecker Place</option>
            <option value="638">Spring St</option>
            <option value="639">Canal Street</option>
            <option value="640">Brooklyn Bridge-City Hall </option>
          </select>
        </div>
      </div>
      </div>
    );
  }
}
