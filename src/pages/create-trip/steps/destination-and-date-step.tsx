import { ArrowRight, Calendar, MapPin, Settings2 } from "lucide-react";
import { Button } from "../../../components/button";
// import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
// import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
// import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
// import { TimePicker } from '@mui/x-date-pickers/TimePicker';

interface DestinationAndDateStepProps {
    isGuestsInputOpen: boolean
    closeGuestsInput: () => void
    openGuestsInput: () => void
}

// export default function BasicTimePicker() {
//     return (
//       <LocalizationProvider dateAdapter={AdapterDayjs}>
//         <DemoContainer components={['TimePicker']}>
//           <TimePicker label="Basic time picker" />
//         </DemoContainer>
//       </LocalizationProvider>
//     );
//   }

export function DestinationAndDateStep({closeGuestsInput, isGuestsInputOpen, openGuestsInput}: DestinationAndDateStepProps){
    return (
        <div className="h-16 bg-zinc-900 px-4 rounded-xl flex items-center shadow-shape gap-1">
            <div className="flex items-center gap-2 flex-1">
                <MapPin className="size-5 text-zinc-400"/>
                <input disabled={isGuestsInputOpen} type="text" placeholder="Para onde você vai?" className="bg-transparent text-lg placeholder-zinc-400 outline-none flex-1"/>
            </div>

            <div className="flex items-center gap-2">
                <Calendar className="size-5 text-zinc-400"/>
                <input disabled={isGuestsInputOpen} type="text" placeholder="Quando?" className="bg-transparent text-lg  placeholder-zinc-400 w-40 outline-none"/>
            </div>

            <div className="w-px h-5 bg-zinc-800"/>

            {isGuestsInputOpen ? (
                <Button variant="secondary" size="full" onClick={closeGuestsInput}>
                    Alterar local/data
                    <Settings2 className="size-5" />
                </Button>
            ) : (
                <Button variant="primary" onClick={openGuestsInput}>
                    Continuar
                    <ArrowRight className="size-5"/>
                </Button>
            )}
        </div>
    )
}