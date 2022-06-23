import Button from '@mui/material/Button';

function BotonListar(props){
    return(
        <Button variant="contained" size="large" onClick={props.onClick}>
            Listar
        </Button>
    )
}

export default BotonListar