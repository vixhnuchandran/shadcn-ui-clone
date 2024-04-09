"use client"

import DatePickerWithRange from "@/components/Cards/DatePickerWithRange"
import { Card, CardContent } from "@/components/ui/card"
import { Label } from "@/components/ui/label"

export function DatePicker() {
    return (
        <Card className="text-left">
            <CardContent className="pt-6">
                <div className="space-y-2">
                    <Label htmlFor="date" className="shrink-0">
                        Pick a date
                    </Label>
                    <DatePickerWithRange className="[&>button]:w-[260px]" />
                </div>
            </CardContent>
        </Card>
    )
}

export default DatePicker
