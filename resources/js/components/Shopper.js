
import React from 'react';
import ReactDOM from 'react-dom';
import {
    Button
} from "reactstrap";
import {BrowserView, MobileView} from 'react-device-detect';

const Shopper = () => {
    return (
        <div className="container shopper">
            <MobileView>
                <div className="compatible">
                    <div className="title">
                        Mobile Self-Checkout? <br/>Try it now.
                    </div>
                    <div className="actions">
                        <Button className="btn-scan">Scan barcode</Button>
                    </div>
                </div>
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
