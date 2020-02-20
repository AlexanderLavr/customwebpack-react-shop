import React, { useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { addToCart } from '../../pipes/card.pipes';
import { totalCartCount } from '../../common/cart';

const useStyles = makeStyles({
    root: {
        maxWidth: 375,
        margin: 20
    },
    img: {
        height: 200,
        margin: 20,
        backgroundSize: 'contain'
    }
});

export default function MediaCard(props) {
    const { data, data: {
        _id,
        title,
        description,
        image,
        isFavorite
    }, setFavorite, setGlobalProps } = props;

    const classes = useStyles();
    const totalCount = () => {
        const total = totalCartCount();
        setGlobalProps('countCart', total)
    }

    useEffect(() => {
        totalCount()
    }, [])

    const handlerFavorite = () => {
        setFavorite(_id)
    }

    const toCart = () => {
        addToCart(data)
        totalCount()
    }

    return (
        <div className="cardContainer" >
            <Card className={classes.root}>
                <CardMedia
                    className={classes.img}
                    component="div"
                    image={image}
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="h3" className="cardTitle">
                        {title}
                    </Typography>
                    <Typography variant="body2" color="textSecondary" component="p" className="cardDescription">
                        {description.substr(0, 100) + '...'}
                    </Typography>
                </CardContent>
                <CardActions>
                    <Button size="small" color="primary" onClick={handlerFavorite}>
                        {isFavorite ? 'remove favorite' : 'add favorite'}
                    </Button>
                    <Button size="small" color="primary" onClick={toCart}>
                        to cart
                    </Button>
                </CardActions>
            </Card>
        </div>
    );
}
