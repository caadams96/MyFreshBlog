import { useState } from "preact/hooks";
import {MysteryBox} from "../components/MysteryBox.tsx";

interface RandomNumberGeneratorProps{
    lower:number;
    upper:number;

}

export default function RandomNumberGenerator(props: RandomNumberGeneratorProps){
    const [random, setRandom] = useState(props.lower,props.upper);
        const min = Math.ceil(props.lower);
        const max = Math.floor(props.upper);
        return (
            <div class="flex flex-row gap-4">
                {/*<h1><b>{random}</b></h1>*/}
                <div><MysteryBox onClick={()=>setRandom(Math.floor(Math.random() * (max-min) + min))}></MysteryBox> </div>
                <div ><br/><h1><b>{random}</b></h1></div>

            </div>
        )
}