import React, { Component } from 'react';
import Table_pekerja from './components/Table_pekerja';
import CanvasJSReact from './assets/canvasjs.react';
var CanvasJSChart = CanvasJSReact.CanvasJSChart;
 
class Pekerja extends Component {
    render() {
        var data = [
          {id: 1, name: 'Tidak Bekerja', value: '55%'},
          {id: 2, name: 'Ibu Rumah Tangga', value: '25%'},
          {id: 3, name: 'PNS', value: '20%'},
          {id: 4, name: 'Buruh', value: '10%'},
          {id: 5, name: 'Swasta', value: '10%'},
        ];

        const options = {
            title: {
                text: "Data Berdasarkan Pekerjaan"
            },
            animationEnabled: true,
            data: [
            {
                type: "column",
                dataPoints: [
                    { label: "Tidak Bekerja",  y: 45  },
                    { label: "Ibu Rumah Tangga", y: 24  },
                    { label: "PNS", y: 20 },
                    { label: "Buruh", y: 15 },
                    { label: "Swasta", y: 10},
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
                <Table_pekerja data={data}/>
            </div>
        </div>
        );
    }
}

export default Pekerja;