import {
    Field,
    FieldGroup,
    FieldLabel
  } from "@/components/ui/field"
  import {
    MapPinIcon,
  } from "lucide-react"
import { Card } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectGroup, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import InfoCard from "./InfoCard";

function Sizdah() {
    return (
        <div className="flex flex-col items-center mx-10 py-5 md:mx-20 md:py-10" >
        <h1 className="text-4xl font-sans text-center text-foreground">Sizdah bedar picnic</h1>
        <p className="text-3xl my-4">🌸 🌷 🌼</p>
        <p className="text-ring">
            Let's celebrate sizdah bedar at Kenneth Hahn
        </p>
        
        <Card className="flex flex-row px-4 my-4 bg-foreground text-background">
            <div className="flex flex-col gap-2 p-4 text-center w-40">
                <div className="text-lg">🗓️ When?</div> Saturday, April 4th
            </div>
            <Separator orientation="vertical" />
            <div className="flex flex-col gap-2 p-4 text-center w-40">
                <div className="text-lg">🕑 What time?</div> 1pm - 7pm
                </div>
            <Separator orientation="vertical" />
            <div className="flex flex-col gap-2 p-4 text-center w-40">
                <div className="text-lg">📍 Where?</div>  Kenneth Hahn Park
            </div>
        </Card>
        <Separator className='max-w-2xl' />
        <div className="grid grid-cols-2 gap-4 my-4 max-w-2xl">
            <InfoCard icon="🧺" title="What to bring">
                <p>A blanket or lawn chair · Sunscreen · A dish to share · Good vibes · Your favorite outdoor game · Layers for the afternoon breeze</p>
            </InfoCard>
            <InfoCard icon="👀" title="Where to find us">
                <p>will update with picnic table location on the morning of</p>
            </InfoCard>
            <InfoCard icon="🚌" title='Getting there'>
                <p>Parking and carpool info, public transit</p>
            </InfoCard>
            <InfoCard icon="🤝" title='Accessibility'>
                <p>If you are not feeling well or have been in contact with someone who is ill, please stay home!</p>
            </InfoCard>
        </div>
        <div className='max-w-2xl'>
            <InfoCard icon="🍓" title="Food & drinks">
                <p>kuku sabzi, kotlet, chai, sabzi khordan. Let me know if you have dietary restrictions or preferences. Contributions are welcome but not required. Hit me up if you want help deciding what to bring!</p>
            </InfoCard>
        </div>
        
        <Separator className="my-4 max-w-2xl"/>
        <Card className="bg-foreground p-4 text-background w-full max-w-2xl">
            <h2 className="font-sans text-2xl text-accent">Will you join us?</h2>
            <p>Please respond by April 1</p>
            <form>
                <FieldGroup>
                    <Field>
                        <FieldLabel htmlFor='form-name'>Your name</FieldLabel>
                        <Input
                            id='form-name'
                            type='text'
                            placeholder="Luigi Mangionne"
                            required
                        />
                    </Field>
                    <Field>
                        <FieldLabel htmlFor="form-attending">
                            Attending?
                        </FieldLabel>
                        <Select defaultValue="">
                            <SelectTrigger id="form-attending">
                            <SelectValue placeholder="-- Select --" />
                            </SelectTrigger>
                            <SelectContent>
                            <SelectGroup>
                                <SelectItem value="Yes">Yes</SelectItem>
                                <SelectItem value="No">No</SelectItem>
                                <SelectItem value="Maybe">Maybe</SelectItem>
                            </SelectGroup>
                            </SelectContent>
                        </Select>
                    </Field>
                    <Field>
                        <FieldLabel htmlFor="form-attending">
                            Number of guests
                        </FieldLabel>
                        <Select defaultValue="1">
                            <SelectTrigger id="form-attending">
                            <SelectValue placeholder="" />
                            </SelectTrigger>
                            <SelectContent>
                            <SelectGroup>
                                <SelectItem value="1">Just me (1)</SelectItem>
                                <SelectItem value="2">Me and a plus one (2)</SelectItem>
                                <SelectItem value="3">Me n my polycule (3+, please lmk how many!)</SelectItem>
                            </SelectGroup>
                            </SelectContent>
                        </Select>
                    </Field>
                    <Field>
                        <FieldLabel htmlFor="form-message">Dietary needs / dish you're bringing / message</FieldLabel>
                        <Textarea id="form-message" placeholder="E.g. 'Bringing a fruit salad! Vegetarian-friendly.' or 'Will need a chair — thanks!'" />
                    </Field>
                    <Button type="submit" className="bg-accent text-ring">Submit</Button>
                </FieldGroup>
            </form>
        </Card>
        <Card className="w-full max-w-2xl bg-white my-4 p-4">
            <h2 className="text-2xl font-sans text-foreground">Guest list</h2>
            <div>
                <div className="flex justify-between">
                    <div>
                       <h3 className="text-lg">Potato</h3>
                        <span className="flex text-xs text-ring py-2 gap-2"><p>March 15</p> • <p>1 guest</p></span>
                        <p className="text-border text-xs">meow meow meow</p> 
                    </div>
                    <Badge className="bg-muted-foreground text-ring">Attending</Badge>
                </div>
            </div>
        </Card>
    </div>);
}

export default Sizdah;