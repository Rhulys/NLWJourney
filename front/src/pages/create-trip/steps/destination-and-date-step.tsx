import { MapPin, Calendar, ArrowRight, Settings2, X } from "lucide-react";
import { useState } from "react";
import { DateRange, DayPicker } from "react-day-picker";
import { Button } from "../../../components/button";
import { format } from "date-fns";
import "react-day-picker/dist/style.css";

interface DestinationAndDateStepProps {
  isGuestsInputOpen: boolean;
  eventStartAndEndDates: DateRange | undefined
  closeGuestsInput: () => void;
  openGuestsInput: () => void;
  setDestination: (destination: string) => void
  setEventStartAndEndDates: (dates: DateRange | undefined) => void
}

export function DestinationAndDateStep({
  closeGuestsInput,
  isGuestsInputOpen,
  openGuestsInput,
  setDestination,
  setEventStartAndEndDates,
  eventStartAndEndDates
}: DestinationAndDateStepProps) {
  const [isDatePickerOpen, setIsDatePickerOpen] = useState(false);

  function openDatePicker() {
    return setIsDatePickerOpen(true);
  }
  function closeDatePicker() {
    return setIsDatePickerOpen(false);
  }

  const displayedDate =
    eventStartAndEndDates && eventStartAndEndDates.from && eventStartAndEndDates.to
      ? format(eventStartAndEndDates.from, "d 'de 'LLL").concat(' até ').concat(format(eventStartAndEndDates.to, "d 'de 'LLL"))
      : null;

  return (
    <div className="h-48 md:h-16 bg-zinc-900 gap-5 px-4 rounded-xl flex flex-col md:flex-row items-center shadow-shape">
      <div className="flex items-center gap-2 w-full md:flex-1 md:border-none border-b border-zinc-300 pt-2 md:pt-0">
        <MapPin className="size-5 text-zinc-400" />
        <input
          type="text"
          placeholder="Para onde voce vai? "
          className="bg-transparent text-lg placeholder-zinc-400 outline-none flex-1 py-2"
          disabled={isGuestsInputOpen}
          onChange={e => setDestination(e.target.value)}
        />
      </div>

      <button
        onClick={openDatePicker}
        disabled={isGuestsInputOpen}
        className="flex items-center gap-2 py-2 text-left w-full md:border-none md:w-[240px] border-b border-zinc-300"
      >
        <Calendar className="size-5 text-zinc-400" />
        <span className=" text-lg text-zinc-400 w-40 flex-1">
          {displayedDate || "Quando?"}
        </span>
      </button>

      {isDatePickerOpen && (
        <div className="fixed inset-0 bg-black/60 flex items-center justify-center">
          <div className="rounded-xl py-5 px-6 shadow-shape bg-zinc-900 space-y-5">
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <h2 className="text-lg font-semibold">Selecione a Data</h2>
                <button
                  onClick={closeDatePicker}
                  type="button"
                  className="size-5 text-zinc-400"
                >
                  <X />
                </button>
              </div>
            </div>

            <DayPicker
              mode="range"
              selected={eventStartAndEndDates}
              onSelect={setEventStartAndEndDates}
            />
          </div>
        </div>
      )}

      <div className="hidden md:block w-px h-6 bg-zinc-800" />

      {isGuestsInputOpen ? (
        <Button onClick={closeGuestsInput} variant="secondary">
          Alterar local/data
          <Settings2 className="size-5" />
        </Button>
      ) : (
        <Button onClick={openGuestsInput} variant="primary">
          Continuar <ArrowRight className="size-5" />
        </Button>
      )}
    </div>
  );
}
