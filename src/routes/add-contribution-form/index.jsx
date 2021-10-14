 import React,{useState}from 'react';
import Container from '@material-ui/core/Container';
import TextField from '@material-ui/core/TextField';
import {makeStyles} from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import RemoveIcon from '@material-ui/icons/Remove';
import AddIcon from '@material-ui/icons/Add';
import SendIcon from '@mui/icons-material/Send';



const useStyles=makeStyles((theme)=>({
root:{
    '& .MuiTextField-root': {
        margin: theme.spacing(1),
    },
 
},
button:{
    margin: theme.spacing(1), 
}
}))
const Create=()=>{
    const classes=useStyles()
    const [inputFields,setInputFields]=useState([{points:'',remarks:'',date:''},]);
    const handleChangeInput=(index,event)=>{
        const values = [...inputFields];
        values[index][event.target.name]=event.target.value;
        setInputFields(values);
    }
    const handleSubmit = (e)=>{
        e.preventDefault();
        console.log("InputFields",inputFields);
    };
    const handleAddFields = () =>{
        setInputFields([...inputFields,{points:'',remarks:'',date:''}])
    }
    const handleRemoveFields = (index)=>{
        const values=[...inputFields];
        values.splice(index, 1);
        setInputFields(values);
    }
    return(
        <Container>
            <form></form>
        <h2>Add new Contribution</h2>
        <form className={classes.root} onSubmit={handleSubmit}>
            {inputFields.map((inputField,index)=>(
                <div key={index}>
                    <TextField
                    name ="points"
                    label="points"
                    variant="filled"
                    value={inputField.points}
                    onChange={event => handleChangeInput(index,event)}
                    />
                    <TextField
                    name ="remarks"
                    label="remarks"
                    variant="filled"
                    value={inputField.remarks}
                    onChange={event => handleChangeInput(index,event)}
                    />
                    <TextField
                    name ="date"
                    label="date"
                    variant="filled"
                    value={inputField.date}
                    onChange={event => handleChangeInput(index,event)}
                    />
                    <IconButton
                    onClick={() => handleRemoveFields(index)}>
                        <RemoveIcon/>
                    </IconButton>
                    <IconButton
                    onClick={()=> handleAddFields()}>
                        <AddIcon/>
                    </IconButton>

                </div>

             )) }
             <Button 
             className= {classes.button}
             variant="contained" 
             color="primary" 
             type="submit" 
             endIcon={<SendIcon/>}
             onClick={handleSubmit}
             >
                 Submit</Button>
        </form>
        </Container>

    );
}
export default Create;