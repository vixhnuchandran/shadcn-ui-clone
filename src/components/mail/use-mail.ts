import { atom, useAtom } from "jotai"

import { MyMail, mails } from "@/components/mail/data"

type Config = {
    selected: MyMail["id"] | null
}

const configAtom = atom<Config>({
    selected: mails[0].id,
})

export function useMail() {
    return useAtom(configAtom)
}
