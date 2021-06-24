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
          <p>Many home cooks sometimes find themselves running out of ideas on what to cook for themselves and their families.</p>
          <p>Our team built this web application that is highly catered to home cooks for easy and immediate access to mutlipe recipe ideas provided with ingredients that are available in their pantry.</p>
          <p>Each recipe features nutrition values, and saving your favorites using Pinterest.</p>
          <p>Built using vanilla JavaScript, Bootstrap, Spoonacular API, and Pinterest API.</p>
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
            <p>Ever want to find meal ideas that allow you to test your cooking skills (no studying required) while also having a laugh?!</p>
            <p>Our team built this web application to help find recipes, mark recipes as a user favorite, and create a grocery shopping list with random dad jokes populating on the page.</p>
            <p>Created with passport authentication, Bulma, Express and Express-Handlebars, MySQL, Edemam and icanhazdadjoke.com API.</p>
            <p>Guest Login: username - guest@email.com, password - guest</p>
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
            <p>A marketplace for creative entrepreneurs promoting their unique, creative, and handcraft goods.</p>
            <p>We created this web ecommerce platform in order to support our local artists/creators, while allowing them to turn their ideas into successful businesses.</p>
            <p>Created using MERN, Firebase authentication, Material-UI, multer, and Axios.</p>
            <p>Guest Login: username - guest@email.com, password - guest123</p>
          </Card.Text>
          <Card.Link href="https://coincreatif.herokuapp.com/">Deployed Site</Card.Link>
          <Card.Link href="https://github.com/elizabethbrandt/coincreatif">GitHub Repository</Card.Link>
        </Card.Body>
      </Card>
      </CardDeck>
  )
};

export default projects;