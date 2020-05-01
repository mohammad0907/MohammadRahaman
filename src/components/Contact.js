import React, { useState } from "react";
import axios from "axios";
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme) => ({
    root: {
        width: "50%",
        '& > *': {
            margin: theme.spacing(1),
            width: '25ch',
        },
        '@media only screen and (max-width: 800px)': {
            width: "100%",
        },
    },
    formStyle: {
        width: "100%",
        display: "flex",
        flexDirection: "column",
        '& > *': {
            margin: theme.spacing(1),
        },
    }
}));

function MyForm() {
    /* NEW: Input state handling vvvv */
    const classes = useStyles();
    const [inputs, setInputs] = useState({
        email: "",
        message: ""
    });
    const handleOnChange = event => {
        event.persist();
        setInputs(prev => ({
            ...prev,
            [event.target.id]: event.target.value
        }));
    };
    /* End input state handling ^^^^ */

    // Server state handling
    const [serverState, setServerState] = useState({
        submitting: false,
        status: null
    });
    const handleServerResponse = (ok, msg) => {
        setServerState({
            submitting: false,
            status: { ok, msg }
        });
        if (ok) {
            setInputs({
                email: "",
                message: ""
            });
        }
    };
    const handleOnSubmit = event => {
        event.preventDefault();
        setServerState({ submitting: true });
        axios({
            method: "POST",
            url: "https://formspree.io/xgenwgap",
            data: inputs
        })
            .then(r => {
                handleServerResponse(true, "Thanks!");
            })
            .catch(r => {
                handleServerResponse(false, r.response.data.error);
            });
    };

    return (
        <div className={classes.root}>
            <form onSubmit={handleOnSubmit} className={classes.formStyle}>
                <TextField
                    id="email"
                    label="Your Email"
                    variant="outlined"
                    name="email"
                    required
                    onChange={handleOnChange}
                    value={inputs.email}
                />

                <TextField
                    label=" Your Message"
                    placeholder="Your Message"
                    multiline
                    rows={6}
                    defaultValue="Default Value"
                    variant="outlined"
                    id="message"
                    name="message"
                    onChange={handleOnChange}
                    value={inputs.message}
                />
                <Button variant="outlined" type = "submit" color="primary" disabled = {serverState.submitting}>
                    Submit
                </Button>
                {serverState.status && (
                    <p className={!serverState.status.ok ? "errorMsg" : ""}>
                        {serverState.status.msg}
                    </p>
                )}
            </form>
        </div>
    );
};

export default MyForm;