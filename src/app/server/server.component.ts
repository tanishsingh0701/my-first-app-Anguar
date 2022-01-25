import { Component } from '@angular/core';

@Component(
    {
        selector:'app-server',
        templateUrl:'./server.component.html'
    })
export class ServerComponent
{
    ServerId=10;
    //both ways we can declare var
    serverStatus:string='offline';

}