import { CircleDashed, CircleCheck, UserCog } from "lucide-react";
import { Button } from "../../components/button";

export function Guests (){
    return (
        <div className="space-y-6">
            <h2 className="font-semibold text-xl">Convidados</h2>
            <div className="space-y-5">
                <div className="flex items-center justify-between gap-4">
                    <div className="space-y-1.5 flex-1a">
                        <span className="block font-medium text-zinc-100">Jéssica White</span>
                        <span className="block text-sm text-zinc-400 w-64 truncate">
                            jessica.white44@gmail.com
                        </span>
                    </div>
                    <CircleDashed className="text-zinc-400 size-5"/>
                </div>
                <div className="flex items-center justify-between gap-4">
                    <div className="space-y-1.5 flex-1a">
                        <span className="block font-medium text-zinc-100">Dr. Rita</span>
                        <span className="block text-sm text-zinc-400 w-64 truncate">
                            lacy.stiedemann@gmail.com
                        </span>
                    </div>
                    <CircleCheck className="text-zinc-400 size-5"/>
                </div>
            </div>
            <Button variant="secondary">
                <UserCog className="size-5" />
                Gerenciar convidados
            </Button>
        </div>
    )
}