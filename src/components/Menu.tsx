import { myCardData } from "./Data"
import Card from './Card'
    
function Menu(){
      return (
        <div id="menu" className="flex flex-col w-full h-max justify-center items-center p-30">
            <div className="flex flex-row flex-wrap gap-x-6 gap-y-6 justify-center">
                {myCardData.map((item, index) =>  (
                    <Card key={index}  name={item.name} source={item.source} description={item.details}/>
                ))}                
            </div>
        </div>
    )
}

export default Menu