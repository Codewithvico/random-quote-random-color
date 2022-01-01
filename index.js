function App(){
   
    const [quotes, setQuotes] = React.useState([]);
    const [randomQuotes, setRandomQuotes] = React.useState("");
    const [colors, setRandColors] = React.useState("#000"); 
    React.useEffect(() => {
      async function fetchData() {
          const response = await fetch("https://type.fit/api/quotes")
          const data = await response.json();

          setQuotes(data)
          let randomIndex = Math.floor(Math.random() * data.length);
          setRandomQuotes(data[randomIndex])
      }
      fetchData()
    }, [])

    const getNewQuote = () => {
       
        const colors = [
            '#73A857',
            '#27ae60',
            '#16a085',
            '#f39c12',
            '#e74c3c',
            '#9b59b6',
            '#FB6964',
            '#342224',
            '#472E32',
            '#BDBB99',
            '#77B1A9',
            '#2c3e50'
          ];

        let randomIndex = Math.floor(Math.random() * quotes.length);
        let randColorIndex = Math.floor(Math.random() * colors.length);
        setRandomQuotes(quotes[randomIndex])
        setRandColors(colors[randColorIndex])

    }

    return (
    <div id="wrapper" style={{ background: colors, minHeight: "100vh"}}>  
       <div className='container pt-5 text-center' id='wrap'>
           <div className='jumbotron'>
               <div className='card'>
                   <div className='card-header'>Inspiration Quote</div>
                   <div className='card-body'>
                      {randomQuotes ? (
                         <>
                         <h5 className='card-title'>- {randomQuotes.author || "No Author"}</h5>
                         <p className='card-text'>&quot;{randomQuotes.text}&quot;</p>
                         </>
                      ) : (
                          <h2>Loading</h2>
                      )}
    <div className='row'>
        <button onClick={getNewQuote} className='btn btn-dark' type="button">Get New Quote</button>
                       
                         <a href={'https://twitter.com/intent/tweet?hashtags=quotes&related=freecodecamp&text=' +
      encodeURIComponent('"' + randomQuotes.text + '" ' + randomQuotes.author)} target='_blank' className='btn btn-warning'>
                            <ion-icon name="logo-twitter"> </ion-icon>
                       &nbsp; twitter </a>
                         <a href={'https://www.tumblr.com/widgets/share/tool?posttype=quote&tags=quotes,freecodecamp&caption=' +
      encodeURIComponent(randomQuotes.author) +
      '&content=' +
      encodeURIComponent(randomQuotes.text) +
      '&canonicalUrl=https%3A%2F%2Fwww.tumblr.com%2Fbuttons&shareSource=tumblr_share_button'} className='btn btn-danger'>

    <ion-icon name="logo-tumblr"></ion-icon> &nbsp; tumblr
                         </a>
                      </div>
                   </div>
               </div>
           </div>
           
           CodeWithVico
        </div>
        </div>
    );
}

ReactDOM.render(<App/>, document.getElementById('app'))
