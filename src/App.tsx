import Barcode from 'react-barcode';
import { Package } from 'lucide-react';
import logo from './assets/logo.jpg';

function App() {
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-8">
      <div className="bg-white w-full max-w-3xl p-6 shadow-lg">
        {/* Header */}
        <div className="flex justify-between items-center border-b border-gray-200 pb-4">
          <div className="text-xl font-bold">DHL EXPRESS WORLDWIDE</div>
          <div className="text-3xl font-bold">TDY</div>
          <img src={logo} alt="DHL" className="h-8" />
        </div>

        {/* Shipper's Details */}
        <div className="mt-4 flex gap-4">
          <div className="flex-1">
            <div className="flex items-center gap-2 mb-2">
              <h2 className="font-bold">SHIPPER'S ADDRESS & DETAILS</h2>
              <Package className="w-5 h-5" />
            </div>
            <div className="text-sm flex items-start gap-4">
              <div>
                <p className='font-bold'>From: </p>
              </div>
              <div>
                <p>412 Glasgow Road,</p>
                <p>C/O S&B Removals Ltd,</p>
                <p>Clydebank, Scotland, G81 1PW</p>
                <p>Gerard butler James</p>
                <p>Tel:+1 (850) 610-3154 </p>
              </div>
                 
            </div>
          </div>
          <div className="text-right">
            <p className="font-bold">Origin:</p>
            <p className="text-2xl font-bold">MNL</p>
          </div>
        </div>

        {/* Receiver's Details */}
        <div className="mt-6">
          <div className="flex items-center gap-2 mb-2">
            <h2 className="font-bold">RECEIVER'S ADDRESS & DETAILS</h2>
            <Package className="w-5 h-5" />
          </div>
          <div className="border border-gray-300 p-4 flex items-start gap-4">
            <div>
              <p className='font-bold'>To: </p>
            </div>
            <div>
              <p>304 E 24th Ct</p>
              <p>Owasso, Ok 74055</p>
              <p>Shannon Brand</p>
              <p>Tel:+918 853-1212 </p>
              <p></p>
            </div>
          </div>
        </div>

        {/* Tracking Details */}
        <div className="mt-6">
          <div className="text-center text-3xl font-bold tracking-wider mb-4">
            HK-HKG-HKC
          </div>
          <div className="bg-black text-white p-4 flex justify-between items-center">
            <span className="text-2xl">C-ADI</span>
            <div className="text-right">
              <div>Day</div>
              <div className="text-xl">X12</div>
            </div>
          </div>
        </div>

        {/* Shipment Details */}
        <div className="mt-6 flex justify-between items-center">
          <div>
            {/* <p><span className="font-bold">Ref:</span></p>
            <p><span className="font-bold">Contents:</span> Books</p> */}
          </div>
          <div className="text-right">
            <p><span className="font-bold">Pce/Shpt Weight:</span> 1.5 kg</p>
            <p><span className="font-bold">Piece:</span> 1/1</p>
          </div>
        </div>

        {/* Barcodes */}
        <div className="mt-6 flex flex-col items-center gap-4">
          <Barcode value="TRACKING ID 60120194534415" />
          <Barcode value="(2L)HK:HKGHKC+50002001" height={100} width={2} />
        </div>
      </div>
    </div>
  );
}

export default App;