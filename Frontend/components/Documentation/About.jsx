import React from 'react'
import "../../public/docStyles.css"

function About() {
  return (
    <div id="about" className='about-container'>
        <div className='about' id="about-inner"> 
            <div className='about-title' style={{textAlign: "center", fontSize: "250%"}}>
            About
            </div>

            <div className='about-body' style={{marginTop: "0.5rem"}}>
            Welcome to the ultimate <span style={{color:"rgb(191, 163, 4)"}}>'The Lord of the Rings'</span> API, meticulously crafted for game developers and LOTR enthusiasts alike. Dive deep into the rich and expansive world of J.R.R. Tolkien's legendary Middle-earth with our comprehensive API, designed to bring the magic of this timeless saga to your projects and applications.
<p/>
<div className='about-title' style={{marginTop:"2rem"}}>What is this API?</div>

<div style={{marginTop: "1rem"}}>
This API is your gateway to the intricate details and profound lore of the 'The Lord of the Rings' universe. It offers an extensive collection of data, including:
<p/>
<span className='notated-word'>Characters:</span> Access detailed profiles of all major and minor characters, from the noble Aragorn to the mysterious Gollum. Each character entry includes their home, features, background story, powers and abilities, appearance, characteristic traits, affiliation, tools, and notable quotes.<p/>
<span className='notated-word'>Locations:</span> Explore the vast and varied landscapes of Middle-earth. From the serene Shire to the fiery depths of Mount Doom, each location entry provides a vivid description, key features, historical significance, and notable events that took place there.<p/>
<span className='notated-word'>Tools and Artifacts:</span> Discover the powerful artifacts that shaped the fate of Middle-earth. Whether it's the One Ring or the shards of Narsil, each entry delves into the history, powers, and lore of these legendary items.<p/>
<span className='notated-word'>Quotes:</span> Relive the most memorable and impactful quotes from the series. Whether you need inspiration or a powerful line to add to your project, our extensive collection has you covered.<p/>
</div>

<div className='about-title' style={{marginTop: "2rem"}}>Who is this API for?</div>



            <div style={{marginTop: "1rem"}}>
            Our API is designed with both game developers and die-hard LOTR fans in mind. Whether you're developing a game, building an interactive map, creating educational tools, or simply exploring the lore, this API is an invaluable resource.
            </div>

<div className='about-title' style={{marginTop: "2rem"}}>Key Features</div>
<div style={{marginTop: "1rem"}}>
<span className='notated-word'>Comprehensive Data:</span> Our database is meticulously curated to include detailed information on characters, locations, tools, and quotes.<p/>
<span className='notated-word'>Random Endpoints:</span> Need a touch of unpredictability? Use our /random endpoints to fetch random characters, locations, or quotes, adding an element of surprise to your application.<p/>
<span className='notated-word'>Search and Filter:</span> Easily search and filter through the data to find exactly what you're looking for. Whether it's by character name, race, or any other attribute, our API makes it simple.<p/>
<span className='notated-word'>High Reliability:</span> Built with robust technology, our API ensures high availability and reliability, so you can count on it for your critical projects.
Getting Started
To begin your journey into Middle-earth, simply start making requests to our open API. No sign-up or API key is required. Our comprehensive documentation will guide you through the available endpoints and how to use them effectively.
</div>

<div className='about-title' style={{marginTop:"2rem"}}>Future Developments</div>

        <div style={{marginTop:"1rem"}}>
        We are committed to continuously expanding and improving this API. Upcoming features include more detailed event timelines, integration with interactive maps, and support for additional languages.

With our 'The Lord of the Rings' API, you have the tools to bring the rich lore and epic tales of Middle-earth to life in your own unique way. Whether you're a developer or a fan, this API is your ultimate resource for all things LOTR. Start your adventure today and let the magic of Middle-earth enhance your projects like never before.
        </div>

            </div>



            </div>


        </div>

  )
}

export default About