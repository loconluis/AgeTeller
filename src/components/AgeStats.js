import React, { Component } from 'react';

class AgeStats extends Component {
  timeSince(date) {
    let present = new Date().getTime();
    let past = new Date(date).getTime();

    let diff = Math.abs(present - past);

    // Math for calculate time
    let days = Math.floor(diff / (1000*3600*24));
    let years = Math.floor(days / 365);
    days-= years*365;
    let months = Math.floor(days/31);
    days-= months*31;

    return `${years} years, ${months} months, and ${days} days`;
  }

  render() {
    return (
      <div>
        <h3>{this.props.date}</h3>
        <h4>Congrats on {this.timeSince(this.props.date)}!</h4>
      </div>
    )
  }
}

export default AgeStats;