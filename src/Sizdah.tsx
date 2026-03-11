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

function Sizdah() {
    return (
        <div className="flex flex-col items-center" >
        <h1 className="text-4xl">Sizdah bedar at the park</h1>
        <p>🌸 🌼 🌷</p>
        <p>
            Let's celebrate sizdah bedar at Kenneth Hahn
        </p>
        
        <Card className="flex flex-row">
            <div>
                When? Saturday, April 4th
            </div>
            <Separator orientation="vertical" />
            <div>
                What time? 1pm - 7pm
            </div>
            <Separator orientation="vertical" />
            <div>
                Where? <MapPinIcon/> Kenneth
            </div>
        </Card>
        <Separator />
        <div>
            <Card>
                <h4>Food & drinks</h4>
                <p>kuku sabzi, kotlet, chai, sabzi khordan. Let me know if you have dietary restrictions or preferences. Contributions are welcome but not required. Hit me up if you want help deciding what to bring!</p>
            </Card>
            <Card>
                <h4>Where to find us</h4>
                <p>will update with picnic table location on the morning of</p>
            </Card>
            <Card>
                <h4>Getting There</h4>
                <p>Parking and carpool info, public transit</p>
            </Card>
            <Card>
                <h4>Accessibility</h4>
                <p>If you are not feeling well or have been in contact with someone who is not feeling well, please stay home!</p>
            </Card>
        </div>
        <Card>
            <h4>What to bring</h4>
            <p>A blanket or lawn chair · Sunscreen · A dish to share · Good vibes · Your favorite outdoor game · Layers for the afternoon breeze</p>
        </Card>
        <Separator />
        <Card>
            <h2>Will you join us?</h2>
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
                    <Button type="submit">Submit</Button>
                </FieldGroup>
            </form>
        </Card>
        <Card>
            <h2>Guest list</h2>
            <div>
                <div>
                    <h3>Potato</h3>
                    <p>March 15</p>
                    <p>1 guest</p>
                    <p>meow meow meow</p>
                    <Badge>Attending</Badge>
                </div>
            </div>
        </Card>
    </div>);
}

export default Sizdah;