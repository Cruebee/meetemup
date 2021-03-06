import React, { Component } from 'react';
import { ResponsiveContainer, PieChart, Pie, Cell, Legend, Tooltip, } from 'recharts';

const data01 = [
  { name: 'RSVP', value: 5 },
  { name: 'Total Spots', value: 10 }
];
const colors = ["#1978a5", "#FF0000"]

class Event extends Component {

  state = {
    expanded: false,
  }


  handleShowDetails = () => {
    if (this.state.expanded === false) {
      this.setState({ expanded: true });
    } else {
      this.setState({ expanded: false });
    }
  }

  getPieData = () => {
    var rsvp = this.props.event.yes_rsvp_count;
    var limit = this.props.event.rsvp_limit;


    var data = [
      { name: "Attending", value: rsvp },
      { name: "Vacancy", value: limit - rsvp }
    ]
    return data;
  }

  render() {

    const event = this.props.event;
    const expanded = this.state.expanded;

    return (
      <div className="Event">
        <p className="name">{event.name}</p>
        <p className="time">{event.local_time} - {event.local_date}</p>
        <p className="going">{event.yes_rsvp_count} people are attending</p>

        {this.state.expanded &&
          <div className="extra">
            {event.venue && event.venue.name &&
              <p className='address'>
                {event.venue.name
                  + ', ' + event.venue.address_1
                  + ', ' + event.venue.city
                  + ', ' + event.venue.localized_country_name
                }
              </p>
            }
            <div className="pie-container">
              {event.rsvp_limit && event.yes_rsvp_count &&
                <ResponsiveContainer height={180}>
                  <PieChart>
                    <Pie
                      data={this.getPieData()}
                      dataKey={"value"}
                      cx="50%"
                      cy="50%"
                      labelLine={false}
                      outerRadius={40}
                      fill="#8884d8"
                      label
                    >
                      {
                        data01.map((entry, index) => <Cell key={`cell-${index}`} fill={colors[index]} />)
                      }
                    </Pie>
                    <Legend iconSize={10} iconType="triangle" layout="horizontal" verticalAlign="bottom" align="center" />
                    <Tooltip />
                  </PieChart>
                </ResponsiveContainer>
              }
            </div>

            <div className="description" dangerouslySetInnerHTML={{ __html: event.description }} />
            <p className="visibility">{event.visibility}</p>
            <a className="link" href={event.link}>Event Link</a>
          </div>
        }
        {expanded &&
          <button className="details-btn" onClick={this.handleShowDetails}>Hide Details</button>
        }
        {!expanded &&
          <button className="details-btn" onClick={this.handleShowDetails}>Show Details</button>}
      </div>
    );
  }
}


export default Event;