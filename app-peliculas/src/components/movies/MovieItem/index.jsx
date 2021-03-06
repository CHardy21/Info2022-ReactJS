import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';

const MovieItem = ({Title, Poster}) => {
    
    return (
        <Card sx={{ maxWidth: 200 }}>
            <CardActionArea>
                <CardMedia
                    component="img"
                    height="140"
                    image={Poster}
                    alt=""
                />
                <CardContent>
                    <Typography gutterBottom variant="h7" component="div">
                    {Title}
                    </Typography>
                </CardContent>
            </CardActionArea>
        </Card>

    )
}

export default MovieItem