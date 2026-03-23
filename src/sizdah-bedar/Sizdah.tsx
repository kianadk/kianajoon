import { Card } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";
import InfoCard from "./InfoCard";

function Sizdah() {
    return (
        <div className="flex flex-col items-center mx-10 py-5 md:mx-10 md:py-10" >
        <h1 className="text-6xl font-sans text-center text-foreground">Sizdah bedar picnic</h1>
        <p className="text-5xl my-4">🌸 🌷 🌼</p>
        <p className="text-xl text-ring text-center">
            Hello friends! I'm hosting a picnic in celebration of <a className="text-muted-foreground underline" href="https://en.wikipedia.org/wiki/Sizdah_Be-dar" target="_blank" rel="noopener noreferrer">sizdah bedar</a>. The plan is to spend the day at Kenneth Hahn yapping, snacking, and engaging in tomfoolery. Come through for as long or short as you wish. RSVP <a className="text-muted-foreground underline" href="https://forms.gle/LVzDtEqBJS968uCz9">here</a> by April 1st!
        </p>
        
        <Card className="flex flex-row px-4 my-4 w-full bg-foreground text-background">
            <div className="flex flex-col gap-2 p-4 text-center w-1/3 text-2xl">
                <div className="text-2xl">🗓️ When?</div> Saturday, April 4th
            </div>
            <Separator orientation="vertical" />
            <div className="flex flex-col gap-2 p-4 text-center w-1/3 text-2xl">
                <div className="text-2xl">🕑 What time?</div> 1pm - 7pm
                </div>
            <Separator orientation="vertical" />
            <div className="flex flex-col gap-2 p-4 text-center w-1/3 text-2xl">
                <div className="text-2xl">📍 Where?</div>  Kenneth Hahn Park
            </div>
        </Card>
        <Separator className='max-w-2xl' />
        <div className='my-4'>
            <InfoCard icon="🍓" title="Food & drinks">
                <p>I will be providing some food that embodies springtime for me (+ paper plates and cutlery) </p>
                <ul className="text-center">
                    <li><b>sabzi khordan platter</b><br/> persian snacking herbs, cucumber, radishes, walnuts, cheese</li>
                    <li><b>kuku sabzi</b><br/> herb frittatta</li>
                    <li><b>kotlet</b><br/> fried patties of meat, potato, and onion </li>
                    <li><b>chai & sheerini</b><br/> black tea and small sweets</li>
                </ul>
                <p>I feel blessed to know most of your tummys pretty well, but lmk if you have any dietary restrictions. Contributions are welcome but not required. Lmk if you want help deciding what to bring!</p>
            </InfoCard>
        </div>
        <div className="grid grid-cols-2 gap-4">
            <InfoCard icon="👀" title="Where to find us">
                <p>We'll be posted up at Kenneth Hahn Park. Hoping to snag a table S/SE of the lake. I will send out an update on the morning of.</p>
                <p>A couple map options for reference:</p>
                <ul>
                    <li><a className="text-muted-foreground underline" href="https://file.lacounty.gov/SDSInter/dpr/213796_KHTrails1.pdf" target="_blank" rel="noopener noreferrer">LA county trail map</a></li>
                    <li><a className="text-muted-foreground underline" href="https://csparks.maps.arcgis.com/apps/instant/basic/index.html?appid=065b067caa204e8da48d4b53c9483ab0&UNITNBR=516" target="_blank" rel="noopener noreferrer">California state parks map</a></li>
                    <li><a className="text-muted-foreground underline" href="https://ontheworldmap.com/usa/city/los-angeles/kenneth-hahn-state-recreation-area-map.jpg" target="_blank" rel="noopener noreferrer">Mystery internet map</a></li>
                    
                </ul>
            </InfoCard>
            <InfoCard icon="🧺" title="What to bring">
                <p>Mainly just bring yourself &lt;3 but here are some other things to consider:</p>
                <ul>
                    <li>A blanket or lawn chair</li>
                    <li>Sunscreen</li>
                    <li>A dish to share</li>
                    <li>Board games or sports balls</li>
                    <li>A water bottle to stay hydrated</li>
                    <li>Layers for the afternoon breeze</li>
                </ul>
            </InfoCard>
            <InfoCard icon="🤝" title='Accessibility'>
                <p>If you are not feeling well or have been in contact with someone who is ill, please stay home!</p>
                <p>Park in the official lots or taking the park shuttle to minimize walking distance</p>
                <p>Consider masking to prevent the spread of disease and also protect against allergens</p>
                <p>Restrooms are a short walk from the picnic area</p>
                <p>There are paved paths around the parking lots and lake but uneven grass around picnic areas</p>
            </InfoCard>
            <InfoCard icon="🚌" title='Getting there'>
                <b>Official lots</b>
                <p>The park has several official lots that are a short walk from the picnic areas. They cost $10 for the day and you may have to endure a long line of cars at the park entrance. </p>
                <b>Street parking</b>
                <p>There is pedestrian entrance gate for the park on Cloverdale Ave (route to 4260 Cloverdale) and plentiful street parking in the residential area. The gate is a ~10 minute walk from the picnic areas.</p>
                <b>Transit</b>
                <p>There is <a href="https://pw.lacounty.gov/core-service-areas/transportation/the-link-baldwin-hills-parklands/">a shuttle</a> that runs from the Expo/La Cienega metro station to the park.</p>
            </InfoCard>
        </div>
        <Button className="bg-foreground p-4 text-background fixed bottom-4 right-6 p-8 rounded-full">
            <a className="font-sans text-3xl text-accent" href="https://forms.gle/LVzDtEqBJS968uCz9" target="_blank" rel="noopener noreferrer">RSVP here</a>
        </Button>
    </div>);
}

export default Sizdah;