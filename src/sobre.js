import {inject} from 'aurelia-framework';

export class Sobre {

    constructor() {
        this.about = [];

    }
    loadSobre() {
            this.obj = {"dadosPessoais":[
                                        {"firstName":"Geciane", "lastName":"Junges"},
                                        {"cidade":"Florianópolis", "pais":"Brasil"}
                                    ]};
        this.about.push(this.obj);
    }

    activate() {
        this.loadSobre();
    }
}