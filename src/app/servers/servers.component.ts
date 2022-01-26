import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {

  allowedNewServer=false;
  serverName='';
  buttonDisable=true;
  serverCreationStatus="Server was not created";
  serverCreated=false;
  servers=['TestServer1','TestServer2'];
  userName='';
  constructor() 
  {
    
    // setTimeout(() => {
    //   this.allowedNewServer=true;
    // },2000);

  }

  onCreatedServer()
  {
    this.serverCreated=true;

    this.servers.push(this.serverName);
    this.serverCreationStatus="Server is created and Name is:"+this.userName;
  }

  onResetString()
  {
    this.userName='';
  }

  onUpdateServer(event:Event)
  {
    this.userName=(<HTMLInputElement>event.target).value;

  }

  ngOnInit(): void {
  }

}
