import { format } from "date-fns";
import { X, Calendar, MapPin } from "lucide-react";
import { useState } from "react";
import { DateRange, DayPicker } from "react-day-picker";
import { Button } from "../../components/button";

interface AlterarDateModalProps {
    closeModalDate: () => void;
}

export function AlterarDateModal({closeModalDate}: AlterarDateModalProps) {
  const [eventStartAndEndDates, setEventStartAndEndDates] = useState<DateRange | undefined>();

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

    const today = new Date();
    today.setDate(today.getDate() + 1);

  return (
    <div className="fixed inset-0 bg-black/60 flex items-center justify-center">
      <div className="w-[640px] rounded-xl py-5 px-6 shadow-shape bg-zinc-900 space-y-5">
        <div className="space-y-2">
          <div className="flex items-center justify-between">
            <h2 className="text-lg font-semibold">Alterar local/data</h2>
            <button onClick={closeModalDate} type="button" className="size-5 text-zinc-400">
              <X /> 
            </button>
          </div>
          <p className="text-sm text-zinc-400">
            Todos convidados podem visualizar as alterações.
          </p>
        </div>

        <form className="space-y-3">
          <div className="flex items-center gap-2 w-full md:flex-1 border-b border-zinc-300 pt-2 md:pt-0">
            <MapPin className="size-5 text-zinc-400" />
            <input
              type="text"
              placeholder="Para onde voce vai? "
              className="bg-transparent text-lg placeholder-zinc-400 outline-none flex-1 py-2"
            />
          </div>

          <button
            type="button"
            onClick={openDatePicker}
            className="flex items-center gap-2 py-2 text-left w-full border-b border-zinc-300"
          >
            <Calendar className="size-5 text-zinc-400" />
            <span className=" text-lg text-zinc-400 w-40 flex-1">
              {displayedDate|| "Quando?"}
            </span>
          </button>

          <Button variant="primary" size="full">
            Salvar alterações
          </Button>
        </form>
      </div>

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
              disabled={{ before: today }}
            />
          </div>
        </div>
      )}
      
    </div>
  );
}
