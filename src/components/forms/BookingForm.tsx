'use client'

import { z } from 'zod'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from '@/components/ui/select'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { Form, FormControl, FormField, FormItem, FormMessage } from '@/components/ui/form'

const guestOptions = [
    { value: '1', label: '1 Guest' },
    { value: '2', label: '2 Guests' },
    { value: '3', label: '3 Guests' },
    { value: '4', label: '4 Guests' },
    { value: '5', label: '5+ Guests' },
]

const formSchema = z.object({
    guests: z.string().min(1, 'Please select number of guests'),
    date: z.string().min(1, 'Please select a date'),
    addons: z.string().optional(),
})

type BookingFormValues = z.infer<typeof formSchema>

interface BookingFormProps {
    onSubmit?: (data: BookingFormValues) => void
}

export function BookingForm({ onSubmit }: BookingFormProps) {
    const form = useForm<BookingFormValues>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            guests: '',
            date: '',
            addons: '',
        },
    })

    const handleFormSubmit = (values: BookingFormValues) => {
        console.log(values)
        if (onSubmit) onSubmit(values)
    }

    return (
        <Form {...form}>
            <form
                onSubmit={form.handleSubmit(handleFormSubmit)}
                className="space-y-4">
                <FormField
                    control={form.control}
                    name="guests"
                    render={({ field }) => (
                        <FormItem>
                            <FormControl>
                                <Select
                                    onValueChange={field.onChange}
                                    defaultValue={field.value}>
                                    <SelectTrigger className="h-14 bg-white px-6 shadow-none">
                                        <SelectValue placeholder="Select number of guests" />
                                    </SelectTrigger>
                                    <SelectContent>
                                        {guestOptions.map(option => (
                                            <SelectItem
                                                key={option.value}
                                                value={option.value}>
                                                {option.label}
                                            </SelectItem>
                                        ))}
                                    </SelectContent>
                                </Select>
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />

                <FormField
                    control={form.control}
                    name="date"
                    render={({ field }) => (
                        <FormItem>
                            <FormControl>
                                <Input
                                    placeholder="Date and Time"
                                    className="h-14 bg-white px-6 shadow-none"
                                    {...field}
                                />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />

                <FormField
                    control={form.control}
                    name="addons"
                    render={({ field }) => (
                        <FormItem>
                            <FormControl>
                                <Input
                                    placeholder="Add-ons (optional)"
                                    className="h-14 bg-white px-6 shadow-none"
                                    {...field}
                                />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />

                <Button
                    type="submit"
                    className="mt-4"
                    showArrow>
                    Reserve for free
                </Button>
            </form>
        </Form>
    )
}
