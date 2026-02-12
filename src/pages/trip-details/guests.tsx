import { CircleDashed, CircleCheck } from "lucide-react";
import { api } from "../../lib/axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

interface Participant {
    id: string;
    name?: string;
    email: string;
    is_confirmed: boolean;
}

export function Guests() {
    const { tripId } = useParams()
    const [participants, setParticipants] = useState<Participant[]>([])

    useEffect(() => {
        api.get(`/trips/${tripId}/participants`).then(response => setParticipants(response.data.participants))
    }, [tripId]);

    return (
        <div className="space-y-6">
            <h2 className="font-semibold text-xl">Convidados</h2>
            <div className="space-y-5">
                {participants.map((participant, index) => {
                    return (
                        <div key={participant.id} className="flex items-center justify-between gap-4">
                            <div className="space-y-1.5 flex-1">
                                <span className="block font-medium text-zinc-100">{participant.name ?? `Convidado ${index}`}</span>
                                <span className="block text-sm text-zinc-400 w-64 truncate">
                                    {participant.email}
                                </span>
                            </div>
                            {participant.is_confirmed ? 
                            (<CircleCheck className="text-green-500 size-5 shrink-0" /> )
                            : <CircleDashed className="text-zinc-400 size-5 shrink-0" />}
                        </div>
                    )
                })}
            </div>
        </div>
    )
}