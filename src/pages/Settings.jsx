import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheck } from '@fortawesome/free-solid-svg-icons'
import { useState, useEffect } from 'react'

export default function Settings() {


    const [settings, setSettings] = useState({
        "--background-color": "#fff",
        "--background-light": "#fff",
        "--primary-color": "rgb(38, 0, 255)",
        "--shadow-color": "rgba(0,0,0,0.2)",
        "--text-color": "#0A0A0A",
        "--text-light": "#575757",
        "--font-size": "16px",
        "--animation-speed": "1"
      });
      

    //   using useeffect
    useEffect(() => {
        console.log(settings)

         const root = document.documentElement
         for(let key in settings){
            root.style.setProperty(key, settings[key])
         }
    }, [settings])

  const [theme, setTheme] = useState("dark");
  const themes =[
      {
        "--background-color": "#fff",
        "--background-light": "#fff",
        "--shadow-color": "rgba(0,0,0,0.2)",
        "--text-color": "#0A0A0A",
        "--text-light": "#575757",
      },
      {
        "--background-color": "rgb(29, 29, 29)",
        "--background-light": "rgb(77, 77, 77)",
        "--shadow-color": "rgba(0,0,0,0.2)",
        "--text-color": "#ffffff",
        "--text-light": "#eceaea",
      },
  ]

   
    function changeTheme(i){
        const _theme = {...themes[i]}
        setTheme(i == 0 ? "light" : "dark")
        // update settings
        let _settings  = {...settings}    //creating a new object from the settings above
         for(let key in _theme){
            //  console.log(_theme[key])
            _settings[key] = _theme[key]
         }

         setSettings(_settings)
    }

    function changeColor(i){
            const _color = primaryColors[i]
            let _settings  = {...settings}    //creating a new object from the settings above
                _settings["--primary-color"]  = _color 
                setPrimaryColor(i) ;
                setSettings(_settings)

    }
    function changeFontSize(i){
                const _sizes = fontSizes[i]
                let _settings  = {...settings}    //creating a new object from the settings above
                _settings["--font-size"]  = _sizes.value
                setFontSize(i) ;
                setSettings(_settings)
              
    }
    function changeAnimationSpeed(i){
                const _speed = animationSpeeds[i]
                let _settings  = {...settings}    //creating a new object from the settings above
                _settings["--animation-speed"]  = _speed.value
                setAnimationSpeed(i) ;
                setSettings(_settings)
              
    }

   

  const primaryColors = [
    "rgb(255, 0, 86)",
    "rgb(33, 150, 243)",
    "rgb(255, 193, 7)",
    "rgb(0, 200, 83)",
    "rgb(156, 39, 176)"
  ];
  const fontSizes = [
    {
      title: "Small",
      value: "12px"
    },
    {
      title: "Medium",
      value: "16px"
    },
    {
      title: "Large",
      value: "20px"
    }
  ];
  const animationSpeeds = [
    {
      title: "slow",
      value: 2
    },
    {
      title: "Medium",
      value: 1
    },
    {
      title: "fast",
      value: .5
    }
  ];
  
  const [primaryColor, setPrimaryColor] = useState(0);
  const [fontSize, setFontSize] = useState(1);
  const [animationSpeed, setAnimationSpeed] = useState(0);

  return (
    <div>
      <div className="section d-block">
        <h2>Preferred theme</h2>
        <div className="options-container">
           <div className="options light"  onClick={() => changeTheme(0)}>
                {theme === "light" && (
                     <div className="check">
                     < FontAwesomeIcon icon={faCheck}/>
                    </div>
                ) }
          </div>
           <div className="options dark" onClick={() => changeTheme(1)}>
             {theme === "dark" && (
                     <div className="check">
                     < FontAwesomeIcon icon={faCheck}/>
                    </div>
                ) }
               
          </div>
        
            
        </div>
      </div>
      {/* Primary color */}
      <div className="section d-block">
        <h2>Preferred color</h2>
        <div className="options-container">
          
            {primaryColors.map((color, index) => (
                    <div className="options light" style={{backgroundColor:color}} onClick={() => changeColor(index)}>
                    {primaryColor === index && (
                        <div className="check">
                        < FontAwesomeIcon icon={faCheck}/>
                        </div>
                    ) }
           </div>
          ))}
            
        </div>
      </div>
         {/* Font size */}
      <div className="section d-block">
        <h2>Font size</h2>
        <div className="options-container">
          
            {fontSizes.map((size, index) => (
                    // < className="options light" style={{sizeSize:size}}>
                    //   {fontSize == index && (
                    //     <div className="check">
                    //     < FontAwesomeIcon icon={faCheck}/>
                    //     </div>

                    <button className='btn'  onClick={() => changeFontSize(index)} >
                        {size.title}
                    
                       {fontSize === index  &&  <span> < FontAwesomeIcon icon={faCheck}/></span> }
                    </button>
             )) }
           
          
            
        </div>
      </div>
         {/* Animation speed */}
      <div className="section d-block">
        <h2>Animation speed </h2>
        <div className="options-container">
          
            {animationSpeeds.map((speed, index) => (                   
                    <button className='btn' onClick={() => changeAnimationSpeed(index)}>
                        {speed.title}
                       {animationSpeed === index  &&  <span> < FontAwesomeIcon icon={faCheck}/></span> }
                    </button>
             )) }
           
          
            
        </div>
      </div>
    </div>
  )
}
