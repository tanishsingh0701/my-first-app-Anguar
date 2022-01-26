import { Component } from '@angular/core';

@Component(
    {
        selector:'app-server',
        templateUrl:'./server.component.html',
        styles:[`
        .online
        {
            color:white;
        }
        `]
    })
export class ServerComponent
{
    serverStatus='';
    /**
     *
     */
    constructor() {
        this.serverStatus=Math.random()>0.5?'online':'offline';
        
    }
    ServerId=10;
    getColor()
    {
        return this.serverStatus ==='online'?'green':'red';
    }
    //both ways we can declare var
    // serverStatus:string='offline';

}