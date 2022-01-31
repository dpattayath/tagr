
import React, {useState} from 'react';
import ReactDOM from 'react-dom';
import {Button} from "reactstrap";
import {BrowserView, MobileView} from 'react-device-detect';
import ScanditBarcodeScanner from "scandit-sdk-react";
import {Barcode, ScanSettings} from "scandit-sdk";

const Shopper = () => {

    const [scannerReady, setScannerReady] = useState(false);
    const licenseKey = 'AVvBHD2fHFYQAdCRNiFd3gwoDDvyJ7LjTlu7occLik75cFQvDkjAtJ1DkmnwadICJXgrk9N5pKsWbisOzVcpqhZ9wSo+RcS5mH/0n1dmm9IjN6KmvlreSDVMmYyBcX0WHmMCNHRspR2gEfC4gQ6BecsyGnFfIc/bcRFnXxbky3oDBe3iQRrX4qdXV202a4fphciX5oEJTwrVSsczlisR9RQ5aoAA9vQWaJtPLGUqp9lXf2mNZJLanoghuwmRvtyhTvxIK1EjN6YaQdAwqgJAmv14iBnkyeKfZdY7jsGxfvRsOpmuT5dsxui1NEe2EL+Xp71E2k0kLw4xg5cwjqaohhlnjz6TwLxjIQlxyvHHs+1XBWk4BWD+luc7l6brCVduaMqru0/SEBTAL4sdjYHOc21laveGxeGW2Cw2aMVVU76GNb5jGlC+m/oJ550XkrMCXpVHV7Q2pLkLAZ4+NoIPu4bbcDF+C8B+FBkkI/192gdZwqPU91rr325RmFmxgoqEugbtR7uXpxXOa8wwKGCTssNTK2b9a+LSaSuSys3sUPJUbBjGDqgA+pp2lWVm1NQjAi46SNu+VtRUclU7mYjC/RggTZc2tg0qsE7GAORWSPDwu+eT0eSW9RdsCAW1IVMeIuA4RxbxxHSAZNUDanLfLTl3xiQhNm8YBxIs0G5ZXoQlGRp4u4mN6Ev2Vm5SK74NsujdozSXirvoPrHTgqK6oaPhgwFvQ8Kv0hfFVWm51iAI16+J/DrLnHQ98aEwJWmRT+HKQ2jpZa37qKgfb4tnbbzlavjbUlu0LQ97phOnxs7g3dTI57arikjAHk2+mNKE4rr8ACaj71Q=';
    const getScanSettings = () => {
        return new ScanSettings({
            enabledSymbologies: [Barcode.Symbology.CODE128],
            viewfinderArea: { x: 0, y: 0, width: 1, height: 1 }
        });
    };

    return (
        <div className="container shopper">
            <MobileView>
                {scannerReady ?
                    <div className="scanner">
                        <ScanditBarcodeScanner
                            licenseKey={licenseKey}
                            engineLocation="https://cdn.jsdelivr.net/npm/scandit-sdk@5.x/build"
                            onScan={console.log}
                            onScanError={console.log}
                            scanSettings={getScanSettings()}
                        />
                        <div className="actions">
                            <Button className="btn-cancel"
                                    onClick={() => setScannerReady(false)}>Cancel</Button>
                        </div>
                    </div>
                    : <div className="compatible">
                        <div className="title">
                            Mobile Self-Checkout? <br/>Try it now.
                        </div>
                        <div className="actions">
                            <Button className="btn-scan"
                                    onClick={() => setScannerReady(true)}>Scan barcode</Button>
                        </div>
                    </div>
                }
            </MobileView>
            <BrowserView>
                <div className="incompatible">
                    Please open this page on a mobile device
                </div>
            </BrowserView>
        </div>
    );
}

export default Shopper;

// DOM element
if (document.getElementById('shopper')) {
    ReactDOM.render(<Shopper />, document.getElementById('shopper'));
}
