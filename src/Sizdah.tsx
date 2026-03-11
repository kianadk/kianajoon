import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
  } from "@/components/ui/accordion"
  import {
    MapPinIcon,
  } from "lucide-react"
  import { Card } from "@/components/ui/card";

const items = [
    {
        value: "activities",
        trigger: "What are we doing?",
        content:
          "Let's celebrate the 13th day of the year",
      },
    {
      value: "food",
      trigger: "What are we eating?",
      content:
        <>
            Here is the menu
            <div>kuku, kotlet, sangak</div>
            Let me know if you have dietary restrictions or preferences. Contributions are welcome but not required. Hit me up if you want help deciding what to bring!
        </>,
    },
    {
      value: "transport",
      trigger: "Where will we be?",
      content:
        "Parking and carpool info, public transit",
    },
    {
      value: "accessibility",
      trigger: "Accessibility",
      content:
        "If you are not feeling well or have been in contact with someone who is not feeling well, please stay home!",
    },
  ]

function Sizdah() {
    return (
        <div className="flex flex-col items-center" >
        <h1>Sizdah bedar at the park</h1>
        <h2>Saturday, April 4th</h2>
        <h3>1pm - 7pm</h3>
        <div><MapPinIcon/> Kenneth</div>
        <p>
            Let's celebrate sizdah bedar at Kenneth Hahn
        </p>
        <Card>Where? Kenneth</Card>
        <Accordion
          type="multiple"
          className="max-w-lg"
          defaultValue={["notifications"]}
        >
          {items.map((item) => (
            <AccordionItem key={item.value} value={item.value}>
              <AccordionTrigger>{item.trigger}</AccordionTrigger>
              <AccordionContent>{item.content}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
        </div>
      )
}

export default Sizdah;