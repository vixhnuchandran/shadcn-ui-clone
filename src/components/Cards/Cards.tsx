import { cn } from "@/lib/utils"

import CookieSettings from "@/components/Cards/CookieSettings"
import CreateAccount from "@/components/Cards/CreateAccount"
import DatePicker from "@/components/Cards/DatePicker"
import GitCard from "@/components/Cards/GitCard"
import Notifications from "@/components/Cards/Notifications"
import PaymentMethod from "@/components/Cards/PaymentMethod"
import ReportAnIssue from "@/components/Cards/ReportIssue"
import ShareDocument from "@/components/Cards/ShareDocument"
import TeamMembers from "@/components/Cards/TeamMembers"

function Container({
    className,
    ...props
}: React.HTMLAttributes<HTMLDivElement>) {
    return (
        <div
            className={cn(
                "flex items-center  justify-center [&>div]:w-full",
                className
            )}
            {...props}
        />
    )
}

export default function Cards() {
    return (
        <>
            <div className="border items-start justify-center gap-6 rounded-lg p-4 lg:p-8  md:grid lg:grid-cols-2 xl:grid-cols-3">
                <div className="col-span-2 grid items-start gap-6 lg:col-span-1">
                    <Container>
                        <CreateAccount />
                    </Container>
                    <Container>
                        <PaymentMethod />
                    </Container>
                </div>
                <div className="col-span-2 grid items-start gap-6 lg:col-span-1">
                    <Container>
                        <TeamMembers />
                    </Container>
                    <Container>
                        <ShareDocument />
                    </Container>
                    <Container>
                        <DatePicker />
                    </Container>
                    <Container>
                        <Notifications />
                    </Container>
                </div>
                <div className="col-span-2 grid items-start gap-6 lg:col-span-2 lg:grid-cols-2 xl:col-span-1 xl:grid-cols-1">
                    <Container>
                        <ReportAnIssue />
                    </Container>
                    <Container>
                        <GitCard />
                    </Container>
                    <Container>
                        <CookieSettings />
                    </Container>
                </div>
            </div>
        </>
    )
}
