import React, { Component } from 'react';
import { Route, NavLink } from 'react-router-dom';
import Table1 from './components/Table1';
import Table_agama from './components/Table_agama';
import Table_status from './components/Table_status';
import CanvasJSReact from './assets/canvasjs.react';
var CanvasJSChart = CanvasJSReact.CanvasJSChart;


class DataPenduduk extends Component {
	render() {
		var data_1 = [
		  {id: 1, group: 'Male', total: '650'},
		  {id: 2, group: 'Female', total: '350'},
		];
		var data_2 = [
          {id: 1, name: 'Islam', value: '450'},
          {id: 2, name: 'Kristen', value: '250'},
          {id: 3, name: 'Protestan', value: '200'},
          {id: 4, name: 'Hindu', value: '100'},
          {id: 5, name: 'Budha', value: '100'},
        ];
        var data_3 = [
          {id: 1, name: 'Belum Menikah', value: '550'},
          {id: 2, name: 'Menikah', value: '250'},
          {id: 3, name: 'Cerai Hidup', value: '200'},
          {id: 4, name: 'Cerai Mati', value: '100'},
        ];
        var data_4 = [
          {id: 1, name: 'Tidak Bekerja', value: '550'},
          {id: 2, name: 'Ibu Rumah Tangga', value: '250'},
          {id: 3, name: 'PNS', value: '200'},
          {id: 4, name: 'Buruh', value: '100'},
          {id: 5, name: 'Swasta', value: '100'},
        ];
        var data_5 = [
          {id: 1, group: 'Belum Masuk TK', total: '150'},
          {id: 2, group: 'TK/Taman Kanak-kanak', total: '150'},
          {id: 3, group: 'Tidak Pernah Sekolah', total: '10'},
          {id: 4, group: 'SD/Sederajat', total: '100'},
          {id: 5, group: 'Tidak Tamat SD', total: '10'},
          {id: 6, group: 'SLTP/Sederajat', total: '350'},
          {id: 7, group: 'SLTA/Sederajat', total: '350'},
          {id: 8, group: 'Mahasiswa', total: '100'},
        ];

		const options_1 = {
			title: {
				text: "Data Based on Gender"
			},
			animationEnabled: true,
			data: [
			{
				type: "column",
				dataPoints: [
					{ label: "Male",  y: 40  },
					{ label: "Female", y: 60  },
				]
			}
			],
		}
		const options_2 = {

            title: {
                text: "Data Based on Religion"
            },
            animationEnabled: true,
            data: [
            {
                type: "column",
                dataPoints: [
                    { label: "Islam",  y: 45  },
                    { label: "Kristen", y: 24  },
                    { label: "Protestan", y: 20 },
                    { label: "Hindu", y: 15 },
                    { label: "Budha", y: 15 },
                ]
            }
            ],
        }
        const options_3 = {
            title: {
                text: "Data Based on Status"
            },
            animationEnabled: true,
            data: [
            {
                type: "column",
                dataPoints: [
                    { label: "Single",  y: 45  },
                    { label: "Married", y: 24  },
                    { label: "Divorced", y: 20 },
                    { label: "Death Divorce", y: 15 },
                ]
            }
            ],
        }
        const options_4 = {
            title: {
                text: "Data Based on Job"
            },
            animationEnabled: true,
            data: [
            {
                type: "column",
                dataPoints: [
                    { label: "Does not work",  y: 45  },
                    { label: "Housewife", y: 24  },
                    { label: "Civil servants", y: 20 },
                    { label: "Labor", y: 15 },
                    { label: "Swasta", y: 10},
                ]
            }
            ],
        }
        const options_5 = {
            title: {
                text: "Data Based on Education"
            },
            animationEnabled: true,
            data: [
            {
                type: "column",
                dataPoints: [
                    { label: "Not yet in kindergarten",  y: 15  },
                    { label: "Kindergarten", y: 15  },
                    { label: "Never School", y: 5 },
                    { label: "SD/Equivalent", y: 10 },
                    { label: "Not completed in primary school", y: 5  },
                    { label: "SLTP/Equivalent", y: 35 },
                    { label: "SLTA/Equivalent", y: 35 },
                    { label: "College Student", y: 10}
                ]
            }
            ],
        }

		return (
		<div className="site-section block bg-light">
			<div className="container">
				<div className="row no-gutters d-flex">
				  <div className="col-12 text-center">
            <h2 className="section-title mb-3">Village Population Data</h2>
          </div>
					<div className="col-md-12" align="center">
						<CanvasJSChart options = {options_1}
							onRef={ref => this.chart = ref}
						/>
					</div>
          <div className="col-12 text-center">
            <h2 className="section-title mb-3">Table Data</h2>
          </div>
            <Table1 data={data_1} /><br/>

					<div className="col-md-12" align="center">
						<CanvasJSChart options = {options_2}
							onRef={ref => this.chart = ref}
						/>
					</div>
          <div className="col-12 text-center">
            <h2 className="section-title mb-3">Table Data</h2>
          </div>
            <Table1 data={data_2}/><br/>

					<div className="col-md-12" align="center">
						<CanvasJSChart options = {options_3}
							onRef={ref => this.chart = ref}
						/>
					</div>
          <div className="col-12 text-center">
            <h2 className="section-title mb-3">Table Data</h2>
          </div>
            <Table1 data={data_3}/><br/>

					<div className="col-md-12" align="center">
						<CanvasJSChart options = {options_4}
							onRef={ref => this.chart = ref}
						/>
					</div>
          <div className="col-12 text-center">
            <h2 className="section-title mb-3">Table Data</h2>
          </div>
            <Table1 data={data_4}/><br/>

					<div className="col-md-12" align="center">
						<CanvasJSChart options = {options_5}
							onRef={ref => this.chart = ref}
						/>
					</div>
          <div className="col-12 text-center">
            <h2 className="section-title mb-3">Table Data</h2>
          </div>
            <Table1 data={data_5}/>

				</div>
			</div>
    </div>
		);
	}
}

export default DataPenduduk;
