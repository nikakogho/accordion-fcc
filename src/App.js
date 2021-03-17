import './App.css';

import Portion from './components/Portion'

const portions = [
  {
    title: `Do I have to allow the use of cookies?`,
    info: `Unicorn vinyl poutine brooklyn, next level direct trade iceland. Shaman copper mug church-key coloring book, whatever poutine normcore fixie cred kickstarter post-ironic street art.`
  },
  {
    title: `How do I change my My Page password?`,
    info: `Coloring book forage photo booth gentrify lumbersexual. Migas chillwave poutine synth shoreditch, enamel pin thundercats fashion axe roof party polaroid chartreuse.`
  },
  {
    title: `What is BankID?`,
    info: `Enamel pin fam sustainable woke whatever venmo. Authentic asymmetrical put a bird on it, lumbersexual activated charcoal kinfolk banjo cred pickled sartorial.`
  },
  {
    title: `Whose birth number can I use?`,
    info: `Edison bulb direct trade gentrify beard lo-fi seitan sustainable roof party franzen occupy squid. Knausgaard cronut succulents, scenester readymade shabby chic lyft. Copper mug meh vegan gentrify.`
  },
  {
    title: `When do I recieve a password ordered by letter?`,
    info: `Locavore franzen fashion axe live-edge neutra irony synth af tilde shabby chic man braid chillwave waistcoat copper mug messenger bag. Banjo snackwave blog, microdosing thundercats migas vaporware viral lo-fi seitan `
  }
]

function App() {
  return (
    <div className="App">
      <div className='container'>
        <div className='left'>
          <h3>Questions And Answers About Login</h3>
        </div>
        <div className='right'>
          {portions.map((portion, index) => <Portion key={index} {...portion} /> ) }
        </div>
      </div>
    </div>
  );
}

export default App;
