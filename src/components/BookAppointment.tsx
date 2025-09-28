'use client'

import { useState } from 'react'
import { Badge } from '@/components/ui/badge'
import { DayPicker, getDefaultClassNames } from 'react-day-picker'
import 'react-day-picker/style.css'

interface DatePickerProps {
    selected: Date | undefined
    onSelect: (date: Date | undefined) => void
}

function DatePicker({ selected, onSelect }: DatePickerProps) {
    const defaultClassNames = getDefaultClassNames()

    return (
        <DayPicker
            animate
            mode="single"
            classNames={{
                nav: `${defaultClassNames.nav} items-center gap-2`,
                today: 'bg-primary text-white rounded-full',
                button_next: 'bg-[#F7F8FC] text-[#8C96AB] rounded-full p-1',
                button_previous: 'bg-[#F7F8FC] text-[#8C96AB] rounded-full p-1',
                chevron: 'fill-[#8C96AB] w-4 h-4',
                selected: 'bg-secondary text-white border-none',
            }}
            disabled={{ before: new Date() }}
            selected={selected}
            onSelect={onSelect}
            aria-label="Date picker for selecting appointment date"
        />
    )
}

const availableSlots: string[] = ['9 am - 12 am']

const BookAppointment: React.FC = () => {
    const [selectedDate, setSelectedDate] = useState<Date | undefined>(new Date())

    return (
        <section
            className="relative flex flex-col gap-8 w-full py-8 md:py-12 lg:py-16"
            aria-labelledby="appointment-heading"
            role="region">
            <h2
                id="appointment-heading"
                className="text-xl md:text-2xl lg:text-3xl text-primary">
                Next Available Dates
            </h2>
            <DatePicker
                selected={selectedDate}
                onSelect={setSelectedDate}
            />
            <h3
                className="text-primary"
                aria-live="polite">
                Book slot for{' '}
                {selectedDate
                    ? selectedDate.toLocaleDateString('en-US', { month: 'long', day: 'numeric' })
                    : 'no date selected'}
            </h3>
            <div
                className="flex items-center gap-2"
                role="group"
                aria-label="Available time slots">
                {availableSlots.map(slot => (
                    <Badge
                        key={slot}
                        variant="outline"
                        role="button"
                        tabIndex={0}
                        aria-label={`Select ${slot} time slot`}>
                        {slot}
                    </Badge>
                ))}
            </div>
        </section>
    )
}

export default BookAppointment
