import React, { Component } from 'react';
import Table_keuangan from './components/Table_keuangan';
import Table_pemasukan from './components/Table_pemasukan';
import Table_pengeluaran from './components/Table_pengeluaran';
import { Route, NavLink, HashRouter } from "react-router-dom";
import Pemasukan from './Pemasukan';
import Pengeluaran from './Pengeluaran';

class Keuangan extends Component {
	render(){
		var data = [
		  {id: 1, goal_value: '20 Agustus 2019', frecuency: 'Foto Copy', purpose: '-', content: 'Rp. 5000'},
		  {id: 2, goal_value: '20 Agustus 2019', frecuency: 'Donasi PT.Merdeka', purpose: '-', content: 'Rp. 100000'},
		  {id: 3, goal_value: '21 Agustus 2019', frecuency: 'Kebersihan', purpose: '-', content: 'Rp. 10000'},
		  {id: 5, goal_value: '22 Agustus 2019', frecuency: 'Foto Copy', purpose: '-', content: 'Rp. 5000'},

		];

		const options = {
			title: {
				text: "Data Keuangan"
			},
			animationEnabled: true,
			data: [
			{
				type: "column",
				dataPoints: [
					{ label: "date",  y: 10  },
					{ label: "name", y: 30  },
					{ label: "entering", y: 20 },
					{ label: "export", y: 20 },
					{ label: "total", y:20 }
				]
			}
			],
		}

		var data_pemasukan = [
		  {id: 1, wallet_id: '', value: '', category_id: '', purpose: '', sources:'', datetime_trx: ''},

		];

		const options_pemasukan = {
			title: {
				text: "Finacial Incomes Data"
			},
			animationEnabled: true,
			data: [
			{
				type: "column",
				dataPoints: [
					{ label: "wallet_id",  y: 10  },
					{ label: "value", y: 30  },
					{ label: "category_id", y: 20 },
					{ label: "purpose", y: 20 },
					{ label: "sources", y:20 },
					{ label: "datetime_trx", y:20 }
				]
			}
			],
		}
		var data_pengeluaran = [
		  {id: 1, wallet_id: '', value: '', category_id: '', purpose: '', sources:'', datetime_trx: ''},

		];

		const options_pengeluaran = {
			title: {
				text: "Finacial Incomes Data"
			},
			animationEnabled: true,
			data: [
			{
				type: "column",
				dataPoints: [
					{ label: "wallet_id",  y: 10  },
					{ label: "value", y: 30  },
					{ label: "category_id", y: 20 },
					{ label: "purpose", y: 20 },
					{ label: "sources", y:20 },
					{ label: "datetime_trx", y:20 }
				]
			}
			],
		}

		return (
		<HashRouter>
			<div className="site-section" id="financial-section">
	        <div className="container">
		        <div className="row mb-5">
		            <div className="col-12 text-center">
		              <h2 className="section-title mb-3">Financial</h2>
		            </div>
		        </div>

			    
	        	<Route>
	        		<Route path="/Pemasukan" component={Pemasukan} />
	        		<Route path="/Pengeluaran" component={Pengeluaran} />
	        	</Route>

		        <div className="p-5 bg-white">
					<Table_keuangan data={data}/>
				</div>
			</div>
			</div>

			<div className="site-section bg-light" id="pemasukan-section">
        	<div className="container">
	        	<div className="row mb-5">
			        <div className="col-12 text-center">
			            <h2 className="section-title mb-3">Finacial Incomes</h2>
			        </div>
			    </div>

			    <div className="p-5 bg-white">
					<Table_pemasukan data={data_pemasukan} />
				</div>
			</div>
			</div>

			<div className="site-section bg-light" id="pengeluaran-section">
        	<div className="container">
	        	<div className="row mb-5">
		            <div className="col-12 text-center">
		              <h2 className="section-title mb-3">Finacial Expences</h2>
		            </div>
		        </div>

		        <div className="p-5 bg-white">
					<Table_pengeluaran data={data_pengeluaran} />
				</div>
			</div>
			</div>
		</HashRouter>
		);
	}
}

export default Keuangan;
