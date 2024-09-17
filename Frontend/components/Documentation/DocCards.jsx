import React from 'react'
import "../../public/docStyles.css"
import CardHeader from './CardHeader'
import InnerCard from './InnerCard'
import GetButton from './GetButton'
import UrlBar from './UrlBar'
import CollapsibleTable from './Tables'
import {allRows, genderRows, ringBearerRows, randomRows, quoteRows, toolRows, toolNameRows, raceRows, raceNameRows, homeNameRows, createData} from "../../src/tables"


function DocCards() {


  return (
    <div>
      <div className='card-container'>
        <div className='whole-card'>
        <CardHeader id="universe" title="UNIVERSE" desc="Explore the vast expanse of the universe with these endpoints, each unlocking secrets and insights from across all realms and ages."/>
        </div>

        <div className='whole-card'>
        <InnerCard title="Get Whole Universe" desc="You will get all datas related to whole universe through this endpoint."/>
        <div className='the-card'>
        <GetButton/>
        <UrlBar endpoint="universe"/>
        </div>
        <div className='card-table'><CollapsibleTable rows={allRows}/></div>
        </div>
        

        <div className='whole-card'>
        <InnerCard id="data-by-gender" title="Filter Characters by Gender" desc="Effortlessly uncover the legendary characters of Middle-earth by filtering your search based on gender."/>
        <div className='the-card'>
        <GetButton/>
        <UrlBar endpoint="universe?gender=female"/>
        </div>
        <div className='card-table'><CollapsibleTable rows={genderRows}/></div>
        </div>

        <div className='whole-card'>
        <InnerCard id="data-by-ring" title="Filter Characters by Ring Bearer" desc="Unveil the true bearers of the One Ring with precision by filtering your search to include only those who have carried this powerful artifact."/>
        <div className='the-card'>
        <GetButton/>
        <UrlBar endpoint="universe?ring_bearer=true"/>
        </div>
        <div className='card-table'><CollapsibleTable rows={ringBearerRows}/></div>
        </div>

        <hr id="doc-hr"/>

        <div className='whole-card'>
        <CardHeader id="random" title="RANDOM" desc="Discover a surprise from Middle-earth with a single call—our random endpoint will whisk you away to a random character, location, or item from the Tolkien universe."/>

        <div className='the-card'>
          <GetButton/>
          <UrlBar endpoint="random"/>
        </div>
        <div className='card-table'><CollapsibleTable rows={randomRows}/></div>
        </div>

        <hr id="doc-hr"/>

        <div className='whole-card'>
        <CardHeader id="quotes" title="QUOTES" desc="Here are the endpoints that unlock the legendary quotes from across the entire Middle-earth saga."/>

        <InnerCard title="Get All Quotes" desc="Unleash the echoes of Middle-earth with our quotes endpoint—experience the legendary words and profound wisdom of iconic characters that resonate through the ages."/>
        <div className='the-card'>
        <GetButton/>
        <UrlBar endpoint="quotes"/>
        </div>
        <div className='card-table'><CollapsibleTable rows={quoteRows}/></div>
        </div>

        <hr id="doc-hr"/>

       <div className='whole-card'>
       <CardHeader id="tools" title="TOOLS" desc="Explore the powerful tools of Middle-earth with these endpoints, revealing the iconic artifacts from the epic saga."/>
       </div>

    
        <InnerCard title="Get All Tools" desc="Discover the essential tools of Middle-earth with these endpoints, each offering a glimpse into the powerful artifacts wielded by the great heroes and villains of the realm."/>
        <div className='the-card'>
        <GetButton/>
        <UrlBar endpoint="tools"/>
        </div>
        <div className='card-table'><CollapsibleTable rows={toolRows}/></div>
        
        <div className='whole-card'>
        <InnerCard id="tools-by-name" title="Filter Tools by Name" desc="Refine your search for Middle-earth’s iconic tools with precision by filtering through the name parameter to uncover the legendary artifacts you're seeking."/>
        <div className='the-card'>
        <GetButton/>
        <UrlBar endpoint="tools?name=Faramir's Sword"/>
        </div>
        <div className='card-table'><CollapsibleTable rows={toolNameRows}/></div>

        </div> 
        

        <hr id="doc-hr"/>

        <div className='whole-card'>
        <CardHeader id="races" title="RACES" desc="Delve deeper into Middle-earth's rich tapestry by filtering your search with the race parameter, revealing characters and artifacts from specific races across the legendary realms."/>

        <div className='the-card' id="race-card">
        <div style={{display: "flex", gap:"1rem"}}> 
        <GetButton/>
        <div id="race-endpoint"><UrlBar endpoint=":race"/></div>
        </div>
        <span style={{fontWeight: 600}}>For example:</span>
        <UrlBar endpoint="dwarves"/>
        </div>
        <div className='card-table'><CollapsibleTable rows={raceRows}/></div>
        </div>

        <div className='whole-card'> 
        <InnerCard id="races-by-name" title="Filter Races by Name" desc="Unearth the diversity of Middle-earth by filtering races by name—discover the distinct races and their legendary stories with ease."/>
        <div className='the-card'>
        <GetButton/>
        <UrlBar endpoint="elves?name=Legolas Greenleaf"/>
        </div>
        <div className='card-table'><CollapsibleTable rows={raceNameRows}/></div>
        </div>

       <div className='whole-card'>
       <InnerCard id="races-by-home" title="Filter Races by Home" desc="Reveal the origins of Middle-earth's diverse races by filtering through their homelands—uncover where each race calls home and explore their rich histories."/>
        <div className='the-card'>
        <GetButton/>
        <UrlBar endpoint="hobbits?home=Anduin River"/>
        </div>
        <div className='card-table'><CollapsibleTable rows={homeNameRows}/></div>
       </div>


       <hr id="doc-hr"/>
        
    </div>

  
    </div>
  )
}

export default DocCards