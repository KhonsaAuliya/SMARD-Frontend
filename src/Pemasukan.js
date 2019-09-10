import React, { Component } from 'react';
import Table_pemasukan from './components/Table_pemasukan';

class Pemasukan extends Component {
	render(){
		var data = [
		  {id: 1, wallet_id: '', value: '', category_id: '', purpose: '', sources:'', datetime_trx: ''},

		];

		const options = {
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
			<div className="site-section">
	        <div className="container">
		        <div className="row mb-5">
		            <div className="col-12 text-center">
		              <h2 className="section-title mb-3">Finacial Incomes</h2>
		            </div>
		        </div>
		        
		        <div className="p-5 bg-white">
					<Table_pemasukan data={data} />
				</div>
			</div>
			</div>
		);
	}
}
export default Pemasukan;