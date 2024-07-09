import { Widget, Input, Button, ScrollArea, Empty, Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger, Textarea, DialogFooter, Checkbox } from "@/components";
import { PenLine, Plus, Search, Trash2 } from "lucide-react";
import { useRef, useState } from "react";

export function Notes() {
  const [addNoteFormOpened, setAddNoteFormOpened] = useState(false)
  const [notes, setNotes] = useState<string[]>(['sample'])
  const newNoteInputRef = useRef(null)
  function add() {
    const text = newNoteInputRef.current.value
    if (text.length > 0)
      setNotes((n) => [...n, text])
    setAddNoteFormOpened(false)
  }
  function edit() { }
  function del(id: string) {

  }


  return (
    <>
      <Widget title="Notes">
        <div className="flex w-full max-w-sm items-center space-x-2">
          <div className="relative w-full">
            <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
            <Input placeholder="Search" className="pl-8" />
          </div>
          <Button onClick={() => setAddNoteFormOpened(true)}>
            <Plus className="h-4 w-4" /> New
          </Button>
        </div>

        {
          notes.length === 0 &&
          <Empty text="Let's add some notes.">
            <Button variant="ghost">
              <Plus className="h-4 w-4" /> Add Note
            </Button>
          </Empty>
        }

        <ScrollArea className="h-40 mt-2">
          {
            notes.map(n => (
              <div key={n} className="flex flex-col border rounded-lg my-2 p-1">
                <div className="flex justify-end items-center">
                  <Button variant="ghost">
                    <PenLine className="h-4 w-4" />
                  </Button>
                  <Button variant="ghost">
                    <Trash2 className="h-4 w-4" />
                  </Button>
                </div>
                <span className="p-2 pt-1">{n}</span>
              </div>
            ))
          }
        </ScrollArea>
      </Widget>

      <Dialog
        open={addNoteFormOpened}
        onOpenChange={setAddNoteFormOpened}
      >
        <DialogContent>
          <div>
            <h4 className="mb-2">New note</h4>
            <Textarea
              ref={newNoteInputRef}
              placeholder="Type your notes here!"
              rows={5}
            />
          </div>
          <div className="flex gap-2 justify-end">
            <Button variant="ghost" onClick={() => setAddNoteFormOpened(false)}>Close</Button>
            <Button onClick={add}>Add</Button>
          </div>
        </DialogContent>
      </Dialog>

    </>
  )
}