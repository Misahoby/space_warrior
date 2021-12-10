import React, { Component } from 'react';
import { CChart, CChartBar } from '@coreui/react-chartjs';

export default class Tokenomics extends Component {
  render() {

    return (
      <div id="tokenomics">
        <div className='container'>
          <div className="title">
            < img className="tokenimg" src="images/block5-tit.dbe8cb96.png" />
          </div>
          <div className='row condition'>
            <div className='col-md-6'>
              <div className='top'>
                <h5>
                  Total Supply: 1,000,000,000,000
                </h5>
              </div>
              <div className='middle'>
                <CChartBar
                  data={{
                    labels: ['Marketing', 'Game Development'],
                    datasets: [
                      {
                        label: 'percentage',
                        backgroundColor: ['#0dcaf0',
                        ],
                        data: [4, 5],
                        barPercentage: 0.5,
                        borderColor: '#1078e1',
                        borderRadius: 6,
                      },
                    ],
                  }}

                  options={{
                    plugins: {
                      legend: {
                        labels: {
                          font: {
                            size: 15,
                            family: 'cursive'
                          },
                          color: '#1078e1'
                        }                        
                      }                
                    },
                    scales: {
                      xAxisID: {
                        ticks: {
                          font: {
                            size: 20,
                            family:"times new romans"
                          },
                          color: 'white',                          
                        }
                      },
                      yAxisID: {
                        ticks: {
                          font: {
                            size: 15
                          },
                          color: 'white'
                        }
                      },                      
                    }
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}