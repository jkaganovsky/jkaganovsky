/* eslint-disable jsx-a11y/alt-text */
import { Card, CardDeck } from 'react-bootstrap/';

function projects() {
  return (
    <CardDeck className="text-center">
      <Card bg="dark" text="white">
        <Card.Header>KITCHEN HELPER</Card.Header>
        <Card.Img variant="top" src="/assets/images/kitchen-helper.png" fluid/>
        <Card.Body>
          <Card.Text>
            A JavaScript application catered to home cooks that allows a variety of recipes with nutrition facts to be generated on a page when multiple or a single ingredient is queried by the user. Created using vanilla JavaScript, Bootstrap, Spoonacular API, and Pinterest API.
          </Card.Text>
          <Card.Link href="https://jkaganovsky.github.io/Kitchen-Helper/">Deployed Site</Card.Link>
          <Card.Link href="https://github.com/jkaganovsky/Kitchen-Helper">GitHub Repository</Card.Link>
        </Card.Body>
      </Card>
      <Card bg="dark" text="white">
        <Card.Header>FOOD DAD-A-BASE</Card.Header>
        <Card.Img variant="top" src="/assets/images/fooddadabase.png" fluid/>
        <Card.Body>
          <Card.Text>
            Web application designed to help find recipes, mark recipes as a user favorite, and create a grocery shopping list with random dad jokes populating on the page. Created with passport authentication, Bulma, Express and Express-Handlebars, MySQL, Edemam and icanhazdadjoke.com API. Guest Login: username - guest@email.com, password - guest
          </Card.Text>
          <Card.Link href="https://food-dad-a-base.herokuapp.com/login">Deployed Site</Card.Link>
          <Card.Link href="https://github.com/goantonioUW/food-dadabase">GitHub Repository</Card.Link>
        </Card.Body>
      </Card>
      <Card bg="dark" text="white">
        <Card.Header>COIN CREATIF</Card.Header>
        <Card.Img variant="top" src="/assets/images/coin-creatif.png" fluid/>
        <Card.Body>
          <Card.Text>
            A marketplace for creative entrepreneurs promoting their unique, creative, and handcraft goods. It is an ecommerce platform supporting local artists/creators turning their ideas into successful businesses. Created using MERN, Firebase authentication, Material-UI, multer, and Axios.
          </Card.Text>
          <Card.Link href="https://coincreatif.herokuapp.com/">Deployed Site</Card.Link>
          <Card.Link href="https://github.com/elizabethbrandt/coincreatif">GitHub Repository</Card.Link>
        </Card.Body>
      </Card>
      </CardDeck>
  )
};

export default projects;