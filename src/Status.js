import React, { Component } from 'react';
import Table_status from './components/Table_status';
import CanvasJSReact from './assets/canvasjs.react';
var CanvasJSChart = CanvasJSReact.CanvasJSChart;
 
class Status extends Component {
    render() {
        var data = [
          {id: 1, name: 'Belum Menikah', value: '55%'},
          {id: 2, name: 'Menikah', value: '25%'},
          {id: 3, name: 'Cerai Hidup', value: '20%'},
          {id: 4, name: 'Cerai Mati', value: '10%'},
        ];

        const options = {
            title: {
                text: "Data Berdasarkan Status"
            },
            animationEnabled: true,
            data: [
            {
                type: "column",
                dataPoints: [
                    { label: "Belum Menikah",  y: 45  },
                    { label: "Menikah", y: 24  },
                    { label: "Cerai Hidup", y: 20 },
                    { label: "Cerai Mati", y: 15 },
                ]
            }
            ],
        }
        
        return (
        <div className="site-section block bg-light">
            <div className="container">
                <div className="row no-gutters d-flex">
                <h1>Data Penduduk</h1>
                <div className="col-md-12">
                    <CanvasJSChart options = {options} 
                        onRef={ref => this.chart = ref} 
                    />
                </div>
                </div>
            </div>
            <div className="container">
                <p className="Table-header">Table Data</p>
                <Table_status data={data}/>
            </div>
        </div>
        );
    }
}

export default Status;