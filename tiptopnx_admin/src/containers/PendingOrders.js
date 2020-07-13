import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  Paper,
  Typography,
  Grid,
  TextField,
  Dialog,
  DialogActions,
  DialogTitle,
} from "@material-ui/core";
import axios from "../utils/axios";
import { getConfig } from "../utils/config";
import { Table, Button, Modal } from "react-bootstrap";
import OrderCard from "../components/OrderCard";
import CardList from "../components/CardList";
import Button2 from "@material-ui/core/Button";

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(1),
    padding: theme.spacing(2),
    boxSizing: "border-box",
    width: "75vw",
    marginLeft: "auto",
    marginRight: "auto",
  },
}));

const PendingOrders = () => {
  const classes = useStyles();

  const [orders, setOrders] = React.useState([]);
  const [show, setShow] = useState(false);
  const [selected, setSelected] = React.useState({});
  const [alertOpen, setAlertOpen] = React.useState(false);
  const [action, setAction] = React.useState("Confirmed");

  const handleAlertClose = () => {
    setAlertOpen(false);
  };

  useEffect(() => {
    axios
      .get("/admin/orders/pending", getConfig())
      .then((res) => {
        setOrders([...res.data]);
      })
      .catch((err) => console.log(err));
  }, [alertOpen]);

  const getMyDate = (date) => {
    const d = new Date(date);
    return d.getDate() + "/" + d.getMonth() + "/" + d.getFullYear();
  };

  const viewHandler = (order) => {
    setSelected(order);
    setShow(true);
  };

  const statusUpdate = (status) => {
    axios
      .put("/admin/orders/" + selected._id, { status: status }, getConfig())
      .then((res) => {
        setAlertOpen(false);
        setShow(false);
      })
      .catch((err) => {
        console.log(err);
        setAlertOpen(false);
        setShow(false);
      });
  };

  return (
    <>
      {/* Alert Dialog */}
      <Dialog
        style={{ zIndex: 10000001 }}
        open={alertOpen}
        onClose={handleAlertClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          {action == "Confirmed"
            ? "Are you sure you want to CONFIRM the order?"
            : "Are you sure you want to CANCEL the order?"}
        </DialogTitle>
        <DialogActions>
          <Button2 onClick={handleAlertClose} color="primary">
            Cancel
          </Button2>
          <Button2
            onClick={() => statusUpdate(action)}
            color="primary"
            autoFocus
          >
            Yes
          </Button2>
        </DialogActions>
      </Dialog>

      {/* Paper */}
      <Paper className={classes.paper}>
        <Typography variant="h4" align="center">
          <u>PENDING ORDERS</u>
        </Typography>
        {/* Table */}
        <Table style={{ marginTop: "3vh" }} striped bordered>
          <thead style={{ background: "#37474F", color: "white" }}>
            <tr>
              <th>#Order ID</th>
              <th>Amount</th>
              <th>Address</th>
              <th>Contact Number</th>
              <th>Payment</th>
              <th>Order Date</th>
              <th>Delivery Charge </th>
              <th>View Contents</th>
            </tr>
          </thead>
          <tbody>
            {orders.map((order, index) => (
              <tr key={index}>
                <th>{order._id}</th>
                <td>{order.amount}</td>
                <td>{order.address}</td>
                <td>{order.contact}</td>
                <td>{order.payment.method}</td>
                <td>{getMyDate(order.createdAt)}</td>
                <td>{order.deliveryCharge}</td>
                <td>
                  <Button2
                    onClick={() => viewHandler(order)}
                    variant="contained"
                    color="primary"
                  >
                    View
                  </Button2>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </Paper>

      {/* Modal */}
      <Modal
        size="xl"
        aria-labelledby="example-modal-sizes-title-lg"
        style={{ zIndex: 10000000 }}
        show={show}
        onHide={() => setShow(false)}
      >
        <Modal.Header closeButton>
          <Modal.Title>
            Order ID: {selected._id} (
            {selected.contents ? selected.contents.length : ""} Product
            {selected.contents && selected.contents.length > 1 ? "s" : ""})
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Grid container spacing={3}>
            <Grid item xs={3}>
              <TextField
                fullWidth
                inputProps={{ readOnly: true }}
                label="Amount"
                value={selected.amount}
                variant="filled"
                size="small"
              />
            </Grid>
            <Grid item xs={3}>
              <TextField
                fullWidth
                inputProps={{ readOnly: true }}
                label="Delivery charge"
                value={selected.deliveryCharge}
                variant="filled"
                size="small"
              />
            </Grid>
            <Grid item xs={3}>
              <TextField
                fullWidth
                inputProps={{ readOnly: true }}
                label="Payment method"
                value={selected.payment ? selected.payment.method : ""}
                variant="filled"
                size="small"
              />
            </Grid>
            <Grid item xs={3}>
              <TextField
                fullWidth
                inputProps={{ readOnly: true }}
                label="Order date"
                value={getMyDate(selected.createdAt)}
                variant="filled"
                size="small"
              />
            </Grid>
            <Grid item xs={8}>
              <TextField
                fullWidth
                inputProps={{ readOnly: true }}
                label="Address"
                value={selected.address}
                variant="filled"
                size="small"
              />
            </Grid>
            <Grid item xs={4}>
              <TextField
                fullWidth
                inputProps={{ readOnly: true }}
                label="Contact Number"
                value={selected.contact}
                variant="filled"
                size="small"
              />
            </Grid>
            <Grid item xs={2} />
            <Grid item xs={8}>
              <CardList content={selected.contents} />
            </Grid>
          </Grid>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShow(false)}>
            Close
          </Button>
          <Button
            variant="success"
            onClick={() => {
              setAction("Confirmed");
              setAlertOpen(true);
            }}
          >
            Confirm
          </Button>
          <Button
            variant="danger"
            onClick={() => {
              setAction("Cancelled");
              setAlertOpen(true);
            }}
          >
            Cancel
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default PendingOrders;
