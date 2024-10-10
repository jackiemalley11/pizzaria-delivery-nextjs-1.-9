"use client"

// need to install react-spinners for this component to work
// with docker - must shut down, clear volumes, and rebuild / spinup all containers
// import PuffLoader from 'react-spinners/PuffLoader';
import CircleLoader from 'react-spinners/CircleLoader';

// included this here and not in quotes.model.ts so that LoadingOverlay component is easily reusable in other apps
interface LoadingOverlayProps {
    show?:boolean;
    showSpinner?:boolean    
    spinnerColor?:string;
    bgColor?:string;
    message?: string;
}

export default function LoadingOverlay({show = true, bgColor = "#000000", spinnerColor = "#FFFFFF", showSpinner = true, message="Loading Order..."}:LoadingOverlayProps) {
    return (
        (show)
        ? 
        // <div className="flex justify-center items-center lfixed z-50 inset-0 w-full h-ful" style={{backgroundColor:bgColor}}>
        <div className="flex justify-right " style={{backgroundColor:bgColor}}>
            <p className="text-white mt-4">{message}</p>
            {(showSpinner) ? 
            <CircleLoader 
                color={spinnerColor}
                size={50} />
                
            : <div></div>}
        </div>
        : <div></div>
    );
}