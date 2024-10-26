import { Link2, Plus } from "lucide-react";
import { Button } from "../../components/button";

export function ImportantLinks (){
    return (
        <div className="space-y-6">
            <h2 className="font-semibold text-xl">Links importantes</h2>
            <div className="space-y-5">
                <div className="flex items-center justify-between gap-4">
                    <div className="space-y-1.5 flex-1a">
                        <span className="block font-medium text-zinc-100">Reserva do Airbnb</span>
                        <a href="#" className="block text-xs text-zinc-400 w-64 truncate hover:text-zinc-200">
                        https://www.airbnb.com.br/rooms/18470001170523750823759723463466346363532453532454354348832582535972539
                        </a>
                    </div>
                    <Link2 className="text-zinc-400 size-5"/>
                </div>
                <div className="flex items-center justify-between gap-4">
                    <div className="space-y-1.5 flex-1a">
                        <span className="block font-medium text-zinc-100">Reserva do Airbnb</span>
                        <a href="#" className="block text-xs text-zinc-400 w-64 truncate hover:text-zinc-200">
                        https://www.airbnb.com.br/rooms/18470001170523750823759723463466346363532453532454354348832582535972539
                        </a>
                    </div>
                    <Link2 className="text-zinc-400 size-5"/>
                </div>
            </div>
            <Button variant="secondary">
                Cadastrar novo link
                <Plus className="size-5" />
            </Button>
        </div>
    )
}