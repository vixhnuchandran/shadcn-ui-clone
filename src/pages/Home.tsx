import { useState } from "react"

import { Mail } from "@/components/mail/Mail"
import { accounts, mails } from "@/components/mail/data"

export default function MailPage() {
    const [defaultLayout] = useState(undefined)
    const [defaultCollapsed] = useState(undefined)

    return (
        <>
            <div className="hidden flex-col md:flex h-full ">
                <Mail
                    accounts={accounts}
                    mails={mails}
                    defaultLayout={defaultLayout}
                    defaultCollapsed={defaultCollapsed}
                    navCollapsedSize={4}
                />
            </div>
        </>
    )
}
