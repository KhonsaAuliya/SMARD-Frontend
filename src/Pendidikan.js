import React, { Component } from 'react';
import Table_pendidikan from './components/Table_pendidikan';
import CanvasJSReact from './assets/canvasjs.react';
var CanvasJSChart = CanvasJSReact.CanvasJSChart;
 
class Pendidikan extends Component {
    render() {
        var data = [
          {id: 1, group: 'Belum Masuk TK', total: '15%'},
          {id: 2, group: 'TK/Taman Kanak-kanak', total: '15%'},
          {id: 3, group: 'Tidak Pernah Sekolah', total: '1%'},
          {id: 4, group: 'SD/Sederajat', total: '10%'},
          {id: 5, group: 'Tidak Tamat SD', total: '1%'},
          {id: 6, group: 'SLTP/Sederajat', total: '35%'},
          {id: 7, group: 'SLTA/Sederajat', total: '35%'},
          {id: 8, group: 'Mahasiswa', total: '10%'},
        ];

        const options = {
            title: {
                text: "Data Berdasarkan Pendidikan"
            },
            animationEnabled: true,
            data: [
            {
                type: "column",
                dataPoints: [
                    { label: "Belum Masuk TK",  y: 15  },
                    { label: "TK", y: 15  },
                    { label: "Tidak Pernah Sekolah", y: 5 },
                    { label: "SD/Sederajat", y: 10 },
                    { label: "Tidak Tamat SD", y: 5  },
                    { label: "SLTP/Sederajat", y: 35 },
                    { label: "SLTA/Sederajat", y: 35 },
                    { label: "Mahasiswa", y: 10}
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
                <Table_pendidikan data={data}/>
            </div>
        </div>
        );
    }
}

export default Pendidikan;