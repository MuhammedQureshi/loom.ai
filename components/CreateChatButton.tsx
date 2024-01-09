'use client'

import { MessageSquarePlusIcon } from "lucide-react"
import { Button } from "./ui/button"


function CreateChatButton() {
  return (
    <Button variant={'ghost'}>
        <MessageSquarePlusIcon/>
    </Button>
  )
}

export default CreateChatButton