import { ComponentProps } from "react"
import { formatDistanceToNow } from "date-fns/formatDistanceToNow"
import { cn } from "@/lib/utils"
import { Badge } from "@/components/ui/badge"
import { ScrollArea } from "@/components/ui/scroll-area"
import { MyMail } from "@/components/mail/data"
import { useMail } from "@/components/mail/use-mail"

interface MailListProps {
    items: MyMail[]
    viewPort?: string
}

export function MailList({ items, viewPort }: MailListProps) {
    const [mail, setMail] = useMail()

    return (
        <ScrollArea className={viewPort === "mobile" ? " h-52" : "h-screen"}>
            <div className="flex flex-col gap-2 p-4 pt-0">
                {items.map(item => (
                    <button
                        key={item.id}
                        className={cn(
                            `flex flex-col items-start ${
                                viewPort === "mobile" ? "gap-0" : "gap-2"
                            } rounded-lg border p-3 text-left text-sm transition-all hover:bg-accent`,
                            mail.selected === item.id && "bg-muted"
                        )}
                        onClick={() =>
                            setMail({
                                ...mail,
                                selected: item.id,
                            })
                        }
                    >
                        <div className="flex w-full flex-col gap-1">
                            <div className="flex items-center">
                                <div className="flex items-center gap-2">
                                    <div className="font-semibold">
                                        {item.name}
                                    </div>
                                    {!item.read && (
                                        <span className="flex h-2 w-2 rounded-full bg-blue-600" />
                                    )}
                                </div>
                                <div
                                    className={cn(
                                        "ml-auto text-xs",
                                        mail.selected === item.id
                                            ? "text-foreground"
                                            : "text-muted-foreground"
                                    )}
                                >
                                    {formatDistanceToNow(new Date(item.date), {
                                        addSuffix: true,
                                    })}
                                </div>
                            </div>
                            <div className="text-xs font-medium">
                                {item.subject}
                            </div>
                        </div>
                        {viewPort !== "mobile" && (
                            <div className="line-clamp-2 text-xs text-muted-foreground">
                                {item.text.substring(0, 300)}
                            </div>
                        )}
                        {viewPort !== "mobile" &&
                            (item.labels.length ? (
                                <div className="flex items-center gap-2">
                                    {item.labels.map(label => (
                                        <Badge
                                            key={label}
                                            variant={getBadgeVariantFromLabel(
                                                label
                                            )}
                                        >
                                            {label}
                                        </Badge>
                                    ))}
                                </div>
                            ) : null)}
                    </button>
                ))}
            </div>
        </ScrollArea>
    )
}

function getBadgeVariantFromLabel(
    label: string
): ComponentProps<typeof Badge>["variant"] {
    if (["work"].includes(label.toLowerCase())) {
        return "default"
    }

    if (["personal"].includes(label.toLowerCase())) {
        return "outline"
    }

    return "secondary"
}
