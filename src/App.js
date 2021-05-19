import {
  Typography,
  AppBar,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  CssBaseline,
  Grid,
  Toolbar,
  Button,
  Container
} from '@material-ui/core';
import { PhotoCamera } from '@material-ui/icons';
import useStyles from './styles'

const cards = [1, 2, 3, 4, 5, 6, 8, 9]

function App() {
  const classes = useStyles();
  return (
    <>
      <CssBaseline />
      <AppBar position="relative">
        <Toolbar>
          <PhotoCamera className={classes.icon} />
          <Typography varient="h6">
            Photo Album
          </Typography>
        </Toolbar>
      </AppBar>
      <main>
        <div className={classes.container}>
          <Container maxWidth="sm">
            <Typography varient="h2" align="center" color="textPrimary"
              gutterBottom>
              Photo Album
            </Typography>
            <Typography varient="h5" align="center" color="textSecondary"
              paragraph>
              Hello everyone This is a photo album and I'm trying to make this.
            </Typography>
            <div className={classes.buttons}>
              <Grid container spacing={2} justify="center">
                <Grid item>
                  <Button variant="contained" color="primary">
                    My Photoes
                      </Button>
                </Grid>
                <Grid item>
                  <Button variant="outlined" color="primary">
                    Secondary Actions
                    </Button>
                </Grid>
              </Grid>
            </div>
          </Container>
        </div>
        <Container className={classes.cardGrid} maxWidth="md">
          <Grid container spacing={4}>

            {cards.map((card) => (
              <Grid item key={card} lg={3} md={4} sm={6} xs={12}>
                <Card className={classes.card}>
                  <CardMedia
                    className={classes.cardMedia}
                    image="https://source.unsplash.com/random"
                    title="Image title" />
                  <CardContent className={classes.cardContent}>
                    <Typography varient="h5" gutterBottom>
                      Heading
                </Typography>
                    <Typography varient="h5" gutterBottom>
                      This is the description of the photoes.
                </Typography>
                  </CardContent>
                  <CardActions>
                    <Button varient="sm" color="primary">View</Button>
                    <Button varient="sm" color="primary">Edit</Button>
                  </CardActions>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </main>
      <footer className={classes.footer}>
          <Typography varient="h6" align="center" gutterBottom>
            Footer
          </Typography>
          <Typography varient="subtitle1" align="center" color="textSecondary">
              Something here to give footer.
          </Typography>
      </footer>
    </>
  );
}

export default App;
