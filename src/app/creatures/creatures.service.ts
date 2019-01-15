import { Injectable } from '@angular/core';
import {Creatures} from  '../creatures/creatures';
import {Http} from '@angular/http';
import {map} from 'rxjs/operators';

@Injectable()
export class CreaturesService{
    Creatures = [
        new Creatures(
            'Name1',
            'Birth1',
            'Device1',
            'Creatures1.jpg',
        )
    ];
    getCreatures():Array<Creatures>{
        return this.Creatures;
    }

    constructor(private _conexHttp:Http){    }
    getCreatureAjax(){
        let ruta='http://localhost:8081/DAW_M15_18_19/CreaturesEjemploServicesAjax2/respuestaJSON_PHP/getCreatures.php';
        return this._conexHttp.get(ruta).pipe(map(res=>res.json()));
    }

    getCreaturesAjax(){
        let ruta='http://localhost:8081/DAW_M15_18_19/CreaturesEjemploServicesAjax2/respuestaJSON_PHP/getCreaturess.php';
        return this._conexHttp.get(ruta).pipe(map(resp=>resp.json()));
    }


}