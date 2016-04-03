import {inject} from 'aurelia-framework';
import {Router} from "aurelia-router";

@inject(Router)
export class App {

    constructor(router) {
        this.router = router;
        this.router.configure(config => {

            config.title = "Aurelia";

            config.map([
                { route: ["", "inicio"], moduleId: "inicio", nav: true, title: "Início" },
                { route: "people", moduleId: "people", nav: true, title: "Personagens" },
                { route: "sobre", moduleId: "sobre", nav: true, title: "Sobre" }
            ])
        });
    }
}