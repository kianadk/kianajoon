import { Card } from "@/components/ui/card";

type InfoCardProps = {
    children: React.ReactNode;
    title: string;
    icon: string;
}

function InfoCard({ children, title, icon }: InfoCardProps) {
    return <Card className="p-4 bg-white text-xl">
        <div className="flex gap-2 align-middle items-center">
           <span className="text-4xl">{icon}</span>
           <h4 className="text-foreground text-2xl font-bold">{title}</h4> 
        </div>
        
        {children}
    </Card>
};

export default InfoCard;
