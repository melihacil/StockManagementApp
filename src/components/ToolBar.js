import React from 'react'
import { Toolbar } from 'primereact/toolbar';
import { Avatar } from 'primereact/avatar';
import { useDispatch, useSelector } from "react-redux";
import { TabMenu } from 'primereact/tabmenu';
import { PrimeReactProvider, PrimeReactContext } from 'primereact/api';
import { Button } from 'primereact/button';

function ToolBar() {
    const userName = useSelector((state) => state.loginuser);
    console.log("+++++++++");
    console.log(userName);
    const items = [
        { label: 'Dashboard', icon: 'pi pi-home' },
        { label: 'Transactions', url:'/basket', icon: 'pi pi-chart-line' },
        { label: 'Products', icon: 'pi pi-list' },
        { label: 'Messages', icon: 'pi pi-inbox' }
    ];



    return (
        <>
        <div>
            
            <TabMenu model={items} />
                             
        </div>
        
        <div style={{
            display:'flex',
            flexDirection:'column',
            alignItems:'flex-end',
            
        }}>
            <h3 style={{
                marginRight:20,
            }}>{userName.username}</h3>
            <Button style={{
                marginRight:20,
            }} label="Log Out" severity="warning" />
        </div>
        </>
    );
}

export default ToolBar