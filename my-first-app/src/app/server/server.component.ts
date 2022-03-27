import { Component, OnInit } from "@angular/core";


@Component({
    selector: 'app-server',
    templateUrl: './server.component.html',
    styleUrls: ['./server.component.css']
})
export class ServerComponent implements OnInit {

    serverId: number = 10;

    serverStatus: string = 'online';

    disableNewServer: boolean = true;

    serverCreationStatus: string = 'No Server was created!';

    userName = '';

    serverName = 'TestServer';

    showSecrete = false;

    btnClickNums = [];


    constructor() {
        setTimeout(() => {
            this.disableNewServer = false;
        }, 2000);
    }

    ngOnInit(): void {

    }


    getServerStatus() {
        return this.serverStatus;
    }

    onCreateServer() {
        this.serverCreationStatus = 'Server was created! Name is ' + this.serverName;
    }



    onUpdateServerName(event: Event) {
        console.log(event)
        // 將 event.target 先強制轉型成 HTMLInputElement
        this.serverName = (<HTMLInputElement>event.target).value;
    }

    resetUserName() {
        this.userName = '';
    }

    displayDetails() {

        this.showSecrete = !this.showSecrete;
        this.btnClickNums.push(this.btnClickNums.length + 1);
    }


}