"use client";

import {useState} from "react";
import Banner from "@/components/Banner";
import OrdersReport from "@/components/OrdersReport";
import ClipLoader from "react-spinners/ClipLoader";


// import LoadingOverlay from "@/components/LoadingOverlay";

export default function Home() {


  let message: string = "loading...";

  let [loading, setLoading] = useState(true);
  let [color, setColor] = useState("#b82308");


  //------------------------------------event handlers
  const showOrders = (e:any) => setAppState(2);
  //-----------------------------------state variables

  //1- no orders loaded
  //2 - orders loading
  //3 - orders have been loaded
  const [appState, setAppState] = useState(1);

  // ---------------------------- rendering to DOM

  return (
    <main className="grid grid-rows-1 grid-cols-1 gap-0 text-content">

      {/* <LoadingOverlay show={appState ==2 ? true : false} bgColor="#b82308"/> */}

      <Banner />

      <aside className="flex flex-nowrap items-center justify-between p-5 flex-col md:flex-row">
        <div className="mb-5 md:hidden text-center">
          <>1234 Cheesy Drive | Tastyville, NS | 902-123-4567</>
        </div>
        <div>
          <div className="text-accent text-3xl font-bold mb-2.5">Welcome loyal pizza dispatcher....</div>Click the &quot;Get Orders&quot; button below to view all current orders that need to be delivered.
          <div>
              <button 
                className={`border-none rounded-md p-2.5 text-white mt-5 
                  ${appState === 2 ? 'bg-greyContent text-grey' : 'bg-accent hover:bg-greyContent'}`}
                  onClick={showOrders}
                  disabled={appState ===2 }
                >
                Get Orders
                
              </button>
          </div>
        </div>
        <div className="shrink-0 text-lg text-right text-greyContent hidden md:block">
          <div>Antonio&apos;s Pizzaria</div>
          <div>1234 Cheesy Drive</div>
          <div>Tastyville, NS</div>
          <div>902-123-4567</div>
        </div>
      </aside>

      <div className="bg-greyAccent p-10">
        {/* <LoadingOverlay show={appState ==2 ? true : false} bgColor="#b82308"/> */}
        {appState === 2 && (
          <div className="flex items-center">
            <span className="pr-10">Loading... </span>
            <ClipLoader
              color={color}
              loading={true}  // Always true since we conditionally render this div
              size={50}
              aria-label="Loading Spinner"
              data-testid="loader"
            />
          </div>
        )}

        <div id="output" className=" divide-dashed divide-y-2 divide-accent">

          <OrdersReport setAppState={setAppState} appState={appState} />

        </div>
      </div>
    </main>
  );
}