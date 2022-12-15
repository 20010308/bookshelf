import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import DeleteIcon from '@material-ui/icons/Delete';
import CreateIcon from '@material-ui/icons/Create'

const useStyles = makeStyles((theme) => ({
    media: {
        height: 140,
    },
    button: {
        margin: theme.spacing(1),
    },
}));

export default function MediaCard({data}) {
    const classes = useStyles();
    console.log(data);

    return (
        <Card className={classes.root}>
            <CardActionArea>
                <CardMedia
                    className={classes.media}
                    image={data?.cover}
                    title="Contemplative Reptile"
                />
                <CardContent>
                    <Typography gutterBottom variant="body1" component="h4">
                        Name: {data?.title}
                    </Typography>
                    <Typography variant="body2" color="textSecondary" component="p">
                        Author: {data?.author}
                    </Typography>
                    <Typography variant="body2" color="textSecondary" component="p">
                        Published: {data?.published}
                    </Typography><Typography variant="body2" color="textSecondary" component="p">
                    Pages: {data?.pages}
                </Typography>
                </CardContent>
            </CardActionArea>
            <CardActions>
                <Button
                    size="small"
                    variant={"contained"}
                    color="inherit"
                    className={classes.button}
                    startIcon={<CreateIcon/>}
                >
                    Edit
                </Button>
                <Button
                    variant="contained"
                    size={"small"}
                    color="secondary"
                    className={classes.button}
                    startIcon={<DeleteIcon/>}
                >
                    Delete
                </Button>
            </CardActions>
        </Card>
    );
}
