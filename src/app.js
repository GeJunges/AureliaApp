import {Router} from "aurelia-router";

export class App {
    static inject() {
        return [Router];
    }

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