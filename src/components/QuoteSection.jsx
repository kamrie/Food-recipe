import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faQuoteLeft } from "@fortawesome/free-solid-svg-icons"

export default function QuoteSection() {
  return (
    <div className='section quote'> 
       <p className='quote-text'>
        <FontAwesomeIcon icon={faQuoteLeft}/>
           Food is deeply intertwined with our identity. It reflects our nationality, ethnicity, personal history, and cultural roots, connecting us to our family and heritage from the very beginning."
       </p>
       <p className='quote-author'> Hilda Bacci</p>
    </div>
  )
}
