"use client";
import { useEffect, useState } from "react";

import { getJSONData } from '@/tools/Toolkit';
import { Orders, Order } from '@/tools/orders.model';
import { getSupportedBrowsers } from "next/dist/build/utils";
import CircleLoader from 'react-spinners/CircleLoader';
import '@fortawesome/fontawesome-free/css/all.min.css';


export default function OrdersReport({setAppState, appState}: {setAppState:Function, appState:number}) {
    // retrieve server sided script
    const RETRIEVE_SCRIPT:string = "https://www.seanmorrow.ca/_lessons/retrieveOrder.php";

    //-------------------------------------private methods
    const getOrders = async () => {
        const data:Orders = await getJSONData(RETRIEVE_SCRIPT, false, true);
        console.log(data);

        //save it in a state variable - becuase it is used in JSX and needs to persist
        setOrders(data.orders);
        //data all loaded! Change app state of web app
        setAppState(3)
    }

    //------------------------------------use effects
    useEffect (() => {
        if (appState== 2) getOrders();
    }, [appState]);

    //------------------------------------state variables
    const [orders, setOrders] = useState<Order[]>([]);
  
    if(appState == 1){
    return (<>No orders retrieved...</>);
    } else if (appState ==3) {
        return (
            <>    
            {orders.map((order) => (
                <div key={order.id} className="pb-4">
                    <div className = "text-2xl font-bold text-orderHeader pt-4">Order #{order.id}:</div>
                    <div className="flex-column">
                           
                        <div className="flex font-bold pt-4 text-sm"> 
                            <i className="fas fa-info-circle"></i> 
                            <span className="pl-2">Customer Information</span>
                        </div>
                        <div className="text-sm">{order.name}</div>
                        <div className="text-sm">{order.address}</div>
                        <div className="text-sm">{order.city}</div>
                    </div>
                    <div className="flex font-bold pt-4  text-sm">
                        <i className="fas fa-pizza-slice"></i>
                        <div className="pl-2">Pizza Size</div>
                    </div>
                    <div>{order.size}</div>
                    <div className="flex font-bold pt-4  text-sm">
                        <i className="fas fa-list-ul"></i>
                        <span className="pl-2">Order Details</span>
                    </div>
                    <div>
                        {order.toppings.map((topping, index) => (
                        <div key = {index} className="text-sm">{topping.topping}</div>
                        ))}
                    </div>
                    <div className="flex font-bold pt-4  text-sm">
                        <i className="fas fa-sticky-note"></i>
                        <div className="pl-2" >Order Notes</div>
                    </div>
                        <div>
                            {order.notes.map((notes, index) =>(
                                <div key = {index} className="text-sm">{notes.note}</div>
                            ))}
                        </div>
                </div>
            ))}
                    
                

            
            </>
        );
    }
}
