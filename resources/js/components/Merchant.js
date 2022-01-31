
import React, {useState} from 'react';
import ReactDOM from 'react-dom';
import {
    Card,
    CardBody,
    Spinner,
    Button
} from "reactstrap";

const Merchant = () => {
    const [spinner, setSpinner] = useState(false);
    const [showForm, setShowForm] = useState(false);
    const [title, setTitle] = useState({
        value: '',
        error: ''
    });
    const [description, setDescription] = useState({
        value: '',
        error: ''
    });
    const [price, setPrice] = useState({
        value: '',
        error: ''
    });
    const [sku, setSku] = useState({
        value: '',
        error: ''
    });

    const validateInput = () => {
        let valid = true;
        if (title.value.length === 0) {
            setTitle({'value': '', 'error': 'Title is required'});
            valid = false;
        }
        if (description.value.length === 0) {
            setDescription({'value': '', 'error': 'Description is required'});
            valid = false;
        }
        if (!price.value) {
            setPrice({'value': '', 'error': 'Price is required'});
            valid = false;
        }
        if (sku.value.length === 0) {
            setSku({'value': '', 'error': 'SKU is required'});
            valid = false;
        }
        return valid;
    }

    const addProduct = () => {
        const valid = validateInput();
        if (!valid)
            return;
        setSpinner(true);
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json', Accept: 'application/json'},
            body: JSON.stringify({
                'title': title.value,
                'description': description.value,
                'price': price.value,
                'sku': sku.value
            })
        };
        fetch("api/merchants/products", requestOptions)
            .then(res => res.json())
            .then(
                (result) => {
                    setSpinner(false);
                    setTitle({'value': '', 'error': ''});
                    setDescription({'value': '', 'error': ''});
                    setPrice({'value': '', 'error': ''});
                    setSku({'value': '', 'error': ''});
                },
                (error) => {
                    setSpinner(false);
                }
            )
    }
    return (
        <div className="container merchant">
            { showForm ?
                <Card>
                    <CardBody className="p-5">
                        {
                            spinner ?
                                (
                                    <div>
                                        <Spinner type="grow" color="primary" size="sm"/>
                                        <Spinner type="grow" color="primary" size="sm"/>
                                        <Spinner type="grow" color="primary" size="sm"/>
                                    </div>
                                )
                                : (
                                    <div>
                                        <div className="form-group">
                                            <div className="drag-drop">
                                                Drag and drop, or browse to choose an image
                                            </div>
                                        </div>
                                        <div className="form-group">
                                            <label>Title</label>
                                            <input type="text"
                                                   name="title"
                                                   id="title"
                                                   value={title.value}
                                                   className="form-control"
                                                   placeholder="E.g. Riders T-Shirt"
                                                   onChange={(event) => setTitle({'value': event.target.value})}/>
                                            <span className="text-danger">{title.error}</span>
                                        </div>
                                        <div className="form-group">
                                            <label>Description</label>
                                            <textarea
                                                name="description"
                                                id="description"
                                                value={description.value}
                                                className="form-control"
                                                placeholder="Write a description"
                                                rows="4"
                                                onChange={(event) => setDescription({'value': event.target.value})}>
                                        </textarea>
                                            <span className="text-danger">{description.error}</span>
                                        </div>
                                        <div className="form-group">
                                            <label>Price</label>
                                            <div className="input-group">
                                                <span className="currency">$</span>
                                                <input type="number"
                                                       name="price"
                                                       id="price"
                                                       value={price.value}
                                                       className="form-control border-left-0"
                                                       placeholder="Enter an amount"
                                                       onChange={(event) => setPrice({'value': event.target.value})}/>
                                            </div>
                                            <span className="text-danger">{price.error}</span>
                                        </div>
                                        <div className="form-group">
                                            <label>SKU Number</label>
                                            <input type="text"
                                                   name="sku"
                                                   id="sku"
                                                   value={sku.value}
                                                   className="form-control"
                                                   placeholder="Enter SKU/barcode number"
                                                   onChange={(event) => setSku({'value': event.target.value})}/>
                                            <span className="text-danger">{sku.error}</span>
                                        </div>
                                        <div className="d-flex justify-content-between mt-4">
                                            <Button className="btn-default"
                                                    color="light"
                                                    onClick={() => setShowForm(false)}>Cancel</Button>
                                            <Button className="btn-default"
                                                    color="primary"
                                                    onClick={addProduct}>Save</Button>
                                        </div>
                                    </div>
                                )
                        }
                    </CardBody>
                </Card>
                :
                <div>
                    <input type="button"
                           className="btn-add"
                           value="+"
                           onClick={() => setShowForm(true)}/>
                    <span className="lbl-add">Add a new Product</span>
                </div>
            }
        </div>
    );
}

export default Merchant;

// DOM element
if (document.getElementById('merchant')) {
    ReactDOM.render(<Merchant />, document.getElementById('merchant'));
}
