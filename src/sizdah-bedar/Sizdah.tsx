import { Card } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";
import InfoCard from "./InfoCard";
import PoemImage from './forough_farrokhzad_poem.jpg';

function Sizdah() {
    return (
        <div className="flex flex-col items-center mx-10 py-5 md:mx-10 md:py-10" >
        <h1 className="text-6xl font-sans text-center text-foreground">Sizdah bedar picnic</h1>
        <p className="text-5xl my-4">🌸 🌷 🌼</p>
       
        <Card className="my-4 w-full bg-foreground text-background p-4">
             <p className="text-3xl ">
            Thank you for attending <a 
                className="text-muted-foreground underline"
                href="https://en.wikipedia.org/wiki/Sizdah_Be-dar"
                target="_blank" rel="noopener noreferrer">sizdah bedar</a> 1405. I had such a lovely time! Very appreciative of the gifts, food contributions, and immaculate vibes.
        </p>
      
        <p className="text-3xl">        
        I only managed to take 2 photos the whole day, but I've added them to <a className="text-muted-foreground underline" href="https://photos.app.goo.gl/xFBqZQGHh56GDfBy5">this drive</a>. I'd appreciate you adding others if you have them &lt;3 The drive is public, and I plan to take it down in a few weeks.
        </p>
    
        <p className="text-3xl">
            I want to leave you all with a poem by <a 
                className="text-muted-foreground underline"
                href="https://en.wikipedia.org/wiki/Forough_Farrokhzad"
                target="_blank" rel="noopener noreferrer"
            >
                Forough Farrokhzad
            </a>. My Khaleh (aunt) Jaleh wrote this copy by hand since I was struggling to read the original caligraphy we saw it in. The translation to English is mine.
        </p>
            
        </Card>
        <div className="flex flex-row justify-around p-4">
                
            <div className="text-4xl flex flex-col pt-4 gap-7">
                <p >
                    if we recall someone
                </p>
                <p>
                    this is their craft, not ours
                </p>
                <p>
                    how beautiful it is to love someone
                </p>
                <p>
                    not because of necessity
                </p>
                <p>
                    not out of compulsion
                </p>
                <p>
                    and not out of loneliness
                </p>
                <p>
                    just because they have the worth
                </p>
                <br/>
                <p>
                    Forough Farrokhzad
                </p>
            </div>
            <img src={PoemImage} className="w-2/5" alt="Forough Farrokhzad's poem" />
            </div>
    </div>);
}

export default Sizdah;