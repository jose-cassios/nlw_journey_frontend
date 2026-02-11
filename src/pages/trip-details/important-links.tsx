import { Link2 } from "lucide-react";
import { api } from "../../lib/axios";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

interface Link {
    id: string
    title: string
    url: string
}

export function ImportantLinks (){
    const { tripId } = useParams()
    const [links, setLinks] = useState<Link[]>([])

    useEffect(() => {
        api.get(`/trips/${tripId}/links`).then(response => setLinks(response.data.links))
    }, [tripId]);

    return (
        <div className="space-y-6">
            <h2 className="font-semibold text-xl">Links importantes</h2>
            <div className="space-y-5">
                
                {links.map((link: Link) => (
                    <div key={link.id} className="flex items-center justify-between gap-4">
                        <div className="space-y-1.5 flex-1a">
                            <span className="block font-medium text-zinc-100">{link.title}</span>
                            <a href={link.url} className="block text-xs text-zinc-400 w-64 truncate hover:text-zinc-200">
                                {link.url}
                            </a>
                        </div>
                        <Link2 className="text-zinc-400 size-5"/>
                    </div>
                ))}



            </div>
        </div>
    )
}