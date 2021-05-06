import { Table }from "react-bootstrap";

function tableList() {
  return(
    <Table striped bordered hover variant="dark">
        <thead>
          <tr>
            <th>#</th>
            <th>Project Name</th>
            <th>Github Repository</th>
            <th>Deployed Link</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>Coin Creatif</td>
            <td>
              <a href="https://github.com/elizabethbrandt/coincreatif">Github Repository</a>
            </td>
            <td>
              <a href="https://coincreatif.herokuapp.com/">Deployed Site</a>
            </td>
          </tr>
          <tr>
            <td>2</td>
            <td>Google Book Search</td>
            <td>
              <a href="https://github.com/jkaganovsky/Google-Books-Search">Github Repository</a>
            </td>
            <td>
              <a href="https://book-search-googleapi.herokuapp.com/">Deployed Site</a>
            </td>
          </tr>
          <tr>
            <td>3</td>
            <td>Food Dad-a-Base</td>
            <td>
              <a href="https://github.com/goantonioUW/food-dadabase">Github Repository</a>
            </td>
            <td>
              <a href="https://food-dad-a-base.herokuapp.com/">Deployed Site</a>
            </td>
          </tr>
          <tr>
            <td>4</td>
            <td>Weather Dashboard</td>
            <td>
              <a href="https://github.com/jkaganovsky/Weather-Dashboard">Github Repository</a>
            </td>
            <td>
              <a href="https://jkaganovsky.github.io/Weather-Dashboard/">Deployed Site</a>
            </td>
          </tr>
          <tr>
            <td>5</td>
            <td>Password Generator</td>
            <td>
              <a href="https://github.com/jkaganovsky/Password-Generator">Github Repository</a>
            </td>
            <td>
              <a href="https://jkaganovsky.github.io/Password-Generator/">Deployed Site</a>
            </td>
          </tr>
          <tr>
            <td>6</td>
            <td>Eat Da Burger</td>
            <td>
              <a href="https://github.com/jkaganovsky/Burger">Github Repository</a>
            </td>
            <td>
              <a href="https://eat-or-not-burger.herokuapp.com/">Deployed Site</a>
            </td>
          </tr>
          <tr>
            <td>7</td>
            <td>Kitchen Helper</td>
            <td>
              <a href="https://github.com/jkaganovsky/Kitchen-Helper">Github Repository</a>
            </td>
            <td>
              <a href="https://jkaganovsky.github.io/Kitchen-Helper/">Deployed Site</a>
            </td>
          </tr>
          <tr>
            <td>8</td>
            <td>Day Planner</td>
            <td>
              <a href="https://github.com/jkaganovsky/Day-Planner">Github Repository</a>
            </td>
            <td>
              <a href="https://jkaganovsky.github.io/Day-Planner/">Deployed Site</a>
            </td>
          </tr>
          <tr>
            <td>9</td>
            <td>Coding Quiz</td>
            <td>
              <a href="https://github.com/jkaganovsky/Code-Quiz">Github Repository</a>
            </td>
            <td>
              <a href="https://jkaganovsky.github.io/Code-Quiz/">Deployed Site</a>
            </td>
          </tr>
          <tr>
            <td>10</td>
            <td>Employee Directory</td>
            <td>
              <a href="https://github.com/jkaganovsky/employeedirectory">Github Repository</a>
            </td>
            <td>
              <a href="https://jkaganovsky.github.io/employeedirectory/">Deployed Site</a>
            </td>
          </tr>
          <tr>
            <td>11</td>
            <td>Budget Tracker</td>
            <td>
              <a href="https://github.com/jkaganovsky/Budget-Tracker">Github Repository</a>
            </td>
            <td>
              <a href="https://on-off-budget-tracking.herokuapp.com/">Deployed Site</a>
            </td>
          </tr>
        </tbody>
      </Table>
  )
}

export default tableList;