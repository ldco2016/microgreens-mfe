import React from "react";
import Button from "@material-ui/core/Button";

import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";

import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import MaterialLink from "@material-ui/core/Link";
import { Link } from "react-router-dom";

function Copyright() {
  return (
    <Typography variant='body2' color='textSecondary' align='center'>
      {"Copyright @ "}
      <MaterialLink component={Link} to='/' color='inherit'>
        Your Website
      </MaterialLink>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

const useStyles = makeStyles((theme) => ({
  "@global": {
    a: {
      textDecoration: "none",
    },
  },
  icon: {
    marginRight: theme.spacing(2),
  },
  heroContent: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(8, 0, 6),
  },
  heroButtons: {
    marginTop: theme.spacing(4),
  },
  cardGrid: {
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8),
  },
  card: {
    height: "100%",
    display: "flex",
    flexDirection: "column",
  },
  cardMedia: {
    paddingTop: "56.25%", // 16:9
  },
  cardContent: {
    flexGrow: 1,
  },
  footer: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(6),
  },
}));

const cards = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];

export default function Album() {
  const classes = useStyles();

  return (
    <React.Fragment>
      <main>
        {/* Hero unit */}
        <div className={classes.heroContent}>
          <Container maxWidth='sm'>
            <Typography
              component='h1'
              variant='h2'
              align='center'
              color='textPrimary'
              gutterBottom
            >
              You Are What You Eat
            </Typography>
            <Typography
              variant='h5'
              align='center'
              color='textSecondary'
              paragraph
            >
              MicroUrb Farms is an urban farm located in College Station, Texas.
              We specialize in living foods because of their potent health
              benefits and delicious flavor. Our mission is to improve the
              health and sustainability of our local community. All products are
              grown to order and delivered weekly to homes, workplaces, juice
              bars, health food stores, restaurants, yoga studios and fitness
              centers.
            </Typography>
            <div className={classes.heroButtons}>
              <Grid container spacing={2} justify='center'>
                <Grid item>
                  <Link to='/pricing'>
                    <Button variant='contained' color='primary'>
                      Pricing
                    </Button>
                  </Link>
                </Grid>
              </Grid>
            </div>
          </Container>
        </div>
        <Container className={classes.cardGrid} maxWidth='md'>
          {/* End hero unit */}
          <Grid container spacing={4}>
            <Grid item>
              <Card className={classes.card}>
                <CardMedia
                  className={classes.cardMedia}
                  image='https://user-images.githubusercontent.com/13081018/106391016-d8586e00-63b0-11eb-99a2-a617d2d5053e.jpg'
                />
                <CardContent className={classes.cardContent}>
                  <Typography gutterBottom variant='h5' component='h2'>
                    Healthy
                  </Typography>
                  <Typography>
                    Packed with concentrated nutrients, vitmains, minerals, and
                    enzymes - living foods are among the healthiest foods on the
                    planet. Microgreens, sprouts, and grasses are simply young
                    seeds and legumes that are utilized at their most nutritious
                    and delicious state.
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
            <Grid item>
              <Card className={classes.card}>
                <CardMedia
                  className={classes.cardMedia}
                  image='https://user-images.githubusercontent.com/13081018/106395474-0f864980-63c8-11eb-8b1a-e67cfbe4f313.jpg'
                />
                <CardContent className={classes.cardContent}>
                  <Typography gutterBottom variant='h5' component='h2'>
                    Easy to Use
                  </Typography>
                  <Typography>
                    Implement living foods into your current diet to increase
                    the nutrient content of your meals and improve overall
                    health. Use in salads, sandwiches, and wraps. Add to cooked
                    meals once removed from heat such as stir-frys and soups. Or
                    simply enoy as a snack or a living food salad mix!
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
            <Grid item>
              <Card className={classes.card}>
                <CardMedia
                  className={classes.cardMedia}
                  image='https://user-images.githubusercontent.com/13081018/106395500-2cbb1800-63c8-11eb-949d-ce12bb553d98.jpg'
                />
                <CardContent className={classes.cardContent}>
                  <Typography gutterBottom variant='h5' component='h2'>
                    Sustainable
                  </Typography>
                  <Typography>
                    Living foods are grown more sustainably compared to
                    conventional agricultural practices. They use less water,
                    need no fertilizer or pesticides and use less land via
                    vertical farming. Our growing trays are reused and our
                    growing medium is composted. Locally grown food results in
                    less pollution from transportation and a more sustainable
                    community.
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
            <Grid item>
              <Card className={classes.card}>
                <CardMedia
                  className={classes.cardMedia}
                  image='https://user-images.githubusercontent.com/13081018/106395526-45c3c900-63c8-11eb-8754-beaba5a3f0dd.jpg'
                />
                <CardContent className={classes.cardContent}>
                  <Typography gutterBottom variant='h5' component='h2'>
                    Exceptionally Fresh
                  </Typography>
                  <Typography>
                    Living foods are inherently fresh because they are still
                    living. Since our produce is harvested within 24 hours of
                    delivery, you enjoy the benefits of superior quality,
                    enhanced shelf-life and no more slimy rotten produce. You
                    simply cannot obtain these foods in supermarkets.
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
            {/* {cards.map((card) => (
              <Grid item key={card} xs={12} sm={6} md={4}>
                <Card className={classes.Card}>
                  <CardMedia
                    className={classes.cardMedia}
                    image='https://source.unsplash.com/random'
                    title='Image title'
                  />
                  <CardContent className={classes.CardContent}>
                    <Typography gutterBottom variant='h5' component='h2'>
                      Heading
                    </Typography>
                    <Typography>
                      This is a media card. You can use this section to describe
                      the content.
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Button size='small' color='primary'>
                      View
                    </Button>
                    <Button size='small' color='primary'>
                      Edit
                    </Button>
                  </CardActions>
                </Card>
              </Grid>
            ))} */}
          </Grid>
        </Container>
      </main>

      {/* Footer */}
      <footer>
        <Typography variant='h6' align='center' gutterBottom>
          MicroUrb Farms
        </Typography>
        <Typography
          variant='subtitle1'
          align='center'
          color='textSecondary'
          component='p'
        >
          Weekly Delivery Now Available!
        </Typography>
      </footer>
      {/* End footer */}
    </React.Fragment>
  );
}
