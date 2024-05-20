import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class AppMenuService {
	getAppMenus() {
		return [
		{
			'icon': 'fa fa-align-left',
			'title': 'Fabricante',
			'url': '/manufacturer',
			'caret': 'true',
			'submenu': [{
				'url': '/manufacturer',
				'title': 'Listar'
			},
			{
				'url': '/manufacturer/add',
				'title': 'Adicionar'
			}
		]
		},
		{
			'icon': 'fa fa-align-left',
			'title': 'Modelo',
			'url': '/model',
			'caret': 'true',
			'submenu': [{
				'url': '/model',
				'title': 'Listar'
			},
			{
				'url': '/model/add',
				'title': 'Adicionar'
			}]
		},
		{
			'icon': 'fa fa-align-left',
			'title': 'Carro',
			'url': '/car',
			'caret': 'true',
			'submenu': [{
				'url': '/car',
				'title': 'Listar'
			},
			{
				'url': '/car/add',
				'title': 'Adicionar'
			}]
		}		,
		{
			'icon': 'fa fa-align-left',
			'title': 'Serviço',
			'url': '/service',
			'caret': 'true',
			'submenu': [{
				'url': '/service',
				'title': 'Listar'
			},
			{
				'url': '/service/add',
				'title': 'Adicionar'
			}]
		}					
	];
	}
}