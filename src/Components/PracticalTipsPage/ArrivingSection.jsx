import React , { useState} from 'react'
import './arriving.css'

import car from '/src/assets/practical-tips/car.svg'
import airplane from '/src/assets/practical-tips/airplane.svg'
import train from '/src/assets/practical-tips/train.svg'
import travel from '/src/assets/practical-tips/travelling.svg'

const ArrivingSection = () => {
    const [isCarOpen, setCarOpen] = useState(false);
    const [isAirplaneOpen, setAirplaneOpen] = useState(false);
    const [isTrainOpen, setTrainOpen] = useState(false);

    const toggleCar = () => {
        setCarOpen(!isCarOpen);
        setAirplaneOpen(false);
        setTrainOpen(false);
      };
    
      const toggleAirplane = () => {
        setCarOpen(false);
        setAirplaneOpen(!isAirplaneOpen);
        setTrainOpen(false);
      };
    
      const toggleTrain = () => {
        setCarOpen(false);
        setAirplaneOpen(false);
        setTrainOpen(!isTrainOpen);
      };

  return (
    <div className='w-screen h-fit flex justify-end mt-10 pb-5'>
      <div className='hidden lg:block lg:w-[35vw] object-cover lg:h-[679px] lg:rounded-xl overflow-hidden lg:mr-5 drop-shadow-lg'>
            <img src={travel} alt="" />
      </div>
      <div className='w-[85vw] bg-button2 h-fit rounded-l-xl flex flex-col justify-center items-center sm:items-start sm:px-5 lg:w-[60vw]'>
            <div className="mt-5 p-2 bg-background1 rounded-xl flex flex-col justify-center items-center w-[200px] box  sm:flex-row drop-shadow-lg lg:h-[200px]">
                <img
                    src={car}
                    alt='car'
                    onClick={toggleCar}
                    className="w-[150px]"
                />
                {isCarOpen && (
                    <div className="w-[200px] h-fit text-[12px] text-justify p-2 sm:w-[70vw]  content-text lg:text-[1rem] lg:pl-[20px]">
                        <p>To reach the vibrant city of Yogyakarta (Jogja) by car, follow the well-marked highway signs from your starting point to the Yogyakarta region on the island of Java, Indonesia. Enjoy the scenic drive through picturesque landscapes and cultural sites along the way.</p>
                    </div>
                )}
            </div>
            <div className="mt-5 p-2 bg-background1 rounded-xl flex flex-col justify-center items-center w-[200px] sm:flex-row box drop-shadow-lg lg:h-[200px]">
                <img
                    src={airplane}
                    alt='car'
                    onClick={toggleAirplane}
                    className="w-[150px]"
                />
                {isAirplaneOpen && (
                    <div className="w-[200px] h-fit text-[12px] text-justify p-2 sm:w-[70vw] content-text lg:text-[1rem] lg:pl-[18px]">
                        <p>For a convenient way to reach Jogja, you can take a flight to Adisucipto International Airport or International Yogyakarta Airport, these 2 main airport serving Yogyakarta, located on the island of Java, Indonesia. Upon landing, you'll have easy access to the city's vibrant culture and attractions.</p>
                    </div>
                )}
            </div>
            <div className="mt-5 mb-5 p-2 bg-background1 rounded-xl flex flex-col justify-center items-center w-[200px] sm:flex-row box drop-shadow-lg lg:h-[200px]">
                <img
                    src={train}
                    alt='car'
                    onClick={toggleTrain}
                    className="w-[150px]"
                />
                {isTrainOpen && (
                    <div className="w-[200px] h-fit text-[12px] text-justify p-2 mt-3 sm:w-[70vw] content-text lg:text-[1rem] lg:pl-[20px]">
                        <p>To travel to Jogja by train, you can board a train from major cities like Jakarta or Surabaya, heading to Tugu Railway Station in Yogyakarta, situated on the island of Java, Indonesia. This scenic train journey offers glimpses of Indonesia's diverse landscapes as you approach the city known for its rich cultural heritage.</p>
                    </div>
                )}
            </div>
      </div>
    </div>
  )
}

export default ArrivingSection
