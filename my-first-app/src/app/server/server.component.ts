import { Component, OnInit } from "@angular/core";


@Component({
    selector: 'app-server',
    templateUrl: './server.component.html'
})
export class ServerComponent implements OnInit {

    serverId: number = 10;

    serverStatus: string = 'online';

    disableNewServer: boolean = true;

    serverCreationStatus: string = 'No Server was created!';

    constructor() {
        setTimeout(() => {
            this.disableNewServer = false;
        }, 2000);
    }

    ngOnInit(): void {
        throw new Error("Method not implemented.");
    }


    getServerStatus() {
        return this.serverStatus;
    }






    onCreateServer() {
        this.serverCreationStatus = 'Server was created!';
    }





}