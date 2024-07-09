import { ScrollArea, Widget } from "@/components";
import { Notes } from "@/widgets";

function App() {
  return (
    <ScrollArea>

      <header className="min-h-40 flex items-center justify-center flex-col">
        <h1>WIDGETS</h1>
        <p>React-Redux Practice Project</p>
      </header>

      <main className="p-4 flex flex-wrap gap-4">
        <Notes />
        <Widget title="Todo">
          hi
        </Widget>
        <Widget title="Notes">
          hi
        </Widget>
        <Widget title="Notes">
          hi
        </Widget>
      </main>

    </ScrollArea>
  );
}

export default App;
