import { Button } from "@/components/ui/button";
import { Field, FieldLabel } from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import React from "react";

const LOCAL_STORAGE_KEY='sizdah-bedar-code'

function SizdahGate() {
    const [code, setCode] = React.useState(() => {
        // getting stored value
        const saved = localStorage.getItem(LOCAL_STORAGE_KEY);
        return saved ? JSON.parse(saved) : "";
    });

    return <div>
        <form>
            <Field>
                <FieldLabel htmlFor='gate-code'>What's the secret code?</FieldLabel>
                <Input
                    id='gate-code'
                    type='text'
                    placeholder="password123"
                    required
                />
            </Field>
            <Button type="submit" className="bg-accent text-ring">Submit</Button>
        </form>
    </div>;
}

export default SizdahGate;
