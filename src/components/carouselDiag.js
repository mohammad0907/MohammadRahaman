import React, {useEffect} from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Carousel from "./carousel.js"

export default function AlertDialog(props) {
  const [open, setOpen] = React.useState(false);

 

  const handleClickOpen = () => {
    setOpen(props.open);
  };

  const handleClose = () => {
    setOpen(false);
    props.close()
  };
  useEffect(() => {
     handleClickOpen()
      
}, [props.open])
console.log(props.slides)

  return (
    <div>
      <Dialog
        open= {open}
        onClose={handleClose}
        fullWidth
        maxWidth = "md"
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogContent>
         <Carousel items = {props.slides}/>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary" autoFocus>
            Close
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
